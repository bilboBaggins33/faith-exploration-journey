
import { TheologyBook } from './types';

export const theologyBooks: TheologyBook[] = [
  {
    id: 'mere-christianity',
    title: 'Mere Christianity',
    author: 'C.S. Lewis',
    chapters: 10, // Updated from 4 to 10 chapters
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
  },
  {
    id: 'westminster-confession',
    title: 'Westminster Confession of Faith',
    author: 'Westminster Assembly',
    chapters: 5, // Starting with 5 chapters
    year: 1646,
    category: 'Confessional',
    coverImage: '/assets/westminster-confession-cover.jpg',
    description: 'The Westminster Confession of Faith is a Reformed confession of faith. Drawn up by the 1646 Westminster Assembly as part of the Westminster Standards to be a confession of the Church of England, it became and remains the "subordinate standard" of doctrine in the Church of Scotland and has been influential within Presbyterian churches worldwide.'
  },
  {
    id: 'desiring-god',
    title: 'Desiring God',
    author: 'John Piper',
    chapters: 5, // Starting with 5 chapters 
    year: 1986,
    category: 'Christian Living',
    coverImage: '/assets/desiring-god-cover.jpg',
    description: 'Desiring God is a paradigm-shattering work that dramatically alters common perspectives on relating to God. Piper reveals that there really is no need to choose between duty and delight in the Christian life. He argues that the chief end of man is to "glorify God by enjoying Him forever."'
  }
];
