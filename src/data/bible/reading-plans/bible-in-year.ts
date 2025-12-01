import { BibleReading } from '../types';
import { bibleBooks } from '../books';

// Bible in a Year - Sequential plan
// Reads through the Bible in order, approximately 3-4 chapters per day
// Total chapters: 1189, so about 3.26 chapters per day

// Generate readings for the entire year
const generateSequentialReadings = (): Record<string, BibleReading[]> => {
  const readings: Record<string, BibleReading[]> = {};
  
  // Flatten all books into chapters
  const allChapters: BibleReading[] = [];
  bibleBooks.forEach(book => {
    for (let chapter = 1; chapter <= book.chapters; chapter++) {
      allChapters.push({ bookId: book.id, chapter });
    }
  });
  
  // Calculate chapters per day (1189 chapters / 365 days ≈ 3.26)
  // We'll use 3-4 chapters per day, alternating
  let chapterIndex = 0;
  
  for (let month = 1; month <= 12; month++) {
    const daysInMonth = new Date(2024, month, 0).getDate(); // Get days in month
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayReadings: BibleReading[] = [];
      
      // Alternate between 3 and 4 chapters per day
      const chaptersToday = (day % 2 === 0) ? 3 : 4;
      
      for (let i = 0; i < chaptersToday && chapterIndex < allChapters.length; i++) {
        dayReadings.push(allChapters[chapterIndex]);
        chapterIndex++;
      }
      
      if (dayReadings.length > 0) {
        readings[dateKey] = dayReadings;
      }
    }
  }
  
  return readings;
};

export const bibleInYearPlan = generateSequentialReadings();

// Get today's reading
export const getTodaysBibleInYearReading = (): BibleReading[] => {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateKey = `${month}-${day}`;
  
  return bibleInYearPlan[dateKey] || [];
};

// Get reading for a specific date
export const getBibleInYearReadingForDate = (date: Date): BibleReading[] => {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateKey = `${month}-${day}`;
  
  return bibleInYearPlan[dateKey] || [];
};

