import { useAchievements } from '@/hooks/use-achievements';
import { useAchievementSync } from '@/hooks/use-achievement-sync';

/**
 * Invisible, always-mounted watcher that persists newly unlocked achievements
 * and fires the celebration toast + confetti the moment they unlock (e.g. right
 * after completing a challenge), regardless of which page the user is on.
 */
const AchievementWatcher = () => {
  const { achievements } = useAchievements();
  useAchievementSync(achievements);
  return null;
};

export default AchievementWatcher;
