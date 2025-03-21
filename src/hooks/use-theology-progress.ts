import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { theologyBooks } from '@/data/theology/books';

export const useTheologyProgress = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<any>(null);
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

  // Helper functions to get book progress
  const getBookProgress = (bookId: string) => {
    if (!progress) return 0;
    
    const book = theologyBooks.find(b => b.id === bookId);
    if (!book) return 0;
    
    const chaptersCompleted = getBookChaptersRead(bookId);
    const bookProgress = Math.round((chaptersCompleted / book.chapters) * 100);
    
    return bookProgress > 100 ? 100 : bookProgress;
  };

  const getBookChaptersRead = (bookId: string) => {
    if (!progress?.completed_chapters) return 0;
    
    const completedForBook = progress.completed_chapters.filter(
      (ch: any) => ch.book_id === bookId
    );
    
    return completedForBook.length;
  };

  const getBookAverageScore = (bookId: string) => {
    if (!progress?.completed_chapters) return 0;
    
    const completedForBook = progress.completed_chapters.filter(
      (ch: any) => ch.book_id === bookId && ch.score !== undefined
    );
    
    if (completedForBook.length === 0) return 0;
    
    const totalScore = completedForBook.reduce(
      (acc: number, ch: any) => acc + (ch.score || 0), 0
    );
    
    return Math.round(totalScore / completedForBook.length);
  };

  // Helper function to check if a challenge is completed
  const isCompleted = (bookId: string, chapter: number) => {
    if (!progress?.completed_chapters) return false;
    
    return progress.completed_chapters.some(
      (ch: any) => ch.book_id === bookId && ch.chapter === chapter
    );
  };

  // Helper function to get chapter status (completed, score)
  const getChapterStatus = (bookId: string, chapter: number) => {
    if (!progress?.completed_chapters) return { completed: false, score: 0 };
    
    const completedChapter = progress.completed_chapters.find(
      (ch: any) => ch.book_id === bookId && ch.chapter === chapter
    );
    
    if (!completedChapter) {
      return { completed: false, score: 0 };
    }
    
    return { 
      completed: true, 
      score: completedChapter.score || 0,
      completedAt: completedChapter.completed_at
    };
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

  // Helper function to update progress
  const updateProgress = async (data: any) => {
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

  return {
    progress,
    loading,
    getBookProgress,
    getBookChaptersRead,
    getBookAverageScore,
    getChapterStatus,
    refreshProgress,
    updateProgress,
    isCompleted,
    completeChallenge
  };
};
