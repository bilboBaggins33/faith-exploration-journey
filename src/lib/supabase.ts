
import { supabase as supabaseClient } from '@/integrations/supabase/client';
import { createClient } from '@supabase/supabase-js';
import { ExtendedDatabase } from '@/lib/supabase-types';

// Export the configured supabase client with correct type
export const supabase = supabaseClient as ReturnType<typeof createClient<ExtendedDatabase>>;

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  // In Vite, environment variables are accessed through import.meta.env
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  console.log('Checking Supabase config:', { 
    isUrlDefined: !!url, 
    isKeyDefined: !!key,
    urlValid: url && url.includes('supabase.co'), 
    keyValid: key && key.length > 20 
  });
  
  return Boolean(url && key && url.includes('supabase.co') && key.length > 20);
};
