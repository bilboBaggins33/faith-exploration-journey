
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Trophy, Star, CalendarDays, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAchievements } from '@/hooks/use-achievements';

const AchievementsCard = () => {
  const navigate = useNavigate();
  const { achievements, getRecentAchievements } = useAchievements();

  // Get up to 3 achievements to show
  // Priority: 1. Recently unlocked, 2. Closest to completion (in progress), 3. Just the first few
  const unlocked = getRecentAchievements();
  const inProgress = achievements
    .filter(a => !a.isUnlocked && a.progress > 0)
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 3 - unlocked.length);

  const displayAchievements = [...unlocked, ...inProgress].slice(0, 3);

  // If we still don't have enough, fill with initial/easy locked ones
  if (displayAchievements.length < 3) {
    const locked = achievements
      .filter(a => !a.isUnlocked && a.progress === 0)
      .slice(0, 3 - displayAchievements.length);
    displayAchievements.push(...locked);
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-bible-blue" />
          Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayAchievements.map(achievement => (
            <div
              key={achievement.id}
              className={`flex items-center space-x-3 p-3 border rounded-lg transition-all duration-200 hover:shadow-sm ${achievement.isUnlocked
                ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200/60'
                : 'bg-gray-50/80 border-gray-100 opacity-80'
                }`}
            >
              <div className={`p-2.5 rounded-xl ${achievement.isUnlocked ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-md shadow-amber-400/20' : 'bg-gray-200'
                }`}>
                <achievement.icon className={`h-5 w-5 ${achievement.isUnlocked ? 'text-white' : 'text-gray-500'
                  }`} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium text-sm">{achievement.title}</h3>
                  {achievement.isUnlocked && (
                    <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">Unlocked!</span>
                  )}
                </div>
                <p className="text-xs text-gray-500">{achievement.description}</p>

                {!achievement.isUnlocked && (
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div
                      className="bg-bible-blue h-1.5 rounded-full"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {displayAchievements.length === 0 && (
            <div className="text-center py-4 text-gray-500 text-sm">
              Start reading to unlock achievements!
            </div>
          )}
        </div>

        <Button
          variant="outline"
          className="w-full mt-4 border-bible-blue/20 text-bible-blue hover:bg-bible-blue/5"
          onClick={() => navigate('/achievements')}
        >
          View All Achievements
        </Button>
      </CardContent>
    </Card>
  );
};

export default AchievementsCard;
