
import { TheologyBook } from './types';

export const theologyBooks: TheologyBook[] = [
  {
    id: 'mere-christianity',
    title: 'Mere Christianity',
    author: 'C.S. Lewis',
    chapters: 4, // Book I has 5 chapters, but we'll start with 4
    year: 1952,
    category: 'Apologetics'
  },
  {
    id: 'knowing-god',
    title: 'Knowing God',
    author: 'J.I. Packer',
    chapters: 5, // We'll start with 5 chapters
    year: 1973,
    category: 'Systematic Theology'
  }
];
