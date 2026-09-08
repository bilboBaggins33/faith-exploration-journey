import { describe, expect, it } from 'vitest';
import {
  calculateBookProgress,
  getBookStars,
  getStarsForScore,
} from '@/hooks/bible/bible-progress-utils';

describe('bible-progress-utils', () => {
  it('maps scores to stars with consistent thresholds', () => {
    expect(getStarsForScore(5, 5)).toBe(3);
    expect(getStarsForScore(4, 5)).toBe(2);
    expect(getStarsForScore(3, 5)).toBe(1);
    expect(getStarsForScore(2, 5)).toBe(0);
    expect(getStarsForScore(0, 5)).toBe(0);
  });

  it('calculates book progress percentage from completed chapters', () => {
    // Genesis has 50 chapters
    expect(
      calculateBookProgress('genesis', [
        { book_id: 'genesis', chapter: 1 },
        { book_id: 'genesis', chapter: 2 },
        { book_id: 'exodus', chapter: 1 },
      ])
    ).toBe(4); // 2/50 = 4%
  });

  it('aggregates stars across difficulties and detects mastery', () => {
    const completed = [
      { book_id: 'jude', chapter: 1, score: 5, difficulty: 'easy' },
      { book_id: 'jude', chapter: 1, score: 5, difficulty: 'medium' },
      { book_id: 'jude', chapter: 1, score: 5, difficulty: 'hard' },
    ];
    // Jude has 1 chapter → total 9 stars
    const stars = getBookStars('jude', completed, 5);
    expect(stars.earned).toBe(9);
    expect(stars.total).toBe(9);
    expect(stars.mastered).toBe(true);
  });

  it('keeps the best score per chapter/difficulty when aggregating', () => {
    const completed = [
      { book_id: 'jude', chapter: 1, score: 3, difficulty: 'easy' },
      { book_id: 'jude', chapter: 1, score: 5, difficulty: 'easy' },
    ];
    const stars = getBookStars('jude', completed, 5);
    expect(stars.earned).toBe(3); // perfect easy only
  });
});
