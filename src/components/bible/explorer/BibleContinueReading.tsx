
import React from 'react';
import { BibleBook } from '@/data/bible/types';
import BibleRecentBooks from './BibleRecentBooks';

interface BibleContinueReadingProps {
  recentlyReadBooks: BibleBook[];
  getRecentChapter: (bookId: string) => number;
  navigateToChapter: (bookId: string, chapter: number) => void;
}

const BibleContinueReading: React.FC<BibleContinueReadingProps> = ({
  recentlyReadBooks,
  getRecentChapter,
  navigateToChapter
}) => {
  return (
    <div className="glass-card p-5 rounded-xl mb-6">
      <h2 className="text-xl font-bold mb-3">Continue Reading</h2>
      <BibleRecentBooks 
        recentlyReadBooks={recentlyReadBooks}
        getRecentChapter={getRecentChapter}
        navigateToChapter={navigateToChapter}
      />
    </div>
  );
};

export default BibleContinueReading;
