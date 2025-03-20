
import { BibleChapter } from './types';

// Example chapter data for specific books
export const bibleChapters: Record<string, BibleChapter[]> = {
  'genesis': [
    {
      bookId: 'genesis',
      chapter: 1,
      verses: 31,
      key_themes: ['Creation', 'God\'s power', 'Order from chaos']
    },
    {
      bookId: 'genesis',
      chapter: 2,
      verses: 25,
      key_themes: ['Creation of mankind', 'Garden of Eden', 'Marriage']
    },
    {
      bookId: 'genesis',
      chapter: 3,
      verses: 24,
      key_themes: ['The Fall', 'Sin enters the world', 'God\'s judgment and mercy']
    },
    {
      bookId: 'genesis',
      chapter: 4,
      verses: 26,
      key_themes: ['Cain and Abel', 'First murder', 'Consequences of sin']
    },
    {
      bookId: 'genesis',
      chapter: 5,
      verses: 32,
      key_themes: ['Genealogy from Adam to Noah', 'Longevity of patriarchs']
    }
  ],
  'exodus': [
    {
      bookId: 'exodus',
      chapter: 1,
      verses: 22,
      key_themes: ['Israelites in Egypt', 'Slavery', 'Pharaoh\'s oppression']
    },
    {
      bookId: 'exodus',
      chapter: 2,
      verses: 25,
      key_themes: ['Birth of Moses', 'Moses flees to Midian', 'God hears Israel\'s groaning']
    },
    {
      bookId: 'exodus',
      chapter: 3,
      verses: 22,
      key_themes: ['Burning bush', 'God reveals His name', 'Moses\' calling']
    }
  ],
  'matthew': [
    {
      bookId: 'matthew',
      chapter: 1,
      verses: 25,
      key_themes: ['Genealogy of Jesus', 'Birth of Jesus', 'Fulfillment of prophecy']
    },
    {
      bookId: 'matthew',
      chapter: 2,
      verses: 23,
      key_themes: ['Visit of the Magi', 'Flight to Egypt', 'Return to Nazareth']
    },
    {
      bookId: 'matthew',
      chapter: 3,
      verses: 17,
      key_themes: ['John the Baptist', 'Baptism of Jesus', 'Trinity revealed']
    },
    {
      bookId: 'matthew',
      chapter: 4,
      verses: 25,
      key_themes: ['Temptation of Jesus', 'Beginning of ministry', 'Calling disciples']
    },
    {
      bookId: 'matthew',
      chapter: 5,
      verses: 48,
      key_themes: ['Sermon on the Mount', 'Beatitudes', 'Salt and Light']
    }
  ]
};
