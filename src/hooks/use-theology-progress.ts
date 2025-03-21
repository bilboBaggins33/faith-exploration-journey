
import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { theologyBooks } from '@/data/theology/books';
import { TheologyReadingProgress } from '@/data/theology/types';
import { useBibleProgress } from '@/hooks/use-bible-progress';

export function useTheologyProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<TheologyReadingProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { progress: bibleProgress } = useBibleProgress();

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
            
            // Check if there are any theology chapters completed in the bible_progress table
            let initialCompletedChapters = [];
            let initialBooksStarted = [];
            let totalChaptersRead = 0;
            
            if (bibleProgress && bibleProgress.completed_chapters) {
              // Filter chapters that belong to theology books
              const theologyBookIds = theologyBooks.map(book => book.id);
              initialCompletedChapters = bibleProgress.completed_chapters.filter(
                chapter => theologyBookIds.includes(chapter.book_id)
              );
              
              // Calculate books started
              initialBooksStarted = Array.from(
                new Set(initialCompletedChapters.map(chapter => chapter.book_id))
              );
              
              totalChaptersRead = initialCompletedChapters.length;
            }
            
            const { data: newProgress, error: createError } = await supabase
              .from('theology_progress')
              .insert({
                user_id: user.id,
                completed_chapters: initialCompletedChapters,
                books_started: initialBooksStarted,
                books_completed: [],
                total_chapters_read: totalChaptersRead
              })
              .select()
              .single();
              
            if (createError) {
              console.error('Error creating theology progress:', createError);
              throw createError;
            }
            
            console.log('Created new theology progress with chapters from bible progress:', newProgress);
            setProgress(newProgress);
          } else {
            throw progressError;
          }
        } else {
          console.log('Theology progress loaded successfully:', progressData);
          
          // Check if theology progress is out of sync with bible progress
          if (bibleProgress && bibleProgress.completed_chapters) {
            const theologyBookIds = theologyBooks.map(book => book.id);
            const theologyChaptersInBibleProgress = bibleProgress.completed_chapters.filter(
              chapter => theologyBookIds.includes(chapter.book_id)
            );
            
            // Check if there are theology chapters in bible_progress not in theology_progress
            if (theologyChaptersInBibleProgress.length > 0 && 
                (!progressData.completed_chapters || progressData.completed_chapters.length === 0)) {
              
              console.log('Found theology chapters in bible_progress, syncing with theology_progress');
              
              const booksStarted = Array.from(
                new Set(theologyChaptersInBibleProgress.map(chapter => chapter.book_id))
              );
              
              const updatedProgress = {
                ...progressData,
                completed_chapters: theologyChaptersInBibleProgress,
                books_started: booksStarted,
                total_chapters_read: theologyChaptersInBibleProgress.length
              };
              
              const { error: updateError } = await supabase
                .from('theology_progress')
                .update(updatedProgress)
                .eq('user_id', user.id);
                
              if (updateError) {
                console.error('Error updating theology progress:', updateError);
              } else {
                console.log('Successfully synced theology progress:', updatedProgress);
                setProgress(updatedProgress);
                return;
              }
            }
          }
          
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
  }, [user, toast, bibleProgress]);

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
