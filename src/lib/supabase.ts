
import { supabase as supabaseClient } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { createClient } from '@supabase/supabase-js';

// Export the configured supabase client with correct type
export const supabase = supabaseClient as ReturnType<typeof createClient<Database>>;

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return true; // Since we're now using the configured client
};
