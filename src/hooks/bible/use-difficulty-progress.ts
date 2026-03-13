import { useMemo } from 'react';
import { allChallenges } from '@/data/bible/challenges';
import { ChapterChallenge } from '@/data/bible/types';
import { BibleProgressData } from './bible-progress-types';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface DifficultyProgress {
  easy: { completed: number; total: number; percentage: number };
  medium: { completed: number; total: number; percentage: number };
  hard: { completed: number; total: number; percentage: number };
}

// Build a lookup: bookId -> difficulty -> chapter numbers
const bookDifficultyMap = new Map<string, Record<Difficulty, number[]>>();

allChallenges.forEach((c: ChapterChallenge) => {
  if (!bookDifficultyMap.has(c.bookId)) {
    bookDifficultyMap.set(c.bookId, { easy: [], medium: [], hard: [] });
  }
  const entry = bookDifficultyMap.get(c.bookId)!;
  entry[c.difficulty].push(c.chapter);
});

export const getChaptersByDifficulty = (bookId: string, difficulty: Difficulty): number[] => {
  return bookDifficultyMap.get(bookId)?.[difficulty] ?? [];
};

export const getChallengesByBookAndDifficulty = (bookId: string, difficulty: Difficulty): ChapterChallenge[] => {
  return allChallenges.filter(c => c.bookId === bookId && c.difficulty === difficulty);
};

export const useDifficultyProgress = (progress: BibleProgressData | null) => {
  const getBookDifficultyProgress = useMemo(() => {
    return (bookId: string): DifficultyProgress => {
      const result: DifficultyProgress = {
        easy: { completed: 0, total: 0, percentage: 0 },
        medium: { completed: 0, total: 0, percentage: 0 },
        hard: { completed: 0, total: 0, percentage: 0 },
      };

      const diffMap = bookDifficultyMap.get(bookId);
      if (!diffMap) return result;

      const completedSet = new Set(
        (progress?.completed_chapters ?? [])
          .filter(c => c.book_id === bookId)
          .map(c => c.chapter)
      );

      (['easy', 'medium', 'hard'] as Difficulty[]).forEach(diff => {
        const chapters = diffMap[diff];
        const total = chapters.length;
        const completed = chapters.filter(ch => completedSet.has(ch)).length;
        result[diff] = {
          total,
          completed,
          percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        };
      });

      return result;
    };
  }, [progress]);

  return { getBookDifficultyProgress };
};
