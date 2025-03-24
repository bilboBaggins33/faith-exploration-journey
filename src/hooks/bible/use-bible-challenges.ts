import { supabase } from '@/lib/supabase';
import { BibleProgressData } from './bible-progress-types';

/**
 * Check if a challenge is completed
 */
export const isChallengeCompleted = (
  challengeId: string,
  progress: BibleProgressData | null
): boolean => {
  if (!progress || !progress.challenges_completed) {
    return false;
  }
  
  return progress.challenges_completed.includes(challengeId);
};

/**
 * Complete a challenge and update all related progress
 */
export const completeChallenge = async (
  userId: string,
  challengeId: string,
  pointsEarned: number = 10,
  currentProgress: BibleProgressData,
  userProfile: any
): Promise<BibleProgressData> => {
  console.log(`Completing challenge ${challengeId} for user ${userId}`);
  
  // If the challenge is already completed, just return the current progress
  if (isChallengeCompleted(challengeId, currentProgress)) {
    console.log('Challenge already completed, returning current progress');
    return currentProgress;
  }
  
  // Get the current challenges completed array or initialize if null
  const challengesCompleted = [...(currentProgress.challenges_completed || [])];
  challengesCompleted.push(challengeId);
  
  // Extract book ID and chapter from the challenge ID (assuming format: bookId-chapter)
  const [bookId, chapterStr] = challengeId.split('-');
  const chapter = parseInt(chapterStr, 10);
  
  // Prepare updated progress data
  const updatedProgress: Partial<BibleProgressData> = {
    challenges_completed: challengesCompleted,
    total_points: (currentProgress.total_points || 0) + pointsEarned
  };
  
  // Update the completed chapters if we have a valid bookId and chapter
  if (bookId && !isNaN(chapter)) {
    const completedChapters = [...(currentProgress.completed_chapters || [])];
    
    // Check if this chapter is already completed
    const existingIndex = completedChapters.findIndex(
      ch => ch.book_id === bookId && ch.chapter === chapter
    );
    
    if (existingIndex >= 0) {
      // Update the existing entry with the score if it's higher
      if (!completedChapters[existingIndex].score || 
          completedChapters[existingIndex].score < pointsEarned) {
        completedChapters[existingIndex].score = pointsEarned;
      }
      completedChapters[existingIndex].completed_at = new Date().toISOString();
    } else {
      // Add a new completed chapter entry
      completedChapters.push({
        book_id: bookId,
        chapter: chapter,
        completed_at: new Date().toISOString(),
        score: pointsEarned
      });
      
      // Also update the total chapters read count
      updatedProgress.total_chapters_read = (currentProgress.total_chapters_read || 0) + 1;
    }
    
    updatedProgress.completed_chapters = completedChapters;
    
    // Update books_progress
    const booksProgress = { ...(currentProgress.books_progress || {}) };
    const bookProgress = booksProgress[bookId] || 0;
    booksProgress[bookId] = bookProgress + 1;
    updatedProgress.books_progress = booksProgress;
  }
  
  try {
    // Update the bible_progress table
    const { error: progressError } = await supabase
      .from('bible_progress')
      .update(updatedProgress)
      .eq('user_id', userId);
    
    if (progressError) throw progressError;
    
    // Update user profile with points and update streak
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let streak = userProfile?.streak || 0;
    const lastActive = userProfile?.last_active ? new Date(userProfile.last_active) : null;
    
    // If last active date exists, check if we need to update the streak
    if (lastActive) {
      lastActive.setHours(0, 0, 0, 0);
      
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastActive.getTime() === yesterday.getTime()) {
        // User was active yesterday, increment streak
        streak += 1;
      } else if (lastActive.getTime() !== today.getTime()) {
        // User wasn't active yesterday or today yet, reset streak
        streak = 1;
      }
      // If last active is today, keep streak as is
    } else {
      // No last active date, start streak at 1
      streak = 1;
    }
    
    const { error: profileError } = await supabase
      .from('user_profiles')
      .update({
        points: (userProfile?.points || 0) + pointsEarned,
        streak: streak,
        last_active: today.toISOString().split('T')[0] // Format as YYYY-MM-DD
      })
      .eq('user_id', userId);
    
    if (profileError) throw profileError;
    
    // Return the updated progress
    return {
      ...currentProgress,
      ...updatedProgress
    };
  } catch (error) {
    console.error('Error completing challenge:', error);
    throw error;
  }
};
