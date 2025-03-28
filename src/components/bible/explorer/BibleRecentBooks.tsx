
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getBookImage } from '@/data/bible/book-images';
import { BibleBook } from '@/data/bible/types';

interface BibleRecentBooksProps {
  recentlyReadBooks: BibleBook[];
  getRecentChapter: (bookId: string) => number;
  navigateToChapter: (bookId: string, chapter: number) => void;
}

const BibleRecentBooks: React.FC<BibleRecentBooksProps> = ({
  recentlyReadBooks,
  getRecentChapter,
  navigateToChapter,
}) => {
  if (recentlyReadBooks.length === 0) {
    return (
      <p className="text-gray-500">
        Start reading the Bible to see your recent books here.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recentlyReadBooks.slice(0, 3).map(book => {
        const recentChapter = getRecentChapter(book.id);
        return (
          <motion.div
            key={book.id}
            whileHover={{ y: -5 }}
            className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col cursor-pointer"
            onClick={() => navigateToChapter(book.id, recentChapter)}
          >
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src={getBookImage(book.id)} 
                alt={`${book.name} book cover`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </AspectRatio>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">{book.name}</h3>
                <p className="text-xs text-gray-500">Chapter {recentChapter}</p>
              </div>
              <Button variant="ghost" size="icon">
                <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BibleRecentBooks;
