
import React from 'react';
import { Link } from 'react-router-dom';
import { TheologyBook } from '@/data/theology/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowRight, BookText, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
    <Card className="flex flex-col overflow-hidden">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={2/3} className="bg-muted">
          <img 
            src={book.coverImage} 
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
            <Badge className="self-start mb-1" variant="outline">{book.category}</Badge>
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white line-clamp-2">{book.title}</h3>
            <p className="text-white/80 text-xs sm:text-sm truncate">by {book.author}</p>
          </div>
        </AspectRatio>
      </div>
      
      <CardContent className="flex-grow pt-4 px-3 sm:px-4">
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1 text-xs sm:text-sm">
              <span>Completion</span>
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
