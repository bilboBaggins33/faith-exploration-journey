
import { BibleProgressData } from './bible-progress-types';
import { isChallengeCompleted, completeChallenge } from './use-bible-challenges';
import { getChapterStatus as getChapterStatusUtil } from './bible-progress-utils';

export const useBibleStatus = (progress: BibleProgressData | null, profile: any) => {
  const isCompleted = (challengeId: string) => {
    return isChallengeCompleted(challengeId, progress);
  };

  const getChapterStatus = (bookId: string, chapter: number) => {
    if (!progress) return { isCompleted: false, score: 0, maxScore: 0 };
    return getChapterStatusUtil(
      bookId, 
      chapter, 
      progress.completed_chapters, 
      progress.challenges_completed
    );
  };

  const completeUserChallenge = async (challengeId: string, pointsEarned: number = 10) => {
    if (!progress?.user_id) return;
    
    try {
      const updatedProgress = await completeChallenge(
        progress.user_id,
        challengeId,
        pointsEarned,
        progress,
        profile
      );
      
      return updatedProgress;
    } catch (error) {
      console.error('Error completing challenge:', error);
      throw error;
    }
  };

  return {
    isCompleted,
    getChapterStatus,
    completeChallenge: completeUserChallenge,
  };
};
