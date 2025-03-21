
import React from 'react';
import { TheologyBook } from '@/data/theology/types';
import BookCard from './BookCard';

interface BookListProps {
  books: TheologyBook[];
  getBookProgress: (bookId: string) => number;
  getBookAverageScore: (bookId: string) => number;
}

const BookList: React.FC<BookListProps> = ({ 
  books, 
  getBookProgress, 
  getBookAverageScore 
}) => {
  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {books.map((book: TheologyBook) => {
        const completionPercentage = getBookProgress(book.id);
        const averageScore = getBookAverageScore(book.id);
        
        return (
          <BookCard 
            key={book.id}
            book={book}
            completionPercentage={completionPercentage}
            averageScore={averageScore}
          />
        );
      })}
    </div>
  );
};

export default BookList;
