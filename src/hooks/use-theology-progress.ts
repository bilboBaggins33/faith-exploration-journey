
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
    const progress = Math.round((chaptersCompleted / book.chapters) * 100);
    
    return progress > 100 ? 100 : progress;
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

  // Helper function to update progress
  const updateProgress = async (data: any) => {
    if (!user) return;

    const { error } = await supabase
      .from('theology_progress')
      .update(data)
      .eq('user_id', user.id);

    if (error) {
      throw error;
    }

    await fetchData();
  };

  return {
    progress,
    loading,
    getBookProgress,
    getBookChaptersRead,
    getBookAverageScore,
    refreshProgress,
    updateProgress
  };
};
