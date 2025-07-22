
import { useBibleFetch } from './use-bible-fetch';
import { useBibleCalculations } from './use-bible-calculations';
import { useBibleStatus } from './use-bible-status';
import { updateUserProfile, updateBibleProgress } from './use-bible-data';
import type { BibleProgressData } from './bible-progress-types';

export const useBibleProgress = () => {
  const { profile, progress, loading, refreshData, setProgress } = useBibleFetch();
  const { getBookProgress, getBookAverageScore, getChapterScore } = useBibleCalculations(progress);
  const { isCompleted, getChapterStatus, completeChallenge } = useBibleStatus(progress, profile);

  const updateProfile = async (data: any) => {
    if (!progress?.user_id) return;

    try {
      await updateUserProfile(progress.user_id, data);
      await refreshData();
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  const updateProgress = async (data: Partial<BibleProgressData> | 'reset') => {
    if (!progress?.user_id) return;

    try {
      if (data === 'reset') {
        const resetData = {
          completed_chapters: [],
          challenges_completed: [],
          verses_memorized: [],
          total_points: 0,
          books_progress: {},
          total_chapters_read: 0
        };
        
        await updateBibleProgress(progress.user_id, resetData);
        setProgress({ ...progress, ...resetData });
      } else {
        await updateBibleProgress(progress.user_id, data);
        setProgress(prev => prev ? { ...prev, ...data } : null);
      }
      
      await refreshData();
    } catch (error) {
      console.error('Error updating Bible progress:', error);
      throw error;
    }
  };

  return {
    profile,
    progress,
    loading,
    refreshProfile: refreshData,
    updateProfile,
    updateProgress,
    getBookProgress,
    getBookAverageScore,
    getChapterScore,
    isCompleted,
    completeChallenge,
    getChapterStatus
  };
};
