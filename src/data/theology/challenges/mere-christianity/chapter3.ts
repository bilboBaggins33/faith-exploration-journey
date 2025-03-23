
import { TheologyChallenge } from '../../types';

export const chapter3Challenge: TheologyChallenge = {
  id: 'mere-christianity-3',
  bookId: 'mere-christianity',
  chapter: 3,
  title: 'The Reality of the Law',
  questions: [
    {
      id: 'mc3-q1',
      question: 'What does Lewis suggest about the reality of the Moral Law?',
      options: [
        'It is merely a human invention',
        'It is a biological adaptation for survival',
        'It is something real that humans did not invent',
        'It varies completely from person to person'
      ],
      correctAnswer: 'It is something real that humans did not invent',
      explanation: 'Lewis argues that the Moral Law is something objectively real that humans discover rather than invent.'
    },
    {
      id: 'mc3-q2',
      question: 'According to Lewis, what is the relationship between the Moral Law and the material universe?',
      options: [
        'The Moral Law is a product of material processes',
        'The Moral Law is completely separate from the material universe',
        'The Moral Law governs the material universe',
        'The Moral Law is something above and beyond the material universe'
      ],
      correctAnswer: 'The Moral Law is something above and beyond the material universe',
      explanation: 'Lewis suggests that the Moral Law exists independently of the material universe and cannot be explained by material processes alone.'
    },
    {
      id: 'mc3-q3',
      question: 'What analogy does Lewis use to describe how humans perceive the Moral Law?',
      options: [
        'It is like seeing with our eyes',
        'It is like touching with our hands',
        'It is like hearing music with our ears',
        'It is like sensing a direction with a compass'
      ],
      correctAnswer: 'It is like hearing music with our ears',
      explanation: 'Lewis uses the analogy of perceiving music to describe how we perceive the Moral Law - we recognize it through a faculty that allows us to perceive non-material reality.'
    }
  ],
  key_quote: "If the universe is not governed by an absolute goodness, then all our efforts are in the long run hopeless. But if it is, then we are making ourselves enemies to that goodness every day, and are not in the least likely to do any better tomorrow, and so our case is hopeless again.",
  key_quote_location: "Book I, Chapter 3",
  memory_challenge: true,
  difficulty: 'medium',
  points: 20
};
