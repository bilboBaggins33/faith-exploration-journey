
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Star } from 'lucide-react';

interface BookCardProgressProps {
  completionPercentage: number;
  averageScore: number;
}

const BookCardProgress: React.FC<BookCardProgressProps> = ({
  completionPercentage,
  averageScore
}) => {
  return (
    <div className="space-y-3">
      <div>
        <div className="flex justify-between mb-1 text-xs sm:text-sm">
          <span>Chapters</span>
          <span>{completionPercentage}%</span>
        </div>
        <Progress value={completionPercentage} className="h-1.5 sm:h-2" />
      </div>
      
      {averageScore > 0 && (
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span>Average Score</span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
            <span>{averageScore}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCardProgress;
