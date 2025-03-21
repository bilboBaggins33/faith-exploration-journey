
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { bibleBooks } from '@/data/bible/books';

export const useBibleProgress = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [progress, setProgress] = useState<any>(null);
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
    
    const book = bibleBooks.find(b => b.id === bookId);
    if (!book) return 0;
    
    // Count completed chapters for this book
    const completedChapters = progress.completed_chapters.filter(
      (ch: any) => ch.book_id === bookId
    ).length;
    
    const bookProgress = Math.round((completedChapters / book.chapters) * 100);
    return bookProgress > 100 ? 100 : bookProgress;
  };

  // Helper function to check if a challenge is completed
  const isCompleted = (challengeId: string) => {
    if (!progress || !progress.challenges_completed) return false;
    return progress.challenges_completed.includes(challengeId);
  };

  // Helper function to complete a challenge
  const completeChallenge = async (challengeId: string, pointsEarned: number = 10) => {
    if (!user || !progress) return;
    
    try {
      // Add to completed challenges if not already there
      let challenges = [...(progress.challenges_completed || [])];
      if (!challenges.includes(challengeId)) {
        challenges.push(challengeId);
      }
      
      // Update total points
      const newPoints = (progress.total_points || 0) + pointsEarned;
      
      // Update the progress in Supabase
      await updateProgress({
        challenges_completed: challenges,
        total_points: newPoints
      });
      
      // Also update user profile points
      if (profile) {
        await updateProfile({
          points: (profile.points || 0) + pointsEarned
        });
      }
      
      await fetchData();
    } catch (error) {
      console.error('Error completing challenge:', error);
      throw error;
    }
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
  const updateProgress = async (data: any) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('bible_progress')
        .update(data)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      await fetchData();
    } catch (error) {
      console.error('Error updating Bible progress:', error);
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
    completeChallenge
  };
};
