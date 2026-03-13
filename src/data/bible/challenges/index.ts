
// Export sample challenges data for use in the application
import { genesisChallenges } from './genesis';
import { exodusChallenges } from './exodus';
import { leviticusChallenges } from './leviticus';
import { numbersChallenges } from './numbers';
import { deuteronomyChallenges } from './deuteronomy';
import { joshuaChallenges } from './joshua';
import { judgesChallenges } from './judges';
import { ruthChallenges } from './ruth';
import { samuel1Challenges } from './1samuel';
import { samuel2Challenges } from './2samuel';
import { kings1Challenges } from './1kings';
import { kings2Challenges } from './2kings';
import { chronicles1Challenges } from './1chronicles';
import { chronicles2Challenges } from './2chronicles';
import { ezraChallenges } from './ezra';
import { nehemiahChallenges } from './nehemiah';
import { estherChallenges } from './esther';
import { jobChallenges } from './job';
import { psalmsChallenges } from './psalms';
import { proverbsChallenges } from './proverbs';
import { ecclesiastesChallenges } from './ecclesiastes';
import { songofsolomonChallenges } from './songofsolomon';
import { isaiahChallenges } from './isaiah';
import { jeremiahChallenges } from './jeremiah';
import { lamentationsChallenges } from './lamentations';
import { ezekielChallenges } from './ezekiel';
import { danielChallenges } from './daniel';
import { hoseaChallenges } from './hosea';
import { joelChallenges } from './joel';
import { amosChallenges } from './amos';
import { obadiahChallenges } from './obadiah';
import { jonahChallenges } from './jonah';
import { micahChallenges } from './micah';
import { nahumChallenges } from './nahum';
import { habakkukChallenges } from './habakkuk';
import { zephaniahChallenges } from './zephaniah';
import { haggaiChallenges } from './haggai';
import { zechariahChallenges } from './zechariah';
import { malachiChallenges } from './malachi';
import { matthewChallenges } from './matthew';
import { markChallenges } from './mark';
import { lukeChallenges } from './luke';
import { johnChallenges } from './john';
import { actsChallenges } from './acts';
import { romansChallenges } from './romans';
import { corinthians1Challenges } from './1corinthians';
import { corinthians2Challenges } from './2corinthians';
import { galatiansChallenges } from './galatians';
import { ephesiansChallenges } from './ephesians';
import { philippiansChallenges } from './philippians';
import { colossiansChallenges } from './colossians';
import { thessalonians1Challenges } from './1thessalonians';
import { thessalonians2Challenges } from './2thessalonians';
import { timothy1Challenges } from './1timothy';
import { timothy2Challenges } from './2timothy';
import { titusChallenges } from './titus';
import { philemonChallenges } from './philemon';
import { hebrewsChallenges } from './hebrews';
import { jamesChallenges } from './james';
import { peter1Challenges } from './1peter';
import { peter2Challenges } from './2peter';
import { john1Challenges } from './1john';
import { john2Challenges } from './2john';
import { john3Challenges } from './3john';
import { judeChallenges } from './jude';
import { revelation1Challenges } from './revelation1';
import { revelation2Challenges } from './revelation2';
import { revelation3Challenges } from './revelation3';
import { revelation4Challenges } from './revelation4';
import { revelation5Challenges } from './revelation5';
import { ChapterChallenge } from '../types';

// Collect challenges from all books
export const allChallenges: ChapterChallenge[] = [
  ...genesisChallenges,
  ...exodusChallenges,
  ...leviticusChallenges,
  ...numbersChallenges,
  ...deuteronomyChallenges,
  ...joshuaChallenges,
  ...judgesChallenges,
  ...ruthChallenges,
  ...samuel1Challenges,
  ...samuel2Challenges,
  ...kings1Challenges,
  ...kings2Challenges,
  ...chronicles1Challenges,
  ...chronicles2Challenges,
  ...ezraChallenges,
  ...nehemiahChallenges,
  ...estherChallenges,
  ...jobChallenges,
  ...psalmsChallenges,
  ...proverbsChallenges,
  ...ecclesiastesChallenges,
  ...songofsolomonChallenges,
  ...isaiahChallenges,
  ...jeremiahChallenges,
  ...lamentationsChallenges,
  ...ezekielChallenges,
  ...danielChallenges,
  ...hoseaChallenges,
  ...joelChallenges,
  ...amosChallenges,
  ...obadiahChallenges,
  ...jonahChallenges,
  ...micahChallenges,
  ...nahumChallenges,
  ...habakkukChallenges,
  ...zephaniahChallenges,
  ...haggaiChallenges,
  ...zechariahChallenges,
  ...malachiChallenges,
  ...matthewChallenges,
  ...markChallenges,
  ...lukeChallenges,
  ...johnChallenges,
  ...actsChallenges,
  ...romansChallenges,
  ...corinthians1Challenges,
  ...corinthians2Challenges,
  ...galatiansChallenges,
  ...ephesiansChallenges,
  ...philippiansChallenges,
  ...colossiansChallenges,
  ...thessalonians1Challenges,
  ...thessalonians2Challenges,
  ...timothy1Challenges,
  ...timothy2Challenges,
  ...titusChallenges,
  ...philemonChallenges,
  ...hebrewsChallenges,
  ...jamesChallenges,
  ...peter1Challenges,
  ...peter2Challenges,
  ...john1Challenges,
  ...john2Challenges,
  ...john3Challenges,
  ...judeChallenges,
  ...revelation1Challenges,
  ...revelation2Challenges,
  ...revelation3Challenges,
  ...revelation4Challenges,
  ...revelation5Challenges,
];

// Export individual books for targeted usage
export {
  genesisChallenges,
  exodusChallenges,
  leviticusChallenges,
  numbersChallenges,
  deuteronomyChallenges,
  joshuaChallenges,
  judgesChallenges,
  ruthChallenges,
  samuel1Challenges,
  samuel2Challenges,
  kings1Challenges,
  kings2Challenges,
  chronicles1Challenges,
  chronicles2Challenges,
  ezraChallenges,
  nehemiahChallenges,
  estherChallenges,
  jobChallenges,
  psalmsChallenges,
  proverbsChallenges,
  ecclesiastesChallenges,
  songofsolomonChallenges,
  isaiahChallenges,
  jeremiahChallenges,
  lamentationsChallenges,
  ezekielChallenges,
  danielChallenges,
  hoseaChallenges,
  joelChallenges,
  amosChallenges,
  obadiahChallenges,
  jonahChallenges,
  micahChallenges,
  nahumChallenges,
  habakkukChallenges,
  zephaniahChallenges,
  haggaiChallenges,
  zechariahChallenges,
  malachiChallenges,
  matthewChallenges,
  markChallenges,
  lukeChallenges,
  johnChallenges,
  actsChallenges,
  romansChallenges,
  corinthians1Challenges,
  corinthians2Challenges,
  galatiansChallenges,
  ephesiansChallenges,
  philippiansChallenges,
  colossiansChallenges,
  thessalonians1Challenges,
  thessalonians2Challenges,
  timothy1Challenges,
  timothy2Challenges,
  titusChallenges,
  philemonChallenges,
  hebrewsChallenges,
  jamesChallenges,
  peter1Challenges,
  peter2Challenges,
  john1Challenges,
  john2Challenges,
  john3Challenges,
  judeChallenges,
  revelation1Challenges,
  revelation2Challenges,
  revelation3Challenges,
  revelation4Challenges,
  revelation5Challenges,
};

// Create a lookup map for faster access
const challengesMap = new Map<string, ChapterChallenge>();

// Populate the map
allChallenges.forEach(challenge => {
  challengesMap.set(`${challenge.bookId}-${challenge.chapter}`, challenge);
});

/**
 * Get a specific Bible challenge by book ID and chapter number
 * Optimized to use O(1) lookup
 */
export const getBibleChallengeByBookAndChapter = (
  bookId: string,
  chapter: number
): ChapterChallenge | undefined => {
  return challengesMap.get(`${bookId}-${chapter}`);
};
