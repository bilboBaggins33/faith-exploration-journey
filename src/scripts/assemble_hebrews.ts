import * as fs from 'fs';
import * as path from 'path';

const assembleHebrews = () => {
  const challengesDir = path.join(__dirname, '../data/bible/challenges');
  const outputFile = path.join(challengesDir, 'hebrews.ts');

  // Read the partial files
  const part1Path = path.join(challengesDir, 'hebrews1.ts');
  const part2Path = path.join(challengesDir, 'hebrews2.ts');

  if (!fs.existsSync(part1Path) || !fs.existsSync(part2Path)) {
    console.error('One or more partial files are missing.');
    return;
  }

  const part1Content = fs.readFileSync(part1Path, 'utf8');
  const part2Content = fs.readFileSync(part2Path, 'utf8');

  // Extract the arrays
  const arrayRegex = /export const [a-zA-Z0-9]+Challenges: ChapterChallenge\[\] = (\[[\s\S]*?\]);/s;
  
  const match1 = part1Content.match(arrayRegex);
  const match2 = part2Content.match(arrayRegex);

  if (!match1 || !match2) {
    console.error('Could not extract one or more challenge arrays.');
    return;
  }

  // Remove the opening '[' from match2 and closing ']' from match1 to combine them
  const array1Content = match1[1].slice(0, match1[1].lastIndexOf(']')).trim();
  const array2Content = match2[1].slice(match2[1].indexOf('[') + 1).trim();

  // Need to ensure there is a comma separating the two arrays if they aren't empty
  let combinedArrayContent = array1Content;
  if (!combinedArrayContent.endsWith(',')) {
     combinedArrayContent += ',';
  }
  combinedArrayContent += '\n  ' + array2Content;

  const finalContent = `import { ChapterChallenge } from '../types';

export const hebrewsChallenges: ChapterChallenge[] = ${combinedArrayContent};
`;

  fs.writeFileSync(outputFile, finalContent);
  console.log('Successfully assembled hebrews.ts');
  
  // Clean up partial files
  fs.unlinkSync(part1Path);
  fs.unlinkSync(part2Path);
  console.log('Cleaned up partial files.');
};

assembleHebrews();
