import { supabase } from '@/lib/supabase';

const toDateStr = (d: Date) => d.toISOString().split('T')[0];

export interface LevelInfo {
  level: number;
  pointsIntoLevel: number;
  pointsForLevel: number;
  pointsToNext: number;
  progress: number; // 0-100, progress toward the next level
}

/**
 * Derives a level + progress from a total points value using a gently
 * escalating curve: level N requires 100 * (N-1)^2 points.
 *   - Level 1: 0 pts, Level 2: 100, Level 3: 400, Level 4: 900, ...
 */
export const getLevelInfo = (points: number): LevelInfo => {
  const safePoints = Math.max(0, points || 0);
  const level = Math.floor(Math.sqrt(safePoints / 100)) + 1;
  const floor = 100 * Math.pow(level - 1, 2);
  const ceil = 100 * Math.pow(level, 2);
  const pointsIntoLevel = safePoints - floor;
  const pointsForLevel = ceil - floor;
  const pointsToNext = ceil - safePoints;
  const progress = pointsForLevel > 0 ? Math.min(100, Math.round((pointsIntoLevel / pointsForLevel) * 100)) : 0;

  return { level, pointsIntoLevel, pointsForLevel, pointsToNext, progress };
};

/**
 * Records daily activity and maintains the user's streak. Called whenever a
 * challenge is completed.
 *   - same day as last activity  -> streak unchanged
 *   - exactly one day later       -> streak + 1
 *   - any larger gap              -> streak resets to 1
 *
 * Returns the new streak value.
 */
export const recordActivity = async (userId: string): Promise<number> => {
  if (!userId) return 0;

  try {
    const { data } = await supabase
      .from('user_profiles')
      .select('streak, last_active')
      .eq('user_id', userId)
      .maybeSingle();

    const today = new Date();
    const todayStr = toDateStr(today);
    const yesterday = new Date(today);
    yesterday.setUTCDate(today.getUTCDate() - 1);
    const yesterdayStr = toDateStr(yesterday);

    const lastActive = data?.last_active ? toDateStr(new Date(data.last_active)) : null;

    let newStreak: number;
    if (lastActive === todayStr) {
      newStreak = data?.streak && data.streak > 0 ? data.streak : 1;
    } else if (lastActive === yesterdayStr) {
      newStreak = (data?.streak || 0) + 1;
    } else {
      newStreak = 1;
    }

    await supabase
      .from('user_profiles')
      .update({ streak: newStreak, last_active: todayStr })
      .eq('user_id', userId);

    return newStreak;
  } catch (error) {
    console.error('Error recording activity:', error);
    return 0;
  }
};
