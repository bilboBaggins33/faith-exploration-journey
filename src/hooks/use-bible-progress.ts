import { bibleBooks } from '@/data/bible';
import { useAuth } from '@/context/auth';

interface ChapterProgress {
  book_id: string;
  chapter_number: number;
  completed_at: string;
  score?: number;
}

interface BibleProgress {
  completed_chapters: ChapterProgress[];
}

export const useBibleProgress = () => {
  const { user } = useAuth();
  
  // Mock data - replace with actual API call in production
  const mockProgress: BibleProgress = {
    completed_chapters: [
      { book_id: 'GEN', chapter_number: 1, completed_at: '2024-03-20', score: 90 },
      { book_id: 'GEN', chapter_number: 2, completed_at: '2024-03-21', score: 85 },
      { book_id: 'EXO', chapter_number: 1, completed_at: '2024-03-22', score: 95 },
      // Add more mock data as needed
    ]
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

  return {
    loading: false,
    progress: mockProgress,
    getBookProgress,
    getBookAverageScore
  };
};
