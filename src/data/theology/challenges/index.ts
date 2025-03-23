
import { TheologyChallenge } from '../types';
import { mereChristianityChallenges } from './mere-christianity/index';
import { knowingGodChallenges } from './knowing-god/index';
import { westminsterConfessionChallenges } from './westminster-confession/index';
import { desiringGodChallenges } from './desiring-god/index';
// Add imports for other book challenges as they are created
// import { tacticsChallengess } from './tactics/index';
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
