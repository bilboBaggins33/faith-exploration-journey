import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Sparkles } from 'lucide-react';
import { useGamification } from '@/hooks/use-gamification';

/**
 * Full Level / XP card: shows the current level, total points and progress
 * toward the next level. Used on the dashboard and profile.
 */
const LevelProgress: React.FC<{ className?: string }> = ({ className }) => {
  const { level, totalPoints, pointsIntoLevel, pointsForLevel, pointsToNext, progress } = useGamification();

  return (
    <Card className={`border-0 shadow-lg overflow-hidden ${className || ''}`}>
      <CardContent className="pt-5 pb-5">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-bible-gold to-amber-500 shadow-md shadow-amber-500/20 flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
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
      </CardContent>
    </Card>
  );
};

export default LevelProgress;
