
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Flame } from 'lucide-react';

interface StreakCounterProps {
  streak: number;
}

const StreakCounter = ({ streak }: StreakCounterProps) => {
  // Generate streak messages based on count
  const getStreakMessage = () => {
    if (streak === 0) return "Start your reading streak today!";
    if (streak === 1) return "First day of your streak!";
    if (streak < 7) return "Keep it up!";
    if (streak < 30) return "You're on fire!";
    return "Amazing dedication!";
  };

  return (
    <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-orange-100">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Current Streak</h3>
            <p className="text-sm text-gray-600">{getStreakMessage()}</p>
          </div>
          <div className="flex items-center">
            <div className="text-3xl font-bold mr-2">{streak}</div>
            <Flame className="h-6 w-6 text-orange-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakCounter;
