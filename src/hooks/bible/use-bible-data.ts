
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
  // Check if record exists first
  const { data: existingData, error: checkError } = await supabase
    .from('bible_progress')
    .select('user_id')
    .eq('user_id', userId)
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
      .eq('user_id', userId);
    
    updateError = error;
  } else {
    // Insert new record
    const { error } = await supabase
      .from('bible_progress')
      .insert({
        user_id: userId,
        ...data
      });
    
    updateError = error;
  }

  if (updateError) {
    throw updateError;
  }
};
