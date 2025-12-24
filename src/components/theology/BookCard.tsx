
import React from 'react';
import { Link } from 'react-router-dom';
import { TheologyBook } from '@/data/theology/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookText } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import BookCardHeader from './bookCard/BookCardHeader';
import BookCardProgress from './bookCard/BookCardProgress';

interface BookCardProps {
  book: TheologyBook;
  completionPercentage: number;
  averageScore: number;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  completionPercentage,
  averageScore
}) => {
  const isMobile = useIsMobile();

  // Generate thumbnail URL (using smaller version of the image)
  const thumbnailImage = book.coverImage.replace('.jpg', '-thumb.jpg');

  return (
    <Link to={`/theology/${book.id}/1`} className="block">
      <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-0 cursor-pointer">
        <BookCardHeader
          title={book.title}
          author={book.author}
          category={book.category}
          coverImage={book.coverImage}
          thumbnailImage={thumbnailImage}
        />

        <CardContent className="flex-grow pt-4 px-3 sm:px-4 pb-3 bg-card">
          <BookCardProgress
            completionPercentage={completionPercentage}
            averageScore={averageScore}
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
