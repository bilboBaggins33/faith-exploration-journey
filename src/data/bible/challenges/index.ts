
// Export sample challenges data for use in the application
import { judeChallenges } from './jude';
import { philippiansChallenges } from './philippians';
import { genesisChallenges } from './genesis';
import { john2Challenges } from './2john';
import { timothy1Challenges } from './1timothy';
import { ephesiansChallenges } from './ephesians';
import { ezraChallenges } from './ezra';
import { estherChallenges } from './esther';
import { ChapterChallenge } from '../types';

// Collect challenges from all books
export const sampleChapterChallenges: ChapterChallenge[] = [
  ...judeChallenges,
  ...philippiansChallenges,
  ...genesisChallenges,
  ...john2Challenges,
  ...timothy1Challenges,
  ...ephesiansChallenges,
  ...ezraChallenges,
  ...estherChallenges,
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
