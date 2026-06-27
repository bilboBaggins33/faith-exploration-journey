
import React from 'react';
import { Button } from '@/components/ui/button';
import { Trophy, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAchievements } from '@/hooks/use-achievements';
import { useUnlockedTimestamps } from '@/hooks/use-unlocked-timestamps';
import DashboardCard from './DashboardCard';

const AchievementsCard = () => {
  const navigate = useNavigate();
  const { achievements, getRecentAchievements } = useAchievements();
  const unlockedAt = useUnlockedTimestamps();

  const unlocked = getRecentAchievements(unlockedAt);
  const inProgress = achievements
    .filter(a => !a.isUnlocked && a.progress > 0)
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 3 - unlocked.length);

  const displayAchievements = [...unlocked, ...inProgress].slice(0, 3);

  if (displayAchievements.length < 3) {
    const locked = achievements
      .filter(a => !a.isUnlocked && a.progress === 0)
      .slice(0, 3 - displayAchievements.length);
    displayAchievements.push(...locked);
  }

  const nextGoal = displayAchievements.find(a => !a.isUnlocked);

  return (
    <DashboardCard
      title="Achievements"
      description={nextGoal ? `Next: ${nextGoal.title}` : undefined}
      icon={<Trophy className="h-4 w-4" />}
    >
      <ul className="space-y-2">
        {displayAchievements.map((achievement) => (
          <li
            key={achievement.id}
            className={`flex gap-3 rounded-xl p-3 ${
              achievement.isUnlocked
                ? 'bg-amber-50/80 border border-amber-100'
                : 'border border-transparent bg-muted/30'
            }`}
          >
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
              achievement.isUnlocked ? 'bg-amber-400 text-white' : 'bg-muted text-muted-foreground'
            }`}>
              {achievement.isUnlocked ? (
                <achievement.icon className="h-4 w-4" />
              ) : (
                <Lock className="h-3.5 w-3.5" />
              )}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-tight">{achievement.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{achievement.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <Button
        variant="outline"
        size="sm"
        className="w-full mt-4"
        onClick={() => navigate('/achievements')}
      >
        All achievements
      </Button>
    </DashboardCard>
  );
};

export default AchievementsCard;
