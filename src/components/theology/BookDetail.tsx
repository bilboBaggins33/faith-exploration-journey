
import React from 'react';
import { TheologyBook } from '@/data/theology/types';
import BookCover from './bookDetail/BookCover';
import BookInfo from './bookDetail/BookInfo';
import BookProgress from './bookDetail/BookProgress';

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
        <BookCover 
          coverImage={book.coverImage} 
          title={book.title} 
        />
      </div>
      
      <div className="md:col-span-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <BookInfo 
            title={book.title}
            author={book.author}
            year={book.year}
            category={book.category}
            chaptersCount={book.chapters}
            description={book.description}
          />
          
          <BookProgress 
            completionPercentage={bookProgress}
            averageScore={bookAverageScore}
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
