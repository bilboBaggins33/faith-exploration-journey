
import { bibleBooks } from '@/data/bible/books';
import { BibleProgressData, BookProgressDetails } from './bible-progress-types';

export const useBibleCalculations = (progress: BibleProgressData | null) => {
  const getBookProgress = (bookId: string): BookProgressDetails => {
    if (!progress || !progress.completed_chapters) {
      const book = bibleBooks.find(b => b.id === bookId);
      const totalChapters = book ? book.chapters : 0;
      return {
        percentage: 0,
        completed: 0,
        total: totalChapters
      };
    }
    
    const book = bibleBooks.find(b => b.id === bookId);
    if (!book) {
      return {
        percentage: 0,
        completed: 0,
        total: 0
      };
    }
    
    const completedChapters = progress.completed_chapters.filter(
      chapter => chapter.book_id === bookId
    ).length;
    
    const percentage = Math.round((completedChapters / book.chapters) * 100);
    
    return {
      percentage,
      completed: completedChapters,
      total: book.chapters
    };
  };

  const getBookAverageScore = (bookId: string): number => {
    if (!progress || !progress.completed_chapters) return 0;
    
    const bookChapters = progress.completed_chapters.filter(
      chapter => chapter.book_id === bookId && chapter.score !== undefined
    );
    
    if (bookChapters.length === 0) return 0;
    
    const totalScore = bookChapters.reduce(
      (sum, chapter) => sum + (chapter.score || 0), 
      0
    );
    
    return Math.round((totalScore / bookChapters.length) * 10);
  };

  const getChapterScore = (bookId: string, chapterNumber: number): number => {
    if (!progress || !progress.completed_chapters) return 0;

    const completed_chapters = progress.completed_chapters;

    const chapterData = completed_chapters.find(
      c => c.book_id === bookId && c.chapter === chapterNumber
    );
    const score = chapterData?.score || 0;

    return score;
  };

  return {
    getBookProgress,
    getBookAverageScore,
    getChapterScore
  };
};
