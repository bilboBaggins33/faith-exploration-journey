// Define a type for location status to ensure consistent usage
export type LocationStatus = 'locked' | 'unlocked' | 'completed';

// Define the types for challenges
export interface Challenge {
  id: string;
  title: string;
  type: 'quiz' | 'memory-verse' | string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
}

// Define the types for location content
export interface LocationContent {
  title: string;
  description: string;
  challenges: Challenge[];
  keyVerses: string[];
  image: string;
}

// Define the types for locations
export interface MapLocationData {
  id: string;
  title: string;
  description: string;
  position: { x: string; y: string };
  status: LocationStatus;
  content: LocationContent;
}

export const mapLocations: MapLocationData[] = [
  {
    id: 'creation',
    title: 'Creation and Fall',
    description: 'Explore the beginning of everything and the entrance of sin.',
    position: { x: '20%', y: '30%' },
    status: 'unlocked',
    content: {
      title: 'Creation and Fall',
      description: 'In the beginning, God created the heavens and the earth. This area covers Genesis 1-3, including the creation of the world, Adam and Eve, and the entrance of sin into the world.',
      challenges: [
        {
          id: 'creation-quiz',
          title: 'Creation Quiz',
          type: 'quiz',
          difficulty: 'easy',
          description: 'Test your knowledge of the days of creation and God\'s purpose in creating the world.'
        },
        {
          id: 'adam-eve',
          title: 'Adam and Eve',
          type: 'memory-verse',
          difficulty: 'medium',
          description: 'Memorize key verses about the creation of humanity and our purpose.'
        }
      ],
      keyVerses: ['Genesis 1:1', 'Genesis 1:27', 'Genesis 2:15', 'Genesis 3:15'],
      image: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'flood',
    title: 'Noah and the Flood',
    description: 'Discover the story of Noah\'s ark and God\'s covenant.',
    position: { x: '30%', y: '45%' },
    status: 'unlocked',
    content: {
      title: 'Noah and the Flood',
      description: 'This section covers Genesis 6-9, the story of how God saved Noah and his family while judging the wickedness of humanity through the flood.',
      challenges: [
        {
          id: 'noah-quiz',
          title: 'Noah\'s Ark Quiz',
          type: 'quiz',
          difficulty: 'medium',
          description: 'Test your knowledge of Noah\'s story and the details of the flood.'
        }
      ],
      keyVerses: ['Genesis 6:8', 'Genesis 7:1', 'Genesis 9:13'],
      image: 'https://images.unsplash.com/photo-1590343104492-f8a9f376e38c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'abraham',
    title: 'Abraham and the Patriarchs',
    description: 'Follow the journey of faith through Abraham, Isaac, and Jacob.',
    position: { x: '45%', y: '55%' },
    status: 'unlocked',
    content: {
      title: 'Abraham and the Patriarchs',
      description: 'This area covers Genesis 12-50, following the stories of Abraham, Isaac, Jacob, and Joseph, and how God worked through them to establish His covenant people.',
      challenges: [
        {
          id: 'abraham-quiz',
          title: 'Faith of Abraham',
          type: 'quiz',
          difficulty: 'medium',
          description: 'Test your knowledge of Abraham\'s journey of faith and God\'s promises to him.'
        }
      ],
      keyVerses: ['Genesis 12:1-3', 'Genesis 15:6', 'Genesis 22:18'],
      image: 'https://images.unsplash.com/photo-1508108712903-49b7ef9b1df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'exodus',
    title: 'Exodus and the Law',
    description: 'Experience the liberation from Egypt and the giving of the Law.',
    position: { x: '60%', y: '35%' },
    status: 'locked',
    content: {
      title: 'Exodus and the Law',
      description: 'This area covers Exodus through Deuteronomy, including Israel\'s deliverance from Egypt, the giving of the Ten Commandments, and the journey to the Promised Land.',
      challenges: [
        {
          id: 'exodus-quiz',
          title: 'Plagues and Passover',
          type: 'quiz',
          difficulty: 'hard',
          description: 'Test your knowledge of the ten plagues and the first Passover.'
        }
      ],
      keyVerses: ['Exodus 3:14', 'Exodus 20:2-3', 'Deuteronomy 6:4-5'],
      image: 'https://images.unsplash.com/photo-1563865436914-44ee14a35e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'promised-land',
    title: 'Conquest of Promised Land',
    description: 'Follow Joshua\'s leadership as Israel claims their inheritance.',
    position: { x: '75%', y: '45%' },
    status: 'locked',
    content: {
      title: 'Conquest of Promised Land',
      description: 'This section covers the book of Joshua, detailing how the Israelites conquered and settled in the Promised Land under Joshua\'s leadership.',
      challenges: [
        {
          id: 'joshua-quiz',
          title: 'Joshua\'s Leadership',
          type: 'quiz',
          difficulty: 'medium',
          description: 'Test your knowledge of Joshua\'s leadership and the conquest of Canaan.'
        }
      ],
      keyVerses: ['Joshua 1:8-9', 'Joshua 24:15'],
      image: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  }
];

// For the Genesis Days challenge, define the questions and answers
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const genesisCreationQuiz: QuizQuestion[] = [
  {
    id: 'day1',
    question: 'What did God create on the first day?',
    options: [
      'Plants and trees',
      'Light',
      'Sun and moon',
      'Animals'
    ],
    correctAnswer: 'Light',
    explanation: 'On the first day, God said, "Let there be light," and separated the light from the darkness. (Genesis 1:3-5)'
  },
  {
    id: 'day2',
    question: 'What did God create on the second day?',
    options: [
      'Birds and fish',
      'Dry land',
      'The sky (firmament)',
      'Humans'
    ],
    correctAnswer: 'The sky (firmament)',
    explanation: 'On the second day, God created the sky (firmament) and separated the waters above from the waters below. (Genesis 1:6-8)'
  },
  {
    id: 'day3',
    question: 'What did God create on the third day?',
    options: [
      'Dry land and plants',
      'Sun, moon and stars',
      'Birds and fish',
      'Animals'
    ],
    correctAnswer: 'Dry land and plants',
    explanation: 'On the third day, God gathered the waters together to create seas and dry land, and then made vegetation and plants. (Genesis 1:9-13)'
  },
  {
    id: 'day4',
    question: 'What did God create on the fourth day?',
    options: [
      'Birds and fish',
      'Humans',
      'Animals',
      'Sun, moon and stars'
    ],
    correctAnswer: 'Sun, moon and stars',
    explanation: 'On the fourth day, God created the sun, moon, and stars to mark seasons, days, and years. (Genesis 1:14-19)'
  },
  {
    id: 'day5',
    question: 'What did God create on the fifth day?',
    options: [
      'Birds and sea creatures',
      'Land animals',
      'Humans',
      'Plants and trees'
    ],
    correctAnswer: 'Birds and sea creatures',
    explanation: 'On the fifth day, God created sea creatures and birds to fill the waters and sky. (Genesis 1:20-23)'
  },
  {
    id: 'day6',
    question: 'What did God create on the sixth day?',
    options: [
      'Plants and trees',
      'Land animals and humans',
      'Sun and moon',
      'Fish and birds'
    ],
    correctAnswer: 'Land animals and humans',
    explanation: 'On the sixth day, God created land animals and then created humans in His own image. (Genesis 1:24-31)'
  },
  {
    id: 'day7',
    question: 'What did God do on the seventh day?',
    options: [
      'Created more animals',
      'Created the Garden of Eden',
      'Rested and made it holy',
      'Created Adam and Eve'
    ],
    correctAnswer: 'Rested and made it holy',
    explanation: 'On the seventh day, God rested from all His work and blessed the day, making it holy. (Genesis 2:2-3)'
  }
];

// Noah's Ark Quiz
export const noahArkQuiz: QuizQuestion[] = [
  {
    id: 'noah1',
    question: 'Why did God decide to send the flood?',
    options: [
      'Because there were too many people on earth',
      'Because of the wickedness of humanity',
      'Because Noah asked Him to',
      'Because the earth needed water'
    ],
    correctAnswer: 'Because of the wickedness of humanity',
    explanation: 'God saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually. (Genesis 6:5)'
  },
  {
    id: 'noah2',
    question: 'How many people were saved on the ark?',
    options: [
      '4',
      '6',
      '8',
      '12'
    ],
    correctAnswer: '8',
    explanation: 'Eight people were saved: Noah, his wife, his three sons (Shem, Ham, and Japheth), and their wives. (Genesis 7:13, 1 Peter 3:20)'
  },
  {
    id: 'noah3',
    question: 'How long did it rain during the flood?',
    options: [
      '7 days',
      '40 days and 40 nights',
      '100 days',
      '1 year'
    ],
    correctAnswer: '40 days and 40 nights',
    explanation: 'The rain fell upon the earth for forty days and forty nights. (Genesis 7:12)'
  },
  {
    id: 'noah4',
    question: 'What did Noah send out first to see if the waters had receded?',
    options: [
      'A dove',
      'A raven',
      'A sparrow',
      'A pigeon'
    ],
    correctAnswer: 'A raven',
    explanation: 'Noah first sent out a raven, which kept flying back and forth until the waters had dried up. (Genesis 8:7)'
  },
  {
    id: 'noah5',
    question: 'What was the sign of God\'s covenant with Noah after the flood?',
    options: [
      'A star',
      'A rainbow',
      'A dove',
      'An olive branch'
    ],
    correctAnswer: 'A rainbow',
    explanation: 'God set His rainbow in the cloud as a sign of the covenant between Him and the earth, promising never again to destroy all life with a flood. (Genesis 9:13-15)'
  }
];

// Abraham Faith Quiz
export const abrahamFaithQuiz: QuizQuestion[] = [
  {
    id: 'abraham1',
    question: 'What was Abraham\'s name before God changed it?',
    options: [
      'Abram',
      'Ibrahim',
      'Avram',
      'Abiram'
    ],
    correctAnswer: 'Abram',
    explanation: 'His name was Abram before God changed it to Abraham, which means "father of many nations." (Genesis 17:5)'
  },
  {
    id: 'abraham2',
    question: 'What did God ask Abraham to do to demonstrate his faith?',
    options: [
      'Build an altar',
      'Leave his homeland',
      'Sacrifice his son Isaac',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'Abraham demonstrated his faith in multiple ways: by leaving his homeland (Genesis 12:1-4), building altars to worship God (Genesis 12:7-8), and being willing to sacrifice Isaac (Genesis 22:1-18).'
  },
  {
    id: 'abraham3',
    question: 'How old was Abraham when Isaac was born?',
    options: [
      '75 years old',
      '86 years old',
      '99 years old',
      '100 years old'
    ],
    correctAnswer: '100 years old',
    explanation: 'Abraham was a hundred years old when his son Isaac was born to him. (Genesis 21:5)'
  },
  {
    id: 'abraham4',
    question: 'Which city did Abraham plead with God to spare for the sake of the righteous?',
    options: [
      'Jericho',
      'Sodom',
      'Gomorrah',
      'Babylon'
    ],
    correctAnswer: 'Sodom',
    explanation: 'Abraham pleaded with God to spare Sodom if even ten righteous people could be found there. (Genesis 18:16-33)'
  },
  {
    id: 'abraham5',
    question: 'What was the name of Abraham\'s nephew who lived in Sodom?',
    options: [
      'Lot',
      'Laban',
      'Ishmael',
      'Esau'
    ],
    correctAnswer: 'Lot',
    explanation: 'Lot was Abraham\'s nephew who chose to live in Sodom before it was destroyed. Abraham helped rescue him when the city was attacked. (Genesis 13:10-12, 14:12-16)'
  }
];
