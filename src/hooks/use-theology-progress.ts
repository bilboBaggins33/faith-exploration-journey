
import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { theologyBooks } from '@/data/theology/books';
import { TheologyReadingProgress } from '@/data/theology/types';

export function useTheologyProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<TheologyReadingProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Load initial progress
  useEffect(() => {
    console.log('useTheologyProgress hook initialized with user:', user?.id);
    
    if (!user || !isSupabaseConfigured()) {
      // Create mock progress data for development when Supabase is not configured
      if (!isSupabaseConfigured()) {
        console.log('Supabase not configured, using mock theology data');
        setProgress({
          user_id: 'mock-user-id',
          completed_chapters: [
            {
              book_id: 'mere-christianity',
              chapter: 1,
              completed_at: new Date().toISOString(),
              score: 80
            }
          ],
          books_started: ['mere-christianity'],
          books_completed: [],
          total_chapters_read: 1
        });
      } else {
        console.log('No user logged in');
        setProgress(null);
      }
      setLoading(false);
      return;
    }

    async function loadProgress() {
      setLoading(true);
      try {
        console.log('Loading theology progress for user:', user.id);
        
        // Get theology progress
        const { data: progressData, error: progressError } = await supabase
          .from('theology_progress')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (progressError) {
          console.error('Error loading theology progress:', progressError);
          
          // If the progress record doesn't exist yet, create it
          if (progressError.code === 'PGRST116') {
            console.log('Theology progress not found, creating new progress record');
            const { data: newProgress, error: createError } = await supabase
              .from('theology_progress')
              .insert({
                user_id: user.id,
                completed_chapters: [],
                books_started: [],
                books_completed: [],
                total_chapters_read: 0
              })
              .select()
              .single();
              
            if (createError) {
              console.error('Error creating theology progress:', createError);
              throw createError;
            }
            
            setProgress(newProgress);
          } else {
            throw progressError;
          }
        } else {
          console.log('Theology progress loaded successfully:', progressData);
          setProgress(progressData);
        }
      } catch (error) {
        console.error('Error loading theology progress:', error);
        toast({
          title: "Error loading theology progress",
          description: "There was an issue loading your theology progress. Please try again.",
          variant: "destructive",
        });
        
        // Provide mock data for development
        setProgress({
          user_id: user.id,
          completed_chapters: [],
          books_started: [],
          books_completed: [],
          total_chapters_read: 0
        });
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
  }, [user, toast]);

  // Get book completion percentage
  const getBookProgress = (bookId: string) => {
    if (!progress || !progress.completed_chapters) return 0;
    
    const bookChapters = new Set<number>();
    
    // Find all completed chapters for this book
    progress.completed_chapters.forEach(chapter => {
      if (chapter.book_id === bookId) {
        bookChapters.add(chapter.chapter);
      }
    });
    
    // Find the corresponding book to get total chapters
    const book = theologyBooks.find(b => b.id === bookId);
    if (!book) return 0;
    
    const totalBookChapters = book.chapters;
    const completedPercentage = totalBookChapters > 0 
      ? Math.round((bookChapters.size / totalBookChapters) * 100) 
      : 0;
    
    return completedPercentage;
  };

  // Get average score for a book
  const getBookAverageScore = (bookId: string) => {
    if (!progress || !progress.completed_chapters) return 0;
    
    const bookChapters = progress.completed_chapters.filter(
      chapter => chapter.book_id === bookId && chapter.score !== undefined
    );
    
    if (bookChapters.length === 0) return 0;
    
    const totalScore = bookChapters.reduce(
      (sum, chapter) => sum + (chapter.score || 0), 
      0
    );
    
    return Math.round(totalScore / bookChapters.length);
  };

  // Get total chapters read for a specific book
  const getBookChaptersRead = (bookId: string) => {
    if (!progress || !progress.completed_chapters) return 0;
    
    const bookChapters = new Set<number>();
    
    progress.completed_chapters.forEach(chapter => {
      if (chapter.book_id === bookId) {
        bookChapters.add(chapter.chapter);
      }
    });
    
    return bookChapters.size;
  };

  return {
    progress,
    loading,
    getBookProgress,
    getBookAverageScore,
    getBookChaptersRead,
  };
}
