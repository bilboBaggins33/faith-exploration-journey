import { useMemo } from 'react';
import { allChallenges } from '@/data/bible/challenges';
import { ChapterChallenge } from '@/data/bible/types';
import { BibleProgressData } from './bible-progress-types';
import { bibleBooks } from '@/data/bible/books';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface DifficultyProgress {
  easy: { completed: number; total: number; percentage: number; correctPercentage: number };
  medium: { completed: number; total: number; percentage: number; correctPercentage: number };
  hard: { completed: number; total: number; percentage: number; correctPercentage: number };
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
      const bookInfo = bibleBooks.find(b => b.id === bookId);
      const totalBookChapters = bookInfo ? bookInfo.chapters : 0;

      const result: DifficultyProgress = {
        easy: { completed: 0, total: totalBookChapters, percentage: 0, correctPercentage: 0 },
        medium: { completed: 0, total: totalBookChapters, percentage: 0, correctPercentage: 0 },
        hard: { completed: 0, total: totalBookChapters, percentage: 0, correctPercentage: 0 },
      };

      const diffMap = bookDifficultyMap.get(bookId);

      (['easy', 'medium', 'hard'] as Difficulty[]).forEach(diff => {
        const diffChallenges = allChallenges.filter(c => c.bookId === bookId && c.difficulty === diff);
        const chapters = diffMap ? diffMap[diff] : [];
        
        // Find all progress entries for this book that match the current difficulty
        const relevantProgress = (progress?.completed_chapters ?? []).filter(
          c => c.book_id === bookId && (c.difficulty === diff || (!c.difficulty && diff === 'easy')) && chapters.includes(c.chapter)
        );
        
        const completed = relevantProgress.length;
        
        let validScoresCount = 0;
        let sumScorePercent = 0;
        
        relevantProgress.forEach(p => {
          const ch = diffChallenges.find(c => c.chapter === p.chapter);
          if (ch && p.score !== undefined) {
             const maxScore = ch.questions.length;
             if (maxScore > 0) {
                 sumScorePercent += (p.score / maxScore) * 100;
                 validScoresCount++;
             }
          } else if (p.score !== undefined) {
             // Fallback if challenge definition isn't found exactly but we have a score
             // Assume max score is 5 based on standard
             sumScorePercent += (p.score / 5) * 100;
             validScoresCount++;
          }
        });
        
        const correctPercentage = validScoresCount > 0 ? Math.round(sumScorePercent / validScoresCount) : 0;
        
        result[diff] = {
          total: totalBookChapters,
          completed,
          percentage: totalBookChapters > 0 ? Math.round((completed / totalBookChapters) * 100) : 0,
          correctPercentage
        };
      });

      return result;
    };
  }, [progress]);

  return { getBookDifficultyProgress };
};
