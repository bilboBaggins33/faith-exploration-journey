
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { BibleProgressData, BookProgressDetails, UseBibleProgressReturn } from './bible-progress-types';
import { calculateBookProgress, getChapterStatus } from './bible-progress-utils';
import { 
  fetchUserProfile, 
  fetchBibleProgress, 
  updateUserProfile, 
  updateBibleProgress 
} from './use-bible-data';
import { completeChallenge, isChallengeCompleted } from './use-bible-challenges';
import { bibleBooks } from '@/data/bible';

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
  const getBookProgress = (bookId: string): BookProgressDetails => {
    if (!progress || !progress.completed_chapters) {
      const book = bibleBooks.find(b => b.id === bookId);
      const totalChapters = book ? book.chapters : 0;
      return {
        percentage: 0,
        completed: 0,
        total: totalChapters
      };
    }
    
    const book = bibleBooks.find(b => b.id === bookId);
    if (!book) {
      return {
        percentage: 0,
        completed: 0,
        total: 0
      };
    }
    
    const completedChapters = progress.completed_chapters.filter(
      chapter => chapter.book_id === bookId
    ).length;
    
    const percentage = Math.round((completedChapters / book.chapters) * 100);
    
    return {
      percentage,
      completed: completedChapters,
      total: book.chapters
    };
  };

  // Helper function to get average score for a book
  const getBookAverageScore = (bookId: string): number => {
    if (!progress || !progress.completed_chapters) return 0;
    
    const bookChapters = progress.completed_chapters.filter(
      chapter => chapter.book_id === bookId && chapter.score !== undefined
    );
    
    if (bookChapters.length === 0) return 0;
    
    const totalScore = bookChapters.reduce(
      (sum, chapter) => sum + (chapter.score || 0), 
      0
    );
    
    return Math.round((totalScore / bookChapters.length) * 10);
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
  const updateProgress = async (data: Partial<BibleProgressData> | 'reset') => {
    if (!user) return;

    try {
      if (data === 'reset') {
        // Reset all progress by creating a new empty progress object
        await updateBibleProgress(user.id, {
          completed_chapters: [],
          challenges_completed: [],
          verses_memorized: [],
          total_points: 0,
          books_progress: {},
          total_chapters_read: 0
        });
      } else {
        // Regular update with partial data
        await updateBibleProgress(user.id, data);
      }
      
      // Immediately update local state to reflect changes
      if (data === 'reset') {
        setProgress({
          user_id: user.id,
          completed_chapters: [],
          challenges_completed: [],
          verses_memorized: [],
          total_points: 0,
          books_progress: {},
          total_chapters_read: 0
        });
      } else {
        setProgress(prev => {
          if (!prev) return data as BibleProgressData;
          return { ...prev, ...data };
        });
      }
      
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
    getBookAverageScore,
    isCompleted,
    completeChallenge: completeUserChallenge,
    getChapterStatus: getChapterStatusWrapper
  };
};
