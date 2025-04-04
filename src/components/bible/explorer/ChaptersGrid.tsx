
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import BibleChapterCard from '@/components/bible/BibleChapterCard';
import { bibleBooks } from '@/data/bible';

interface ChaptersGridProps {
  bookId: string | null;
}

const ChaptersGrid = ({ bookId }: ChaptersGridProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  if (!bookId) return null;
  
  const book = bibleBooks.find(book => book.id === bookId);
  if (!book) return null;
  
  const bookChapters = Array.from({ length: book.chapters }, (_, i) => i + 1);
  
  const navigateToChapter = (chapterBookId: string, chapter: number) => {
    navigate(`/challenge/bible/${chapterBookId}/${chapter}`);
  };
  
  // Mock function to return chapter status
  const getChapterStatus = (bookId: string, chapter: number) => {
    // In a real app, this would fetch from a user progress store/API
    // First chapter is always free
    const isFree = chapter === 1;
    
    return {
      isCompleted: false,
      score: 0,
      maxScore: 10,
      isFree
    };
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {bookChapters.map(chapter => {
          const { isCompleted, score, maxScore, isFree } = getChapterStatus(bookId, chapter);
          
          return (
            <div key={chapter} className="w-full aspect-square">
              <BibleChapterCard
                bookId={bookId}
                chapter={chapter}
                isCompleted={isCompleted}
                score={score}
                maxScore={maxScore}
                isUnlocked={user ? true : isFree} // Free to all users if chapter 1, otherwise requires login
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
