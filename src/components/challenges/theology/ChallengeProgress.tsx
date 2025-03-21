
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <Badge variant="outline">
          Question {currentQuestion + 1} of {totalQuestions}
        </Badge>
        <Badge variant="secondary">
          {difficulty} • {points} points
        </Badge>
      </div>
      <Progress 
        value={(currentQuestion / totalQuestions) * 100} 
        className="h-2"
      />
    </div>
  );
};

export default ChallengeProgress;
