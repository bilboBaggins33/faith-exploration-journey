import type { ChapterChallenge } from '../types';

/**
 * Per-book dynamic loaders — only used in DEV as a fallback when the
 * get-challenge edge function is not available. Production builds tree-shake
 * this module out via the import.meta.env.DEV guard in fetch-challenge.ts.
 */
const bookLoaders: Record<string, () => Promise<ChapterChallenge[]>> = {
  genesis: () => import('./genesis').then(m => m.genesisChallenges),
  exodus: () => import('./exodus').then(m => m.exodusChallenges),
  leviticus: () => import('./leviticus').then(m => m.leviticusChallenges),
  numbers: () => import('./numbers').then(m => m.numbersChallenges),
  deuteronomy: () => import('./deuteronomy').then(m => m.deuteronomyChallenges),
  joshua: () => import('./joshua').then(m => m.joshuaChallenges),
  judges: () => import('./judges').then(m => m.judgesChallenges),
  ruth: () => import('./ruth').then(m => m.ruthChallenges),
  '1samuel': () => import('./1samuel').then(m => m.samuel1Challenges),
  '2samuel': () => import('./2samuel').then(m => m.samuel2Challenges),
  '1kings': () => import('./1kings').then(m => m.kings1Challenges),
  '2kings': () => import('./2kings').then(m => m.kings2Challenges),
  '1chronicles': () => import('./1chronicles').then(m => m.chronicles1Challenges),
  '2chronicles': () => import('./2chronicles').then(m => m.chronicles2Challenges),
  ezra: () => import('./ezra').then(m => m.ezraChallenges),
  nehemiah: () => import('./nehemiah').then(m => m.nehemiahChallenges),
  esther: () => import('./esther').then(m => m.estherChallenges),
  job: () => import('./job').then(m => m.jobChallenges),
  psalms: () => import('./psalms').then(m => m.psalmsChallenges),
  proverbs: () => import('./proverbs').then(m => m.proverbsChallenges),
  ecclesiastes: () => import('./ecclesiastes').then(m => m.ecclesiastesChallenges),
  songofsolomon: () => import('./songofsolomon').then(m => m.songofsolomonChallenges),
  isaiah: () => import('./isaiah').then(m => m.isaiahChallenges),
  jeremiah: () => import('./jeremiah').then(m => m.jeremiahChallenges),
  lamentations: () => import('./lamentations').then(m => m.lamentationsChallenges),
  ezekiel: () => import('./ezekiel').then(m => m.ezekielChallenges),
  daniel: () => import('./daniel').then(m => m.danielChallenges),
  hosea: () => import('./hosea').then(m => m.hoseaChallenges),
  joel: () => import('./joel').then(m => m.joelChallenges),
  amos: () => import('./amos').then(m => m.amosChallenges),
  obadiah: () => import('./obadiah').then(m => m.obadiahChallenges),
  jonah: () => import('./jonah').then(m => m.jonahChallenges),
  micah: () => import('./micah').then(m => m.micahChallenges),
  nahum: () => import('./nahum').then(m => m.nahumChallenges),
  habakkuk: () => import('./habakkuk').then(m => m.habakkukChallenges),
  zephaniah: () => import('./zephaniah').then(m => m.zephaniahChallenges),
  haggai: () => import('./haggai').then(m => m.haggaiChallenges),
  zechariah: () => import('./zechariah').then(m => m.zechariahChallenges),
  malachi: () => import('./malachi').then(m => m.malachiChallenges),
  matthew: () => import('./matthew').then(m => m.matthewChallenges),
  mark: () => import('./mark').then(m => m.markChallenges),
  luke: () => import('./luke').then(m => m.lukeChallenges),
  john: () => import('./john').then(m => m.johnChallenges),
  acts: () => import('./acts').then(m => m.actsChallenges),
  romans: () => import('./romans').then(m => m.romansChallenges),
  '1corinthians': () => import('./1corinthians').then(m => m.corinthians1Challenges),
  '2corinthians': () => import('./2corinthians').then(m => m.corinthians2Challenges),
  galatians: () => import('./galatians').then(m => m.galatiansChallenges),
  ephesians: () => import('./ephesians').then(m => m.ephesiansChallenges),
  philippians: () => import('./philippians').then(m => m.philippiansChallenges),
  colossians: () => import('./colossians').then(m => m.colossiansChallenges),
  '1thessalonians': () => import('./1thessalonians').then(m => m.thessalonians1Challenges),
  '2thessalonians': () => import('./2thessalonians').then(m => m.thessalonians2Challenges),
  '1timothy': () => import('./1timothy').then(m => m.timothy1Challenges),
  '2timothy': () => import('./2timothy').then(m => m.timothy2Challenges),
  titus: () => import('./titus').then(m => m.titusChallenges),
  philemon: () => import('./philemon').then(m => m.philemonChallenges),
  hebrews: () => import('./hebrews').then(m => m.hebrewsChallenges),
  james: () => import('./james').then(m => m.jamesChallenges),
  '1peter': () => import('./1peter').then(m => m.peter1Challenges),
  '2peter': () => import('./2peter').then(m => m.peter2Challenges),
  '1john': () => import('./1john').then(m => m.john1Challenges),
  '2john': () => import('./2john').then(m => m.john2Challenges),
  '3john': () => import('./3john').then(m => m.john3Challenges),
  jude: () => import('./jude').then(m => m.judeChallenges),
  revelation: async () => {
    const [r1, r2, r3, r4, r5] = await Promise.all([
      import('./revelation1').then(m => m.revelation1Challenges),
      import('./revelation2').then(m => m.revelation2Challenges),
      import('./revelation3').then(m => m.revelation3Challenges),
      import('./revelation4').then(m => m.revelation4Challenges),
      import('./revelation5').then(m => m.revelation5Challenges),
    ]);
    return [...r1, ...r2, ...r3, ...r4, ...r5];
  },
};

export async function loadBibleChallengeLocal(
  bookId: string,
  chapter: number
): Promise<ChapterChallenge | undefined> {
  const loader = bookLoaders[bookId];
  if (!loader) return undefined;
  const challenges = await loader();
  return challenges.find(c => c.chapter === chapter);
}

export const bibleChallengeBookIds = Object.keys(bookLoaders);
