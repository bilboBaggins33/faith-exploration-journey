
import { TheologyChallenge } from '../../types';

export const chapter5Challenge: TheologyChallenge = {
  id: 'mere-christianity-5',
  bookId: 'mere-christianity',
  chapter: 5,
  title: 'We Have Cause to Be Uneasy',
  questions: [
    {
      id: 'mc5-q1',
      question: 'According to Lewis, why should humans be uneasy about their relationship with God?',
      options: [
        'Because God is arbitrary in His judgments',
        'Because we consistently fail to live up to the Moral Law we know',
        'Because God is distant and uninterested in humans',
        'Because the universe is random and meaningless'
      ],
      correctAnswer: 'Because we consistently fail to live up to the Moral Law we know',
      explanation: 'Lewis argues that we have cause to be uneasy because we recognize the Moral Law but consistently fail to keep it.'
    },
    {
      id: 'mc5-q2',
      question: 'What does Lewis suggest is the state of humanity in relation to God?',
      options: [
        'We are in a state of harmony with God',
        'We are neutral in our relationship with God',
        'We are in a state of rebellion against God',
        'We have no relationship with God at all'
      ],
      correctAnswer: 'We are in a state of rebellion against God',
      explanation: 'Lewis suggests that humanity is in a state of rebellion against God, having turned away from Him and the Moral Law He established.'
    },
    {
      id: 'mc5-q3',
      question: 'What does Lewis say we should do about our failure to keep the Moral Law?',
      options: [
        'Ignore it and live however we want',
        'Create our own standards that we can meet',
        'Realize our need for help from God',
        'Abandon the concept of morality altogether'
      ],
      correctAnswer: 'Realize our need for help from God',
      explanation: 'Lewis argues that our failure to keep the Moral Law should lead us to realize our need for God\'s help and forgiveness.'
    }
  ],
  key_quote: "The conclusion I dread is not 'So there\'s no God after all,' but 'So this is what God's really like. Deceive yourself no longer.'",
  key_quote_location: "Book I, Chapter 5",
  memory_challenge: true,
  difficulty: 'medium',
  points: 20
};
