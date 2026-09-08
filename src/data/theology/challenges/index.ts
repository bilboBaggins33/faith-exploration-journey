import { getTheologyChallengeTitle } from './titles';
import type { TheologyChallenge } from '../types';

export { theologyChallengeTitles, getTheologyChallengeTitle } from './titles';
export { previewTheologyChallenge } from './preview';

/**
 * @deprecated Full challenge payloads are no longer bundled. Use fetchChallenge().
 * Kept as an empty array so accidental imports don't pull megabytes of content.
 */
export const theologyChapterChallenges: TheologyChallenge[] = [];

export const getTheologyChallengeTitleOrFallback = (
  bookId: string,
  chapter: number,
  fallback?: string
) => getTheologyChallengeTitle(bookId, chapter) ?? fallback ?? `Chapter ${chapter}`;
