import { theologyBooks } from '@/data/theology/books';
import { getStarsForScore, type BookStars } from '@/hooks/bible/bible-progress-utils';

export const calculateBookProgress = (bookId: string, completedChapters: any[] = []) => {
  const book = theologyBooks.find(b => b.id === bookId);
  if (!book) return 0;
  
  const chaptersCompleted = getBookChaptersRead(bookId, completedChapters);
  const bookProgress = Math.round((chaptersCompleted / book.chapters) * 100);
  
  return bookProgress > 100 ? 100 : bookProgress;
};

/**
 * Aggregate stars across theology chapters (3 stars max per chapter, no difficulties).
 */
export const getTheologyBookStars = (
  bookId: string,
  completedChapters:
    | { book_id: string; chapter: number; score?: number }[]
    | undefined,
  maxScore = 5
): BookStars => {
  const book = theologyBooks.find(b => b.id === bookId);
  if (!book) return { earned: 0, total: 0, mastered: false };

  const total = book.chapters * 3;
  if (!completedChapters) return { earned: 0, total, mastered: false };

  const best = new Map<number, number>();
  completedChapters.forEach(c => {
    if (c.book_id !== bookId) return;
    best.set(c.chapter, Math.max(best.get(c.chapter) ?? 0, c.score ?? 0));
  });

  let earned = 0;
  best.forEach(score => {
    earned += getStarsForScore(score, maxScore);
  });

  return { earned, total, mastered: total > 0 && earned === total };
};

export const getBookChaptersRead = (bookId: string, completedChapters: any[] = []) => {
  const completedForBook = completedChapters.filter(
    (ch: any) => ch.book_id === bookId
  );
  
  return completedForBook.length;
};

export const calculateBookAverageScore = (bookId: string, completedChapters: any[] = []) => {
  const completedForBook = completedChapters.filter(
    (ch: any) => ch.book_id === bookId && ch.score !== undefined
  );
  
  if (completedForBook.length === 0) return 0;
  
  const totalScore = completedForBook.reduce(
    (acc: number, ch: any) => acc + (ch.score || 0), 0
  );
  
  return Math.round(totalScore / completedForBook.length);
};

export const checkChapterCompletion = (bookId: string, chapter: number, completedChapters: any[] = []) => {
  return completedChapters.some(
    (ch: any) => ch.book_id === bookId && ch.chapter === chapter
  );
};

export const getChapterCompletionStatus = (bookId: string, chapter: number, completedChapters: any[] = []) => {
  if (!completedChapters) return { completed: false, score: 0 };
  
  const completedChapter = completedChapters.find(
    (ch: any) => ch.book_id === bookId && ch.chapter === chapter
  );
  
  if (!completedChapter) {
    return { completed: false, score: 0 };
  }
  
  return { 
    completed: true, 
    score: completedChapter.score || 0,
    completedAt: completedChapter.completed_at
  };
};
