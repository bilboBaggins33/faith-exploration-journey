
import { ExtendedDatabase } from '@/lib/supabase-types';
import '@supabase/supabase-js';

declare module '@supabase/supabase-js' {
  export interface Database extends ExtendedDatabase {}
}

// This makes our extended types available to the Supabase client
declare global {
  namespace Supabase {
    interface Database extends ExtendedDatabase {}
  }
}
