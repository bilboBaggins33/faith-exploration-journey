
import { bibleBooks } from "@/data/bible";

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
