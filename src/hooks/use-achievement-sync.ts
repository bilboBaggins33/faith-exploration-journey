import { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { UserAchievement } from '@/hooks/use-achievements';

const celebrate = () => {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.7 },
    colors: ['#E6C988', '#6AADDF', '#4A7AA8', '#ffffff'],
  });
};

/**
 * Persists unlocked achievements (with timestamps) and celebrates new unlocks.
 *
 * On first load it silently backfills any already-unlocked achievements so we
 * don't spam the user with toasts for past progress. After that baseline is
 * established, genuinely new unlocks trigger a toast + confetti.
 *
 * Returns a map of achievementId -> ISO unlock timestamp for sorting.
 */
export const useAchievementSync = (achievements: UserAchievement[]) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [unlockedAt, setUnlockedAt] = useState<Record<string, string>>({});
  const knownRef = useRef<Set<string>>(new Set());
  const dbLoadedRef = useRef(false);
  const baselineSetRef = useRef(false);

  // Load already-recorded unlocks for this user.
  useEffect(() => {
    if (!user) {
      dbLoadedRef.current = false;
      baselineSetRef.current = false;
      knownRef.current = new Set();
      setUnlockedAt({});
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
          knownRef.current.add(row.achievement_id);
        });
        setUnlockedAt(map);
        dbLoadedRef.current = true;
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  // Detect & persist new unlocks once achievements are computed.
  useEffect(() => {
    if (!user || !dbLoadedRef.current) return;

    const unlocked = achievements.filter((a) => a.isUnlocked);
    if (unlocked.length === 0 && !baselineSetRef.current) {
      baselineSetRef.current = true;
      return;
    }

    const newlyUnlocked = unlocked.filter((a) => !knownRef.current.has(a.id));
    if (newlyUnlocked.length === 0) {
      baselineSetRef.current = true;
      return;
    }

    // Persist the new unlocks.
    const now = new Date().toISOString();
    const rows = newlyUnlocked.map((a) => ({
      user_id: user.id,
      achievement_id: a.id,
      unlocked_at: now,
    }));
    supabase
      .from('user_achievements')
      .upsert(rows, { onConflict: 'user_id,achievement_id', ignoreDuplicates: true })
      .then(() => undefined);

    newlyUnlocked.forEach((a) => knownRef.current.add(a.id));
    setUnlockedAt((prev) => {
      const next = { ...prev };
      newlyUnlocked.forEach((a) => {
        next[a.id] = now;
      });
      return next;
    });

    // Only celebrate after the baseline (existing progress) has been recorded.
    if (baselineSetRef.current) {
      if (newlyUnlocked.length === 1) {
        toast({
          title: 'Achievement Unlocked!',
          description: `${newlyUnlocked[0].title} · +${newlyUnlocked[0].points} pts`,
        });
      } else {
        toast({
          title: `${newlyUnlocked.length} Achievements Unlocked!`,
          description: newlyUnlocked.map((a) => a.title).join(', '),
        });
      }
      celebrate();
    }

    baselineSetRef.current = true;
  }, [achievements, user, toast]);

  return { unlockedAt };
};
