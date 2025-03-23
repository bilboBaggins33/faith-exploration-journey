
import { BibleReading } from '../types';

// The M'Cheyne Bible Reading Plan takes readers through 
// the New Testament and Psalms twice, and the Old Testament once in a year
// Format: [Family Reading 1, Family Reading 2, Private Reading 1, Private Reading 2]
export const mcheyneReadingPlan: Record<string, BibleReading[]> = {
  // January
  "01-01": [
    { bookId: "genesis", chapter: 1 },
    { bookId: "matthew", chapter: 1 },
    { bookId: "ezra", chapter: 1 },
    { bookId: "acts", chapter: 1 }
  ],
  "01-02": [
    { bookId: "genesis", chapter: 2 },
    { bookId: "matthew", chapter: 2 },
    { bookId: "ezra", chapter: 2 },
    { bookId: "acts", chapter: 2 }
  ],
  "01-03": [
    { bookId: "genesis", chapter: 3 },
    { bookId: "matthew", chapter: 3 },
    { bookId: "ezra", chapter: 3 },
    { bookId: "acts", chapter: 3 }
  ],
  "01-04": [
    { bookId: "genesis", chapter: 4 },
    { bookId: "matthew", chapter: 4 },
    { bookId: "ezra", chapter: 4 },
    { bookId: "acts", chapter: 4 }
  ],
  "01-05": [
    { bookId: "genesis", chapter: 5 },
    { bookId: "matthew", chapter: 5 },
    { bookId: "ezra", chapter: 5 },
    { bookId: "acts", chapter: 5 }
  ],
  // Add more days as needed - this is just a sample of the first 5 days
  // In a complete implementation, all 366 days would be added (including Feb 29 for leap years)
};

// Get today's reading based on the current date (month-day format)
export const getTodaysReading = (): BibleReading[] => {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateKey = `${month}-${day}`;
  
  return mcheyneReadingPlan[dateKey] || [];
};

// Get reading for a specific date
export const getReadingForDate = (date: Date): BibleReading[] => {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateKey = `${month}-${day}`;
  
  return mcheyneReadingPlan[dateKey] || [];
};
