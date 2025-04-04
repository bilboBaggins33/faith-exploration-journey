
import { useQuery } from '@tanstack/react-query';
import { BibleBook } from '@/data/bible/types';
import { bibleBooks } from '@/data/bible';
import { sampleChapterChallenges } from '@/data/bible/challenges';

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
        c => c.book_id === bookId && c.chapter === chapter
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

// Re-export other utilities from this file for convenience
export * from './bible-progress-types';
export * from './bible-progress-utils';
