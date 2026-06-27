
import { bibleBooks } from "@/data/bible/books";

/**
 * Stars earned for a single difficulty score (out of `max`).
 * 3 = perfect, 2 = strong, 1 = passed, 0 = keep trying.
 * Shared by the chapter cards, book cards and mastery celebration so the
 * thresholds stay consistent everywhere.
 */
export const getStarsForScore = (score: number, max: number): number => {
  if (max <= 0) return 0;
  const pct = score / max;
  if (pct >= 0.99) return 3;
  if (pct >= 0.8) return 2;
  if (pct >= 0.6) return 1;
  return 0;
};

export interface BookStars {
  earned: number;
  total: number;
  mastered: boolean;
}

/**
 * Aggregate stars collected across every chapter/difficulty of a book.
 * Total possible = chapters * 3 difficulties * 3 stars.
 */
export const getBookStars = (
  bookId: string,
  completedChapters:
    | { book_id: string; chapter: number; score?: number; difficulty?: string }[]
    | undefined,
  maxScore = 5
): BookStars => {
  const book = bibleBooks.find(b => b.id === bookId);
  if (!book) return { earned: 0, total: 0, mastered: false };

  const total = book.chapters * 9;
  if (!completedChapters) return { earned: 0, total, mastered: false };

  // Keep the best score per (chapter, difficulty).
  const best = new Map<string, number>();
  completedChapters.forEach(c => {
    if (c.book_id !== bookId) return;
    const difficulty = c.difficulty ?? 'easy';
    const key = `${c.chapter}-${difficulty}`;
    best.set(key, Math.max(best.get(key) ?? 0, c.score ?? 0));
  });

  let earned = 0;
  best.forEach(score => {
    earned += getStarsForScore(score, maxScore);
  });

  return { earned, total, mastered: total > 0 && earned === total };
};

/**
 * Calculate the progress percentage for a specific book
 */
export const calculateBookProgress = (
  bookId: string,
  completedChapters: { book_id: string; chapter: number }[]
) => {
  const book = bibleBooks.find(b => b.id === bookId);
  
  if (!book) return 0;
  
  const completedCount = completedChapters.filter(
    chapter => chapter.book_id === bookId
  ).length;
  
  return Math.round((completedCount / book.chapters) * 100);
};

/**
 * Get the status of a specific chapter (completed, score)
 */
export const getChapterStatus = (
  bookId: string,
  chapter: number,
  completedChapters: { book_id: string; chapter: number; score?: number }[] | undefined,
  challengesCompleted: string[] | undefined
) => {
  if (!completedChapters) {
    return { isCompleted: false, score: 0, maxScore: 10 };
  }
  
  const chapterData = completedChapters.find(
    c => c.book_id === bookId && c.chapter === chapter
  );
  
  const challengeCompleted = challengesCompleted?.includes(`${bookId}${chapter}`);
  
  return {
    isCompleted: !!chapterData || !!challengeCompleted,
    score: chapterData?.score || 0,
    maxScore: 10
  };
};

/**
 * Get the difficulty scores for a specific chapter
 */
export const getChapterDifficultyScores = (
  bookId: string,
  chapter: number,
  completedChapters: { book_id: string; chapter: number; score?: number; difficulty?: string }[] | undefined
) => {
  const scores = {
    easy: { score: 0, attempted: false },
    medium: { score: 0, attempted: false },
    hard: { score: 0, attempted: false },
  };
  
  if (!completedChapters) return scores;
  
  const chaptersData = completedChapters.filter(
    c => c.book_id === bookId && c.chapter === chapter
  );
  
  chaptersData.forEach(c => {
    // Backward compatibility: legacy rows without difficulty are treated as easy.
    const difficulty = c.difficulty ?? 'easy';
    const nextScore = c.score ?? 0;

    if (difficulty === 'easy') {
      scores.easy = { score: nextScore, attempted: true };
    }
    if (difficulty === 'medium') {
      scores.medium = { score: nextScore, attempted: true };
    }
    if (difficulty === 'hard') {
      scores.hard = { score: nextScore, attempted: true };
    }
  });
  
  return scores;
};
