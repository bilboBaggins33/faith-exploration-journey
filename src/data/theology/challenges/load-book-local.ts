import type { TheologyChallenge } from '../types';

const theologyLoaders: Record<string, () => Promise<TheologyChallenge[]>> = {
  'mere-christianity': () =>
    import('./mere-christianity').then(m => m.mereChristianityChallenges),
  'knowing-god': () => import('./knowing-god').then(m => m.knowingGodChallenges),
  'westminster-confession': () =>
    import('./westminster-confession').then(m => m.westminsterConfessionChallenges),
  'desiring-god': () =>
    import('./desiring-god').then(m => m.desiringGodChallenges),
};

export async function loadTheologyChallengeLocal(
  bookId: string,
  chapter: number
): Promise<TheologyChallenge | undefined> {
  const loader = theologyLoaders[bookId];
  if (!loader) return undefined;
  const challenges = await loader();
  return challenges.find(c => c.chapter === chapter);
}
