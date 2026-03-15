
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
    <div className="p-4">
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {bookChapters.map(chapter => {
          const { isCompleted, score } = getChapterStatus(bookId, chapter);
          const isFirstChapter = chapter === 1;
          const challengeData = getBibleChallengeByBookAndChapter(bookId, chapter);
          
          return (
            <div key={chapter} className="w-full aspect-square">
              <BibleChapterCard
                bookId={bookId}
                chapter={chapter}
                title={challengeData?.title}
                isCompleted={isCompleted}
                score={score}
                maxScore={10}
                isUnlocked={isFirstChapter || (user ? true : false)} // First chapter is always unlocked
                onCardClick={(bookId, chapter) => navigateToChapter(bookId, chapter)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChaptersGrid;
