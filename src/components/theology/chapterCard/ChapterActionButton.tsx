
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle } from 'lucide-react';

interface ChapterActionButtonProps {
  bookId: string;
  chapter: number;
  isCompleted: boolean;
}

const ChapterActionButton: React.FC<ChapterActionButtonProps> = ({
  bookId,
  chapter,
  isCompleted
}) => {
  return (
    <Link to={`/theology/${bookId}/${chapter}`}>
      <Button className="flex items-center gap-2 w-full">
        {isCompleted ? (
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
  );
};

export default ChapterActionButton;
