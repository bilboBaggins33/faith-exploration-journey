
import { ChapterChallenge } from '../types';
import { genesisChallenges } from './genesis';
import { matthewChallenges } from './matthew';

// Combine all challenges
export const sampleChapterChallenges: ChapterChallenge[] = [
  ...genesisChallenges,
  ...matthewChallenges
];
