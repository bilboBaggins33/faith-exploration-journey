
import { supabase as supabaseClient } from '@/integrations/supabase/client';
import { createClient } from '@supabase/supabase-js';
import { ExtendedDatabase } from '@/lib/supabase-types';

// Export the configured supabase client with correct type
export const supabase = supabaseClient as ReturnType<typeof createClient<ExtendedDatabase>>;

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  const url = process.env.SUPABASE_URL || import.meta.env?.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY || import.meta.env?.VITE_SUPABASE_ANON_KEY;
  return Boolean(url && key && url.includes('supabase.co') && key.length > 20);
};
