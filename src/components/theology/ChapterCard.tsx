
import React from 'react';
import { TheologyChapter } from '@/data/theology/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import ChapterHeader from './chapterCard/ChapterHeader';
import ChapterThemes from './chapterCard/ChapterThemes';
import ChapterActionButton from './chapterCard/ChapterActionButton';

interface ChapterCardProps {
  chapter: TheologyChapter;
  status: {
    completed: boolean;
    score: number;
    completedAt?: string;
  };
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, status }) => {
  const getProgressColor = (score: number) => {
    const percentage = score * 10; // Assuming score is out of 10
    
    if (percentage < 50) {
      return 'bg-red-500';
    } else if (percentage < 100) {
      return 'bg-orange-500';
    } else {
      return 'bg-green-500';
    }
  };

  return (
    <Card className="glass-card hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <ChapterHeader 
          chapterNumber={chapter.chapter}
          title={chapter.title}
          isCompleted={status.completed}
          score={status.score}
        />
      </CardHeader>
      
      <CardContent>
        <ChapterThemes themes={chapter.key_themes} />
        
        {status.completed && (
          <div className="mt-3">
            <Progress 
              value={(status.score / 10) * 100} 
              className={`h-1.5 ${getProgressColor(status.score)}`}
            />
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <ChapterActionButton 
          bookId={chapter.bookId}
          chapter={chapter.chapter}
          isCompleted={status.completed}
        />
      </CardFooter>
    </Card>
  );
};

export default ChapterCard;
