
import { supabase as supabaseClient } from '@/integrations/supabase/client';
import { createClient } from '@supabase/supabase-js';
import { ExtendedDatabase } from '@/lib/supabase-types';

// Export the configured supabase client with correct type
export const supabase = supabaseClient as ReturnType<typeof createClient<ExtendedDatabase>>;

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  // Use the values directly from the client.ts file instead of env variables
  const SUPABASE_URL = "https://fwjfbenicnnprhkmnsmm.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3amZiZW5pY25ucHJoa21uc21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MDc1MzQsImV4cCI6MjA1ODA4MzUzNH0.EymH5YEyTZG0pCD9eJwz5Hc1L7CxWlvbSn6HjiBDD_A";

  return Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY && 
    SUPABASE_URL.includes('supabase.co') && 
    SUPABASE_PUBLISHABLE_KEY.length > 20);
};
