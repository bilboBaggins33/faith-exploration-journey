
import { ChapterChallenge } from '../types';
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
import { revelationChallenges } from './revelation';

// Combine all challenges
export const sampleChapterChallenges: ChapterChallenge[] = [
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
  ...matthewChallenges,
  ...markChallenges,
  ...lukeChallenges,
  ...johnChallenges,
  ...john2Challenges,
  ...john3Challenges,
  ...judeChallenges,
  ...revelationChallenges,
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
  ...revelationChallenges];

/**
 * Get a Bible chapter challenge by book ID and chapter number
 * @param bookId The ID of the book (e.g., 'GEN', 'MAT')
 * @param chapter The chapter number
 * @returns The challenge data for the specified book and chapter
 */
export const getBibleChallengeByBookAndChapter = (bookId: string, chapter: number): ChapterChallenge | null => {
  // First, convert bookId to lowercase for consistency with the stored challenges
  const normalizedBookId = bookId.toLowerCase();
  
  // Find the challenge for the specified book and chapter
  const challenge = sampleChapterChallenges.find(
    (c) => c.bookId.toLowerCase() === normalizedBookId && c.chapter === chapter
  );
  
  return challenge || null;
};
