
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
  
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
      <BookCardHeader 
        title={book.title}
        author={book.author}
        category={book.category}
        coverImage={book.coverImage}
      />
      
      <CardContent className="flex-grow pt-4 px-3 sm:px-4">
        <BookCardProgress 
          completionPercentage={completionPercentage}
          averageScore={averageScore}
        />
      </CardContent>
      
      <CardFooter className="pt-0 pb-3 px-3 sm:px-4">
        <Link to={`/theology/${book.id}`} className="w-full">
          <Button size={isMobile ? "sm" : "default"} className="w-full flex items-center justify-center gap-1 sm:gap-2">
            <BookText className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">Explore</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
