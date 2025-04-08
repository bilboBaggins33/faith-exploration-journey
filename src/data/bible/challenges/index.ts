
// Export sample challenges data for use in the application
import { judeChallenges } from './jude';
import { philippiansChallenges } from './philippians';
import { genesisChallenges } from './genesis';
import { ChapterChallenge } from '../types';

// Collect challenges from all books
export const sampleChapterChallenges: ChapterChallenge[] = [
  ...judeChallenges,
  ...philippiansChallenges,
  ...genesisChallenges,
  // Add more challenges as they are created
];

/**
 * Get a specific Bible challenge by book ID and chapter number
 */
export const getBibleChallengeByBookAndChapter = (
  bookId: string, 
  chapter: number
): ChapterChallenge | undefined => {
  return sampleChapterChallenges.find(
    challenge => challenge.bookId === bookId && challenge.chapter === chapter
  );
};
