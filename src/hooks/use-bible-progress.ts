
import { bibleBooks } from '@/data/bible';
import { useAuth } from '@/context/auth';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ChapterProgress {
  book_id: string;
  chapter_number: number;
  completed_at: string;
  score?: number;
}

interface BibleProgress {
  completed_chapters: ChapterProgress[];
  challenges_completed?: string[];
  verses_memorized?: string[];
  books_progress?: Record<string, number>;
  total_chapters_read?: number;
  total_points?: number;
}

export const useBibleProgress = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Mock data - replace with actual API call in production
  const mockProgress: BibleProgress = {
    completed_chapters: [
      { book_id: 'GEN', chapter_number: 1, completed_at: '2024-03-20', score: 90 },
      { book_id: 'GEN', chapter_number: 2, completed_at: '2024-03-21', score: 85 },
      { book_id: 'EXO', chapter_number: 1, completed_at: '2024-03-22', score: 95 },
      { book_id: 'MAT', chapter_number: 1, completed_at: '2024-03-23', score: 92 },
      // Add more mock data as needed
    ],
    challenges_completed: ['GEN1', 'GEN2', 'EXO1', 'MAT1'],
    verses_memorized: ['GEN1:1', 'GEN1:2', 'PSA23:1'],
    total_points: 400,
    total_chapters_read: 4
  };

  const getBookProgress = (bookId: string) => {
    const book = bibleBooks.find(b => b.id === bookId);
    if (!book) {
      return {
        completed: 0,
        total: 0,
        percentage: 0
      };
    }

    const totalChapters = book.chapters;
    const completedChapters = mockProgress.completed_chapters.filter(
      c => c.book_id === bookId
    ).length;
    
    return {
      completed: completedChapters,
      total: totalChapters,
      percentage: totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0
    };
  };

  const getBookAverageScore = (bookId: string) => {
    const bookChapters = mockProgress.completed_chapters.filter(
      c => c.book_id === bookId && typeof c.score === 'number'
    );
    
    if (bookChapters.length === 0) return 0;
    
    const totalScore = bookChapters.reduce(
      (sum, chapter) => sum + (chapter.score || 0), 
      0
    );
    return Math.round(totalScore / bookChapters.length);
  };

  const getChapterStatus = (bookId: string, chapter: number) => {
    const isCompleted = mockProgress.completed_chapters.some(
      c => c.book_id === bookId && c.chapter_number === chapter
    );

    const completedChapter = mockProgress.completed_chapters.find(
      c => c.book_id === bookId && c.chapter_number === chapter
    );

    return {
      isCompleted,
      score: completedChapter?.score || 0,
      completedAt: completedChapter?.completed_at || null
    };
  };

  const getRecentlyReadBooks = () => {
    if (!mockProgress.completed_chapters || mockProgress.completed_chapters.length === 0) {
      return [];
    }

    // Get unique book IDs from completed chapters
    const uniqueBookIds = Array.from(new Set(
      mockProgress.completed_chapters.map(chapter => chapter.book_id)
    ));

    // Get the most recently read chapters for each book
    const recentlyReadBooks = uniqueBookIds.map(bookId => {
      const bookChapters = mockProgress.completed_chapters.filter(
        chapter => chapter.book_id === bookId
      );

      // Sort by completion date (most recent first)
      const sortedChapters = [...bookChapters].sort(
        (a, b) => new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime()
      );

      const book = bibleBooks.find(b => b.id === bookId);
      const bookProgress = getBookProgress(bookId);

      return {
        id: bookId,
        name: book?.name || bookId,
        lastReadChapter: sortedChapters[0].chapter_number,
        lastReadDate: sortedChapters[0].completed_at,
        progress: bookProgress.percentage,
        completedChapters: bookProgress.completed,
        totalChapters: bookProgress.total
      };
    });

    // Sort by most recently read
    return recentlyReadBooks.sort(
      (a, b) => new Date(b.lastReadDate).getTime() - new Date(a.lastReadDate).getTime()
    );
  };
  
  // Add missing methods for challenges
  const completeChallenge = async (challengeId: string, score: number) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You need to sign in to save your progress.",
        variant: "destructive"
      });
      return false;
    }
    
    setIsUpdating(true);
    
    try {
      // In a real app, you would make an API call to save the progress
      console.log(`Completing challenge ${challengeId} with score ${score}`);
      
      // Mock success
      toast({
        title: "Challenge Completed!",
        description: `You scored ${score} points`,
      });
      
      setIsUpdating(false);
      return true;
    } catch (error) {
      console.error("Failed to complete challenge:", error);
      toast({
        title: "Failed to save progress",
        description: "Please try again later.",
        variant: "destructive"
      });
      setIsUpdating(false);
      return false;
    }
  };
  
  const isCompleted = (challengeId: string) => {
    return mockProgress.challenges_completed?.includes(challengeId) || false;
  };
  
  // Add method to reset progress
  const updateProgress = async (action: 'reset' | 'update', data?: any) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You need to sign in to manage your progress.",
        variant: "destructive"
      });
      return false;
    }
    
    setIsUpdating(true);
    
    try {
      if (action === 'reset') {
        // In a real app, you would make an API call to reset the progress
        console.log("Resetting user progress");
        
        // Mock success
        toast({
          title: "Progress Reset",
          description: "Your reading progress has been reset successfully.",
        });
      } else {
        // Handle other update types
        console.log("Updating progress with data:", data);
        
        toast({
          title: "Progress Updated",
          description: "Your reading progress has been updated.",
        });
      }
      
      setIsUpdating(false);
      return true;
    } catch (error) {
      console.error("Failed to update progress:", error);
      toast({
        title: "Operation Failed",
        description: "Please try again later.",
        variant: "destructive"
      });
      setIsUpdating(false);
      return false;
    }
  };

  return {
    loading: false,
    progress: mockProgress,
    getBookProgress,
    getBookAverageScore,
    getChapterStatus,
    getRecentlyReadBooks,
    completeChallenge,
    isCompleted,
    updateProgress
  };
};
