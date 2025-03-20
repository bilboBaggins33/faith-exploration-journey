
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface BibleProgress {
  challenges_completed: string[];
  verses_memorized: string[];
  total_points: number;
  books_progress: Record<string, number>;
}

interface UserProfile {
  streak: number;
  points: number;
  last_active: string;
  full_name: string;
}

export function useBibleProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<BibleProgress | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Load initial progress
  useEffect(() => {
    if (!user) {
      setProgress(null);
      setProfile(null);
      setLoading(false);
      return;
    }

    async function loadProgress() {
      setLoading(true);
      try {
        // Get user profile
        const { data: profileData, error: profileError } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (profileError) throw profileError;
        setProfile(profileData);

        // Get bible progress
        const { data: progressData, error: progressError } = await supabase
          .from('bible_progress')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (progressError) throw progressError;
        setProgress(progressData);
      } catch (error) {
        console.error('Error loading progress:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
  }, [user]);

  // Mark a challenge as completed
  const completeChallenge = async (challengeId: string, pointsEarned: number) => {
    if (!user || !progress) return;

    try {
      // Update only if not already completed
      if (!progress.challenges_completed.includes(challengeId)) {
        const newChallenges = [...progress.challenges_completed, challengeId];
        const newTotalPoints = progress.total_points + pointsEarned;

        // Check if it's a new day to update streak
        const today = new Date().toISOString().split('T')[0];
        let newStreak = profile?.streak || 0;
        let updatedLastActive = profile?.last_active || today;

        if (profile && profile.last_active !== today) {
          // If yesterday, increment streak
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];

          if (profile.last_active === yesterdayStr) {
            newStreak += 1;
          } else {
            // Streak broken
            newStreak = 1;
          }
          updatedLastActive = today;
        }

        // Update bible progress
        const { error: progressError } = await supabase
          .from('bible_progress')
          .update({
            challenges_completed: newChallenges,
            total_points: newTotalPoints
          })
          .eq('user_id', user.id);

        if (progressError) throw progressError;

        // Update user profile
        const { error: profileError } = await supabase
          .from('user_profiles')
          .update({
            streak: newStreak,
            points: (profile?.points || 0) + pointsEarned,
            last_active: updatedLastActive
          })
          .eq('user_id', user.id);

        if (profileError) throw profileError;

        // Update local state
        setProgress({
          ...progress,
          challenges_completed: newChallenges,
          total_points: newTotalPoints
        });

        if (profile) {
          setProfile({
            ...profile,
            streak: newStreak,
            points: profile.points + pointsEarned,
            last_active: updatedLastActive
          });
        }

        toast({
          title: "Challenge completed!",
          description: `You earned ${pointsEarned} points.`,
        });
      }
    } catch (error) {
      console.error('Error completing challenge:', error);
      toast({
        title: "Error saving progress",
        description: "There was an issue saving your progress. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Add a memorized verse
  const memorizeVerse = async (verseReference: string, pointsEarned: number) => {
    if (!user || !progress) return;

    try {
      // Update only if not already memorized
      if (!progress.verses_memorized.includes(verseReference)) {
        const newVerses = [...progress.verses_memorized, verseReference];
        const newTotalPoints = progress.total_points + pointsEarned;

        // Update bible progress
        const { error: progressError } = await supabase
          .from('bible_progress')
          .update({
            verses_memorized: newVerses,
            total_points: newTotalPoints
          })
          .eq('user_id', user.id);

        if (progressError) throw progressError;

        // Update user profile - points only
        const { error: profileError } = await supabase
          .from('user_profiles')
          .update({
            points: (profile?.points || 0) + pointsEarned
          })
          .eq('user_id', user.id);

        if (profileError) throw profileError;

        // Update local state
        setProgress({
          ...progress,
          verses_memorized: newVerses,
          total_points: newTotalPoints
        });

        if (profile) {
          setProfile({
            ...profile,
            points: profile.points + pointsEarned
          });
        }

        toast({
          title: "Verse memorized!",
          description: `You've successfully memorized ${verseReference} and earned ${pointsEarned} points.`,
        });
      }
    } catch (error) {
      console.error('Error saving memorized verse:', error);
      toast({
        title: "Error saving progress",
        description: "There was an issue saving your memorization progress.",
        variant: "destructive",
      });
    }
  };

  return {
    progress,
    profile,
    loading,
    completeChallenge,
    memorizeVerse,
    isCompleted: (challengeId: string) => 
      progress?.challenges_completed.includes(challengeId) || false,
    isMemorized: (verseReference: string) => 
      progress?.verses_memorized.includes(verseReference) || false,
  };
}
