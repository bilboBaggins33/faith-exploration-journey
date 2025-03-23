
import { TheologyChallenge } from '../types';
import { mereChristianityChallenges } from './mere-christianity';
import { knowingGodChallenges } from './knowing-god';
import { westminsterConfessionChallenges } from './westminster-confession';
import { desiringGodChallenges } from './desiring-god';
// Add imports for other book challenges as they are created
// import { tacticsChallengess } from './tactics';
// etc.

// Combine all challenges
export const theologyChapterChallenges: TheologyChallenge[] = [
  ...mereChristianityChallenges,
  ...knowingGodChallenges,
  ...westminsterConfessionChallenges,
  ...desiringGodChallenges
  // Add more challenges as they are created
  // ...tacticsChallengess,
  // etc.
];
