import { TheologyChallenge } from '../../types';

export const chapter15Challenge: TheologyChallenge = {
  id: 'mere-christianity-15',
  bookId: 'mere-christianity',
  chapter: 15,
  title: 'The Cardinal Virtues',
  questions: [
    {
      id: 'mc15-q1',
      question: 'What are the four cardinal virtues according to Lewis?',
      options: [
        'Faith, Hope, Love, and Justice',
        'Wisdom, Courage, Justice, and Temperance',
        'Prudence, Justice, Fortitude, and Temperance',
        'Honesty, Charity, Kindness, and Patience'
      ],
      correctAnswer: 'Prudence, Justice, Fortitude, and Temperance',
      explanation: 'Lewis explains that these four virtues, inherited from classical philosophy, are foundational to a moral life.'
    },
    {
      id: 'mc15-q2',
      question: 'How does Lewis define prudence?',
      options: [
        'Cleverness in achieving personal goals',
        'The ability to think carefully and make wise decisions',
        'Avoiding risks at all costs',
        'Following rules without question'
      ],
      correctAnswer: 'The ability to think carefully and make wise decisions',
      explanation: 'Lewis describes prudence as practical wisdom, essential for living a virtuous life.'
    },
    {
      id: 'mc15-q3',
      question: 'Why does Lewis consider justice as more than just fairness?',
      options: [
        'Because justice includes honesty, truthfulness, and keeping promises',
        'Because fairness is subjective',
        'Because justice is only a legal concept',
        'Because justice applies only to individuals'
      ],
      correctAnswer: 'Because justice includes honesty, truthfulness, and keeping promises',
      explanation: 'Lewis emphasizes that justice is about more than fairness—it encompasses integrity and moral responsibility to others.'
    },
    {
      id: 'mc15-q4',
      question: 'What does fortitude mean in the context of virtue?',
      options: [
        'Avoiding fear by escaping difficult situations',
        'Strength in facing danger and perseverance in hardship',
        'Suppressing emotions to appear strong',
        'Being physically powerful'
      ],
      correctAnswer: 'Strength in facing danger and perseverance in hardship',
      explanation: 'Lewis highlights that fortitude is both the courage to face danger and the endurance to persist in difficulty.'
    },
    {
      id: 'mc15-q5',
      question: 'How does Lewis describe temperance?',
      options: [
        'Completely abstaining from pleasure',
        'Moderation in all things, not just abstinence',
        'Indulging in pleasure as long as it does not harm others',
        'Focusing only on food and drink moderation'
      ],
      correctAnswer: 'Moderation in all things, not just abstinence',
      explanation: 'Lewis argues that temperance is about self-control and balance, not total abstinence from pleasure.'
    }
  ],
  key_quote: "The virtues are ‘cardinal’ because they are hinges on which the whole moral life turns.",
  key_quote_location: "Book III, Chapter 2",
  memory_challenge: true,
  difficulty: 'medium',
  points: 20
};
