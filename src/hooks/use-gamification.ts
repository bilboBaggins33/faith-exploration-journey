import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useTheologyProgress } from '@/hooks/theology/use-theology-progress';
import { getLevelInfo } from '@/lib/gamification';

/**
 * Aggregates the player's gamification state across Bible + theology so it can
 * be surfaced consistently (dashboard, navbar, profile).
 */
export const useGamification = () => {
  const { progress, profile } = useBibleProgress();
  const { progress: theologyProgress } = useTheologyProgress();

  const biblePoints = progress?.total_points || 0;
  const theologyPoints = theologyProgress?.total_points || 0;
  const totalPoints = biblePoints + theologyPoints;
  const streak = profile?.streak || 0;

  const levelInfo = getLevelInfo(totalPoints);

  return {
    totalPoints,
    biblePoints,
    theologyPoints,
    streak,
    ...levelInfo,
  };
};
