
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface BookProgressProps {
  completionPercentage: number;
  averageScore: number;
}

const BookProgress: React.FC<BookProgressProps> = ({ 
  completionPercentage, 
  averageScore 
}) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Completion</span>
          <span className="text-sm font-medium">{completionPercentage}%</span>
        </div>
        <Progress value={completionPercentage} className="h-2" />
      </div>
      
      <div className="flex items-center justify-between">
        <span>Average Score</span>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{averageScore}</span>
        </div>
      </div>
    </div>
  );
};

export default BookProgress;
