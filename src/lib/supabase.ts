
import { supabase as supabaseClient } from '@/integrations/supabase/client';

// Export the configured supabase client
export const supabase = supabaseClient;

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return true; // Since we're now using the configured client
};
