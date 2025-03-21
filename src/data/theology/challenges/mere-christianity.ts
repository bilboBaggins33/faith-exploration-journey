
import { TheologyChallenge } from '../types';

export const mereChristianityChallenges: TheologyChallenge[] = [
  {
    id: 'mere-christianity-1',
    bookId: 'mere-christianity',
    chapter: 1,
    title: 'The Law of Human Nature',
    questions: [
      {
        id: 'mc1-q1',
        question: 'What does C.S. Lewis say people are doing when they quarrel?',
        options: [
          'Disagreeing over personal preferences',
          'Appealing to some common standard of behavior that they expect each other to know', 
          'Merely expressing their emotions',
          'Attempting to establish dominance'
        ],
        correctAnswer: 'Appealing to some common standard of behavior that they expect each other to know',
        explanation: 'Lewis argues that quarreling reveals our belief in a standard of right and wrong that exists outside ourselves.'
      },
      {
        id: 'mc1-q2',
        question: 'What term does Lewis use to describe the universal moral code?',
        options: [
          'Natural Selection',
          'The Law of Human Nature',
          'Christian Ethics',
          'Cultural Convention'
        ],
        correctAnswer: 'The Law of Human Nature',
        explanation: 'Lewis calls this universal moral code "The Law of Human Nature" or "Moral Law."'
      },
      {
        id: 'mc1-q3',
        question: 'According to Lewis, how is the Law of Human Nature different from laws of nature like gravity?',
        options: [
          'It only applies to humans',
          'It can be broken or disobeyed',
          'It is more complex',
          'It changes over time'
        ],
        correctAnswer: 'It can be broken or disobeyed',
        explanation: 'Unlike physical laws that describe what always happens, the Moral Law tells us what ought to happen, even though we can choose to disobey it.'
      },
      {
        id: 'mc1-q4',
        question: 'What evidence does Lewis provide for the universality of the Moral Law?',
        options: [
          'Scientific experiments',
          'Biblical references', 
          'Similarities in moral codes across cultures and times',
          'Personal experiences only'
        ],
        correctAnswer: 'Similarities in moral codes across cultures and times',
        explanation: 'Lewis points out that while details may differ, all human societies throughout history have had some moral code, and these codes have remarkable similarities.'
      },
      {
        id: 'mc1-q5',
        question: 'What does Lewis say about people who claim there is no right or wrong?',
        options: [
          'They are more enlightened than others',
          'They are being dishonest when someone treats them unfairly', 
          'They have evolved beyond moral concerns',
          'They have a different but valid perspective'
        ],
        correctAnswer: 'They are being dishonest when someone treats them unfairly',
        explanation: 'Lewis notes that people who deny moral absolutes quickly appeal to fairness when someone breaks a promise to them or treats them badly.'
      },
      {
        id: 'mc1-q6',
        question: 'What does Lewis suggest is the significance of feeling guilty when we break the Moral Law?',
        options: [
          'It\'s just a social construct', 
          'It\'s proof of religious indoctrination',
          'It suggests the Law comes from outside ourselves',
          'It\'s a psychological weakness'
        ],
        correctAnswer: 'It suggests the Law comes from outside ourselves',
        explanation: 'Lewis argues that our sense of guilt when breaking the Law, even when no one is watching, suggests the Law comes from something outside ourselves.'
      },
      {
        id: 'mc1-q7',
        question: 'How does Lewis describe our relationship to the Moral Law?',
        options: [
          'We created it',
          'We are subject to it, not its creators', 
          'We can modify it as needed',
          'It only applies to religious people'
        ],
        correctAnswer: 'We are subject to it, not its creators',
        explanation: 'Lewis argues that we perceive the Moral Law as something imposed upon us, not something we invented.'
      },
      {
        id: 'mc1-q8',
        question: 'What distinction does Lewis make between facts about human behavior and the Moral Law?',
        options: [
          'There is no distinction; they are the same',
          'Facts describe what humans do; the Moral Law prescribes what they ought to do', 
          'Facts are scientific; the Moral Law is religious',
          'Facts are universal; the Moral Law is cultural'
        ],
        correctAnswer: 'Facts describe what humans do; the Moral Law prescribes what they ought to do',
        explanation: 'Lewis distinguishes between descriptive facts about human behavior and the prescriptive nature of the Moral Law.'
      },
      {
        id: 'mc1-q9',
        question: 'What is Lewis\'s purpose in establishing the existence of the Moral Law in this chapter?',
        options: [
          'To promote traditional values',
          'To criticize moral relativism',
          'To prepare for an argument about the existence of God', 
          'To establish social norms'
        ],
        correctAnswer: 'To prepare for an argument about the existence of God',
        explanation: 'Lewis is building a foundation for his later argument that the Moral Law points to the existence of God as its source.'
      },
      {
        id: 'mc1-q10',
        question: 'According to Lewis, what is significant about our failure to keep the Moral Law?',
        options: [
          'It proves the law doesn\'t exist',
          'It shows we need forgiveness and help', 
          'It demonstrates cultural differences',
          'It proves human evolution is incomplete'
        ],
        correctAnswer: 'It shows we need forgiveness and help',
        explanation: 'Lewis suggests our universal failure to live up to the Moral Law points to our need for forgiveness and assistance beyond ourselves.'
      }
    ],
    key_quote: "These, then, are the two points I wanted to make. First, that human beings, all over the earth, have this curious idea that they ought to behave in a certain way, and cannot really get rid of it. Secondly, that they do not in fact behave in that way. They know the Law of Nature; they break it.",
    key_quote_location: "Book I, Chapter 1",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  },
  {
    id: 'mere-christianity-2',
    bookId: 'mere-christianity',
    chapter: 2,
    title: 'Some Objections',
    questions: [
      {
        id: 'mc2-q1',
        question: 'What is one common objection to the Moral Law that Lewis addresses?',
        options: [
          'That it is too strict',
          'That it varies too much between cultures', 
          'That it is outdated',
          'That it can\'t be scientifically proven'
        ],
        correctAnswer: 'That it varies too much between cultures',
        explanation: 'Lewis addresses the objection that morality is merely a cultural construct that varies widely between societies.'
      },
      {
        id: 'mc2-q2',
        question: 'How does Lewis respond to the idea that morality is just a social convention?',
        options: [
          'He agrees completely',
          'He argues that basic moral principles are remarkably similar across cultures despite differences in details', 
          'He says morality is only valid within religious contexts',
          'He claims morality is entirely subjective'
        ],
        correctAnswer: 'He argues that basic moral principles are remarkably similar across cultures despite differences in details',
        explanation: 'Lewis acknowledges cultural differences in moral codes but points out that they share fundamental similarities and are variations rather than completely different systems.'
      },
      {
        id: 'mc2-q3',
        question: 'According to Lewis, what is the relationship between the Moral Law and human instincts?',
        options: [
          'They are identical',
          'The Moral Law is just another instinct',
          'The Moral Law judges between instincts and decides which one to follow in each situation', 
          'Instincts are more important than the Moral Law'
        ],
        correctAnswer: 'The Moral Law judges between instincts and decides which one to follow in each situation',
        explanation: 'Lewis argues that the Moral Law is not itself an instinct but rather adjudicates between different instincts, telling us which one to follow in a given situation.'
      },
      {
        id: 'mc2-q4',
        question: 'How does Lewis illustrate the difference between the Moral Law and herd instinct?',
        options: [
          'There is no difference',
          'The herd instinct is stronger',
          'The Moral Law sometimes tells us to go against herd instinct', 
          'Herd instinct is more reliable'
        ],
        correctAnswer: 'The Moral Law sometimes tells us to go against herd instinct',
        explanation: 'Lewis points out that sometimes the Moral Law tells us to go against the herd and help someone in danger, even when our instinct for self-preservation tells us not to.'
      },
      {
        id: 'mc2-q5',
        question: 'What does Lewis say about the argument that the Moral Law is just a useful social convention?',
        options: [
          'He completely agrees with it',
          'He argues it doesn\'t explain why we feel obligated to follow it even against our interests', 
          'He says it\'s irrelevant',
          'He offers no counterargument'
        ],
        correctAnswer: 'He argues it doesn\'t explain why we feel obligated to follow it even against our interests',
        explanation: 'Lewis argues that even if morality is socially useful, that doesn\'t explain why we feel we ought to follow it even when it goes against our personal interests.'
      },
      {
        id: 'mc2-q6',
        question: 'What distinction does Lewis make between "ought" statements in morality and other domains?',
        options: [
          'There is no distinction',
          'Moral "oughts" are about social approval',
          'Moral "oughts" carry a unique sense of obligation not found in other domains', 
          'Moral "oughts" are less important'
        ],
        correctAnswer: 'Moral "oughts" carry a unique sense of obligation not found in other domains',
        explanation: 'Lewis distinguishes between saying a car "ought" to be serviced (practical) and saying a person "ought" to be honest (moral), noting the unique obligatory nature of moral statements.'
      },
      {
        id: 'mc2-q7',
        question: 'How does Lewis respond to the claim that morality is just about what\'s convenient for society?',
        options: [
          'He agrees completely',
          'He says convenience and morality often align but are conceptually distinct', 
          'He dismisses society\'s needs as irrelevant',
          'He argues that morality is only about individual preferences'
        ],
        correctAnswer: 'He says convenience and morality often align but are conceptually distinct',
        explanation: 'Lewis acknowledges that moral actions are often what benefit society, but argues this doesn\'t explain the unique sense of obligation morality carries.'
      },
      {
        id: 'mc2-q8',
        question: 'What does Lewis suggest about moral reformers who criticize their society\'s conventions?',
        options: [
          'They are always wrong',
          'They must be appealing to a standard beyond their society\'s conventions', 
          'They are merely expressing personal preferences',
          'They are trying to destroy society'
        ],
        correctAnswer: 'They must be appealing to a standard beyond their society\'s conventions',
        explanation: 'Lewis points out that moral reformers who criticize existing conventions must be appealing to a higher standard than mere social convention.'
      },
      {
        id: 'mc2-q9',
        question: 'According to Lewis, what is wrong with the idea that morality is just what\'s good for human survival?',
        options: [
          'Nothing, he agrees with this',
          'It doesn\'t explain why we should care about the survival of others', 
          'Survival is unimportant',
          'It ignores religious sources of morality'
        ],
        correctAnswer: 'It doesn\'t explain why we should care about the survival of others',
        explanation: 'Lewis argues that while survival may explain why we have moral impulses, it doesn\'t explain why we feel obligated to care about others\' survival, not just our own.'
      },
      {
        id: 'mc2-q10',
        question: 'What conclusion does Lewis reach about objections to the Moral Law in this chapter?',
        options: [
          'The objections completely disprove the Moral Law',
          'The objections are valid but can be ignored',
          'The objections fail to explain the unique obligatory character of morality', 
          'The objections show morality is purely subjective'
        ],
        correctAnswer: 'The objections fail to explain the unique obligatory character of morality',
        explanation: 'Lewis concludes that common objections to the Moral Law fail to account for its distinctive character as something we feel obligated to follow regardless of our desires or interests.'
      }
    ],
    key_quote: "My argument against God was that the universe seemed so cruel and unjust. But how had I got this idea of just and unjust? A man does not call a line crooked unless he has some idea of a straight line.",
    key_quote_location: "Book I, Chapter 2",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  }
];
