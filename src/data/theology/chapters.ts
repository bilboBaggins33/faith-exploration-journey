import { TheologyChapter } from './types';

export const theologyChapters: Record<string, TheologyChapter[]> = {
  'mere-christianity': [
    {
      bookId: 'mere-christianity',
      chapter: 1,
      title: 'The Law of Human Nature',
      key_themes: ['Moral Law', 'Universal right and wrong', 'Natural Law']
    },
    {
      bookId: 'mere-christianity',
      chapter: 2,
      title: 'Some Objections',
      key_themes: ['Objections to moral law', 'Cultural differences', 'Instinct vs. Law']
    },
    {
      bookId: 'mere-christianity',
      chapter: 3,
      title: 'The Reality of the Law',
      key_themes: ['Moral law as reality', 'Natural law vs. human nature', 'Discovering vs. inventing']
    },
    {
      bookId: 'mere-christianity',
      chapter: 4,
      title: 'What Lies Behind the Law',
      key_themes: ['God behind moral law', 'Intelligent Creator', 'Purpose of the universe']
    }
  ],
  'knowing-god': [
    {
      bookId: 'knowing-god',
      chapter: 1,
      title: 'The Study of God',
      key_themes: ['Theology', 'Knowledge of God', 'Christian Life']
    },
    {
      bookId: 'knowing-god',
      chapter: 2,
      title: 'The People Who Know Their God',
      key_themes: ['Faith', 'Trust', 'Divine Relationship']
    },
    {
      bookId: 'knowing-god',
      chapter: 3,
      title: 'Knowing and Being Known',
      key_themes: ['Relationship with God', 'Divine Knowledge', 'Personal Faith']
    },
    {
      bookId: 'knowing-god',
      chapter: 4,
      title: 'The Only True God',
      key_themes: ['Monotheism', 'God\'s Character', 'Idolatry']
    },
    {
      bookId: 'knowing-god',
      chapter: 5,
      title: 'God Incarnate',
      key_themes: ['Incarnation', 'Christ\'s Divinity', 'Humanity of Jesus']
    }
  ]
};
