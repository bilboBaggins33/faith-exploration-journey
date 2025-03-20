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
    },
    {
      bookId: 'matthew',
      chapter: 4,
      verses: 25,
      key_themes: ['Temptation of Jesus', 'Beginning of ministry', 'Calling disciples']
    },
    {
      bookId: 'matthew',
      chapter: 5,
      verses: 48,
      key_themes: ['Sermon on the Mount', 'Beatitudes', 'Salt and Light']
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
  },
  {
    id: 'matthew-1',
    bookId: 'matthew',
    chapter: 1,
    title: 'The Genealogy of Jesus Christ',
    questions: [
      {
        id: 'matt1-q1',
        question: 'Whose genealogy does Matthew begin with?',
        options: ['Moses', 'David', 'Abraham', 'Adam'],
        correctAnswer: 'Abraham',
        explanation: 'Matthew 1:1 begins "The book of the genealogy of Jesus Christ, the son of David, the son of Abraham."'
      },
      {
        id: 'matt1-q2',
        question: 'How many generations does Matthew list from Abraham to Jesus?',
        options: ['14', '28', '42', '70'],
        correctAnswer: '42',
        explanation: 'Matthew 1:17 states there were 14 generations from Abraham to David, 14 from David to the Babylonian exile, and 14 from the exile to Christ, totaling 42 generations.'
      },
      {
        id: 'matt1-q3',
        question: 'What unusual feature is found in Jesus\'s genealogy that was rare for Jewish genealogies?',
        options: [
          'It includes Gentiles', 
          'It includes women', 
          'It skips generations', 
          'It includes Roman officials'
        ],
        correctAnswer: 'It includes women',
        explanation: 'Matthew\'s genealogy unusually includes several women: Tamar, Rahab, Ruth, "the wife of Uriah" (Bathsheba), and Mary.'
      },
      {
        id: 'matt1-q4',
        question: 'What does the name "Jesus" mean according to the angel\'s message to Joseph?',
        options: [
          'King of kings', 
          'God with us', 
          'He will save his people from their sins', 
          'Light of the world'
        ],
        correctAnswer: 'He will save his people from their sins',
        explanation: 'In Matthew 1:21, the angel tells Joseph: "She will bear a son, and you shall call his name Jesus, for he will save his people from their sins."'
      },
      {
        id: 'matt1-q5',
        question: 'What prophecy does Matthew cite as being fulfilled by Jesus\'s virgin birth?',
        options: [
          'A prophecy from Micah', 
          'A prophecy from Isaiah', 
          'A prophecy from Jeremiah', 
          'A prophecy from Daniel'
        ],
        correctAnswer: 'A prophecy from Isaiah',
        explanation: 'Matthew 1:22-23 cites Isaiah 7:14: "Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel."'
      }
    ],
    key_verse: 'Matthew 1:21',
    key_verse_text: 'She will bear a son, and you shall call his name Jesus, for he will save his people from their sins.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-2',
    bookId: 'matthew',
    chapter: 2,
    title: 'The Visit of the Wise Men and Flight to Egypt',
    questions: [
      {
        id: 'matt2-q1',
        question: 'Who was king when Jesus was born?',
        options: ['Caesar Augustus', 'Herod', 'Pilate', 'Tiberius'],
        correctAnswer: 'Herod',
        explanation: 'Matthew 2:1 states that Jesus was born in Bethlehem of Judea in the days of Herod the king.'
      },
      {
        id: 'matt2-q2',
        question: 'What did the wise men follow to find Jesus?',
        options: ['A dove', 'A map', 'A star', 'An angel'],
        correctAnswer: 'A star',
        explanation: 'Matthew 2:2 mentions that the wise men saw his star in the east and followed it to find Jesus.'
      },
      {
        id: 'matt2-q3',
        question: 'What gifts did the wise men bring to Jesus?',
        options: [
          'Gold, silver, and bronze', 
          'Gold, frankincense, and myrrh', 
          'Bread, wine, and oil', 
          'Clothing, food, and money'
        ],
        correctAnswer: 'Gold, frankincense, and myrrh',
        explanation: 'Matthew 2:11 records that the wise men offered Jesus gifts of gold, frankincense, and myrrh.'
      },
      {
        id: 'matt2-q4',
        question: 'How did God warn the wise men not to return to Herod?',
        options: [
          'Through a star', 
          'Through an angel', 
          'Through a dream', 
          'Through Joseph'
        ],
        correctAnswer: 'Through a dream',
        explanation: 'Matthew 2:12 states they were warned in a dream not to return to Herod.'
      },
      {
        id: 'matt2-q5',
        question: 'Where did Joseph take Mary and Jesus to escape from Herod?',
        options: [
          'Nazareth', 
          'Egypt', 
          'Galilee', 
          'Syria'
        ],
        correctAnswer: 'Egypt',
        explanation: 'Matthew 2:13-14 describes how Joseph took Mary and Jesus to Egypt to escape Herod\'s wrath.'
      }
    ],
    key_verse: 'Matthew 2:11',
    key_verse_text: 'And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.',
    memory_challenge: true,
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'matthew-3',
    bookId: 'matthew',
    chapter: 3,
    title: 'John the Baptist and the Baptism of Jesus',
    questions: [
      {
        id: 'matt3-q1',
        question: 'What was John the Baptist\'s main message?',
        options: [
          'Peace and goodwill', 
          'Love your neighbor', 
          'Repent, for the kingdom of heaven is at hand', 
          'Follow the law of Moses'
        ],
        correctAnswer: 'Repent, for the kingdom of heaven is at hand',
        explanation: 'Matthew 3:2 records John\'s message as "Repent, for the kingdom of heaven is at hand."'
      },
      {
        id: 'matt3-q2',
        question: 'What did John the Baptist wear?',
        options: [
          'Fine linen robes', 
          'A camel\'s hair garment with a leather belt', 
          'A woolen tunic', 
          'Priestly garments'
        ],
        correctAnswer: 'A camel\'s hair garment with a leather belt',
        explanation: 'Matthew 3:4 describes John as wearing a garment of camel\'s hair and a leather belt around his waist.'
      },
      {
        id: 'matt3-q3',
        question: 'What was John\'s diet in the wilderness?',
        options: [
          'Bread and fish', 
          'Manna from heaven', 
          'Locusts and wild honey', 
          'Fruits and vegetables'
        ],
        correctAnswer: 'Locusts and wild honey',
        explanation: 'Matthew 3:4 states that John\'s food was locusts and wild honey.'
      },
      {
        id: 'matt3-q4',
        question: 'What did John say about the one coming after him?',
        options: [
          'He would be a military leader', 
          'He would be a great teacher', 
          'He was more powerful and would baptize with the Holy Spirit and fire', 
          'He would restore the kingdom to Israel'
        ],
        correctAnswer: 'He was more powerful and would baptize with the Holy Spirit and fire',
        explanation: 'In Matthew 3:11, John says, "He who is coming after me is mightier than I... He will baptize you with the Holy Spirit and fire."'
      },
      {
        id: 'matt3-q5',
        question: 'What happened when Jesus was baptized?',
        options: [
          'The water turned to wine', 
          'The heavens opened, the Spirit descended like a dove, and a voice spoke from heaven', 
          'John immediately became His disciple', 
          'The crowd fell to their knees in worship'
        ],
        correctAnswer: 'The heavens opened, the Spirit descended like a dove, and a voice spoke from heaven',
        explanation: 'Matthew 3:16-17 describes how the heavens opened, the Spirit of God descended like a dove, and a voice from heaven said, "This is my beloved Son, with whom I am well pleased."'
      }
    ],
    key_verse: 'Matthew 3:16-17',
    key_verse_text: 'And when Jesus was baptized, immediately he went up from the water, and behold, the heavens were opened to him, and he saw the Spirit of God descending like a dove and coming to rest on him; and behold, a voice from heaven said, "This is my beloved Son, with whom I am well pleased."',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-4',
    bookId: 'matthew',
    chapter: 4,
    title: 'The Temptation of Jesus and Beginning of Ministry',
    questions: [
      {
        id: 'matt4-q1',
        question: 'How long did Jesus fast in the wilderness?',
        options: ['7 days', '14 days', '30 days', '40 days and 40 nights'],
        correctAnswer: '40 days and 40 nights',
        explanation: 'Matthew 4:2 states that Jesus fasted for forty days and forty nights.'
      },
      {
        id: 'matt4-q2',
        question: 'What was the first temptation Satan presented to Jesus?',
        options: [
          'To throw Himself down from the temple', 
          'To worship Satan', 
          'To turn stones into bread', 
          'To take control of all kingdoms'
        ],
        correctAnswer: 'To turn stones into bread',
        explanation: 'In Matthew 4:3, Satan first tempted Jesus to command stones to become loaves of bread.'
      },
      {
        id: 'matt4-q3',
        question: 'How did Jesus respond to each temptation?',
        options: [
          'By rebuking Satan directly', 
          'By performing miracles', 
          'By quoting Scripture', 
          'By calling angels to help Him'
        ],
        correctAnswer: 'By quoting Scripture',
        explanation: 'Jesus responded to each temptation by quoting Scripture, saying "It is written..." (Matthew 4:4, 7, 10).'
      },
      {
        id: 'matt4-q4',
        question: 'Where did Jesus begin His ministry after John was arrested?',
        options: [
          'Jerusalem', 
          'Bethlehem', 
          'Capernaum in Galilee', 
          'Nazareth'
        ],
        correctAnswer: 'Capernaum in Galilee',
        explanation: 'Matthew 4:12-13 tells us that when Jesus heard John was arrested, He withdrew into Galilee and lived in Capernaum.'
      },
      {
        id: 'matt4-q5',
        question: 'Who were the first disciples Jesus called?',
        options: [
          'Matthew and Thomas', 
          'Peter and John', 
          'Peter and Andrew, then James and John', 
          'Philip and Bartholomew'
        ],
        correctAnswer: 'Peter and Andrew, then James and John',
        explanation: 'In Matthew 4:18-22, Jesus first called Peter and his brother Andrew, then James and John, the sons of Zebedee.'
      }
    ],
    key_verse: 'Matthew 4:4',
    key_verse_text: 'But he answered, "It is written, \'Man shall not live by bread alone, but by every word that comes from the mouth of God.\'"',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-5',
    bookId: 'matthew',
    chapter: 5,
    title: 'The Sermon on the Mount: Beatitudes',
    questions: [
      {
        id: 'matt5-q1',
        question: 'What are the first words of the Sermon on the Mount?',
        options: [
          '"Our Father in heaven..."', 
          '"Blessed are the poor in spirit..."', 
          '"You are the salt of the earth..."', 
          '"Let your light shine before others..."'
        ],
        correctAnswer: '"Blessed are the poor in spirit..."',
        explanation: 'Matthew 5:3 begins the Sermon on the Mount with "Blessed are the poor in spirit, for theirs is the kingdom of heaven."'
      },
      {
        id: 'matt5-q2',
        question: 'What did Jesus say about those who mourn?',
        options: [
          'They will be exalted', 
          'They will be comforted', 
          'They will see God', 
          'They will inherit the earth'
        ],
        correctAnswer: 'They will be comforted',
        explanation: 'In Matthew 5:4, Jesus says, "Blessed are those who mourn, for they shall be comforted."'
      },
      {
        id: 'matt5-q3',
        question: 'What metaphors does Jesus use to describe His followers?',
        options: [
          'Sheep and shepherds', 
          'Wheat and tares', 
          'Salt and light', 
          'Branches and vines'
        ],
        correctAnswer: 'Salt and light',
        explanation: 'In Matthew 5:13-14, Jesus calls His followers "the salt of the earth" and "the light of the world."'
      },
      {
        id: 'matt5-q4',
        question: 'What did Jesus say He came to do regarding the Law?',
        options: [
          'To abolish it completely', 
          'To simplify it', 
          'To not abolish it but to fulfill it', 
          'To add to it'
        ],
        correctAnswer: 'To not abolish it but to fulfill it',
        explanation: 'Matthew 5:17 records Jesus saying, "Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them."'
      },
      {
        id: 'matt5-q5',
        question: 'What radical teaching did Jesus give about enemies?',
        options: [
          'Avoid them at all costs', 
          'Love them and pray for those who persecute you', 
          'Give them what they deserve', 
          'Call fire down from heaven upon them'
        ],
        correctAnswer: 'Love them and pray for those who persecute you',
        explanation: 'In Matthew 5:44, Jesus instructs, "Love your enemies and pray for those who persecute you."'
      }
    ],
    key_verse: 'Matthew 5:16',
    key_verse_text: 'In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.',
    memory_challenge: true,
    difficulty: 'hard',
    points: 20
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
