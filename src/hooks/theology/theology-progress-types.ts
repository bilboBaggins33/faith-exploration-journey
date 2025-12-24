
export interface TheologyProgressData {
  user_id: string;
  completed_chapters: {
    book_id: string;
    chapter: number;
    completed_at: string;
    score?: number;
  }[];
  books_started: string[];
  books_completed: string[];
  total_chapters_read: number;
  total_points: number;
}

export interface UseTheologyProgressReturn {
  progress: TheologyProgressData | null;
  loading: boolean;
  getBookProgress: (bookId: string) => number;
  getBookChaptersRead: (bookId: string) => number;
  getBookAverageScore: (bookId: string) => number;
  getChapterStatus: (bookId: string, chapter: number) => {
    completed: boolean;
    score: number;
    completedAt?: string;
  };
  getChapterScore: (bookId: string, chapter: number) => number;
  refreshProgress: () => Promise<void>;
  updateProgress: (data: Partial<TheologyProgressData>) => Promise<void>;
  isCompleted: (bookId: string, chapter: number) => boolean;
  completeChallenge: (bookId: string, chapter: number, score: number) => Promise<void>;
}
