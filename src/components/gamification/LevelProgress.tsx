import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Sparkles } from 'lucide-react';
import { useGamification } from '@/hooks/use-gamification';
import { cn } from '@/lib/utils';

/**
 * Level / XP panel: current level, total points, and progress toward the next level.
 */
const LevelProgress: React.FC<{ className?: string }> = ({ className }) => {
  const { level, totalPoints, pointsIntoLevel, pointsForLevel, pointsToNext, progress } = useGamification();

  return (
    <div className={cn('py-5', className)}>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-bible-gold text-bible-dark flex-shrink-0">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-medium text-muted-foreground">Level {level}</p>
            <p className="text-xs text-muted-foreground">{totalPoints.toLocaleString()} pts</p>
          </div>
          <Progress value={progress} className="h-2 mt-2" />
          <p className="text-xs text-muted-foreground mt-1.5">
            {pointsToNext.toLocaleString()} pts to Level {level + 1}
            <span className="text-muted-foreground/60"> · {pointsIntoLevel}/{pointsForLevel}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LevelProgress;
