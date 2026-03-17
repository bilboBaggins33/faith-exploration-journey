
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import BibleChapterCard from '@/components/bible/BibleChapterCard';
import { bibleBooks } from '@/data/bible';
import { getBibleChallengeByBookAndChapter } from '@/data/bible/challenges';

interface ChaptersGridProps {
  bookId: string | null;
}

const ChaptersGrid = ({ bookId }: ChaptersGridProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getChapterStatus, getChapterDifficultyScores } = useBibleProgress();
  if (!bookId) return null;
  
  const book = bibleBooks.find(book => book.id === bookId);
  if (!book) return null;
  
  const bookChapters = Array.from({ length: book.chapters }, (_, i) => i + 1);
  
  const navigateToChapter = (chapterBookId: string, chapter: number) => {
    navigate(`/bible/${chapterBookId}/${chapter}`);
  };

  return (
    <div className="p-3 sm:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
        {bookChapters.map(chapter => {
          const { isCompleted } = getChapterStatus(bookId, chapter);
          const scores = getChapterDifficultyScores(bookId, chapter);
          const isFirstChapter = chapter === 1;
          const challengeData = getBibleChallengeByBookAndChapter(bookId, chapter);
          
          return (
            <div key={chapter} className="w-full">
              <BibleChapterCard
                bookId={bookId}
                chapter={chapter}
                title={challengeData?.title}
                isCompleted={isCompleted}
                scores={scores}
                maxScore={10}
                isUnlocked={isFirstChapter || (user ? true : false)}
                onCardClick={(bookId, chapter, difficulty) => navigateToChapter(bookId, chapter)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChaptersGrid;
