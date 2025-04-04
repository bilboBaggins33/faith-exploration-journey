
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BibleBookCard from '@/components/bible/BibleBookCard';
import { bibleBooks } from '@/data/bible';
import { BibleBook } from '@/data/bible/types';

const RecentBooksSection = ({ recentBooks = [] }: { recentBooks?: BibleBook[] }) => {
  // If no recent books provided, use some default ones
  const booksToShow = recentBooks.length > 0 ? recentBooks : bibleBooks.slice(0, 3);
  
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Recently Read</h3>
          <Button variant="link" asChild>
            <Link to="/bible" className="flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {booksToShow.map(book => (
            <Link key={book.id} to={`/bible/${book.id}`}>
              <BibleBookCard book={book} />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentBooksSection;
