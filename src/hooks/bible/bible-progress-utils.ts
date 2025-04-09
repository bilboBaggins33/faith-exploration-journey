
import { bibleBooks } from "@/data/bible";

/**
 * Calculate the progress percentage for a specific book
 */
export const calculateBookProgress = (
  bookId: string,
  completedChapters: { book_id: string; chapter: number }[]
) => {
  const book = bibleBooks.find(b => b.id === bookId);
  
  if (!book) return 0;
  
  const completedCount = completedChapters.filter(
    chapter => chapter.book_id === bookId
  ).length;
  
  return Math.round((completedCount / book.chapters) * 100);
};

/**
 * Get the status of a specific chapter (completed, score)
 */
export const getChapterStatus = (
  bookId: string,
  chapter: number,
  completedChapters: { book_id: string; chapter: number; score?: number }[] | undefined,
  challengesCompleted: string[] | undefined
) => {
  if (!completedChapters) {
    return { isCompleted: false, score: 0, maxScore: 10 };
  }
  
  const chapterData = completedChapters.find(
    c => c.book_id === bookId && c.chapter === chapter
  );
  
  const challengeCompleted = challengesCompleted?.includes(`${bookId}${chapter}`);
  
  return {
    isCompleted: !!chapterData || !!challengeCompleted,
    score: chapterData?.score || 0,
    maxScore: 10
  };
};
