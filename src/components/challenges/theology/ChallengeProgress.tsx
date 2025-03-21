
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ChallengeProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  difficulty: string;
  points: number;
}

const ChallengeProgress = ({
  currentQuestion,
  totalQuestions,
  difficulty,
  points
}: ChallengeProgressProps) => {
  const getDifficultyColor = () => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-black';
      case 'hard':
        return 'bg-red-500 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getProgressColor = () => {
    const percentage = (currentQuestion / totalQuestions) * 100;
    
    if (percentage < 50) {
      return 'bg-red-500';
    } else if (percentage < 100) {
      return 'bg-orange-500';
    } else {
      return 'bg-green-500';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <Badge variant="outline" className="animate-pulse">
          Question {currentQuestion + 1} of {totalQuestions}
        </Badge>
        <Badge 
          variant="secondary" 
          className={cn("font-medium", getDifficultyColor())}
        >
          {difficulty} • {points} points
        </Badge>
      </div>
      <Progress 
        value={(currentQuestion / totalQuestions) * 100} 
        className={cn("h-2", getProgressColor())}
      />
    </div>
  );
};

export default ChallengeProgress;
