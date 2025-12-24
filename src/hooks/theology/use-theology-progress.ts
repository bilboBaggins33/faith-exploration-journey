
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
  console.log('useTheologyProgress hook called, user:', user?.id);
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
        .maybeSingle();

      if (error) {
        throw error;
      }

      setProgress(data || {
        user_id: user.id,
        completed_chapters: [],
        books_started: [],
        books_completed: [],
        total_chapters_read: 0,
        total_points: 0
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

  const getChapterScore = (bookId: string, chapter: number) => {
    if (!progress?.completed_chapters) return 0;
    const status = getChapterCompletionStatus(bookId, chapter, progress.completed_chapters);
    return status.score || 0;
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

      // Update local state immediately for a better UX
      setProgress(prev => prev ? { ...prev, ...data } : null);
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

    // Calculate points to add
    let pointsToAdd = score;

    // If exists, update the entry and only add the difference in points if the new score is higher
    if (existingIndex >= 0) {
      const existingScore = completedChapters[existingIndex].score || 0;

      // Only add the additional points if the new score is higher
      if (score > existingScore) {
        pointsToAdd = score - existingScore;
        completedChapters[existingIndex] = newEntry;
      } else {
        // If the new score is not higher, don't add points but still update the timestamp
        pointsToAdd = 0;
        completedChapters[existingIndex].completed_at = newEntry.completed_at;
      }
    } else {
      completedChapters.push(newEntry);
    }

    // Calculate new total points
    const newTotalPoints = (progress.total_points || 0) + pointsToAdd;

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
      const updatedData = {
        completed_chapters: completedChapters,
        books_started: booksStarted,
        books_completed: booksCompleted,
        total_chapters_read: completedChapters.length,
        total_points: newTotalPoints
      };

      await updateProgress(updatedData);
    }
  };

  return {
    progress,
    loading,
    getBookProgress,
    getBookChaptersRead: getBookChaptersReadWrapper,
    getBookAverageScore,
    getChapterStatus,
    getChapterScore,
    refreshProgress,
    updateProgress,
    isCompleted,
    completeChallenge
  };
};
