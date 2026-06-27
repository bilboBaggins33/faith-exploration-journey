
import { useState, useEffect } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { ensureUserRecords } from '@/lib/ensure-user-records';

export const useSupabaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get initial session and set up auth listener
  useEffect(() => {
    if (!isSupabaseConfigured()) {
      console.error('Supabase not configured properly, auth will not work');
      setIsLoading(false);
      return;
    }

    // Set up the auth listener before checking the session so we never miss
    // an event. The cleanup is returned from useEffect (not from an inner async
    // function) so the subscription is actually torn down on unmount.
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, nextSession) => {
        setSession(nextSession);
        setUser(nextSession?.user ?? null);

        // Bootstrap per-user rows for every auth path (email + OAuth).
        if (
          (event === 'SIGNED_IN' || event === 'USER_UPDATED') &&
          nextSession?.user
        ) {
          void ensureUserRecords(nextSession.user);
        }
      }
    );

    supabase.auth
      .getSession()
      .then(({ data }) => {
        setSession(data.session);
        setUser(data.session?.user ?? null);
        if (data.session?.user) {
          void ensureUserRecords(data.session.user);
        }
      })
      .catch((error) => {
        console.error('Error initializing auth:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      authListener.subscription.unsubscribe();
    };
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
