
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BibleChapterCard from '@/components/bible/BibleChapterCard';

interface ChaptersGridProps {
  bookId: string;
  bookChapters: number[];
  getChapterStatus: (bookId: string, chapter: number) => {
    isCompleted: boolean;
    score: number;
    maxScore: number;
  };
}

const ChaptersGrid = ({ bookId, bookChapters, getChapterStatus }: ChaptersGridProps) => {
  const navigate = useNavigate();

  const navigateToChapter = (bookId: string, chapter: number) => {
    navigate(`/challenge/bible/${bookId}/${chapter}`);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {bookChapters.map(chapter => {
          const { isCompleted, score, maxScore } = getChapterStatus(bookId, chapter);
          
          return (
            <div key={chapter} className="w-full aspect-square">
              <BibleChapterCard
                bookId={bookId}
                chapter={chapter}
                isCompleted={isCompleted}
                score={score}
                maxScore={maxScore}
                onClick={() => navigateToChapter(bookId, chapter)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChaptersGrid;
