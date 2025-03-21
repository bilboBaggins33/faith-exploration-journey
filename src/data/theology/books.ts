
import { TheologyBook } from './types';

export const theologyBooks: TheologyBook[] = [
  {
    id: 'mere-christianity',
    title: 'Mere Christianity',
    author: 'C.S. Lewis',
    chapters: 4, // Book I has 5 chapters, but we'll start with 4
    year: 1952,
    category: 'Apologetics',
    coverImage: '/assets/mere-christianity-cover.jpg',
    description: 'Mere Christianity is C.S. Lewis\'s forceful and accessible doctrine of Christian belief. First heard as informal radio broadcasts and then published as three separate books, The Case for Christianity, Christian Behavior, and Beyond Personality, Mere Christianity brings together what Lewis sees as the fundamental truths of the religion.'
  },
  {
    id: 'knowing-god',
    title: 'Knowing God',
    author: 'J.I. Packer',
    chapters: 5, // We'll start with 5 chapters
    year: 1973,
    category: 'Systematic Theology',
    coverImage: '/assets/knowing-god-cover.jpg',
    description: 'For over 40 years, J. I. Packer\'s classic has been an important tool to help Christians around the world discover the wonder, the glory and the joy of knowing God. Explaining both who God is and how we can relate to him, Packer divides his book into three sections: The first directs our attention to how and why we know God, the second to the attributes of God and the third to the benefits enjoyed by a those who know him intimately.'
  }
];
