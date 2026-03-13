import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { actsChallengesBatch1 } from '../temp_data/acts_1_5';
import { actsChallengesBatch2 } from '../temp_data/acts_6_10';
import { actsChallengesBatch3 } from '../temp_data/acts_11_15';
import { actsChallengesBatch4 } from '../temp_data/acts_16_20';
import { actsChallengesBatch5a } from '../temp_data/acts_21_24';
import { actsChallengesBatch5b } from '../temp_data/acts_25_28';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allChallenges = [
    ...actsChallengesBatch1,
    ...actsChallengesBatch2,
    ...actsChallengesBatch3,
    ...actsChallengesBatch4,
    ...actsChallengesBatch5a,
    ...actsChallengesBatch5b,
];

const outputPath = path.join(__dirname, '../data/bible/challenges/acts.ts');

const content = `import { ChapterChallenge } from '../../types';

export const actsChallenges: ChapterChallenge[] = ${JSON.stringify(allChallenges, null, 2)};
`;

fs.writeFileSync(outputPath, content, 'utf-8');
console.log(`Successfully generated acts.ts with ${allChallenges.length} chapters.`);
