
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { BibleProgressData, UseBibleProgressReturn } from './bible-progress-types';
import { calculateBookProgress, isChapterCompleted, getChapterStatus } from './bible-progress-utils';

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
      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (profileError) {
        throw profileError;
      }

      setProfile(profileData);

      // Fetch bible progress
      const { data: progressData, error: progressError } = await supabase
        .from('bible_progress')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (progressError && progressError.code !== 'PGRST116') {
        // PGRST116 is the code for no rows returned, which is fine for new users
        throw progressError;
      }

      setProgress(progressData || {
        user_id: user.id,
        challenges_completed: [],
        verses_memorized: [],
        total_points: 0,
        books_progress: {},
        completed_chapters: [],
        total_chapters_read: 0
      });
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
    if (!progress || !progress.challenges_completed) return false;
    return progress.challenges_completed.includes(challengeId);
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
      const { error } = await supabase
        .from('user_profiles')
        .update(data)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

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
      // Check if record exists first
      const { data: existingData, error: checkError } = await supabase
        .from('bible_progress')
        .select('user_id')
        .eq('user_id', user.id)
        .maybeSingle();

      if (checkError) {
        throw checkError;
      }

      let updateError;
      
      if (existingData) {
        // Update existing record
        const { error } = await supabase
          .from('bible_progress')
          .update(data)
          .eq('user_id', user.id);
        
        updateError = error;
      } else {
        // Insert new record
        const { error } = await supabase
          .from('bible_progress')
          .insert({
            user_id: user.id,
            ...data
          });
        
        updateError = error;
      }

      if (updateError) {
        throw updateError;
      }

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
  const completeChallenge = async (challengeId: string, pointsEarned: number = 10) => {
    if (!user || !progress) return;
    
    try {
      console.log("Completing challenge:", challengeId, "with points:", pointsEarned);
      
      // Extract bookId and chapter from challengeId (format: "bookId-chapter")
      const [bookId, chapterStr] = challengeId.split('-');
      const chapter = parseInt(chapterStr, 10);
      
      if (!bookId || isNaN(chapter)) {
        console.error("Invalid challenge ID format:", challengeId);
        return;
      }
      
      // Add to completed challenges if not already there
      let challenges = [...(progress.challenges_completed || [])];
      const wasAlreadyCompleted = challenges.includes(challengeId);
      
      if (!wasAlreadyCompleted) {
        challenges.push(challengeId);
      }
      
      // Update completed_chapters array with the new score
      let completedChapters = [...(progress.completed_chapters || [])];
      
      // Find if chapter is already in completed_chapters
      const existingChapterIndex = completedChapters.findIndex(
        ch => ch.book_id === bookId && ch.chapter === chapter
      );
      
      const now = new Date().toISOString();
      let newPointsAdded = 0;
      
      // Either update existing chapter entry or add a new one
      if (existingChapterIndex >= 0) {
        const currentScore = completedChapters[existingChapterIndex].score || 0;
        // Only update score if it's better than the existing one
        if (pointsEarned > currentScore) {
          // Calculate the additional points earned (new score minus old score)
          newPointsAdded = pointsEarned - currentScore;
          completedChapters[existingChapterIndex] = {
            ...completedChapters[existingChapterIndex],
            completed_at: now,
            score: pointsEarned
          };
        } else {
          // If not updating the score, don't add new points
          newPointsAdded = 0;
        }
      } else {
        // Add new completed chapter entry
        completedChapters.push({
          book_id: bookId,
          chapter: chapter,
          completed_at: now,
          score: pointsEarned
        });
        // If this is a new completion, add the full points
        newPointsAdded = wasAlreadyCompleted ? 0 : pointsEarned;
      }
      
      // Calculate new total points, only adding the new points earned
      const existingPoints = progress.total_points || 0;
      const newPoints = existingPoints + newPointsAdded;
      
      // Update total chapters read count, only increment if it's a new chapter
      const existingChaptersRead = progress.total_chapters_read || 0;
      const newTotalChaptersRead = existingChapterIndex >= 0 
        ? existingChaptersRead 
        : existingChaptersRead + 1;
      
      // Prepare the update data
      const updateData = {
        challenges_completed: challenges,
        completed_chapters: completedChapters,
        total_points: newPoints,
        total_chapters_read: newTotalChaptersRead
      };
      
      console.log("Updating progress with:", updateData);
      
      // Update the progress in Supabase
      await updateProgress(updateData);
      
      // Also update user profile points
      if (profile && newPointsAdded > 0) {
        await updateProfile({
          points: (profile.points || 0) + newPointsAdded
        });
      }
      
      console.log("Challenge completed successfully, added points:", newPointsAdded);
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
    completeChallenge,
    getChapterStatus: getChapterStatusWrapper
  };
};
