
// Theological books data type definitions

export interface TheologyBook {
  id: string;
  title: string;
  author: string;
  chapters: number;
  year: number;
  category: string;
}

export interface TheologyChapter {
  bookId: string;
  chapter: number;
  title: string;
  key_themes: string[];
}

export interface TheologyReadingProgress {
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
}

export interface TheologyChallenge {
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
  }[];
  key_quote: string;
  key_quote_location: string;
  memory_challenge: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}
