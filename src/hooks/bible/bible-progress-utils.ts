
import { bibleBooks } from '@/data/bible/books';
import { sampleChapterChallenges } from '@/data/bible/challenges';

export const calculateBookProgress = (bookId: string, completedChapters: any[] = []) => {
  const book = bibleBooks.find(b => b.id === bookId);
  if (!book) return 0;
  
  // Count completed chapters for this book
  const completedForBook = completedChapters.filter(
    (ch) => ch.book_id === bookId
  ).length;
  
  const bookProgress = Math.round((completedForBook / book.chapters) * 100);
  return bookProgress > 100 ? 100 : bookProgress;
};

export const isChapterCompleted = (bookId: string, chapter: number, challengesCompleted: string[] = []) => {
  if (!challengesCompleted) return false;
  return challengesCompleted.includes(`${bookId}-${chapter}`);
};

export const getChapterStatus = (
  bookId: string, 
  chapter: number, 
  completedChapters: any[] = [], 
  challengesCompleted: string[] = []
) => {
  if (!completedChapters || !challengesCompleted) {
    return { isCompleted: false, score: 0, maxScore: 0 };
  }
  
  const challengeKey = `${bookId}-${chapter}`;
  const isCompleted = challengesCompleted.includes(challengeKey);
  
  // Get score from completed_chapters if available
  let score = 0;
  let maxScore = 0;
  
  const chapterData = completedChapters.find(
    c => c.book_id === bookId && c.chapter === chapter
  );
  
  if (chapterData && chapterData.score) {
    score = chapterData.score;
  }
  
  // Find the challenge to get maxScore
  const challenge = sampleChapterChallenges.find(
    c => c.bookId === bookId && c.chapter === chapter
  );
  
  if (challenge) {
    maxScore = challenge.questions.length; // 1 point per question
  }
  
  return { isCompleted, score, maxScore };
};
