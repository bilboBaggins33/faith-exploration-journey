
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ChapterHeaderProps {
  chapterNumber: number;
  title: string;
  isCompleted: boolean;
  score: number;
}

const ChapterHeader: React.FC<ChapterHeaderProps> = ({
  chapterNumber,
  title,
  isCompleted,
  score
}) => {
  const getScoreColor = (score: number) => {
    const percentage = score * 10; // Assuming score is out of 10
    
    if (percentage < 50) {
      return 'bg-red-500 text-white';
    } else if (percentage < 100) {
      return 'bg-orange-500 text-white';
    } else {
      return 'bg-green-500 text-white';
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between items-start">
        <Badge variant="outline">Chapter {chapterNumber}</Badge>
        {isCompleted && (
          <Badge className={getScoreColor(score)}>
            {Math.round(score * 10) / 10} points
          </Badge>
        )}
      </div>
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
  );
};

export default ChapterHeader;
