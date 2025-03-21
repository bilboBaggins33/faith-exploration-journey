
import { TheologyChallenge } from '../types';
import { mereChristianityChallenges } from './mere-christianity';
import { knowingGodChallenges } from './knowing-god';
import { westminsterConfessionChallenges } from './westminster-confession';
import { desiringGodChallenges } from './desiring-god';

// Combine all challenges
export const theologyChapterChallenges: TheologyChallenge[] = [
  ...mereChristianityChallenges,
  ...knowingGodChallenges,
  ...westminsterConfessionChallenges,
  ...desiringGodChallenges
];
