import { ChapterChallenge } from '../types';

export const numbersChallenges: ChapterChallenge[] = [
  {
    id: 'numbers-1',
    bookId: 'numbers',
    chapter: 1,
    title: 'Census of Israel’s Tribes',
    questions: [
      {
        id: 'num1-q1',
        question: 'Where did God speak to Moses to command the census?',
        options: [
          'Mount Sinai',
          'The tent of meeting',
          'The Jordan River',
          'The wilderness of Paran'
        ],
        correctAnswer: 'The tent of meeting',
        explanation: 'Numbers 1:1 says, “The Lord spoke to Moses in the wilderness of Sinai, in the tent of meeting…”'
      },
      {
        id: 'num1-q2',
        question: 'Who was counted in the census?',
        options: [
          'All men, women, and children',
          'Men twenty years old and up, able to go to war',
          'Only the Levites',
          'The elders of each tribe'
        ],
        correctAnswer: 'Men twenty years old and up, able to go to war',
        explanation: 'Numbers 1:3 states, “…every male… from twenty years old and upward, all… able to go to war…”'
      },
      {
        id: 'num1-q3',
        question: 'Which tribe was excluded from the military census?',
        options: [
          'Judah',
          'Reuben',
          'Levi',
          'Gad'
        ],
        correctAnswer: 'Levi',
        explanation: 'Numbers 1:47 says, “But the Levites… were not listed along with them…”'
      },
      {
        id: 'num1-q4',
        question: 'Who assisted Moses in taking the census?',
        options: [
          'Aaron alone',
          'Aaron and a leader from each tribe',
          'Joshua and Caleb',
          'The priests only'
        ],
        correctAnswer: 'Aaron and a leader from each tribe',
        explanation: 'Numbers 1:4, 16 states, “…with Aaron… a man from each tribe… heads of their fathers’ houses…”'
      },
      {
        id: 'num1-q5',
        question: 'What was the total number of men counted, excluding Levi?',
        options: [
          '603,550',
          '400,000',
          '750,200',
          '300,000'
        ],
        correctAnswer: '603,550',
        explanation: 'Numbers 1:46 says, “…all those listed were 603,550.”'
      }
    ],
    key_verse: 'Numbers 1:2-3',
    key_verse_text: "Take a census of all the congregation of the people of Israel… every male… from twenty years old and upward, all in Israel who are able to go to war…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-2',
    bookId: 'numbers',
    chapter: 2,
    title: 'Arrangement of the Camp',
    questions: [
      {
        id: 'num2-q1',
        question: 'What was at the center of Israel’s camp?',
        options: [
          'The ark of the covenant',
          'The tent of meeting',
          'Moses’ tent',
          'The altar'
        ],
        correctAnswer: 'The tent of meeting',
        explanation: 'Numbers 2:2, 17 says, “…around the tent of meeting… in the midst of the camps…”'
      },
      {
        id: 'num2-q2',
        question: 'Which tribes camped on the east side?',
        options: [
          'Judah, Issachar, and Zebulun',
          'Reuben, Simeon, and Gad',
          'Ephraim, Manasseh, and Benjamin',
          'Dan, Asher, and Naphtali'
        ],
        correctAnswer: 'Judah, Issachar, and Zebulun',
        explanation: 'Numbers 2:3-9 lists “…on the east side… Judah… Issachar… Zebulun…”'
      },
      {
        id: 'num2-q3',
        question: 'Who led the tribes on the south side?',
        options: [
          'Judah',
          'Reuben',
          'Ephraim',
          'Dan'
        ],
        correctAnswer: 'Reuben',
        explanation: 'Numbers 2:10 says, “On the south side… standard of… Reuben…”'
      },
      {
        id: 'num2-q4',
        question: 'What was the total number of men in the camp of Judah (east)?',
        options: [
          '108,100',
          '186,400',
          '151,450',
          '74,600'
        ],
        correctAnswer: '186,400',
        explanation: 'Numbers 2:9 states, “All… for the camp of Judah… 186,400…”'
      },
      {
        id: 'num2-q5',
        question: 'Which tribe camped alone on the north side as a leader?',
        options: [
          'Dan',
          'Asher',
          'Naphtali',
          'Gad'
        ],
        correctAnswer: 'Dan',
        explanation: 'Numbers 2:25 says, “On the north side… standard of… Dan…” (leading Asher and Naphtali).'
      }
    ],
    key_verse: 'Numbers 2:2',
    key_verse_text: "The people of Israel shall camp each by his own standard, with the banners of their fathers’ houses. They shall camp facing the tent of meeting on every side.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-3',
    bookId: 'numbers',
    chapter: 3,
    title: 'Duties of the Levites',
    questions: [
      {
        id: 'num3-q1',
        question: 'What tribe was counted separately for tabernacle service?',
        options: [
          'Judah',
          'Levi',
          'Reuben',
          'Ephraim'
        ],
        correctAnswer: 'Levi',
        explanation: 'Numbers 3:6, 15 says, “Bring the tribe of Levi near… list… the sons of Levi…”'
      },
      {
        id: 'num3-q2',
        question: 'Which Levite clan cared for the ark and furnishings?',
        options: [
          'Gershon',
          'Kohath',
          'Merari',
          'Aaron'
        ],
        correctAnswer: 'Kohath',
        explanation: 'Numbers 3:31 states, “…their guard duty… ark, the table, the lampstand…” (Kohathites).'
      },
      {
        id: 'num3-q3',
        question: 'What was the total number of Levite males a month old and up?',
        options: [
          '22,000',
          '15,000',
          '30,500',
          '18,200'
        ],
        correctAnswer: '22,000',
        explanation: 'Numbers 3:39 says, “…all those listed… were 22,000.”'
      },
      {
        id: 'num3-q4',
        question: 'What did the Levites replace in God’s service?',
        options: [
          'The priests',
          'The firstborn of Israel',
          'The warriors',
          'The elders'
        ],
        correctAnswer: 'The firstborn of Israel',
        explanation: 'Numbers 3:12 says, “…the Levites shall be mine instead of all the firstborn…”'
      },
      {
        id: 'num3-q5',
        question: 'Who camped closest to the tabernacle?',
        options: [
          'Judah',
          'Moses, Aaron, and their families',
          'The Kohathites',
          'The Gershonites'
        ],
        correctAnswer: 'Moses, Aaron, and their families',
        explanation: 'Numbers 3:38 says, “…those who were to camp before the tabernacle… Moses and Aaron and his sons…”'
      }
    ],
    key_verse: 'Numbers 3:12-13',
    key_verse_text: "Behold, I have taken the Levites from among the people of Israel instead of every firstborn… they shall be mine… for all the firstborn are mine…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-4',
    bookId: 'numbers',
    chapter: 4,
    title: 'Census and Duties of Levite Clans',
    questions: [
      {
        id: 'num4-q1',
        question: 'What age range of Levites was counted for tabernacle work?',
        options: [
          '20 to 50',
          '30 to 50',
          '25 to 60',
          '15 to 40'
        ],
        correctAnswer: '30 to 50',
        explanation: 'Numbers 4:3 says, “…from thirty years old up to fifty years old… to do the work…”'
      },
      {
        id: 'num4-q2',
        question: 'Who covered the holy items before the Kohathites carried them?',
        options: [
          'Moses',
          'Aaron and his sons',
          'The Gershonites',
          'The elders'
        ],
        correctAnswer: 'Aaron and his sons',
        explanation: 'Numbers 4:5-6 states, “…Aaron and his sons shall go in and… cover the ark…”'
      },
      {
        id: 'num4-q3',
        question: 'What did the Gershonites carry?',
        options: [
          'The ark and furnishings',
          'Curtains and coverings of the tabernacle',
          'The frames and pillars',
          'The altar'
        ],
        correctAnswer: 'Curtains and coverings of the tabernacle',
        explanation: 'Numbers 4:25 says, “…carry the curtains… the covering…”'
      },
      {
        id: 'num4-q4',
        question: 'What was the total number of Kohathites aged 30-50?',
        options: [
          '2,750',
          '8,580',
          '3,200',
          '2,630'
        ],
        correctAnswer: '2,750',
        explanation: 'Numbers 4:36 states, “…those listed… were 2,750.”'
      },
      {
        id: 'num4-q5',
        question: 'What did the Merarites transport?',
        options: [
          'The holy vessels',
          'The frames, bars, pillars, and bases',
          'The tent coverings',
          'The lampstand'
        ],
        correctAnswer: 'The frames, bars, pillars, and bases',
        explanation: 'Numbers 4:31-32 says, “…frames… bars… pillars… bases…”'
      }
    ],
    key_verse: 'Numbers 4:15',
    key_verse_text: "And when Aaron and his sons have finished covering the sanctuary… the sons of Kohath shall come to carry these… that they may not touch the holy things, lest they die.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-5',
    bookId: 'numbers',
    chapter: 5,
    title: 'Purity and Restitution in the Camp',
    questions: [
      {
        id: 'num5-q1',
        question: 'Who was to be sent outside the camp for purity?',
        options: [
          'The elderly',
          'Those with leprosy, discharges, or who touched the dead',
          'Foreigners',
          'The disobedient'
        ],
        correctAnswer: 'Those with leprosy, discharges, or who touched the dead',
        explanation: 'Numbers 5:2-3 says, “…leper… discharge… unclean through contact with the dead…”'
      },
      {
        id: 'num5-q2',
        question: 'What was required for wronging another besides restitution?',
        options: [
          'A fifth added to it and a ram',
          'Double the value',
          'Exile',
          'Public confession'
        ],
        correctAnswer: 'A fifth added to it and a ram',
        explanation: 'Numbers 5:7-8 states, “…restore it… add a fifth… a ram…”'
      },
      {
        id: 'num5-q3',
        question: 'What was the test for a wife suspected of adultery?',
        options: [
          'A duel',
          'Drinking bitter water with dust and ink',
          'A priestly oath',
          'Isolation'
        ],
        correctAnswer: 'Drinking bitter water with dust and ink',
        explanation: 'Numbers 5:17-19 says, “…water… dust… ink… she shall drink…”'
      },
      {
        id: 'num5-q4',
        question: 'What happened if the wife was guilty in the jealousy test?',
        options: [
          'Her thigh wasted and belly swelled',
          'She was exiled',
          'She was fined',
          'Nothing'
        ],
        correctAnswer: 'Her thigh wasted and belly swelled',
        explanation: 'Numbers 5:27 states, “…her thigh shall fall away, and her womb shall swell…”'
      },
      {
        id: 'num5-q5',
        question: 'Who received offerings if no kinsman existed for restitution?',
        options: [
          'The poor',
          'The priest',
          'The tribe leader',
          'The Levites'
        ],
        correctAnswer: 'The priest',
        explanation: 'Numbers 5:8 says, “…it is to be given to the priest, along with the ram…”'
      }
    ],
    key_verse: 'Numbers 5:6-7',
    key_verse_text: "When a man or woman commits any of the sins… he shall confess… and he shall make full restitution for his wrong, adding a fifth to it…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-6',
    bookId: 'numbers',
    chapter: 6,
    title: 'The Nazirite Vow',
    questions: [
      {
        id: 'num6-q1',
        question: 'What vow allowed a man or woman to separate themselves to God?',
        options: [
          'The Levite vow',
          'The Nazirite vow',
          'The priestly vow',
          'The Sabbath vow'
        ],
        correctAnswer: 'The Nazirite vow',
        explanation: 'Numbers 6:2 says, “…to separate himself to the Lord, he shall separate himself… a Nazirite…”'
      },
      {
        id: 'num6-q2',
        question: 'What was a Nazirite forbidden to drink?',
        options: [
          'Water',
          'Wine or strong drink',
          'Milk',
          'Blood'
        ],
        correctAnswer: 'Wine or strong drink',
        explanation: 'Numbers 6:3 states, “…he shall separate himself from wine and strong drink…”'
      },
      {
        id: 'num6-q3',
        question: 'What could a Nazirite not do to their hair during the vow?',
        options: [
          'Cut it',
          'Dye it',
          'Comb it',
          'Cover it'
        ],
        correctAnswer: 'Cut it',
        explanation: 'Numbers 6:5 says, “…no razor shall touch his head… let the locks… grow long…”'
      },
      {
        id: 'num6-q4',
        question: 'What offerings ended the Nazirite vow?',
        options: [
          'A lamb, a ewe, a ram, and grain',
          'Two doves',
          'A bull and a goat',
          'A grain offering only'
        ],
        correctAnswer: 'A lamb, a ewe, a ram, and grain',
        explanation: 'Numbers 6:14-15 lists “…a male lamb… a ewe lamb… a ram… grain offerings…”'
      },
      {
        id: 'num6-q5',
        question: 'What famous blessing did Aaron and his sons pronounce?',
        options: [
          '“The Lord bless you and keep you…”',
          '“May you prosper…”',
          '“Peace be to you…”',
          '“Strength and honor…”'
        ],
        correctAnswer: '“The Lord bless you and keep you…”',
        explanation: 'Numbers 6:24-26 says, “The Lord bless you and keep you…”'
      }
    ],
    key_verse: 'Numbers 6:24-26',
    key_verse_text: "The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you; the Lord lift up his countenance upon you and give you peace.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-7',
    bookId: 'numbers',
    chapter: 7,
    title: 'Offerings for the Tabernacle',
    questions: [
      {
        id: 'num7-q1',
        question: 'Who brought offerings for the tabernacle’s dedication?',
        options: [
          'The priests',
          'The leaders of Israel’s tribes',
          'The Levites',
          'Moses alone'
        ],
        correctAnswer: 'The leaders of Israel’s tribes',
        explanation: 'Numbers 7:2 says, “…the chiefs… heads of the fathers’ houses… brought their offerings…”'
      },
      {
        id: 'num7-q2',
        question: 'What did the leaders offer for transporting tabernacle items?',
        options: [
          'Camels',
          'Six wagons and twelve oxen',
          'Horses',
          'Twelve chariots'
        ],
        correctAnswer: 'Six wagons and twelve oxen',
        explanation: 'Numbers 7:3 states, “…six wagons and twelve oxen…”'
      },
      {
        id: 'num7-q3',
        question: 'Which Levite clans received the wagons and oxen?',
        options: [
          'Kohath and Gershon',
          'Gershon and Merari',
          'Kohath and Merari',
          'All three clans'
        ],
        correctAnswer: 'Gershon and Merari',
        explanation: 'Numbers 7:7-8 says, “…two wagons… to Gershon… four wagons… to Merari…” (Kohath carried by hand).'
      },
      {
        id: 'num7-q4',
        question: 'How many days did the dedication offerings take?',
        options: [
          'Seven days',
          'Twelve days',
          'Ten days',
          'One day'
        ],
        correctAnswer: 'Twelve days',
        explanation: 'Numbers 7:10-78 describes one leader per day for twelve tribes over twelve days.'
      },
      {
        id: 'num7-q5',
        question: 'What was a common offering from each tribal leader?',
        options: [
          'A gold dish, silver bowl, and animals',
          'A bull and a ram',
          'Two doves',
          'A grain offering only'
        ],
        correctAnswer: 'A gold dish, silver bowl, and animals',
        explanation: 'Numbers 7:13-17 (repeated) lists “…silver plate… silver basin… gold dish… animals…”'
      }
    ],
    key_verse: 'Numbers 7:89',
    key_verse_text: "And when Moses went into the tent of meeting to speak with the Lord, he heard the voice speaking to him from above the mercy seat… and he spoke to him.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-8',
    bookId: 'numbers',
    chapter: 8,
    title: 'Consecration of the Levites',
    questions: [
      {
        id: 'num8-q1',
        question: 'What did Aaron do with the lampstand’s lamps?',
        options: [
          'Lit them once',
          'Set them to give light in front',
          'Covered them',
          'Extinguished them'
        ],
        correctAnswer: 'Set them to give light in front',
        explanation: 'Numbers 8:2-3 says, “…set up the lamps… give light in front of the lampstand…”'
      },
      {
        id: 'num8-q2',
        question: 'What age range of Levites was set for tabernacle service?',
        options: [
          '25 to 50',
          '30 to 50',
          '20 to 60',
          '15 to 40'
        ],
        correctAnswer: '25 to 50',
        explanation: 'Numbers 8:24 states, “…from twenty-five years old… until fifty…”'
      },
      {
        id: 'num8-q3',
        question: 'How were the Levites cleansed before service?',
        options: [
          'With oil and blood',
          'By water sprinkling, shaving, and washing clothes',
          'Through fasting',
          'With a burnt offering'
        ],
        correctAnswer: 'By water sprinkling, shaving, and washing clothes',
        explanation: 'Numbers 8:7 says, “…sprinkle… water… shave… wash their clothes…”'
      },
      {
        id: 'num8-q4',
        question: 'What animals were offered for the Levites’ consecration?',
        options: [
          'Two bulls and a grain offering',
          'A lamb and a goat',
          'Two doves',
          'A ram and a bull'
        ],
        correctAnswer: 'Two bulls and a grain offering',
        explanation: 'Numbers 8:8 states, “…one young bull… another… for a sin offering… grain offering…”'
      },
      {
        id: 'num8-q5',
        question: 'Who presented the Levites as a wave offering to the Lord?',
        options: [
          'Aaron',
          'Moses',
          'The congregation',
          'The tribal leaders'
        ],
        correctAnswer: 'The congregation',
        explanation: 'Numbers 8:10-11 says, “…the people… lay their hands… offer the Levites…”'
      }
    ],
    key_verse: 'Numbers 8:11',
    key_verse_text: "And Aaron shall offer the Levites before the Lord as a wave offering from the people of Israel, that they may do the service of the Lord.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-9',
    bookId: 'numbers',
    chapter: 9,
    title: 'Passover and the Cloud',
    questions: [
      {
        id: 'num9-q1',
        question: 'When did Israel keep the Passover at Sinai?',
        options: [
          'First month, fourteenth day',
          'Second month, fourteenth day',
          'Seventh month, tenth day',
          'Third month, first day'
        ],
        correctAnswer: 'First month, fourteenth day',
        explanation: 'Numbers 9:5 says, “…the fourteenth day of the first month…”'
      },
      {
        id: 'num9-q2',
        question: 'Who asked Moses about Passover for the unclean?',
        options: [
          'Aaron',
          'Men defiled by a dead body',
          'The priests',
          'The tribal leaders'
        ],
        correctAnswer: 'Men defiled by a dead body',
        explanation: 'Numbers 9:6 states, “…certain men who were unclean through touching a dead body…”'
      },
      {
        id: 'num9-q3',
        question: 'When could the unclean or travelers keep a second Passover?',
        options: [
          'Second month, fourteenth day',
          'First month, tenth day',
          'Third month, first day',
          'Seventh month, tenth day'
        ],
        correctAnswer: 'Second month, fourteenth day',
        explanation: 'Numbers 9:11 says, “…the fourteenth day of the second month…”'
      },
      {
        id: 'num9-q4',
        question: 'What guided Israel’s movements in the wilderness?',
        options: [
          'Moses’ staff',
          'The cloud over the tabernacle',
          'A star',
          'The priests’ signals'
        ],
        correctAnswer: 'The cloud over the tabernacle',
        explanation: 'Numbers 9:17 states, “Whenever the cloud lifted… Israel would set out…”'
      },
      {
        id: 'num9-q5',
        question: 'How long might the cloud remain over the tabernacle?',
        options: [
          'Always one day',
          'From days to a year',
          'Only at night',
          'Exactly seven days'
        ],
        correctAnswer: 'From days to a year',
        explanation: 'Numbers 9:22 says, “…two days, or a month, or a longer time… the cloud continued…”'
      }
    ],
    key_verse: 'Numbers 9:17',
    key_verse_text: "Whenever the cloud lifted from over the tent, after that the people of Israel set out, and in the place where the cloud settled down, there the people of Israel camped.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-10',
    bookId: 'numbers',
    chapter: 10,
    title: 'Silver Trumpets and Departure',
    questions: [
      {
        id: 'num10-q1',
        question: 'What were the two silver trumpets used for?',
        options: [
          'Calling assemblies and signaling movement',
          'Worship only',
          'Announcing feasts',
          'Warning of enemies'
        ],
        correctAnswer: 'Calling assemblies and signaling movement',
        explanation: 'Numbers 10:2-3 says, “…for summoning the congregation and… directing the camps…”'
      },
      {
        id: 'num10-q2',
        question: 'Who blew the trumpets?',
        options: [
          'Moses',
          'The priests, sons of Aaron',
          'The Levites',
          'The tribal leaders'
        ],
        correctAnswer: 'The priests, sons of Aaron',
        explanation: 'Numbers 10:8 states, “…the sons of Aaron, the priests, shall blow…”'
      },
      {
        id: 'num10-q3',
        question: 'Which tribes set out first when Israel departed Sinai?',
        options: [
          'Judah, Issachar, and Zebulun',
          'Reuben, Simeon, and Gad',
          'Ephraim, Manasseh, and Benjamin',
          'Dan, Asher, and Naphtali'
        ],
        correctAnswer: 'Judah, Issachar, and Zebulun',
        explanation: 'Numbers 10:14-16 says, “…standard of… Judah set out first… Issachar… Zebulun…”'
      },
      {
        id: 'num10-q4',
        question: 'Who did Moses invite to guide Israel to the promised land?',
        options: [
          'Joshua',
          'Hobab, his brother-in-law',
          'Caleb',
          'Aaron'
        ],
        correctAnswer: 'Hobab, his brother-in-law',
        explanation: 'Numbers 10:29 says, “…Hobab the son of Reuel… Moses’ father-in-law…”'
      },
      {
        id: 'num10-q5',
        question: 'What rose and settled with the ark during travel?',
        options: [
          'A pillar of fire',
          'The cloud of the Lord',
          'Smoke',
          'A banner'
        ],
        correctAnswer: 'The cloud of the Lord',
        explanation: 'Numbers 10:34 says, “…the cloud of the Lord was over them by day…”'
      }
    ],
    key_verse: 'Numbers 10:35-36',
    key_verse_text: "And whenever the ark set out, Moses said, ‘Arise, O Lord, and let your enemies be scattered…’ And when it rested, he said, ‘Return, O Lord, to the ten thousand thousands of Israel.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-11',
    bookId: 'numbers',
    chapter: 11,
    title: 'Complaints and Quail',
    questions: [
      {
        id: 'num11-q1',
        question: 'What did the people complain about that angered God?',
        options: [
          'Lack of water',
          'Their misfortunes',
          'The leadership',
          'The heat'
        ],
        correctAnswer: 'Their misfortunes',
        explanation: 'Numbers 11:1 says, “…the people complained in the hearing of the Lord about their misfortunes…”'
      },
      {
        id: 'num11-q2',
        question: 'What did the rabble crave instead of manna?',
        options: [
          'Fruit',
          'Meat',
          'Bread',
          'Milk'
        ],
        correctAnswer: 'Meat',
        explanation: 'Numbers 11:4 states, “…the rabble… had a strong craving… ‘Oh that we had meat to eat!’”'
      },
      {
        id: 'num11-q3',
        question: 'How did God respond to Moses’ burden of leadership?',
        options: [
          'Removed him',
          'Appointed seventy elders with the Spirit',
          'Sent an angel',
          'Ignored him'
        ],
        correctAnswer: 'Appointed seventy elders with the Spirit',
        explanation: 'Numbers 11:16-17 says, “…seventy men… I will take some of the Spirit… put it on them…”'
      },
      {
        id: 'num11-q4',
        question: 'What did God send in abundance that became a plague?',
        options: [
          'Fish',
          'Quail',
          'Locusts',
          'Manna'
        ],
        correctAnswer: 'Quail',
        explanation: 'Numbers 11:31-32 says, “…quail from the sea… struck… a plague…”'
      },
      {
        id: 'num11-q5',
        question: 'What was the name of the place where God struck the complainers?',
        options: [
          'Taberah',
          'Kibroth-hattaavah',
          'Hazeroth',
          'Paran'
        ],
        correctAnswer: 'Kibroth-hattaavah',
        explanation: 'Numbers 11:34 states, “…called… Kibroth-hattaavah, because there they buried the people who had the craving.”'
      }
    ],
    key_verse: 'Numbers 11:23',
    key_verse_text: "And the Lord said to Moses, ‘Is the Lord’s hand shortened? Now you shall see whether my word will come true for you or not.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-12',
    bookId: 'numbers',
    chapter: 12,
    title: 'Miriam and Aaron’s Rebellion',
    questions: [
      {
        id: 'num12-q1',
        question: 'Who criticized Moses for marrying a Cushite woman?',
        options: [
          'Joshua and Caleb',
          'Miriam and Aaron',
          'The elders',
          'The Levites'
        ],
        correctAnswer: 'Miriam and Aaron',
        explanation: 'Numbers 12:1 says, “Miriam and Aaron spoke against Moses because of the Cushite woman…”'
      },
      {
        id: 'num12-q2',
        question: 'What did Miriam and Aaron claim about their authority?',
        options: [
          'They were priests',
          'God spoke through them too',
          'They were greater than Moses',
          'They led the people'
        ],
        correctAnswer: 'God spoke through them too',
        explanation: 'Numbers 12:2 states, “Has the Lord indeed spoken only through Moses? Has he not spoken through us also?”'
      },
      {
        id: 'num12-q3',
        question: 'How did God describe His relationship with Moses?',
        options: [
          'As a distant leader',
          'Face to face, not in riddles',
          'Through dreams only',
          'Like any prophet'
        ],
        correctAnswer: 'Face to face, not in riddles',
        explanation: 'Numbers 12:8 says, “…with him I speak mouth to mouth… not in riddles…”'
      },
      {
        id: 'num12-q4',
        question: 'What punishment did Miriam receive?',
        options: [
          'Exile',
          'Leprosy for seven days',
          'Death',
          'Silence'
        ],
        correctAnswer: 'Leprosy for seven days',
        explanation: 'Numbers 12:10 states, “…Miriam was leprous… shut outside the camp seven days…”'
      },
      {
        id: 'num12-q5',
        question: 'Who interceded for Miriam’s healing?',
        options: [
          'Aaron',
          'Moses',
          'The elders',
          'The priests'
        ],
        correctAnswer: 'Moses',
        explanation: 'Numbers 12:13 says, “And Moses cried to the Lord, ‘O God, please heal her…’”'
      }
    ],
    key_verse: 'Numbers 12:6-8',
    key_verse_text: "If there is a prophet among you, I… make myself known… in a vision… Not so with… Moses… With him I speak mouth to mouth, clearly, and not in riddles…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-13',
    bookId: 'numbers',
    chapter: 13,
    title: 'Spies Sent to Canaan',
    questions: [
      {
        id: 'num13-q1',
        question: 'From where did Moses send spies into Canaan?',
        options: [
          'Sinai',
          'Paran',
          'Hazeroth',
          'Kadesh'
        ],
        correctAnswer: 'Paran',
        explanation: 'Numbers 13:3 says, “…Moses sent them from the wilderness of Paran…”'
      },
      {
        id: 'num13-q2',
        question: 'How many spies were sent, one from each tribe?',
        options: [
          'Ten',
          'Twelve',
          'Seven',
          'Fourteen'
        ],
        correctAnswer: 'Twelve',
        explanation: 'Numbers 13:4-15 lists one leader from each of the twelve tribes.'
      },
      {
        id: 'num13-q3',
        question: 'Who were the two spies with a positive report?',
        options: [
          'Joshua and Caleb',
          'Shammua and Shaphat',
          'Ammiel and Sethur',
          'Nahbi and Geuel'
        ],
        correctAnswer: 'Joshua and Caleb',
        explanation: 'Numbers 13:30 (and 14:6) highlights Caleb, and Joshua with him, favoring conquest.'
      },
      {
        id: 'num13-q4',
        question: 'What did the spies bring back from the Valley of Eshcol?',
        options: [
          'Gold',
          'A cluster of grapes',
          'Weapons',
          'Sheep'
        ],
        correctAnswer: 'A cluster of grapes',
        explanation: 'Numbers 13:23 says, “…cut… a branch with a single cluster of grapes…”'
      },
      {
        id: 'num13-q5',
        question: 'What did the majority of spies say about the land’s inhabitants?',
        options: [
          'They were weak',
          'They were giants, and we were like grasshoppers',
          'They were friendly',
          'They were few'
        ],
        correctAnswer: 'They were giants, and we were like grasshoppers',
        explanation: 'Numbers 13:33 states, “…sons of Anak… we seemed… like grasshoppers…”'
      }
    ],
    key_verse: 'Numbers 13:30',
    key_verse_text: "But Caleb quieted the people before Moses and said, ‘Let us go up at once and occupy it, for we are well able to overcome it.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-14',
    bookId: 'numbers',
    chapter: 14,
    title: 'Rebellion and Judgment',
    questions: [
      {
        id: 'num14-q1',
        question: 'How did the people react to the spies’ report?',
        options: [
          'They rejoiced',
          'They wept and wanted to return to Egypt',
          'They prepared for battle',
          'They ignored it'
        ],
        correctAnswer: 'They wept and wanted to return to Egypt',
        explanation: 'Numbers 14:1-4 says, “…the people wept… ‘Why… Egypt… let us… go back…’”'
      },
      {
        id: 'num14-q2',
        question: 'Who tried to encourage the people to trust God?',
        options: [
          'Moses and Aaron',
          'Joshua and Caleb',
          'The priests',
          'Both A and B'
        ],
        correctAnswer: 'Both A and B',
        explanation: 'Numbers 14:5-9 shows Moses and Aaron falling on their faces, and Joshua and Caleb speaking.'
      },
      {
        id: 'num14-q3',
        question: 'What punishment did God decree for the rebellion?',
        options: [
          'Immediate death',
          'Forty years wandering, death for those over 20',
          'Exile',
          'Famine'
        ],
        correctAnswer: 'Forty years wandering, death for those over 20',
        explanation: 'Numbers 14:33-34 says, “…forty years… until… numbered… twenty years old and upward…”'
      },
      {
        id: 'num14-q4',
        question: 'Who was spared from the judgment on the rebels?',
        options: [
          'Moses and Aaron',
          'Joshua and Caleb',
          'The Levites',
          'The children'
        ],
        correctAnswer: 'Joshua and Caleb',
        explanation: 'Numbers 14:30 states, “…except for Caleb… and Joshua…”'
      },
      {
        id: 'num14-q5',
        question: 'What happened when some tried to enter Canaan anyway?',
        options: [
          'They succeeded',
          'The Amalekites and Canaanites defeated them',
          'God helped them',
          'They were turned back by Moses'
        ],
        correctAnswer: 'The Amalekites and Canaanites defeated them',
        explanation: 'Numbers 14:45 says, “…Amalekites and Canaanites… defeated them…”'
      }
    ],
    key_verse: 'Numbers 14:9',
    key_verse_text: "Only do not rebel against the Lord… their protection is removed… and the Lord is with us; do not fear them.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-15',
    bookId: 'numbers',
    chapter: 15,
    title: 'Laws and Rebellion’s Aftermath',
    questions: [
      {
        id: 'num15-q1',
        question: 'What offerings were reaffirmed for when Israel entered the land?',
        options: [
          'Burnt, grain, and drink offerings',
          'Peace offerings only',
          'Sin offerings only',
          'Firstfruits only'
        ],
        correctAnswer: 'Burnt, grain, and drink offerings',
        explanation: 'Numbers 15:2-5 mentions “…burnt offering… grain offering… drink offering…”'
      },
      {
        id: 'num15-q2',
        question: 'Who could offer sacrifices alongside Israelites?',
        options: [
          'No one',
          'Sojourners living among them',
          'Enemy captives',
          'The priests only'
        ],
        correctAnswer: 'Sojourners living among them',
        explanation: 'Numbers 15:14-15 says, “…sojourner… may offer… one statute for you and… sojourner…”'
      },
      {
        id: 'num15-q3',
        question: 'What was the penalty for sinning defiantly (high-handedly)?',
        options: [
          'Restitution',
          'Being cut off from the people',
          'Seven days unclean',
          'Exile'
        ],
        correctAnswer: 'Being cut off from the people',
        explanation: 'Numbers 15:30-31 states, “…does it defiantly… shall be cut off…”'
      },
      {
        id: 'num15-q4',
        question: 'What did a man do that led to his execution?',
        options: [
          'Stole from the tabernacle',
          'Gathered sticks on the Sabbath',
          'Blasphemed',
          'Committed adultery'
        ],
        correctAnswer: 'Gathered sticks on the Sabbath',
        explanation: 'Numbers 15:32-33 says, “…gathering sticks on the Sabbath day…”'
      },
      {
        id: 'num15-q5',
        question: 'What were the Israelites to wear to remember God’s commands?',
        options: [
          'Crowns',
          'Tassels with blue cords',
          'White robes',
          'Bracelets'
        ],
        correctAnswer: 'Tassels with blue cords',
        explanation: 'Numbers 15:38-39 says, “…tassels… a cord of blue… to remember…”'
      }
    ],
    key_verse: 'Numbers 15:39',
    key_verse_text: "And it shall be a tassel for you to look at and remember all the commandments of the Lord, to do them, not to follow after your own heart…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-16',
    bookId: 'numbers',
    chapter: 16,
    title: 'Korah’s Rebellion',
    questions: [
      {
        id: 'num16-q1',
        question: 'Who led the rebellion against Moses and Aaron?',
        options: [
          'Korah, Dathan, and Abiram',
          'Joshua and Caleb',
          'Miriam and Aaron',
          'The Levites alone'
        ],
        correctAnswer: 'Korah, Dathan, and Abiram',
        explanation: 'Numbers 16:1-3 says, “Korah… Dathan and Abiram… rose up against Moses…”'
      },
      {
        id: 'num16-q2',
        question: 'What did Korah’s group accuse Moses and Aaron of doing?',
        options: [
          'Stealing offerings',
          'Exalting themselves above the assembly',
          'Losing the way',
          'Favoring Egypt'
        ],
        correctAnswer: 'Exalting themselves above the assembly',
        explanation: 'Numbers 16:3 states, “…why then do you exalt yourselves above the assembly…?”'
      },
      {
        id: 'num16-q3',
        question: 'How did God judge Korah and his followers?',
        options: [
          'Fire from heaven',
          'The earth swallowed them',
          'Plague',
          'Exile'
        ],
        correctAnswer: 'The earth swallowed them',
        explanation: 'Numbers 16:32 says, “…the earth opened its mouth and swallowed them up…”'
      },
      {
        id: 'num16-q4',
        question: 'What happened to the 250 men offering incense?',
        options: [
          'They were spared',
          'Fire from the Lord consumed them',
          'They joined Moses',
          'They fled'
        ],
        correctAnswer: 'Fire from the Lord consumed them',
        explanation: 'Numbers 16:35 states, “…fire came out from the Lord and consumed the 250 men…”'
      },
      {
        id: 'num16-q5',
        question: 'What were the rebels’ censers made into after their death?',
        options: [
          'A covering for the altar',
          'A memorial statue',
          'Weapons',
          'Priestly tools'
        ],
        correctAnswer: 'A covering for the altar',
        explanation: 'Numbers 16:38-39 says, “…make them into hammered plates as a covering for the altar…”'
      }
    ],
    key_verse: 'Numbers 16:32-33',
    key_verse_text: "And the earth opened its mouth and swallowed them up… So they and all that belonged to them went down alive into Sheol…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-17',
    bookId: 'numbers',
    chapter: 17,
    title: 'Aaron’s Staff Buds',
    questions: [
      {
        id: 'num17-q1',
        question: 'What did God command to stop the people’s grumbling?',
        options: [
          'A sacrifice',
          'A test with staffs from each tribe',
          'A new census',
          'A fast'
        ],
        correctAnswer: 'A test with staffs from each tribe',
        explanation: 'Numbers 17:2-5 says, “…staff for… each… tribe… the staff of the man I choose shall sprout…”'
      },
      {
        id: 'num17-q2',
        question: 'Whose staff sprouted, budded, and bore almonds?',
        options: [
          'Moses’',
          'Aaron’s',
          'Korah’s',
          'Joshua’s'
        ],
        correctAnswer: 'Aaron’s',
        explanation: 'Numbers 17:8 states, “…the staff of Aaron… had sprouted… buds… almonds…”'
      },
      {
        id: 'num17-q3',
        question: 'Where was Aaron’s staff placed after budding?',
        options: [
          'In the tent of meeting',
          'Outside the camp',
          'In Moses’ tent',
          'On the altar'
        ],
        correctAnswer: 'In the tent of meeting',
        explanation: 'Numbers 17:10 says, “…place it… in the tent of meeting before the testimony…”'
      },
      {
        id: 'num17-q4',
        question: 'What was the purpose of keeping Aaron’s staff?',
        options: [
          'As a weapon',
          'As a sign against rebels',
          'For priestly use',
          'To plant almonds'
        ],
        correctAnswer: 'As a sign against rebels',
        explanation: 'Numbers 17:10 states, “…as a sign for the rebels…”'
      },
      {
        id: 'num17-q5',
        question: 'How did the people react to God’s sign?',
        options: [
          'They rejoiced',
          'They feared they would die',
          'They rebelled again',
          'They ignored it'
        ],
        correctAnswer: 'They feared they would die',
        explanation: 'Numbers 17:12-13 says, “…Behold, we perish… everyone… near… dies…”'
      }
    ],
    key_verse: 'Numbers 17:10',
    key_verse_text: "And the Lord said to Moses, ‘Put back the staff of Aaron before the testimony, to be kept as a sign for the rebels…’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-18',
    bookId: 'numbers',
    chapter: 18,
    title: 'Duties and Provisions for Priests',
    questions: [
      {
        id: 'num18-q1',
        question: 'Who was given the priesthood responsibility?',
        options: [
          'Moses and his sons',
          'Aaron and his sons',
          'The Levites alone',
          'Korah’s descendants'
        ],
        correctAnswer: 'Aaron and his sons',
        explanation: 'Numbers 18:1 says, “…you and your sons… shall bear… priesthood…”'
      },
      {
        id: 'num18-q2',
        question: 'What was the Levites’ role in relation to the priests?',
        options: [
          'To replace them',
          'To assist them in tabernacle service',
          'To lead the people',
          'To offer sacrifices'
        ],
        correctAnswer: 'To assist them in tabernacle service',
        explanation: 'Numbers 18:2-4 states, “…to assist you… service of the tent…”'
      },
      {
        id: 'num18-q3',
        question: 'What did God give Aaron and his sons as their portion?',
        options: [
          'Land',
          'Offerings dedicated to the Lord',
          'Gold',
          'The firstborn'
        ],
        correctAnswer: 'Offerings dedicated to the Lord',
        explanation: 'Numbers 18:8-9 says, “…I have given you… every offering…”'
      },
      {
        id: 'num18-q4',
        question: 'What portion of the tithes did the Levites give to the priests?',
        options: [
          'One-fifth',
          'One-tenth',
          'Half',
          'All of it'
        ],
        correctAnswer: 'One-tenth',
        explanation: 'Numbers 18:26 says, “…a tenth of the tithe… to Aaron…”'
      },
      {
        id: 'num18-q5',
        question: 'What inheritance did God say He was for the Levites?',
        options: [
          'Their land',
          'Their portion and inheritance',
          'Their wealth',
          'Their protection'
        ],
        correctAnswer: 'Their portion and inheritance',
        explanation: 'Numbers 18:20 states, “…I am your portion and your inheritance…”'
      }
    ],
    key_verse: 'Numbers 18:20',
    key_verse_text: "And the Lord said to Aaron, ‘You shall have no inheritance in their land… I am your portion and your inheritance among the people of Israel.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-19',
    bookId: 'numbers',
    chapter: 19,
    title: 'The Red Heifer and Purification',
    questions: [
      {
        id: 'num19-q1',
        question: 'What animal was used for the water of purification?',
        options: [
          'A red heifer',
          'A white lamb',
          'A black goat',
          'A spotted bull'
        ],
        correctAnswer: 'A red heifer',
        explanation: 'Numbers 19:2 says, “…bring you an unblemished red heifer…”'
      },
      {
        id: 'num19-q2',
        question: 'Who was to slaughter the red heifer?',
        options: [
          'Moses',
          'Aaron',
          'Eleazar the priest',
          'The Levites'
        ],
        correctAnswer: 'Eleazar the priest',
        explanation: 'Numbers 19:3 states, “…give it to Eleazar… slaughtered…”'
      },
      {
        id: 'num19-q3',
        question: 'What was mixed with the heifer’s ashes for purification?',
        options: [
          'Oil',
          'Fresh water',
          'Wine',
          'Blood'
        ],
        correctAnswer: 'Fresh water',
        explanation: 'Numbers 19:17 says, “…ashes… fresh water shall be added…”'
      },
      {
        id: 'num19-q4',
        question: 'How long was someone unclean after touching a corpse?',
        options: [
          'Three days',
          'Seven days',
          'Ten days',
          'One month'
        ],
        correctAnswer: 'Seven days',
        explanation: 'Numbers 19:11 states, “…unclean seven days…”'
      },
      {
        id: 'num19-q5',
        question: 'What happened if someone didn’t purify after uncleanness?',
        options: [
          'Fined',
          'Cut off from the assembly',
          'Exiled',
          'Nothing'
        ],
        correctAnswer: 'Cut off from the assembly',
        explanation: 'Numbers 19:20 says, “…shall be cut off… defiled the sanctuary…”'
      }
    ],
    key_verse: 'Numbers 19:9',
    key_verse_text: "And a man who is clean shall gather up the ashes of the heifer and deposit them outside the camp… for the water for impurity…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-20',
    bookId: 'numbers',
    chapter: 20,
    title: 'Water from the Rock and Edom’s Refusal',
    questions: [
      {
        id: 'num20-q1',
        question: 'Where did Miriam die and was buried?',
        options: [
          'Sinai',
          'Kadesh',
          'Paran',
          'Hazeroth'
        ],
        correctAnswer: 'Kadesh',
        explanation: 'Numbers 20:1 says, “…people stayed in Kadesh… Miriam died there…”'
      },
      {
        id: 'num20-q2',
        question: 'What did Moses do wrong at the rock in Kadesh?',
        options: [
          'He broke it',
          'He struck it instead of speaking to it',
          'He ignored it',
          'He offered it'
        ],
        correctAnswer: 'He struck it instead of speaking to it',
        explanation: 'Numbers 20:8, 11 says, “…speak to the rock… Moses struck the rock…”'
      },
      {
        id: 'num20-q3',
        question: 'What was Moses and Aaron’s punishment for disobedience?',
        options: [
          'Death',
          'Not entering the promised land',
          'Exile',
          'Loss of priesthood'
        ],
        correctAnswer: 'Not entering the promised land',
        explanation: 'Numbers 20:12 states, “…you shall not bring this assembly into the land…”'
      },
      {
        id: 'num20-q4',
        question: 'What did Edom refuse Israel?',
        options: [
          'Food',
          'Passage through their land',
          'Water',
          'Alliance'
        ],
        correctAnswer: 'Passage through their land',
        explanation: 'Numbers 20:18-20 says, “You shall not pass through… Edom refused…”'
      },
      {
        id: 'num20-q5',
        question: 'Where did Aaron die?',
        options: [
          'Mount Sinai',
          'Mount Hor',
          'Kadesh',
          'Mount Nebo'
        ],
        correctAnswer: 'Mount Hor',
        explanation: 'Numbers 20:28 says, “…Aaron died there on the top of the mountain…”'
      }
    ],
    key_verse: 'Numbers 20:12',
    key_verse_text: "And the Lord said to Moses and Aaron, ‘Because you did not believe in me… you shall not bring this assembly into the land that I have given them.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-21',
    bookId: 'numbers',
    chapter: 21,
    title: 'Victories and the Bronze Serpent',
    questions: [
      {
        id: 'num21-q1',
        question: 'Which king did Israel defeat first in this chapter?',
        options: [
          'Sihon',
          'Og',
          'Arad',
          'Balak'
        ],
        correctAnswer: 'Arad',
        explanation: 'Numbers 21:1-3 says, “…the Canaanite, the king of Arad… Israel defeated him…”'
      },
      {
        id: 'num21-q2',
        question: 'Why did God send fiery serpents among the people?',
        options: [
          'They rebelled against Moses',
          'They spoke against God and Moses',
          'They refused to fight',
          'They worshipped idols'
        ],
        correctAnswer: 'They spoke against God and Moses',
        explanation: 'Numbers 21:5-6 states, “…the people spoke against God and against Moses… fiery serpents…”'
      },
      {
        id: 'num21-q3',
        question: 'What did Moses make to save those bitten by serpents?',
        options: [
          'A golden calf',
          'A bronze serpent',
          'A silver staff',
          'A wooden cross'
        ],
        correctAnswer: 'A bronze serpent',
        explanation: 'Numbers 21:9 says, “So Moses made a bronze serpent and set it on a pole…”'
      },
      {
        id: 'num21-q4',
        question: 'Which Amorite king refused passage and was defeated?',
        options: [
          'Sihon',
          'Og',
          'Balak',
          'Arad'
        ],
        correctAnswer: 'Sihon',
        explanation: 'Numbers 21:23-24 states, “Sihon would not allow Israel to pass… Israel struck him…”'
      },
      {
        id: 'num21-q5',
        question: 'Who was the king of Bashan defeated by Israel?',
        options: [
          'Sihon',
          'Og',
          'Balak',
          'Arad'
        ],
        correctAnswer: 'Og',
        explanation: 'Numbers 21:33-35 says, “…Og the king of Bashan… the Lord… delivered…”'
      }
    ],
    key_verse: 'Numbers 21:9',
    key_verse_text: "So Moses made a bronze serpent and set it on a pole. And if a serpent bit anyone, he would look at the bronze serpent and live.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-22',
    bookId: 'numbers',
    chapter: 22,
    title: 'Balak and Balaam',
    questions: [
      {
        id: 'num22-q1',
        question: 'Who sent for Balaam to curse Israel?',
        options: [
          'Sihon',
          'Og',
          'Balak',
          'Moab'
        ],
        correctAnswer: 'Balak',
        explanation: 'Numbers 22:5-6 says, “…Balak the son of Zippor… ‘Come… curse this people…’”'
      },
      {
        id: 'num22-q2',
        question: 'What initially stopped Balaam from going with Balak’s men?',
        options: [
          'Fear of Israel',
          'God told him not to go',
          'His donkey died',
          'A storm'
        ],
        correctAnswer: 'God told him not to go',
        explanation: 'Numbers 22:12 states, “God said to Balaam, ‘You shall not go with them…’”'
      },
      {
        id: 'num22-q3',
        question: 'What blocked Balaam’s path on his journey?',
        options: [
          'A river',
          'The angel of the Lord',
          'A wall',
          'A lion'
        ],
        correctAnswer: 'The angel of the Lord',
        explanation: 'Numbers 22:22-23 says, “…the angel of the Lord stood in the way…”'
      },
      {
        id: 'num22-q4',
        question: 'What unusual event happened when Balaam beat his donkey?',
        options: [
          'It ran away',
          'It spoke to him',
          'It turned into a horse',
          'It died'
        ],
        correctAnswer: 'It spoke to him',
        explanation: 'Numbers 22:28 states, “…the Lord opened the mouth of the donkey… ‘What have I done…?’”'
      },
      {
        id: 'num22-q5',
        question: 'What did the angel warn Balaam about?',
        options: [
          'Cursing Israel',
          'His life being in danger',
          'Returning home',
          'Trusting Balak'
        ],
        correctAnswer: 'His life being in danger',
        explanation: 'Numbers 22:32-33 says, “…I have come… to oppose you… I would have killed you…”'
      }
    ],
    key_verse: 'Numbers 22:31',
    key_verse_text: "Then the Lord opened the eyes of Balaam, and he saw the angel of the Lord standing in the way… and he bowed down and fell on his face.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-23',
    bookId: 'numbers',
    chapter: 23,
    title: 'Balaam’s First Oracles',
    questions: [
      {
        id: 'num23-q1',
        question: 'How many altars did Balaam have Balak build for the first oracle?',
        options: [
          'Three',
          'Seven',
          'Ten',
          'Twelve'
        ],
        correctAnswer: 'Seven',
        explanation: 'Numbers 23:1 says, “…Build for me here seven altars…”'
      },
      {
        id: 'num23-q2',
        question: 'What did Balaam say he could not do to Israel?',
        options: [
          'Defeat them',
          'Curse whom God has not cursed',
          'See them',
          'Bless them'
        ],
        correctAnswer: 'Curse whom God has not cursed',
        explanation: 'Numbers 23:8 states, “How can I curse whom God has not cursed?”'
      },
      {
        id: 'num23-q3',
        question: 'From where did Balaam view Israel in his first oracle?',
        options: [
          'A valley',
          'The heights of Baal',
          'Mount Pisgah',
          'A plain'
        ],
        correctAnswer: 'The heights of Baal',
        explanation: 'Numbers 23:3 (context with 22:41) implies “…high places of Baal…”'
      },
      {
        id: 'num23-q4',
        question: 'What did Balaam’s second oracle say about God’s promise?',
        options: [
          'It could fail',
          'God does not lie or change His mind',
          'It was temporary',
          'It depended on Israel'
        ],
        correctAnswer: 'God does not lie or change His mind',
        explanation: 'Numbers 23:19 says, “God is not man, that he should lie… does he speak and not act?”'
      },
      {
        id: 'num23-q5',
        question: 'How did Balak react to Balaam’s blessings?',
        options: [
          'He rejoiced',
          'He grew angry and demanded a curse',
          'He paid Balaam more',
          'He ignored it'
        ],
        correctAnswer: 'He grew angry and demanded a curse',
        explanation: 'Numbers 23:25 says, “Balak said… ‘Neither curse… nor bless…!’” (anger in context).'
      }
    ],
    key_verse: 'Numbers 23:19',
    key_verse_text: "God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it?",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-24',
    bookId: 'numbers',
    chapter: 24,
    title: 'Balaam’s Final Oracles',
    questions: [
      {
        id: 'num24-q1',
        question: 'What did Balaam see in his third oracle?',
        options: [
          'Israel’s destruction',
          'Israel blessed like a lion',
          'Moab’s victory',
          'A storm'
        ],
        correctAnswer: 'Israel blessed like a lion',
        explanation: 'Numbers 24:9 says, “…like a lion… Blessed are those who bless you…”'
      },
      {
        id: 'num24-q2',
        question: 'From where did Balaam speak his third oracle?',
        options: [
          'Peor',
          'Pisgah',
          'Baal',
          'Moab'
        ],
        correctAnswer: 'Pisgah',
        explanation: 'Numbers 23:28 (leading into 24) says, “…top of Pisgah…”'
      },
      {
        id: 'num24-q3',
        question: 'What did Balaam predict about a star and scepter?',
        options: [
          'A king rising from Israel',
          'A storm from the east',
          'Moab’s ruler',
          'Israel’s fall'
        ],
        correctAnswer: 'A king rising from Israel',
        explanation: 'Numbers 24:17 states, “…a star… out of Jacob… a scepter… out of Israel…”'
      },
      {
        id: 'num24-q4',
        question: 'How did Balak respond to Balaam’s final blessings?',
        options: [
          'He thanked him',
          'He drove him away angrily',
          'He paid him',
          'He joined Israel'
        ],
        correctAnswer: 'He drove him away angrily',
        explanation: 'Numbers 24:10-11 says, “…Balak’s anger… ‘Go back… I will reward you nothing…’”'
      },
      {
        id: 'num24-q5',
        question: 'Which nations did Balaam prophesy against?',
        options: [
          'Egypt and Canaan',
          'Moab, Edom, and Amalek',
          'Assyria and Babylon',
          'Judah and Levi'
        ],
        correctAnswer: 'Moab, Edom, and Amalek',
        explanation: 'Numbers 24:17-20 mentions “…Moab… Edom… Amalek…”'
      }
    ],
    key_verse: 'Numbers 24:17',
    key_verse_text: "I see him, but not now… A star shall come out of Jacob, and a scepter shall rise out of Israel…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-25',
    bookId: 'numbers',
    chapter: 25,
    title: 'Sin at Peor',
    questions: [
      {
        id: 'num25-q1',
        question: 'What sin did Israel commit at Shittim?',
        options: [
          'Worshipping Baal of Peor and sexual immorality',
          'Attacking Moab',
          'Stealing from the camp',
          'Rebelling against Moses'
        ],
        correctAnswer: 'Worshipping Baal of Peor and sexual immorality',
        explanation: 'Numbers 25:1-3 says, “…sexual immorality with… Moab… Baal of Peor…”'
      },
      {
        id: 'num25-q2',
        question: 'What did God command Moses to do with the leaders?',
        options: [
          'Exile them',
          'Hang them before the Lord',
          'Forgive them',
          'Replace them'
        ],
        correctAnswer: 'Hang them before the Lord',
        explanation: 'Numbers 25:4 states, “…hang them in the sun before the Lord…”'
      },
      {
        id: 'num25-q3',
        question: 'Who killed an Israelite and a Midianite woman in the tent?',
        options: [
          'Moses',
          'Aaron',
          'Phinehas',
          'Joshua'
        ],
        correctAnswer: 'Phinehas',
        explanation: 'Numbers 25:7-8 says, “…Phinehas… took a spear… thrust both of them…”'
      },
      {
        id: 'num25-q4',
        question: 'What stopped the plague after Phinehas’ act?',
        options: [
          'A sacrifice',
          'His zeal for God',
          'Moses’ prayer',
          'Rain'
        ],
        correctAnswer: 'His zeal for God',
        explanation: 'Numbers 25:11 says, “…Phinehas… turned back my wrath… jealous with my jealousy…”'
      },
      {
        id: 'num25-q5',
        question: 'How many died in the plague at Peor?',
        options: [
          '12,000',
          '24,000',
          '15,000',
          '30,000'
        ],
        correctAnswer: '24,000',
        explanation: 'Numbers 25:9 states, “…those who died… were 24,000.”'
      }
    ],
    key_verse: 'Numbers 25:11',
    key_verse_text: "Phinehas the son of Eleazar… has turned back my wrath from the people of Israel, in that he was jealous with my jealousy…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-26',
    bookId: 'numbers',
    chapter: 26,
    title: 'Second Census of Israel',
    questions: [
      {
        id: 'num26-q1',
        question: 'Why did God command a second census?',
        options: [
          'To count the Levites',
          'To divide the land by lot',
          'To prepare for war',
          'To replace the first generation'
        ],
        correctAnswer: 'To divide the land by lot',
        explanation: 'Numbers 26:53-55 says, “…the land shall be divided… according to the names…”'
      },
      {
        id: 'num26-q2',
        question: 'Who conducted the census with Moses?',
        options: [
          'Aaron',
          'Eleazar',
          'Joshua',
          'Caleb'
        ],
        correctAnswer: 'Eleazar',
        explanation: 'Numbers 26:1-2 states, “…Moses and Eleazar… ‘Take a census…’”'
      },
      {
        id: 'num26-q3',
        question: 'What was the total number of men 20 and older, excluding Levites?',
        options: [
          '601,730',
          '603,550',
          '625,000',
          '580,200'
        ],
        correctAnswer: '601,730',
        explanation: 'Numbers 26:51 says, “…all those listed were 601,730.”'
      },
      {
        id: 'num26-q4',
        question: 'Which tribe had the largest number in the census?',
        options: [
          'Reuben',
          'Judah',
          'Dan',
          'Manasseh'
        ],
        correctAnswer: 'Judah',
        explanation: 'Numbers 26:22 states, “…Judah… 76,500…” (highest listed).'
      },
      {
        id: 'num26-q5',
        question: 'How many Levite males a month old and up were counted?',
        options: [
          '22,000',
          '23,000',
          '20,500',
          '25,000'
        ],
        correctAnswer: '23,000',
        explanation: 'Numbers 26:62 says, “…all the males… were 23,000…”'
      }
    ],
    key_verse: 'Numbers 26:52-54',
    key_verse_text: "The Lord spoke to Moses, saying, ‘Among these the land shall be divided… To a large tribe you shall give a large inheritance…’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-27',
    bookId: 'numbers',
    chapter: 27,
    title: 'Inheritance and Joshua’s Appointment',
    questions: [
      {
        id: 'num27-q1',
        question: 'Who approached Moses about inheritance for daughters?',
        options: [
          'Miriam’s daughters',
          'Zelophehad’s daughters',
          'Aaron’s daughters',
          'The Levite women'
        ],
        correctAnswer: 'Zelophehad’s daughters',
        explanation: 'Numbers 27:1-2 says, “…the daughters of Zelophehad… came near…”'
      },
      {
        id: 'num27-q2',
        question: 'What did God rule about daughters with no brothers?',
        options: [
          'They inherit their father’s land',
          'They receive nothing',
          'They marry to inherit',
          'The land goes to priests'
        ],
        correctAnswer: 'They inherit their father’s land',
        explanation: 'Numbers 27:8 states, “…if a man dies… you shall transfer his inheritance to his daughter…”'
      },
      {
        id: 'num27-q3',
        question: 'Where did Moses go to see the promised land?',
        options: [
          'Mount Pisgah',
          'Mount Hor',
          'Mount Nebo',
          'Mount Sinai'
        ],
        correctAnswer: 'Mount Pisgah',
        explanation: 'Numbers 27:12 says, “…go up… Mount Abarim… Pisgah…” (contextual naming).'
      },
      {
        id: 'num27-q4',
        question: 'Who did God appoint as Moses’ successor?',
        options: [
          'Eleazar',
          'Joshua',
          'Caleb',
          'Phinehas'
        ],
        correctAnswer: 'Joshua',
        explanation: 'Numbers 27:18 states, “…Joshua the son of Nun… lay your hand on him…”'
      },
      {
        id: 'num27-q5',
        question: 'How was Joshua commissioned?',
        options: [
          'By a vote',
          'Moses laid hands on him before Eleazar and the congregation',
          'With a sacrifice',
          'By the cloud'
        ],
        correctAnswer: 'Moses laid hands on him before Eleazar and the congregation',
        explanation: 'Numbers 27:22-23 says, “…Moses… laid his hands on him… before Eleazar… congregation…”'
      }
    ],
    key_verse: 'Numbers 27:18-19',
    key_verse_text: "So the Lord said to Moses, ‘Take Joshua… a man in whom is the Spirit, and lay your hand on him… set him before… all the congregation…’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-28',
    bookId: 'numbers',
    chapter: 28,
    title: 'Daily, Sabbath, and Festival Offerings',
    questions: [
      {
        id: 'num28-q1',
        question: 'What was offered daily to the Lord?',
        options: [
          'Two lambs a year old',
          'One bull',
          'A goat and grain',
          'Two doves'
        ],
        correctAnswer: 'Two lambs a year old',
        explanation: 'Numbers 28:3-4 says, “…two male lambs a year old… one… morning… evening…”'
      },
      {
        id: 'num28-q2',
        question: 'What extra offering was added on the Sabbath?',
        options: [
          'A ram',
          'Two lambs with grain and drink offerings',
          'A bull',
          'Three doves'
        ],
        correctAnswer: 'Two lambs with grain and drink offerings',
        explanation: 'Numbers 28:9-10 states, “…two male lambs… grain offering… drink offering…”'
      },
      {
        id: 'num28-q3',
        question: 'What was offered on the first day of each month?',
        options: [
          'Two bulls, one ram, seven lambs',
          'One bull, two rams',
          'Three lambs',
          'A goat only'
        ],
        correctAnswer: 'Two bulls, one ram, seven lambs',
        explanation: 'Numbers 28:11 says, “…two young bulls, one ram, seven male lambs…”'
      },
      {
        id: 'num28-q4',
        question: 'How many lambs were offered daily during Unleavened Bread?',
        options: [
          'One',
          'Two',
          'Seven',
          'Ten'
        ],
        correctAnswer: 'Two',
        explanation: 'Numbers 28:24 states, “…like this… day by day… two lambs…” (context of daily offerings).'
      },
      {
        id: 'num28-q5',
        question: 'What feast required seven bulls and two rams on its first day?',
        options: [
          'Passover',
          'Feast of Weeks',
          'Feast of Booths',
          'Day of Atonement'
        ],
        correctAnswer: 'Feast of Booths',
        explanation: 'Numbers 29:13 (in context with 28) says, “…seven bulls, two rams… first day…”'
      }
    ],
    key_verse: 'Numbers 28:9-10',
    key_verse_text: "On the Sabbath day, two male lambs a year old… with the grain offering and… drink offering… a burnt offering every Sabbath…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-29',
    bookId: 'numbers',
    chapter: 29,
    title: 'Offerings for Feasts',
    questions: [
      {
        id: 'num29-q1',
        question: 'What was celebrated on the first day of the seventh month?',
        options: [
          'Feast of Trumpets',
          'Day of Atonement',
          'Feast of Booths',
          'Passover'
        ],
        correctAnswer: 'Feast of Trumpets',
        explanation: 'Numbers 29:1 says, “…first day of the seventh month… a day for blowing trumpets…”'
      },
      {
        id: 'num29-q2',
        question: 'What was offered on the Day of Atonement besides the sin offering?',
        options: [
          'One bull, one ram, seven lambs',
          'Two goats',
          'Three lambs',
          'A bull and a ram'
        ],
        correctAnswer: 'One bull, one ram, seven lambs',
        explanation: 'Numbers 29:8 states, “…one young bull, one ram, seven male lambs…”'
      },
      {
        id: 'num29-q3',
        question: 'How many bulls were offered total over the seven days of Booths?',
        options: [
          '10',
          '13',
          '70',
          '49'
        ],
        correctAnswer: '70',
        explanation: 'Numbers 29:12-32 lists decreasing bulls (13 to 7), totaling 70 over seven days.'
      },
      {
        id: 'num29-q4',
        question: 'What was unique about the eighth day of the Feast of Booths?',
        options: [
          'No offerings',
          'A solemn assembly with fewer animals',
          'Double offerings',
          'A fast'
        ],
        correctAnswer: 'A solemn assembly with fewer animals',
        explanation: 'Numbers 29:35-36 says, “…solemn assembly… one bull, one ram, seven lambs…”'
      },
      {
        id: 'num29-q5',
        question: 'What accompanied all burnt offerings in these feasts?',
        options: [
          'Wine only',
          'Grain and drink offerings',
          'Incense',
          'Oil only'
        ],
        correctAnswer: 'Grain and drink offerings',
        explanation: 'Numbers 29:6, 9, etc., repeatedly state, “…grain offering… drink offering…”'
      }
    ],
    key_verse: 'Numbers 29:1',
    key_verse_text: "On the first day of the seventh month you shall have a holy convocation… It is a day for you to blow the trumpets…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-30',
    bookId: 'numbers',
    chapter: 30,
    title: 'Laws About Vows',
    questions: [
      {
        id: 'num30-q1',
        question: 'What did Moses say about a man’s vow to the Lord?',
        options: [
          'It could be broken',
          'He must keep it',
          'It depended on the priest',
          'It was optional'
        ],
        correctAnswer: 'He must keep it',
        explanation: 'Numbers 30:2 says, “…he shall not break his word… he shall do…”'
      },
      {
        id: 'num30-q2',
        question: 'Who could nullify a young woman’s vow in her father’s house?',
        options: [
          'Her mother',
          'Her father',
          'The priest',
          'Her brother'
        ],
        correctAnswer: 'Her father',
        explanation: 'Numbers 30:5 states, “…her father opposes her… her vow… shall not stand…”'
      },
      {
        id: 'num30-q3',
        question: 'What happened if a husband heard his wife’s vow and said nothing?',
        options: [
          'It was void',
          'It stood',
          'It was delayed',
          'It went to the priest'
        ],
        correctAnswer: 'It stood',
        explanation: 'Numbers 30:7 says, “…if her husband says nothing… her vows shall stand…”'
      },
      {
        id: 'num30-q4',
        question: 'Who could override a wife’s vow on the day he heard it?',
        options: [
          'Her husband',
          'Her father',
          'The elders',
          'The Levites'
        ],
        correctAnswer: 'Her husband',
        explanation: 'Numbers 30:8 says, “…her husband opposes her… he shall make void her vow…”'
      },
      {
        id: 'num30-q5',
        question: 'Whose vows stood without interference?',
        options: [
          'A widow or divorced woman',
          'A young girl',
          'A married woman',
          'A priest’s daughter'
        ],
        correctAnswer: 'A widow or divorced woman',
        explanation: 'Numbers 30:9 states, “…a widow or… divorced woman… shall stand…”'
      }
    ],
    key_verse: 'Numbers 30:2',
    key_verse_text: "If a man vows a vow to the Lord… he shall not break his word. He shall do according to all that proceeds out of his mouth.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-31',
    bookId: 'numbers',
    chapter: 31,
    title: 'Vengeance on Midian',
    questions: [
      {
        id: 'num31-q1',
        question: 'Why did God command war against the Midianites?',
        options: [
          'For land',
          'For their sin at Peor',
          'For refusing passage',
          'For attacking Israel'
        ],
        correctAnswer: 'For their sin at Peor',
        explanation: 'Numbers 31:2-3 (with 25:1-3 context) says, “…vengeance… Midianites…” for Peor’s idolatry.'
      },
      {
        id: 'num31-q2',
        question: 'How many men from each tribe were sent to fight Midian?',
        options: [
          '500',
          '1,000',
          '2,000',
          '3,000'
        ],
        correctAnswer: '1,000',
        explanation: 'Numbers 31:4 states, “…a thousand from each tribe…”'
      },
      {
        id: 'num31-q3',
        question: 'Who led the army against Midian?',
        options: [
          'Moses',
          'Joshua',
          'Phinehas',
          'Eleazar'
        ],
        correctAnswer: 'Phinehas',
        explanation: 'Numbers 31:6 says, “…Phinehas… with the holy vessels…”'
      },
      {
        id: 'num31-q4',
        question: 'What was done with the Midianite spoils?',
        options: [
          'Burned',
          'Divided among warriors, people, and Levites',
          'Given to Moses',
          'Left behind'
        ],
        correctAnswer: 'Divided among warriors, people, and Levites',
        explanation: 'Numbers 31:27-28 says, “…divide… warriors… congregation… tribute… Levites…”'
      },
      {
        id: 'num31-q5',
        question: 'How many Israelite soldiers died in the battle?',
        options: [
          'None',
          '50',
          '100',
          '1,000'
        ],
        correctAnswer: 'None',
        explanation: 'Numbers 31:49 states, “…not a man of us is missing…”'
      }
    ],
    key_verse: 'Numbers 31:2',
    key_verse_text: "Avenge the people of Israel on the Midianites. Afterward you shall be gathered to your people.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-32',
    bookId: 'numbers',
    chapter: 32,
    title: 'Reuben and Gad’s Request',
    questions: [
      {
        id: 'num32-q1',
        question: 'Which tribes asked to settle east of the Jordan?',
        options: [
          'Judah and Simeon',
          'Reuben and Gad',
          'Manasseh and Ephraim',
          'Dan and Asher'
        ],
        correctAnswer: 'Reuben and Gad',
        explanation: 'Numbers 32:1 says, “…Reubenites and… Gadites… said…”'
      },
      {
        id: 'num32-q2',
        question: 'Why did they want the land east of the Jordan?',
        options: [
          'It was fertile for crops',
          'It was suitable for livestock',
          'It was near water',
          'It was undefended'
        ],
        correctAnswer: 'It was suitable for livestock',
        explanation: 'Numbers 32:1 states, “…the land… is a land for livestock… we have livestock…”'
      },
      {
        id: 'num32-q3',
        question: 'What did Moses initially fear about their request?',
        options: [
          'They would attack Israel',
          'They would discourage others from entering Canaan',
          'They would lose the land',
          'They would rebel'
        ],
        correctAnswer: 'They would discourage others from entering Canaan',
        explanation: 'Numbers 32:7 says, “Why will you discourage… Israel from going over…?”'
      },
      {
        id: 'num32-q4',
        question: 'What condition did Reuben and Gad agree to?',
        options: [
          'Pay a tribute',
          'Fight with Israel until Canaan was conquered',
          'Leave their families behind',
          'Build cities first'
        ],
        correctAnswer: 'Fight with Israel until Canaan was conquered',
        explanation: 'Numbers 32:17-18 says, “…armed… until… not return until… possession…”'
      },
      {
        id: 'num32-q5',
        question: 'Which half-tribe also received land east of the Jordan?',
        options: [
          'Half of Manasseh',
          'Half of Ephraim',
          'Half of Judah',
          'Half of Levi'
        ],
        correctAnswer: 'Half of Manasseh',
        explanation: 'Numbers 32:33 states, “…half the tribe of Manasseh…”'
      }
    ],
    key_verse: 'Numbers 32:23',
    key_verse_text: "But if you will not do so, behold, you have sinned against the Lord, and be sure your sin will find you out.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-33',
    bookId: 'numbers',
    chapter: 33,
    title: 'Stages of Israel’s Journey',
    questions: [
      {
        id: 'num33-q1',
        question: 'Where did Israel begin their journey after the Passover?',
        options: [
          'Sinai',
          'Rameses',
          'Kadesh',
          'Succoth'
        ],
        correctAnswer: 'Rameses',
        explanation: 'Numbers 33:3 says, “They set out from Rameses…”'
      },
      {
        id: 'num33-q2',
        question: 'What did God command Moses to record?',
        options: [
          'The battles',
          'The stages of their journey',
          'The offerings',
          'The census'
        ],
        correctAnswer: 'The stages of their journey',
        explanation: 'Numbers 33:2 states, “Moses wrote down their starting places… by stages…”'
      },
      {
        id: 'num33-q3',
        question: 'Where did Israel camp after crossing the Red Sea?',
        options: [
          'Marah',
          'Sinai',
          'Etham',
          'Pi-hahiroth'
        ],
        correctAnswer: 'Marah',
        explanation: 'Numbers 33:8-9 says, “…crossed… Red Sea… Marah…”'
      },
      {
        id: 'num33-q4',
        question: 'Where did Aaron die according to the journey list?',
        options: [
          'Mount Hor',
          'Mount Pisgah',
          'Mount Sinai',
          'Kadesh'
        ],
        correctAnswer: 'Mount Hor',
        explanation: 'Numbers 33:38 states, “…Aaron… died… Mount Hor…”'
      },
      {
        id: 'num33-q5',
        question: 'What did God command Israel to do to the Canaanites?',
        options: [
          'Make peace',
          'Drive them out and destroy their idols',
          'Enslave them',
          'Trade with them'
        ],
        correctAnswer: 'Drive them out and destroy their idols',
        explanation: 'Numbers 33:52 says, “…drive out… destroy… figured stones… images…”'
      }
    ],
    key_verse: 'Numbers 33:55',
    key_verse_text: "But if you do not drive out the inhabitants… those you let remain shall be as barbs in your eyes and thorns in your sides…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-34',
    bookId: 'numbers',
    chapter: 34,
    title: 'Boundaries of Canaan',
    questions: [
      {
        id: 'num34-q1',
        question: 'Who did God appoint to divide the land among the tribes?',
        options: [
          'Moses and Aaron',
          'Eleazar and Joshua',
          'Caleb and Phinehas',
          'The tribal leaders'
        ],
        correctAnswer: 'Eleazar and Joshua',
        explanation: 'Numbers 34:17 says, “…Eleazar… Joshua… shall divide…”'
      },
      {
        id: 'num34-q2',
        question: 'What was the southern boundary of Canaan near?',
        options: [
          'The Salt Sea',
          'The Red Sea',
          'The Jordan River',
          'Mount Hor'
        ],
        correctAnswer: 'The Salt Sea',
        explanation: 'Numbers 34:3 states, “…southern… Salt Sea…” (Dead Sea).'
      },
      {
        id: 'num34-q3',
        question: 'What formed the eastern boundary of the land?',
        options: [
          'The Mediterranean',
          'The Jordan River and Sea of Chinnereth',
          'Mount Pisgah',
          'The wilderness'
        ],
        correctAnswer: 'The Jordan River and Sea of Chinnereth',
        explanation: 'Numbers 34:11-12 says, “…Sea of Chinnereth… Jordan… Salt Sea…”'
      },
      {
        id: 'num34-q4',
        question: 'What was the western boundary of Canaan?',
        options: [
          'The Great Sea',
          'The Euphrates',
          'The Nile',
          'The desert'
        ],
        correctAnswer: 'The Great Sea',
        explanation: 'Numbers 34:6 states, “…Great Sea shall be your boundary…” (Mediterranean).'
      },
      {
        id: 'num34-q5',
        question: 'How many tribal leaders assisted in dividing the land?',
        options: [
          'Seven',
          'Ten',
          'Twelve',
          'Nine'
        ],
        correctAnswer: 'Ten',
        explanation: 'Numbers 34:18-29 lists one from each of nine and a half tribes (excluding Reuben, Gad, half-Manasseh), totaling ten.'
      }
    ],
    key_verse: 'Numbers 34:2',
    key_verse_text: "Command the people of Israel… This is the land that shall fall to you as an inheritance, the land of Canaan as defined by its borders.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-35',
    bookId: 'numbers',
    chapter: 35,
    title: 'Cities for Levites and Refuge',
    questions: [
      {
        id: 'num35-q1',
        question: 'How many cities were the Levites given from the tribes?',
        options: [
          '12',
          '24',
          '48',
          '60'
        ],
        correctAnswer: '48',
        explanation: 'Numbers 35:7 says, “…all the cities… forty-eight…”'
      },
      {
        id: 'num35-q2',
        question: 'How many of the Levite cities were cities of refuge?',
        options: [
          'Three',
          'Six',
          'Nine',
          'Twelve'
        ],
        correctAnswer: 'Six',
        explanation: 'Numbers 35:6 states, “…six cities of refuge…”'
      },
      {
        id: 'num35-q3',
        question: 'Who could flee to a city of refuge?',
        options: [
          'Anyone accused of murder',
          'One who killed unintentionally',
          'Thieves',
          'Rebels'
        ],
        correctAnswer: 'One who killed unintentionally',
        explanation: 'Numbers 35:11 says, “…who kills any person without intent…”'
      },
      {
        id: 'num35-q4',
        question: 'What happened to a manslayer if he left the city of refuge early?',
        options: [
          'Fined',
          'The avenger of blood could kill him',
          'Exiled',
          'Nothing'
        ],
        correctAnswer: 'The avenger of blood could kill him',
        explanation: 'Numbers 35:26-27 states, “…avenger… may kill… no guilt…”'
      },
      {
        id: 'num35-q5',
        question: 'When could a manslayer return home from a refuge city?',
        options: [
          'After a year',
          'After the high priest’s death',
          'After a trial',
          'After ten years'
        ],
        correctAnswer: 'After the high priest’s death',
        explanation: 'Numbers 35:28 says, “…until the death of the high priest…”'
      }
    ],
    key_verse: 'Numbers 35:33',
    key_verse_text: "You shall not pollute the land… Blood pollutes the land, and no atonement can be made… except by the blood of the one who shed it.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-36',
    bookId: 'numbers',
    chapter: 36,
    title: 'Inheritance of Zelophehad’s Daughters',
    questions: [
      {
        id: 'num36-q1',
        question: 'Who raised a concern about Zelophehad’s daughters’ inheritance?',
        options: [
          'The priests',
          'The heads of the tribe of Manasseh',
          'Moses’ family',
          'The Levites'
        ],
        correctAnswer: 'The heads of the tribe of Manasseh',
        explanation: 'Numbers 36:1 says, “…the heads of the fathers’ houses… of Manasseh… came near…”'
      },
      {
        id: 'num36-q2',
        question: 'What problem did they foresee with the daughters’ inheritance?',
        options: [
          'It would be lost to foreigners',
          'It might transfer to another tribe through marriage',
          'It would be too small',
          'It would burden the Levites'
        ],
        correctAnswer: 'It might transfer to another tribe through marriage',
        explanation: 'Numbers 36:3 states, “…if they are married… their inheritance will be taken… added to… another tribe…”'
      },
      {
        id: 'num36-q3',
        question: 'What solution did God command through Moses?',
        options: [
          'They must marry within their tribe',
          'They must not marry at all',
          'Their land goes to the priests',
          'They must divide it equally'
        ],
        correctAnswer: 'They must marry within their tribe',
        explanation: 'Numbers 36:6 says, “…let them marry… only… within… their father’s tribe…”'
      },
      {
        id: 'num36-q4',
        question: 'What ensured land stayed within tribes during the Jubilee?',
        options: [
          'It was sold back',
          'Inheritance remained with the original tribe',
          'It was redistributed',
          'The Levites reclaimed it'
        ],
        correctAnswer: 'Inheritance remained with the original tribe',
        explanation: 'Numbers 36:4, 7 states, “…inheritance… not be transferred… remain in the tribe…”'
      },
      {
        id: 'num36-q5',
        question: 'How did Zelophehad’s daughters respond to the ruling?',
        options: [
          'They rebelled',
          'They married within Manasseh',
          'They gave up their land',
          'They appealed to Joshua'
        ],
        correctAnswer: 'They married within Manasseh',
        explanation: 'Numbers 36:11-12 says, “…married sons of their father’s brothers… within… Manasseh…”'
      }
    ],
    key_verse: 'Numbers 36:7',
    key_verse_text: "The inheritance of the people of Israel shall not be transferred from one tribe to another, for every one… shall hold to the inheritance of… his fathers.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  }
];