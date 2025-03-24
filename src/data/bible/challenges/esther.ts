import { ChapterChallenge } from '../types';

export const estherChallenges: ChapterChallenge[] = [
  {
    id: 'esther-1',
    bookId: 'esther',
    chapter: 1,
    title: 'Queen Vashti Deposed',
    questions: [
      {
        id: 'esth1-q1',
        question: 'Who was king of Persia at the start of Esther?',
        options: [
          'Cyrus',
          'Ahasuerus (Xerxes)',
          'Darius',
          'Artaxerxes'
        ],
        correctAnswer: 'Ahasuerus (Xerxes)',
        explanation: 'Esther 1:1 says, “…Ahasuerus…”'
      },
      {
        id: 'esth1-q2',
        question: 'Where did Ahasuerus hold a great feast?',
        options: [
          'Jerusalem',
          'Susa',
          'Babylon',
          'Ecbatana'
        ],
        correctAnswer: 'Susa',
        explanation: 'Esther 1:2 states, “…Susa…”'
      },
      {
        id: 'esth1-q3',
        question: 'Why did Ahasuerus summon Queen Vashti?',
        options: [
          'To advise him',
          'To show her beauty',
          'To judge a case',
          'To cook'
        ],
        correctAnswer: 'To show her beauty',
        explanation: 'Esther 1:11 says, “…show… beauty…”'
      },
      {
        id: 'esth1-q4',
        question: 'What did Vashti do in response?',
        options: [
          'Obeyed',
          'Refused to come',
          'Fled',
          'Sent a gift'
        ],
        correctAnswer: 'Refused to come',
        explanation: 'Esther 1:12 states, “…refused…”'
      },
      {
        id: 'esth1-q5',
        question: 'What did the king’s advisors suggest about Vashti?',
        options: [
          'Exile or depose her',
          'Honor her',
          'Imprison her',
          'Forgive her'
        ],
        correctAnswer: 'Exile or depose her',
        explanation: 'Esther 1:19 says, “…another…” (implying deposition)'
      }
    ],
    key_verse: 'Esther 1:19',
    key_verse_text: "…Vashti… no more… royal position… another… better…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'esther-2',
    bookId: 'esther',
    chapter: 2,
    title: 'Esther Becomes Queen',
    questions: [
      {
        id: 'esth2-q1',
        question: 'Who was chosen to replace Vashti as queen?',
        options: [
          'Esther',
          'Hegai',
          'Mordecai',
          'Vashti’s sister'
        ],
        correctAnswer: 'Esther',
        explanation: 'Esther 2:17 says, “…Esther…”'
      },
      {
        id: 'esth2-q2',
        question: 'Who raised Esther?',
        options: [
          'Her father',
          'Mordecai, her cousin',
          'Hegai',
          'The king'
        ],
        correctAnswer: 'Mordecai, her cousin',
        explanation: 'Esther 2:7 states, “…Mordecai…”'
      },
      {
        id: 'esth2-q3',
        question: 'What did Esther conceal at Mordecai’s advice?',
        options: [
          'Her wealth',
          'Her Jewish identity',
          'Her age',
          'Her beauty'
        ],
        correctAnswer: 'Her Jewish identity',
        explanation: 'Esther 2:10 says, “…not reveal… people…”'
      },
      {
        id: 'esth2-q4',
        question: 'What plot did Mordecai overhear?',
        options: [
          'To kill the queen',
          'To assassinate Ahasuerus',
          'To rob the treasury',
          'To attack Susa'
        ],
        correctAnswer: 'To assassinate Ahasuerus',
        explanation: 'Esther 2:21-22 states, “…kill… king…”'
      },
      {
        id: 'esth2-q5',
        question: 'Who recorded Mordecai’s deed?',
        options: [
          'Esther',
          'The king’s chroniclers',
          'Haman',
          'Hegai'
        ],
        correctAnswer: 'The king’s chroniclers',
        explanation: 'Esther 2:23 says, “…chronicles…”'
      }
    ],
    key_verse: 'Esther 2:17',
    key_verse_text: "…king loved Esther… set… crown… made her queen…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'esther-3',
    bookId: 'esther',
    chapter: 3,
    title: 'Haman’s Plot Against the Jews',
    questions: [
      {
        id: 'esth3-q1',
        question: 'Who was promoted above the king’s officials?',
        options: [
          'Mordecai',
          'Haman',
          'Esther',
          'Hegai'
        ],
        correctAnswer: 'Haman',
        explanation: 'Esther 3:1 says, “…Haman…”'
      },
      {
        id: 'esth3-q2',
        question: 'Why did Mordecai refuse to bow to Haman?',
        options: [
          'He was ill',
          'He was a Jew',
          'He hated Haman',
          'He was busy'
        ],
        correctAnswer: 'He was a Jew',
        explanation: 'Esther 3:4 implies Jewish custom (not bowing to men).'
      },
      {
        id: 'esth3-q3',
        question: 'What did Haman plan to do to the Jews?',
        options: [
          'Exile them',
          'Destroy them all',
          'Tax them',
          'Enslave them'
        ],
        correctAnswer: 'Destroy them all',
        explanation: 'Esther 3:6 states, “…destroy…”'
      },
      {
        id: 'esth3-q4',
        question: 'How did Haman decide the date for his plan?',
        options: [
          'By consulting priests',
          'By casting lots (Pur)',
          'By the king’s order',
          'By a dream'
        ],
        correctAnswer: 'By casting lots (Pur)',
        explanation: 'Esther 3:7 says, “…Pur… lot…”'
      },
      {
        id: 'esth3-q5',
        question: 'What did Haman offer the king for his decree?',
        options: [
          '10,000 talents of silver',
          'Gold',
          'Land',
          'Slaves'
        ],
        correctAnswer: '10,000 talents of silver',
        explanation: 'Esther 3:9 states, “…ten thousand talents…”'
      }
    ],
    key_verse: 'Esther 3:13',
    key_verse_text: "…destroy… kill… annihilate… Jews… one day… plunder…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'esther-4',
    bookId: 'esther',
    chapter: 4,
    title: 'Esther Agrees to Help',
    questions: [
      {
        id: 'esth4-q1',
        question: 'How did Mordecai react to Haman’s decree?',
        options: [
          'Fled',
          'Wore sackcloth and mourned',
          'Attacked Haman',
          'Wrote to the king'
        ],
        correctAnswer: 'Wore sackcloth and mourned',
        explanation: 'Esther 4:1 says, “…sackcloth… mourning…”'
      },
      {
        id: 'esth4-q2',
        question: 'Who informed Esther of the decree?',
        options: [
          'Haman',
          'Mordecai through Hathach',
          'The king',
          'Hegai'
        ],
        correctAnswer: 'Mordecai through Hathach',
        explanation: 'Esther 4:5-7 states, “…Hathach… Mordecai…”'
      },
      {
        id: 'esth4-q3',
        question: 'What did Mordecai urge Esther to do?',
        options: [
          'Flee',
          'Plead with the king',
          'Hide her identity',
          'Fight Haman'
        ],
        correctAnswer: 'Plead with the king',
        explanation: 'Esther 4:8 says, “…plead…”'
      },
      {
        id: 'esth4-q4',
        question: 'What risk did Esther face by approaching the king?',
        options: [
          'Exile',
          'Death if uninvited',
          'Imprisonment',
          'Loss of crown'
        ],
        correctAnswer: 'Death if uninvited',
        explanation: 'Esther 4:11 states, “…put to death…”'
      },
      {
        id: 'esth4-q5',
        question: 'What did Esther ask the Jews to do?',
        options: [
          'Fight',
          'Fast for three days',
          'Hide',
          'Pay a ransom'
        ],
        correctAnswer: 'Fast for three days',
        explanation: 'Esther 4:16 says, “…fast… three days…”'
      }
    ],
    key_verse: 'Esther 4:14',
    key_verse_text: "…who knows… come to… kingdom for such a time as this?",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'esther-5',
    bookId: 'esther',
    chapter: 5,
    title: 'Esther’s First Banquet',
    questions: [
      {
        id: 'esth5-q1',
        question: 'What did Esther do after fasting?',
        options: [
          'Fled',
          'Approached the king',
          'Wrote a letter',
          'Hid'
        ],
        correctAnswer: 'Approached the king',
        explanation: 'Esther 5:1 says, “…stood…”'
      },
      {
        id: 'esth5-q2',
        question: 'How did the king receive Esther?',
        options: [
          'Angrily',
          'With favor, extending the scepter',
          'With indifference',
          'With a rebuke'
        ],
        correctAnswer: 'With favor, extending the scepter',
        explanation: 'Esther 5:2 states, “…scepter…”'
      },
      {
        id: 'esth5-q3',
        question: 'What did Esther invite the king and Haman to?',
        options: [
          'A battle',
          'A banquet',
          'A council',
          'A temple'
        ],
        correctAnswer: 'A banquet',
        explanation: 'Esther 5:4 says, “…banquet…”'
      },
      {
        id: 'esth5-q4',
        question: 'What did Haman boast about?',
        options: [
          'His wealth and favor',
          'His army',
          'His wisdom',
          'His lineage'
        ],
        correctAnswer: 'His wealth and favor',
        explanation: 'Esther 5:11 states, “…wealth… honor…”'
      },
      {
        id: 'esth5-q5',
        question: 'What did Haman plan for Mordecai?',
        options: [
          'A reward',
          'A gallows 50 cubits high',
          'Exile',
          'A bribe'
        ],
        correctAnswer: 'A gallows 50 cubits high',
        explanation: 'Esther 5:14 says, “…gallows… fifty cubits…”'
      }
    ],
    key_verse: 'Esther 5:2',
    key_verse_text: "…king… held out… scepter… Esther… touched…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'esther-6',
    bookId: 'esther',
    chapter: 6,
    title: 'Mordecai Honored',
    questions: [
      {
        id: 'esth6-q1',
        question: 'What did the king read about one night?',
        options: [
          'A battle',
          'Mordecai’s deed in the chronicles',
          'Haman’s wealth',
          'Esther’s lineage'
        ],
        correctAnswer: 'Mordecai’s deed in the chronicles',
        explanation: 'Esther 6:1-2 says, “…chronicles…”'
      },
      {
        id: 'esth6-q2',
        question: 'What had Mordecai done to earn honor?',
        options: [
          'Fought a war',
          'Saved the king from assassination',
          'Built a wall',
          'Paid a tax'
        ],
        correctAnswer: 'Saved the king from assassination',
        explanation: 'Esther 6:2 states, “…assassins…”'
      },
      {
        id: 'esth6-q3',
        question: 'Who suggested honoring someone that morning?',
        options: [
          'Esther',
          'Haman',
          'The king',
          'Hegai'
        ],
        correctAnswer: 'The king',
        explanation: 'Esther 6:4-6 implies the king’s initiative.'
      },
      {
        id: 'esth6-q4',
        question: 'What honor did Haman suggest, thinking it was for himself?',
        options: [
          'A crown',
          'Royal robes and a horse',
          'Gold',
          'A palace'
        ],
        correctAnswer: 'Royal robes and a horse',
        explanation: 'Esther 6:8-9 says, “…robe… horse…”'
      },
      {
        id: 'esth6-q5',
        question: 'Who had to honor Mordecai?',
        options: [
          'The king',
          'Haman',
          'Esther',
          'Hegai'
        ],
        correctAnswer: 'Haman',
        explanation: 'Esther 6:10-11 states, “…Haman…”'
      }
    ],
    key_verse: 'Esther 6:11',
    key_verse_text: "…Haman… robe… horse… led… Mordecai… streets…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'esther-7',
    bookId: 'esther',
    chapter: 7,
    title: 'Haman Hanged',
    questions: [
      {
        id: 'esth7-q1',
        question: 'What did Esther reveal at the second banquet?',
        options: [
          'Her wealth',
          'Her Jewish identity and Haman’s plot',
          'A new law',
          'Mordecai’s deed'
        ],
        correctAnswer: 'Her Jewish identity and Haman’s plot',
        explanation: 'Esther 7:3-4 says, “…my people… destroy…”'
      },
      {
        id: 'esth7-q2',
        question: 'Who did Esther accuse before the king?',
        options: [
          'Mordecai',
          'Haman',
          'Hegai',
          'Vashti'
        ],
        correctAnswer: 'Haman',
        explanation: 'Esther 7:6 states, “…Haman…”'
      },
      {
        id: 'esth7-q3',
        question: 'How did the king react to Esther’s plea?',
        options: [
          'Laughed',
          'Went out in anger',
          'Ignored it',
          'Exiled Haman'
        ],
        correctAnswer: 'Went out in anger',
        explanation: 'Esther 7:7 says, “…anger…”'
      },
      {
        id: 'esth7-q4',
        question: 'What did Haman do when the king left?',
        options: [
          'Fled',
          'Begged Esther for his life',
          'Attacked the king',
          'Hid'
        ],
        correctAnswer: 'Begged Esther for his life',
        explanation: 'Esther 7:7-8 states, “…plead…”'
      },
      {
        id: 'esth7-q5',
        question: 'Where was Haman executed?',
        options: [
          'In prison',
          'On the gallows he built for Mordecai',
          'In the palace',
          'In public'
        ],
        correctAnswer: 'On the gallows he built for Mordecai',
        explanation: 'Esther 7:10 says, “…gallows…”'
      }
    ],
    key_verse: 'Esther 7:10',
    key_verse_text: "…hanged Haman… gallows… prepared for Mordecai…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'esther-8',
    bookId: 'esther',
    chapter: 8,
    title: 'Jews Authorized to Defend Themselves',
    questions: [
      {
        id: 'esth8-q1',
        question: 'What did the king give to Esther?',
        options: [
          'A new crown',
          'Haman’s estate',
          'A city',
          'An army'
        ],
        correctAnswer: 'Haman’s estate',
        explanation: 'Esther 8:1 says, “…house of Haman…”'
      },
      {
        id: 'esth8-q2',
        question: 'Who was promoted to Haman’s position?',
        options: [
          'Esther',
          'Mordecai',
          'Hegai',
          'Harbona'
        ],
        correctAnswer: 'Mordecai',
        explanation: 'Esther 8:2 states, “…Mordecai…”'
      },
      {
        id: 'esth8-q3',
        question: 'What did Esther ask the king to do?',
        options: [
          'Build a wall',
          'Revoke Haman’s decree',
          'Exile foreigners',
          'Reward Mordecai'
        ],
        correctAnswer: 'Revoke Haman’s decree',
        explanation: 'Esther 8:5 says, “…reverse…”'
      },
      {
        id: 'esth8-q4',
        question: 'What did the new decree allow the Jews?',
        options: [
          'To flee',
          'To defend themselves',
          'To tax others',
          'To leave Persia'
        ],
        correctAnswer: 'To defend themselves',
        explanation: 'Esther 8:11 states, “…defend…”'
      },
      {
        id: 'esth8-q5',
        question: 'How did the Jews react to the new decree?',
        options: [
          'Fled',
          'Rejoiced and feasted',
          'Fought immediately',
          'Mourned'
        ],
        correctAnswer: 'Rejoiced and feasted',
        explanation: 'Esther 8:16-17 says, “…joy… feast…”'
      }
    ],
    key_verse: 'Esther 8:17',
    key_verse_text: "…Jews… gladness… feast… many… declared… Jews…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'esther-9',
    bookId: 'esther',
    chapter: 9,
    title: 'Victory and Purim Established',
    questions: [
      {
        id: 'esth9-q1',
        question: 'On what day did the Jews strike their enemies?',
        options: [
          '13th of Adar',
          '14th of Nisan',
          '10th of Tishri',
          '7th of Sivan'
        ],
        correctAnswer: '13th of Adar',
        explanation: 'Esther 9:1 says, “…thirteenth… Adar…”'
      },
      {
        id: 'esth9-q2',
        question: 'How many enemies did the Jews kill in Susa?',
        options: [
          '500',
          '75,000',
          '300',
          '10'
        ],
        correctAnswer: '500',
        explanation: 'Esther 9:6 states, “…five hundred…”'
      },
      {
        id: 'esth9-q3',
        question: 'What did the Jews refuse to take from their enemies?',
        options: [
          'Weapons',
          'Plunder',
          'Land',
          'Slaves'
        ],
        correctAnswer: 'Plunder',
        explanation: 'Esther 9:10 says, “…not… plunder…”'
      },
      {
        id: 'esth9-q4',
        question: 'What feast did Mordecai establish?',
        options: [
          'Passover',
          'Purim',
          'Tabernacles',
          'Pentecost'
        ],
        correctAnswer: 'Purim',
        explanation: 'Esther 9:20-22 states, “…Purim…”'
      },
      {
        id: 'esth9-q5',
        question: 'Why was it called Purim?',
        options: [
          'From purification',
          'From the lot (Pur) Haman cast',
          'From peace',
          'From victory'
        ],
        correctAnswer: 'From the lot (Pur) Haman cast',
        explanation: 'Esther 9:26 says, “…Pur…”'
      }
    ],
    key_verse: 'Esther 9:22',
    key_verse_text: "…rest… enemies… sorrow… joy… mourning… gladness…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'esther-10',
    bookId: 'esther',
    chapter: 10,
    title: 'Mordecai’s Greatness',
    questions: [
      {
        id: 'esth10-q1',
        question: 'What did Ahasuerus impose on the land?',
        options: [
          'A tax',
          'A new law',
          'A feast',
          'A war'
        ],
        correctAnswer: 'A tax',
        explanation: 'Esther 10:1 says, “…tax…”'
      },
      {
        id: 'esth10-q2',
        question: 'Where were the king’s acts recorded?',
        options: [
          'Temple records',
          'Chronicles of Persia and Media',
          'Esther’s book',
          'Mordecai’s diary'
        ],
        correctAnswer: 'Chronicles of Persia and Media',
        explanation: 'Esther 10:2 states, “…chronicles… Media… Persia…”'
      },
      {
        id: 'esth10-q3',
        question: 'What position did Mordecai hold?',
        options: [
          'King',
          'Second to the king',
          'Governor',
          'Priest'
        ],
        correctAnswer: 'Second to the king',
        explanation: 'Esther 10:3 says, “…second…”'
      },
      {
        id: 'esth10-q4',
        question: 'How did Mordecai benefit his people?',
        options: [
          'Gave them land',
          'Sought their welfare',
          'Fought wars',
          'Built a temple'
        ],
        correctAnswer: 'Sought their welfare',
        explanation: 'Esther 10:3 states, “…welfare…”'
      },
      {
        id: 'esth10-q5',
        question: 'Who spoke peace to the Jews through Mordecai?',
        options: [
          'Esther',
          'Mordecai himself',
          'The king',
          'Haman’s sons'
        ],
        correctAnswer: 'Mordecai himself',
        explanation: 'Esther 10:3 says, “…speaking peace…”'
      }
    ],
    key_verse: 'Esther 10:3',
    key_verse_text: "…Mordecai… great… second… sought welfare… peace…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  }
];