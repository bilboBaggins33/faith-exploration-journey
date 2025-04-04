
import { useQuery } from '@tanstack/react-query';
import { BibleBook } from '@/data/bible/types';
import { bibleBooks } from '@/data/bible';
import { sampleChapterChallenges } from '@/data/bible/challenges';
import { BibleProgressData } from './bible-progress-types';

/**
 * Hook to fetch Bible challenge data for a specific book and chapter
 */
export const useBibleChallenges = (bookId: string, chapter: number) => {
  return useQuery({
    queryKey: ['bible-challenges', bookId, chapter],
    queryFn: async () => {
      // In a real app, this would fetch from an API
      // For now, we're using the sample data
      
      // Find the book data
      const book = bibleBooks.find(b => b.id === bookId);
      
      if (!book || chapter < 1 || chapter > book.chapters) {
        throw new Error(`Invalid book ID ${bookId} or chapter ${chapter}`);
      }
      
      // Find challenge for this chapter
      const challenge = sampleChapterChallenges.find(
        c => c.bookId === bookId && c.chapter === chapter
      );
      
      if (!challenge) {
        return {
          title: `${book.name} Chapter ${chapter}`,
          questions: []
        };
      }
      
      return challenge;
    },
  });
};

/**
 * Helper function to check if a challenge is completed
 */
export const isChallengeCompleted = (
  challengeId: string, 
  progress: BibleProgressData | null
): boolean => {
  if (!progress || !progress.challenges_completed) {
    return false;
  }
  return progress.challenges_completed.includes(challengeId);
};

/**
 * Helper function to mark a challenge as completed
 */
export const completeChallenge = async (
  userId: string,
  challengeId: string,
  pointsEarned: number = 10,
  progress: BibleProgressData,
  profile: any
) => {
  if (isChallengeCompleted(challengeId, progress)) {
    return progress; // Already completed
  }
  
  // Create an updated progress object
  const updatedProgress = {
    ...progress,
    challenges_completed: [...(progress.challenges_completed || []), challengeId],
    total_points: (progress.total_points || 0) + pointsEarned
  };
  
  // In a real implementation, this would update the database
  // For now, we just return the updated progress object
  return updatedProgress;
};

/**
 * Helper function to check if a chapter is completed
 */
export const isChapterCompleted = (
  bookId: string,
  chapter: number,
  progress: BibleProgressData | null
): boolean => {
  if (!progress || !progress.completed_chapters) {
    return false;
  }
  
  return progress.completed_chapters.some(
    c => c.book_id === bookId && c.chapter === chapter
  );
};

// Re-export other utilities from this file for convenience
export * from './bible-progress-types';
export * from './bible-progress-utils';
