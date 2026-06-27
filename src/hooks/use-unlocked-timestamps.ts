import { useEffect, useState } from 'react';
import { useAuth } from '@/context/auth';
import { supabase } from '@/lib/supabase';

/**
 * Read-only map of achievementId -> ISO unlock timestamp for the current user.
 * Used to sort "recent" achievements by their actual unlock date.
 */
export const useUnlockedTimestamps = () => {
  const { user } = useAuth();
  const [timestamps, setTimestamps] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!user) {
      setTimestamps({});
      return;
    }

    let cancelled = false;
    supabase
      .from('user_achievements')
      .select('achievement_id, unlocked_at')
      .eq('user_id', user.id)
      .then(({ data }) => {
        if (cancelled) return;
        const map: Record<string, string> = {};
        (data || []).forEach((row) => {
          map[row.achievement_id] = row.unlocked_at;
        });
        setTimestamps(map);
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  return timestamps;
};
