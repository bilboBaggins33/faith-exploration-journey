import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { corinthians1ChallengesBatch1 } from '../temp_data/1corinthians_1_5';
import { corinthians1ChallengesBatch2 } from '../temp_data/1corinthians_6_10';
import { corinthians1ChallengesBatch3a } from '../temp_data/1corinthians_11_14';
import { corinthians1ChallengesBatch3b } from '../temp_data/1corinthians_15_16';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allChallenges = [
  ...corinthians1ChallengesBatch1,
  ...corinthians1ChallengesBatch2,
  ...corinthians1ChallengesBatch3a,
  ...corinthians1ChallengesBatch3b,
];

const outputPath = path.join(__dirname, '../data/bible/challenges/1corinthians.ts');

const content = `import { ChapterChallenge } from '../../types';

export const corinthians1Challenges: ChapterChallenge[] = ${JSON.stringify(allChallenges, null, 2)};
`;

fs.writeFileSync(outputPath, content, 'utf-8');
console.log(`Successfully generated 1corinthians.ts with ${allChallenges.length} chapters.`);
