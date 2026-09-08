import { useMemo } from 'react';
import { BibleProgressData } from './bible-progress-types';
import { bibleBooks } from '@/data/bible/books';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface DifficultyProgress {
  easy: { completed: number; total: number; percentage: number; correctPercentage: number };
  medium: { completed: number; total: number; percentage: number; correctPercentage: number };
  hard: { completed: number; total: number; percentage: number; correctPercentage: number };
}

const DEFAULT_MAX_SCORE = 5;

/**
 * Progress by difficulty uses chapter counts from bibleBooks and the user's
 * completed_chapters — it no longer depends on shipping full challenge payloads.
 */
export const useDifficultyProgress = (progress: BibleProgressData | null) => {
  const getBookDifficultyProgress = useMemo(() => {
    return (bookId: string): DifficultyProgress => {
      const bookInfo = bibleBooks.find(b => b.id === bookId);
      const totalBookChapters = bookInfo ? bookInfo.chapters : 0;

      const result: DifficultyProgress = {
        easy: { completed: 0, total: totalBookChapters, percentage: 0, correctPercentage: 0 },
        medium: { completed: 0, total: totalBookChapters, percentage: 0, correctPercentage: 0 },
        hard: { completed: 0, total: totalBookChapters, percentage: 0, correctPercentage: 0 },
      };

      (['easy', 'medium', 'hard'] as Difficulty[]).forEach(diff => {
        const relevantProgress = (progress?.completed_chapters ?? []).filter(
          c =>
            c.book_id === bookId &&
            (c.difficulty === diff || (!c.difficulty && diff === 'easy'))
        );

        // Deduplicate by chapter (keep best score).
        const bestByChapter = new Map<number, number>();
        relevantProgress.forEach(p => {
          const score = p.score ?? 0;
          bestByChapter.set(p.chapter, Math.max(bestByChapter.get(p.chapter) ?? 0, score));
        });

        const completed = bestByChapter.size;
        let sumScorePercent = 0;
        bestByChapter.forEach(score => {
          sumScorePercent += (score / DEFAULT_MAX_SCORE) * 100;
        });

        const correctPercentage =
          completed > 0 ? Math.round(sumScorePercent / completed) : 0;

        result[diff] = {
          total: totalBookChapters,
          completed,
          percentage:
            totalBookChapters > 0
              ? Math.round((completed / totalBookChapters) * 100)
              : 0,
          correctPercentage,
        };
      });

      return result;
    };
  }, [progress]);

  return { getBookDifficultyProgress };
};
