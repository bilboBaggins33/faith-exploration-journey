
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/auth';
import { BibleProgressData } from './bible-progress-types';
import { fetchUserProfile, fetchBibleProgress } from './use-bible-data';

export const useBibleFetch = () => {
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
      const profileData = await fetchUserProfile(user.id);
      setProfile(profileData);

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

  return {
    profile,
    progress,
    loading,
    refreshData: fetchData,
    setProgress,
  };
};
