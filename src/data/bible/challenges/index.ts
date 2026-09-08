/**
 * Client-facing challenge module: titles only (no quiz payloads).
 * Full challenges are loaded via the gated get-challenge edge function.
 */
export { bibleChallengeTitles, getBibleChallengeTitle } from './titles';
