
import { useQuery } from '@tanstack/react-query';
import { bibleBooks } from '@/data/bible/books';

/**
 * Hook to fetch Bible challenge data for a specific book and chapter.
 * The (large) challenge dataset is imported dynamically so it is only fetched
 * when a chapter challenge is actually requested.
 */
export const useBibleChallenges = (bookId: string, chapter: number) => {
  return useQuery({
    queryKey: ['bible-challenges', bookId, chapter],
    queryFn: async () => {
      const book = bibleBooks.find(b => b.id === bookId);

      if (!book || chapter < 1 || chapter > book.chapters) {
        throw new Error(`Invalid book ID ${bookId} or chapter ${chapter}`);
      }

      const { getBibleChallengeByBookAndChapter } = await import('@/data/bible/challenges');
      const challenge = getBibleChallengeByBookAndChapter(bookId, chapter);

      if (!challenge) {
        return {
          title: `${book.name} Chapter ${chapter}`,
          questions: [],
        };
      }

      return challenge;
    },
  });
};

// Completion helpers live in a challenge-data-free module; re-exported here for
// backward compatibility with existing imports.
export {
  isChallengeCompleted,
  completeChallenge,
  isChapterCompleted,
} from './bible-completion-utils';

// Re-export other utilities from this file for convenience
export * from './bible-progress-types';
export * from './bible-progress-utils';
