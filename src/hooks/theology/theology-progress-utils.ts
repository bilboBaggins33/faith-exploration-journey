
import { theologyBooks } from '@/data/theology/books';

export const calculateBookProgress = (bookId: string, completedChapters: any[] = []) => {
  const book = theologyBooks.find(b => b.id === bookId);
  if (!book) return 0;
  
  const chaptersCompleted = getBookChaptersRead(bookId, completedChapters);
  const bookProgress = Math.round((chaptersCompleted / book.chapters) * 100);
  
  return bookProgress > 100 ? 100 : bookProgress;
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
