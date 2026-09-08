import React from 'react';
import { TheologyBook } from '@/data/theology/types';
import BookCard from './BookCard';
import type { BookStars } from '@/hooks/bible/bible-progress-utils';

interface BookListProps {
  books: TheologyBook[];
  getBookProgress: (bookId: string) => number;
  getBookStars?: (bookId: string) => BookStars;
}

const BookList: React.FC<BookListProps> = ({
  books,
  getBookProgress,
  getBookStars,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {books.map((book: TheologyBook) => (
        <BookCard
          key={book.id}
          book={book}
          completionPercentage={getBookProgress(book.id)}
          stars={getBookStars?.(book.id)}
        />
      ))}
    </div>
  );
};

export default BookList;
