
import { supabase } from '@/lib/supabase';
import { BibleProgressData } from './bible-progress-types';

/**
 * Fetches a user's profile data from Supabase
 */
export const fetchUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
};

/**
 * Fetches a user's Bible progress data from Supabase
 */
export const fetchBibleProgress = async (userId: string): Promise<BibleProgressData | null> => {
  const { data, error } = await supabase
    .from('bible_progress')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') {
    // PGRST116 is the code for no rows returned, which is fine for new users
    throw error;
  }

  return data || createDefaultBibleProgress(userId);
};

/**
 * Creates a default Bible progress object for new users
 */
export const createDefaultBibleProgress = (userId: string): BibleProgressData => {
  return {
    user_id: userId,
    challenges_completed: [],
    verses_memorized: [],
    total_points: 0,
    books_progress: {},
    completed_chapters: [],
    total_chapters_read: 0
  };
};

/**
 * Updates a user's profile data in Supabase
 */
export const updateUserProfile = async (userId: string, data: any) => {
  const { error } = await supabase
    .from('user_profiles')
    .update(data)
    .eq('user_id', userId);

  if (error) {
    throw error;
  }
};

/**
 * Updates a user's Bible progress data in Supabase
 */
export const updateBibleProgress = async (userId: string, data: Partial<BibleProgressData>) => {
  // Get existing data to merge with new data
  const { data: existingData, error: checkError } = await supabase
    .from('bible_progress')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();

  if (checkError) {
    throw checkError;
  }

  let updateData = { ...data };
  
  if (existingData) {
    // Merge existing data with new data
    if (data.completed_chapters && existingData.completed_chapters) {
      const existingChapters = existingData.completed_chapters || [];
      const newChapters = data.completed_chapters || [];
      
      // Remove any existing entry for the same book/chapter combination
      const filteredExistingChapters = existingChapters.filter(
        (existing: any) => !newChapters.some(
          (newChapter: any) => existing.book_id === newChapter.book_id && existing.chapter === newChapter.chapter
        )
      );
      
      // Combine filtered existing chapters with new chapters
      updateData.completed_chapters = [...filteredExistingChapters, ...newChapters];
    }
    
    if (data.challenges_completed && existingData.challenges_completed) {
      const existingChallenges = existingData.challenges_completed || [];
      const newChallenges = data.challenges_completed || [];
      const mergedChallenges = [...new Set([...existingChallenges, ...newChallenges])];
      updateData.challenges_completed = mergedChallenges;
    }
    
    if (data.total_points !== undefined && existingData.total_points) {
      updateData.total_points = existingData.total_points + data.total_points;
    }

    // Update existing record
    const { error } = await supabase
      .from('bible_progress')
      .update(updateData)
      .eq('user_id', userId);
    
    if (error) throw error;
  } else {
    // Insert new record
    const { error } = await supabase
      .from('bible_progress')
      .insert({
        user_id: userId,
        ...updateData
      });
    
    if (error) throw error;
  }
};
