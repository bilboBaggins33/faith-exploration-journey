
import React from 'react';
import { Link } from 'react-router-dom';
import { BibleBook } from '@/data/bible/types';
import BibleBookCard from '@/components/bible/BibleBookCard';

interface RecentBooksSectionProps {
  books: BibleBook[];
  title?: string;
  emptyMessage?: string;
}

const RecentBooksSection = ({
  books = [],
  title = "Recently Read",
  emptyMessage = "No recently read books yet. Start exploring!"
}: RecentBooksSectionProps) => {
  if (!books || books.length === 0) {
    return (
      <div className="p-4 text-center">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }
  
  return (
    <div className="p-4">
      <h3 className="font-medium text-lg mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {books.map((book) => (
          <Link to={`/bible/${book.id}`} key={book.id}>
            <div className="h-full">
              <BibleBookCard 
                bookId={book.id}
                name={book.name}
                testament={book.testament}
                chapters={book.chapters}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentBooksSection;
