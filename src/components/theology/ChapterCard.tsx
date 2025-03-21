
import React from 'react';
import { Link } from 'react-router-dom';
import { TheologyChapter } from '@/data/theology/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

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
    <Card className="glass-card">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">Chapter {chapter.chapter}</Badge>
          {status.completed && (
            <Badge className={getProgressColor(status.score)}>
              {Math.round((status.score || 0) * 10) / 10} points
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{chapter.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1">
          {chapter.key_themes.map((theme, index) => (
            <Badge key={index} variant="secondary" className="mb-1">
              {theme}
            </Badge>
          ))}
        </div>
        
        {status.completed && (
          <div className="mt-3">
            <Progress 
              value={(status.score / 10) * 100} 
              className={`h-1.5 ${getProgressColor(status.score)}`}
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={`/theology/${chapter.bookId}/${chapter.chapter}`}>
          <Button className="flex items-center gap-2">
            {status.completed ? (
              <>
                <CheckCircle className="h-4 w-4" />
                Review Chapter
              </>
            ) : (
              <>
                <BookOpen className="h-4 w-4" />
                Start Chapter
              </>
            )}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ChapterCard;
