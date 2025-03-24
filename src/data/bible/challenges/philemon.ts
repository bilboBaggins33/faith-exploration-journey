import { ChapterChallenge } from '../types';

export const philemonChallenges: ChapterChallenge[] = [
  {
    id: 'philemon-1',
    bookId: 'philemon',
    chapter: 1,
    title: 'A Plea for Onesimus',
    questions: [
      {
        id: 'phlm1-q1',
        question: 'What does Paul thank God for regarding Philemon?',
        options: [
          'His wealth',
          'His love and faith toward the Lord and saints',
          'His strength',
          'His wisdom'
        ],
        correctAnswer: 'His love and faith toward the Lord and saints',
        explanation: 'Philemon 1:4-5 says, “I thank my God always when I remember you in my prayers, because I hear of your love and of the faith that you have toward the Lord Jesus and for all the saints…”'
      },
      {
        id: 'phlm1-q2',
        question: 'Who is with Paul as he writes this letter?',
        options: [
          'Timothy',
          'Titus',
          'Barnabas',
          'Silas'
        ],
        correctAnswer: 'Timothy',
        explanation: 'Philemon 1:1 states, “Paul, a prisoner for Christ Jesus, and Timothy our brother, to Philemon our beloved fellow worker…”'
      },
      {
        id: 'phlm1-q3',
        question: 'What does Paul appeal to Philemon to do for Onesimus?',
        options: [
          'Punish him',
          'Receive him as a beloved brother',
          'Send him away',
          'Sell him'
        ],
        correctAnswer: 'Receive him as a beloved brother',
        explanation: 'Philemon 1:16 says, “…no longer as a bondservant but more than a bondservant, as a beloved brother—especially to me, but how much more to you…”'
      },
      {
        id: 'phlm1-q4',
        question: 'What does Paul offer to do regarding Onesimus’s debts?',
        options: [
          'Ignore them',
          'Charge them to Paul’s account',
          'Demand Philemon forgive them',
          'Pay them later'
        ],
        correctAnswer: 'Charge them to Paul’s account',
        explanation: 'Philemon 1:18-19 states, “If he has wronged you at all, or owes you anything, charge that to my account. I, Paul, write this with my own hand: I will repay it…”'
      },
      {
        id: 'phlm1-q5',
        question: 'What does Paul hope to do after his imprisonment?',
        options: [
          'Retire',
          'Visit Philemon',
          'Write more letters',
          'Stay in prison'
        ],
        correctAnswer: 'Visit Philemon',
        explanation: 'Philemon 1:22 says, “At the same time, prepare a guest room for me, for I am hoping that through your prayers I will be graciously given to you.”'
      }
    ],
    key_verse: 'Philemon 1:17',
    key_verse_text: 'So if you consider me your partner, receive him as you would receive me.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  }
];