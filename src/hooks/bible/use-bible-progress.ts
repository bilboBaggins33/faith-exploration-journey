
import { useBibleFetch } from './use-bible-fetch';
import { useBibleCalculations } from './use-bible-calculations';
import { useBibleStatus } from './use-bible-status';
import { updateUserProfile, updateBibleProgress } from './use-bible-data';
import type { BibleProgressData } from './bible-progress-types';

export const useBibleProgress = () => {
  const { profile, progress, loading, refreshData, setProgress } = useBibleFetch();
  const { getBookProgress, getBookAverageScore, getChapterScore } = useBibleCalculations(progress);
  const { isCompleted, getChapterStatus, completeChallenge, getChapterDifficultyScores } = useBibleStatus(progress, profile);

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
        // Update local state immediately with the new data
        setProgress(prev => {
          if (!prev) return null;
          
          const updated = { ...prev };
          
          // Merge completed chapters
          if (data.completed_chapters) {
            const existing = prev.completed_chapters || [];
            const newChapters = data.completed_chapters;
            
            // Remove any existing entry for the same book/chapter/difficulty combination
            const filteredExisting = existing.filter(
              (existingChapter: any) => !newChapters.some(
                (newChapter: any) => 
                  existingChapter.book_id === newChapter.book_id && 
                  existingChapter.chapter === newChapter.chapter &&
                  existingChapter.difficulty === newChapter.difficulty
              )
            );
            
            updated.completed_chapters = [...filteredExisting, ...newChapters];
          }
          
          // Merge challenges completed
          if (data.challenges_completed) {
            const existing = prev.challenges_completed || [];
            const merged = [...new Set([...existing, ...data.challenges_completed])];
            updated.challenges_completed = merged;
          }
          
          // Add points
          if (data.total_points !== undefined) {
            updated.total_points = (prev.total_points || 0) + data.total_points;
          }
          
          return updated;
        });
        
        // Then update the database
        await updateBibleProgress(progress.user_id, data);
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
    getChapterStatus,
    getChapterDifficultyScores
  };
};
