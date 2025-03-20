
export interface BibleBook {
  id: string;
  name: string;
  chapters: number;
  testament: 'old' | 'new';
}

export interface BibleChapter {
  bookId: string;
  chapter: number;
  verses: number;
  key_themes: string[];
}

export const bibleBooks: BibleBook[] = [
  // Old Testament
  { id: 'genesis', name: 'Genesis', chapters: 50, testament: 'old' },
  { id: 'exodus', name: 'Exodus', chapters: 40, testament: 'old' },
  { id: 'leviticus', name: 'Leviticus', chapters: 27, testament: 'old' },
  { id: 'numbers', name: 'Numbers', chapters: 36, testament: 'old' },
  { id: 'deuteronomy', name: 'Deuteronomy', chapters: 34, testament: 'old' },
  { id: 'joshua', name: 'Joshua', chapters: 24, testament: 'old' },
  { id: 'judges', name: 'Judges', chapters: 21, testament: 'old' },
  { id: 'ruth', name: 'Ruth', chapters: 4, testament: 'old' },
  { id: '1samuel', name: '1 Samuel', chapters: 31, testament: 'old' },
  { id: '2samuel', name: '2 Samuel', chapters: 24, testament: 'old' },
  { id: '1kings', name: '1 Kings', chapters: 22, testament: 'old' },
  { id: '2kings', name: '2 Kings', chapters: 25, testament: 'old' },
  { id: '1chronicles', name: '1 Chronicles', chapters: 29, testament: 'old' },
  { id: '2chronicles', name: '2 Chronicles', chapters: 36, testament: 'old' },
  { id: 'ezra', name: 'Ezra', chapters: 10, testament: 'old' },
  { id: 'nehemiah', name: 'Nehemiah', chapters: 13, testament: 'old' },
  { id: 'esther', name: 'Esther', chapters: 10, testament: 'old' },
  { id: 'job', name: 'Job', chapters: 42, testament: 'old' },
  { id: 'psalms', name: 'Psalms', chapters: 150, testament: 'old' },
  { id: 'proverbs', name: 'Proverbs', chapters: 31, testament: 'old' },
  { id: 'ecclesiastes', name: 'Ecclesiastes', chapters: 12, testament: 'old' },
  { id: 'songofsolomon', name: 'Song of Solomon', chapters: 8, testament: 'old' },
  { id: 'isaiah', name: 'Isaiah', chapters: 66, testament: 'old' },
  { id: 'jeremiah', name: 'Jeremiah', chapters: 52, testament: 'old' },
  { id: 'lamentations', name: 'Lamentations', chapters: 5, testament: 'old' },
  { id: 'ezekiel', name: 'Ezekiel', chapters: 48, testament: 'old' },
  { id: 'daniel', name: 'Daniel', chapters: 12, testament: 'old' },
  { id: 'hosea', name: 'Hosea', chapters: 14, testament: 'old' },
  { id: 'joel', name: 'Joel', chapters: 3, testament: 'old' },
  { id: 'amos', name: 'Amos', chapters: 9, testament: 'old' },
  { id: 'obadiah', name: 'Obadiah', chapters: 1, testament: 'old' },
  { id: 'jonah', name: 'Jonah', chapters: 4, testament: 'old' },
  { id: 'micah', name: 'Micah', chapters: 7, testament: 'old' },
  { id: 'nahum', name: 'Nahum', chapters: 3, testament: 'old' },
  { id: 'habakkuk', name: 'Habakkuk', chapters: 3, testament: 'old' },
  { id: 'zephaniah', name: 'Zephaniah', chapters: 3, testament: 'old' },
  { id: 'haggai', name: 'Haggai', chapters: 2, testament: 'old' },
  { id: 'zechariah', name: 'Zechariah', chapters: 14, testament: 'old' },
  { id: 'malachi', name: 'Malachi', chapters: 4, testament: 'old' },
  
  // New Testament
  { id: 'matthew', name: 'Matthew', chapters: 28, testament: 'new' },
  { id: 'mark', name: 'Mark', chapters: 16, testament: 'new' },
  { id: 'luke', name: 'Luke', chapters: 24, testament: 'new' },
  { id: 'john', name: 'John', chapters: 21, testament: 'new' },
  { id: 'acts', name: 'Acts', chapters: 28, testament: 'new' },
  { id: 'romans', name: 'Romans', chapters: 16, testament: 'new' },
  { id: '1corinthians', name: '1 Corinthians', chapters: 16, testament: 'new' },
  { id: '2corinthians', name: '2 Corinthians', chapters: 13, testament: 'new' },
  { id: 'galatians', name: 'Galatians', chapters: 6, testament: 'new' },
  { id: 'ephesians', name: 'Ephesians', chapters: 6, testament: 'new' },
  { id: 'philippians', name: 'Philippians', chapters: 4, testament: 'new' },
  { id: 'colossians', name: 'Colossians', chapters: 4, testament: 'new' },
  { id: '1thessalonians', name: '1 Thessalonians', chapters: 5, testament: 'new' },
  { id: '2thessalonians', name: '2 Thessalonians', chapters: 3, testament: 'new' },
  { id: '1timothy', name: '1 Timothy', chapters: 6, testament: 'new' },
  { id: '2timothy', name: '2 Timothy', chapters: 4, testament: 'new' },
  { id: 'titus', name: 'Titus', chapters: 3, testament: 'new' },
  { id: 'philemon', name: 'Philemon', chapters: 1, testament: 'new' },
  { id: 'hebrews', name: 'Hebrews', chapters: 13, testament: 'new' },
  { id: 'james', name: 'James', chapters: 5, testament: 'new' },
  { id: '1peter', name: '1 Peter', chapters: 5, testament: 'new' },
  { id: '2peter', name: '2 Peter', chapters: 3, testament: 'new' },
  { id: '1john', name: '1 John', chapters: 5, testament: 'new' },
  { id: '2john', name: '2 John', chapters: 1, testament: 'new' },
  { id: '3john', name: '3 John', chapters: 1, testament: 'new' },
  { id: 'jude', name: 'Jude', chapters: 1, testament: 'new' },
  { id: 'revelation', name: 'Revelation', chapters: 22, testament: 'new' }
];

// Example chapter data (first chapters of Genesis)
export const bibleChapters: Record<string, BibleChapter[]> = {
  'genesis': [
    {
      bookId: 'genesis',
      chapter: 1,
      verses: 31,
      key_themes: ['Creation', 'God\'s power', 'Order from chaos']
    },
    {
      bookId: 'genesis',
      chapter: 2,
      verses: 25,
      key_themes: ['Creation of mankind', 'Garden of Eden', 'Marriage']
    },
    {
      bookId: 'genesis',
      chapter: 3,
      verses: 24,
      key_themes: ['The Fall', 'Sin enters the world', 'God\'s judgment and mercy']
    },
    {
      bookId: 'genesis',
      chapter: 4,
      verses: 26,
      key_themes: ['Cain and Abel', 'First murder', 'Consequences of sin']
    },
    {
      bookId: 'genesis',
      chapter: 5,
      verses: 32,
      key_themes: ['Genealogy from Adam to Noah', 'Longevity of patriarchs']
    }
  ],
  'exodus': [
    {
      bookId: 'exodus',
      chapter: 1,
      verses: 22,
      key_themes: ['Israelites in Egypt', 'Slavery', 'Pharaoh\'s oppression']
    },
    {
      bookId: 'exodus',
      chapter: 2,
      verses: 25,
      key_themes: ['Birth of Moses', 'Moses flees to Midian', 'God hears Israel\'s groaning']
    },
    {
      bookId: 'exodus',
      chapter: 3,
      verses: 22,
      key_themes: ['Burning bush', 'God reveals His name', 'Moses\' calling']
    }
  ],
  'matthew': [
    {
      bookId: 'matthew',
      chapter: 1,
      verses: 25,
      key_themes: ['Genealogy of Jesus', 'Birth of Jesus', 'Fulfillment of prophecy']
    },
    {
      bookId: 'matthew',
      chapter: 2,
      verses: 23,
      key_themes: ['Visit of the Magi', 'Flight to Egypt', 'Return to Nazareth']
    },
    {
      bookId: 'matthew',
      chapter: 3,
      verses: 17,
      key_themes: ['John the Baptist', 'Baptism of Jesus', 'Trinity revealed']
    }
  ]
};

// Track user progress with this structure in Supabase
export interface BibleReadingProgress {
  user_id: string;
  completed_chapters: {
    book_id: string;
    chapter: number;
    completed_at: string;
    score?: number;
  }[];
  books_started: string[];
  books_completed: string[];
  total_chapters_read: number;
  testament_progress: {
    old: number;
    new: number;
  };
}

// Generate a challenge for each chapter
export interface ChapterChallenge {
  id: string;
  bookId: string;
  chapter: number;
  title: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
  key_verse: string;
  key_verse_text: string;
  memory_challenge: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

// Sample chapter challenge for Genesis 1
export const sampleChapterChallenges: ChapterChallenge[] = [
  {
    id: 'genesis-1',
    bookId: 'genesis',
    chapter: 1,
    title: 'Creation - The Beginning',
    questions: [
      {
        id: 'gen1-q1',
        question: 'What did God create on the first day?',
        options: ['Sun and moon', 'Light', 'Land and sea', 'Plants'],
        correctAnswer: 'Light',
        explanation: 'God said, "Let there be light," and there was light. (Genesis 1:3)'
      },
      {
        id: 'gen1-q2',
        question: 'In what verse does God create mankind?',
        options: ['Genesis 1:1', 'Genesis 1:26', 'Genesis 1:31', 'Genesis 1:20'],
        correctAnswer: 'Genesis 1:26',
        explanation: 'Then God said, "Let us make mankind in our image, in our likeness..." (Genesis 1:26)'
      },
      {
        id: 'gen1-q3',
        question: 'What phrase is repeated throughout Genesis 1 to emphasize the quality of God\'s creation?',
        options: ['And it was perfect', 'And God blessed it', 'And God saw that it was good', 'And it remained forever'],
        correctAnswer: 'And God saw that it was good',
        explanation: 'Throughout Genesis 1, God evaluates his creation and affirms its goodness.'
      }
    ],
    key_verse: 'Genesis 1:1',
    key_verse_text: 'In the beginning God created the heavens and the earth.',
    memory_challenge: true,
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'genesis-2',
    bookId: 'genesis',
    chapter: 2,
    title: 'Garden of Eden and Creation of Mankind',
    questions: [
      {
        id: 'gen2-q1',
        question: 'What did God do on the seventh day?',
        options: ['Created humans', 'Created animals', 'Rested', 'Created plants'],
        correctAnswer: 'Rested',
        explanation: 'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. (Genesis 2:2)'
      },
      {
        id: 'gen2-q2',
        question: 'What rivers flowed from Eden according to Genesis 2?',
        options: ['Tigris and Euphrates only', 'Jordan and Nile', 'Pishon, Gihon, Tigris, and Euphrates', 'Amazon and Mississippi'],
        correctAnswer: 'Pishon, Gihon, Tigris, and Euphrates',
        explanation: 'Genesis 2:10-14 names four rivers: Pishon, Gihon, Tigris (Hiddekel), and Euphrates.'
      },
      {
        id: 'gen2-q3',
        question: 'What command did God give to Adam about the trees in the garden?',
        options: [
          'Eat from any tree',
          'Don\'t eat from any tree',
          'Eat from any tree except the tree of knowledge of good and evil',
          'Only eat from the tree of life'
        ],
        correctAnswer: 'Eat from any tree except the tree of knowledge of good and evil',
        explanation: 'God commanded Adam not to eat from the tree of the knowledge of good and evil. (Genesis 2:16-17)'
      }
    ],
    key_verse: 'Genesis 2:7',
    key_verse_text: 'Then the LORD God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.',
    memory_challenge: true,
    difficulty: 'easy',
    points: 10
  }
];

// Function to get total Bible chapters
export function getTotalBibleChapters(): number {
  return bibleBooks.reduce((total, book) => total + book.chapters, 0);
}

// Function to calculate Bible reading progress percentage
export function calculateBibleProgress(completed: number): number {
  const total = getTotalBibleChapters();
  return Math.round((completed / total) * 100);
}
