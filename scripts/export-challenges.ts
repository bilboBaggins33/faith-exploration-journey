/**
 * Export challenge JSON for the get-challenge edge function, plus lightweight
 * title metadata for the client browse UI.
 *
 * Run: npx tsx scripts/export-challenges.ts
 */
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { genesisChallenges } from '../src/data/bible/challenges/genesis';
import { exodusChallenges } from '../src/data/bible/challenges/exodus';
import { leviticusChallenges } from '../src/data/bible/challenges/leviticus';
import { numbersChallenges } from '../src/data/bible/challenges/numbers';
import { deuteronomyChallenges } from '../src/data/bible/challenges/deuteronomy';
import { joshuaChallenges } from '../src/data/bible/challenges/joshua';
import { judgesChallenges } from '../src/data/bible/challenges/judges';
import { ruthChallenges } from '../src/data/bible/challenges/ruth';
import { samuel1Challenges } from '../src/data/bible/challenges/1samuel';
import { samuel2Challenges } from '../src/data/bible/challenges/2samuel';
import { kings1Challenges } from '../src/data/bible/challenges/1kings';
import { kings2Challenges } from '../src/data/bible/challenges/2kings';
import { chronicles1Challenges } from '../src/data/bible/challenges/1chronicles';
import { chronicles2Challenges } from '../src/data/bible/challenges/2chronicles';
import { ezraChallenges } from '../src/data/bible/challenges/ezra';
import { nehemiahChallenges } from '../src/data/bible/challenges/nehemiah';
import { estherChallenges } from '../src/data/bible/challenges/esther';
import { jobChallenges } from '../src/data/bible/challenges/job';
import { psalmsChallenges } from '../src/data/bible/challenges/psalms';
import { proverbsChallenges } from '../src/data/bible/challenges/proverbs';
import { ecclesiastesChallenges } from '../src/data/bible/challenges/ecclesiastes';
import { songofsolomonChallenges } from '../src/data/bible/challenges/songofsolomon';
import { isaiahChallenges } from '../src/data/bible/challenges/isaiah';
import { jeremiahChallenges } from '../src/data/bible/challenges/jeremiah';
import { lamentationsChallenges } from '../src/data/bible/challenges/lamentations';
import { ezekielChallenges } from '../src/data/bible/challenges/ezekiel';
import { danielChallenges } from '../src/data/bible/challenges/daniel';
import { hoseaChallenges } from '../src/data/bible/challenges/hosea';
import { joelChallenges } from '../src/data/bible/challenges/joel';
import { amosChallenges } from '../src/data/bible/challenges/amos';
import { obadiahChallenges } from '../src/data/bible/challenges/obadiah';
import { jonahChallenges } from '../src/data/bible/challenges/jonah';
import { micahChallenges } from '../src/data/bible/challenges/micah';
import { nahumChallenges } from '../src/data/bible/challenges/nahum';
import { habakkukChallenges } from '../src/data/bible/challenges/habakkuk';
import { zephaniahChallenges } from '../src/data/bible/challenges/zephaniah';
import { haggaiChallenges } from '../src/data/bible/challenges/haggai';
import { zechariahChallenges } from '../src/data/bible/challenges/zechariah';
import { malachiChallenges } from '../src/data/bible/challenges/malachi';
import { matthewChallenges } from '../src/data/bible/challenges/matthew';
import { markChallenges } from '../src/data/bible/challenges/mark';
import { lukeChallenges } from '../src/data/bible/challenges/luke';
import { johnChallenges } from '../src/data/bible/challenges/john';
import { actsChallenges } from '../src/data/bible/challenges/acts';
import { romansChallenges } from '../src/data/bible/challenges/romans';
import { corinthians1Challenges } from '../src/data/bible/challenges/1corinthians';
import { corinthians2Challenges } from '../src/data/bible/challenges/2corinthians';
import { galatiansChallenges } from '../src/data/bible/challenges/galatians';
import { ephesiansChallenges } from '../src/data/bible/challenges/ephesians';
import { philippiansChallenges } from '../src/data/bible/challenges/philippians';
import { colossiansChallenges } from '../src/data/bible/challenges/colossians';
import { thessalonians1Challenges } from '../src/data/bible/challenges/1thessalonians';
import { thessalonians2Challenges } from '../src/data/bible/challenges/2thessalonians';
import { timothy1Challenges } from '../src/data/bible/challenges/1timothy';
import { timothy2Challenges } from '../src/data/bible/challenges/2timothy';
import { titusChallenges } from '../src/data/bible/challenges/titus';
import { philemonChallenges } from '../src/data/bible/challenges/philemon';
import { hebrewsChallenges } from '../src/data/bible/challenges/hebrews';
import { jamesChallenges } from '../src/data/bible/challenges/james';
import { peter1Challenges } from '../src/data/bible/challenges/1peter';
import { peter2Challenges } from '../src/data/bible/challenges/2peter';
import { john1Challenges } from '../src/data/bible/challenges/1john';
import { john2Challenges } from '../src/data/bible/challenges/2john';
import { john3Challenges } from '../src/data/bible/challenges/3john';
import { judeChallenges } from '../src/data/bible/challenges/jude';
import { revelation1Challenges } from '../src/data/bible/challenges/revelation1';
import { revelation2Challenges } from '../src/data/bible/challenges/revelation2';
import { revelation3Challenges } from '../src/data/bible/challenges/revelation3';
import { revelation4Challenges } from '../src/data/bible/challenges/revelation4';
import { revelation5Challenges } from '../src/data/bible/challenges/revelation5';

import { mereChristianityChallenges } from '../src/data/theology/challenges/mere-christianity';
import { knowingGodChallenges } from '../src/data/theology/challenges/knowing-god';
import { westminsterConfessionChallenges } from '../src/data/theology/challenges/westminster-confession';
import { desiringGodChallenges } from '../src/data/theology/challenges/desiring-god';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dataRoot = join(root, 'supabase/functions/get-challenge/data');

const bibleChallenges = [
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

const theologyChallenges = [
  ...mereChristianityChallenges,
  ...knowingGodChallenges,
  ...westminsterConfessionChallenges,
  ...desiringGodChallenges,
];

function writeChallenge(
  type: 'bible' | 'theology',
  bookId: string,
  chapter: number,
  challenge: unknown
) {
  const file = join(dataRoot, type, bookId, `${chapter}.json`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(challenge));
}

rmSync(dataRoot, { recursive: true, force: true });
mkdirSync(dataRoot, { recursive: true });

const bibleTitles: Record<string, string> = {};
for (const c of bibleChallenges) {
  writeChallenge('bible', c.bookId, c.chapter, c);
  bibleTitles[`${c.bookId}:${c.chapter}`] = c.title;
}

const theologyTitles: Record<string, string> = {};
for (const c of theologyChallenges) {
  writeChallenge('theology', c.bookId, c.chapter, c);
  theologyTitles[`${c.bookId}:${c.chapter}`] = c.title;
}

const bibleTitlesPath = join(root, 'src/data/bible/challenges/titles.ts');
writeFileSync(
  bibleTitlesPath,
  `/** Auto-generated by scripts/export-challenges.ts — do not edit by hand. */\n` +
    `export const bibleChallengeTitles: Record<string, string> = ${JSON.stringify(bibleTitles, null, 2)};\n\n` +
    `export const getBibleChallengeTitle = (bookId: string, chapter: number): string | undefined =>\n` +
    `  bibleChallengeTitles[\`\${bookId}:\${chapter}\`];\n`
);

const theologyTitlesPath = join(root, 'src/data/theology/challenges/titles.ts');
writeFileSync(
  theologyTitlesPath,
  `/** Auto-generated by scripts/export-challenges.ts — do not edit by hand. */\n` +
    `export const theologyChallengeTitles: Record<string, string> = ${JSON.stringify(theologyTitles, null, 2)};\n\n` +
    `export const getTheologyChallengeTitle = (bookId: string, chapter: number): string | undefined =>\n` +
    `  theologyChallengeTitles[\`\${bookId}:\${chapter}\`];\n`
);

const genesis1 = bibleChallenges.find(
  c => c.bookId === 'genesis' && c.chapter === 1
);
const mere1 = theologyChallenges.find(
  c => c.bookId === 'mere-christianity' && c.chapter === 1
);
if (!genesis1 || !mere1) {
  throw new Error('Missing preview chapters (genesis 1 / mere-christianity 1)');
}

writeFileSync(
  join(root, 'src/data/bible/challenges/preview-data.json'),
  JSON.stringify(genesis1)
);
writeFileSync(
  join(root, 'src/data/theology/challenges/preview-data.json'),
  JSON.stringify(mere1)
);

console.log(
  `Exported ${bibleChallenges.length} bible + ${theologyChallenges.length} theology challenges`
);
