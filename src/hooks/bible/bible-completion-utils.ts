import { BibleProgressData } from './bible-progress-types';

/**
 * Pure progress/completion helpers. Kept free of any challenge-data imports so
 * that modules using only these helpers (e.g. use-bible-status) don't pull the
 * large Bible challenge dataset into their bundle.
 */

export const isChallengeCompleted = (
  challengeId: string,
  progress: BibleProgressData | null
): boolean => {
  if (!progress || !progress.challenges_completed) {
    return false;
  }
  return progress.challenges_completed.includes(challengeId);
};

export const completeChallenge = async (
  userId: string,
  challengeId: string,
  pointsEarned: number = 10,
  progress: BibleProgressData,
  profile: unknown
) => {
  if (isChallengeCompleted(challengeId, progress)) {
    return progress; // Already completed
  }

  const updatedProgress = {
    ...progress,
    challenges_completed: [...(progress.challenges_completed || []), challengeId],
    total_points: (progress.total_points || 0) + pointsEarned,
  };

  return updatedProgress;
};

export const isChapterCompleted = (
  bookId: string,
  chapter: number,
  progress: BibleProgressData | null
): boolean => {
  if (!progress || !progress.completed_chapters) {
    return false;
  }
  return progress.completed_chapters.some(
    c => c.book_id === bookId && c.chapter === chapter
  );
};
