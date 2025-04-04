
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { BibleProgressData, UseBibleProgressReturn } from './bible-progress-types';
import { calculateBookProgress, getChapterStatus } from './bible-progress-utils';
import { 
  fetchUserProfile, 
  fetchBibleProgress, 
  updateUserProfile, 
  updateBibleProgress 
} from './use-bible-data';
import { completeChallenge, isChallengeCompleted } from './use-bible-challenges';

export const useBibleProgress = (): UseBibleProgressReturn => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [progress, setProgress] = useState<BibleProgressData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      // Fetch profile
      const profileData = await fetchUserProfile(user.id);
      setProfile(profileData);

      // Fetch bible progress
      const progressData = await fetchBibleProgress(user.id);
      setProgress(progressData);
    } catch (error) {
      console.error('Error fetching Bible progress data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const refreshProfile = async () => {
    await fetchData();
  };

  // Helper function to get book progress percentage
  const getBookProgress = (bookId: string) => {
    if (!progress || !progress.completed_chapters) return 0;
    return calculateBookProgress(bookId, progress.completed_chapters);
  };

  // Helper function to check if a challenge is completed
  const isCompleted = (challengeId: string) => {
    return isChallengeCompleted(challengeId, progress);
  };

  // Helper function to get chapter status
  const getChapterStatusWrapper = (bookId: string, chapter: number) => {
    if (!progress) return { isCompleted: false, score: 0, maxScore: 0 };
    return getChapterStatus(
      bookId, 
      chapter, 
      progress.completed_chapters, 
      progress.challenges_completed
    );
  };

  // Helper function to update profile data
  const updateProfile = async (data: any) => {
    if (!user) return;

    try {
      await updateUserProfile(user.id, data);
      await fetchData();
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  // Helper function to update progress data
  const updateProgress = async (data: Partial<BibleProgressData>) => {
    if (!user) return;

    try {
      await updateBibleProgress(user.id, data);
      
      // Immediately update local state to reflect changes
      setProgress(prev => {
        if (!prev) return data as BibleProgressData;
        return { ...prev, ...data };
      });
      
      // Also fetch fresh data from the server to ensure everything is in sync
      await fetchData();
    } catch (error) {
      console.error('Error updating Bible progress:', error);
      throw error;
    }
  };

  // Helper function to complete a challenge
  const completeUserChallenge = async (challengeId: string, pointsEarned: number = 10) => {
    if (!user || !progress) return;
    
    try {
      const updatedProgress = await completeChallenge(
        user.id,
        challengeId,
        pointsEarned,
        progress,
        profile
      );
      
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error completing challenge:', error);
      throw error;
    }
  };

  return {
    profile,
    progress,
    loading,
    refreshProfile,
    updateProfile,
    updateProgress,
    getBookProgress,
    isCompleted,
    completeChallenge: completeUserChallenge,
    getChapterStatus: getChapterStatusWrapper
  };
};
