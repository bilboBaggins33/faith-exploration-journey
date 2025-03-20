
import { ChapterChallenge } from '../types';

export const genesisChallenges: ChapterChallenge[] = [
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
