
import { bibleBooks } from './books';

// Function to get total Bible chapters
export function getTotalBibleChapters(): number {
  return bibleBooks.reduce((total, book) => total + book.chapters, 0);
}

// Function to calculate Bible reading progress percentage
export function calculateBibleProgress(completed: number): number {
  const total = getTotalBibleChapters();
  return Math.round((completed / total) * 100);
}
