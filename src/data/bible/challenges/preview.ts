import type { ChapterChallenge } from '../types';
import previewData from './preview-data.json';

/** Only Genesis 1 ships in the production client bundle for logged-out preview. */
export const previewBibleChallenge = previewData as ChapterChallenge;
