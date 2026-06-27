
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { ensureUserRecords } from '@/lib/ensure-user-records';
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

      // Bootstrap the per-user rows (profile + progress). When a session exists
      // immediately (email confirmation disabled) this runs under the user's
      // auth; otherwise the auth-state listener will bootstrap on first sign-in.
      if (data.user && data.session) {
        await ensureUserRecords(data.user);
      }

      toast({
        title: "Account created!",
        description: "Welcome to Bible Quest.",
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

  const createSubscription = async (): Promise<string | null> => {
    try {
      const { data, error } = await supabase.functions.invoke('create-subscription');
      
      if (error) {
        console.error('Error creating subscription:', error);
        toast({
          title: "Subscription error",
          description: "Failed to create subscription. Please try again.",
          variant: "destructive",
        });
        return null;
      }
      
      return data.url;
    } catch (error: any) {
      console.error('Create subscription error:', error.message);
      toast({
        title: "Subscription error",
        description: error.message || "An error occurred while creating subscription",
        variant: "destructive",
      });
      return null;
    }
  };

  const createBillingPortal = async (): Promise<string | null> => {
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');

      if (error) {
        toast({
          title: "Billing portal error",
          description: "Could not open the billing portal. Please try again.",
          variant: "destructive",
        });
        return null;
      }

      return data.url;
    } catch (error: any) {
      toast({
        title: "Billing portal error",
        description: error.message || "An error occurred while opening the billing portal",
        variant: "destructive",
      });
      return null;
    }
  };

  const checkSubscription = async (): Promise<boolean> => {
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription');
      
      if (error) {
        console.error('Error checking subscription:', error);
        return false;
      }
      
      return data.subscribed;
    } catch (error: any) {
      console.error('Check subscription error:', error.message);
      return false;
    }
  };

  return {
    signIn,
    signInWithGoogle,
    signUp,
    signOut,
    createSubscription,
    createBillingPortal,
    checkSubscription
  };
};
