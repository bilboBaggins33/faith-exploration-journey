
import { TheologyChallenge } from '../types';
import { mereChristianityChallenges } from './mere-christianity';
import { knowingGodChallenges } from './knowing-god';

// Combine all challenges
export const theologyChapterChallenges: TheologyChallenge[] = [
  ...mereChristianityChallenges,
  ...knowingGodChallenges
];
