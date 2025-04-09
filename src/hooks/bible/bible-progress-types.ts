
export interface BibleProgressData {
  user_id: string;
  completed_chapters: {
    book_id: string;
    chapter: number;
    completed_at: string;
    score?: number;
  }[];
  challenges_completed: string[];
  verses_memorized: string[];
  total_points: number;
  books_progress: Record<string, number>;
  total_chapters_read: number;
}

export interface BookProgressDetails {
  percentage: number;
  completed: number;
  total: number;
}

export interface UseBibleProgressReturn {
  profile: any | null;
  progress: BibleProgressData | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
  updateProgress: (data: Partial<BibleProgressData> | 'reset') => Promise<void>;
  getBookProgress: (bookId: string) => BookProgressDetails;
  getBookAverageScore: (bookId: string) => number;
  isCompleted: (challengeId: string) => boolean;
  completeChallenge: (challengeId: string, pointsEarned?: number) => Promise<void>;
  getChapterStatus: (bookId: string, chapter: number) => {
    isCompleted: boolean;
    score: number;
    maxScore: number;
  };
}
