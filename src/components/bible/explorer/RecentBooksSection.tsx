
import React from 'react';
import { BibleBook } from '@/data/bible/types';
import BibleBookCard from '../BibleBookCard';
import { Separator } from '@/components/ui/separator';

interface RecentBooksSectionProps {
  recentBooks: BibleBook[];
  onBookSelect: (bookId: string) => void;
}

const RecentBooksSection: React.FC<RecentBooksSectionProps> = ({
  recentBooks,
  onBookSelect
}) => {
  if (!recentBooks || recentBooks.length === 0) {
    return (
      <div className="py-4">
        <p className="text-sm text-muted-foreground">
          No recently read books yet. Start exploring to see your reading history here.
        </p>
      </div>
    );
  }

  return (
    <div className="py-4">
      <h3 className="text-sm font-semibold mb-3">Recently Read</h3>
      <div className="space-y-3">
        {recentBooks.map((book) => (
          <div 
            key={book.id} 
            className="cursor-pointer"
            onClick={() => onBookSelect(book.id)}
          >
            <BibleBookCard 
              bookId={book.id}
              bookName={book.name}
              totalChapters={book.chapters}
              progressPercent={0}  // Default to 0 for recently read books
              testament={book.testament}
              onClick={() => onBookSelect(book.id)}
            />
          </div>
        ))}
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default RecentBooksSection;
