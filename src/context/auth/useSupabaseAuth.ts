
import { useState, useEffect } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

export const useSupabaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Get initial session and set up auth listener
  useEffect(() => {
    async function getInitialSession() {
      setIsLoading(true);
      
      try {
        // Check Supabase configuration
        const isConfigured = isSupabaseConfigured();
        console.log('Supabase configured:', isConfigured);
        
        if (!isConfigured) {
          console.error('Supabase not configured properly, auth will not work');
          setIsLoading(false);
          return;
        }
        
        // Set up the auth listener before checking the session
        const { data: authListener } = supabase.auth.onAuthStateChange(
          async (_event, session) => {
            console.log('Auth state changed:', _event, session?.user?.id);
            setSession(session);
            setUser(session?.user ?? null);
          }
        );
        
        // Get the session
        const { data } = await supabase.auth.getSession();
        console.log('Initial session check:', data.session ? 'Found session' : 'No session found');
        
        setSession(data.session);
        setUser(data.session?.user ?? null);
        
        return () => {
          authListener.subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    getInitialSession();
  }, []);

  const refreshUserProfile = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setSession(session);
        setUser(session.user);
      }
    } catch (error) {
      console.error('Error refreshing user profile:', error);
    }
  };

  const getUserAvatar = () => {
    if (!user) return null;
    return user.user_metadata?.avatar_url || null;
  };

  return {
    user,
    session,
    isLoading,
    refreshUserProfile,
    getUserAvatar
  };
};
