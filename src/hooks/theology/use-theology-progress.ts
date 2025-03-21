
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { theologyBooks } from '@/data/theology/books';
import { TheologyProgressData, UseTheologyProgressReturn } from './theology-progress-types';
import {
  calculateBookProgress,
  getBookChaptersRead,
  calculateBookAverageScore,
  checkChapterCompletion,
  getChapterCompletionStatus
} from './theology-progress-utils';

export const useTheologyProgress = (): UseTheologyProgressReturn => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<TheologyProgressData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      // Fetch theology progress
      const { data, error } = await supabase
        .from('theology_progress')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        // PGRST116 is the code for no rows returned, which is fine for new users
        throw error;
      }

      setProgress(data || {
        user_id: user.id,
        completed_chapters: [],
        books_started: [],
        books_completed: [],
        total_chapters_read: 0
      });
    } catch (error) {
      console.error('Error fetching theology progress data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const refreshProgress = async () => {
    await fetchData();
  };

  // Use utility functions with the progress data
  const getBookProgress = (bookId: string) => {
    if (!progress?.completed_chapters) return 0;
    return calculateBookProgress(bookId, progress.completed_chapters);
  };

  const getBookChaptersReadWrapper = (bookId: string) => {
    if (!progress?.completed_chapters) return 0;
    return getBookChaptersRead(bookId, progress.completed_chapters);
  };

  const getBookAverageScore = (bookId: string) => {
    if (!progress?.completed_chapters) return 0;
    return calculateBookAverageScore(bookId, progress.completed_chapters);
  };

  const isCompleted = (bookId: string, chapter: number) => {
    if (!progress?.completed_chapters) return false;
    return checkChapterCompletion(bookId, chapter, progress.completed_chapters);
  };

  const getChapterStatus = (bookId: string, chapter: number) => {
    if (!progress?.completed_chapters) return { completed: false, score: 0 };
    return getChapterCompletionStatus(bookId, chapter, progress.completed_chapters);
  };

  // Helper function to update progress
  const updateProgress = async (data: Partial<TheologyProgressData>) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('theology_progress')
        .update(data)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      await fetchData();
    } catch (error) {
      console.error('Error updating theology progress:', error);
      throw error;
    }
  };

  // Helper function to complete a challenge
  const completeChallenge = async (bookId: string, chapter: number, score: number) => {
    if (!user || !progress) return;
    
    // Create a new completed chapter entry
    const newEntry = {
      book_id: bookId,
      chapter,
      completed_at: new Date().toISOString(),
      score
    };
    
    // Check if this chapter is already completed
    const completedChapters = [...(progress.completed_chapters || [])];
    const existingIndex = completedChapters.findIndex(
      (ch: any) => ch.book_id === bookId && ch.chapter === chapter
    );
    
    // If exists, update the entry; otherwise add a new one
    if (existingIndex >= 0) {
      completedChapters[existingIndex] = newEntry;
    } else {
      completedChapters.push(newEntry);
    }
    
    // Update books_started if needed
    let booksStarted = [...(progress.books_started || [])];
    if (!booksStarted.includes(bookId)) {
      booksStarted.push(bookId);
    }
    
    // Update books_completed if all chapters are completed
    const book = theologyBooks.find(b => b.id === bookId);
    if (book) {
      const completedChaptersForBook = completedChapters.filter(
        (ch: any) => ch.book_id === bookId
      ).length;
      
      let booksCompleted = [...(progress.books_completed || [])];
      if (completedChaptersForBook >= book.chapters && !booksCompleted.includes(bookId)) {
        booksCompleted.push(bookId);
      }
      
      // Update the progress in Supabase
      await updateProgress({
        completed_chapters: completedChapters,
        books_started: booksStarted,
        books_completed: booksCompleted,
        total_chapters_read: completedChapters.length
      });
    }
  };

  return {
    progress,
    loading,
    getBookProgress,
    getBookChaptersRead: getBookChaptersReadWrapper,
    getBookAverageScore,
    getChapterStatus,
    refreshProgress,
    updateProgress,
    isCompleted,
    completeChallenge
  };
};
