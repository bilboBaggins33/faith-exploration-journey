
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';

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

  // Helper function to update profile data
  const updateProfile = async (data: any) => {
    if (!user) return;

    const { error } = await supabase
      .from('user_profiles')
      .update(data)
      .eq('user_id', user.id);

    if (error) {
      throw error;
    }

    await fetchData();
  };

  // Helper function to update progress data
  const updateProgress = async (data: any) => {
    if (!user) return;

    const { error } = await supabase
      .from('bible_progress')
      .update(data)
      .eq('user_id', user.id);

    if (error) {
      throw error;
    }

    await fetchData();
  };

  return {
    profile,
    progress,
    loading,
    refreshProfile,
    updateProfile,
    updateProgress
  };
};
