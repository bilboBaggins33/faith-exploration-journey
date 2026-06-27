import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

/**
 * Ensures the three per-user rows (profile + bible/theology progress) exist for
 * the given authenticated user. Runs for every auth path (email + OAuth), so
 * Google sign-ups are bootstrapped exactly like email sign-ups.
 *
 * Uses `ignoreDuplicates` so it never clobbers existing progress.
 */
export const ensureUserRecords = async (user: User): Promise<void> => {
  if (!user?.id) return;

  const userId = user.id;
  const fullName =
    (user.user_metadata?.full_name as string | undefined) ||
    (user.user_metadata?.name as string | undefined) ||
    user.email?.split('@')[0] ||
    'Explorer';
  const today = new Date().toISOString().split('T')[0];

  try {
    await Promise.all([
      supabase.from('user_profiles').upsert(
        {
          user_id: userId,
          full_name: fullName,
          streak: 0,
          points: 0,
          last_active: today,
        },
        { onConflict: 'user_id', ignoreDuplicates: true }
      ),
      supabase.from('bible_progress').upsert(
        {
          user_id: userId,
          challenges_completed: [],
          verses_memorized: [],
          total_points: 0,
          books_progress: {},
          completed_chapters: [],
          total_chapters_read: 0,
        },
        { onConflict: 'user_id', ignoreDuplicates: true }
      ),
      supabase.from('theology_progress').upsert(
        {
          user_id: userId,
          completed_chapters: [],
          books_started: [],
          books_completed: [],
          total_chapters_read: 0,
          total_points: 0,
        },
        { onConflict: 'user_id', ignoreDuplicates: true }
      ),
    ]);
  } catch (error) {
    console.error('Error ensuring user records:', error);
  }
};
