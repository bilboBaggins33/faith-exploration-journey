
import React from 'react';
import { TheologyBook } from '@/data/theology/types';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Star } from 'lucide-react';

interface BookDetailProps {
  book: TheologyBook;
  bookProgress: number;
  bookAverageScore: number;
}

const BookDetail: React.FC<BookDetailProps> = ({ 
  book, 
  bookProgress, 
  bookAverageScore 
}) => {
  return (
    <div className="mb-8 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <AspectRatio ratio={2/3} className="bg-muted">
            <img 
              src={book.coverImage} 
              alt={book.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </AspectRatio>
        </div>
      </div>
      
      <div className="md:col-span-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Badge variant="outline" className="mb-3">{book.category}</Badge>
              <h2 className="text-2xl font-bold mb-1">{book.title}</h2>
              <p className="text-gray-600">by {book.author}, {book.year}</p>
            </div>
            <Badge className="bg-blue-500">{book.chapters} chapters</Badge>
          </div>
          
          <p className="text-gray-700 mb-6">{book.description}</p>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Completion</span>
                <span className="text-sm font-medium">{bookProgress}%</span>
              </div>
              <Progress value={bookProgress} className="h-2" />
            </div>
            
            <div className="flex items-center justify-between">
              <span>Average Score</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{bookAverageScore}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
