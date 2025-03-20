
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
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function getInitialSession() {
      setIsLoading(true);
      
      try {
        if (!isSupabaseConfigured()) {
          console.log('Supabase not configured, skipping auth initialization');
          setIsLoading(false);
          return;
        }
        
        const { data } = await supabase.auth.getSession();
        setSession(data.session);
        setUser(data.session?.user ?? null);
        
        const { data: authListener } = supabase.auth.onAuthStateChange(
          async (_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
          }
        );
        
        return () => {
          authListener.subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Error getting session:', error);
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
      
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      
    } catch (error: any) {
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
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/profile`,
        },
      });
      
      if (error) throw error;
      
    } catch (error: any) {
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
      
      const { error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });
      
      if (error) throw error;
      
      // Create profile entry
      await supabase.from('user_profiles').insert({
        user_id: (await supabase.auth.getUser()).data.user?.id,
        full_name: name,
        streak: 0,
        points: 0,
        last_active: new Date().toISOString().split('T')[0],
      });
      
      // Create bible progress entry
      await supabase.from('bible_progress').insert({
        user_id: (await supabase.auth.getUser()).data.user?.id,
        challenges_completed: [],
        verses_memorized: [],
        total_points: 0,
        books_progress: {},
      });
      
      toast({
        title: "Account created!",
        description: "Please verify your email address to complete registration",
      });
      
    } catch (error: any) {
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
