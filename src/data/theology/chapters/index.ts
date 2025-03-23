
// This file exports all chapter data from individual book files
import { mereChristianityChapters } from './mere-christianity';
import { knowingGodChapters } from './knowing-god';
import { westminsterConfessionChapters } from './westminster-confession';
import { desiringGodChapters } from './desiring-god';
import { tacticsChapters } from './tactics';
import { dontWasteYourLifeChapters } from './dont-waste-your-life';
import { disciplineOfGraceChapters } from './discipline-of-grace';
import { holinessOfGodChapters } from './holiness-of-god'; 
import { pilgrimsProgressChapters } from './pilgrims-progress';
import { justDoSomethingChapters } from './just-do-something';
import { coreChristianityChapters } from './core-christianity';
import { counterCultureChapters } from './counter-culture';
import { TheologyChapter } from '../types';

// Combine all chapters into a single record
export const theologyChapters: Record<string, TheologyChapter[]> = {
  'mere-christianity': mereChristianityChapters,
  'knowing-god': knowingGodChapters,
  'westminster-confession': westminsterConfessionChapters,
  'desiring-god': desiringGodChapters,
  'tactics': tacticsChapters,
  'dont-waste-your-life': dontWasteYourLifeChapters,
  'discipline-of-grace': disciplineOfGraceChapters,
  'holiness-of-god': holinessOfGodChapters,
  'pilgrims-progress': pilgrimsProgressChapters,
  'just-do-something': justDoSomethingChapters,
  'core-christianity': coreChristianityChapters,
  'counter-culture': counterCultureChapters
};
