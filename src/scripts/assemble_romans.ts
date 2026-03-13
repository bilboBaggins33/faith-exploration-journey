import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { romansChallengesBatch1 } from '../temp_data/romans_1_5';
import { romansChallengesBatch2 } from '../temp_data/romans_6_10';
import { romansChallengesBatch3a } from '../temp_data/romans_11_14';
import { romansChallengesBatch3b } from '../temp_data/romans_15_16';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allChallenges = [
  ...romansChallengesBatch1,
  ...romansChallengesBatch2,
  ...romansChallengesBatch3a,
  ...romansChallengesBatch3b,
];

const outputPath = path.join(__dirname, '../data/bible/challenges/romans.ts');

const content = `import { ChapterChallenge } from '../../types';

export const romansChallenges: ChapterChallenge[] = ${JSON.stringify(allChallenges, null, 2)};
`;

fs.writeFileSync(outputPath, content, 'utf-8');
console.log(`Successfully generated romans.ts with ${allChallenges.length} chapters.`);
