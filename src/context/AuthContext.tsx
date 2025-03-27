
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshUserProfile: () => Promise<void>;
  getUserAvatar: () => string | null;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

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

  const signIn = async (email: string, password: string) => {
    try {
      if (!isSupabaseConfigured()) {
        toast({
          title: "Authentication unavailable",
          description: "Supabase is not configured properly. Please set up your environment variables.",
          variant: "destructive",
        });
        return;
      }
      
      const { error, data } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      
      console.log('Sign in successful:', data.user?.id);
      
    } catch (error: any) {
      console.error('Sign in error:', error.message);
      toast({
        title: "Login failed",
        description: error.message || "An error occurred during login",
        variant: "destructive",
      });
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      if (!isSupabaseConfigured()) {
        toast({
          title: "Authentication unavailable",
          description: "Supabase is not configured properly. Please set up your environment variables.",
          variant: "destructive",
        });
        return;
      }
      
      console.log('Initiating Google sign-in...');
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/profile`,
        },
      });
      
      console.log('Google sign-in result:', { data, error });
      
      if (error) throw error;
      
    } catch (error: any) {
      console.error('Google sign-in error:', error.message);
      toast({
        title: "Google login failed",
        description: error.message || "An error occurred during Google login",
        variant: "destructive",
      });
      throw error;
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      if (!isSupabaseConfigured()) {
        toast({
          title: "Authentication unavailable",
          description: "Supabase is not configured properly. Please set up your environment variables.",
          variant: "destructive",
        });
        return;
      }
      
      const { error, data } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });
      
      if (error) throw error;
      
      console.log('Sign up successful, creating profile for user:', data.user?.id);
      
      if (data.user) {
        // Create profile entry
        const { error: profileError } = await supabase.from('user_profiles').insert({
          user_id: data.user.id,
          full_name: name,
          streak: 0,
          points: 0,
          last_active: new Date().toISOString().split('T')[0],
        });
        
        if (profileError) {
          console.error('Error creating profile:', profileError);
          throw profileError;
        }
        
        // Create bible progress entry
        const { error: progressError } = await supabase.from('bible_progress').insert({
          user_id: data.user.id,
          challenges_completed: [],
          verses_memorized: [],
          total_points: 0,
          books_progress: {},
          completed_chapters: [],
          total_chapters_read: 0
        });
        
        if (progressError) {
          console.error('Error creating bible progress:', progressError);
          throw progressError;
        }
      }
      
      toast({
        title: "Account created!",
        description: "Please verify your email address to complete registration",
      });
      
    } catch (error: any) {
      console.error('Sign up error:', error.message);
      toast({
        title: "Registration failed",
        description: error.message || "An error occurred during registration",
        variant: "destructive",
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      if (!isSupabaseConfigured()) {
        toast({
          title: "Authentication unavailable",
          description: "Supabase is not configured properly. Please set up your environment variables.",
          variant: "destructive",
        });
        return;
      }
      
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
    } catch (error: any) {
      toast({
        title: "Sign out failed",
        description: error.message || "An error occurred during sign out",
        variant: "destructive",
      });
    }
  };

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signInWithGoogle,
    signUp,
    signOut,
    refreshUserProfile,
    getUserAvatar,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
