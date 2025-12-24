
import { BibleReading } from '../types';

// The M'Cheyne Bible Reading Plan takes readers through 
// the New Testament and Psalms twice, and the Old Testament once in a year
// Format: [Family Reading 1, Family Reading 2, Private Reading 1, Private Reading 2]
export const mcheyneReadingPlan: Record<string, BibleReading[]> = {
  // Week 1
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
  // Week 2
  "01-05": [
    { bookId: "genesis", chapter: 5 },
    { bookId: "matthew", chapter: 5 },
    { bookId: "ezra", chapter: 5 },
    { bookId: "acts", chapter: 5 }
  ],
  "01-06": [
    { bookId: "genesis", chapter: 6 },
    { bookId: "matthew", chapter: 6 },
    { bookId: "ezra", chapter: 6 },
    { bookId: "acts", chapter: 6 }
  ],
  "01-07": [
    { bookId: "genesis", chapter: 7 },
    { bookId: "matthew", chapter: 7 },
    { bookId: "ezra", chapter: 7 },
    { bookId: "acts", chapter: 7 }
  ],
  "01-08": [
    { bookId: "genesis", chapter: 8 },
    { bookId: "matthew", chapter: 8 },
    { bookId: "ezra", chapter: 8 },
    { bookId: "acts", chapter: 8 }
  ],
  "01-09": [
    { bookId: "genesis", chapter: 9 },
    { bookId: "matthew", chapter: 9 },
    { bookId: "ezra", chapter: 9 },
    { bookId: "acts", chapter: 9 }
  ],
  "01-10": [
    { bookId: "genesis", chapter: 10 },
    { bookId: "matthew", chapter: 11 },
    { bookId: "ezra", chapter: 10 },
    { bookId: "acts", chapter: 11 }
  ],
  "01-11": [
    { bookId: "genesis", chapter: 12 },
    { bookId: "matthew", chapter: 12 },
    { bookId: "nehemiah", chapter: 1 },
    { bookId: "acts", chapter: 12 }
  ],
  // Week 3
  "01-12": [
    { bookId: "genesis", chapter: 13 },
    { bookId: "matthew", chapter: 13 },
    { bookId: "nehemiah", chapter: 2 },
    { bookId: "acts", chapter: 13 }
  ],
  "01-13": [
    { bookId: "genesis", chapter: 14 },
    { bookId: "matthew", chapter: 14 },
    { bookId: "nehemiah", chapter: 3 },
    { bookId: "acts", chapter: 14 }
  ],
  "01-14": [
    { bookId: "genesis", chapter: 15 },
    { bookId: "matthew", chapter: 15 },
    { bookId: "nehemiah", chapter: 4 },
    { bookId: "acts", chapter: 15 }
  ],
  "01-15": [
    { bookId: "genesis", chapter: 16 },
    { bookId: "matthew", chapter: 16 },
    { bookId: "nehemiah", chapter: 5 },
    { bookId: "acts", chapter: 16 }
  ],
  "01-16": [
    { bookId: "genesis", chapter: 17 },
    { bookId: "matthew", chapter: 17 },
    { bookId: "nehemiah", chapter: 6 },
    { bookId: "acts", chapter: 17 }
  ],
  "01-17": [
    { bookId: "genesis", chapter: 18 },
    { bookId: "matthew", chapter: 18 },
    { bookId: "nehemiah", chapter: 7 },
    { bookId: "acts", chapter: 18 }
  ],
  "01-18": [
    { bookId: "genesis", chapter: 19 },
    { bookId: "matthew", chapter: 20 },
    { bookId: "nehemiah", chapter: 8 },
    { bookId: "acts", chapter: 20 }
  ],
  // Week 4
  "01-19": [
    { bookId: "genesis", chapter: 20 },
    { bookId: "matthew", chapter: 21 },
    { bookId: "nehemiah", chapter: 9 },
    { bookId: "acts", chapter: 21 }
  ],
  "01-20": [
    { bookId: "genesis", chapter: 21 },
    { bookId: "matthew", chapter: 22 },
    { bookId: "nehemiah", chapter: 10 },
    { bookId: "acts", chapter: 22 }
  ],
  "01-21": [
    { bookId: "genesis", chapter: 23 },
    { bookId: "matthew", chapter: 23 },
    { bookId: "nehemiah", chapter: 11 },
    { bookId: "acts", chapter: 23 }
  ],
  "01-22": [
    { bookId: "genesis", chapter: 24 },
    { bookId: "matthew", chapter: 24 },
    { bookId: "nehemiah", chapter: 12 },
    { bookId: "acts", chapter: 24 }
  ],
  "01-23": [
    { bookId: "genesis", chapter: 25 },
    { bookId: "matthew", chapter: 25 },
    { bookId: "nehemiah", chapter: 13 },
    { bookId: "acts", chapter: 25 }
  ],
  "01-24": [
    { bookId: "genesis", chapter: 26 },
    { bookId: "matthew", chapter: 26 },
    { bookId: "esther", chapter: 1 },
    { bookId: "acts", chapter: 26 }
  ],
  "01-25": [
    { bookId: "genesis", chapter: 27 },
    { bookId: "matthew", chapter: 27 },
    { bookId: "esther", chapter: 2 },
    { bookId: "acts", chapter: 27 }
  ],
  // Week 5
  "01-26": [
    { bookId: "genesis", chapter: 28 },
    { bookId: "mark", chapter: 1 },
    { bookId: "esther", chapter: 3 },
    { bookId: "romans", chapter: 1 }
  ],
  "01-27": [
    { bookId: "genesis", chapter: 29 },
    { bookId: "mark", chapter: 2 },
    { bookId: "esther", chapter: 4 },
    { bookId: "romans", chapter: 2 }
  ],
  "01-28": [
    { bookId: "genesis", chapter: 30 },
    { bookId: "mark", chapter: 3 },
    { bookId: "esther", chapter: 5 },
    { bookId: "romans", chapter: 3 }
  ],
  "01-29": [
    { bookId: "genesis", chapter: 31 },
    { bookId: "mark", chapter: 4 },
    { bookId: "esther", chapter: 6 },
    { bookId: "romans", chapter: 4 }
  ],
  "01-30": [
    { bookId: "genesis", chapter: 33 },
    { bookId: "mark", chapter: 5 },
    { bookId: "esther", chapter: 7 },
    { bookId: "romans", chapter: 5 }
  ],
  "01-31": [
    { bookId: "genesis", chapter: 34 },
    { bookId: "mark", chapter: 6 },
    { bookId: "esther", chapter: 8 },
    { bookId: "romans", chapter: 6 }
  ],
  "02-01": [
    { bookId: "genesis", chapter: 35 },
    { bookId: "mark", chapter: 7 },
    { bookId: "esther", chapter: 9 },
    { bookId: "romans", chapter: 7 }
  ],
  // Week 6
  "02-02": [
    { bookId: "genesis", chapter: 36 },
    { bookId: "mark", chapter: 8 },
    { bookId: "esther", chapter: 10 },
    { bookId: "romans", chapter: 8 }
  ],
  "02-03": [
    { bookId: "genesis", chapter: 37 },
    { bookId: "mark", chapter: 10 },
    { bookId: "job", chapter: 1 },
    { bookId: "romans", chapter: 10 }
  ],
  "02-04": [
    { bookId: "genesis", chapter: 38 },
    { bookId: "mark", chapter: 11 },
    { bookId: "job", chapter: 3 },
    { bookId: "romans", chapter: 11 }
  ],
  "02-05": [
    { bookId: "genesis", chapter: 39 },
    { bookId: "mark", chapter: 12 },
    { bookId: "job", chapter: 4 },
    { bookId: "romans", chapter: 12 }
  ],
  "02-06": [
    { bookId: "genesis", chapter: 40 },
    { bookId: "mark", chapter: 13 },
    { bookId: "job", chapter: 5 },
    { bookId: "romans", chapter: 13 }
  ],
  "02-07": [
    { bookId: "genesis", chapter: 41 },
    { bookId: "mark", chapter: 14 },
    { bookId: "job", chapter: 6 },
    { bookId: "romans", chapter: 14 }
  ],
  "02-08": [
    { bookId: "genesis", chapter: 42 },
    { bookId: "mark", chapter: 15 },
    { bookId: "job", chapter: 7 },
    { bookId: "romans", chapter: 15 }
  ],
  // Week 7
  "02-09": [
    { bookId: "genesis", chapter: 44 },
    { bookId: "mark", chapter: 16 },
    { bookId: "job", chapter: 8 },
    { bookId: "romans", chapter: 16 }
  ],
  "02-10": [
    { bookId: "genesis", chapter: 45 },
    { bookId: "luke", chapter: 1 },
    { bookId: "job", chapter: 9 },
    { bookId: "1corinthians", chapter: 1 }
  ],
  "02-11": [
    { bookId: "genesis", chapter: 46 },
    { bookId: "luke", chapter: 3 },
    { bookId: "job", chapter: 10 },
    { bookId: "1corinthians", chapter: 3 }
  ],
  "02-12": [
    { bookId: "genesis", chapter: 47 },
    { bookId: "luke", chapter: 4 },
    { bookId: "job", chapter: 11 },
    { bookId: "1corinthians", chapter: 4 }
  ],
  "02-13": [
    { bookId: "genesis", chapter: 48 },
    { bookId: "luke", chapter: 5 },
    { bookId: "job", chapter: 12 },
    { bookId: "1corinthians", chapter: 5 }
  ],
  "02-14": [
    { bookId: "genesis", chapter: 49 },
    { bookId: "luke", chapter: 6 },
    { bookId: "job", chapter: 13 },
    { bookId: "1corinthians", chapter: 6 }
  ],
  "02-15": [
    { bookId: "genesis", chapter: 50 },
    { bookId: "luke", chapter: 7 },
    { bookId: "job", chapter: 14 },
    { bookId: "1corinthians", chapter: 7 }
  ],
  // Week 8
  "02-16": [
    { bookId: "exodus", chapter: 1 },
    { bookId: "luke", chapter: 8 },
    { bookId: "job", chapter: 15 },
    { bookId: "1corinthians", chapter: 8 }
  ],
  "02-17": [
    { bookId: "exodus", chapter: 2 },
    { bookId: "luke", chapter: 9 },
    { bookId: "job", chapter: 16 },
    { bookId: "1corinthians", chapter: 9 }
  ],
  "02-18": [
    { bookId: "exodus", chapter: 3 },
    { bookId: "luke", chapter: 10 },
    { bookId: "job", chapter: 17 },
    { bookId: "1corinthians", chapter: 10 }
  ],
  "02-19": [
    { bookId: "exodus", chapter: 5 },
    { bookId: "luke", chapter: 12 },
    { bookId: "job", chapter: 18 },
    { bookId: "1corinthians", chapter: 12 }
  ],
  "02-20": [
    { bookId: "exodus", chapter: 6 },
    { bookId: "luke", chapter: 13 },
    { bookId: "job", chapter: 19 },
    { bookId: "1corinthians", chapter: 13 }
  ],
  "02-21": [
    { bookId: "exodus", chapter: 7 },
    { bookId: "luke", chapter: 14 },
    { bookId: "job", chapter: 20 },
    { bookId: "1corinthians", chapter: 14 }
  ],
  "02-22": [
    { bookId: "exodus", chapter: 8 },
    { bookId: "luke", chapter: 15 },
    { bookId: "job", chapter: 21 },
    { bookId: "1corinthians", chapter: 15 }
  ],
  // Week 9
  "02-23": [
    { bookId: "exodus", chapter: 9 },
    { bookId: "luke", chapter: 16 },
    { bookId: "job", chapter: 22 },
    { bookId: "1corinthians", chapter: 16 }
  ],
  "02-24": [
    { bookId: "exodus", chapter: 10 },
    { bookId: "luke", chapter: 17 },
    { bookId: "job", chapter: 23 },
    { bookId: "2corinthians", chapter: 1 }
  ],
  "02-25": [
    { bookId: "exodus", chapter: 11 },
    { bookId: "luke", chapter: 18 },
    { bookId: "job", chapter: 24 },
    { bookId: "2corinthians", chapter: 2 }
  ],
  "02-26": [
    { bookId: "exodus", chapter: 12 },
    { bookId: "luke", chapter: 19 },
    { bookId: "job", chapter: 25 },
    { bookId: "2corinthians", chapter: 3 }
  ],
  "02-27": [
    { bookId: "exodus", chapter: 13 },
    { bookId: "luke", chapter: 21 },
    { bookId: "job", chapter: 26 },
    { bookId: "2corinthians", chapter: 5 }
  ],
  "02-28": [
    { bookId: "exodus", chapter: 15 },
    { bookId: "luke", chapter: 22 },
    { bookId: "job", chapter: 27 },
    { bookId: "2corinthians", chapter: 6 }
  ],
  "02-29": [
    { bookId: "exodus", chapter: 15 },
    { bookId: "luke", chapter: 22 },
    { bookId: "job", chapter: 27 },
    { bookId: "2corinthians", chapter: 6 }
  ],
  "03-01": [
    { bookId: "exodus", chapter: 16 },
    { bookId: "luke", chapter: 23 },
    { bookId: "job", chapter: 28 },
    { bookId: "2corinthians", chapter: 7 }
  ],
  // Week 10
  "03-02": [
    { bookId: "exodus", chapter: 17 },
    { bookId: "luke", chapter: 24 },
    { bookId: "job", chapter: 29 },
    { bookId: "2corinthians", chapter: 8 }
  ],
  "03-03": [
    { bookId: "exodus", chapter: 18 },
    { bookId: "john", chapter: 1 },
    { bookId: "job", chapter: 30 },
    { bookId: "2corinthians", chapter: 9 }
  ],
  "03-04": [
    { bookId: "exodus", chapter: 19 },
    { bookId: "john", chapter: 2 },
    { bookId: "job", chapter: 31 },
    { bookId: "2corinthians", chapter: 10 }
  ],
  "03-05": [
    { bookId: "exodus", chapter: 20 },
    { bookId: "john", chapter: 3 },
    { bookId: "job", chapter: 32 },
    { bookId: "2corinthians", chapter: 11 }
  ],
  "03-06": [
    { bookId: "exodus", chapter: 21 },
    { bookId: "john", chapter: 4 },
    { bookId: "job", chapter: 33 },
    { bookId: "2corinthians", chapter: 12 }
  ],
  "03-07": [
    { bookId: "exodus", chapter: 22 },
    { bookId: "john", chapter: 6 },
    { bookId: "job", chapter: 34 },
    { bookId: "galatians", chapter: 1 }
  ],
  "03-08": [
    { bookId: "exodus", chapter: 23 },
    { bookId: "john", chapter: 7 },
    { bookId: "job", chapter: 35 },
    { bookId: "galatians", chapter: 2 }
  ],
  // Week 11
  "03-09": [
    { bookId: "exodus", chapter: 24 },
    { bookId: "john", chapter: 8 },
    { bookId: "job", chapter: 37 },
    { bookId: "galatians", chapter: 3 }
  ],
  "03-10": [
    { bookId: "exodus", chapter: 26 },
    { bookId: "john", chapter: 9 },
    { bookId: "job", chapter: 38 },
    { bookId: "galatians", chapter: 4 }
  ],
  "03-11": [
    { bookId: "exodus", chapter: 27 },
    { bookId: "john", chapter: 10 },
    { bookId: "job", chapter: 39 },
    { bookId: "galatians", chapter: 5 }
  ],
  "03-12": [
    { bookId: "exodus", chapter: 28 },
    { bookId: "john", chapter: 11 },
    { bookId: "job", chapter: 40 },
    { bookId: "galatians", chapter: 6 }
  ],
  "03-13": [
    { bookId: "exodus", chapter: 29 },
    { bookId: "john", chapter: 12 },
    { bookId: "job", chapter: 41 },
    { bookId: "ephesians", chapter: 1 }
  ],
  "03-14": [
    { bookId: "exodus", chapter: 30 },
    { bookId: "john", chapter: 13 },
    { bookId: "job", chapter: 42 },
    { bookId: "ephesians", chapter: 2 }
  ],
  "03-15": [
    { bookId: "exodus", chapter: 31 },
    { bookId: "john", chapter: 15 },
    { bookId: "proverbs", chapter: 1 },
    { bookId: "ephesians", chapter: 4 }
  ],
  // Week 12
  "03-16": [
    { bookId: "exodus", chapter: 32 },
    { bookId: "john", chapter: 16 },
    { bookId: "proverbs", chapter: 2 },
    { bookId: "ephesians", chapter: 5 }
  ],
  "03-17": [
    { bookId: "exodus", chapter: 33 },
    { bookId: "john", chapter: 17 },
    { bookId: "proverbs", chapter: 3 },
    { bookId: "ephesians", chapter: 6 }
  ],
  "03-18": [
    { bookId: "exodus", chapter: 34 },
    { bookId: "john", chapter: 18 },
    { bookId: "proverbs", chapter: 4 },
    { bookId: "philippians", chapter: 1 }
  ],
  "03-19": [
    { bookId: "exodus", chapter: 36 },
    { bookId: "john", chapter: 19 },
    { bookId: "proverbs", chapter: 5 },
    { bookId: "philippians", chapter: 2 }
  ],
  "03-20": [
    { bookId: "exodus", chapter: 37 },
    { bookId: "john", chapter: 20 },
    { bookId: "proverbs", chapter: 6 },
    { bookId: "philippians", chapter: 3 }
  ],
  "03-21": [
    { bookId: "exodus", chapter: 38 },
    { bookId: "john", chapter: 21 },
    { bookId: "proverbs", chapter: 7 },
    { bookId: "philippians", chapter: 4 }
  ],
  "03-22": [
    { bookId: "exodus", chapter: 39 },
    { bookId: "psalms", chapter: 1 },
    { bookId: "proverbs", chapter: 8 },
    { bookId: "colossians", chapter: 1 }
  ],
  // Week 13
  "03-23": [
    { bookId: "exodus", chapter: 40 },
    { bookId: "psalms", chapter: 2 },
    { bookId: "proverbs", chapter: 9 },
    { bookId: "colossians", chapter: 2 }
  ],
  "03-24": [
    { bookId: "leviticus", chapter: 1 },
    { bookId: "psalms", chapter: 4 },
    { bookId: "proverbs", chapter: 10 },
    { bookId: "colossians", chapter: 4 }
  ],
  "03-25": [
    { bookId: "leviticus", chapter: 2 },
    { bookId: "psalms", chapter: 5 },
    { bookId: "proverbs", chapter: 11 },
    { bookId: "1thessalonians", chapter: 1 }
  ],
  "03-26": [
    { bookId: "leviticus", chapter: 3 },
    { bookId: "psalms", chapter: 6 },
    { bookId: "proverbs", chapter: 12 },
    { bookId: "1thessalonians", chapter: 2 }
  ],
  "03-27": [
    { bookId: "leviticus", chapter: 4 },
    { bookId: "psalms", chapter: 7 },
    { bookId: "proverbs", chapter: 13 },
    { bookId: "1thessalonians", chapter: 3 }
  ],
  "03-28": [
    { bookId: "leviticus", chapter: 5 },
    { bookId: "psalms", chapter: 8 },
    { bookId: "proverbs", chapter: 14 },
    { bookId: "1thessalonians", chapter: 4 }
  ],
  "03-29": [
    { bookId: "leviticus", chapter: 7 },
    { bookId: "psalms", chapter: 9 },
    { bookId: "proverbs", chapter: 15 },
    { bookId: "1thessalonians", chapter: 5 }
  ],
  // Week 14
  "03-30": [
    { bookId: "leviticus", chapter: 8 },
    { bookId: "psalms", chapter: 10 },
    { bookId: "proverbs", chapter: 16 },
    { bookId: "2thessalonians", chapter: 1 }
  ],
  "03-31": [
    { bookId: "leviticus", chapter: 9 },
    { bookId: "psalms", chapter: 11 },
    { bookId: "proverbs", chapter: 17 },
    { bookId: "2thessalonians", chapter: 2 }
  ],
  "04-01": [
    { bookId: "leviticus", chapter: 10 },
    { bookId: "psalms", chapter: 13 },
    { bookId: "proverbs", chapter: 18 },
    { bookId: "1timothy", chapter: 1 }
  ],
  "04-02": [
    { bookId: "leviticus", chapter: 11 },
    { bookId: "psalms", chapter: 14 },
    { bookId: "proverbs", chapter: 19 },
    { bookId: "1timothy", chapter: 2 }
  ],
  "04-03": [
    { bookId: "leviticus", chapter: 12 },
    { bookId: "psalms", chapter: 15 },
    { bookId: "proverbs", chapter: 20 },
    { bookId: "1timothy", chapter: 3 }
  ],
  "04-04": [
    { bookId: "leviticus", chapter: 13 },
    { bookId: "psalms", chapter: 16 },
    { bookId: "proverbs", chapter: 21 },
    { bookId: "1timothy", chapter: 4 }
  ],
  "04-05": [
    { bookId: "leviticus", chapter: 14 },
    { bookId: "psalms", chapter: 17 },
    { bookId: "proverbs", chapter: 22 },
    { bookId: "1timothy", chapter: 5 }
  ],
  // Week 15
  "04-06": [
    { bookId: "leviticus", chapter: 15 },
    { bookId: "psalms", chapter: 18 },
    { bookId: "proverbs", chapter: 23 },
    { bookId: "1timothy", chapter: 6 }
  ],
  "04-07": [
    { bookId: "leviticus", chapter: 16 },
    { bookId: "psalms", chapter: 19 },
    { bookId: "proverbs", chapter: 24 },
    { bookId: "2timothy", chapter: 1 }
  ],
  "04-08": [
    { bookId: "leviticus", chapter: 18 },
    { bookId: "psalms", chapter: 20 },
    { bookId: "proverbs", chapter: 25 },
    { bookId: "2timothy", chapter: 2 }
  ],
  "04-09": [
    { bookId: "leviticus", chapter: 19 },
    { bookId: "psalms", chapter: 22 },
    { bookId: "proverbs", chapter: 26 },
    { bookId: "2timothy", chapter: 4 }
  ],
  "04-10": [
    { bookId: "leviticus", chapter: 20 },
    { bookId: "psalms", chapter: 23 },
    { bookId: "proverbs", chapter: 27 },
    { bookId: "titus", chapter: 1 }
  ],
  "04-11": [
    { bookId: "leviticus", chapter: 21 },
    { bookId: "psalms", chapter: 24 },
    { bookId: "proverbs", chapter: 29 },
    { bookId: "titus", chapter: 2 }
  ],
  "04-12": [
    { bookId: "leviticus", chapter: 22 },
    { bookId: "psalms", chapter: 25 },
    { bookId: "proverbs", chapter: 30 },
    { bookId: "titus", chapter: 3 }
  ],
  // Week 16
  "04-13": [
    { bookId: "leviticus", chapter: 23 },
    { bookId: "psalms", chapter: 26 },
    { bookId: "proverbs", chapter: 31 },
    { bookId: "philemon", chapter: 1 }
  ],
  "04-14": [
    { bookId: "leviticus", chapter: 24 },
    { bookId: "psalms", chapter: 27 },
    { bookId: "ecclesiastes", chapter: 1 },
    { bookId: "hebrews", chapter: 1 }
  ],
  "04-15": [
    { bookId: "leviticus", chapter: 25 },
    { bookId: "psalms", chapter: 28 },
    { bookId: "ecclesiastes", chapter: 2 },
    { bookId: "hebrews", chapter: 2 }
  ],
  "04-16": [
    { bookId: "leviticus", chapter: 26 },
    { bookId: "psalms", chapter: 29 },
    { bookId: "ecclesiastes", chapter: 3 },
    { bookId: "hebrews", chapter: 3 }
  ],
  "04-17": [
    { bookId: "numbers", chapter: 1 },
    { bookId: "psalms", chapter: 31 },
    { bookId: "ecclesiastes", chapter: 4 },
    { bookId: "hebrews", chapter: 5 }
  ],
  "04-18": [
    { bookId: "numbers", chapter: 2 },
    { bookId: "psalms", chapter: 32 },
    { bookId: "ecclesiastes", chapter: 5 },
    { bookId: "hebrews", chapter: 6 }
  ],
  "04-19": [
    { bookId: "numbers", chapter: 3 },
    { bookId: "psalms", chapter: 33 },
    { bookId: "ecclesiastes", chapter: 6 },
    { bookId: "hebrews", chapter: 7 }
  ],
  // Week 17
  "04-20": [
    { bookId: "numbers", chapter: 4 },
    { bookId: "psalms", chapter: 34 },
    { bookId: "ecclesiastes", chapter: 7 },
    { bookId: "hebrews", chapter: 8 }
  ],
  "04-21": [
    { bookId: "numbers", chapter: 5 },
    { bookId: "psalms", chapter: 35 },
    { bookId: "ecclesiastes", chapter: 8 },
    { bookId: "hebrews", chapter: 9 }
  ],
  "04-22": [
    { bookId: "numbers", chapter: 6 },
    { bookId: "psalms", chapter: 36 },
    { bookId: "ecclesiastes", chapter: 9 },
    { bookId: "hebrews", chapter: 10 }
  ],
  "04-23": [
    { bookId: "numbers", chapter: 7 },
    { bookId: "psalms", chapter: 37 },
    { bookId: "ecclesiastes", chapter: 10 },
    { bookId: "hebrews", chapter: 11 }
  ],
  "04-24": [
    { bookId: "numbers", chapter: 8 },
    { bookId: "psalms", chapter: 38 },
    { bookId: "ecclesiastes", chapter: 11 },
    { bookId: "hebrews", chapter: 12 }
  ],
  "04-25": [
    { bookId: "numbers", chapter: 9 },
    { bookId: "psalms", chapter: 40 },
    { bookId: "ecclesiastes", chapter: 12 },
    { bookId: "james", chapter: 1 }
  ],
  "04-26": [
    { bookId: "numbers", chapter: 10 },
    { bookId: "psalms", chapter: 41 },
    { bookId: "song", chapter: 1 },
    { bookId: "james", chapter: 2 }
  ],
  // Week 18
  "04-27": [
    { bookId: "numbers", chapter: 12 },
    { bookId: "psalms", chapter: 42 },
    { bookId: "song", chapter: 2 },
    { bookId: "james", chapter: 3 }
  ],
  "04-28": [
    { bookId: "numbers", chapter: 13 },
    { bookId: "psalms", chapter: 43 },
    { bookId: "song", chapter: 3 },
    { bookId: "james", chapter: 4 }
  ],
  "04-29": [
    { bookId: "numbers", chapter: 14 },
    { bookId: "psalms", chapter: 44 },
    { bookId: "song", chapter: 4 },
    { bookId: "james", chapter: 5 }
  ],
  "04-30": [
    { bookId: "numbers", chapter: 15 },
    { bookId: "psalms", chapter: 45 },
    { bookId: "song", chapter: 5 },
    { bookId: "1peter", chapter: 1 }
  ],
  "05-01": [
    { bookId: "numbers", chapter: 16 },
    { bookId: "psalms", chapter: 46 },
    { bookId: "song", chapter: 6 },
    { bookId: "1peter", chapter: 2 }
  ],
  "05-02": [
    { bookId: "numbers", chapter: 17 },
    { bookId: "psalms", chapter: 47 },
    { bookId: "song", chapter: 7 },
    { bookId: "1peter", chapter: 3 }
  ],
  "05-03": [
    { bookId: "numbers", chapter: 18 },
    { bookId: "psalms", chapter: 49 },
    { bookId: "song", chapter: 8 },
    { bookId: "1peter", chapter: 5 }
  ],
  // Week 19
  "05-04": [
    { bookId: "numbers", chapter: 19 },
    { bookId: "psalms", chapter: 50 },
    { bookId: "isaiah", chapter: 1 },
    { bookId: "2peter", chapter: 1 }
  ],
  "05-05": [
    { bookId: "numbers", chapter: 20 },
    { bookId: "psalms", chapter: 51 },
    { bookId: "isaiah", chapter: 2 },
    { bookId: "2peter", chapter: 2 }
  ],
  "05-06": [
    { bookId: "numbers", chapter: 22 },
    { bookId: "psalms", chapter: 52 },
    { bookId: "isaiah", chapter: 3 },
    { bookId: "2peter", chapter: 3 }
  ],
  "05-07": [
    { bookId: "numbers", chapter: 23 },
    { bookId: "psalms", chapter: 53 },
    { bookId: "isaiah", chapter: 4 },
    { bookId: "1john", chapter: 1 }
  ],
  "05-08": [
    { bookId: "numbers", chapter: 24 },
    { bookId: "psalms", chapter: 54 },
    { bookId: "isaiah", chapter: 5 },
    { bookId: "1john", chapter: 2 }
  ],
  "05-09": [
    { bookId: "numbers", chapter: 25 },
    { bookId: "psalms", chapter: 55 },
    { bookId: "isaiah", chapter: 6 },
    { bookId: "1john", chapter: 3 }
  ],
  "05-10": [
    { bookId: "numbers", chapter: 26 },
    { bookId: "psalms", chapter: 56 },
    { bookId: "isaiah", chapter: 7 },
    { bookId: "1john", chapter: 4 }
  ],
  // Week 20
  "05-11": [
    { bookId: "numbers", chapter: 27 },
    { bookId: "psalms", chapter: 58 },
    { bookId: "isaiah", chapter: 8 },
    { bookId: "2john", chapter: 1 }
  ],
  "05-12": [
    { bookId: "numbers", chapter: 28 },
    { bookId: "psalms", chapter: 59 },
    { bookId: "isaiah", chapter: 9 },
    { bookId: "3john", chapter: 1 }
  ],
  "05-13": [
    { bookId: "numbers", chapter: 29 },
    { bookId: "psalms", chapter: 60 },
    { bookId: "isaiah", chapter: 10 },
    { bookId: "jude", chapter: 1 }
  ],
  "05-14": [
    { bookId: "numbers", chapter: 30 },
    { bookId: "psalms", chapter: 61 },
    { bookId: "isaiah", chapter: 12 },
    { bookId: "revelation", chapter: 1 }
  ],
  "05-15": [
    { bookId: "numbers", chapter: 31 },
    { bookId: "psalms", chapter: 62 },
    { bookId: "isaiah", chapter: 13 },
    { bookId: "revelation", chapter: 2 }
  ],
  "05-16": [
    { bookId: "numbers", chapter: 33 },
    { bookId: "psalms", chapter: 63 },
    { bookId: "isaiah", chapter: 14 },
    { bookId: "revelation", chapter: 3 }
  ],
  "05-17": [
    { bookId: "numbers", chapter: 34 },
    { bookId: "psalms", chapter: 64 },
    { bookId: "isaiah", chapter: 15 },
    { bookId: "revelation", chapter: 4 }
  ],
  // Week 21
  "05-18": [
    { bookId: "numbers", chapter: 35 },
    { bookId: "psalms", chapter: 65 },
    { bookId: "isaiah", chapter: 16 },
    { bookId: "revelation", chapter: 5 }
  ],
  "05-19": [
    { bookId: "numbers", chapter: 36 },
    { bookId: "psalms", chapter: 67 },
    { bookId: "isaiah", chapter: 17 },
    { bookId: "revelation", chapter: 7 }
  ],
  "05-20": [
    { bookId: "deuteronomy", chapter: 1 },
    { bookId: "psalms", chapter: 68 },
    { bookId: "isaiah", chapter: 18 },
    { bookId: "revelation", chapter: 8 }
  ],
  "05-21": [
    { bookId: "deuteronomy", chapter: 2 },
    { bookId: "psalms", chapter: 69 },
    { bookId: "isaiah", chapter: 19 },
    { bookId: "revelation", chapter: 9 }
  ],
  "05-22": [
    { bookId: "deuteronomy", chapter: 3 },
    { bookId: "psalms", chapter: 70 },
    { bookId: "isaiah", chapter: 20 },
    { bookId: "revelation", chapter: 10 }
  ],
  "05-23": [
    { bookId: "deuteronomy", chapter: 4 },
    { bookId: "psalms", chapter: 71 },
    { bookId: "isaiah", chapter: 21 },
    { bookId: "revelation", chapter: 11 }
  ],
  "05-24": [
    { bookId: "deuteronomy", chapter: 5 },
    { bookId: "psalms", chapter: 72 },
    { bookId: "isaiah", chapter: 22 },
    { bookId: "revelation", chapter: 12 }
  ],
  // Week 22
  "05-25": [
    { bookId: "deuteronomy", chapter: 6 },
    { bookId: "psalms", chapter: 73 },
    { bookId: "isaiah", chapter: 23 },
    { bookId: "revelation", chapter: 13 }
  ],
  "05-26": [
    { bookId: "deuteronomy", chapter: 8 },
    { bookId: "psalms", chapter: 74 },
    { bookId: "isaiah", chapter: 24 },
    { bookId: "revelation", chapter: 14 }
  ],
  "05-27": [
    { bookId: "deuteronomy", chapter: 9 },
    { bookId: "psalms", chapter: 76 },
    { bookId: "isaiah", chapter: 25 },
    { bookId: "revelation", chapter: 16 }
  ],
  "05-28": [
    { bookId: "deuteronomy", chapter: 10 },
    { bookId: "psalms", chapter: 77 },
    { bookId: "isaiah", chapter: 26 },
    { bookId: "revelation", chapter: 17 }
  ],
  "05-29": [
    { bookId: "deuteronomy", chapter: 11 },
    { bookId: "psalms", chapter: 78 },
    { bookId: "isaiah", chapter: 27 },
    { bookId: "revelation", chapter: 18 }
  ],
  "05-30": [
    { bookId: "deuteronomy", chapter: 12 },
    { bookId: "psalms", chapter: 79 },
    { bookId: "isaiah", chapter: 28 },
    { bookId: "revelation", chapter: 19 }
  ],
  "05-31": [
    { bookId: "deuteronomy", chapter: 13 },
    { bookId: "psalms", chapter: 80 },
    { bookId: "isaiah", chapter: 29 },
    { bookId: "revelation", chapter: 20 }
  ],
  // Week 23
  "06-01": [
    { bookId: "deuteronomy", chapter: 14 },
    { bookId: "psalms", chapter: 81 },
    { bookId: "isaiah", chapter: 30 },
    { bookId: "revelation", chapter: 21 }
  ],
  "06-02": [
    { bookId: "deuteronomy", chapter: 15 },
    { bookId: "psalms", chapter: 82 },
    { bookId: "isaiah", chapter: 31 },
    { bookId: "revelation", chapter: 22 }
  ],
  "06-03": [
    { bookId: "deuteronomy", chapter: 16 },
    { bookId: "psalms", chapter: 83 },
    { bookId: "isaiah", chapter: 32 },
    { bookId: "matthew", chapter: 1 }
  ],
  "06-04": [
    { bookId: "deuteronomy", chapter: 18 },
    { bookId: "psalms", chapter: 84 },
    { bookId: "isaiah", chapter: 33 },
    { bookId: "matthew", chapter: 2 }
  ],
  "06-05": [
    { bookId: "deuteronomy", chapter: 19 },
    { bookId: "psalms", chapter: 86 },
    { bookId: "isaiah", chapter: 34 },
    { bookId: "matthew", chapter: 4 }
  ],
  "06-06": [
    { bookId: "deuteronomy", chapter: 20 },
    { bookId: "psalms", chapter: 87 },
    { bookId: "isaiah", chapter: 35 },
    { bookId: "matthew", chapter: 5 }
  ],
  "06-07": [
    { bookId: "deuteronomy", chapter: 21 },
    { bookId: "psalms", chapter: 88 },
    { bookId: "isaiah", chapter: 36 },
    { bookId: "matthew", chapter: 6 }
  ],
  // Week 24
  "06-08": [
    { bookId: "deuteronomy", chapter: 22 },
    { bookId: "psalms", chapter: 89 },
    { bookId: "isaiah", chapter: 37 },
    { bookId: "matthew", chapter: 7 }
  ],
  "06-09": [
    { bookId: "deuteronomy", chapter: 23 },
    { bookId: "psalms", chapter: 90 },
    { bookId: "isaiah", chapter: 38 },
    { bookId: "matthew", chapter: 8 }
  ],
  "06-10": [
    { bookId: "deuteronomy", chapter: 24 },
    { bookId: "psalms", chapter: 91 },
    { bookId: "isaiah", chapter: 39 },
    { bookId: "matthew", chapter: 9 }
  ],
  "06-11": [
    { bookId: "deuteronomy", chapter: 25 },
    { bookId: "psalms", chapter: 92 },
    { bookId: "isaiah", chapter: 40 },
    { bookId: "matthew", chapter: 10 }
  ],
  "06-12": [
    { bookId: "deuteronomy", chapter: 26 },
    { bookId: "psalms", chapter: 93 },
    { bookId: "isaiah", chapter: 41 },
    { bookId: "matthew", chapter: 11 }
  ],
  "06-13": [
    { bookId: "deuteronomy", chapter: 27 },
    { bookId: "psalms", chapter: 95 },
    { bookId: "isaiah", chapter: 42 },
    { bookId: "matthew", chapter: 13 }
  ],
  "06-14": [
    { bookId: "deuteronomy", chapter: 29 },
    { bookId: "psalms", chapter: 96 },
    { bookId: "isaiah", chapter: 43 },
    { bookId: "matthew", chapter: 14 }
  ],
  // Week 25
  "06-15": [
    { bookId: "deuteronomy", chapter: 30 },
    { bookId: "psalms", chapter: 97 },
    { bookId: "isaiah", chapter: 44 },
    { bookId: "matthew", chapter: 15 }
  ],
  "06-16": [
    { bookId: "deuteronomy", chapter: 31 },
    { bookId: "psalms", chapter: 98 },
    { bookId: "isaiah", chapter: 46 },
    { bookId: "matthew", chapter: 16 }
  ],
  "06-17": [
    { bookId: "deuteronomy", chapter: 32 },
    { bookId: "psalms", chapter: 99 },
    { bookId: "isaiah", chapter: 47 },
    { bookId: "matthew", chapter: 17 }
  ],
  "06-18": [
    { bookId: "deuteronomy", chapter: 33 },
    { bookId: "psalms", chapter: 100 },
    { bookId: "isaiah", chapter: 48 },
    { bookId: "matthew", chapter: 18 }
  ],
  "06-19": [
    { bookId: "deuteronomy", chapter: 34 },
    { bookId: "psalms", chapter: 101 },
    { bookId: "isaiah", chapter: 49 },
    { bookId: "matthew", chapter: 19 }
  ],
  "06-20": [
    { bookId: "joshua", chapter: 1 },
    { bookId: "psalms", chapter: 102 },
    { bookId: "isaiah", chapter: 50 },
    { bookId: "matthew", chapter: 20 }
  ],
  "06-21": [
    { bookId: "joshua", chapter: 2 },
    { bookId: "psalms", chapter: 104 },
    { bookId: "isaiah", chapter: 51 },
    { bookId: "matthew", chapter: 22 }
  ],
  // Week 26
  "06-22": [
    { bookId: "joshua", chapter: 3 },
    { bookId: "psalms", chapter: 105 },
    { bookId: "isaiah", chapter: 52 },
    { bookId: "matthew", chapter: 23 }
  ],
  "06-23": [
    { bookId: "joshua", chapter: 5 },
    { bookId: "psalms", chapter: 106 },
    { bookId: "isaiah", chapter: 53 },
    { bookId: "matthew", chapter: 24 }
  ],
  "06-24": [
    { bookId: "joshua", chapter: 6 },
    { bookId: "psalms", chapter: 107 },
    { bookId: "isaiah", chapter: 54 },
    { bookId: "matthew", chapter: 25 }
  ],
  "06-25": [
    { bookId: "joshua", chapter: 7 },
    { bookId: "psalms", chapter: 108 },
    { bookId: "isaiah", chapter: 55 },
    { bookId: "matthew", chapter: 26 }
  ],
  "06-26": [
    { bookId: "joshua", chapter: 8 },
    { bookId: "psalms", chapter: 109 },
    { bookId: "isaiah", chapter: 56 },
    { bookId: "matthew", chapter: 27 }
  ],
  "06-27": [
    { bookId: "joshua", chapter: 9 },
    { bookId: "psalms", chapter: 110 },
    { bookId: "isaiah", chapter: 57 },
    { bookId: "matthew", chapter: 28 }
  ],
  "06-28": [
    { bookId: "joshua", chapter: 10 },
    { bookId: "psalms", chapter: 111 },
    { bookId: "isaiah", chapter: 58 },
    { bookId: "mark", chapter: 1 }
  ],
  // Week 27
  "06-29": [
    { bookId: "joshua", chapter: 11 },
    { bookId: "psalms", chapter: 113 },
    { bookId: "isaiah", chapter: 59 },
    { bookId: "mark", chapter: 3 }
  ],
  "06-30": [
    { bookId: "joshua", chapter: 12 },
    { bookId: "psalms", chapter: 114 },
    { bookId: "isaiah", chapter: 60 },
    { bookId: "mark", chapter: 4 }
  ],
  "07-01": [
    { bookId: "joshua", chapter: 13 },
    { bookId: "psalms", chapter: 115 },
    { bookId: "isaiah", chapter: 61 },
    { bookId: "mark", chapter: 5 }
  ],
  "07-02": [
    { bookId: "joshua", chapter: 14 },
    { bookId: "psalms", chapter: 116 },
    { bookId: "isaiah", chapter: 62 },
    { bookId: "mark", chapter: 6 }
  ],
  "07-03": [
    { bookId: "joshua", chapter: 16 },
    { bookId: "psalms", chapter: 117 },
    { bookId: "isaiah", chapter: 63 },
    { bookId: "mark", chapter: 7 }
  ],
  "07-04": [
    { bookId: "joshua", chapter: 17 },
    { bookId: "psalms", chapter: 118 },
    { bookId: "isaiah", chapter: 64 },
    { bookId: "mark", chapter: 8 }
  ],
  "07-05": [
    { bookId: "joshua", chapter: 18 },
    { bookId: "psalms", chapter: 119 },
    { bookId: "isaiah", chapter: 65 },
    { bookId: "mark", chapter: 9 }
  ],
  // Week 28
  "07-06": [
    { bookId: "joshua", chapter: 19 },
    { bookId: "psalms", chapter: 120 },
    { bookId: "isaiah", chapter: 66 },
    { bookId: "mark", chapter: 10 }
  ],
  "07-07": [
    { bookId: "joshua", chapter: 20 },
    { bookId: "psalms", chapter: 122 },
    { bookId: "jeremiah", chapter: 1 },
    { bookId: "mark", chapter: 12 }
  ],
  "07-08": [
    { bookId: "joshua", chapter: 21 },
    { bookId: "psalms", chapter: 123 },
    { bookId: "jeremiah", chapter: 2 },
    { bookId: "mark", chapter: 13 }
  ],
  "07-09": [
    { bookId: "joshua", chapter: 22 },
    { bookId: "psalms", chapter: 124 },
    { bookId: "jeremiah", chapter: 3 },
    { bookId: "mark", chapter: 14 }
  ],
  "07-10": [
    { bookId: "joshua", chapter: 23 },
    { bookId: "psalms", chapter: 125 },
    { bookId: "jeremiah", chapter: 4 },
    { bookId: "mark", chapter: 15 }
  ],
  "07-11": [
    { bookId: "joshua", chapter: 24 },
    { bookId: "psalms", chapter: 126 },
    { bookId: "jeremiah", chapter: 5 },
    { bookId: "mark", chapter: 16 }
  ],
  "07-12": [
    { bookId: "judges", chapter: 1 },
    { bookId: "psalms", chapter: 127 },
    { bookId: "jeremiah", chapter: 6 },
    { bookId: "psalms", chapter: 1 }
  ],
  // Week 29
  "07-13": [
    { bookId: "judges", chapter: 3 },
    { bookId: "psalms", chapter: 128 },
    { bookId: "jeremiah", chapter: 7 },
    { bookId: "psalms", chapter: 2 }
  ],
  "07-14": [
    { bookId: "judges", chapter: 4 },
    { bookId: "psalms", chapter: 129 },
    { bookId: "jeremiah", chapter: 8 },
    { bookId: "psalms", chapter: 3 }
  ],
  "07-15": [
    { bookId: "judges", chapter: 5 },
    { bookId: "psalms", chapter: 131 },
    { bookId: "jeremiah", chapter: 9 },
    { bookId: "psalms", chapter: 5 }
  ],
  "07-16": [
    { bookId: "judges", chapter: 6 },
    { bookId: "psalms", chapter: 132 },
    { bookId: "jeremiah", chapter: 10 },
    { bookId: "psalms", chapter: 6 }
  ],
  "07-17": [
    { bookId: "judges", chapter: 7 },
    { bookId: "psalms", chapter: 133 },
    { bookId: "jeremiah", chapter: 11 },
    { bookId: "psalms", chapter: 7 }
  ],
  "07-18": [
    { bookId: "judges", chapter: 8 },
    { bookId: "psalms", chapter: 134 },
    { bookId: "jeremiah", chapter: 12 },
    { bookId: "psalms", chapter: 8 }
  ],
  "07-19": [
    { bookId: "judges", chapter: 9 },
    { bookId: "psalms", chapter: 135 },
    { bookId: "jeremiah", chapter: 13 },
    { bookId: "psalms", chapter: 9 }
  ],
  // Week 30
  "07-20": [
    { bookId: "judges", chapter: 10 },
    { bookId: "psalms", chapter: 136 },
    { bookId: "jeremiah", chapter: 15 },
    { bookId: "psalms", chapter: 10 }
  ],
  "07-21": [
    { bookId: "judges", chapter: 11 },
    { bookId: "psalms", chapter: 137 },
    { bookId: "jeremiah", chapter: 16 },
    { bookId: "psalms", chapter: 11 }
  ],
  "07-22": [
    { bookId: "judges", chapter: 13 },
    { bookId: "psalms", chapter: 138 },
    { bookId: "jeremiah", chapter: 17 },
    { bookId: "psalms", chapter: 12 }
  ],
  "07-23": [
    { bookId: "judges", chapter: 14 },
    { bookId: "psalms", chapter: 140 },
    { bookId: "jeremiah", chapter: 18 },
    { bookId: "psalms", chapter: 14 }
  ],
  "07-24": [
    { bookId: "judges", chapter: 15 },
    { bookId: "psalms", chapter: 141 },
    { bookId: "jeremiah", chapter: 19 },
    { bookId: "psalms", chapter: 15 }
  ],
  "07-25": [
    { bookId: "judges", chapter: 16 },
    { bookId: "psalms", chapter: 142 },
    { bookId: "jeremiah", chapter: 20 },
    { bookId: "psalms", chapter: 16 }
  ],
  "07-26": [
    { bookId: "judges", chapter: 17 },
    { bookId: "psalms", chapter: 143 },
    { bookId: "jeremiah", chapter: 21 },
    { bookId: "psalms", chapter: 17 }
  ],
  // Week 31
  "07-27": [
    { bookId: "judges", chapter: 18 },
    { bookId: "psalms", chapter: 144 },
    { bookId: "jeremiah", chapter: 22 },
    { bookId: "psalms", chapter: 18 }
  ],
  "07-28": [
    { bookId: "judges", chapter: 19 },
    { bookId: "psalms", chapter: 145 },
    { bookId: "jeremiah", chapter: 23 },
    { bookId: "psalms", chapter: 19 }
  ],
  "07-29": [
    { bookId: "judges", chapter: 20 },
    { bookId: "psalms", chapter: 146 },
    { bookId: "jeremiah", chapter: 24 },
    { bookId: "psalms", chapter: 20 }
  ],
  "07-30": [
    { bookId: "judges", chapter: 21 },
    { bookId: "psalms", chapter: 147 },
    { bookId: "jeremiah", chapter: 25 },
    { bookId: "psalms", chapter: 21 }
  ],
  "07-31": [
    { bookId: "ruth", chapter: 1 },
    { bookId: "psalms", chapter: 149 },
    { bookId: "jeremiah", chapter: 26 },
    { bookId: "psalms", chapter: 23 }
  ],
  "08-01": [
    { bookId: "ruth", chapter: 3 },
    { bookId: "psalms", chapter: 150 },
    { bookId: "jeremiah", chapter: 27 },
    { bookId: "psalms", chapter: 24 }
  ],
  "08-02": [
    { bookId: "ruth", chapter: 4 },
    { bookId: "acts", chapter: 1 },
    { bookId: "jeremiah", chapter: 28 },
    { bookId: "psalms", chapter: 25 }
  ],
  // Week 32
  "08-03": [
    { bookId: "1samuel", chapter: 1 },
    { bookId: "acts", chapter: 2 },
    { bookId: "jeremiah", chapter: 29 },
    { bookId: "psalms", chapter: 26 }
  ],
  "08-04": [
    { bookId: "1samuel", chapter: 2 },
    { bookId: "acts", chapter: 3 },
    { bookId: "jeremiah", chapter: 30 },
    { bookId: "psalms", chapter: 27 }
  ],
  "08-05": [
    { bookId: "1samuel", chapter: 3 },
    { bookId: "acts", chapter: 4 },
    { bookId: "jeremiah", chapter: 31 },
    { bookId: "psalms", chapter: 28 }
  ],
  "08-06": [
    { bookId: "1samuel", chapter: 4 },
    { bookId: "acts", chapter: 5 },
    { bookId: "jeremiah", chapter: 32 },
    { bookId: "psalms", chapter: 29 }
  ],
  "08-07": [
    { bookId: "1samuel", chapter: 5 },
    { bookId: "acts", chapter: 6 },
    { bookId: "jeremiah", chapter: 33 },
    { bookId: "psalms", chapter: 30 }
  ],
  "08-08": [
    { bookId: "1samuel", chapter: 6 },
    { bookId: "acts", chapter: 8 },
    { bookId: "jeremiah", chapter: 34 },
    { bookId: "psalms", chapter: 32 }
  ],
  "08-09": [
    { bookId: "1samuel", chapter: 7 },
    { bookId: "acts", chapter: 9 },
    { bookId: "jeremiah", chapter: 35 },
    { bookId: "psalms", chapter: 33 }
  ],
  // Week 33
  "08-10": [
    { bookId: "1samuel", chapter: 9 },
    { bookId: "acts", chapter: 10 },
    { bookId: "jeremiah", chapter: 36 },
    { bookId: "psalms", chapter: 34 }
  ],
  "08-11": [
    { bookId: "1samuel", chapter: 10 },
    { bookId: "acts", chapter: 11 },
    { bookId: "jeremiah", chapter: 37 },
    { bookId: "psalms", chapter: 35 }
  ],
  "08-12": [
    { bookId: "1samuel", chapter: 11 },
    { bookId: "acts", chapter: 12 },
    { bookId: "jeremiah", chapter: 38 },
    { bookId: "psalms", chapter: 36 }
  ],
  "08-13": [
    { bookId: "1samuel", chapter: 12 },
    { bookId: "acts", chapter: 13 },
    { bookId: "jeremiah", chapter: 39 },
    { bookId: "psalms", chapter: 37 }
  ],
  "08-14": [
    { bookId: "1samuel", chapter: 13 },
    { bookId: "acts", chapter: 14 },
    { bookId: "jeremiah", chapter: 40 },
    { bookId: "psalms", chapter: 38 }
  ],
  "08-15": [
    { bookId: "1samuel", chapter: 14 },
    { bookId: "acts", chapter: 15 },
    { bookId: "jeremiah", chapter: 41 },
    { bookId: "psalms", chapter: 39 }
  ],
  "08-16": [
    { bookId: "1samuel", chapter: 15 },
    { bookId: "acts", chapter: 16 },
    { bookId: "jeremiah", chapter: 42 },
    { bookId: "psalms", chapter: 40 }
  ],
  // Week 34
  "08-17": [
    { bookId: "1samuel", chapter: 16 },
    { bookId: "acts", chapter: 18 },
    { bookId: "jeremiah", chapter: 43 },
    { bookId: "psalms", chapter: 42 }
  ],
  "08-18": [
    { bookId: "1samuel", chapter: 17 },
    { bookId: "acts", chapter: 19 },
    { bookId: "jeremiah", chapter: 44 },
    { bookId: "psalms", chapter: 43 }
  ],
  "08-19": [
    { bookId: "1samuel", chapter: 18 },
    { bookId: "acts", chapter: 20 },
    { bookId: "jeremiah", chapter: 45 },
    { bookId: "psalms", chapter: 44 }
  ],
  "08-20": [
    { bookId: "1samuel", chapter: 20 },
    { bookId: "acts", chapter: 21 },
    { bookId: "jeremiah", chapter: 46 },
    { bookId: "psalms", chapter: 45 }
  ],
  "08-21": [
    { bookId: "1samuel", chapter: 21 },
    { bookId: "acts", chapter: 22 },
    { bookId: "jeremiah", chapter: 47 },
    { bookId: "psalms", chapter: 46 }
  ],
  "08-22": [
    { bookId: "1samuel", chapter: 22 },
    { bookId: "acts", chapter: 23 },
    { bookId: "jeremiah", chapter: 49 },
    { bookId: "psalms", chapter: 47 }
  ],
  "08-23": [
    { bookId: "1samuel", chapter: 23 },
    { bookId: "acts", chapter: 24 },
    { bookId: "jeremiah", chapter: 50 },
    { bookId: "psalms", chapter: 48 }
  ],
  // Week 35
  "08-24": [
    { bookId: "1samuel", chapter: 24 },
    { bookId: "acts", chapter: 25 },
    { bookId: "jeremiah", chapter: 51 },
    { bookId: "psalms", chapter: 49 }
  ],
  "08-25": [
    { bookId: "1samuel", chapter: 25 },
    { bookId: "acts", chapter: 27 },
    { bookId: "jeremiah", chapter: 52 },
    { bookId: "psalms", chapter: 51 }
  ],
  "08-26": [
    { bookId: "1samuel", chapter: 26 },
    { bookId: "acts", chapter: 28 },
    { bookId: "lamentations", chapter: 1 },
    { bookId: "psalms", chapter: 52 }
  ],
  "08-27": [
    { bookId: "1samuel", chapter: 27 },
    { bookId: "romans", chapter: 1 },
    { bookId: "lamentations", chapter: 2 },
    { bookId: "psalms", chapter: 53 }
  ],
  "08-28": [
    { bookId: "1samuel", chapter: 28 },
    { bookId: "romans", chapter: 2 },
    { bookId: "lamentations", chapter: 3 },
    { bookId: "psalms", chapter: 54 }
  ],
  "08-29": [
    { bookId: "1samuel", chapter: 29 },
    { bookId: "romans", chapter: 3 },
    { bookId: "lamentations", chapter: 4 },
    { bookId: "psalms", chapter: 55 }
  ],
  "08-30": [
    { bookId: "1samuel", chapter: 31 },
    { bookId: "romans", chapter: 4 },
    { bookId: "lamentations", chapter: 5 },
    { bookId: "psalms", chapter: 56 }
  ],
  // Week 36
  "08-31": [
    { bookId: "2samuel", chapter: 1 },
    { bookId: "romans", chapter: 5 },
    { bookId: "ezekiel", chapter: 1 },
    { bookId: "psalms", chapter: 57 }
  ],
  "09-01": [
    { bookId: "2samuel", chapter: 2 },
    { bookId: "romans", chapter: 6 },
    { bookId: "ezekiel", chapter: 2 },
    { bookId: "psalms", chapter: 58 }
  ],
  "09-02": [
    { bookId: "2samuel", chapter: 3 },
    { bookId: "romans", chapter: 8 },
    { bookId: "ezekiel", chapter: 3 },
    { bookId: "psalms", chapter: 60 }
  ],
  "09-03": [
    { bookId: "2samuel", chapter: 4 },
    { bookId: "romans", chapter: 9 },
    { bookId: "ezekiel", chapter: 4 },
    { bookId: "psalms", chapter: 61 }
  ],
  "09-04": [
    { bookId: "2samuel", chapter: 5 },
    { bookId: "romans", chapter: 10 },
    { bookId: "ezekiel", chapter: 5 },
    { bookId: "psalms", chapter: 62 }
  ],
  "09-05": [
    { bookId: "2samuel", chapter: 6 },
    { bookId: "romans", chapter: 11 },
    { bookId: "ezekiel", chapter: 6 },
    { bookId: "psalms", chapter: 63 }
  ],
  "09-06": [
    { bookId: "2samuel", chapter: 7 },
    { bookId: "romans", chapter: 12 },
    { bookId: "ezekiel", chapter: 7 },
    { bookId: "psalms", chapter: 64 }
  ],
  // Week 37
  "09-07": [
    { bookId: "2samuel", chapter: 8 },
    { bookId: "romans", chapter: 13 },
    { bookId: "ezekiel", chapter: 8 },
    { bookId: "psalms", chapter: 65 }
  ],
  "09-08": [
    { bookId: "2samuel", chapter: 10 },
    { bookId: "romans", chapter: 14 },
    { bookId: "ezekiel", chapter: 9 },
    { bookId: "psalms", chapter: 66 }
  ],
  "09-09": [
    { bookId: "2samuel", chapter: 11 },
    { bookId: "romans", chapter: 15 },
    { bookId: "ezekiel", chapter: 10 },
    { bookId: "psalms", chapter: 67 }
  ],
  "09-10": [
    { bookId: "2samuel", chapter: 12 },
    { bookId: "1corinthians", chapter: 1 },
    { bookId: "ezekiel", chapter: 11 },
    { bookId: "psalms", chapter: 69 }
  ],
  "09-11": [
    { bookId: "2samuel", chapter: 13 },
    { bookId: "1corinthians", chapter: 2 },
    { bookId: "ezekiel", chapter: 12 },
    { bookId: "psalms", chapter: 70 }
  ],
  "09-12": [
    { bookId: "2samuel", chapter: 14 },
    { bookId: "1corinthians", chapter: 3 },
    { bookId: "ezekiel", chapter: 13 },
    { bookId: "psalms", chapter: 71 }
  ],
  "09-13": [
    { bookId: "2samuel", chapter: 15 },
    { bookId: "1corinthians", chapter: 4 },
    { bookId: "ezekiel", chapter: 14 },
    { bookId: "psalms", chapter: 72 }
  ],
  // Week 38
  "09-14": [
    { bookId: "2samuel", chapter: 16 },
    { bookId: "1corinthians", chapter: 5 },
    { bookId: "ezekiel", chapter: 15 },
    { bookId: "psalms", chapter: 73 }
  ],
  "09-15": [
    { bookId: "2samuel", chapter: 17 },
    { bookId: "1corinthians", chapter: 6 },
    { bookId: "ezekiel", chapter: 16 },
    { bookId: "psalms", chapter: 74 }
  ],
  "09-16": [
    { bookId: "2samuel", chapter: 18 },
    { bookId: "1corinthians", chapter: 7 },
    { bookId: "ezekiel", chapter: 17 },
    { bookId: "psalms", chapter: 75 }
  ],
  "09-17": [
    { bookId: "2samuel", chapter: 19 },
    { bookId: "1corinthians", chapter: 8 },
    { bookId: "ezekiel", chapter: 18 },
    { bookId: "psalms", chapter: 76 }
  ],
  "09-18": [
    { bookId: "2samuel", chapter: 21 },
    { bookId: "1corinthians", chapter: 10 },
    { bookId: "ezekiel", chapter: 19 },
    { bookId: "psalms", chapter: 78 }
  ],
  "09-19": [
    { bookId: "2samuel", chapter: 22 },
    { bookId: "1corinthians", chapter: 11 },
    { bookId: "ezekiel", chapter: 20 },
    { bookId: "psalms", chapter: 79 }
  ],
  "09-20": [
    { bookId: "2samuel", chapter: 23 },
    { bookId: "1corinthians", chapter: 12 },
    { bookId: "ezekiel", chapter: 21 },
    { bookId: "psalms", chapter: 80 }
  ],
  // Week 39
  "09-21": [
    { bookId: "2samuel", chapter: 24 },
    { bookId: "1corinthians", chapter: 13 },
    { bookId: "ezekiel", chapter: 22 },
    { bookId: "psalms", chapter: 81 }
  ],
  "09-22": [
    { bookId: "1kings", chapter: 1 },
    { bookId: "1corinthians", chapter: 14 },
    { bookId: "ezekiel", chapter: 23 },
    { bookId: "psalms", chapter: 82 }
  ],
  "09-23": [
    { bookId: "1kings", chapter: 2 },
    { bookId: "1corinthians", chapter: 15 },
    { bookId: "ezekiel", chapter: 24 },
    { bookId: "psalms", chapter: 83 }
  ],
  "09-24": [
    { bookId: "1kings", chapter: 3 },
    { bookId: "1corinthians", chapter: 16 },
    { bookId: "ezekiel", chapter: 26 },
    { bookId: "psalms", chapter: 84 }
  ],
  "09-25": [
    { bookId: "1kings", chapter: 4 },
    { bookId: "2corinthians", chapter: 1 },
    { bookId: "ezekiel", chapter: 27 },
    { bookId: "psalms", chapter: 85 }
  ],
  "09-26": [
    { bookId: "1kings", chapter: 5 },
    { bookId: "2corinthians", chapter: 3 },
    { bookId: "ezekiel", chapter: 28 },
    { bookId: "psalms", chapter: 87 }
  ],
  "09-27": [
    { bookId: "1kings", chapter: 7 },
    { bookId: "2corinthians", chapter: 4 },
    { bookId: "ezekiel", chapter: 29 },
    { bookId: "psalms", chapter: 88 }
  ],
  // Week 40
  "09-28": [
    { bookId: "1kings", chapter: 8 },
    { bookId: "2corinthians", chapter: 5 },
    { bookId: "ezekiel", chapter: 30 },
    { bookId: "psalms", chapter: 89 }
  ],
  "09-29": [
    { bookId: "1kings", chapter: 9 },
    { bookId: "2corinthians", chapter: 6 },
    { bookId: "ezekiel", chapter: 31 },
    { bookId: "psalms", chapter: 90 }
  ],
  "09-30": [
    { bookId: "1kings", chapter: 10 },
    { bookId: "2corinthians", chapter: 7 },
    { bookId: "ezekiel", chapter: 32 },
    { bookId: "psalms", chapter: 91 }
  ],
  "10-01": [
    { bookId: "1kings", chapter: 11 },
    { bookId: "2corinthians", chapter: 8 },
    { bookId: "ezekiel", chapter: 33 },
    { bookId: "psalms", chapter: 92 }
  ],
  "10-02": [
    { bookId: "1kings", chapter: 12 },
    { bookId: "2corinthians", chapter: 9 },
    { bookId: "ezekiel", chapter: 34 },
    { bookId: "psalms", chapter: 93 }
  ],
  "10-03": [
    { bookId: "1kings", chapter: 13 },
    { bookId: "2corinthians", chapter: 10 },
    { bookId: "ezekiel", chapter: 35 },
    { bookId: "psalms", chapter: 94 }
  ],
  "10-04": [
    { bookId: "1kings", chapter: 14 },
    { bookId: "2corinthians", chapter: 12 },
    { bookId: "ezekiel", chapter: 36 },
    { bookId: "psalms", chapter: 96 }
  ],
  // Week 41
  "10-05": [
    { bookId: "1kings", chapter: 15 },
    { bookId: "2corinthians", chapter: 13 },
    { bookId: "ezekiel", chapter: 37 },
    { bookId: "psalms", chapter: 97 }
  ],
  "10-06": [
    { bookId: "1kings", chapter: 16 },
    { bookId: "galatians", chapter: 1 },
    { bookId: "ezekiel", chapter: 38 },
    { bookId: "psalms", chapter: 98 }
  ],
  "10-07": [
    { bookId: "1kings", chapter: 18 },
    { bookId: "galatians", chapter: 2 },
    { bookId: "ezekiel", chapter: 39 },
    { bookId: "psalms", chapter: 99 }
  ],
  "10-08": [
    { bookId: "1kings", chapter: 19 },
    { bookId: "galatians", chapter: 3 },
    { bookId: "ezekiel", chapter: 40 },
    { bookId: "psalms", chapter: 100 }
  ],
  "10-09": [
    { bookId: "1kings", chapter: 20 },
    { bookId: "galatians", chapter: 4 },
    { bookId: "ezekiel", chapter: 41 },
    { bookId: "psalms", chapter: 101 }
  ],
  "10-10": [
    { bookId: "1kings", chapter: 21 },
    { bookId: "galatians", chapter: 5 },
    { bookId: "ezekiel", chapter: 42 },
    { bookId: "psalms", chapter: 102 }
  ],
  "10-11": [
    { bookId: "1kings", chapter: 22 },
    { bookId: "galatians", chapter: 6 },
    { bookId: "ezekiel", chapter: 43 },
    { bookId: "psalms", chapter: 103 }
  ],
  // Week 42
  "10-12": [
    { bookId: "2kings", chapter: 1 },
    { bookId: "ephesians", chapter: 2 },
    { bookId: "ezekiel", chapter: 44 },
    { bookId: "psalms", chapter: 105 }
  ],
  "10-13": [
    { bookId: "2kings", chapter: 2 },
    { bookId: "ephesians", chapter: 3 },
    { bookId: "ezekiel", chapter: 45 },
    { bookId: "psalms", chapter: 106 }
  ],
  "10-14": [
    { bookId: "2kings", chapter: 3 },
    { bookId: "ephesians", chapter: 4 },
    { bookId: "ezekiel", chapter: 46 },
    { bookId: "psalms", chapter: 107 }
  ],
  "10-15": [
    { bookId: "2kings", chapter: 4 },
    { bookId: "ephesians", chapter: 5 },
    { bookId: "ezekiel", chapter: 47 },
    { bookId: "psalms", chapter: 108 }
  ],
  "10-16": [
    { bookId: "2kings", chapter: 5 },
    { bookId: "ephesians", chapter: 6 },
    { bookId: "ezekiel", chapter: 48 },
    { bookId: "psalms", chapter: 109 }
  ],
  "10-17": [
    { bookId: "2kings", chapter: 7 },
    { bookId: "philippians", chapter: 1 },
    { bookId: "daniel", chapter: 1 },
    { bookId: "psalms", chapter: 110 }
  ],
  "10-18": [
    { bookId: "2kings", chapter: 8 },
    { bookId: "philippians", chapter: 2 },
    { bookId: "daniel", chapter: 2 },
    { bookId: "psalms", chapter: 111 }
  ],
  // Week 43
  "10-19": [
    { bookId: "2kings", chapter: 9 },
    { bookId: "philippians", chapter: 3 },
    { bookId: "daniel", chapter: 3 },
    { bookId: "psalms", chapter: 112 }
  ],
  "10-20": [
    { bookId: "2kings", chapter: 10 },
    { bookId: "colossians", chapter: 1 },
    { bookId: "daniel", chapter: 4 },
    { bookId: "psalms", chapter: 114 }
  ],
  "10-21": [
    { bookId: "2kings", chapter: 11 },
    { bookId: "colossians", chapter: 2 },
    { bookId: "daniel", chapter: 5 },
    { bookId: "psalms", chapter: 115 }
  ],
  "10-22": [
    { bookId: "2kings", chapter: 12 },
    { bookId: "colossians", chapter: 3 },
    { bookId: "daniel", chapter: 6 },
    { bookId: "psalms", chapter: 116 }
  ],
  "10-23": [
    { bookId: "2kings", chapter: 13 },
    { bookId: "colossians", chapter: 4 },
    { bookId: "daniel", chapter: 7 },
    { bookId: "psalms", chapter: 117 }
  ],
  "10-24": [
    { bookId: "2kings", chapter: 14 },
    { bookId: "1thessalonians", chapter: 1 },
    { bookId: "daniel", chapter: 8 },
    { bookId: "psalms", chapter: 118 }
  ],
  "10-25": [
    { bookId: "2kings", chapter: 15 },
    { bookId: "1thessalonians", chapter: 2 },
    { bookId: "daniel", chapter: 9 },
    { bookId: "psalms", chapter: 119 }
  ],
  // Week 44
  "10-26": [
    { bookId: "2kings", chapter: 17 },
    { bookId: "1thessalonians", chapter: 3 },
    { bookId: "daniel", chapter: 10 },
    { bookId: "psalms", chapter: 120 }
  ],
  "10-27": [
    { bookId: "2kings", chapter: 18 },
    { bookId: "1thessalonians", chapter: 4 },
    { bookId: "daniel", chapter: 12 },
    { bookId: "psalms", chapter: 121 }
  ],
  "10-28": [
    { bookId: "2kings", chapter: 19 },
    { bookId: "1thessalonians", chapter: 5 },
    { bookId: "hosea", chapter: 1 },
    { bookId: "psalms", chapter: 122 }
  ],
  "10-29": [
    { bookId: "2kings", chapter: 20 },
    { bookId: "2thessalonians", chapter: 2 },
    { bookId: "hosea", chapter: 2 },
    { bookId: "psalms", chapter: 124 }
  ],
  "10-30": [
    { bookId: "2kings", chapter: 21 },
    { bookId: "2thessalonians", chapter: 3 },
    { bookId: "hosea", chapter: 3 },
    { bookId: "psalms", chapter: 125 }
  ],
  "10-31": [
    { bookId: "2kings", chapter: 22 },
    { bookId: "1timothy", chapter: 1 },
    { bookId: "hosea", chapter: 4 },
    { bookId: "psalms", chapter: 126 }
  ],
  "11-01": [
    { bookId: "2kings", chapter: 23 },
    { bookId: "1timothy", chapter: 2 },
    { bookId: "hosea", chapter: 5 },
    { bookId: "psalms", chapter: 127 }
  ],
  // Week 45
  "11-02": [
    { bookId: "2kings", chapter: 24 },
    { bookId: "1timothy", chapter: 3 },
    { bookId: "hosea", chapter: 6 },
    { bookId: "psalms", chapter: 128 }
  ],
  "11-03": [
    { bookId: "2kings", chapter: 25 },
    { bookId: "1timothy", chapter: 4 },
    { bookId: "hosea", chapter: 7 },
    { bookId: "psalms", chapter: 129 }
  ],
  "11-04": [
    { bookId: "1chronicles", chapter: 1 },
    { bookId: "1timothy", chapter: 5 },
    { bookId: "hosea", chapter: 8 },
    { bookId: "psalms", chapter: 130 }
  ],
  "11-05": [
    { bookId: "1chronicles", chapter: 3 },
    { bookId: "1timothy", chapter: 6 },
    { bookId: "hosea", chapter: 9 },
    { bookId: "psalms", chapter: 131 }
  ],
  "11-06": [
    { bookId: "1chronicles", chapter: 4 },
    { bookId: "2timothy", chapter: 2 },
    { bookId: "hosea", chapter: 10 },
    { bookId: "psalms", chapter: 133 }
  ],
  "11-07": [
    { bookId: "1chronicles", chapter: 5 },
    { bookId: "2timothy", chapter: 3 },
    { bookId: "hosea", chapter: 11 },
    { bookId: "psalms", chapter: 134 }
  ],
  "11-08": [
    { bookId: "1chronicles", chapter: 6 },
    { bookId: "2timothy", chapter: 4 },
    { bookId: "hosea", chapter: 12 },
    { bookId: "psalms", chapter: 135 }
  ],
  // Week 46
  "11-09": [
    { bookId: "1chronicles", chapter: 7 },
    { bookId: "titus", chapter: 1 },
    { bookId: "hosea", chapter: 13 },
    { bookId: "psalms", chapter: 136 }
  ],
  "11-10": [
    { bookId: "1chronicles", chapter: 8 },
    { bookId: "titus", chapter: 2 },
    { bookId: "hosea", chapter: 14 },
    { bookId: "psalms", chapter: 137 }
  ],
  "11-11": [
    { bookId: "1chronicles", chapter: 9 },
    { bookId: "titus", chapter: 3 },
    { bookId: "joel", chapter: 1 },
    { bookId: "psalms", chapter: 138 }
  ],
  "11-12": [
    { bookId: "1chronicles", chapter: 10 },
    { bookId: "philemon", chapter: 1 },
    { bookId: "joel", chapter: 2 },
    { bookId: "psalms", chapter: 139 }
  ],
  "11-13": [
    { bookId: "1chronicles", chapter: 11 },
    { bookId: "hebrews", chapter: 1 },
    { bookId: "joel", chapter: 3 },
    { bookId: "psalms", chapter: 140 }
  ],
  "11-14": [
    { bookId: "1chronicles", chapter: 13 },
    { bookId: "hebrews", chapter: 3 },
    { bookId: "amos", chapter: 1 },
    { bookId: "psalms", chapter: 142 }
  ],
  "11-15": [
    { bookId: "1chronicles", chapter: 14 },
    { bookId: "hebrews", chapter: 4 },
    { bookId: "amos", chapter: 2 },
    { bookId: "psalms", chapter: 143 }
  ],
  // Week 47
  "11-16": [
    { bookId: "1chronicles", chapter: 15 },
    { bookId: "hebrews", chapter: 5 },
    { bookId: "amos", chapter: 3 },
    { bookId: "psalms", chapter: 144 }
  ],
  "11-17": [
    { bookId: "1chronicles", chapter: 16 },
    { bookId: "hebrews", chapter: 6 },
    { bookId: "amos", chapter: 4 },
    { bookId: "psalms", chapter: 145 }
  ],
  "11-18": [
    { bookId: "1chronicles", chapter: 17 },
    { bookId: "hebrews", chapter: 7 },
    { bookId: "amos", chapter: 5 },
    { bookId: "psalms", chapter: 146 }
  ],
  "11-19": [
    { bookId: "1chronicles", chapter: 18 },
    { bookId: "hebrews", chapter: 8 },
    { bookId: "amos", chapter: 6 },
    { bookId: "psalms", chapter: 147 }
  ],
  "11-20": [
    { bookId: "1chronicles", chapter: 19 },
    { bookId: "hebrews", chapter: 9 },
    { bookId: "amos", chapter: 7 },
    { bookId: "psalms", chapter: 148 }
  ],
  "11-21": [
    { bookId: "1chronicles", chapter: 20 },
    { bookId: "hebrews", chapter: 10 },
    { bookId: "amos", chapter: 8 },
    { bookId: "psalms", chapter: 149 }
  ],
  "11-22": [
    { bookId: "1chronicles", chapter: 21 },
    { bookId: "hebrews", chapter: 12 },
    { bookId: "amos", chapter: 9 },
    { bookId: "luke", chapter: 1 }
  ],
  // Week 48
  "11-23": [
    { bookId: "1chronicles", chapter: 22 },
    { bookId: "hebrews", chapter: 13 },
    { bookId: "obadiah", chapter: 1 },
    { bookId: "luke", chapter: 2 }
  ],
  "11-24": [
    { bookId: "1chronicles", chapter: 24 },
    { bookId: "james", chapter: 1 },
    { bookId: "jonah", chapter: 1 },
    { bookId: "luke", chapter: 3 }
  ],
  "11-25": [
    { bookId: "1chronicles", chapter: 25 },
    { bookId: "james", chapter: 2 },
    { bookId: "jonah", chapter: 2 },
    { bookId: "luke", chapter: 4 }
  ],
  "11-26": [
    { bookId: "1chronicles", chapter: 26 },
    { bookId: "james", chapter: 3 },
    { bookId: "jonah", chapter: 3 },
    { bookId: "luke", chapter: 5 }
  ],
  "11-27": [
    { bookId: "1chronicles", chapter: 27 },
    { bookId: "james", chapter: 4 },
    { bookId: "jonah", chapter: 4 },
    { bookId: "luke", chapter: 6 }
  ],
  "11-28": [
    { bookId: "1chronicles", chapter: 28 },
    { bookId: "james", chapter: 5 },
    { bookId: "micah", chapter: 1 },
    { bookId: "luke", chapter: 7 }
  ],
  "11-29": [
    { bookId: "1chronicles", chapter: 29 },
    { bookId: "1peter", chapter: 1 },
    { bookId: "micah", chapter: 3 },
    { bookId: "luke", chapter: 8 }
  ],
  // Week 49
  "11-30": [
    { bookId: "2chronicles", chapter: 1 },
    { bookId: "1peter", chapter: 3 },
    { bookId: "micah", chapter: 4 },
    { bookId: "luke", chapter: 10 }
  ],
  "12-01": [
    { bookId: "2chronicles", chapter: 2 },
    { bookId: "1peter", chapter: 4 },
    { bookId: "micah", chapter: 5 },
    { bookId: "luke", chapter: 11 }
  ],
  "12-02": [
    { bookId: "2chronicles", chapter: 3 },
    { bookId: "1peter", chapter: 5 },
    { bookId: "micah", chapter: 6 },
    { bookId: "luke", chapter: 12 }
  ],
  "12-03": [
    { bookId: "2chronicles", chapter: 4 },
    { bookId: "2peter", chapter: 1 },
    { bookId: "micah", chapter: 7 },
    { bookId: "luke", chapter: 13 }
  ],
  "12-04": [
    { bookId: "2chronicles", chapter: 6 },
    { bookId: "2peter", chapter: 2 },
    { bookId: "nahum", chapter: 1 },
    { bookId: "luke", chapter: 14 }
  ],
  "12-05": [
    { bookId: "2chronicles", chapter: 7 },
    { bookId: "2peter", chapter: 3 },
    { bookId: "nahum", chapter: 2 },
    { bookId: "luke", chapter: 15 }
  ],
  "12-06": [
    { bookId: "2chronicles", chapter: 8 },
    { bookId: "1john", chapter: 1 },
    { bookId: "nahum", chapter: 3 },
    { bookId: "luke", chapter: 16 }
  ],
  // Week 50
  "12-07": [
    { bookId: "2chronicles", chapter: 9 },
    { bookId: "1john", chapter: 2 },
    { bookId: "habakkuk", chapter: 1 },
    { bookId: "luke", chapter: 17 }
  ],
  "12-08": [
    { bookId: "2chronicles", chapter: 10 },
    { bookId: "1john", chapter: 4 },
    { bookId: "habakkuk", chapter: 2 },
    { bookId: "luke", chapter: 19 }
  ],
  "12-09": [
    { bookId: "2chronicles", chapter: 11 },
    { bookId: "1john", chapter: 5 },
    { bookId: "habakkuk", chapter: 3 },
    { bookId: "luke", chapter: 20 }
  ],
  "12-10": [
    { bookId: "2chronicles", chapter: 12 },
    { bookId: "2john", chapter: 1 },
    { bookId: "zephaniah", chapter: 1 },
    { bookId: "luke", chapter: 21 }
  ],
  "12-11": [
    { bookId: "2chronicles", chapter: 13 },
    { bookId: "3john", chapter: 1 },
    { bookId: "zephaniah", chapter: 2 },
    { bookId: "luke", chapter: 22 }
  ],
  "12-12": [
    { bookId: "2chronicles", chapter: 14 },
    { bookId: "jude", chapter: 1 },
    { bookId: "zephaniah", chapter: 3 },
    { bookId: "luke", chapter: 23 }
  ],
  "12-13": [
    { bookId: "2chronicles", chapter: 16 },
    { bookId: "revelation", chapter: 1 },
    { bookId: "haggai", chapter: 1 },
    { bookId: "luke", chapter: 24 }
  ],
  // Week 51
  "12-14": [
    { bookId: "2chronicles", chapter: 17 },
    { bookId: "revelation", chapter: 2 },
    { bookId: "haggai", chapter: 2 },
    { bookId: "john", chapter: 1 }
  ],
  "12-15": [
    { bookId: "2chronicles", chapter: 18 },
    { bookId: "revelation", chapter: 3 },
    { bookId: "zechariah", chapter: 1 },
    { bookId: "john", chapter: 2 }
  ],
  "12-16": [
    { bookId: "2chronicles", chapter: 19 },
    { bookId: "revelation", chapter: 5 },
    { bookId: "zechariah", chapter: 2 },
    { bookId: "john", chapter: 4 }
  ],
  "12-17": [
    { bookId: "2chronicles", chapter: 20 },
    { bookId: "revelation", chapter: 6 },
    { bookId: "zechariah", chapter: 3 },
    { bookId: "john", chapter: 5 }
  ],
  "12-18": [
    { bookId: "2chronicles", chapter: 21 },
    { bookId: "revelation", chapter: 7 },
    { bookId: "zechariah", chapter: 4 },
    { bookId: "john", chapter: 6 }
  ],
  "12-19": [
    { bookId: "2chronicles", chapter: 22 },
    { bookId: "revelation", chapter: 8 },
    { bookId: "zechariah", chapter: 5 },
    { bookId: "john", chapter: 7 }
  ],
  "12-20": [
    { bookId: "2chronicles", chapter: 23 },
    { bookId: "revelation", chapter: 9 },
    { bookId: "zechariah", chapter: 6 },
    { bookId: "john", chapter: 8 }
  ],
  // Week 52
  "12-21": [
    { bookId: "2chronicles", chapter: 24 },
    { bookId: "revelation", chapter: 10 },
    { bookId: "zechariah", chapter: 7 },
    { bookId: "john", chapter: 9 }
  ],
  "12-22": [
    { bookId: "2chronicles", chapter: 25 },
    { bookId: "revelation", chapter: 11 },
    { bookId: "zechariah", chapter: 8 },
    { bookId: "john", chapter: 10 }
  ],
  "12-23": [
    { bookId: "2chronicles", chapter: 27 },
    { bookId: "revelation", chapter: 12 },
    { bookId: "zechariah", chapter: 9 },
    { bookId: "john", chapter: 11 }
  ],
  "12-24": [
    { bookId: "2chronicles", chapter: 28 },
    { bookId: "revelation", chapter: 14 },
    { bookId: "zechariah", chapter: 10 },
    { bookId: "john", chapter: 13 }
  ],
  "12-25": [
    { bookId: "2chronicles", chapter: 29 },
    { bookId: "revelation", chapter: 15 },
    { bookId: "zechariah", chapter: 11 },
    { bookId: "john", chapter: 14 }
  ],
  "12-26": [
    { bookId: "2chronicles", chapter: 30 },
    { bookId: "revelation", chapter: 16 },
    { bookId: "zechariah", chapter: 12 },
    { bookId: "john", chapter: 15 }
  ],
  "12-27": [
    { bookId: "2chronicles", chapter: 31 },
    { bookId: "revelation", chapter: 17 },
    { bookId: "zechariah", chapter: 13 },
    { bookId: "john", chapter: 16 }
  ],
  // Week 53
  "12-28": [
    { bookId: "2chronicles", chapter: 32 },
    { bookId: "revelation", chapter: 18 },
    { bookId: "zechariah", chapter: 14 },
    { bookId: "john", chapter: 17 }
  ],
  "12-29": [
    { bookId: "2chronicles", chapter: 33 },
    { bookId: "revelation", chapter: 19 },
    { bookId: "malachi", chapter: 1 },
    { bookId: "john", chapter: 18 }
  ],
  "12-30": [
    { bookId: "2chronicles", chapter: 34 },
    { bookId: "revelation", chapter: 20 },
    { bookId: "malachi", chapter: 2 },
    { bookId: "john", chapter: 19 }
  ],
  "12-31": [
    { bookId: "2chronicles", chapter: 35 },
    { bookId: "revelation", chapter: 21 },
    { bookId: "malachi", chapter: 3 },
    { bookId: "john", chapter: 20 }
  ]
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
