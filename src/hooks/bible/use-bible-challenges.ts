
import { BibleProgressData } from './bible-progress-types';
import { updateBibleProgress, updateUserProfile } from './use-bible-data';

/**
 * Completes a challenge and updates the user's progress
 */
export const completeChallenge = async (
  userId: string,
  challengeId: string,
  pointsEarned: number = 10,
  progress: BibleProgressData,
  profile: any
): Promise<BibleProgressData> => {
  console.log("Completing challenge:", challengeId, "with points:", pointsEarned);
  
  // Extract bookId and chapter from challengeId (format: "bookId-chapter")
  const [bookId, chapterStr] = challengeId.split('-');
  const chapter = parseInt(chapterStr, 10);
  
  if (!bookId || isNaN(chapter)) {
    console.error("Invalid challenge ID format:", challengeId);
    throw new Error("Invalid challenge ID format");
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
  await updateBibleProgress(userId, updateData);
  
  // Also update user profile points
  if (profile && newPointsAdded > 0) {
    await updateUserProfile(userId, {
      points: (profile.points || 0) + newPointsAdded
    });
  }
  
  console.log("Challenge completed successfully, added points:", newPointsAdded);
  
  // Return the updated progress data
  return {
    ...progress,
    ...updateData
  };
};

/**
 * Checks if a challenge is completed
 */
export const isChallengeCompleted = (
  challengeId: string, 
  progress: BibleProgressData | null
): boolean => {
  if (!progress || !progress.challenges_completed) return false;
  return progress.challenges_completed.includes(challengeId);
};
