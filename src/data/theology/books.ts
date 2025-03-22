
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
  },
  {
    id: 'tactics',
    title: 'Tactics',
    author: 'Greg Koukl',
    chapters: 5,
    year: 2009,
    category: 'Apologetics',
    coverImage: '/placeholder.svg',
    description: 'In a world increasingly indifferent to Christian truth, followers of Christ need to be equipped to communicate with those who do not speak their language or accept their source of authority. In Tactics, Gregory Koukl demonstrates how to artfully regain control of conversations, keeping them moving forward in constructive ways through thoughtful diplomacy.'
  },
  {
    id: 'dont-waste-your-life',
    title: 'Don\'t Waste Your Life',
    author: 'John Piper',
    chapters: 5,
    year: 2003,
    category: 'Christian Living',
    coverImage: '/placeholder.svg',
    description: 'John Piper writes, "I will tell you what a tragedy is. I will show you how to waste your life. Consider this story from the February 1998 Reader\'s Digest: A couple 'took early retirement from their jobs in the Northeast five years ago when he was 59 and she was 51. Now they live in Punta Gorda, Florida, where they cruise on their 30-foot trawler, play softball and collect shells...' Picture them before Christ at the great day of judgment: 'Look, Lord. See my shells.'"'
  },
  {
    id: 'discipline-of-grace',
    title: 'The Discipline of Grace',
    author: 'Jerry Bridges',
    chapters: 5,
    year: 1994,
    category: 'Spiritual Growth',
    coverImage: '/placeholder.svg',
    description: 'The Discipline of Grace offers a clear and thorough explanation of the gospel and what it means to be a believer. The book explores how the same grace that brings us to faith in Christ also disciplines us in Christ, and how we learn to discipline ourselves in the areas of commitment, conviction, choices, watchfulness, and adversity.'
  },
  {
    id: 'holiness-of-god',
    title: 'The Holiness of God',
    author: 'R.C. Sproul',
    chapters: 5,
    year: 1985,
    category: 'Theology',
    coverImage: '/placeholder.svg',
    description: 'Central to God\'s character is the quality of holiness. Yet, even so, most people are hard-pressed to define what God\'s holiness precisely is. R.C. Sproul examines the meaning of holiness and why people are both fascinated and terrified by a holy God, exploring the seeming paradox of a God who is both just and merciful.'
  },
  {
    id: 'pilgrims-progress',
    title: 'The Pilgrim\'s Progress',
    author: 'John Bunyan',
    chapters: 5,
    year: 1678,
    category: 'Christian Fiction',
    coverImage: '/placeholder.svg',
    description: 'The Pilgrim\'s Progress is an allegory of a Christian\'s journey from the "City of Destruction" to the "Celestial City". Along the way, the protagonist, Christian, overcomes various obstacles and temptations, illustrating the challenges and triumphs in the Christian life.'
  },
  {
    id: 'just-do-something',
    title: 'Just Do Something',
    author: 'Kevin DeYoung',
    chapters: 5,
    year: 2009,
    category: 'Christian Living',
    coverImage: '/placeholder.svg',
    description: 'Why won\'t God reveal his special will for my life already? Because he doesn\'t intend to... So writes Kevin DeYoung in this punchy book about making decisions the godly way. Many of us are listening for the still small voice to tell us what\'s next instead of listening to the clear voice in Scripture telling us what\'s now.'
  },
  {
    id: 'core-christianity',
    title: 'Core Christianity',
    author: 'Michael Horton',
    chapters: 5,
    year: 2016,
    category: 'Theology',
    coverImage: '/placeholder.svg',
    description: 'Core Christianity explains the essential doctrines of the Christian faith, taking readers beyond the basics and walking them through the more complex aspects of faith. Michael Horton introduces readers to the fundamental beliefs that all Christians share and shows how these beliefs connect to life.'
  },
  {
    id: 'counter-culture',
    title: 'Counter Culture',
    author: 'David Platt',
    chapters: 5,
    year: 2015,
    category: 'Christian Living',
    coverImage: '/placeholder.svg',
    description: 'In Counter Culture, David Platt shows Christians how to actively take a stand on such issues as poverty, sex trafficking, marriage, abortion, racism, and religious liberty—and challenges us to become passionate, unwavering voices for Christ in a culture that\'s going in the opposite direction.'
  }
];
