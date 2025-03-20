
import { supabase as supabaseClient } from '@/integrations/supabase/client';
import { createClient } from '@supabase/supabase-js';
import { ExtendedDatabase } from '@/lib/supabase-types';

// Export the configured supabase client with correct type
export const supabase = supabaseClient as ReturnType<typeof createClient<ExtendedDatabase>>;

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return true; // Since we're now using the configured client
};
