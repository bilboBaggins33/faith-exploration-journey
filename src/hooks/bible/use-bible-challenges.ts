
import { useQuery } from '@tanstack/react-query';
import { bibleBooks } from '@/data/bible/books';
import { fetchChallenge } from '@/lib/fetch-challenge';
import type { ChapterChallenge } from '@/data/bible/types';

/**
 * Hook to fetch Bible challenge data for a specific book and chapter.
 * Payloads come from the gated get-challenge edge function.
 */
export const useBibleChallenges = (bookId: string, chapter: number) => {
  return useQuery({
    queryKey: ['bible-challenges', bookId, chapter],
    queryFn: async () => {
      const book = bibleBooks.find(b => b.id === bookId);

      if (!book || chapter < 1 || chapter > book.chapters) {
        throw new Error(`Invalid book ID ${bookId} or chapter ${chapter}`);
      }

      return (await fetchChallenge('bible', bookId, chapter)) as ChapterChallenge;
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
