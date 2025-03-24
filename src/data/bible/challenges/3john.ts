import { ChapterChallenge } from '../types';

export const john3Challenges: ChapterChallenge[] = [
  {
    id: '3john-1',
    bookId: '3john',
    chapter: 1,
    title: 'Support the Truth',
    questions: [
      {
        id: '3jn1-q1',
        question: 'To whom does John address this letter?',
        options: [
          'The elect lady',
          'Gaius, the beloved',
          'The church in Ephesus',
          'Diotrephes'
        ],
        correctAnswer: 'Gaius, the beloved',
        explanation: '3 John 1:1 says, “The elder to the beloved Gaius, whom I love in truth.”'
      },
      {
        id: '3jn1-q2',
        question: 'What does John pray for Gaius above all?',
        options: [
          'Wealth and power',
          'That he may be in good health and prosper',
          'Strength in battle',
          'Fame in the church'
        ],
        correctAnswer: 'That he may be in good health and prosper',
        explanation: '3 John 1:2 states, “Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul.”'
      },
      {
        id: '3jn1-q3',
        question: 'What does John rejoice to hear about Gaius?',
        options: [
          'His wealth',
          'His faithfulness and walking in truth',
          'His leadership',
          'His silence'
        ],
        correctAnswer: 'His faithfulness and walking in truth',
        explanation: '3 John 1:3-4 says, “For I rejoiced greatly when the brothers came and testified of your faithfulness to the truth… I have no greater joy than to hear that my children are walking in the truth.”'
      },
      {
        id: '3jn1-q4',
        question: 'Who does John criticize for loving preeminence and rejecting authority?',
        options: [
          'Gaius',
          'Diotrephes',
          'Demetrius',
          'The brothers'
        ],
        correctAnswer: 'Diotrephes',
        explanation: '3 John 1:9-10 states, “I have written something to the church, but Diotrephes, who likes to put himself first, does not acknowledge our authority…”'
      },
      {
        id: '3jn1-q5',
        question: 'Who does John commend as having a good testimony from all?',
        options: [
          'Diotrephes',
          'Demetrius',
          'Gaius',
          'The elder'
        ],
        correctAnswer: 'Demetrius',
        explanation: '3 John 1:12 says, “Demetrius has received a good testimony from everyone, and from the truth itself…”'
      }
    ],
    key_verse: '3 John 1:11',
    key_verse_text: 'Beloved, do not imitate evil but imitate good. Whoever does good is from God; whoever does evil has not seen God.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  }
];