
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

export const useAuthOperations = () => {
  const { toast } = useToast();

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

  return {
    signIn,
    signInWithGoogle,
    signUp,
    signOut
  };
};
