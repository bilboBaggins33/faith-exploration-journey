import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { corinthians2ChallengesBatch1 } from '../temp_data/2corinthians_1_5';
import { corinthians2ChallengesBatch2 } from '../temp_data/2corinthians_6_9';
import { corinthians2ChallengesBatch3 } from '../temp_data/2corinthians_10_13';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allChallenges = [
  ...corinthians2ChallengesBatch1,
  ...corinthians2ChallengesBatch2,
  ...corinthians2ChallengesBatch3,
];

const outputPath = path.join(__dirname, '../data/bible/challenges/2corinthians.ts');

const content = `import { ChapterChallenge } from '../../types';

export const corinthians2Challenges: ChapterChallenge[] = ${JSON.stringify(allChallenges, null, 2)};
`;

fs.writeFileSync(outputPath, content, 'utf-8');
console.log(`Successfully generated 2corinthians.ts with ${allChallenges.length} chapters.`);
