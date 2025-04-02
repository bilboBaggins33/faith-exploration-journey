
import { useTheologyProgress as useTheologyProgressBase } from './use-theology-progress';
import { useCallback } from 'react';
import { theologyBooks } from '@/data/theology/books';

/**
 * Specialized hook for book-related progress functionalities
 */
export const useTheologyBookProgress = () => {
  const baseProgress = useTheologyProgressBase();
  
  // Book-specific progress calculation
  const getBookCompletionPercentage = useCallback((bookId: string) => {
    return baseProgress.getBookProgress(bookId);
  }, [baseProgress]);
  
  // Calculate total books started and completed
  const getTotalBooksStats = useCallback(() => {
    if (!baseProgress.progress) {
      return { 
        totalStarted: 0, 
        totalCompleted: 0,
        totalBooks: theologyBooks.length 
      };
    }
    
    return {
      totalStarted: baseProgress.progress.books_started?.length || 0,
      totalCompleted: baseProgress.progress.books_completed?.length || 0,
      totalBooks: theologyBooks.length
    };
  }, [baseProgress.progress]);
  
  return {
    ...baseProgress,
    getBookCompletionPercentage,
    getTotalBooksStats
  };
};

/**
 * Specialized hook for chapter-related progress functionalities
 */
export const useTheologyChapterProgress = () => {
  const baseProgress = useTheologyProgressBase();
  
  // Enhanced chapter status with more details
  const getDetailedChapterStatus = useCallback((bookId: string, chapter: number) => {
    const status = baseProgress.getChapterStatus(bookId, chapter);
    const formattedDate = status.completedAt 
      ? new Date(status.completedAt).toLocaleDateString() 
      : undefined;
    
    return {
      ...status,
      formattedCompletedDate: formattedDate,
      scorePercentage: status.score * 10, // Assuming score is out of 10
      isHighScore: status.score >= 8 // 8 or above is considered high
    };
  }, [baseProgress]);
  
  return {
    ...baseProgress,
    getDetailedChapterStatus
  };
};
