
import React from 'react';
import { Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ResultsScoreProps {
  score: number;
  maxScore: number;
}

const ResultsScore: React.FC<ResultsScoreProps> = ({ score, maxScore }) => {
  // Calculate score percentage
  const scorePercentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
  // Ensure we never exceed 100% due to rounding
  const displayPercentage = Math.min(Math.round(scorePercentage), 100);

  return (
    <div className="flex flex-col items-center mt-4 mb-6">
      <div className="relative w-36 h-36 mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <Trophy className={`h-16 w-16 ${displayPercentage >= 70 ? 'text-yellow-500' : 'text-gray-400'}`} />
        </div>
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-muted-foreground stroke-current"
            strokeWidth="10"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className={`${displayPercentage >= 70 ? 'text-yellow-500' : 'text-primary'} stroke-current`}
            strokeWidth="10"
            strokeLinecap="round"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            strokeDasharray={`${displayPercentage * 2.51327} 251.327`}
            strokeDashoffset="0"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold mb-1">{displayPercentage}%</h3>
        <p className="text-muted-foreground">
          Score: {score.toFixed(1)} / {maxScore} points
        </p>
        <div className="mt-2">
          {displayPercentage >= 90 ? (
            <Badge className="bg-yellow-500">Excellent!</Badge>
          ) : displayPercentage >= 70 ? (
            <Badge className="bg-green-500">Well Done!</Badge>
          ) : displayPercentage >= 50 ? (
            <Badge className="bg-blue-500">Good Effort</Badge>
          ) : (
            <Badge variant="outline">Keep Studying</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsScore;
