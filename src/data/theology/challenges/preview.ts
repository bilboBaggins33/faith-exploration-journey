import type { TheologyChallenge } from '../types';
import previewData from './preview-data.json';

/** Only Mere Christianity ch.1 ships in the production client for logged-out preview. */
export const previewTheologyChallenge = previewData as TheologyChallenge;
