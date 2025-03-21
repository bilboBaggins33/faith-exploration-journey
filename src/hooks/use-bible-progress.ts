
import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { calculateBibleProgress } from '@/data/bible/utils';
import { bibleBooks } from '@/data/bibleData';

export interface BibleProgress {
  challenges_completed: string[];
  verses_memorized: string[];
  total_points: number;
  books_progress: Record<string, number>;
  completed_chapters?: {
    book_id: string;
    chapter: number;
    completed_at: string;
    score?: number;
  }[];
  total_chapters_read?: number;
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
    console.log('useBibleProgress hook initialized with user:', user?.id);
    
    if (!user || !isSupabaseConfigured()) {
      // Create mock progress data for development when Supabase is not configured
      if (!isSupabaseConfigured()) {
        console.log('Supabase not configured, using mock data');
        setProgress({
          challenges_completed: [],
          verses_memorized: [],
          total_points: 0,
          books_progress: {},
          completed_chapters: [],
          total_chapters_read: 0
        });
        setProfile({
          streak: 0,
          points: 0,
          last_active: new Date().toISOString().split('T')[0],
          full_name: 'Test User'
        });
      } else {
        console.log('No user logged in');
        setProgress(null);
        setProfile(null);
      }
      setLoading(false);
      return;
    }

    async function loadProgress() {
      setLoading(true);
      try {
        console.log('Loading progress for user:', user.id);
        
        // Get user profile
        const { data: profileData, error: profileError } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (profileError) {
          console.error('Error loading profile:', profileError);
          
          // If the profile doesn't exist yet, create it
          if (profileError.code === 'PGRST116') {
            console.log('Profile not found, creating new profile');
            const { data: newProfile, error: createError } = await supabase
              .from('user_profiles')
              .insert({
                user_id: user.id,
                full_name: user.user_metadata?.full_name || 'User',
                streak: 0,
                points: 0,
                last_active: new Date().toISOString().split('T')[0]
              })
              .select()
              .single();
              
            if (createError) {
              console.error('Error creating profile:', createError);
              throw createError;
            }
            
            setProfile(newProfile);
          } else {
            throw profileError;
          }
        } else {
          console.log('Profile loaded successfully:', profileData);
          setProfile(profileData);
        }

        // Get bible progress
        const { data: progressData, error: progressError } = await supabase
          .from('bible_progress')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (progressError) {
          console.error('Error loading progress:', progressError);
          
          // If the progress record doesn't exist yet, create it
          if (progressError.code === 'PGRST116') {
            console.log('Progress not found, creating new progress record');
            const { data: newProgress, error: createError } = await supabase
              .from('bible_progress')
              .insert({
                user_id: user.id,
                challenges_completed: [],
                verses_memorized: [],
                total_points: 0,
                books_progress: {},
                completed_chapters: [],
                total_chapters_read: 0
              })
              .select()
              .single();
              
            if (createError) {
              console.error('Error creating progress:', createError);
              throw createError;
            }
            
            setProgress(newProgress);
          } else {
            throw progressError;
          }
        } else {
          console.log('Progress loaded successfully:', progressData);
          
          // Initialize completed_chapters if it doesn't exist
          if (progressData && !progressData.completed_chapters) {
            progressData.completed_chapters = [];
          }
          
          // Initialize total_chapters_read if it doesn't exist
          if (progressData && !progressData.total_chapters_read) {
            progressData.total_chapters_read = 0;
          }
          
          // Initialize books_progress if it doesn't exist
          if (progressData && !progressData.books_progress) {
            progressData.books_progress = {};
          }
          
          setProgress(progressData);
        }
      } catch (error) {
        console.error('Error loading progress:', error);
        toast({
          title: "Error loading progress",
          description: "There was an issue loading your progress. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
  }, [user, toast]);

  // Mock function for when Supabase is not configured
  const mockSaveProgress = (message: string) => {
    console.log('Mock save progress:', message);
    toast({
      title: "Development Mode",
      description: "Progress saved locally (Supabase not configured)",
    });
    return Promise.resolve();
  };

  // Update books_progress when a chapter is completed
  const updateBookProgress = (bookId: string, currentProgress: BibleProgress) => {
    console.log('Updating book progress for:', bookId);
    const bookChapters = new Set<number>();
    
    // Find all completed chapters for this book
    if (currentProgress.completed_chapters) {
      currentProgress.completed_chapters.forEach(chapter => {
        if (chapter.book_id === bookId) {
          bookChapters.add(chapter.chapter);
        }
      });
    }
    
    // Find the corresponding book in bibleBooks to get total chapters
    const book = bibleBooks.find(b => b.id === bookId);
    if (!book) return {}; // Return empty object instead of 0
    
    const totalBookChapters = book.chapters;
    const completedPercentage = totalBookChapters > 0 
      ? Math.round((bookChapters.size / totalBookChapters) * 100) 
      : 0;
    
    console.log(`Book progress: ${bookChapters.size}/${totalBookChapters} chapters (${completedPercentage}%)`);
    
    return {
      ...currentProgress.books_progress,
      [bookId]: completedPercentage
    };
  };

  // Mark a challenge as completed
  const completeChallenge = async (challengeId: string, pointsEarned: number) => {
    console.log(`Completing challenge ${challengeId} for ${pointsEarned} points`);
    
    if (!isSupabaseConfigured()) {
      // Mock implementation for development
      if (!progress) {
        console.log('No progress data available');
        return;
      }
      
      if (!progress.challenges_completed.includes(challengeId)) {
        const newChallenges = [...progress.challenges_completed, challengeId];
        const newTotalPoints = progress.total_points + pointsEarned;
        
        // Handle chapter challenges (format: "bookId-chapter")
        let newCompletedChapters = progress.completed_chapters || [];
        let newTotalChaptersRead = progress.total_chapters_read || 0;
        let newBooksProgress = { ...progress.books_progress };
        
        if (challengeId.includes('-')) {
          const [bookId, chapterStr] = challengeId.split('-');
          const chapter = parseInt(chapterStr);
          
          if (!isNaN(chapter)) {
            // Check if this chapter is already in completed_chapters
            const existingChapterIndex = newCompletedChapters.findIndex(
              c => c.book_id === bookId && c.chapter === chapter
            );
            
            if (existingChapterIndex >= 0) {
              // Update existing chapter entry
              newCompletedChapters[existingChapterIndex].score = pointsEarned;
            } else {
              // Add new chapter entry
              newCompletedChapters = [
                ...newCompletedChapters,
                {
                  book_id: bookId,
                  chapter: chapter,
                  completed_at: new Date().toISOString(),
                  score: pointsEarned
                }
              ];
              newTotalChaptersRead += 1;
            }
            
            // Update book progress percentage
            newBooksProgress = updateBookProgress(bookId, {
              ...progress,
              completed_chapters: newCompletedChapters
            });
          }
        }
        
        // Update local state immediately
        setProgress({
          ...progress,
          challenges_completed: newChallenges,
          total_points: newTotalPoints,
          completed_chapters: newCompletedChapters,
          total_chapters_read: newTotalChaptersRead,
          books_progress: newBooksProgress
        });
        
        if (profile) {
          setProfile({
            ...profile,
            points: profile.points + pointsEarned,
            streak: profile.streak + 1,
            last_active: new Date().toISOString().split('T')[0]
          });
        }
        
        await mockSaveProgress(`Challenge ${challengeId} completed for ${pointsEarned} points`);
        
        // Show toast confirmation
        toast({
          title: "Challenge completed!",
          description: `You earned ${pointsEarned} points.`,
        });
      } else {
        console.log('Challenge already completed');
      }
      return;
    }

    if (!user || !progress) {
      console.error('No user or progress data available');
      return;
    }

    try {
      console.log('Saving challenge completion to Supabase');
      
      // Update only if not already completed
      if (!progress.challenges_completed.includes(challengeId)) {
        const newChallenges = [...progress.challenges_completed, challengeId];
        const newTotalPoints = progress.total_points + pointsEarned;
        
        // Handle chapter challenges (format: "bookId-chapter")
        let newCompletedChapters = progress.completed_chapters || [];
        let newTotalChaptersRead = progress.total_chapters_read || 0;
        let newBooksProgress = { ...progress.books_progress };
        
        if (challengeId.includes('-')) {
          const [bookId, chapterStr] = challengeId.split('-');
          const chapter = parseInt(chapterStr);
          
          if (!isNaN(chapter)) {
            console.log(`Processing chapter challenge: ${bookId} chapter ${chapter}`);
            
            // Check if this chapter is already in completed_chapters
            const existingChapterIndex = newCompletedChapters.findIndex(
              c => c.book_id === bookId && c.chapter === chapter
            );
            
            if (existingChapterIndex >= 0) {
              // Update existing chapter entry
              console.log('Updating existing chapter completion');
              newCompletedChapters[existingChapterIndex].score = pointsEarned;
            } else {
              // Add to completed chapters if it's a Bible chapter
              console.log('Adding new chapter completion');
              newCompletedChapters = [
                ...newCompletedChapters,
                {
                  book_id: bookId,
                  chapter: chapter,
                  completed_at: new Date().toISOString(),
                  score: pointsEarned
                }
              ];
              newTotalChaptersRead += 1;
            }
            
            // Update book progress percentage
            newBooksProgress = updateBookProgress(bookId, {
              ...progress,
              completed_chapters: newCompletedChapters
            });
          }
        }

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
            console.log('Continuing streak');
            newStreak += 1;
          } else {
            // Streak broken
            console.log('Starting new streak');
            newStreak = 1;
          }
          updatedLastActive = today;
        }

        console.log('Updating bible_progress table...');
        // Update bible progress
        const { error: progressError, data: updatedProgress } = await supabase
          .from('bible_progress')
          .update({
            challenges_completed: newChallenges,
            total_points: newTotalPoints,
            completed_chapters: newCompletedChapters,
            total_chapters_read: newTotalChaptersRead,
            books_progress: newBooksProgress
          })
          .eq('user_id', user.id)
          .select();

        if (progressError) {
          console.error('Error updating bible progress:', progressError);
          throw progressError;
        }
        
        console.log('Bible progress updated successfully:', updatedProgress);

        console.log('Updating user_profiles table...');
        // Update user profile
        const { error: profileError, data: updatedProfile } = await supabase
          .from('user_profiles')
          .update({
            streak: newStreak,
            points: (profile?.points || 0) + pointsEarned,
            last_active: updatedLastActive
          })
          .eq('user_id', user.id)
          .select();

        if (profileError) {
          console.error('Error updating user profile:', profileError);
          throw profileError;
        }
        
        console.log('User profile updated successfully:', updatedProfile);

        // Update local state
        setProgress({
          ...progress,
          challenges_completed: newChallenges,
          total_points: newTotalPoints,
          completed_chapters: newCompletedChapters,
          total_chapters_read: newTotalChaptersRead,
          books_progress: newBooksProgress
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
      } else {
        console.log('Challenge already completed, skipping update');
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
    if (!isSupabaseConfigured()) {
      // Mock implementation for development
      if (!progress) return;
      
      if (!progress.verses_memorized.includes(verseReference)) {
        const newVerses = [...progress.verses_memorized, verseReference];
        const newTotalPoints = progress.total_points + pointsEarned;
        
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
        
        await mockSaveProgress(`Verse ${verseReference} memorized for ${pointsEarned} points`);
      }
      return;
    }

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

  // Get overall Bible reading progress percentage
  const getBibleReadingPercentage = () => {
    if (!progress || !progress.total_chapters_read) return 0;
    return calculateBibleProgress(progress.total_chapters_read);
  };

  // Get book completion percentage directly from books_progress
  const getBookProgress = (bookId: string) => {
    if (!progress || !progress.books_progress) return 0;
    return progress.books_progress[bookId] || 0;
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
    getBibleReadingPercentage,
    getBookProgress,
  };
}
