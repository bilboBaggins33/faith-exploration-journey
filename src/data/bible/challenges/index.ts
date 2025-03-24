
import { ChapterChallenge } from '../types';
import { genesisChallenges } from './genesis';
import { matthewChallenges } from './matthew';
import { markChallenges } from './mark';
import { lukeChallenges } from './luke';
import { johnChallenges } from './john';
import { actsChallenges } from './acts';
import { romansChallenges } from './romans';
import { 1corinthiansChallenges } from './1corinthians';
import { 2corinthiansChallenges } from './2corinthians';
import { galatiansChallenges } from './galatians';
import { ephesiansChallenges } from './ephesians';
import { philippiansChallenges } from './philippians';
import { colossiansChallenges } from './colossians';

// Combine all challenges
export const sampleChapterChallenges: ChapterChallenge[] = [
  ...genesisChallenges,
  ...matthewChallenges,
  ...markChallenges,
  ...lukeChallenges,
  ...johnChallenges,
  ...actsChallenges,
  ...romansChallenges,
  ...galatiansChallenges,
  ...ephesiansChallenges,
  ...philippiansChallenges,
  ...colossiansChallenges,];
