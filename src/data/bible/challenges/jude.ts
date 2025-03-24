import { ChapterChallenge } from '../types';

export const judeChallenges: ChapterChallenge[] = [
  {
    id: 'jude-1',
    bookId: 'jude',
    chapter: 1,
    title: 'Contend for the Faith',
    questions: [
      {
        id: 'jude1-q1',
        question: 'To whom does Jude address his letter?',
        options: [
          'The twelve apostles',
          'Those called, beloved, and kept for Jesus Christ',
          'The church in Jerusalem',
          'The Gentiles only'
        ],
        correctAnswer: 'Those called, beloved, and kept for Jesus Christ',
        explanation: 'Jude 1:1 says, “Jude, a servant of Jesus Christ… to those who are called, beloved in God the Father and kept for Jesus Christ…”'
      },
      {
        id: 'jude1-q2',
        question: 'What does Jude urge believers to do with the faith?',
        options: [
          'Hide it',
          'Contend for it',
          'Change it',
          'Ignore it'
        ],
        correctAnswer: 'Contend for it',
        explanation: 'Jude 1:3 states, “…I found it necessary to write appealing to you to contend for the faith that was once for all delivered to the saints.”'
      },
      {
        id: 'jude1-q3',
        question: 'What do the ungodly turn God’s grace into?',
        options: [
          'A license for immorality',
          'A source of wealth',
          'A new law',
          'A hidden secret'
        ],
        correctAnswer: 'A license for immorality',
        explanation: 'Jude 1:4 says, “…ungodly people, who pervert the grace of our God into sensuality and deny our only Master and Lord, Jesus Christ.”'
      },
      {
        id: 'jude1-q4',
        question: 'Which Old Testament example does Jude use of God’s judgment?',
        options: [
          'Noah’s flood only',
          'The Israelites saved then destroyed for unbelief',
          'David’s reign',
          'The tower of Babel'
        ],
        correctAnswer: 'The Israelites saved then destroyed for unbelief',
        explanation: 'Jude 1:5 states, “…Jesus, who saved a people out of the land of Egypt, afterward destroyed those who did not believe.”'
      },
      {
        id: 'jude1-q5',
        question: 'How should believers build themselves up while awaiting mercy?',
        options: [
          'In wealth and power',
          'In their most holy faith, praying in the Holy Spirit',
          'In silence and fear',
          'In the law'
        ],
        correctAnswer: 'In their most holy faith, praying in the Holy Spirit',
        explanation: 'Jude 1:20-21 says, “But you, beloved, building yourselves up in your most holy faith and praying in the Holy Spirit, keep yourselves in the love of God…”'
      }
    ],
    key_verse: 'Jude 1:3',
    key_verse_text: 'Beloved, although I was very eager to write to you about our common salvation, I found it necessary to write appealing to you to contend for the faith that was once for all delivered to the saints.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  }
];