
// Bible data type definitions

export interface BibleBook {
  id: string;
  name: string;
  chapters: number;
  testament: 'old' | 'new';
}

export interface BibleChapter {
  bookId: string;
  chapter: number;
  verses: number;
  key_themes: string[];
}

export interface BibleReadingProgress {
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
  testament_progress: {
    old: number;
    new: number;
  };
}

export interface ChapterChallenge {
  id: string;
  bookId: string;
  chapter: number;
  title: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    difficulty?: 'easy' | 'medium' | 'hard';
  }[];
  key_verse: string;
  key_verse_text: string;
  memory_challenge: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

// New interfaces for reading plans
export interface BibleReading {
  bookId: string;
  chapter: number;
}

export interface ReadingPlan {
  id: string;
  name: string;
  description: string;
  readings: Record<string, BibleReading[]>;
}
