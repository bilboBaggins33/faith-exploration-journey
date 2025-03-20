
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
    status: 'locked',
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
    status: 'locked',
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
