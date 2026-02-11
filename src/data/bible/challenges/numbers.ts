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
        options: ['At the Red Sea', 'In the wilderness of Sinai, in the tent of meeting', 'On Mount Nebo', 'In Egypt'],
        correctAnswer: 'In the wilderness of Sinai, in the tent of meeting',
        explanation: 'Numbers 1:1 (ESV): "The Lord spoke to Moses in the wilderness of Sinai, in the tent of meeting..."',
        difficulty: 'easy'
      },
      {
        id: 'num1-q2',
        question: 'Who was to be counted in the census?',
        options: ['All people', 'Every male from twenty years old and upward, able to go to war', 'Only the Levites', 'Only the firstborn'],
        correctAnswer: 'Every male from twenty years old and upward, able to go to war',
        explanation: 'Numbers 1:3 (ESV): "You and Aaron shall list them... every male from twenty years old and upward... able to go to war."',
        difficulty: 'easy'
      },
      {
        id: 'num1-q3',
        question: 'Which tribe was NOT listed in the census of fighting men?',
        options: ['Judah', 'Levi', 'Ephraim', 'Benjamin'],
        correctAnswer: 'Levi',
        explanation: 'Numbers 1:47 (ESV): "But the Levites were not listed along with them by their ancestral tribe."',
        difficulty: 'easy'
      },
      {
        id: 'num1-q4',
        question: 'Who assisted Moses and Aaron in the census?',
        options: ['Joshua only', 'A man from each tribe, each being the head of the house of his fathers', 'The priests', 'The seventy elders'],
        correctAnswer: 'A man from each tribe, each being the head of the house of his fathers',
        explanation: 'Numbers 1:4 (ESV): "And there shall be with you a man from each tribe, each being the head of the house of his fathers."',
        difficulty: 'easy'
      },
      {
        id: 'num1-q5',
        question: 'What was the total number of men able to go to war?',
        options: ['603,550', '500,000', '140,000', '1,000,000'],
        correctAnswer: '603,550',
        explanation: 'Numbers 1:46 (ESV): "All those listed were 603,550."',
        difficulty: 'easy'
      },
      {
        id: 'num1-q6',
        question: 'Which tribe had the largest number of men?',
        options: ['Judah', 'Dan', 'Reuben', 'Ephraim'],
        correctAnswer: 'Judah',
        explanation: 'Numbers 1:27 (ESV): "Those listed of the tribe of Judah were 74,600." (Checking other numbers confirms Judah is largest).',
        difficulty: 'medium'
      },
      {
        id: 'num1-q7',
        question: 'Which tribe had the smallest number of men?',
        options: ['Manasseh', 'Benjamin', 'Gad', 'Simwon'],
        correctAnswer: 'Manasseh',
        explanation: 'Numbers 1:35 (ESV): "Those listed of the tribe of Manasseh were 32,200." (Compare: Benjamin 35,400 etc).',
        difficulty: 'medium'
      },
      {
        id: 'num1-q8',
        question: 'When was this census taken relative to the exodus?',
        options: ['On the first day of the second month, in the second year', 'Forty years later', 'Immediately after crossing the Red Sea', 'Before leaving Egypt'],
        correctAnswer: 'On the first day of the second month, in the second year',
        explanation: 'Numbers 1:1 (ESV): "On the first day of the second month, in the second year after they had come out of the land of Egypt."',
        difficulty: 'medium'
      },
      {
        id: 'num1-q9',
        question: 'Why were the Levites not numbered with the rest?',
        options: ['They were too small', 'They were appointed over the tabernacle of the testimony', 'They were sick', 'They refused'],
        correctAnswer: 'They were appointed over the tabernacle of the testimony',
        explanation: 'Numbers 1:50 (ESV): "But appoint the Levites over the tabernacle of the testimony... they are to camp around the tabernacle."',
        difficulty: 'medium'
      },
      {
        id: 'num1-q10',
        question: 'What happens if a stranger comes near the tabernacle?',
        options: ['He shall be welcomed', 'He shall be put to death', 'He shall wash', 'He shall pay a fee'],
        correctAnswer: 'He shall be put to death',
        explanation: 'Numbers 1:51 (ESV): "And if any outsider comes near, he shall be put to death."',
        difficulty: 'medium'
      },
      {
        id: 'num1-q11',
        question: 'Who was the head of the tribe of Judah assisting Moses?',
        options: ['Nahshon the son of Amminadab', 'Caleb', 'Hur', 'Eleazar'],
        correctAnswer: 'Nahshon the son of Amminadab',
        explanation: 'Numbers 1:7 (ESV): "From Judah, Nahshon the son of Amminadab."',
        difficulty: 'hard'
      },
      {
        id: 'num1-q12',
        question: 'How many men were in the tribe of Reuben?',
        options: ['46,500', '59,300', '41,500', '74,600'],
        correctAnswer: '46,500',
        explanation: 'Numbers 1:21 (ESV): "Those listed of the tribe of Reuben were 46,500."',
        difficulty: 'hard'
      },
      {
        id: 'num1-q13',
        question: 'Who was the head of the tribe of Ephraim?',
        options: ['Elishama the son of Ammihud', 'Nun', 'Joshua', 'Gamaliel'],
        correctAnswer: 'Elishama the son of Ammihud',
        explanation: 'Numbers 1:10 (ESV): "From the sons of Ephraim, Elishama the son of Ammihud."',
        difficulty: 'hard'
      },
      {
        id: 'num1-q14',
        question: 'What specific age criterion was used for the census?',
        options: ['20 years old and upward', '30 years old and upward', '18 years old and upward', '25 years old and upward'],
        correctAnswer: '20 years old and upward',
        explanation: 'Numbers 1:3 (ESV): "From twenty years old and upward."',
        difficulty: 'hard'
      },
      {
        id: 'num1-q15',
        question: 'The Levites were to camp in what formation relative to the tabernacle?',
        options: ['Far away', 'Around the tabernacle', 'Only on the east', 'Only on the west'],
        correctAnswer: 'Around the tabernacle',
        explanation: 'Numbers 1:53 (ESV): "But the Levites shall camp around the tabernacle of the testimony, so that there may be no wrath..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 1:2-3',
    key_verse_text: "Take a census of all the congregation of the people of Israel, by clans, by fathers' houses... every male from twenty years old and upward, all in Israel who are able to go to war.",
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
        question: 'Which camp was to set out first?',
        options: ['The camp of Judah', 'The camp of Reuben', 'The camp of Ephraim', 'The camp of Dan'],
        correctAnswer: 'The camp of Judah',
        explanation: 'Numbers 2:9 (ESV): "They shall set out first on the march." (referring to Judah camp).',
        difficulty: 'easy'
      },
      {
        id: 'num2-q2',
        question: 'Which side of the tabernacle did Judah, Issachar, and Zebulun camp?',
        options: ['East side', 'South side', 'West side', 'North side'],
        correctAnswer: 'East side',
        explanation: 'Numbers 2:3 (ESV): "Those to camp on the east side... were of the standard of the camp of Judah."',
        difficulty: 'easy'
      },
      {
        id: 'num2-q3',
        question: 'Who camped on the south side?',
        options: ['Reuben, Simeon, Gad', 'Ephraim, Manasseh, Benjamin', 'Dan, Asher, Naphtali', 'Judah, Issachar, Zebulun'],
        correctAnswer: 'Reuben, Simeon, Gad',
        explanation: 'Numbers 2:10 (ESV): "On the south side shall be the standard of the camp of Reuben..."',
        difficulty: 'easy'
      },
      {
        id: 'num2-q4',
        question: 'Where was the Tent of Meeting located relative to the camps?',
        options: ['At the front', 'In the midst of the camps', 'Outside the camp', 'At the rear'],
        correctAnswer: 'In the midst of the camps',
        explanation: 'Numbers 2:17 (ESV): "Then the tent of meeting shall set out, with the camp of the Levites in the midst of the camps."',
        difficulty: 'easy'
      },
      {
        id: 'num2-q5',
        question: 'Who camped on the west side?',
        options: ['The standard of the camp of Ephraim', 'Judah', 'Dan', 'Reuben'],
        correctAnswer: 'The standard of the camp of Ephraim',
        explanation: 'Numbers 2:18 (ESV): "On the west side shall be the standard of the camp of Ephraim..."',
        difficulty: 'easy'
      },
      {
        id: 'num2-q6',
        question: 'Which tribe was the leader of the north camp?',
        options: ['Dan', 'Asher', 'Naphtali', 'Benjamin'],
        correctAnswer: 'Dan',
        explanation: 'Numbers 2:25 (ESV): "On the north side shall be the standard of the camp of Dan..."',
        difficulty: 'medium'
      },
      {
        id: 'num2-q7',
        question: 'How were the Israelites to camp?',
        options: ['Wherever they wanted', 'Each by his own standard, with the banners of their fathers\' houses', 'By age', 'By wealth'],
        correctAnswer: 'Each by his own standard, with the banners of their fathers\' houses',
        explanation: 'Numbers 2:2 (ESV): "The people of Israel shall camp each by his own standard, with the banners of their fathers\' houses."',
        difficulty: 'medium'
      },
      {
        id: 'num2-q8',
        question: 'What was the total number of the camp of Ephraim (West)?',
        options: ['108,100', '186,400', '151,450', '157,600'],
        correctAnswer: '108,100',
        explanation: 'Numbers 2:24 (ESV): "All those listed of the camp of Ephraim... were 108,100."',
        difficulty: 'medium'
      },
      {
        id: 'num2-q9',
        question: 'Which camp set out last ("rear guard")?',
        options: ['Judah', 'Reuben', 'Ephraim', 'Dan'],
        correctAnswer: 'Dan',
        explanation: 'Numbers 2:31 (ESV): "They shall set out last, standard by standard." (referring to Dan camp).',
        difficulty: 'medium'
      },
      {
        id: 'num2-q10',
        question: 'What was the total number of the camp of Reuben (South)?',
        options: ['151,450', '186,400', '108,100', '50,000'],
        correctAnswer: '151,450',
        explanation: 'Numbers 2:16 (ESV): "All those listed of the camp of Reuben... were 151,450."',
        difficulty: 'medium'
      },
      {
        id: 'num2-q11',
        question: 'The camp of the Levites set out after which camp?',
        options: ['Judah', 'Reuben', 'Ephraim', 'Dan'],
        correctAnswer: 'Reuben',
        explanation: 'Numbers 2:17 follows the description of Reuben setting out second (v16). So Levites were in the middle.',
        difficulty: 'hard'
      },
      {
        id: 'num2-q12',
        question: 'Which tribes were with Ephraim on the west?',
        options: ['Manasseh and Benjamin', 'Asher and Naphtali', 'Simeon and Gad', 'Issachar and Zebulun'],
        correctAnswer: 'Manasseh and Benjamin',
        explanation: 'Numbers 2:20, 22 (ESV): "Next to him... Manasseh... Then... Benjamin."',
        difficulty: 'hard'
      },
      {
        id: 'num2-q13',
        question: 'What was the total number of the camp of Dan (North)?',
        options: ['157,600', '200,000', '100,000', '180,000'],
        correctAnswer: '157,600',
        explanation: 'Numbers 2:31 (ESV): "All those listed of the camp of Dan were 157,600."',
        difficulty: 'hard'
      },
      {
        id: 'num2-q14',
        question: 'How did they camp relative to the Tent of Meeting?',
        options: ['Facing it on every side', 'Backs to it', 'Only East', 'Only North'],
        correctAnswer: 'Facing it on every side',
        explanation: 'Numbers 2:2 (ESV): "They shall camp facing the tent of meeting on every side."',
        difficulty: 'hard'
      },
      {
        id: 'num2-q15',
        question: 'Did the Levites have a standard mentioned in this chapter?',
        options: ['No, they were not listed among the camps', 'Yes, a lion', 'Yes, an eagle', 'Yes, a man'],
        correctAnswer: 'No, they were not listed among the camps',
        explanation: 'Numbers 2:33 (ESV): "But the Levites were not listed among the people of Israel, as the Lord commanded Moses."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 2:17',
    key_verse_text: "Then the tent of meeting shall set out, with the camp of the Levites in the midst of the camps; as they camp, so shall they set out, each in position, standard by standard.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-3',
    bookId: 'numbers',
    chapter: 3,
    title: 'Levites and Firstborn',
    questions: [
      {
        id: 'num3-q1',
        question: 'Who were the sons of Aaron?',
        options: ['Nadab, Abihu, Eleazar, Ithamar', 'Gershon, Kohath, Merari', 'Moses, Aaron, Miriam', 'Hophni, Phinehas'],
        correctAnswer: 'Nadab, Abihu, Eleazar, Ithamar',
        explanation: 'Numbers 3:2 (ESV): "These are the names of the sons of Aaron: Nadab the firstborn, and Abihu, Eleazar, and Ithamar."',
        difficulty: 'easy'
      },
      {
        id: 'num3-q2',
        question: 'What happened to Nadab and Abihu?',
        options: ['They died before the Lord when they offered unauthorized fire', 'They became high priests', 'They led a rebellion', 'They lived long lives'],
        correctAnswer: 'They died before the Lord when they offered unauthorized fire',
        explanation: 'Numbers 3:4 (ESV): "But Nadab and Abihu died before the Lord when they offered unauthorized fire..."',
        difficulty: 'easy'
      },
      {
        id: 'num3-q3',
        question: 'Who was given to Aaron and his sons to assist them?',
        options: ['The tribe of Levi', 'The tribe of Judah', 'Foreign slaves', 'The Gibeonites'],
        correctAnswer: 'The tribe of Levi',
        explanation: 'Numbers 3:6-7 (ESV): "Bring the tribe of Levi near... to minister to him."',
        difficulty: 'easy'
      },
      {
        id: 'num3-q4',
        question: 'The Levites were taken in place of whom?',
        options: ['All the firstborn among the people of Israel', 'The warriors', 'The elders', 'The kings'],
        correctAnswer: 'All the firstborn among the people of Israel',
        explanation: 'Numbers 3:12 (ESV): "Behold, I have taken the Levites... instead of every firstborn who opens the womb..."',
        difficulty: 'easy'
      },
      {
        id: 'num3-q5',
        question: 'Who camped in front of the tabernacle on the east?',
        options: ['Moses and Aaron and his sons', 'Gershon', 'Kohath', 'Merari'],
        correctAnswer: 'Moses and Aaron and his sons',
        explanation: 'Numbers 3:38 (ESV): "Those who were to camp before the tabernacle on the east... were Moses and Aaron and his sons."',
        difficulty: 'easy'
      },
      {
        id: 'num3-q6',
        question: 'What was the specific duty of the Gershonites?',
        options: ['The tabernacle, the tent, the covering, the screen', 'The ark', 'The frames and pillars', 'The altar'],
        correctAnswer: 'The tabernacle, the tent, the covering, the screen',
        explanation: 'Numbers 3:25 (ESV): "The guard duty... involved the tabernacle, the tent with its covering, the screen..."',
        difficulty: 'medium'
      },
      {
        id: 'num3-q7',
        question: 'What was the duty of the Kohathites?',
        options: ['The sanctuary vessels (ark, table, lampstand, altars)', 'The curtains', 'The pillars', 'The oil'],
        correctAnswer: 'The sanctuary vessels (ark, table, lampstand, altars)',
        explanation: 'Numbers 3:31 (ESV): "Their guard duty involved the ark, the table, the lampstand, the altars..."',
        difficulty: 'medium'
      },
      {
        id: 'num3-q8',
        question: 'What was the duty of the Merarites?',
        options: ['The frames, bars, pillars, and bases', 'The ark', 'The curtains', 'The fire'],
        correctAnswer: 'The frames, bars, pillars, and bases',
        explanation: 'Numbers 3:36 (ESV): "The appointed guard duty... involved the frames of the tabernacle, the bars, the pillars, the bases..."',
        difficulty: 'medium'
      },
      {
        id: 'num3-q9',
        question: 'What was total number of Levites aged one month and upward?',
        options: ['22,000', '600,000', '10,000', '50,000'],
        correctAnswer: '22,000',
        explanation: 'Numbers 3:39 (ESV): "All those listed... were 22,000."',
        difficulty: 'medium'
      },
      {
        id: 'num3-q10',
        question: 'How many firstborn males of Israel were there?',
        options: ['22,273', '22,000', '603,550', '30,000'],
        correctAnswer: '22,273',
        explanation: 'Numbers 3:43 (ESV): "All the firstborn males... were 22,273."',
        difficulty: 'medium'
      },
      {
        id: 'num3-q11',
        question: 'Since the firstborn outnumbered the Levites by 273, what was done?',
        options: ['Redemption money (5 shekels each) was paid', 'More Levites were born', 'They were killed', 'They served anyway'],
        correctAnswer: 'Redemption money (5 shekels each) was paid',
        explanation: 'Numbers 3:46-47 (ESV): "And for the redemption of the 273... you shall take five shekels per head."',
        difficulty: 'hard'
      },
      {
        id: 'num3-q12',
        question: 'Who was the chief of the leaders of the Levites?',
        options: ['Eleazar the son of Aaron', 'Ithamar', 'Korah', 'Gershon'],
        correctAnswer: 'Eleazar the son of Aaron',
        explanation: 'Numbers 3:32 (ESV): "Eleazar the son of Aaron the priest was to be chief over the chiefs of the Levites."',
        difficulty: 'hard'
      },
      {
        id: 'num3-q13',
        question: 'Where did the Kohathites camp?',
        options: ['South side', 'North side', 'West side', 'East side'],
        correctAnswer: 'South side',
        explanation: 'Numbers 3:29 (ESV): "The clans of the sons of Kohath were to camp on the south side."',
        difficulty: 'hard'
      },
      {
        id: 'num3-q14',
        question: 'Where did the Gershonites camp?',
        options: ['West side', 'South side', 'North side', 'East side'],
        correctAnswer: 'West side',
        explanation: 'Numbers 3:23 (ESV): "The clans of the Gershonites were to camp behind the tabernacle on the west."',
        difficulty: 'hard'
      },
      {
        id: 'num3-q15',
        question: 'Where did the Merarites camp?',
        options: ['North side', 'South side', 'East side', 'West side'],
        correctAnswer: 'North side',
        explanation: 'Numbers 3:35 (ESV): "They were to camp on the north side of the tabernacle."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 3:12',
    key_verse_text: "Behold, I have taken the Levites from among the people of Israel instead of every firstborn who opens the womb among the people of Israel. The Levites shall be mine.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-4',
    bookId: 'numbers',
    chapter: 4,
    title: 'Duties of the Clans',
    questions: [
      {
        id: 'num4-q1',
        question: 'Which age group of Levites was counted for the work in the tent of meeting?',
        options: ['From thirty years old up to fifty years old', 'From twenty years old', 'From twenty-five years old', 'From one month old'],
        correctAnswer: 'From thirty years old up to fifty years old',
        explanation: 'Numbers 4:3 (ESV): "From thirty years old up to fifty years old, all who can come on duty, to do the work in the tent of meeting."',
        difficulty: 'easy'
      },
      {
        id: 'num4-q2',
        question: 'Who was responsible for covering the holy objects before transport?',
        options: ['Aaron and his sons', 'The Kohathites', 'The Gershonites', 'Moses only'],
        correctAnswer: 'Aaron and his sons',
        explanation: 'Numbers 4:5 (ESV): "Aaron and his sons shall go in and take down the veil... and cover the ark..."',
        difficulty: 'easy'
      },
      {
        id: 'num4-q3',
        question: 'What happened if the Kohathites touched the holy things directly?',
        options: ['They would die', 'They would be unclean', 'They would be blessed', 'Nothing'],
        correctAnswer: 'They would die',
        explanation: 'Numbers 4:15 (ESV): "But they must not touch the holy things, lest they die."',
        difficulty: 'easy'
      },
      {
        id: 'num4-q4',
        question: 'What color cloth was spread over the Ark of the Testimony?',
        options: ['Blue', 'Purple', 'Scarlet', 'White'],
        correctAnswer: 'Blue',
        explanation: 'Numbers 4:6 (ESV): "And spread a cloth of all blue over it."',
        difficulty: 'easy'
      },
      {
        id: 'num4-q5',
        question: 'Which clan carried the most holy things (ark, table, etc.)?',
        options: ['Kohath', 'Gershon', 'Merari', 'Judah'],
        correctAnswer: 'Kohath',
        explanation: 'Numbers 4:4 (ESV): "The service of the sons of Kohath... is the most holy things."',
        difficulty: 'easy'
      },
      {
        id: 'num4-q6',
        question: 'What cloth was used for the altar of burnt offering?',
        options: ['Purple', 'Blue', 'Scarlet', 'Gold'],
        correctAnswer: 'Purple',
        explanation: 'Numbers 4:13 (ESV): "They shall take away the ashes from the altar and spread a purple cloth over it."',
        difficulty: 'medium'
      },
      {
        id: 'num4-q7',
        question: 'What cloth was used for the table of showbread?',
        options: ['Blue, then scarlet', 'Purple', 'White', 'Black'],
        correctAnswer: 'Blue, then scarlet',
        explanation: 'Numbers 4:7-8: Blue cloth first, then scarlet cloth over the utensils.',
        difficulty: 'medium'
      },
      {
        id: 'num4-q8',
        question: 'Who supervised the Eleazar son of Aaron?',
        options: ['The oil, incense, grain offering, and anointing oil', 'The curtains', 'The frames', 'The numbering'],
        correctAnswer: 'The oil, incense, grain offering, and anointing oil',
        explanation: 'Numbers 4:16 (ESV): "And Eleazar... shall have charge of the oil for the light, the fragrant incense, the regular grain offering, and the anointing oil..."',
        difficulty: 'medium'
      },
      {
        id: 'num4-q9',
        question: 'Who supervised the Merarites and Gershonites?',
        options: ['Ithamar the son of Aaron', 'Eleazar', 'Joshua', 'Phinehas'],
        correctAnswer: 'Ithamar the son of Aaron',
        explanation: 'Numbers 4:28, 33 (ESV): "Under the direction of Ithamar the son of Aaron the priest."',
        difficulty: 'medium'
      },
      {
        id: 'num4-q10',
        question: 'How many men were numbered in total for the service (30-50 years old)?',
        options: ['8,580', '22,000', '2,750', '600,000'],
        correctAnswer: '8,580',
        explanation: 'Numbers 4:48 (ESV): "Those listed... were 8,580."',
        difficulty: 'hard'
      },
      {
        id: 'num4-q11',
        question: 'What was the penalty for looking at the holy things even for a moment?',
        options: ['Death', 'Blindness', 'Leprosy', 'Exile'],
        correctAnswer: 'Death',
        explanation: 'Numbers 4:20 (ESV): "But they shall not go in to look on the holy things even for a moment, lest they die."',
        difficulty: 'hard'
      },
      {
        id: 'num4-q12',
        question: 'What covered the blue cloth on the Ark?',
        options: ['A covering of goatskin', 'A scarlet cloth', 'Badger skin', 'Linen'],
        correctAnswer: 'A covering of goatskin',
        explanation: 'Numbers 4:6 (ESV): "Then they shall put on it a covering of goatskin..."',
        difficulty: 'hard'
      },
      {
        id: 'num4-q13',
        question: 'What cloth covered the lampstand?',
        options: ['Blue', 'Purple', 'Red', 'White'],
        correctAnswer: 'Blue',
        explanation: 'Numbers 4:9 (ESV): "And they shall take a blue cloth and cover the lampstand..."',
        difficulty: 'hard'
      },
      {
        id: 'num4-q14',
        question: 'Which group carried the heavy frames and bases using wagons (implied from ch 7)?',
        options: ['Merari', 'Kohath', 'Gershon', 'Priests'],
        correctAnswer: 'Merari',
        explanation: 'Numbers 4:31-32 describes their load (frames, pillars, bases).',
        difficulty: 'hard'
      },
      {
        id: 'num4-q15',
        question: 'Why did Kohath not get wagons?',
        options: ['Because the service of the holy things belonged to them; they were to carry them on their shoulders', 'They were strong', 'They were punished', 'There weren\'t enough'],
        correctAnswer: 'Because the service of the holy things belonged to them; they were to carry them on their shoulders',
        explanation: 'Numbers 7:9 (referenced here for context of their duty) states this reason.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 4:15',
    key_verse_text: "And when Aaron and his sons have finished covering the sanctuary... the sons of Kohath shall come to carry these, but they must not touch the holy things, lest they die.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-5',
    bookId: 'numbers',
    chapter: 5,
    title: 'Purity in the Camp',
    questions: [
      {
        id: 'num5-q1',
        question: 'Who was to be put out of the camp?',
        options: ['Lepers, those with a discharge, and those unclean by the dead', 'Foreigners', 'Sinners', 'The elderly'],
        correctAnswer: 'Lepers, those with a discharge, and those unclean by the dead',
        explanation: 'Numbers 5:2 (ESV): "Put out of the camp everyone who is leprous or has a discharge and all who are unclean through contact with the dead."',
        difficulty: 'easy'
      },
      {
        id: 'num5-q2',
        question: 'If a man or woman commits a sin against another, what must they do?',
        options: ['Confess and make restitution', 'Hide it', 'Bring only a sacrifice', 'Pay a fine to the judge'],
        correctAnswer: 'Confess and make restitution',
        explanation: 'Numbers 5:7 (ESV): "He shall confess his sin... and he shall make full restitution for his wrong."',
        difficulty: 'easy'
      },
      {
        id: 'num5-q3',
        question: 'How much must be added to the restitution?',
        options: ['A fifth', 'A tenth', 'Double', 'Half'],
        correctAnswer: 'A fifth',
        explanation: 'Numbers 5:7 (ESV): "Adding a fifth to it and giving it to him to whom he did the wrong."',
        difficulty: 'easy'
      },
      {
        id: 'num5-q4',
        question: 'What is the "law of jealousy" concerning?',
        options: ['A husband suspecting his wife of adultery', 'A business dispute', 'Envy between brothers', 'Nations at war'],
        correctAnswer: 'A husband suspecting his wife of adultery',
        explanation: 'Numbers 5:14 (ESV): "And if the spirit of jealousy comes over him and he is jealous of his wife..."',
        difficulty: 'easy'
      },
      {
        id: 'num5-q5',
        question: 'Who performs the ritual for the suspected wife?',
        options: ['The priest', 'The husband', 'The judge', 'Her father'],
        correctAnswer: 'The priest',
        explanation: 'Numbers 5:15 (ESV): "Then the man shall bring his wife to the priest..."',
        difficulty: 'easy'
      },
      {
        id: 'num5-q6',
        question: 'What water is used in the test?',
        options: ['Holy water in an earthenware vessel', 'River water', 'Rain water', 'Wine'],
        correctAnswer: 'Holy water in an earthenware vessel',
        explanation: 'Numbers 5:17 (ESV): "And the priest shall take holy water in an earthenware vessel..."',
        difficulty: 'medium'
      },
      {
        id: 'num5-q7',
        question: 'What is mixed into the water?',
        options: ['Dust from the floor of the tabernacle', 'Blood', 'Oil', 'Ashes'],
        correctAnswer: 'Dust from the floor of the tabernacle',
        explanation: 'Numbers 5:17 (ESV): "And take some of the dust that is on the floor of the tabernacle and put it into the water."',
        difficulty: 'medium'
      },
      {
        id: 'num5-q8',
        question: 'If the woman is guilty, what happens when she drinks?',
        options: ['Her womb shall swell and her thigh shall fall away', 'She dies instantly', 'She becomes leprous', 'Nothing'],
        correctAnswer: 'Her womb shall swell and her thigh shall fall away',
        explanation: 'Numbers 5:27 (ESV): "The water... shall enter into her and cause bitter pain, and her womb shall swell, and her thigh shall fall away."',
        difficulty: 'medium'
      },
      {
        id: 'num5-q9',
        question: 'If the woman is innocent, what happens?',
        options: ['She shall be free and shall conceive children', 'She is paid', 'She is honored', 'She divorces'],
        correctAnswer: 'She shall be free and shall conceive children',
        explanation: 'Numbers 5:28 (ESV): "But if the woman has not defiled herself... then she shall be free and shall conceive children."',
        difficulty: 'medium'
      },
      {
        id: 'num5-q10',
        question: 'What offering does the husband bring for his wife?',
        options: ['Barley meal without oil or frankincense', 'A lamb', 'Fine flour with oil', 'A dove'],
        correctAnswer: 'Barley meal without oil or frankincense',
        explanation: 'Numbers 5:15 (ESV): "A tenth of an ephah of barley flour. He shall pour no oil on it and put no frankincense on it."',
        difficulty: 'medium'
      },
      {
        id: 'num5-q11',
        question: 'Why is no oil or frankincense put on the offering?',
        options: ['Because it is a grain offering of jealousy, invoking a remembrance of iniquity', 'To save money', 'Because she is a woman', 'It was a rule for barley'],
        correctAnswer: 'Because it is a grain offering of jealousy, invoking a remembrance of iniquity',
        explanation: 'Numbers 5:15 (ESV): "For it is a grain offering of jealousy, a grain offering of remembrance, bringing iniquity to remembrance."',
        difficulty: 'hard'
      },
      {
        id: 'num5-q12',
        question: 'What did the priest wash into the water?',
        options: ['The written curses', 'His hands', 'The offering', 'The dust'],
        correctAnswer: 'The written curses',
        explanation: 'Numbers 5:23 (ESV): "Then the priest shall write these curses in a book and wash them off into the water of bitterness."',
        difficulty: 'hard'
      },
      {
        id: 'num5-q13',
        question: 'To whom does the restitution go if the man has no kinsman redeemer?',
        options: ['The Lord for the priest', 'The poor', 'The state', 'It is burned'],
        correctAnswer: 'The Lord for the priest',
        explanation: 'Numbers 5:8 (ESV): "If the man has no kinsman... the restitution... shall go to the Lord for the priest."',
        difficulty: 'hard'
      },
      {
        id: 'num5-q14',
        question: 'Did this law apply to women suspecting husbands?',
        options: ['No, only jealousy over a wife', 'Yes, both ways', 'Only for priests', 'Not specified'],
        correctAnswer: 'No, only jealousy over a wife',
        explanation: 'The text specifically specifies "if a man\'s wife goes astray" (v12) and "jealous of his wife" (v14).',
        difficulty: 'hard'
      },
      {
        id: 'num5-q15',
        question: 'Why purity in the camp?',
        options: ['That they may not defile their camp, in the midst of which I dwell', 'Hygiene', 'Military discipline', 'Aesthetics'],
        correctAnswer: 'That they may not defile their camp, in the midst of which I dwell',
        explanation: 'Numbers 5:3 (ESV): "That they may not defile their camp, in the midst of which I dwell."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 5:6-7',
    key_verse_text: "When a man or woman commits any of the sins that people commit by breaking faith with the Lord, and that person realizes his guilt, he shall confess his sin that he has committed.",
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
        question: 'Who could take a Nazirite vow?',
        options: ['Only men', 'Only Levites', 'Either a man or a woman', 'Only the firstborn'],
        correctAnswer: 'Either a man or a woman',
        explanation: 'Numbers 6:2 (ESV): "When either a man or a woman makes a special vow, the vow of a Nazirite..."',
        difficulty: 'easy'
      },
      {
        id: 'num6-q2',
        question: 'What was the Nazirite forbidden to consume?',
        options: ['Meat', 'Wine, strong drink, or anything from the grapevine', 'Bread', 'Honey'],
        correctAnswer: 'Wine, strong drink, or anything from the grapevine',
        explanation: 'Numbers 6:3-4 (ESV): "He shall separate himself from wine and strong drink... nothing that is produced by the grapevine..."',
        difficulty: 'easy'
      },
      {
        id: 'num6-q3',
        question: 'What rule applied to the Nazirite\'s hair?',
        options: ['It must be shaved', 'No razor shall touch his head', 'It must be braided', 'It must be covered'],
        correctAnswer: 'No razor shall touch his head',
        explanation: 'Numbers 6:5 (ESV): "All the days of his vow... no razor shall touch his head."',
        difficulty: 'easy'
      },
      {
        id: 'num6-q4',
        question: 'What was the restriction regarding dead bodies?',
        options: ['He shall not go near a dead body', 'He can only touch family', 'He must wash afterwards', 'He must burn incense'],
        correctAnswer: 'He shall not go near a dead body',
        explanation: 'Numbers 6:6 (ESV): "He shall not go near a dead body."',
        difficulty: 'easy'
      },
      {
        id: 'num6-q5',
        question: 'How does the priestly blessing begin?',
        options: ['The Lord be with you', 'The Lord bless you and keep you', 'Grace to you', 'Peace be upon you'],
        correctAnswer: 'The Lord bless you and keep you',
        explanation: 'Numbers 6:24 (ESV): "The Lord bless you and keep you..."',
        difficulty: 'easy'
      },
      {
        id: 'num6-q6',
        question: 'If a Nazirite suddenly becomes unclean by a sudden death nearby, what happens?',
        options: ['He is forgiven', 'He forfeits the previous days and starts over', 'He pays a fine', 'He is exiled'],
        correctAnswer: 'He forfeits the previous days and starts over',
        explanation: 'Numbers 6:12 (ESV): "And the previous period shall be void, because his separation was defiled."',
        difficulty: 'medium'
      },
      {
        id: 'num6-q7',
        question: 'What offering is made when recommencing the vow after defilement?',
        options: ['Two turtles doves and a male lamb', 'A bull', 'Grain only', 'Gold'],
        correctAnswer: 'Two turtles doves and a male lamb',
        explanation: 'Numbers 6:10, 12: Two birds for sin/burnt offering, and a lamb for a guilt offering.',
        difficulty: 'medium'
      },
      {
        id: 'num6-q8',
        question: 'What happens to the hair when the vow is completed?',
        options: ['It is kept', 'It is shaved and put on the fire under the peace offering', 'It is buried', 'It is sold'],
        correctAnswer: 'It is shaved and put on the fire under the peace offering',
        explanation: 'Numbers 6:18 (ESV): "And put it on the fire that is under the sacrifice of the peace offering."',
        difficulty: 'medium'
      },
      {
        id: 'num6-q9',
        question: 'What offerings are brought at the completion of the vow?',
        options: ['One lamb only', 'Male lamb, ewe lamb, ram, basket of unleavened bread', 'A goat', 'Money'],
        correctAnswer: 'Male lamb, ewe lamb, ram, basket of unleavened bread',
        explanation: 'Numbers 6:14 (ESV): "One male lamb... one ewe lamb... one ram... basket of unleavened bread..."',
        difficulty: 'medium'
      },
      {
        id: 'num6-q10',
        question: 'What does "Nazirite" mean?',
        options: ['Priest', 'Separated or consecrated one', 'Warrior', 'King'],
        correctAnswer: 'Separated or consecrated one',
        explanation: 'From the Hebrew root "nazar", meaning to separate. Context (v2): "to separate himself to the Lord."',
        difficulty: 'medium'
      },
      {
        id: 'num6-q11',
        question: '"The Lord make his face to...?"',
        options: ['Turn away', 'Shine upon you', 'Look at you', 'Frown'],
        correctAnswer: 'Shine upon you',
        explanation: 'Numbers 6:25 (ESV): "The Lord make his face to shine upon you and be gracious to you."',
        difficulty: 'medium'
      },
      {
        id: 'num6-q12',
        question: 'Even if his father or mother dies, can a Nazirite make himself unclean?',
        options: ['Yes', 'No', 'Only for father', 'Only for mother'],
        correctAnswer: 'No',
        explanation: 'Numbers 6:7 (ESV): "Not make himself unclean... for his father or for his mother... because his separation to God is on his head."',
        difficulty: 'hard'
      },
      {
        id: 'num6-q13',
        question: 'The priest waves which parts as a wave offering at the end?',
        options: ['The shoulder of the ram and bread', 'The head', 'The skin', 'The ashes'],
        correctAnswer: 'The shoulder of the ram and bread',
        explanation: 'Numbers 6:19-20 (ESV): "The shoulder of the ram... and one unleavened cake... priest shall wave them..."',
        difficulty: 'hard'
      },
      {
        id: 'num6-q14',
        question: 'Can a Nazirite drink wine after the vow is complete?',
        options: ['No, never', 'Yes', 'Only on festivals', 'Only water'],
        correctAnswer: 'Yes',
        explanation: 'Numbers 6:20 (ESV): "And after that the Nazirite may drink wine."',
        difficulty: 'hard'
      },
      {
        id: 'num6-q15',
        question: 'What is the purpose of placing God\'s name on the people?',
        options: ['So they will be rich', 'So I will bless them', 'So they will fear', 'So they will conquer'],
        correctAnswer: 'So I will bless them',
        explanation: 'Numbers 6:27 (ESV): "So shall they put my name upon the people of Israel, and I will bless them."',
        difficulty: 'hard'
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
    title: 'Dedication Offerings',
    questions: [
      {
        id: 'num7-q1',
        question: 'Who brought offerings on the day Moses finished setting up the tabernacle?',
        options: ['The chiefs of Israel, heads of fathers\' houses', 'The priests', 'The people generally', 'The foreigner'],
        correctAnswer: 'The chiefs of Israel, heads of fathers\' houses',
        explanation: 'Numbers 7:2 (ESV): "Then the chiefs of Israel, heads of their fathers\' houses... offered."',
        difficulty: 'easy'
      },
      {
        id: 'num7-q2',
        question: 'How many covered wagons and oxen were brought?',
        options: ['Six wagons and twelve oxen', 'Twelve wagons and twelve oxen', 'Two wagons and four oxen', 'Ten wagons'],
        correctAnswer: 'Six wagons and twelve oxen',
        explanation: 'Numbers 7:3 (ESV): "Six covered wagons and twelve oxen..."',
        difficulty: 'easy'
      },
      {
        id: 'num7-q3',
        question: 'Who received NO wagons or oxen?',
        options: ['Gershon', 'Merari', 'Kohath', 'Judah'],
        correctAnswer: 'Kohath',
        explanation: 'Numbers 7:9 (ESV): "But to the sons of Kohath he gave none, because they were charged with the service of the holy things that had to be carried on the shoulder."',
        difficulty: 'easy'
      },
      {
        id: 'num7-q4',
        question: 'How long did the leaders present their offerings?',
        options: ['Twelve days', 'Seven days', 'One day', 'Forty days'],
        correctAnswer: 'Twelve days',
        explanation: 'Numbers 7:11 (ESV): "One chief on one day, and another chief on another day..." (for 12 tribes).',
        difficulty: 'easy'
      },
      {
        id: 'num7-q5',
        question: 'Who offered on the first day?',
        options: ['Nahshon of Judah', 'Nethanel of Issachar', 'Eliab of Zebulun', 'Elishama of Ephraim'],
        correctAnswer: 'Nahshon of Judah',
        explanation: 'Numbers 7:12 (ESV): "He who offered his offering on the first day was Nahshon the son of Amminadab, of the tribe of Judah."',
        difficulty: 'easy'
      },
      {
        id: 'num7-q6',
        question: 'What metal were the dishes and basins made of?',
        options: ['Silver', 'Gold', 'Bronze', 'Iron'],
        correctAnswer: 'Silver',
        explanation: 'Numbers 7:13 (ESV): "One silver plate... one silver basin..."',
        difficulty: 'medium'
      },
      {
        id: 'num7-q7',
        question: 'What was the weight of the silver plate?',
        options: ['130 shekels', '70 shekels', '50 shekels', '100 shekels'],
        correctAnswer: '130 shekels',
        explanation: 'Numbers 7:13 (ESV): "One silver plate whose weight was 130 shekels..."',
        difficulty: 'medium'
      },
      {
        id: 'num7-q8',
        question: 'What was in the golden dish?',
        options: ['Incense', 'Oil', 'Flour', 'Blood'],
        correctAnswer: 'Incense',
        explanation: 'Numbers 7:14 (ESV): "One golden dish of ten shekels, full of incense."',
        difficulty: 'medium'
      },
      {
        id: 'num7-q9',
        question: 'What animals were offered for the peace offerings by each chief?',
        options: ['Two oxen, five rams, five male goats, five male lambs', 'One bull, one ram', 'Twelve oxen', 'One goat'],
        correctAnswer: 'Two oxen, five rams, five male goats, five male lambs',
        explanation: 'Numbers 7:17 (ESV): "And for the sacrifice of peace offerings, two oxen, five rams, five male goats, and five male lambs..."',
        difficulty: 'medium'
      },
      {
        id: 'num7-q10',
        question: 'Where did Moses hear the voice of God speaking to him?',
        options: ['From above the mercy seat that was on the ark of the testimony', 'From the mountain', 'From the burning bush', 'In a dream'],
        correctAnswer: 'From above the mercy seat that was on the ark of the testimony',
        explanation: 'Numbers 7:89 (ESV): "He heard the voice speaking to him from above the mercy seat... from between the two cherubim."',
        difficulty: 'medium'
      },
      {
        id: 'num7-q11',
        question: 'What was the total weight of the silver vessels?',
        options: ['2,400 shekels', '1,200 shekels', '500 shekels', '10,000 shekels'],
        correctAnswer: '2,400 shekels',
        explanation: 'Numbers 7:85 (ESV): "So that all the silver of the vessels was 2,400 shekels."',
        difficulty: 'hard'
      },
      {
        id: 'num7-q12',
        question: 'Who offered on the seventh day?',
        options: ['Elishama of Ephraim', 'Gamaliel of Manasseh', 'Abidan of Benjamin', 'Ahiezer of Dan'],
        correctAnswer: 'Elishama of Ephraim',
        explanation: 'Numbers 7:48 (ESV): "On the seventh day Elishama the son of Ammihud, the chief of the people of Ephraim."',
        difficulty: 'hard'
      },
      {
        id: 'num7-q13',
        question: 'Who offered on the twelfth day?',
        options: ['Ahira of Naphtali', 'Pagiel of Asher', 'Ahiezer of Dan', 'Nethanel of Issachar'],
        correctAnswer: 'Ahira of Naphtali',
        explanation: 'Numbers 7:78 (ESV): "On the twelfth day Ahira the son of Enan, the chief of the people of Naphtali."',
        difficulty: 'hard'
      },
      {
        id: 'num7-q14',
        question: 'What was the total number of gold dishes?',
        options: ['Twelve', 'Seven', 'Ten', 'Twenty-four'],
        correctAnswer: 'Twelve',
        explanation: 'Numbers 7:84, 86: "12 golden dishes."' ,
        difficulty: 'hard'
      },
      {
        id: 'num7-q15',
        question: 'From where did the voice speak to Moses?',
        options: ['Between the two cherubim', 'From the altar', 'From the door', 'From heaven'],
        correctAnswer: 'Between the two cherubim',
        explanation: 'Numbers 7:89 (ESV): "From between the two cherubim; and he spoke to him."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 7:89',
    key_verse_text: "And when Moses went into the tent of meeting to speak with the Lord, he heard the voice speaking to him from above the mercy seat that was on the ark of the testimony, not between the two cherubim.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-8',
    bookId: 'numbers',
    chapter: 8,
    title: 'Lamps and Levites',
    questions: [
      {
        id: 'num8-q1',
        question: 'How many lamps were on the lampstand?',
        options: ['Seven', 'Twelve', 'Three', 'Ten'],
        correctAnswer: 'Seven',
        explanation: 'Numbers 8:2 (ESV): "When you set up the lamps, the seven lamps shall give light in front of the lampstand."',
        difficulty: 'easy'
      },
      {
        id: 'num8-q2',
        question: 'What was the lampstand made of?',
        options: ['Hammered gold', 'Silver', 'Bronze', 'Acacia wood'],
        correctAnswer: 'Hammered gold',
        explanation: 'Numbers 8:4 (ESV): "And this was the workmanship of the lampstand, hammered work of gold."',
        difficulty: 'easy'
      },
      {
        id: 'num8-q3',
        question: 'Who was to be cleansed and offered to the Lord?',
        options: ['The Levites', 'The firstborn', 'The elders', 'The warriors'],
        correctAnswer: 'The Levites',
        explanation: 'Numbers 8:6 (ESV): "Take the Levites from among the people of Israel and cleanse them."',
        difficulty: 'easy'
      },
      {
        id: 'num8-q4',
        question: 'What was shaved off the Levites?',
        options: ['All their hair', 'Their beards only', 'Their heads only', 'None'],
        correctAnswer: 'All their hair',
        explanation: 'Numbers 8:7 (ESV): "And let them go with a razor over all their body..."',
        difficulty: 'easy'
      },
      {
        id: 'num8-q5',
        question: 'The Levites were presented as what kind of offering?',
        options: ['Wave offering', 'Burnt offering', 'Drink offering', 'Heave offering'],
        correctAnswer: 'Wave offering',
        explanation: 'Numbers 8:11 (ESV): "And Aaron shall offer the Levites... as a wave offering..."',
        difficulty: 'easy'
      },
      {
        id: 'num8-q6',
        question: 'Who laid their hands on the Levites?',
        options: ['The people of Israel', 'Moses only', 'Aaron only', 'The elders'],
        correctAnswer: 'The people of Israel',
        explanation: 'Numbers 8:10 (ESV): "And the people of Israel shall lay their hands on the Levites."',
        difficulty: 'medium'
      },
      {
        id: 'num8-q7',
        question: 'The Levites were taken instead of whom?',
        options: ['The firstborn of Israel', 'The priests', 'The warriors', 'The kings'],
        correctAnswer: 'The firstborn of Israel',
        explanation: 'Numbers 8:16 (ESV): "Instead of the firstborn of all the people of Israel, I have taken them for myself."',
        difficulty: 'medium'
      },
      {
        id: 'num8-q8',
        question: 'At what age did Levites begin their service in the tent of meeting (in this chapter)?',
        options: ['Twenty-five', 'Thirty', 'Twenty', 'Fifty'],
        correctAnswer: 'Twenty-five',
        explanation: 'Numbers 8:24 (ESV): "From twenty-five years old and upward they shall go in to perform the work..." (Note: differs from ch 4 which says 30; possibly different levels of service).',
        difficulty: 'medium'
      },
      {
        id: 'num8-q9',
        question: 'At what age did they withdraw from the duty of the work?',
        options: ['Fifty', 'Sixty', 'Forty', 'Seventy'],
        correctAnswer: 'Fifty',
        explanation: 'Numbers 8:25 (ESV): "And from the age of fifty years they shall withdraw from the duty of the work and serve no more."',
        difficulty: 'medium'
      },
      {
        id: 'num8-q10',
        question: 'Why were the Levites given to Aaron?',
        options: ['To do the service of the people and make atonement, that there be no plague', 'To carry his bags', 'To cook', 'To fight'],
        correctAnswer: 'To do the service of the people and make atonement, that there be no plague',
        explanation: 'Numbers 8:19 (ESV): "To do the service used... and to make atonement... that there may be no plague..."',
        difficulty: 'medium'
      },
      {
        id: 'num8-q11',
        question: 'After retirement (age 50), what could they do?',
        options: ['Minister to their brothers in the tent by keeping guard', 'Nothing', 'Go home', 'Become judges'],
        correctAnswer: 'Minister to their brothers in the tent by keeping guard',
        explanation: 'Numbers 8:26 (ESV): "They minister to their brothers in the tent of meeting by keeping guard, but they shall do no service."',
        difficulty: 'hard'
      },
      {
        id: 'num8-q12',
        question: 'What pattern did Moses follow for the lampstand?',
        options: ['The pattern that the Lord had shown Moses', 'Egyptian pattern', 'His own design', 'Aaron\'s idea'],
        correctAnswer: 'The pattern that the Lord had shown Moses',
        explanation: 'Numbers 8:4 (ESV): "According to the pattern that the Lord had shown Moses, so he made the lampstand."',
        difficulty: 'hard'
      },
      {
        id: 'num8-q13',
        question: 'When did God sanctify the firstborn for Himself?',
        options: ['On the day that He sought down all the firstborn in Egypt', 'At creation', 'At Sinai', 'At the golden calf'],
        correctAnswer: 'On the day that He sought down all the firstborn in Egypt',
        explanation: 'Numbers 8:17 (ESV): "On the day that I struck down all the firstborn in the land of Egypt I consecrated them for myself."',
        difficulty: 'hard'
      },
      {
        id: 'num8-q14',
        question: 'Who did the actual offering of the Levites before the Lord?',
        options: ['Aaron', 'Moses', 'Joshua', 'Eleazar'],
        correctAnswer: 'Aaron',
        explanation: 'Numbers 8:21 (ESV): "And Aaron offered them as a wave offering before the Lord."',
        difficulty: 'hard'
      },
      {
        id: 'num8-q15',
        question: 'What liquid was sprinkled on the Levites?',
        options: ['Water of purification', 'Oil', 'Blood', 'Wine'],
        correctAnswer: 'Water of purification',
        explanation: 'Numbers 8:7 (ESV): "Thus you shall do to them to cleanse them: sprinkle the water of purification upon them..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 8:14',
    key_verse_text: "Thus you shall separate the Levites from among the people of Israel, and the Levites shall be mine.",
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
        question: 'When was the Passover celebrated in the wilderness of Sinai?',
        options: ['The first month of the second year', 'The second month', 'The seventh month', 'The third year'],
        correctAnswer: 'The first month of the second year',
        explanation: 'Numbers 9:1 (ESV): "...in the first month of the second year after they had come out of the land of Egypt."',
        difficulty: 'easy'
      },
      {
        id: 'num9-q2',
        question: 'Why could some men not keep the Passover?',
        options: ['They were unclean through touching a dead body', 'They were sick', 'They were foreigners', 'They were traveling'],
        correctAnswer: 'They were unclean through touching a dead body',
        explanation: 'Numbers 9:6 (ESV): "And there were certain men who were unclean through touching a dead body, so that they could not keep the Passover."',
        difficulty: 'easy'
      },
      {
        id: 'num9-q3',
        question: 'When was the "Second Passover" allowed for those unclean or on a journey?',
        options: ['Fourteenth day of the second month', 'Fourteenth day of the first month', 'Fifteenth day of the seventh month', 'Tenth day'],
        correctAnswer: 'Fourteenth day of the second month',
        explanation: 'Numbers 9:11 (ESV): "In the second month on the fourteenth day at twilight they shall keep it."',
        difficulty: 'easy'
      },
      {
        id: 'num9-q4',
        question: 'What appeared over the tabernacle on the day it was set up?',
        options: ['The cloud', 'Fire only', 'Smoke', 'A rainbow'],
        correctAnswer: 'The cloud',
        explanation: 'Numbers 9:15 (ESV): "On the day that the tabernacle was set up, the cloud covered the tabernacle..."',
        difficulty: 'easy'
      },
      {
        id: 'num9-q5',
        question: 'How did the appearance change at night?',
        options: ['It was like the appearance of fire', 'It became dark', 'It disappeared', 'It turned blue'],
        correctAnswer: 'It was like the appearance of fire',
        explanation: 'Numbers 9:15 (ESV): "And at evening it was over the tabernacle like the appearance of fire until morning."',
        difficulty: 'easy'
      },
      {
        id: 'num9-q6',
        question: 'When did the people of Israel set out?',
        options: ['Whenever the cloud lifted', 'Every morning', 'When Moses said so', 'When the trumpet sounded only'],
        correctAnswer: 'Whenever the cloud lifted',
        explanation: 'Numbers 9:17 (ESV): "And whenever the cloud lifted from over the tent, after that the people of Israel set out..."',
        difficulty: 'medium'
      },
      {
        id: 'num9-q7',
        question: 'If the cloud remained for many days, what did the people do?',
        options: ['They kept the charge of the Lord and did not set out', 'They complained', 'They left anyway', 'They slept'],
        correctAnswer: 'They kept the charge of the Lord and did not set out',
        explanation: 'Numbers 9:19 (ESV): "Then the people of Israel kept the charge of the Lord and did not set out."',
        difficulty: 'medium'
      },
      {
        id: 'num9-q8',
        question: 'Could a sojourner/stranger keep the Passover?',
        options: ['Yes, according to the statute', 'No', 'Only if invited', 'Only partially'],
        correctAnswer: 'Yes, according to the statute',
        explanation: 'Numbers 9:14 (ESV): "And if a stranger sojourns among you and would keep the Passover... he shall do so according to the statute..."',
        difficulty: 'medium'
      },
      {
        id: 'num9-q9',
        question: 'What is the punishment for a clean person who fails to keep the Passover?',
        options: ['That person shall be cut off from his people', 'A fine', 'Exile', 'A warning'],
        correctAnswer: 'That person shall be cut off from his people',
        explanation: 'Numbers 9:13 (ESV): "But if any man who is clean... fails to keep the Passover, that person shall be cut off from his people."',
        difficulty: 'medium'
      },
      {
        id: 'num9-q10',
        question: 'Who determined when they camped or set out?',
        options: ['The command of the Lord by Moses', 'The elders', 'The weather', 'The season'],
        correctAnswer: 'The command of the Lord by Moses',
        explanation: 'Numbers 9:23 (ESV): "At the command of the Lord they camped, and at the command of the Lord they set out."',
        difficulty: 'medium'
      },
      {
        id: 'num9-q11',
        question: 'What were the rules for eating the Passover lamb mentioned here?',
        options: ['Eat it with unleavened bread and bitter herbs; leave none until morning; break no bone', 'Boil it', 'Eat with milk', 'Eat raw'],
        correctAnswer: 'Eat it with unleavened bread and bitter herbs; leave none until morning; break no bone',
        explanation: 'Numbers 9:11-12 recalls these rules: "Eat it with unleavened bread and bitter herbs. They shall leave none of it until the morning, nor break any of its bones."',
        difficulty: 'hard'
      },
      {
        id: 'num9-q12',
        question: 'Did the cloud ever stay from evening only until morning?',
        options: ['Yes', 'No, always longer', 'No, always shorter', 'Not mentioned'],
        correctAnswer: 'Yes',
        explanation: 'Numbers 9:21 (ESV): "Sometimes the cloud remained from evening until morning..."',
        difficulty: 'hard'
      },
      {
        id: 'num9-q13',
        question: 'Who brought the question of the unclean men to the Lord?',
        options: ['Moses', 'Aaron', 'Miriam', 'The men themselves'],
        correctAnswer: 'Moses',
        explanation: 'Numbers 9:8 (ESV): "And Moses said to them, \'Wait, that I may hear what the Lord will command concerning you.\'"',
        difficulty: 'hard'
      },
      {
        id: 'num9-q14',
        question: 'What phrase is used to describe the tabernacle in verse 15?',
        options: ['The tabernacle of the testimony', 'The house of God', 'The temple', 'The sanctuary'],
        correctAnswer: 'The tabernacle of the testimony',
        explanation: 'Numbers 9:15 (ESV): "The cloud covered the tabernacle, the tent of the testimony."',
        difficulty: 'hard'
      },
      {
        id: 'num9-q15',
        question: 'How long did the cloud rest over the tabernacle (maximum duration mentioned)?',
        options: ['A year', 'A week', 'A month', 'Forty years'],
        correctAnswer: 'A year',
        explanation: 'Numbers 9:22 (ESV): "Whether... two days, or a month, or a longer time (Hebrew often implies a year)..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 9:17',
    key_verse_text: "And whenever the cloud lifted from over the tent, after that the people of Israel set out, and in the place where the cloud settled down, there the people of Israel camped.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-10',
    bookId: 'numbers',
    chapter: 10,
    title: 'The Silver Trumpets',
    questions: [
      {
        id: 'num10-q1',
        question: 'How many silver trumpets were made?',
        options: ['Two', 'Seven', 'Twelve', 'One'],
        correctAnswer: 'Two',
        explanation: 'Numbers 10:2 (ESV): "Make two silver trumpets."',
        difficulty: 'easy'
      },
      {
        id: 'num10-q2',
        question: 'Who was allowed to blow the trumpets?',
        options: ['The sons of Aaron, the priests', 'Anyone', 'Moses', 'The elders'],
        correctAnswer: 'The sons of Aaron, the priests',
        explanation: 'Numbers 10:8 (ESV): "The sons of Aaron, the priests, shall blow the trumpets."',
        difficulty: 'easy'
      },
      {
        id: 'num10-q3',
        question: 'What happened when both trumpets were blown?',
        options: ['All the congregation assembled', 'Only the leaders', 'War', 'They marched'],
        correctAnswer: 'All the congregation assembled',
        explanation: 'Numbers 10:3 (ESV): "And when they blow them, all the congregation shall gather..."',
        difficulty: 'easy'
      },
      {
        id: 'num10-q4',
        question: 'When did the cloud lift from over the tabernacle to start the journey?',
        options: ['In the second year, in the second month, on the twentieth day', 'First month', 'First year', 'Third month'],
        correctAnswer: 'In the second year, in the second month, on the twentieth day',
        explanation: 'Numbers 10:11 (ESV): "In the second year, in the second month, on the twentieth day... the cloud lifted."',
        difficulty: 'easy'
      },
      {
        id: 'num10-q5',
        question: 'Which camp set out first?',
        options: ['Judah', 'Reuben', 'Ephraim', 'Dan'],
        correctAnswer: 'Judah',
        explanation: 'Numbers 10:14 (ESV): "The standard of the camp of the people of Judah set out first..."',
        difficulty: 'easy'
      },
      {
        id: 'num10-q6',
        question: 'Who was Hobab?',
        options: ['The son of Reuel the Midianite, Moses\' father-in-law', 'A prince of Egypt', 'A priest', 'A spy'],
        correctAnswer: 'The son of Reuel the Midianite, Moses\' father-in-law',
        explanation: 'Numbers 10:29 (ESV): "Moses said to Hobab the son of Reuel the Midianite, Moses\' father-in-law..."',
        difficulty: 'medium'
      },
      {
        id: 'num10-q7',
        question: 'What did Moses ask Hobab to do?',
        options: ['Come with them and be their eyes', 'Go back to Egypt', 'Fight Amalek', 'Build the ark'],
        correctAnswer: 'Come with them and be their eyes',
        explanation: 'Numbers 10:31 (ESV): "Do not leave us... you will know where we shall camp... and you will be to us as eyes."',
        difficulty: 'medium'
      },
      {
        id: 'num10-q8',
        question: 'What signaled the camps on the east to set out?',
        options: ['A specific alarm blast (first alarm)', 'A long blast', 'A shout', 'A wave'],
        correctAnswer: 'A specific alarm blast (first alarm)',
        explanation: 'Numbers 10:5 (ESV): "When you blow an alarm, the camps that are on the east side shall set out."',
        difficulty: 'medium'
      },
      {
        id: 'num10-q9',
        question: 'What signaled the camps on the south to set out?',
        options: ['The second alarm blast', 'The first blast', 'Three blasts', 'Silence'],
        correctAnswer: 'The second alarm blast',
        explanation: 'Numbers 10:6 (ESV): "And when you blow an alarm the second time, the camps that are on the south side shall set out."',
        difficulty: 'medium'
      },
      {
        id: 'num10-q10',
        question: 'What chant did Moses say when the ark set out?',
        options: ['Arise, O Lord, and let your enemies be scattered', 'Go forth and multiply', 'Behold the Lamb', 'Glory to God'],
        correctAnswer: 'Arise, O Lord, and let your enemies be scattered',
        explanation: 'Numbers 10:35 (ESV): "Arise, O Lord, and let your enemies be scattered, and let those who hate you flee before you."',
        difficulty: 'medium'
      },
      {
        id: 'num10-q11',
        question: 'What chant did Moses say when the ark rested?',
        options: ['Return, O Lord, to the ten thousand thousands of Israel', 'Stay with us', 'Peace be still', 'Rest now'],
        correctAnswer: 'Return, O Lord, to the ten thousand thousands of Israel',
        explanation: 'Numbers 10:36 (ESV): "Return, O Lord, to the ten thousand thousands of Israel."',
        difficulty: 'medium'
      },
      {
        id: 'num10-q12',
        question: 'Who carried the tabernacle (tent curtains etc.)?',
        options: ['Sons of Gershon and Merari', 'Kohath', 'Moses', 'Judah'],
        correctAnswer: 'Sons of Gershon and Merari',
        explanation: 'Numbers 10:17 (ESV): "And the sons of Gershon and the sons of Merari, who carried the tabernacle, set out."',
        difficulty: 'hard'
      },
      {
        id: 'num10-q13',
        question: 'When did the Kohathites set out carrying the holy things?',
        options: ['After the Reuben camp', 'First', 'Last', 'After Ephraim'],
        correctAnswer: 'After the Reuben camp',
        explanation: 'Numbers 10:21 (ESV): "Then the Kohathites set out... and the tabernacle was set up before they arrived."',
        difficulty: 'hard'
      },
      {
        id: 'num10-q14',
        question: 'For what purpose other than moving were the trumpets used?',
        options: ['In the day of gladness, feasts, and beginning of months over burnt offerings', 'To scare birds', 'To calm animals', 'For music only'],
        correctAnswer: 'In the day of gladness, feasts, and beginning of months over burnt offerings',
        explanation: 'Numbers 10:10 (ESV): "On the day of your gladness also... and at the beginnings of your months, you shall blow the trumpets over your burnt offerings..."',
        difficulty: 'hard'
      },
      {
        id: 'num10-q15',
        question: 'What craftsmanship was used for the trumpets?',
        options: ['Hammered work', 'Molded', 'Carved', 'Woven'],
        correctAnswer: 'Hammered work',
        explanation: 'Numbers 10:2 (ESV): "Of hammered work you shall make them."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 10:35',
    key_verse_text: "And whenever the ark set out, Moses said, 'Arise, O Lord, and let your enemies be scattered, and let those who hate you flee before you.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-11',
    bookId: 'numbers',
    chapter: 11,
    title: 'Complaining and Quail',
    questions: [
      {
        id: 'num11-q1',
        question: 'What did the people complain about at Taberah?',
        options: ['Their misfortunes', 'Lack of water', 'Moses', 'God'],
        correctAnswer: 'Their misfortunes',
        explanation: 'Numbers 11:1 (ESV): "And the people complained in the hearing of the Lord about their misfortunes..."',
        difficulty: 'easy'
      },
      {
        id: 'num11-q2',
        question: 'How did God respond to the complaints at Taberah?',
        options: ['His anger was kindled and fire burned among them', 'He sent snakes', 'He sent rain', 'He ignored them'],
        correctAnswer: 'His anger was kindled and fire burned among them',
        explanation: 'Numbers 11:1 (ESV): "...the fire of the Lord burned among them and consumed some outlying parts of the camp."',
        difficulty: 'easy'
      },
      {
        id: 'num11-q3',
        question: 'What food did the people crave?',
        options: ['Meat (specifically fish, cucumbers, melons, leeks, onions, garlic)', 'Bread', 'Fruit', 'Milk'],
        correctAnswer: 'Meat (specifically fish, cucumbers, melons, leeks, onions, garlic)',
        explanation: 'Numbers 11:4-5 (ESV): "The rabble... had a strong craving... We remember the fish... cucumbers... melons..."',
        difficulty: 'easy'
      },
      {
        id: 'num11-q4',
        question: 'Moses felt burdened. What did God do to help him?',
        options: ['Appointed seventy elders to bear the burden with him', 'Sent an angel', 'Gave him a vacation', 'Removed the burden'],
        correctAnswer: 'Appointed seventy elders to bear the burden with him',
        explanation: 'Numbers 11:16-17 (ESV): "Gather for me seventy men of the elders... they shall bear the burden of the people with you."',
        difficulty: 'easy'
      },
      {
        id: 'num11-q5',
        question: 'What meat did God provide?',
        options: ['Quail', 'Chicken', 'Lamb', 'Beef'],
        correctAnswer: 'Quail',
        explanation: 'Numbers 11:31 (ESV): "Then a wind from the Lord sprang up, and it brought quail from the sea..."',
        difficulty: 'easy'
      },
      {
        id: 'num11-q6',
        question: 'How much quail did God promise to give them?',
        options: ['A whole month, until it comes out of your nostrils', 'One day', 'Two days', 'Five days'],
        correctAnswer: 'A whole month, until it comes out of your nostrils',
        explanation: 'Numbers 11:20 (ESV): "But a whole month, until it comes out at your nostrils and becomes loathsome to you..."',
        difficulty: 'medium'
      },
      {
        id: 'num11-q7',
        question: 'What happened when the Spirit rested on the seventy elders?',
        options: ['They prophesied', 'They fainted', 'They danced', 'They spoke in tongues'],
        correctAnswer: 'They prophesied',
        explanation: 'Numbers 11:25 (ESV): "And as soon as the Spirit rested on them, they prophesied. But they did not continue doing it."',
        difficulty: 'medium'
      },
      {
        id: 'num11-q8',
        question: 'Who were the two men who remained in the camp and prophesied?',
        options: ['Eldad and Medad', 'Joshua and Caleb', 'Aaron and Hur', 'Nadab and Abihu'],
        correctAnswer: 'Eldad and Medad',
        explanation: 'Numbers 11:26 (ESV): "Two men remained in the camp... The name of the one was Eldad, and the name of the other Medad."',
        difficulty: 'medium'
      },
      {
        id: 'num11-q9',
        question: 'How did Joshua respond to Eldad and Medad prophesying?',
        options: ['"My lord Moses, stop them."', '"Let them be."', '"God be praised."', '"Join them."'],
        correctAnswer: '"My lord Moses, stop them."',
        explanation: 'Numbers 11:28 (ESV): "Joshua... said, \'My lord Moses, stop them.\'"',
        difficulty: 'medium'
      },
      {
        id: 'num11-q10',
        question: 'What was Moses\' response to Joshua?',
        options: ['"Are you jealous for my sake? Would that all the Lord\'s people were prophets!"', '"You are right, stop them."', '"Bring them here."', '"I will punish them."'],
        correctAnswer: '"Are you jealous for my sake? Would that all the Lord\'s people were prophets!"',
        explanation: 'Numbers 11:29 (ESV): "Are you jealous for my sake? Would that all the Lord\'s people were prophets..."',
        difficulty: 'medium'
      },
      {
        id: 'num11-q11',
        question: 'What happened while the meat was yet between their teeth?',
        options: ['The anger of the Lord was kindled and he struck them with a plague', 'They were full', 'They praised God', 'They slept'],
        correctAnswer: 'The anger of the Lord was kindled and he struck them with a plague',
        explanation: 'Numbers 11:33 (ESV): "While the meat was yet between their teeth... the Lord struck the people with a very great plague."',
        difficulty: 'hard'
      },
      {
        id: 'num11-q12',
        question: 'What does "Kibroth-hattaavah" mean?',
        options: ['Graves of craving', 'Place of burning', 'Desert of sin', 'Mountain of God'],
        correctAnswer: 'Graves of craving',
        explanation: 'Numbers 11:34 (ESV): "Called... Kibroth-hattaavah, because there they buried the people who had the craving."',
        difficulty: 'hard'
      },
      {
        id: 'num11-q13',
        question: 'How deep were the quail piled around the camp?',
        options: ['Two cubits deep', 'One cubit', 'Ten cubits', 'Ankle deep'],
        correctAnswer: 'Two cubits deep',
        explanation: 'Numbers 11:31 (ESV): "About two cubits above the face of the earth."',
        difficulty: 'hard'
      },
      {
        id: 'num11-q14',
        question: 'What does "Taberah" mean?',
        options: ['Burning', 'Complaining', 'Testing', 'Water'],
        correctAnswer: 'Burning',
        explanation: 'Numbers 11:3 (ESV): "So the name of that place was called Taberah (burning), because the fire of the Lord burned among them."',
        difficulty: 'hard'
      },
      {
        id: 'num11-q15',
        question: 'Where did the Spirit come from that was put on the elders?',
        options: ['From the Spirit that was on Moses', 'It was new Spirit', 'From the ark', 'From the cloud'],
        correctAnswer: 'From the Spirit that was on Moses',
        explanation: 'Numbers 11:17 (ESV): "I will take some of the Spirit that is on you and put it on them."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 11:29',
    key_verse_text: "But Moses said to him, 'Are you jealous for my sake? Would that all the Lord\'s people were prophets, that the Lord would put his Spirit on them!'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-12',
    bookId: 'numbers',
    chapter: 12,
    title: 'Miriam and Aaron Oppose Moses',
    questions: [
      {
        id: 'num12-q1',
        question: 'Why did Miriam and Aaron speak against Moses?',
        options: ['Because of the Cushite woman he had married', 'Because he was proud', 'Because he ate unclean food', 'Because he struck the rock'],
        correctAnswer: 'Because of the Cushite woman he had married',
        explanation: 'Numbers 12:1 (ESV): "Miriam and Aaron spoke against Moses because of the Cushite woman whom he had married..."',
        difficulty: 'easy'
      },
      {
        id: 'num12-q2',
        question: 'What question did they ask regarding God speaking?',
        options: ['"Has the Lord indeed spoken only through Moses? Has he not spoken through us also?"', '"Why does God not speak to us?"', '"Is God silent?"', '"Who is Moses?"'],
        correctAnswer: '"Has the Lord indeed spoken only through Moses? Has he not spoken through us also?"',
        explanation: 'Numbers 12:2 (ESV): "Has the Lord indeed spoken only through Moses? Has he not spoken through us also?"',
        difficulty: 'easy'
      },
      {
        id: 'num12-q3',
        question: 'How is Moses described in this chapter?',
        options: ['Very meek, more than all people on earth', 'Strong and mighty', 'Wise and old', 'Proud and arrogant'],
        correctAnswer: 'Very meek, more than all people on earth',
        explanation: 'Numbers 12:3 (ESV): "Now the man Moses was very meek, more than all people who were on the face of the earth."',
        difficulty: 'easy'
      },
      {
        id: 'num12-q4',
        question: 'How did God speak to prophets usually?',
        options: ['In a vision or dream', 'Face to face', 'Through a donkey', 'Through signs'],
        correctAnswer: 'In a vision or dream',
        explanation: 'Numbers 12:6 (ESV): "If there is a prophet among you, I the Lord make myself known to him in a vision; I speak with him in a dream."',
        difficulty: 'easy'
      },
      {
        id: 'num12-q5',
        question: 'How did God speak to Moses?',
        options: ['Mouth to mouth (face to face), clearly', 'In riddles', 'Through angels', 'Through writing'],
        correctAnswer: 'Mouth to mouth (face to face), clearly',
        explanation: 'Numbers 12:8 (ESV): "With him I speak mouth to mouth, clearly, and not in riddles..."',
        difficulty: 'easy'
      },
      {
        id: 'num12-q6',
        question: 'What happened to Miriam as punishment?',
        options: ['She became leprous, like snow', 'She died', 'She was mute', 'She was blind'],
        correctAnswer: 'She became leprous, like snow',
        explanation: 'Numbers 12:10 (ESV): "And behold, Miriam was leprous, like snow."',
        difficulty: 'medium'
      },
      {
        id: 'num12-q7',
        question: 'How did Aaron react when he saw Miriam?',
        options: ['He pleaded with Moses', 'He ran away', 'He laughed', 'He blamed her'],
        correctAnswer: 'He pleaded with Moses',
        explanation: 'Numbers 12:11 (ESV): "And Aaron said to Moses, \'Oh, my lord, do not punish us...\'"',
        difficulty: 'medium'
      },
      {
        id: 'num12-q8',
        question: 'What was Moses\' prayer for Miriam?',
        options: ['"O God, please heal her—please."', '"Let her die."', '"Teach her a lesson."', '"Forgive me."'],
        correctAnswer: '"O God, please heal her—please."',
        explanation: 'Numbers 12:13 (ESV): "And Moses cried to the Lord, \'O God, please heal her—please.\'"',
        difficulty: 'medium'
      },
      {
        id: 'num12-q9',
        question: 'How long was Miriam shut outside the camp?',
        options: ['Seven days', 'One day', 'Forty days', 'Three days'],
        correctAnswer: 'Seven days',
        explanation: 'Numbers 12:15 (ESV): "So Miriam was shut outside the camp seven days..."',
        difficulty: 'medium'
      },
      {
        id: 'num12-q10',
        question: 'Did the people travel while Miriam was shut out?',
        options: ['No, the people did not set out till she was brought in again', 'Yes, they left her', 'Yes, but slowly', 'Not mentioned'],
        correctAnswer: 'No, the people did not set out till she was brought in again',
        explanation: 'Numbers 12:15 (ESV): "And the people did not set out on the march till Miriam was brought in again."',
        difficulty: 'medium'
      },
      {
        id: 'num12-q11',
        question: 'Where were they when this happened?',
        options: ['Hazeroth', 'Sinai', 'Kadesh', 'Elim'],
        correctAnswer: 'Hazeroth',
        explanation: 'Numbers 12:16 (ESV): "After that the people set out from Hazeroth..." (Context of ch 11 end and ch 12 start).',
        difficulty: 'hard'
      },
      {
        id: 'num12-q12',
        question: 'God said Moses is faithful in what?',
        options: ['All My house', 'Only the big things', 'War', 'Leading'],
        correctAnswer: 'All My house',
        explanation: 'Numbers 12:7 (ESV): "He is faithful in all my house."',
        difficulty: 'hard'
      },
      {
        id: 'num12-q13',
        question: 'What does God mention as a comparison for her shame (seven days)?',
        options: ['If her father had but spit in her face', 'If she had killed someone', 'If she had stolen', 'If she was unclean'],
        correctAnswer: 'If her father had but spit in her face',
        explanation: 'Numbers 12:14 (ESV): "If her father had but spit in her face, should she not be shamed seven days?"',
        difficulty: 'hard'
      },
      {
        id: 'num12-q14',
        question: 'Who stood at the entrance of the tent to rebuke Aaron and Miriam?',
        options: ['The Lord in a pillar of cloud', 'An angel', 'Moses', 'Joshua'],
        correctAnswer: 'The Lord in a pillar of cloud',
        explanation: 'Numbers 12:5 (ESV): "And the Lord came down in a pillar of cloud and stood at the entrance of the tent..."',
        difficulty: 'hard'
      },
      {
        id: 'num12-q15',
        question: 'Why was Aaron not struck with leprosy too?',
        options: ['Unclear/God\'s mercy/Priestly role', 'He was innocent', 'He ran away', 'He was wearing the ephod'],
        correctAnswer: 'Unclear/God\'s mercy/Priestly role',
        explanation: 'Text does not explicitly state why, but Miriam seems the instigator (mentioned first) and Aaron confesses immediately.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 12:3',
    key_verse_text: "Now the man Moses was very meek, more than all people who were on the face of the earth.",
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
        question: 'How many spies were sent to Canaan?',
        options: ['Twelve', 'Two', 'Seven', 'Seventy'],
        correctAnswer: 'Twelve',
        explanation: 'Numbers 13:2 (ESV): "Send men to spy out the land of Canaan... one man from each... tribe."',
        difficulty: 'easy'
      },
      {
        id: 'num13-q2',
        question: 'Who represented the tribe of Judah?',
        options: ['Caleb the son of Jephunneh', 'Joshua the son of Nun', 'Nahshon', 'Hur'],
        correctAnswer: 'Caleb the son of Jephunneh',
        explanation: 'Numbers 13:6 (ESV): "From the tribe of Judah, Caleb the son of Jephunneh."',
        difficulty: 'easy'
      },
      {
        id: 'num13-q3',
        question: 'Who represented the tribe of Ephraim?',
        options: ['Hoshea (Joshua) the son of Nun', 'Elishama', 'Caleb', 'Palti'],
        correctAnswer: 'Hoshea (Joshua) the son of Nun',
        explanation: 'Numbers 13:8 (ESV): "From the tribe of Ephraim, Hoshea the son of Nun."',
        difficulty: 'easy'
      },
      {
        id: 'num13-q4',
        question: 'What did they bring back from the Valley of Eshcol?',
        options: ['A branch with a single cluster of grapes carried on a pole', 'Gold and silver', 'Weapons', 'Nothing'],
        correctAnswer: 'A branch with a single cluster of grapes carried on a pole',
        explanation: 'Numbers 13:23 (ESV): "Cut down from there a branch with a single cluster of grapes, and they carried it on a pole..."',
        difficulty: 'easy'
      },
      {
        id: 'num13-q5',
        question: 'How long did they spy out the land?',
        options: ['Forty days', 'Seven days', 'Twelve days', 'Three months'],
        correctAnswer: 'Forty days',
        explanation: 'Numbers 13:25 (ESV): "At the end of forty days they returned from spying out the land."',
        difficulty: 'easy'
      },
      {
        id: 'num13-q6',
        question: 'What was the report of the ten spies regarding the land?',
        options: ['It flows with milk and honey, but the people are strong', 'It is a bad land', 'It is empty', 'We can easily take it'],
        correctAnswer: 'It flows with milk and honey, but the people are strong',
        explanation: 'Numbers 13:27-28 (ESV): "It flows with milk and honey... However, the people who dwell in the land are strong..."',
        difficulty: 'medium'
      },
      {
        id: 'num13-q7',
        question: 'Who constituted the "giants" (Nephilim) they saw?',
        options: ['The sons of Anak', 'The Philistines', 'The Egyptians', 'The Hittites'],
        correctAnswer: 'The sons of Anak',
        explanation: 'Numbers 13:33 (ESV): "And there we saw the Nephilim (the sons of Anak... and we seemed to ourselves like grasshoppers."',
        difficulty: 'medium'
      },
      {
        id: 'num13-q8',
        question: 'Who tried to quiet the people before Moses?',
        options: ['Caleb', 'Joshua', 'Aaron', 'The cloud'],
        correctAnswer: 'Caleb',
        explanation: 'Numbers 13:30 (ESV): "But Caleb quieted the people before Moses and said, \'Let us go up at once and occupy it...\'"',
        difficulty: 'medium'
      },
      {
        id: 'num13-q9',
        question: 'What did the bad report say about the land devouring?',
        options: ['"Only the weak"', '"The land... devours its inhabitants"', '"The water is bitter"', '"There is no food"'],
        correctAnswer: '"The land... devours its inhabitants"',
        explanation: 'Numbers 13:32 (ESV): "The land... is a land that devours its inhabitants..."',
        difficulty: 'medium'
      },
      {
        id: 'num13-q10',
        question: 'What name did Moses give to Hoshea son of Nun?',
        options: ['Joshua', 'Caleb', 'Israel', 'Gideon'],
        correctAnswer: 'Joshua',
        explanation: 'Numbers 13:16 (ESV): "And Moses called Hoshea the son of Nun Joshua."',
        difficulty: 'medium'
      },
      {
        id: 'num13-q11',
        question: 'From where were the spies sent?',
        options: ['The wilderness of Paran', 'Sinai', 'Egypt', 'Moab'],
        correctAnswer: 'The wilderness of Paran',
        explanation: 'Numbers 13:3 (ESV): "So Moses sent them from the wilderness of Paran..."',
        difficulty: 'hard'
      },
      {
        id: 'num13-q12',
        question: 'Which other fruits did they bring besides grapes?',
        options: ['Pomegranates and figs', 'Olives and dates', 'Apples and pears', 'Melons and cucumbers'],
        correctAnswer: 'Pomegranates and figs',
        explanation: 'Numbers 13:23 (ESV): "They brought also some pomegranates and figs."',
        difficulty: 'hard'
      },
      {
        id: 'num13-q13',
        question: 'Who was the spy from Benjamin?',
        options: ['Palti the son of Raphu', 'Shammua', 'Shaphat', 'Igal'],
        correctAnswer: 'Palti the son of Raphu',
        explanation: 'Numbers 13:9 (ESV): "From the tribe of Benjamin, Palti the son of Raphu."',
        difficulty: 'hard'
      },
      {
        id: 'num13-q14',
        question: 'Where was Hebron located (mentioned as being built 7 years before Zoan)?',
        options: ['Only the priests know', 'In Canaan (South/Negeb area)', 'In Egypt', 'In Edom'],
        correctAnswer: 'In Canaan (South/Negeb area)',
        explanation: 'Numbers 13:22 (ESV): "They went up into the Negeb and came to Hebron... Now Hebron was built seven years before Zoan in Egypt."',
        difficulty: 'hard'
      },
      {
        id: 'num13-q15',
        question: 'What does "Eshcol" mean?',
        options: ['Cluster', 'Valley', 'Water', 'Mountain'],
        correctAnswer: 'Cluster',
        explanation: 'Numbers 13:24 (ESV): "That place was called the Valley of Eshcol, because of the cluster that the people of Israel cut down..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 13:30',
    key_verse_text: "But Caleb quieted the people before Moses and said, 'Let us go up at once and occupy it, for we are well able to overcome it.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-14',
    bookId: 'numbers',
    chapter: 14,
    title: 'The People Rebel',
    questions: [
      {
        id: 'num14-q1',
        question: 'How did the congregation react to the spies\' report?',
        options: ['They wept and grumbled against Moses and Aaron', 'They rejoiced', 'They prepared for war', 'They prayed'],
        correctAnswer: 'They wept and grumbled against Moses and Aaron',
        explanation: 'Numbers 14:1-2 (ESV): "The people wept that night... and all the people of Israel grumbled..."',
        difficulty: 'easy'
      },
      {
        id: 'num14-q2',
        question: 'What did the people propose to do?',
        options: ['Choose a leader and go back to Egypt', 'Attack immediately', 'Build a city', 'Fast'],
        correctAnswer: 'Choose a leader and go back to Egypt',
        explanation: 'Numbers 14:4 (ESV): "Let us choose a leader and go back to Egypt."',
        difficulty: 'easy'
      },
      {
        id: 'num14-q3',
        question: 'Who tore their clothes and tried to persuade the people?',
        options: ['Joshua and Caleb', 'Moses and Aaron only', 'The ten spies', 'The Levites'],
        correctAnswer: 'Joshua and Caleb',
        explanation: 'Numbers 14:6 (ESV): "And Joshua... and Caleb... tore their clothes and said..."',
        difficulty: 'easy'
      },
      {
        id: 'num14-q4',
        question: 'What did the congregation want to do to Joshua and Caleb?',
        options: ['Stone them with stones', 'Make them kings', 'Listen to them', 'Exile them'],
        correctAnswer: 'Stone them with stones',
        explanation: 'Numbers 14:10 (ESV): "Then all the congregation said to stone them with stones."',
        difficulty: 'easy'
      },
      {
        id: 'num14-q5',
        question: 'What was God\'s judgment on that generation (20 years and up)?',
        options: ['They would die in the wilderness', 'They would enter immediately', 'They would be slaves', 'They would lose their cattle'],
        correctAnswer: 'They would die in the wilderness',
        explanation: 'Numbers 14:29 (ESV): "Your dead bodies shall fall in this wilderness... from twenty years old and upward..."',
        difficulty: 'easy'
      },
      {
        id: 'num14-q6',
        question: 'Who were the only two from that generation allowed to enter the land?',
        options: ['Caleb and Joshua', 'Moses and Aaron', 'Eldad and Medad', 'Eleazar and Ithamar'],
        correctAnswer: 'Caleb and Joshua',
        explanation: 'Numbers 14:30 (ESV): "Not one shall come into the land... except Caleb... and Joshua..."',
        difficulty: 'medium'
      },
      {
        id: 'num14-q7',
        question: 'How long would they wander in the wilderness?',
        options: ['40 years', '70 years', '10 years', '1 year'],
        correctAnswer: '40 years',
        explanation: 'Numbers 14:34 (ESV): "According to the number of the days... forty days, for every day a year, you shall bear your iniquity forty years."',
        difficulty: 'medium'
      },
      {
        id: 'num14-q8',
        question: 'What happened to the ten spies who brought the bad report?',
        options: ['They died by plague before the Lord', 'They lived long lives', 'They were exiled', 'They repented'],
        correctAnswer: 'They died by plague before the Lord',
        explanation: 'Numbers 14:37 (ESV): "...died by plague before the Lord."',
        difficulty: 'medium'
      },
      {
        id: 'num14-q9',
        question: 'What argument did Moses use to intercede for the people?',
        options: ['The Egyptians will hear of it and despise God\'s power; uphold Your reputation', 'They are sorry', 'They are just children', 'I will die for them'],
        correctAnswer: 'The Egyptians will hear of it and despise God\'s power; uphold Your reputation',
        explanation: 'Numbers 14:13-16: Moses argues that failing to bring them in would make the nations say God was unable.',
        difficulty: 'medium'
      },
      {
        id: 'num14-q10',
        question: 'God says he has a different spirit in whom?',
        options: ['Caleb', 'Aaron', 'Miriam', 'The elders'],
        correctAnswer: 'Caleb',
        explanation: 'Numbers 14:24 (ESV): "But my servant Caleb, because he has a different spirit and has followed me fully..."',
        difficulty: 'medium'
      },
      {
        id: 'num14-q11',
        question: 'When the people tried to attack the Amalekites and Canaanites the next day without God, what happened?',
        options: ['They were defeated', 'They won', 'God helped them', 'The enemy fled'],
        correctAnswer: 'They were defeated',
        explanation: 'Numbers 14:45 (ESV): "Then the Amalekites and the Canaanites... came down and defeated them..."',
        difficulty: 'hard'
      },
      {
        id: 'num14-q12',
        question: 'What did Moses tell them NOT to do when they decided to fight late?',
        options: ['Do not go up, for the Lord is not among you', 'Do not take the ark', 'Do not take swords', 'Do not shout'],
        correctAnswer: 'Do not go up, for the Lord is not among you',
        explanation: 'Numbers 14:42 (ESV): "Do not go up, for the Lord is not among you, lest you be struck down..."',
        difficulty: 'hard'
      },
      {
        id: 'num14-q13',
        question: 'Where did the Amalekites chase them to?',
        options: ['Hormah', 'Kadesh', 'Egypt', 'Hebron'],
        correctAnswer: 'Hormah',
        explanation: 'Numbers 14:45 (ESV): "...and struck them down as far as Hormah."',
        difficulty: 'hard'
      },
      {
        id: 'num14-q14',
        question: '"The Lord is slow to anger and abounding in...?"',
        options: ['Steadfast love', 'Wrath', 'Power', 'Wealth'],
        correctAnswer: 'Steadfast love',
        explanation: 'Numbers 14:18 (ESV): "The Lord is slow to anger and abounding in steadfast love..."',
        difficulty: 'hard'
      },
      {
        id: 'num14-q15',
        question: 'What will fill the earth?',
        options: ['The glory of the Lord', 'The people of Israel', 'Water', 'Darkness'],
        correctAnswer: 'The glory of the Lord',
        explanation: 'Numbers 14:21 (ESV): "...all the earth shall be filled with the glory of the Lord."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 14:24',
    key_verse_text: "But my servant Caleb, because he has a different spirit and has followed me fully, I will bring into the land into which he went, and his descendants shall possess it.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-15',
    bookId: 'numbers',
    chapter: 15,
    title: 'Laws about Sacrifices',
    questions: [
      {
        id: 'num15-q1',
        question: 'When were these new laws of offering to take effect?',
        options: ['When you come into the land you are to inhabit', 'Immediately', 'In 40 years', 'Never'],
        correctAnswer: 'When you come into the land you are to inhabit',
        explanation: 'Numbers 15:2 (ESV): "When you come into the land you are to inhabit..."',
        difficulty: 'easy'
      },
      {
        id: 'num15-q2',
        question: 'What accompanied a burnt offering or sacrifice?',
        options: ['A grain offering and a drink offering', 'Money', 'Clothes', 'Music'],
        correctAnswer: 'A grain offering and a drink offering',
        explanation: 'Numbers 15:4-5 (ESV): "Then he... shall bring a grain offering... and wine for the drink offering..."',
        difficulty: 'easy'
      },
      {
        id: 'num15-q3',
        question: 'Did the law apply to strangers/sojourners?',
        options: ['Yes, one law for you and for the stranger', 'No', 'Only for the rich', 'Only for priests'],
        correctAnswer: 'Yes, one law for you and for the stranger',
        explanation: 'Numbers 15:16 (ESV): "One law and one rule shall be for you and for the stranger..."',
        difficulty: 'easy'
      },
      {
        id: 'num15-q4',
        question: 'What happened to the man gathering sticks on the Sabbath?',
        options: ['He was stoned to death', 'He was warned', 'He was fined', 'He was exiled'],
        correctAnswer: 'He was stoned to death',
        explanation: 'Numbers 15:35-36 (ESV): "The man shall be put to death; all the congregation shall stone him..."',
        difficulty: 'easy'
      },
      {
        id: 'num15-q5',
        question: 'What were the people commanded to put on the corners of their garments?',
        options: ['Tassels with a cord of blue', 'Bells', 'Gold threads', 'Patches'],
        correctAnswer: 'Tassels with a cord of blue',
        explanation: 'Numbers 15:38 (ESV): "Make tassels on the corners... and put on the tassel of each corner a cord of blue."',
        difficulty: 'easy'
      },
      {
        id: 'num15-q6',
        question: 'What is the purpose of the tassels?',
        options: ['To remember all the commandments of the Lord and do them', 'Fashion', 'Rank', 'Protection'],
        correctAnswer: 'To remember all the commandments of the Lord and do them',
        explanation: 'Numbers 15:39 (ESV): "That you may look on it and remember all the commandments of the Lord and do them..."',
        difficulty: 'medium'
      },
      {
        id: 'num15-q7',
        question: 'What offering was made for unintentional sin of the congregation?',
        options: ['One bull for a burnt offering and one male goat for a sin offering', 'Two doves', 'Money', 'Water'],
        correctAnswer: 'One bull for a burnt offering and one male goat for a sin offering',
        explanation: 'Numbers 15:24 (ESV): "Offer one bull... and one male goat..."',
        difficulty: 'medium'
      },
      {
        id: 'num15-q8',
        question: 'What is the penalty for sinning "with a high hand" (defiantly)?',
        options: ['That person shall be cut off; his iniquity is on him', 'A fine', 'A sacrifice', 'Washing'],
        correctAnswer: 'That person shall be cut off; his iniquity is on him',
        explanation: 'Numbers 15:30-31 (ESV): "But the person who does anything with a high hand... reviles the Lord... shall be cut off."',
        difficulty: 'medium'
      },
      {
        id: 'num15-q9',
        question: 'What was the first of the dough to be offered as?',
        options: ['A contribution (heave offering)', 'Burnt offering', 'Peace offering', 'Eaten by the poor'],
        correctAnswer: 'A contribution (heave offering)',
        explanation: 'Numbers 15:20 (ESV): "Of the first of your dough you shall present a loaf as a contribution..."',
        difficulty: 'medium'
      },
      {
        id: 'num15-q10',
        question: 'Who found the man gathering sticks?',
        options: ['The people of Israel (those who were in the wilderness)', 'Moses', 'Aaron', 'The guards'],
        correctAnswer: 'The people of Israel (those who were in the wilderness)',
        explanation: 'Numbers 15:32 (ESV): "While the people of Israel were in the wilderness, they found a man gathering sticks..."',
        difficulty: 'medium'
      },
      {
        id: 'num15-q11',
        question: 'How much flour for a bull?',
        options: ['Three tenths of an ephah', 'One tenth', 'Two tenths', 'One ephah'],
        correctAnswer: 'Three tenths of an ephah',
        explanation: 'Numbers 15:9 (ESV): "Then with the bull... three tenths of an ephah of fine flour..."',
        difficulty: 'hard'
      },
      {
        id: 'num15-q12',
        question: 'How much wine for a lamb?',
        options: ['A quarter of a hin', 'A third of a hin', 'Half a hin', 'One hin'],
        correctAnswer: 'A quarter of a hin',
        explanation: 'Numbers 15:5 (ESV): "And wine for the drink offering, a quarter of a hin..."',
        difficulty: 'hard'
      },
      {
        id: 'num15-q13',
        question: 'Where was the man gathering sticks stoned?',
        options: ['Outside the camp', 'At the altar', 'In the tent', 'In the valley'],
        correctAnswer: 'Outside the camp',
        explanation: 'Numbers 15:36 (ESV): "Then all the congregation brought him outside the camp and stoned him..."',
        difficulty: 'hard'
      },
      {
        id: 'num15-q14',
        question: 'The tassels warned against following what?',
        options: ['Your heart and your eyes, which you are inclined to whore after', 'Other gods', 'The nations', 'Your leaders'],
        correctAnswer: 'Your heart and your eyes, which you are inclined to whore after',
        explanation: 'Numbers 15:39 (ESV): "Not follow after your own heart and your own eyes..."',
        difficulty: 'hard'
      },
      {
        id: 'num15-q15',
        question: 'For a ram, the grain offering was?',
        options: ['Two tenths of an ephah', 'Three tenths', 'One tenth', 'Five tenths'],
        correctAnswer: 'Two tenths of an ephah',
        explanation: 'Numbers 15:6 (ESV): "Or for a ram, you shall bring... two tenths of an ephah..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 15:39',
    key_verse_text: "And it shall be a tassel for you to look at and remember all the commandments of the Lord, to do them, not to follow after your own heart and your own eyes...",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-16',
    bookId: 'numbers',
    chapter: 16,
    title: 'Korah\'s Rebellion',
    questions: [
      {
        id: 'num16-q1',
        question: 'Who led the rebellion against Moses and Aaron?',
        options: ['Korah, Dathan, and Abiram', 'Joshua and Caleb', 'Nadab and Abihu', 'The seventy elders'],
        correctAnswer: 'Korah, Dathan, and Abiram',
        explanation: 'Numbers 16:1 (ESV): "Now Korah... and Dathan and Abiram... took men..."',
        difficulty: 'easy'
      },
      {
        id: 'num16-q2',
        question: 'What did the rebels say to Moses and Aaron?',
        options: ['"You have gone too far! For all in the congregation are holy."', '"We want water"', '"We want meat"', '"Why did you bring us here?"'],
        correctAnswer: '"You have gone too far! For all in the congregation are holy."',
        explanation: 'Numbers 16:3 (ESV): "You have gone too far! For all in the congregation are holy, every one of them..."',
        difficulty: 'easy'
      },
      {
        id: 'num16-q3',
        question: 'How did God punish Korah, Dathan, and Abiram?',
        options: ['The earth opened its mouth and swallowed them up', 'Fire consumed them', 'Plague', 'Flood'],
        correctAnswer: 'The earth opened its mouth and swallowed them up',
        explanation: 'Numbers 16:32 (ESV): "And the earth opened its mouth and swallowed them up..."',
        difficulty: 'easy'
      },
      {
        id: 'num16-q4',
        question: 'What happened to the 250 men offering incense?',
        options: ['Fire came out from the Lord and consumed them', 'They were swallowed by the earth', 'They were stoned', 'They repented'],
        correctAnswer: 'Fire came out from the Lord and consumed them',
        explanation: 'Numbers 16:35 (ESV): "And fire came out from the Lord and consumed the 250 men offering the incense."',
        difficulty: 'easy'
      },
      {
        id: 'num16-q5',
        question: 'What did Aaron do to stop the plague that started the next day?',
        options: ['He stood between the dead and the living with incense', 'He prayed', 'He offered a bull', 'He ran away'],
        correctAnswer: 'He stood between the dead and the living with incense',
        explanation: 'Numbers 16:47-48 (ESV): "And he put on the incense and made atonement... and he stood between the dead and the living..."',
        difficulty: 'easy'
      },
      {
        id: 'num16-q6',
        question: 'How many people died in the plague?',
        options: ['14,700', '250', '3,000', '50,000'],
        correctAnswer: '14,700',
        explanation: 'Numbers 16:49 (ESV): "Now those who died in the plague were 14,700..."',
        difficulty: 'medium'
      },
      {
        id: 'num16-q7',
        question: 'What tribe was Korah from?',
        options: ['Levi', 'Reuben', 'Judah', 'Dan'],
        correctAnswer: 'Levi',
        explanation: 'Numbers 16:1 (ESV): "Korah the son of Izhar, son of Kohath, son of Levi..."',
        difficulty: 'medium'
      },
      {
        id: 'num16-q8',
        question: 'What tribes were Dathan and Abiram from?',
        options: ['Reuben', 'Levi', 'Judah', 'Simeon'],
        correctAnswer: 'Reuben',
        explanation: 'Numbers 16:1 (ESV): "...Dathan and Abiram... sons of Reuben..."',
        difficulty: 'medium'
      },
      {
        id: 'num16-q9',
        question: 'What was done with the bronze censers of the 250 men?',
        options: ['They were hammered into a covering for the altar', 'They were melted down', 'They were buried', 'They were reused'],
        correctAnswer: 'They were hammered into a covering for the altar',
        explanation: 'Numbers 16:38-39 (ESV): "Let them be made into hammered plates as a covering for the altar..."',
        difficulty: 'medium'
      },
      {
        id: 'num16-q10',
        question: 'Why specifically were the censers kept as a sign?',
        options: ['To be a reminder that no one who is not a priest should draw near to burn incense', 'Because bronze is valuable', 'To honor the dead', 'To warn the Egyptians'],
        correctAnswer: 'To be a reminder that no one who is not a priest should draw near to burn incense',
        explanation: 'Numbers 16:40 (ESV): "To be a reminder... that no outsider, who is not of the descendants of Aaron, should draw near to burn incense..."',
        difficulty: 'medium'
      },
      {
        id: 'num16-q11',
        question: 'Moses said, "If these men die as all men do... then...?"',
        options: ['The Lord has not sent me', 'They are righteous', 'I will resign', 'God is merciful'],
        correctAnswer: 'The Lord has not sent me',
        explanation: 'Numbers 16:29 (ESV): "If these men die as all men do... then the Lord has not sent me."',
        difficulty: 'hard'
      },
      {
        id: 'num16-q12',
        question: 'What new thing did Moses say the Lord would create?',
        options: ['The ground opening its mouth', 'A fire from heaven', 'A pillar of salt', 'A flood'],
        correctAnswer: 'The ground opening its mouth',
        explanation: 'Numbers 16:30 (ESV): "But if the Lord creates something new, and the ground opens its mouth..."',
        difficulty: 'hard'
      },
      {
        id: 'num16-q13',
        question: 'Who warned Dathan and Abiram\'s tents to be avoided?',
        options: ['Moses', 'The Lord', 'Korah', 'Aaron'],
        correctAnswer: 'Moses',
        explanation: 'Numbers 16:26 (ESV): "And he (Moses) spoke to the congregation, saying, \'Depart, please, from the tents of these wicked men...\'"',
        difficulty: 'hard'
      },
      {
        id: 'num16-q14',
        question: 'What did Korah accuse Moses and Aaron of doing "above the assembly"?',
        options: ['Exalting themselves', 'Stealing', 'Lying', 'Hiding'],
        correctAnswer: 'Exalting themselves',
        explanation: 'Numbers 16:3 (ESV): "Why then do you exalt yourselves above the assembly of the Lord?"',
        difficulty: 'hard'
      },
      {
        id: 'num16-q15',
        question: 'Moses said Korah sought what office?',
        options: ['The priesthood', 'The kingship', 'General', 'Judge'],
        correctAnswer: 'The priesthood',
        explanation: 'Numbers 16:10 (ESV): "...and would you seek the priesthood also?"',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 16:32',
    key_verse_text: "And the earth opened its mouth and swallowed them up, with their households and all the people who belonged to Korah and all their goods.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-17',
    bookId: 'numbers',
    chapter: 17,
    title: 'Aaron\'s Staff Buds',
    questions: [
      {
        id: 'num17-q1',
        question: 'How many staffs were collected?',
        options: ['Twelve', 'One', 'Seven', 'Forty'],
        correctAnswer: 'Twelve',
        explanation: 'Numbers 17:2 (ESV): "Take... twelve staffs, one for each fathers\' house."',
        difficulty: 'easy'
      },
      {
        id: 'num17-q2',
        question: 'What name was written on the staff of Levi?',
        options: ['Aaron', 'Moses', 'Korah', 'Levi'],
        correctAnswer: 'Aaron',
        explanation: 'Numbers 17:3 (ESV): "And write Aaron\'s name on the staff of Levi."',
        difficulty: 'easy'
      },
      {
        id: 'num17-q3',
        question: 'What happened to Aaron\'s staff the next day?',
        options: ['It sprouted, put forth buds, produced blossoms, and bore ripe almonds', 'It turned into a snake', 'It burned', 'It broke'],
        correctAnswer: 'It sprouted, put forth buds, produced blossoms, and bore ripe almonds',
        explanation: 'Numbers 17:8 (ESV): "...the staff of Aaron for the house of Levi had sprouted and put forth buds and produced blossoms, and it bore ripe almonds."',
        difficulty: 'easy'
      },
      {
        id: 'num17-q4',
        question: 'Where was Aaron\'s staff to be kept?',
        options: ['Before the testimony', 'In the ark', 'Buried', 'Burned'],
        correctAnswer: 'Before the testimony',
        explanation: 'Numbers 17:10 (ESV): "Put back the staff of Aaron before the testimony..."',
        difficulty: 'easy'
      },
      {
        id: 'num17-q5',
        question: 'Why was the staff kept?',
        options: ['To be kept as a sign for the rebels', 'For decoration', 'To use as a walking stick', 'To perform miracles'],
        correctAnswer: 'To be kept as a sign for the rebels',
        explanation: 'Numbers 17:10 (ESV): "...to be kept as a sign for the rebels, that you may make an end of their grumblings..."',
        difficulty: 'easy'
      },
      {
        id: 'num17-q6',
        question: 'How did the people react after this sign?',
        options: ['They cried out in fear of dying', 'They rejoiced', 'They ignored it', 'They tried to steal it'],
        correctAnswer: 'They cried out in fear of dying',
        explanation: 'Numbers 17:12-13 (ESV): "Behold, we perish, we are undone... Everyone who comes near... dies."',
        difficulty: 'medium'
      },
      {
        id: 'num17-q7',
        question: 'What fruit did the staff bear?',
        options: ['Ripe almonds', 'Figs', 'Pomegranates', 'Grapes'],
        correctAnswer: 'Ripe almonds',
        explanation: 'Numbers 17:8 (ESV): "...and it bore ripe almonds."',
        difficulty: 'medium'
      },
      {
        id: 'num17-q8',
        question: 'For whom were the staffs taken?',
        options: ['For the head of each fathers\' house', 'For the priests', 'For the warmongers', 'For the judges'],
        correctAnswer: 'For the head of each fathers\' house',
        explanation: 'Numbers 17:3 (ESV): "For there shall be one staff for the head of each fathers\' house."',
        difficulty: 'medium'
      },
      {
        id: 'num17-q9',
        question: 'Where were the staffs placed overnight?',
        options: ['In the tent of meeting before the testimony', 'Outside', 'In Moses\' tent', 'On the altar'],
        correctAnswer: 'In the tent of meeting before the testimony',
        explanation: 'Numbers 17:4 (ESV): "And you shall deposit them in the tent of meeting before the testimony..."',
        difficulty: 'medium'
      },
      {
        id: 'num17-q10',
        question: 'The purpose of the sign was to stop what?',
        options: ['Grumblings against the Lord', 'War', 'Idolatry', 'Adultery'],
        correctAnswer: 'Grumblings against the Lord',
        explanation: 'Numbers 17:5 (ESV): "And I will make to cease from me the grumblings of the people of Israel..."',
        difficulty: 'medium'
      },
      {
        id: 'num17-q11',
        question: '"The man whom I choose, his staff shall...?"',
        options: ['Sprout', 'Break', 'Burn', 'Glow'],
        correctAnswer: 'Sprout',
        explanation: 'Numbers 17:5 (ESV): "...the staff of the man whom I choose shall sprout."',
        difficulty: 'hard'
      },
      {
        id: 'num17-q12',
        question: 'The people said, "Are we all to...?"',
        options: ['Perish', 'Prosper', 'Be priests', 'Go back'],
        correctAnswer: 'Perish',
        explanation: 'Numbers 17:13 (ESV): "Are we all to perish?"',
        difficulty: 'hard'
      },
      {
        id: 'num17-q13',
        question: 'Did Moses check the staffs alone?',
        options: ['He brought them out to all the people of Israel', 'Yes', 'No, with Aaron', 'No, with Joshua'],
        correctAnswer: 'He brought them out to all the people of Israel',
        explanation: 'Numbers 17:9 (ESV): "Then Moses brought out all the staffs... to all the people of Israel."',
        difficulty: 'hard'
      },
      {
        id: 'num17-q14',
        question: 'What day did Moses go into the tent of the testimony to check?',
        options: ['The next day (on the morrow)', 'The third day', 'The seventh day', 'Immediately'],
        correctAnswer: 'The next day (on the morrow)',
        explanation: 'Numbers 17:8 (ESV): "On the next day Moses went into the tent..."',
        difficulty: 'hard'
      },
      {
        id: 'num17-q15',
        question: 'What did the people see regarding the other staffs?',
        options: ['They looked and each man took his staff', 'They were burned', 'They were lost', 'They also sprouted'],
        correctAnswer: 'They looked and each man took his staff',
        explanation: 'Numbers 17:9 (ESV): "And they looked, and each man took his staff."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 17:8',
    key_verse_text: "On the next day Moses went into the tent of the testimony, and behold, the staff of Aaron for the house of Levi had sprouted and put forth buds and produced blossoms, and it bore ripe almonds.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-18',
    bookId: 'numbers',
    chapter: 18,
    title: 'Duties of Priests and Levites',
    questions: [
      {
        id: 'num18-q1',
        question: 'Who bears the iniquity of the sanctuary?',
        options: ['Aaron and his sons and his father\'s house', 'The whole congregation', 'Moses', 'The judges'],
        correctAnswer: 'Aaron and his sons and his father\'s house',
        explanation: 'Numbers 18:1 (ESV): "You and your sons and your father\'s house with you shall bear iniquity in connection with the sanctuary..."',
        difficulty: 'easy'
      },
      {
        id: 'num18-q2',
        question: 'What is the role of the Levites in relation to Aaron?',
        options: ['They are joined to him and minister to him', 'They are equal', 'They are rulers', 'They are slaves'],
        correctAnswer: 'They are joined to him and minister to him',
        explanation: 'Numbers 18:2 (ESV): "That they may be joined to you and minister to you..."',
        difficulty: 'easy'
      },
      {
        id: 'num18-q3',
        question: 'What are the Levites NOT allowed to come near?',
        options: ['The vessels of the sanctuary and the altar', 'The tent itself', 'The camp', 'Moses'],
        correctAnswer: 'The vessels of the sanctuary and the altar',
        explanation: 'Numbers 18:3 (ESV): "But they shall not come near to the vessels of the sanctuary or to the altar..."',
        difficulty: 'easy'
      },
      {
        id: 'num18-q4',
        question: 'What portion is given to the Levites as an inheritance?',
        options: ['All the tithe in Israel', 'Land in Canaan', 'Gold', 'The spoils of war'],
        correctAnswer: 'All the tithe in Israel',
        explanation: 'Numbers 18:21 (ESV): "To the Levites I have given every tithe in Israel for an inheritance..."',
        difficulty: 'easy'
      },
      {
        id: 'num18-q5',
        question: 'What portion is given to Aaron and his sons?',
        options: ['The heave offerings, first fruits, and firstborn redemption', 'The tithe', 'The land', 'The flocks'],
        correctAnswer: 'The heave offerings, first fruits, and firstborn redemption',
        explanation: 'Numbers 18:8, 12-15 lists the specific offerings given to the priests.',
        difficulty: 'easy'
      },
      {
        id: 'num18-q6',
        question: 'Does Aaron serve continuously?',
        options: ['It is a statute forever, a covenant of salt', 'Until he is 50', 'For 10 years', 'Until Moses dies'],
        correctAnswer: 'It is a statute forever, a covenant of salt',
        explanation: 'Numbers 18:19 (ESV): "It is a covenant of salt forever before the Lord..."',
        difficulty: 'medium'
      },
      {
        id: 'num18-q7',
        question: 'What inheritance does Aaron have in the land?',
        options: ['None; the Lord is his portion', 'Hebron', 'Jericho', 'Manasseh'],
        correctAnswer: 'None; the Lord is his portion',
        explanation: 'Numbers 18:20 (ESV): "You shall have no inheritance in their land... I am your portion and your inheritance."',
        difficulty: 'medium'
      },
      {
        id: 'num18-q8',
        question: 'What must the Levites do with the tithe they receive?',
        options: ['Offer a tithe of it (tithe of the tithe) to the Lord/Aaron', 'Keep it all', 'Burn it', 'Give it to the poor'],
        correctAnswer: 'Offer a tithe of it (tithe of the tithe) to the Lord/Aaron',
        explanation: 'Numbers 18:26 (ESV): "You shall present... a tithe of the tithe."',
        difficulty: 'medium'
      },
      {
        id: 'num18-q9',
        question: 'Who eats the most holy things?',
        options: ['Every male among the priests', 'Anyone', 'The Levites', 'Moses'],
        correctAnswer: 'Every male among the priests',
        explanation: 'Numbers 18:10 (ESV): "Every male shall eat it."',
        difficulty: 'medium'
      },
      {
        id: 'num18-q10',
        question: 'Who eats the heave offerings (breasts/thighs)?',
        options: ['Aaron and his sons and daughters (everyone clean in the house)', 'Only males', 'Only Aaron', 'The stranger'],
        correctAnswer: 'Aaron and his sons and daughters (everyone clean in the house)',
        explanation: 'Numbers 18:11 (ESV): "Everyone who is clean in your house may eat it."',
        difficulty: 'medium'
      },
      {
        id: 'num18-q11',
        question: 'The redemption price for a firstborn male is?',
        options: ['Five shekels', 'Ten shekels', 'One shekel', 'Fifty shekels'],
        correctAnswer: 'Five shekels',
        explanation: 'Numbers 18:16 (ESV): "...fix at five shekels..."',
        difficulty: 'hard'
      },
      {
        id: 'num18-q12',
        question: 'Firstborn of which animals are NOT redeemed but sacrificed?',
        options: ['Ox, sheep, goat (clean animals)', 'Donkey, camel', 'Lion', 'Dog'],
        correctAnswer: 'Ox, sheep, goat (clean animals)',
        explanation: 'Numbers 18:17 (ESV): "But the firstborn of a cow, or the firstborn of a sheep, or the firstborn of a goat, you shall not redeem; they are holy."',
        difficulty: 'hard'
      },
      {
        id: 'num18-q13',
        question: 'Why are the Levites given the tithe?',
        options: ['In return for their service that they do', 'Because they are poor', 'Because they are many', 'Because they fought'],
        correctAnswer: 'In return for their service that they do',
        explanation: 'Numbers 18:21 (ESV): "...in return for their service that they do, their service in the tent of meeting."',
        difficulty: 'hard'
      },
      {
        id: 'num18-q14',
        question: 'The "covenant of salt" signifies what?',
        options: ['Permanence/Perpetuity', 'Taste', 'Purity', 'Judgment'],
        correctAnswer: 'Permanence/Perpetuity',
        explanation: 'Biblical idiom for an enduring, unbreakable covenant (v19).',
        difficulty: 'hard'
      },
      {
        id: 'num18-q15',
        question: 'If Levites do not offer the best part, what happens?',
        options: ['They bear sin and die', 'They are fined', 'Nothing', 'They are moved'],
        correctAnswer: 'They bear sin and die',
        explanation: 'Numbers 18:32 (ESV): "And you shall bear no sin... when you have contributed the best of it. But... lest you die."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 18:20',
    key_verse_text: "And the Lord said to Aaron, 'You shall have no inheritance in their land... I am your portion and your inheritance among the people of Israel.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-19',
    bookId: 'numbers',
    chapter: 19,
    title: 'Water of Purification',
    questions: [
      {
        id: 'num19-q1',
        question: 'What animal was required for the water of purification ordinance?',
        options: ['A red heifer without defect', 'A white lamb', 'A black goat', 'A bull'],
        correctAnswer: 'A red heifer without defect',
        explanation: 'Numbers 19:2 (ESV): "Bring you a red heifer without defect..."',
        difficulty: 'easy'
      },
      {
        id: 'num19-q2',
        question: 'Where was the heifer to be slaughtered?',
        options: ['Outside the camp', 'At the altar', 'In the tent', 'In the river'],
        correctAnswer: 'Outside the camp',
        explanation: 'Numbers 19:3 (ESV): "And you shall give it to Eleazar... and it shall be taken outside the camp and slaughtered..."',
        difficulty: 'easy'
      },
      {
        id: 'num19-q3',
        question: 'What was thrown into the fire with the heifer?',
        options: ['Cedarwood, hyssop, and scarlet yarn', 'Gold and silver', 'Grain and oil', 'Incense'],
        correctAnswer: 'Cedarwood, hyssop, and scarlet yarn',
        explanation: 'Numbers 19:6 (ESV): "And the priest shall take cedarwood and hyssop and scarlet yarn, and throw them into the fire..."',
        difficulty: 'easy'
      },
      {
        id: 'num19-q4',
        question: 'What were the ashes used for?',
        options: ['For the water for impurity', 'For compost', 'For anointing', 'For building'],
        correctAnswer: 'For the water for impurity',
        explanation: 'Numbers 19:9 (ESV): "Kept for the water for impurity."',
        difficulty: 'easy'
      },
      {
        id: 'num19-q5',
        question: 'Touching a dead body made one unclean for how long?',
        options: ['Seven days', 'One day', 'Three days', 'Forty days'],
        correctAnswer: 'Seven days',
        explanation: 'Numbers 19:11 (ESV): "Whoever touches the dead body... shall be unclean seven days."',
        difficulty: 'easy'
      },
      {
        id: 'num19-q6',
        question: 'On which days must the unclean person cleanse himself?',
        options: ['The third day and the seventh day', 'The first and last', 'Every day', 'The fifth day'],
        correctAnswer: 'The third day and the seventh day',
        explanation: 'Numbers 19:12 (ESV): "He shall cleanse himself with the water on the third day and on the seventh day..."',
        difficulty: 'medium'
      },
      {
        id: 'num19-q7',
        question: 'What happens to the open vessel in a tent with a dead body?',
        options: ['It is unclean', 'It is clean', 'It must be washed', 'It is broken'],
        correctAnswer: 'It is unclean',
        explanation: 'Numbers 19:15 (ESV): "And every open vessel that has no cover fastened on it is unclean."',
        difficulty: 'medium'
      },
      {
        id: 'num19-q8',
        question: 'Who gathered the ashes of the heifer?',
        options: ['A man who is clean', 'The priest', 'The leper', 'A child'],
        correctAnswer: 'A man who is clean',
        explanation: 'Numbers 19:9 (ESV): "And a man who is clean shall gather up the ashes..."',
        difficulty: 'medium'
      },
      {
        id: 'num19-q9',
        question: 'If one fails to cleanse himself, what is the consequence?',
        options: ['He defiles the tabernacle of the Lord and shall be cut off', 'He is fined', 'He is washed by force', 'He is ignored'],
        correctAnswer: 'He defiles the tabernacle of the Lord and shall be cut off',
        explanation: 'Numbers 19:13 (ESV): "Defiles the tabernacle of the Lord, and that person shall be cut off..."',
        difficulty: 'medium'
      },
      {
        id: 'num19-q10',
        question: 'Does the one who sprinkles the water become unclean?',
        options: ['Yes, he shall wash his clothes and be unclean until evening', 'No', 'Only if he touches it', 'For seven days'],
        correctAnswer: 'Yes, he shall wash his clothes and be unclean until evening',
        explanation: 'Numbers 19:21 (ESV): "He who sprinkles the water for impurity shall wash his clothes... unclean until evening."',
        difficulty: 'medium'
      },
      {
        id: 'num19-q11',
        question: 'Is this statute for the stranger as well?',
        options: ['Yes, a statute forever', 'No', 'Only for priests', 'Only for slaves'],
        correctAnswer: 'Yes, a statute forever',
        explanation: 'Numbers 19:10 (ESV): "It shall be for the people of Israel and for the stranger... a statute forever."',
        difficulty: 'hard'
      },
      {
        id: 'num19-q12',
        question: 'What makes the red heifer unique in sacrifices?',
        options: ['Slaughtered outside the camp and wholly burnt to ash', 'Eaten', 'Shared', 'Waved'],
        correctAnswer: 'Slaughtered outside the camp and wholly burnt to ash',
        explanation: 'Most sacrifices are at the altar; this one is wholly outside to produce ash for water.',
        difficulty: 'hard'
      },
      {
        id: 'num19-q13',
        question: 'What plant is used in the sprinkling device?',
        options: ['Hyssop', 'Cedar', 'Palm', 'Olive'],
        correctAnswer: 'Hyssop',
        explanation: 'Numbers 19:18 (ESV): "Then a clean person shall take hyssop and dip it in the water..."',
        difficulty: 'hard'
      },
      {
        id: 'num19-q14',
        question: 'Who applies the blood to the tent of meeting?',
        options: ['Eleazar sprinkles it toward the front', 'Moses', 'Aaron', 'No one'],
        correctAnswer: 'Eleazar sprinkles it toward the front',
        explanation: 'Numbers 19:4 (ESV): "And Eleazar the priest... sprinkle some of its blood toward the front of the tent of meeting seven times."',
        difficulty: 'hard'
      },
      {
        id: 'num19-q15',
        question: 'Touching a grave makes one unclean for how long?',
        options: ['Seven days', 'One day', 'Evening', 'Forever'],
        correctAnswer: 'Seven days',
        explanation: 'Numbers 19:16 (ESV): "Whoever in the open field touches... a grave, shall be unclean seven days."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 19:2',
    key_verse_text: "Tell the people of Israel to bring you a red heifer without defect, in which there is no blemish, and on which a yoke has never come.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-20',
    bookId: 'numbers',
    chapter: 20,
    title: 'Water from the Rock',
    questions: [
      {
        id: 'num20-q1',
        question: 'Who died and was buried at Kadesh?',
        options: ['Miriam', 'Aaron', 'Moses', 'Zipporah'],
        correctAnswer: 'Miriam',
        explanation: 'Numbers 20:1 (ESV): "And Miriam died there and was buried there."',
        difficulty: 'easy'
      },
      {
        id: 'num20-q2',
        question: 'What did the people complain about at Kadesh?',
        options: ['No water', 'No meat', 'Enemies', 'Sickness'],
        correctAnswer: 'No water',
        explanation: 'Numbers 20:2 (ESV): "Now there was no water for the congregation..."',
        difficulty: 'easy'
      },
      {
        id: 'num20-q3',
        question: 'What did God command Moses to do to the rock?',
        options: ['Tell the rock before their eyes to yield its water', 'Strike it twice', 'Strike it once', 'Pour water on it'],
        correctAnswer: 'Tell the rock before their eyes to yield its water',
        explanation: 'Numbers 20:8 (ESV): "Tell the rock before their eyes to yield its water."',
        difficulty: 'easy'
      },
      {
        id: 'num20-q4',
        question: 'What did Moses do instead?',
        options: ['Struck the rock with his staff twice', 'Spoke to it', 'Prayed', 'Dug a well'],
        correctAnswer: 'Struck the rock with his staff twice',
        explanation: 'Numbers 20:11 (ESV): "And Moses lifted up his hand and struck the rock with his staff twice..."',
        difficulty: 'easy'
      },
      {
        id: 'num20-q5',
        question: 'What was God\'s punishment for Moses and Aaron?',
        options: ['They would not bring the assembly into the land', 'They died instantly', 'They lost the priesthood', 'They were struck with leprosy'],
        correctAnswer: 'They would not bring the assembly into the land',
        explanation: 'Numbers 20:12 (ESV): "Because you did not believe in me... you shall not bring this assembly into the land..."',
        difficulty: 'easy'
      },
      {
        id: 'num20-q6',
        question: 'What was the name of the water?',
        options: ['Meribah', 'Marah', 'Elim', 'Jordan'],
        correctAnswer: 'Meribah',
        explanation: 'Numbers 20:13 (ESV): "These are the waters of Meribah..."',
        difficulty: 'medium'
      },
      {
        id: 'num20-q7',
        question: 'Which king refused Israel passage through his territory?',
        options: ['King of Edom', 'King of Moab', 'King of Ammon', 'King of Egypt'],
        correctAnswer: 'King of Edom',
        explanation: 'Numbers 20:14, 18 (ESV): "Moses sent messengers... to the king of Edom... But Edom said... You shall not pass..."',
        difficulty: 'medium'
      },
      {
        id: 'num20-q8',
        question: 'What relationship did Israel claim with Edom?',
        options: ['"Your brother Israel"', '"Your enemy"', '"Your slave"', '"Your master"'],
        correctAnswer: '"Your brother Israel"',
        explanation: 'Numbers 20:14 (ESV): "Thus says your brother Israel..."',
        difficulty: 'medium'
      },
      {
        id: 'num20-q9',
        question: 'Where did Aaron die?',
        options: ['Mount Hor', 'Mount Sinai', 'Mount Nebo', 'Kadesh'],
        correctAnswer: 'Mount Hor',
        explanation: 'Numbers 20:22 (ESV): "And... came to Mount Hor."',
        difficulty: 'medium'
      },
      {
        id: 'num20-q10',
        question: 'Who succeeded Aaron as high priest?',
        options: ['Eleazar', 'Ithamar', 'Phinehas', 'Joshua'],
        correctAnswer: 'Eleazar',
        explanation: 'Numbers 20:26 (ESV): "Strip Aaron of his garments and put them on Eleazar his son."',
        difficulty: 'medium'
      },
      {
        id: 'num20-q11',
        question: 'How long did the house of Israel mourn for Aaron?',
        options: ['Thirty days', 'Seven days', 'Forty days', 'One day'],
        correctAnswer: 'Thirty days',
        explanation: 'Numbers 20:29 (ESV): "...they wept for Aaron thirty days..."',
        difficulty: 'medium'
      },
      {
        id: 'num20-q12',
        question: 'Moses called the people what name at the rock?',
        options: ['Rebels', 'Friends', 'Children', 'Warriors'],
        correctAnswer: 'Rebels',
        explanation: 'Numbers 20:10 (ESV): "Hear now, you rebels; shall we bring water for you out of this rock?"',
        difficulty: 'hard'
      },
      {
        id: 'num20-q13',
        question: 'Did Edom come out to fight Israel?',
        options: ['Yes, with a large army', 'No, they stayed behind walls', 'They tricked them', 'They ran away'],
        correctAnswer: 'Yes, with a large army',
        explanation: 'Numbers 20:20 (ESV): "And Edom came out against them with a large army..."',
        difficulty: 'hard'
      },
      {
        id: 'num20-q14',
        question: 'The highway Israel wanted to take was called?',
        options: ['The King\'s Highway', 'The Way of the Sea', 'The Desert Road', 'The Trade Route'],
        correctAnswer: 'The King\'s Highway',
        explanation: 'Numbers 20:17 (ESV): "We will go along the King\'s Highway..."',
        difficulty: 'hard'
      },
      {
        id: 'num20-q15',
        question: 'What did God say Moses and Aaron failed to do?',
        options: ['Uphold me as holy in the eyes of the people', 'Speak loud enough', 'Hit the rock harder', 'Pray first'],
        correctAnswer: 'Uphold me as holy in the eyes of the people',
        explanation: 'Numbers 20:12 (ESV): "...to uphold me as holy in the eyes of the people of Israel..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 20:12',
    key_verse_text: "And the Lord said to Moses and Aaron, 'Because you did not believe in me, to uphold me as holy in the eyes of the people of Israel, therefore you shall not bring this assembly into the land...'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-21',
    bookId: 'numbers',
    chapter: 21,
    title: 'Bronze Serpent and Victories',
    questions: [
      {
        id: 'num21-q1',
        question: 'Which Canaanite king fought against Israel and took prisoners?',
        options: ['King of Arad', 'King of Jericho', 'King of Ai', 'King of Hebron'],
        correctAnswer: 'King of Arad',
        explanation: 'Numbers 21:1 (ESV): "The king of Arad... heard that Israel was coming... and he fought... took some of them captive."',
        difficulty: 'easy'
      },
      {
        id: 'num21-q2',
        question: 'What vow did Israel make to God regarding the Canaanites?',
        options: ['"If you will give this people into my hand, I will devote their cities to destruction."', '"We will offer sacrifices"', '"We will never sin again"', '"We will build a temple"'],
        correctAnswer: '"If you will give this people into my hand, I will devote their cities to destruction."',
        explanation: 'Numbers 21:2 (ESV): "And Israel vowed a vow to the Lord and said, \'If you will indeed give this people into my hand...\'"',
        difficulty: 'easy'
      },
      {
        id: 'num21-q3',
        question: 'Why did the people become impatient on the way around Edom?',
        options: ['The journey was long and hard, and they lacked food and water', 'They were lost', 'They were attacked', 'They missed Egypt'],
        correctAnswer: 'The journey was long and hard, and they lacked food and water',
        explanation: 'Numbers 21:4-5 (ESV): "And the people became impatient on the way... \'Why have you brought us up out of Egypt to die in the wilderness?\'"',
        difficulty: 'easy'
      },
      {
        id: 'num21-q4',
        question: 'What did God send among the people as punishment for complaining?',
        options: ['Fiery serpents', 'Locusts', 'Frogs', 'Hail'],
        correctAnswer: 'Fiery serpents',
        explanation: 'Numbers 21:6 (ESV): "Then the Lord sent fiery serpents among the people, and they bit the people..."',
        difficulty: 'easy'
      },
      {
        id: 'num21-q5',
        question: 'What did Moses make to save the people?',
        options: ['A bronze serpent set on a pole', 'A golden calf', 'A silver altar', 'A wooden cross'],
        correctAnswer: 'A bronze serpent set on a pole',
        explanation: 'Numbers 21:9 (ESV): "So Moses made a bronze serpent and set it on a pole."',
        difficulty: 'easy'
      },
      {
        id: 'num21-q6',
        question: 'What happened if a bitten person looked at the bronze serpent?',
        options: ['He lived', 'He died instantly', 'He was healed of all diseases', 'He became a priest'],
        correctAnswer: 'He lived',
        explanation: 'Numbers 21:9 (ESV): "And if a serpent bit anyone, he would look at the bronze serpent and live."',
        difficulty: 'medium'
      },
      {
        id: 'num21-q7',
        question: 'Israel defeated Sihon king of what people?',
        options: ['Amorites', 'Moabites', 'Edomites', 'Philistines'],
        correctAnswer: 'Amorites',
        explanation: 'Numbers 21:21, 23 (ESV): "Israel sent messengers to Sihon king of the Amorites... Sihon gathered all his people... and fought..."',
        difficulty: 'medium'
      },
      {
        id: 'num21-q8',
        question: 'Israel defeated Og king of what place?',
        options: ['Bashan', 'Jericho', 'Ai', 'Heshbon'],
        correctAnswer: 'Bashan',
        explanation: 'Numbers 21:33 (ESV): "Then they turned and went up by the way to Bashan. And Og the king of Bashan came out..."',
        difficulty: 'medium'
      },
      {
        id: 'num21-q9',
        question: 'What was the name of the place where they defeated Arad?',
        options: ['Hormah', 'Kadesh', 'Elim', 'Marah'],
        correctAnswer: 'Hormah',
        explanation: 'Numbers 21:3 (ESV): "So the name of the place was called Hormah (Destruction)."',
        difficulty: 'medium'
      },
      {
        id: 'num21-q10',
        question: 'Where did Israel camp after defeating Og?',
        options: ['In the plains of Moab beyond the Jordan at Jericho', 'By the Red Sea', 'At Heshbon', 'At Sinai'],
        correctAnswer: 'In the plains of Moab beyond the Jordan at Jericho',
        explanation: 'Numbers 22:1 (often grouped with end of 21 narrative): "Then the people of Israel set out and camped in the plains of Moab..."',
        difficulty: 'medium'
      },
      {
        id: 'num21-q11',
        question: 'What song did Israel sing at the well calling "Spring up, O well!"?',
        options: ['"Spring up, O well! - Sing to it!"', '"The Horse and Rider"', '"Great is the Lord"', '"Moses\' Song"'],
        correctAnswer: '"Spring up, O well! - Sing to it!"',
        explanation: 'Numbers 21:17 (ESV): "Then Israel sang this song: \'Spring up, O well!—Sing to it!\'"',
        difficulty: 'hard'
      },
      {
        id: 'num21-q12',
        question: 'Heshbon was the city of which king?',
        options: ['Sihon', 'Og', 'Balak', 'Balaam'],
        correctAnswer: 'Sihon',
        explanation: 'Numbers 21:26 (ESV): "For Heshbon was the city of Sihon the king of the Amorites..."',
        difficulty: 'hard'
      },
      {
        id: 'num21-q13',
        question: 'What river marked the border between Moab and the Amorites?',
        options: ['Arnon', 'Jabbok', 'Jordan', 'Nile'],
        correctAnswer: 'Arnon',
        explanation: 'Numbers 21:13 (ESV): "For the Arnon is the border of Moab, between Moab and the Amorites."',
        difficulty: 'hard'
      },
      {
        id: 'num21-q14',
        question: 'The "Book of the Wars of the Lord" is mentioned in connection with what?',
        options: ['Waheb in Suphah and the valleys of the Arnon', 'The battle of Jericho', 'The Red Sea crossing', 'The defeat of Og'],
        correctAnswer: 'Waheb in Suphah and the valleys of the Arnon',
        explanation: 'Numbers 21:14 (ESV): "Therefore it is said in the Book of the Wars of the Lord, \'Waheb in Suphah...\'"',
        difficulty: 'hard'
      },
      {
        id: 'num21-q15',
        question: 'Did God tell Moses to fear Og?',
        options: ['"Do not fear him, for I have given him into your hand"', '"Be careful"', '"Run away"', '"Make a treaty"'],
        correctAnswer: '"Do not fear him, for I have given him into your hand"',
        explanation: 'Numbers 21:34 (ESV): "But the Lord said to Moses, \'Do not fear him, for I have given him into your hand...\'"',
        difficulty: 'hard'
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
        question: 'Who was Balak son of Zippor?',
        options: ['King of Moab', 'King of Edom', 'King of Ammon', 'A prophet'],
        correctAnswer: 'King of Moab',
        explanation: 'Numbers 22:4 (ESV): "Balak the son of Zippor was king of Moab at that time."',
        difficulty: 'easy'
      },
      {
        id: 'num22-q2',
        question: 'Who did Balak send for to curse Israel?',
        options: ['Balaam son of Beor', 'Moses', 'Jethro', 'Og'],
        correctAnswer: 'Balaam son of Beor',
        explanation: 'Numbers 22:5 (ESV): "He sent messengers to Balaam the son of Beor..."',
        difficulty: 'easy'
      },
      {
        id: 'num22-q3',
        question: 'Where was Balaam from?',
        options: ['Pethor, on the river', 'Jericho', 'Egypt', 'Moab'],
        correctAnswer: 'Pethor, on the river',
        explanation: 'Numbers 22:5 (ESV): "...at Pethor, which is near the River..."',
        difficulty: 'easy'
      },
      {
        id: 'num22-q4',
        question: 'What did God initially say to Balaam?',
        options: ['"You shall not go with them. You shall not curse the people, for they are blessed."', '"Go with them"', '"Curse them only a little"', '"Ask for more money"'],
        correctAnswer: '"You shall not go with them. You shall not curse the people, for they are blessed."',
        explanation: 'Numbers 22:12 (ESV): "God said to Balaam, \'You shall not go with them. You shall not curse the people, for they are blessed.\'"',
        difficulty: 'easy'
      },
      {
        id: 'num22-q5',
        question: 'When Balaam went with the princes later, what stood in his way?',
        options: ['The angel of the Lord with a drawn sword', 'A lion', 'A wall', 'A fire'],
        correctAnswer: 'The angel of the Lord with a drawn sword',
        explanation: 'Numbers 22:22 (ESV): "But God\'s anger was kindled... and the angel of the Lord took his stand in the way as his adversary."',
        difficulty: 'easy'
      },
      {
        id: 'num22-q6',
        question: 'What saw the angel first?',
        options: ['Balaam\'s donkey', 'Balaam', 'The servants', 'Balak'],
        correctAnswer: 'Balaam\'s donkey',
        explanation: 'Numbers 22:23 (ESV): "And the donkey saw the angel of the Lord standing in the road..."',
        difficulty: 'medium'
      },
      {
        id: 'num22-q7',
        question: 'How many times did Balaam strike his donkey?',
        options: ['Three times', 'Once', 'Seven times', 'Ten times'],
        correctAnswer: 'Three times',
        explanation: 'Numbers 22:28 (ESV): "What have I done to you, that you have struck me these three times?"',
        difficulty: 'medium'
      },
      {
        id: 'num22-q8',
        question: 'What miraculous thing did the donkey do?',
        options: ['It spoke to Balaam', 'It flew', 'It disappeared', 'It fought the angel'],
        correctAnswer: 'It spoke to Balaam',
        explanation: 'Numbers 22:28 (ESV): "Then the Lord opened the mouth of the donkey, and she said to Balaam..."',
        difficulty: 'medium'
      },
      {
        id: 'num22-q9',
        question: 'When Balaam\'s eyes were opened, what did he do?',
        options: ['He bowed down and fell on his face', 'He ran away', 'He laughed', 'He argued'],
        correctAnswer: 'He bowed down and fell on his face',
        explanation: 'Numbers 22:31 (ESV): "And he bowed down and fell on his face."',
        difficulty: 'medium'
      },
      {
        id: 'num22-q10',
        question: 'What did the angel warn Balaam to speak?',
        options: ['"Only the word that I shall speak to you"', '"Whatever Balak wants"', '"Blessings and curses"', '"Nothing"'],
        correctAnswer: '"Only the word that I shall speak to you"',
        explanation: 'Numbers 22:35 (ESV): "Go with the men, but speak only the word that I tell you."',
        difficulty: 'medium'
      },
      {
        id: 'num22-q11',
        question: 'What reason did Balak give for wanting Israel cursed?',
        options: ['They are too mighty for me', 'They stole my land', 'They are ugly', 'They are few'],
        correctAnswer: 'They are too mighty for me',
        explanation: 'Numbers 22:6 (ESV): "Come now, curse this people for me, since they are too mighty for me."',
        difficulty: 'hard'
      },
      {
        id: 'num22-q12',
        question: 'Did God give Balaam permission to go the second time?',
        options: ['Yes, "rise, go with them; but only do what I tell you"', 'No, he went against God\'s will entirely', 'God was silent', 'An angel told him to go'],
        correctAnswer: 'Yes, "rise, go with them; but only do what I tell you"',
        explanation: 'Numbers 22:20 (ESV): "If the men have come to call you, rise, go with them..." (Though His anger kindled because he went - seemingly with wrong motive).',
        difficulty: 'hard'
      },
      {
        id: 'num22-q13',
        question: 'Where did the donkey crush Balaam\'s foot?',
        options: ['Against a wall in a narrow path between vineyards', 'On a bridge', 'In a field', 'By the river'],
        correctAnswer: 'Against a wall in a narrow path between vineyards',
        explanation: 'Numbers 22:24-25 (ESV): "The angel... stood in a narrow path between the vineyards, with a wall on either side... crushed Balaam\'s foot against the wall."',
        difficulty: 'hard'
      },
      {
        id: 'num22-q14',
        question: 'The elders of Moab and Midian departed with what in their hands?',
        options: ['Fees for divination', 'Swords', 'Gifts of gold', 'Scrolls'],
        correctAnswer: 'Fees for divination',
        explanation: 'Numbers 22:7 (ESV): "So the elders... departed with the fees for divination in their hand."',
        difficulty: 'hard'
      },
      {
        id: 'num22-q15',
        question: 'Where did Balak meet Balaam initially?',
        options: ['At the city of Moab', 'At the river', 'In Pethor', 'In Jerusalem'],
        correctAnswer: 'At the city of Moab',
        explanation: 'Numbers 22:36 (ESV): "When Balak heard... he went out to meet him at the city of Moab..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 22:38',
    key_verse_text: "Balaam said to Balak, 'Behold, I have come to you! Have I now any power of my own to speak anything? The word that God puts in my mouth, that must I speak.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-23',
    bookId: 'numbers',
    chapter: 23,
    title: 'Balaam\'s Oracles',
    questions: [
      {
        id: 'num23-q1',
        question: 'How many altars did Balaam ask Balak to build?',
        options: ['Seven', 'Twelve', 'Three', 'One'],
        correctAnswer: 'Seven',
        explanation: 'Numbers 23:1 (ESV): "Build for me here seven altars..."',
        difficulty: 'easy'
      },
      {
        id: 'num23-q2',
        question: 'Instead of cursing, what did Balaam do?',
        options: ['He blessed Israel', 'He stayed silent', 'He ran away', 'He cursed Moab'],
        correctAnswer: 'He blessed Israel',
        explanation: 'Numbers 23:11 (ESV): "I took you to curse my enemies, and behold, you have done nothing but bless them."',
        difficulty: 'easy'
      },
      {
        id: 'num23-q3',
        question: 'In the first oracle, Balaam said, "How can I curse whom...?"',
        options: ['God has not cursed', 'The king has blessed', 'I love', 'I fear'],
        correctAnswer: 'God has not cursed',
        explanation: 'Numbers 23:8 (ESV): "How can I curse whom God has not cursed?"',
        difficulty: 'easy'
      },
      {
        id: 'num23-q4',
        question: 'In the second oracle, Balaam said, "God is not man, that he should...?"',
        options: ['Lie', 'Sleep', 'Eat', 'Die'],
        correctAnswer: 'Lie',
        explanation: 'Numbers 23:19 (ESV): "God is not man, that he should lie, or a son of man, that he should change his mind."',
        difficulty: 'easy'
      },
      {
        id: 'num23-q5',
        question: 'What did Balak do after the first blessing?',
        options: ['He took him to another place (Field of Zophim)', 'He killed him', 'He paid him anyway', 'He joined Israel'],
        correctAnswer: 'He took him to another place (Field of Zophim)',
        explanation: 'Numbers 23:14 (ESV): "And he took him to the field of Zophim..."',
        difficulty: 'easy'
      },
      {
        id: 'num23-q6',
        question: 'Balaam compared Israel\'s strength to what animal?',
        options: ['Wild ox', 'Lion', 'Eagle', 'Bear'],
        correctAnswer: 'Wild ox',
        explanation: 'Numbers 23:22 (ESV): "They have as it were the horns of a wild ox."',
        difficulty: 'medium'
      },
      {
        id: 'num23-q7',
        question: 'What did Balaam say about omens against Jacob?',
        options: ['There is no enchantment against Jacob, no omen against Israel', 'They are powerful', 'Only Balak can use them', 'They work at night'],
        correctAnswer: 'There is no enchantment against Jacob, no omen against Israel',
        explanation: 'Numbers 23:23 (ESV): "For there is no enchantment against Jacob, no omen against Israel."',
        difficulty: 'medium'
      },
      {
        id: 'num23-q8',
        question: 'From where did Balaam view the people first?',
        options: ['Bamoth-baal', 'Mount Sinai', 'The Jordan', 'Jericho'],
        correctAnswer: 'Bamoth-baal',
        explanation: 'Numbers 22:41 (preceding 23:1): "...took Balaam and brought him up to Bamoth-baal, and from there he saw a fraction of the people."',
        difficulty: 'medium'
      },
      {
        id: 'num23-q9',
        question: 'What animals were sacrificed on each altar?',
        options: ['A bull and a ram', 'A lamb and a goat', 'Two doves', 'A heifer'],
        correctAnswer: 'A bull and a ram',
        explanation: 'Numbers 23:2 (ESV): "...offered on each altar a bull and a ram."',
        difficulty: 'medium'
      },
      {
        id: 'num23-q10',
        question: 'Balaam wished his end to be like whom?',
        options: ['The upright (Israel)', 'The rich', 'Kings', 'Prophets'],
        correctAnswer: 'The upright (Israel)',
        explanation: 'Numbers 23:10 (ESV): "Let me die the death of the upright, and let my end be like his!"',
        difficulty: 'medium'
      },
      {
        id: 'num23-q11',
        question: 'The Lord put a word in Balaam\'s mouth. Where did Balaam go to receive it?',
        options: ['He went to a bare height separate from Balak', 'In the tent', 'In the valley', 'In a cave'],
        correctAnswer: 'He went to a bare height separate from Balak',
        explanation: 'Numbers 23:3 (ESV): "Stand beside your burnt offering, and I will go... And he went to a bare height."',
        difficulty: 'hard'
      },
      {
        id: 'num23-q12',
        question: 'Balaam described the people of Israel as dwelling how?',
        options: ['Alone, and not counting itself among the nations', 'Together with Moab', 'In tents of wickedness', 'In fear'],
        correctAnswer: 'Alone, and not counting itself among the nations',
        explanation: 'Numbers 23:9 (ESV): "Behold, a people dwelling alone, and not counting itself among the nations!"',
        difficulty: 'hard'
      },
      {
        id: 'num23-q13',
        question: 'In the second oracle, Balaam said the Lord has not beheld what in Jacob?',
        options: ['Misfortune or trouble (iniquity)', 'Wealth', 'Beauty', 'Strength'],
        correctAnswer: 'Misfortune or trouble (iniquity)',
        explanation: 'Numbers 23:21 (ESV): "He has not beheld misfortune in Jacob, nor has he seen trouble in Israel."' ,
        difficulty: 'hard'
      },
      {
        id: 'num23-q14',
        question: 'Where was the third location Balak took Balaam?',
        options: ['Top of Peor', 'Mount Sinai', 'Horeb', 'Elim'],
        correctAnswer: 'Top of Peor',
        explanation: 'Numbers 23:28 (ESV): "And Balak took Balaam to the top of Peor..."',
        difficulty: 'hard'
      },
      {
        id: 'num23-q15',
        question: 'Did Balak build seven altars at the third location too?',
        options: ['Yes', 'No', 'Only three', 'Twice as many'],
        correctAnswer: 'Yes',
        explanation: 'Numbers 23:29-30 (ESV): "Build for me here seven altars... And Balak did as Balaam had said..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 23:19',
    key_verse_text: "God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it? Or has he spoken, and will he not fulfill it?",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-24',
    bookId: 'numbers',
    chapter: 24,
    title: 'Balaam Blesses Israel',
    questions: [
      {
        id: 'num24-q1',
        question: 'When Balaam saw that it pleased the Lord to bless Israel, what did he NOT do this time?',
        options: ['He did not go, as at other times, to look for omens', 'He did not sacrifice', 'He did not speak', 'He did not stand up'],
        correctAnswer: 'He did not go, as at other times, to look for omens',
        explanation: 'Numbers 24:1 (ESV): "He did not go, as at other times, to look for omens, but set his face toward the wilderness."',
        difficulty: 'easy'
      },
      {
        id: 'num24-q2',
        question: 'What came upon Balaam when he lifted up his eyes and saw Israel camping?',
        options: ['The Spirit of God', 'A seizure', 'Fear', 'Sleepfulness'],
        correctAnswer: 'The Spirit of God',
        explanation: 'Numbers 24:2 (ESV): "And the Spirit of God came upon him."',
        difficulty: 'easy'
      },
      {
        id: 'num24-q3',
        question: 'How did Balaam describe Israel\'s tents?',
        options: ['How lovely are your tents, O Jacob!', 'Small and dirty', 'Disordered', 'As a fortress'],
        correctAnswer: 'How lovely are your tents, O Jacob!',
        explanation: 'Numbers 24:5 (ESV): "How lovely are your tents, O Jacob, your encampments, O Israel!"',
        difficulty: 'easy'
      },
      {
        id: 'num24-q4',
        question: 'How did Balak react to the third blessing?',
        options: ['His anger was kindled, he struck his hands together, and told Balaam to flee', 'He wept', 'He converted', 'He gave more money'],
        correctAnswer: 'His anger was kindled, he struck his hands together, and told Balaam to flee',
        explanation: 'Numbers 24:10 (ESV): "And Balak\'s anger was kindled... and he struck his hands together... Flee to your place!"',
        difficulty: 'easy'
      },
      {
        id: 'num24-q5',
        question: 'Balaam prophesied: "A star shall come out of Jacob, and a ... shall rise out of Israel."',
        options: ['Scepter', 'King', 'Sword', 'Lion'],
        correctAnswer: 'Scepter',
        explanation: 'Numbers 24:17 (ESV): "A star shall come out of Jacob, and a scepter shall rise out of Israel."',
        difficulty: 'medium'
      },
      {
        id: 'num24-q6',
        question: 'What did Balaam say about the man whose eye is opened?',
        options: ['He hears the words of God and sees the vision of the Almighty', 'He is blind', 'He sees ghosts', 'He is rich'],
        correctAnswer: 'He hears the words of God and sees the vision of the Almighty',
        explanation: 'Numbers 24:3-4 (ESV): "The oracle of the man whose eye is opened... who sees the vision of the Almighty..."',
        difficulty: 'medium'
      },
      {
        id: 'num24-q7',
        question: 'Water shall flow from his buckets, and his seed shall be in...? (describing Israel)',
        options: ['Many waters', 'Dry ground', 'The rock', 'The sky'],
        correctAnswer: 'Many waters',
        explanation: 'Numbers 24:7 (ESV): "Water shall flow from his buckets, and his seed shall be in many waters."',
        difficulty: 'medium'
      },
      {
        id: 'num24-q8',
        question: 'His king shall be higher than whom?',
        options: ['Agag', 'Pharaoh', 'Sihon', 'Balak'],
        correctAnswer: 'Agag',
        explanation: 'Numbers 24:7 (ESV): "His king shall be higher than Agag, and his kingdom shall be exalted."',
        difficulty: 'medium'
      },
      {
        id: 'num24-q9',
        question: 'Who crouches as a lion?',
        options: ['Israel', 'Moab', 'Midian', 'Edom'],
        correctAnswer: 'Israel',
        explanation: 'Numbers 24:9 (ESV): "He crouched, he lay down as a lion and as a lioness; who will rouse him up?"',
        difficulty: 'medium'
      },
      {
        id: 'num24-q10',
        question: 'Balaam said, "I see him, but not now; I behold him, but...?"',
        options: ['Not near', 'Not clearly', 'Not far', 'Not forever'],
        correctAnswer: 'Not near',
        explanation: 'Numbers 24:17 (ESV): "I see him, but not now; I behold him, but not near."',
        difficulty: 'hard'
      },
      {
        id: 'num24-q11',
        question: 'Whom shall the star/scepter crush?',
        options: ['The forehead of Moab', 'The head of Egypt', 'The gates of Babylon', 'The walls of Jericho'],
        correctAnswer: 'The forehead of Moab',
        explanation: 'Numbers 24:17 (ESV): "It shall crush the forehead of Moab and break down all the sons of Sheth."',
        difficulty: 'hard'
      },
      {
        id: 'num24-q12',
        question: 'What did Balaam say about Amalek?',
        options: ['Amalek was the first of the nations, but his end is destruction', 'They will rule forever', 'They are friends', 'They will be saved'],
        correctAnswer: 'Amalek was the first of the nations, but his end is destruction',
        explanation: 'Numbers 24:20 (ESV): "Amalek was the first of the nations, but his end is utter destruction."',
        difficulty: 'hard'
      },
      {
        id: 'num24-q13',
        question: 'What did he say about Kenite?',
        options: ['Enduring is your dwelling place... nevertheless Kain shall be burned', 'You are blessed', 'You are forgotten', 'You are strong'],
        correctAnswer: 'Enduring is your dwelling place... nevertheless Kain shall be burned',
        explanation: 'Numbers 24:21-22 (ESV): "...your nest is set in the rock. Nevertheless, Kain shall be burned..."',
        difficulty: 'hard'
      },
      {
        id: 'num24-q14',
        question: 'Who will dispossess Edom and Seir?',
        options: ['Israel', 'Asshur', 'Chittim', 'Moab'],
        correctAnswer: 'Israel',
        explanation: 'Numbers 24:18 (ESV): "Edom shall be dispossessed; Seir also... Israel is doing valiantly."',
        difficulty: 'hard'
      },
      {
        id: 'num24-q15',
        question: 'Where did Balaam look over to see the Kenite?',
        options: ['Towards the wilderness', 'From Peor', 'From Sinai', 'From the river'],
        correctAnswer: 'From Peor',
        explanation: 'Context of the third oracle location (Peor) where he looks out.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 24:17',
    key_verse_text: "I see him, but not now; I behold him, but not near: a star shall come out of Jacob, and a scepter shall rise out of Israel; it shall crush the forehead of Moab...",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-25',
    bookId: 'numbers',
    chapter: 25,
    title: 'The Zeal of Phinehas',
    questions: [
      {
        id: 'num25-q1',
        question: 'While Israel lived in Shittim, what did the people begin to do?',
        options: ['Whore with the daughters of Moab', 'Worship the golden calf', 'Complain about water', 'Build a tower'],
        correctAnswer: 'Whore with the daughters of Moab',
        explanation: 'Numbers 25:1 (ESV): "While Israel lived in Shittim, the people began to whore with the daughters of Moab."',
        difficulty: 'easy'
      },
      {
        id: 'num25-q2',
        question: 'Which god did Israel yoke itself to?',
        options: ['Baal of Peor', 'Molech', 'Asherah', 'Dagon'],
        correctAnswer: 'Baal of Peor',
        explanation: 'Numbers 25:3 (ESV): "So Israel yoked himself to Baal of Peor."',
        difficulty: 'easy'
      },
      {
        id: 'num25-q3',
        question: 'What did God tell Moses to do to the chiefs of the people?',
        options: ['Hang them in the sun before the Lord', 'Exile them', 'Fine them', 'Forgive them'],
        correctAnswer: 'Hang them in the sun before the Lord',
        explanation: 'Numbers 25:4 (ESV): "Take all the chiefs of the people and hang them in the sun before the Lord..."',
        difficulty: 'easy'
      },
      {
        id: 'num25-q4',
        question: 'Who saw an Israelite man bring a Midianite woman to his family and took action?',
        options: ['Phinehas the son of Eleazar', 'Moses', 'Aaron', 'Joshua'],
        correctAnswer: 'Phinehas the son of Eleazar',
        explanation: 'Numbers 25:7 (ESV): "When Phinehas the son of Eleazar, son of Aaron the priest, saw it..."',
        difficulty: 'easy'
      },
      {
        id: 'num25-q5',
        question: 'What did Phinehas do?',
        options: ['Pierced both of them through with a spear', 'Rebuked them', 'Reported them', 'Prayed for them'],
        correctAnswer: 'Pierced both of them through with a spear',
        explanation: 'Numbers 25:8 (ESV): "And pierced both of them, the man of Israel and the woman, through her belly."',
        difficulty: 'easy'
      },
      {
        id: 'num25-q6',
        question: 'What happened as a result of Phinehas\' action?',
        options: ['The plague on the people of Israel was stopped', 'He was punished for murder', 'The people rebelled', 'God was angry with him'],
        correctAnswer: 'The plague on the people of Israel was stopped',
        explanation: 'Numbers 25:8 (ESV): "Thus the plague on the people of Israel was stopped."',
        difficulty: 'medium'
      },
      {
        id: 'num25-q7',
        question: 'How many died in the plague by Baal of Peor?',
        options: ['24,000', '14,700', '3,000', '10,000'],
        correctAnswer: '24,000',
        explanation: 'Numbers 25:9 (ESV): "Nevertheless, those who died by the plague were 24,000."',
        difficulty: 'medium'
      },
      {
        id: 'num25-q8',
        question: 'What covenant did God make with Phinehas?',
        options: ['Covenant of a perpetual priesthood', 'Covenant of kingship', 'Covenant of land', 'Covenant of wealth'],
        correctAnswer: 'Covenant of a perpetual priesthood',
        explanation: 'Numbers 25:13 (ESV): "And it shall be to him... the covenant of a perpetual priesthood, because he was jealous for his God..."',
        difficulty: 'medium'
      },
      {
        id: 'num25-q9',
        question: 'What was the name of the Israelite man killed?',
        options: ['Zimri the son of Salu', 'Korah', 'Dathan', 'Achan'],
        correctAnswer: 'Zimri the son of Salu',
        explanation: 'Numbers 25:14 (ESV): "The name of the slain man of Israel... was Zimri the son of Salu..."',
        difficulty: 'medium'
      },
      {
        id: 'num25-q10',
        question: 'What was the name of the Midianite woman?',
        options: ['Cozbi the daughter of Zur', 'Rahab', 'Delilah', 'Jezebel'],
        correctAnswer: 'Cozbi the daughter of Zur',
        explanation: 'Numbers 25:15 (ESV): "The name of the Midianite woman who was killed was Cozbi the daughter of Zur..."',
        difficulty: 'medium'
      },
      {
        id: 'num25-q11',
        question: 'What did God command Moses regarding the Midianites?',
        options: ['"Harass the Midianites and strike them down"', '"Make peace with them"', '"Ignore them"', '"Trade with them"'],
        correctAnswer: '"Harass the Midianites and strike them down"',
        explanation: 'Numbers 25:17 (ESV): "Harass the Midianites and strike them down."',
        difficulty: 'hard'
      },
      {
        id: 'num25-q12',
        question: 'Why did God command to strike the Midianites?',
        options: ['Because they have harassed you with their wiles (Peor incident)', 'Because they attacked with swords', 'Because they stole cattle', 'Because they mocked God'],
        correctAnswer: 'Because they have harassed you with their wiles (Peor incident)',
        explanation: 'Numbers 25:18 (ESV): "For they have harassed you with their wiles... in the matter of Peor..."',
        difficulty: 'hard'
      },
      {
        id: 'num25-q13',
        question: 'Zizri was a chief of a father\'s house from which tribe?',
        options: ['Simeon', 'Judah', 'Levi', 'Reuben'],
        correctAnswer: 'Simeon',
        explanation: 'Numbers 25:14 (ESV): "...chief of a father\'s house belonging to the Simeonites."',
        difficulty: 'hard'
      },
      {
        id: 'num25-q14',
        question: 'Zur (father of Cozbi) was what?',
        options: ['Tribal head of Midian', 'King of Moab', 'A prophet', 'A priest'],
        correctAnswer: 'Tribal head of Midian',
        explanation: 'Numbers 25:15 (ESV): "Who was the tribal head of a father\'s house in Midian."',
        difficulty: 'hard'
      },
      {
        id: 'num25-q15',
        question: 'Phinehas turned back God\'s...?',
        options: ['Wrath', 'Hand', 'Face', 'Voice'],
        correctAnswer: 'Wrath',
        explanation: 'Numbers 25:11 (ESV): "Phinehas... has turned back my wrath from the people of Israel."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 25:11',
    key_verse_text: "Phinehas the son of Eleazar, son of Aaron the priest, has turned back my wrath from the people of Israel, in that he was jealous with my jealousy among them...",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-26',
    bookId: 'numbers',
    chapter: 26,
    title: 'The Second Census',
    questions: [
      {
        id: 'num26-q1',
        question: 'After the plague, who did God command to take a census?',
        options: ['Moses and Eleazar the son of Aaron', 'Moses and Joshua', 'Aaron and Hur', 'Caleb and Joshua'],
        correctAnswer: 'Moses and Eleazar the son of Aaron',
        explanation: 'Numbers 26:1 (ESV): "The Lord said to Moses and to Eleazar the son of Aaron the priest..."',
        difficulty: 'easy'
      },
      {
        id: 'num26-q2',
        question: 'Who was to be counted in this second census?',
        options: ['Every male from twenty years old and upward, able to go to war', 'Every person', 'Only Levites', 'Only firstborn'],
        correctAnswer: 'Every male from twenty years old and upward, able to go to war',
        explanation: 'Numbers 26:2 (ESV): "Take a census... from twenty years old and upward... all... able to go to war."',
        difficulty: 'easy'
      },
      {
        id: 'num26-q3',
        question: 'Which tribe was the largest in this second census?',
        options: ['Judah', 'Dan', 'Reuben', 'Simeon'],
        correctAnswer: 'Judah',
        explanation: 'Numbers 26:22 (ESV): "The sons of Judah... 76,500." (Compare: Dan 64,400 etc.)',
        difficulty: 'medium'
      },
      {
        id: 'num26-q4',
        question: 'Which tribe had decreased significantly (from the first census)?',
        options: ['Simeon', 'Judah', 'Manasseh', 'Benjamin'],
        correctAnswer: 'Simeon',
        explanation: 'Numbers 26:14 (ESV): "The sons of Simeon... 22,200." (Checking ch 1:23 shows 59,300, a huge loss).',
        difficulty: 'medium'
      },
      {
        id: 'num26-q5',
        question: 'How was the land to be divided for inheritance?',
        options: ['According to the number of names (larger tribes get more)', 'Equally', 'By lot only', 'Priests decide'],
        correctAnswer: 'According to the number of names (larger tribes get more)',
        explanation: 'Numbers 26:53 (ESV): "Among these the land shall be divided... according to the number of names." (Also v54: "To a large tribe... give a large inheritance")',
        difficulty: 'medium'
      },
      {
        id: 'num26-q6',
        question: 'Who were Dathan and Abiram mentioned here?',
        options: ['Those who contended against Moses and Aaron in the company of Korah', 'Priests', 'Spies', 'Kings'],
        correctAnswer: 'Those who contended against Moses and Aaron in the company of Korah',
        explanation: 'Numbers 26:9 (ESV): "These are the Dathan and Abiram... who contended against Moses... in the company of Korah..."',
        difficulty: 'medium'
      },
      {
        id: 'num26-q7',
        question: 'Did the sons of Korah die in the rebellion?',
        options: ['No, the sons of Korah did not die', 'Yes', 'Only the eldest', 'Unclear'],
        correctAnswer: 'No, the sons of Korah did not die',
        explanation: 'Numbers 26:11 (ESV): "But the sons of Korah did not die."',
        difficulty: 'medium'
      },
      {
        id: 'num26-q8',
        question: 'What was the total number of the people of Israel able to go to war?',
        options: ['601,730', '603,550', '500,000', '700,000'],
        correctAnswer: '601,730',
        explanation: 'Numbers 26:51 (ESV): "This was the list... 601,730." (Slight decrease from 603,550).',
        difficulty: 'medium'
      },
      {
        id: 'num26-q9',
        question: 'How many people from the first census (Sinai) were left alive?',
        options: ['Not one of them except Caleb and Joshua', 'Half', 'A few thousand', 'All of them'],
        correctAnswer: 'Not one of them except Caleb and Joshua',
        explanation: 'Numbers 26:65 (ESV): "For the Lord had said of them, \'They shall die in the wilderness.\' Not one of them was left, except Caleb... and Joshua..."',
        difficulty: 'medium'
      },
      {
        id: 'num26-q10',
        question: 'How many families of Levites were listed?',
        options: ['Gershonites, Kohathites, Merarites', 'Only Kohath', 'Twelve', 'Seven'],
        correctAnswer: 'Gershonites, Kohathites, Merarites',
        explanation: 'Numbers 26:57 lists the clans of Levi.',
        difficulty: 'medium'
      },
      {
        id: 'num26-q11',
        question: 'Who was the mother of Aaron and Moses mentioned here?',
        options: ['Jochebed', 'Miriam', 'Sarah', 'Leah'],
        correctAnswer: 'Jochebed',
        explanation: 'Numbers 26:59 (ESV): "The name of Amram\'s wife was Jochebed the daughter of Levi..."',
        difficulty: 'hard'
      },
      {
        id: 'num26-q12',
        question: 'How was the inheritance location determined?',
        options: ['By lot', 'By choice', 'By Moses', 'By war'],
        correctAnswer: 'By lot',
        explanation: 'Numbers 26:55 (ESV): "But the land shall be divided by lot."',
        difficulty: 'hard'
      },
      {
        id: 'num26-q13',
        question: 'Who were the sons of Judah who died in Canaan?',
        options: ['Er and Onan', 'Nadab and Abihu', 'Perez and Zerah', 'Shelah'],
        correctAnswer: 'Er and Onan',
        explanation: 'Numbers 26:19 (ESV): "The sons of Judah were Er and Onan; and Er and Onan died in the land of Canaan."',
        difficulty: 'hard'
      },
      {
        id: 'num26-q14',
        question: 'Zelophehad had no sons, but only...?',
        options: ['Daughters', 'Grandsons', 'Nephews', 'Servants'],
        correctAnswer: 'Daughters',
        explanation: 'Numbers 26:33 (ESV): "Now Zelophehad... had no sons, but daughters..."',
        difficulty: 'hard'
      },
      {
        id: 'num26-q15',
        question: 'Who were the sons of Manasseh listed?',
        options: ['Machir (father of Gilead)', 'Ephraim', 'Benjamin', 'Dan'],
        correctAnswer: 'Machir (father of Gilead)',
        explanation: 'Numbers 26:29 (ESV): "The sons of Manasseh: of Machir... and Machir was the father of Gilead..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 26:65',
    key_verse_text: "For the Lord had said of them, 'They shall die in the wilderness.' Not one of them was left, except Caleb the son of Jephunneh and Joshua the son of Nun.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-27',
    bookId: 'numbers',
    chapter: 27,
    title: 'Zelophehad\'s Daughters',
    questions: [
      {
        id: 'num27-q1',
        question: 'Who asked Moses for an inheritance because their father had no sons?',
        options: ['The daughters of Zelophehad', 'Miriam', 'Rahab', 'The wives of Moses'],
        correctAnswer: 'The daughters of Zelophehad',
        explanation: 'Numbers 27:1-4 (ESV): "Then drew near the daughters of Zelophehad... Give us a possession among our father\'s brothers."',
        difficulty: 'easy'
      },
      {
        id: 'num27-q2',
        question: 'What was their father Zelophehad\'s status regarding Korah?',
        options: ['He was not in the company of Korah; he died for his own sin', 'He was a leader of the rebellion', 'He was innocent', 'He was a priest'],
        correctAnswer: 'He was not in the company of Korah; he died for his own sin',
        explanation: 'Numbers 27:3 (ESV): "He was not in the company of those who gathered themselves against the Lord in the company of Korah... died for his own sin."',
        difficulty: 'easy'
      },
      {
        id: 'num27-q3',
        question: 'What was the Lord\'s ruling on their request?',
        options: ['"The daughters of Zelophehad are right. You shall give them possession of an inheritance."', '"No, men only"', '"They must marry priests"', '"Ask Aaron"'],
        correctAnswer: '"The daughters of Zelophehad are right. You shall give them possession of an inheritance."',
        explanation: 'Numbers 27:7 (ESV): "The daughters of Zelophehad are right. You shall give them possession..."',
        difficulty: 'easy'
      },
      {
        id: 'num27-q4',
        question: 'If a man has no son, daughter, or brother, to whom does the inheritance go?',
        options: ['His father\'s brothers (uncles)', 'The state', 'The priests', 'The poor'],
        correctAnswer: 'His father\'s brothers (uncles)',
        explanation: 'Numbers 27:10 (ESV): "And if he has no brothers, then you shall give his inheritance to his father\'s brothers."',
        difficulty: 'medium'
      },
      {
        id: 'num27-q5',
        question: 'If even his father has no brothers, where does it go?',
        options: ['The nearest kinsman of his clan', 'The king', 'The Levites', 'Strangers'],
        correctAnswer: 'The nearest kinsman of his clan',
        explanation: 'Numbers 27:11 (ESV): "Then you shall give his inheritance to the nearest kinsman of his clan..."',
        difficulty: 'medium'
      },
      {
        id: 'num27-q6',
        question: 'Where did God tell Moses to go to see the land?',
        options: ['Mountain of Abarim', 'Mount Sinai', 'Mount Hor', 'Mount Zion'],
        correctAnswer: 'Mountain of Abarim',
        explanation: 'Numbers 27:12 (ESV): "Go up into this mountain of Abarim and see the land..."',
        difficulty: 'medium'
      },
      {
        id: 'num27-q7',
        question: 'Why was Moses not allowed to enter the land?',
        options: ['Because he rebelled against God\'s command in the Wilderness of Zin (Meribah)', 'He was too old', 'Wait for Joshua', 'He asked not to'],
        correctAnswer: 'Because he rebelled against God\'s command in the Wilderness of Zin (Meribah)',
        explanation: 'Numbers 27:14 (ESV): "Because you rebelled against my word in the wilderness of Zin..."',
        difficulty: 'medium'
      },
      {
        id: 'num27-q8',
        question: 'Who did Moses ask God to appoint?',
        options: ['A man over the congregation who shall go out before them', 'A king', 'A judge', 'His son'],
        correctAnswer: 'A man over the congregation who shall go out before them',
        explanation: 'Numbers 27:16-17 (ESV): "Let the Lord... appoint a man over the congregation who shall go out before them..."',
        difficulty: 'medium'
      },
      {
        id: 'num27-q9',
        question: 'Who did God choose to succeed Moses?',
        options: ['Joshua the son of Nun', 'Caleb', 'Eleazar', 'Phinehas'],
        correctAnswer: 'Joshua the son of Nun',
        explanation: 'Numbers 27:18 (ESV): "Take Joshua the son of Nun, a man in whom is the Spirit..."',
        difficulty: 'medium'
      },
      {
        id: 'num27-q10',
        question: 'What was Moses to do to Joshua?',
        options: ['Lay his hand on him and invest him with some of his authority', 'Anoint him with oil', 'Give him his staff', 'Teach him the law only'],
        correctAnswer: 'Lay his hand on him and invest him with some of his authority',
        explanation: 'Numbers 27:18-20 (ESV): "Lay your hand on him... Invest him with some of your authority..."',
        difficulty: 'medium'
      },
      {
        id: 'num27-q11',
        question: 'How was Joshua to inquire of the Lord?',
        options: ['He shall stand before Eleazar the priest, who shall inquire for him by the judgment of the Urim', 'Face to face like Moses', 'In dreams', 'By casting lots'],
        correctAnswer: 'He shall stand before Eleazar the priest, who shall inquire for him by the judgment of the Urim',
        explanation: 'Numbers 27:21 (ESV): "And he shall stand before Eleazar... who shall inquire for him by the judgment of the Urim..."',
        difficulty: 'hard'
      },
      {
        id: 'num27-q12',
        question: 'What metaphor did Moses use for the congregation without a leader?',
        options: ['Sheep that have no shepherd', 'Ships without a captain', 'Children without a father', 'Stars without light'],
        correctAnswer: 'Sheep that have no shepherd',
        explanation: 'Numbers 27:17 (ESV): "That the congregation of the Lord may not be as sheep that have no shepherd."',
        difficulty: 'hard'
      },
      {
        id: 'num27-q13',
        question: 'What are the names of Zelophehad\'s daughters?',
        options: ['Mahlah, Noah, Hoglah, Milcah, and Tirzah', 'Sarah, Rebekah, Leah, Rachel', 'Miriam, Deborah, Jael', 'Ruth, Orpah, Naomi'],
        correctAnswer: 'Mahlah, Noah, Hoglah, Milcah, and Tirzah',
        explanation: 'Numbers 27:1 (ESV): "The names of his daughters were: Mahlah, Noah, Hoglah, Milcah, and Tirzah."',
        difficulty: 'hard'
      },
      {
        id: 'num27-q14',
        question: 'Did Moses obey God regarding Joshua immediately?',
        options: ['Yes, he did as the Lord commanded him', 'No, he argued', 'He waited', 'He chose Caleb'],
        correctAnswer: 'Yes, he did as the Lord commanded him',
        explanation: 'Numbers 27:22 (ESV): "And Moses did as the Lord commanded him."',
        difficulty: 'hard'
      },
      {
        id: 'num27-q15',
        question: 'Where was this command given (to see the land)?',
        options: ['Abarim / Wilderness of Zin context', 'Sinai', 'Egypt', 'Horeb'],
        correctAnswer: 'Abarim / Wilderness of Zin context',
        explanation: 'Numbers 27:12 mentions Abarim; context is after the plague in Moab plains.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 27:17',
    key_verse_text: "Who shall go out before them and come in before them, who shall lead them out and bring them in, that the congregation of the Lord may not be as sheep that have no shepherd.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-28',
    bookId: 'numbers',
    chapter: 28,
    title: 'Daily Offerings',
    questions: [
      {
        id: 'num28-q1',
        question: 'What is the regular daily burnt offering?',
        options: ['Two male lambs a year old without blemish, one in the morning, one at twilight', 'A bull', 'A goat', 'A dove'],
        correctAnswer: 'Two male lambs a year old without blemish, one in the morning, one at twilight',
        explanation: 'Numbers 28:3-4 (ESV): "Two male lambs... day by day... One lamb in the morning... the other... at twilight."',
        difficulty: 'easy'
      },
      {
        id: 'num28-q2',
        question: 'On the Sabbath day, what is added to the daily offering?',
        options: ['Two male lambs, with grain and drink offering', 'One bull', 'Seven lambs', 'Nothing'],
        correctAnswer: 'Two male lambs, with grain and drink offering',
        explanation: 'Numbers 28:9 (ESV): "On the Sabbath day, two male lambs... and a drink offering."',
        difficulty: 'easy'
      },
      {
        id: 'num28-q3',
        question: 'At the beginning of each month (new moon), what is the offering?',
        options: ['Two bulls, one ram, seven lambs, and a goat for sin offering', 'One lamb', 'Grain only', 'A tithe'],
        correctAnswer: 'Two bulls, one ram, seven lambs, and a goat for sin offering',
        explanation: 'Numbers 28:11, 15 (ESV): "At the beginnings of your months... two bulls... one ram, seven male lambs... also one male goat..."',
        difficulty: 'medium'
      },
      {
        id: 'num28-q4',
        question: 'During the Passover (Unleavened Bread), the offering is made for how many days?',
        options: ['Seven days', 'One day', 'Three days', 'Twelve days'],
        correctAnswer: 'Seven days',
        explanation: 'Numbers 28:17, 24 (ESV): "Seven days... unleavened bread... You shall offer daily, for seven days..."',
        difficulty: 'medium'
      },
      {
        id: 'num28-q5',
        question: 'When is the feast of weeks (firstfruits)?',
        options: ['When you offer a grain offering of new grain', 'In winter', 'At the new moon', 'At harvest end'],
        correctAnswer: 'When you offer a grain offering of new grain',
        explanation: 'Numbers 28:26 (ESV): "On the day of the firstfruits, when you offer a grain offering of new grain..."',
        difficulty: 'medium'
      },
      {
        id: 'num28-q6',
        question: 'What is the drink offering for a lamb?',
        options: ['A quarter of a hin', 'A third of a hin', 'Half a hin', 'One hin'],
        correctAnswer: 'A quarter of a hin',
        explanation: 'Numbers 28:7 (ESV): "Its drink offering shall be a quarter of a hin for each lamb."',
        difficulty: 'medium'
      },
      {
        id: 'num28-q7',
        question: 'What is the drink offering for a bull?',
        options: ['Half a hin', 'A quarter', 'A third', 'One hin'],
        correctAnswer: 'Half a hin',
        explanation: 'Numbers 28:14 (ESV): "Their drink offerings shall be half a hin of wine for a bull..."',
        difficulty: 'medium'
      },
      {
        id: 'num28-q8',
        question: 'Are these offerings in addition to the regular daily burnt offering?',
        options: ['Yes', 'No, they replace it', 'Only on Sundays', 'It depends'],
        correctAnswer: 'Yes',
        explanation: 'Numbers 28:10, 15, 23 (ESV): "Besides the regular burnt offering..."',
        difficulty: 'medium'
      },
      {
        id: 'num28-q9',
        question: 'What work is allowed on the first day of Unleavened Bread?',
        options: ['No ordinary work', 'Any work', 'Cooking only', 'War'],
        correctAnswer: 'No ordinary work',
        explanation: 'Numbers 28:18 (ESV): "You shall not do any ordinary work."',
        difficulty: 'medium'
      },
      {
        id: 'num28-q10',
        question: 'What animal is typically offered for a sin offering in these feasts?',
        options: ['Male goat', 'Bull', 'Ram', 'Dove'],
        correctAnswer: 'Male goat',
        explanation: 'Numbers 28:15, 22, 30 (ESV): "And one male goat for a sin offering..."',
        difficulty: 'medium'
      },
      {
        id: 'num28-q11',
        question: 'The daily offering is synonymous with what phrase?',
        options: ['The continual burnt offering', 'The peace offering', 'The wave offering', 'The tithe'],
        correctAnswer: 'The continual burnt offering',
        explanation: 'Numbers 28:3 (ESV): "This is the food offering... a continual burnt offering."',
        difficulty: 'hard'
      },
      {
        id: 'num28-q12',
        question: 'When is Passover kept?',
        options: ['Fourteenth day of the first month', 'Fifteenth day', 'First day', 'Seventh month'],
        correctAnswer: 'Fourteenth day of the first month',
        explanation: 'Numbers 28:16 (ESV): "On the fourteenth day of the first month is the Lord\'s Passover."',
        difficulty: 'hard'
      },
      {
        id: 'num28-q13',
        question: 'Why is Strong Drink mentioned in verse 7?',
        options: ['To be poured out as a drink offering to the Lord in the Holy Place', 'To be drunk by priests', 'To be avoided', 'To settle disputes'],
        correctAnswer: 'To be poured out as a drink offering to the Lord in the Holy Place',
        explanation: 'Numbers 28:7 (ESV): "In the Holy Place you shall pour out a drink offering of strong drink to the Lord."',
        difficulty: 'hard'
      },
      {
        id: 'num28-q14',
        question: 'How much flour for a ram?',
        options: ['Two tenths of an ephah', 'One tenth', 'Three tenths', 'Four tenths'],
        correctAnswer: 'Two tenths of an ephah',
        explanation: 'Numbers 28:12 (ESV): "And two tenths of an ephah of fine flour... for the ram."',
        difficulty: 'hard'
      },
      {
        id: 'num28-q15',
        question: 'Is the Sabbath offering offered morning and evening?',
        options: ['It is the burnt offering of every Sabbath, besides the continual burnt offering', 'Morning only', 'Evening only', 'No'],
        correctAnswer: 'It is the burnt offering of every Sabbath, besides the continual burnt offering',
        explanation: 'Numbers 28:10 (ESV): "This is the burnt offering of every Sabbath, besides the regular burnt offering..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 28:2',
    key_verse_text: "Command the people of Israel and say to them, 'My offering, my food for my food offerings, my pleasing aroma, you shall be careful to offer to me at its appointed time.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-29',
    bookId: 'numbers',
    chapter: 29,
    title: 'Offerings for the Seventh Month',
    questions: [
      {
        id: 'num29-q1',
        question: 'What is celebrated on the first day of the seventh month?',
        options: ['A day for you to blow the trumpets (Feast of Trumpets)', 'The Day of Atonement', 'Passover', 'Tabernacles'],
        correctAnswer: 'A day for you to blow the trumpets (Feast of Trumpets)',
        explanation: 'Numbers 29:1 (ESV): "It is a day for you to blow the trumpets."',
        difficulty: 'easy'
      },
      {
        id: 'num29-q2',
        question: 'When is the Day of Atonement (afflicting yourselves)?',
        options: ['Tenth day of the seventh month', 'First day', 'Fifteenth day', 'Fourteenth day'],
        correctAnswer: 'Tenth day of the seventh month',
        explanation: 'Numbers 29:7 (ESV): "On the tenth day of this seventh month you shall have a holy convocation and afflict yourselves..."',
        difficulty: 'easy'
      },
      {
        id: 'num29-q3',
        question: 'When does the Feast of Booths (Tabernacles) begin?',
        options: ['Fifteenth day of the seventh month', 'First day', 'Tenth day', 'Twelfth day'],
        correctAnswer: 'Fifteenth day of the seventh month',
        explanation: 'Numbers 29:12 (ESV): "On the fifteenth day of the seventh month..."',
        difficulty: 'easy'
      },
      {
        id: 'num29-q4',
        question: 'How many bulls are offered on the first day of the Feast of Booths?',
        options: ['Thirteen', 'Twelve', 'Seven', 'One'],
        correctAnswer: 'Thirteen',
        explanation: 'Numbers 29:13 (ESV): "Offer... thirteen bulls..."',
        difficulty: 'medium'
      },
      {
        id: 'num29-q5',
        question: 'How does the number of bulls change each day during the feast?',
        options: ['It decreases by one each day (13, 12, 11...)', 'It stays the same', 'It increases', 'It varies randomly'],
        correctAnswer: 'It decreases by one each day (13, 12, 11...)',
        explanation: 'Numbers 29:17, 20, 23 etc. show the count going down: 12, 11, 10...',
        difficulty: 'medium'
      },
      {
        id: 'num29-q6',
        question: 'On the eighth day of the feast, what is held?',
        options: ['A solemn assembly', 'A fast', 'A dance', 'A battle'],
        correctAnswer: 'A solemn assembly',
        explanation: 'Numbers 29:35 (ESV): "On the eighth day you shall have a solemn assembly..."',
        difficulty: 'medium'
      },
      {
        id: 'num29-q7',
        question: 'How many bulls are offered on the eighth day?',
        options: ['One', 'Seven', 'Thirteen', 'Two'],
        correctAnswer: 'One',
        explanation: 'Numbers 29:36 (ESV): "One bull, one ram, seven male lambs..."',
        difficulty: 'medium'
      },
      {
        id: 'num29-q8',
        question: 'What sin offering was made on the Day of Atonement besides the one for atonement?',
        options: ['One male goat', 'One bull', 'Two lambs', 'Money'],
        correctAnswer: 'One male goat',
        explanation: 'Numbers 29:11 (ESV): "One male goat for a sin offering, besides the sin offering of atonement..."',
        difficulty: 'medium'
      },
      {
        id: 'num29-q9',
        question: 'How many days does the Feast of Booths last (including the assembly)?',
        options: ['Eight days (7 feast + 1 assembly)', 'Seven days only', 'Twelve days', 'One day'],
        correctAnswer: 'Eight days (7 feast + 1 assembly)',
        explanation: 'Numbers 29:12-38 describes offerings for days 1 through 8.',
        difficulty: 'medium'
      },
      {
        id: 'num29-q10',
        question: 'Are vows and freewill offerings included in these commands?',
        options: ['These are in addition to vows and freewill offerings', 'No', 'They replace them', 'Only vows'],
        correctAnswer: 'These are in addition to vows and freewill offerings',
        explanation: 'Numbers 29:39 (ESV): "These you shall offer... in addition to your vows and your freewill offerings..."',
        difficulty: 'medium'
      },
      {
        id: 'num29-q11',
        question: 'What is the total number of bulls offered over the 7 days of the feast (13+12+11+10+9+8+7)?',
        options: ['70', '50', '100', '12'],
        correctAnswer: '70',
        explanation: 'Sum of 13 down to 7 equals 70.',
        difficulty: 'hard'
      },
      {
        id: 'num29-q12',
        question: 'What is the drink offering for the goat?',
        options: ['Not explicitly detailed in every verse but implied as standard/none', 'Half hin', 'Quarter hin', 'None usually mentioned for sin offering goat here'],
        correctAnswer: 'None usually mentioned for sin offering goat here',
        explanation: 'The text repeatedly says "their grain offering and their drink offerings" for the burnt offerings (bulls/rams/lambs), but the goat is "for a sin offering" usually without separate mention of drink offering in this list.',
        difficulty: 'hard'
      },
      {
        id: 'num29-q13',
        question: 'On the seventh day of the feast, how many bulls?',
        options: ['Seven', 'Six', 'Eight', 'One'],
        correctAnswer: 'Seven',
        explanation: 'Numbers 29:32 (ESV): "On the seventh day seven bulls..."',
        difficulty: 'hard'
      },
      {
        id: 'num29-q14',
        question: 'Which month has the most detailed offering instructions?',
        options: ['The seventh month', 'The first month', 'The twelfth month', 'The second month'],
        correctAnswer: 'The seventh month',
        explanation: 'Chapter 29 is entirely dedicated to the 7th month (Trumpets, Atonement, Booths).',
        difficulty: 'hard'
      },
      {
        id: 'num29-q15',
        question: 'Who did Moses tell all these things to?',
        options: ['The people of Israel', 'Aaron only', 'Joshua only', 'The elders'],
        correctAnswer: 'The people of Israel',
        explanation: 'Numbers 29:40 (ESV): "So Moses told the people of Israel everything just as the Lord had commanded..."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 29:39',
    key_verse_text: "These you shall offer to the Lord at your appointed feasts, in addition to your vows and your freewill offerings, for your burnt offerings, and for your grain offerings...",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-30',
    bookId: 'numbers',
    chapter: 30,
    title: 'Men and Women Vows',
    questions: [
      {
        id: 'num30-q1',
        question: 'If a man makes a vow to the Lord, can he break his word?',
        options: ['No, he shall do according to all that proceeds out of his mouth', 'Yes, if he pays a fine', 'Yes, if he changes his mind', 'Only if the priest allows'],
        correctAnswer: 'No, he shall do according to all that proceeds out of his mouth',
        explanation: 'Numbers 30:2 (ESV): "He shall not break his word. He shall do according to all that proceeds out of his mouth."',
        difficulty: 'easy'
      },
      {
        id: 'num30-q2',
        question: 'Who can nullify a young woman\'s vow living in her father\'s house?',
        options: ['Her father', 'Her mother', 'The priest', 'No one'],
        correctAnswer: 'Her father',
        explanation: 'Numbers 30:3-5 (ESV): "If her father hears of her vow... and disapproves... then none of her vows... shall stand."',
        difficulty: 'medium'
      },
      {
        id: 'num30-q3',
        question: 'If her father hears and says nothing on the day he hears?',
        options: ['Then all her vows shall stand', 'They are void', 'She must repeat them', 'She pays a fine'],
        correctAnswer: 'Then all her vows shall stand',
        explanation: 'Numbers 30:4 (ESV): "Then all her vows shall stand..."',
        difficulty: 'medium'
      },
      {
        id: 'num30-q4',
        question: 'Who can nullify a wife\'s vow?',
        options: ['Her husband', 'Her father', 'The judge', 'Her son'],
        correctAnswer: 'Her husband',
        explanation: 'Numbers 30:6-8 (ESV): "And if she is married to a husband... and her husband hears of it... and disapproves... then he makes her vow... void."',
        difficulty: 'medium'
      },
      {
        id: 'num30-q5',
        question: 'When must the husband disapprove for it to be void?',
        options: ['On the day he hears of it', 'Within a week', 'In a month', 'Anytime'],
        correctAnswer: 'On the day he hears of it',
        explanation: 'Numbers 30:7-8 (ESV): "But if... on the day that he hears of it..."',
        difficulty: 'medium'
      },
      {
        id: 'num30-q6',
        question: 'What about the vow of a widow or divorced woman?',
        options: ['Everything she has vowed stands against her', 'Her father can void it', 'Her son can void it', 'It is void automatically'],
        correctAnswer: 'Everything she has vowed stands against her',
        explanation: 'Numbers 30:9 (ESV): "But any vow of a widow or of a divorced woman... shall stand against her."',
        difficulty: 'medium'
      },
      {
        id: 'num30-q7',
        question: 'If a husband nullifies them after he has heard (later on), what happens?',
        options: ['He shall bear her iniquity', 'She bears the sin', 'Nobody sins', 'The priest sacrifices'],
        correctAnswer: 'He shall bear her iniquity',
        explanation: 'Numbers 30:15 (ESV): "But if he makes them null and void after he has heard of them, then he shall bear her iniquity."',
        difficulty: 'hard'
      },
      {
        id: 'num30-q8',
        question: 'Why does the Lord forgive the woman in the case of a father/husband nullifying?',
        options: ['Because her father/husband opposed her', 'Because she is weak', 'Because she didn\'t mean it', 'Because vows are bad'],
        correctAnswer: 'Because her father/husband opposed her',
        explanation: 'Numbers 30:5 (ESV): "And the Lord will forgive her, because her father opposed her."',
        difficulty: 'hard'
      },
      {
        id: 'num30-q9',
        question: 'This chapter deals primarily with the validity of...?',
        options: ['Vows and pledges', 'Sacrifices', 'War', 'Diet'],
        correctAnswer: 'Vows and pledges',
        explanation: 'Numbers 30:1 (ESV): "Statutes... concerning vows..."',
        difficulty: 'easy'
      },
      {
        id: 'num30-q10',
        question: 'Who did Moses speak to regarding these statute heads?',
        options: ['The heads of the tribes', 'The priests', 'The women', 'Joshua'],
        correctAnswer: 'The heads of the tribes',
        explanation: 'Numbers 30:1 (ESV): "Moses spoke to the heads of the tribes..."',
        difficulty: 'medium'
      },
      {
        id: 'num30-q11',
        question: 'Is "binding oneself by a pledge" treated the same as a vow here?',
        options: ['Yes', 'No', 'Pledges are less serious', 'Vows are only for priests'],
        correctAnswer: 'Yes',
        explanation: 'Numbers 30:2 (ESV): "Vows a vow... or swears an oath to bind himself by a pledge..."',
        difficulty: 'medium'
      },
      {
        id: 'num30-q12',
        question: 'If a woman vows in her father\'s house in her youth, who has authority?',
        options: ['Her father', 'Her future husband', 'Herself', 'Her mother'],
        correctAnswer: 'Her father',
        explanation: 'Numbers 30:3 (ESV): "When a woman vows... in her father\'s house in her youth..."',
        difficulty: 'medium'
      },
      {
        id: 'num30-q13',
        question: 'If the husband says nothing day after day?',
        options: ['He establishes all her vows', 'He voids them', 'He is confused', 'She must ask again'],
        correctAnswer: 'He establishes all her vows',
        explanation: 'Numbers 30:14 (ESV): "...then he establishes all her vows... because he said nothing to her..."',
        difficulty: 'hard'
      },
      {
        id: 'num30-q14',
        question: 'What is the "thoughtless utterance" mentioned?',
        options: ['Rash promise', 'Curse', 'Blessing', 'Prayer'],
        correctAnswer: 'Rash promise',
        explanation: 'Numbers 30:6 (ESV): "...or any thoughtless utterance of her lips..."',
        difficulty: 'hard'
      },
      {
        id: 'num30-q15',
        question: 'Are there exceptions for men breaking vows?',
        options: ['None mentioned in this chapter', 'Yes, if he is poor', 'Yes, if he is sick', 'Yes, if he forgets'],
        correctAnswer: 'None mentioned in this chapter',
        explanation: 'Numbers 30:2 is absolute for men.',
        difficulty: 'medium'
      }
    ],
    key_verse: 'Numbers 30:2',
    key_verse_text: "If a man vows a vow to the Lord, or swears an oath to bind himself by a pledge, he shall not break his word. He shall do according to all that proceeds out of his mouth.",
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
        question: 'Who did God command Moses to avenge the people of Israel on?',
        options: ['The Midianites', 'The Moabites', 'The Amorites', 'The Philistines'],
        correctAnswer: 'The Midianites',
        explanation: 'Numbers 31:2 (ESV): "Avenge the people of Israel on the Midianites. Afterward you shall be gathered to your people."',
        difficulty: 'easy'
      },
      {
        id: 'num31-q2',
        question: 'How many men from each tribe were sent to war?',
        options: ['1,000', '10,000', '100', '12,000 total'],
        correctAnswer: '1,000',
        explanation: 'Numbers 31:4 (ESV): "A thousand from each tribe of all the tribes of Israel you shall send to the war."',
        difficulty: 'easy'
      },
      {
        id: 'num31-q3',
        question: 'Who went with the army carrying the holy vessels and trumpets?',
        options: ['Phinehas the son of Eleazar', 'Eleazar', 'Joshua', 'Caleb'],
        correctAnswer: 'Phinehas the son of Eleazar',
        explanation: 'Numbers 31:6 (ESV): "And Phinehas the son of Eleazar the priest... with the vessels of the sanctuary and the trumpets..."',
        difficulty: 'easy'
      },
      {
        id: 'num31-q4',
        question: 'Who was killed along with the five kings of Midian?',
        options: ['Balaam the son of Beor', 'Balak', 'Og', 'Sihon'],
        correctAnswer: 'Balaam the son of Beor',
        explanation: 'Numbers 31:8 (ESV): "They also killed Balaam the son of Beor with the sword."',
        difficulty: 'easy'
      },
      {
        id: 'num31-q5',
        question: 'What made Moses angry with the officers?',
        options: ['They let all the women live', 'They lost the battle', 'They took no plunder', 'They ran away'],
        correctAnswer: 'They let all the women live',
        explanation: 'Numbers 31:15 (ESV): "Moses said to them, \'Have you let all the women live?\'"',
        difficulty: 'easy'
      },
      {
        id: 'num31-q6',
        question: 'Why was keeping the women alive a problem?',
        options: ['These caused the people of Israel to act treacherously against the Lord in the matter of Peor', 'They were spies', 'Not enough food', 'Against the rules'],
        correctAnswer: 'These caused the people of Israel to act treacherously against the Lord in the matter of Peor',
        explanation: 'Numbers 31:16 (ESV): "Behold, these, on Balaam\'s advice, caused the people of Israel to act treacherously... in the matter of Peor..."',
        difficulty: 'medium'
      },
      {
        id: 'num31-q7',
        question: 'How was the plunder to be divided?',
        options: ['Half to warriors, half to congregation', 'Common pot', 'Warriors keep all', 'Burned'],
        correctAnswer: 'Half to warriors, half to congregation',
        explanation: 'Numbers 31:27 (ESV): "Divide the plunder into two parts between the warriors... and all the congregation."',
        difficulty: 'medium'
      },
      {
        id: 'num31-q8',
        question: 'What was the tribute from the warriors\' half given to Eleazar?',
        options: ['One out of five hundred', 'One out of fifty', 'A tenth', 'None'],
        correctAnswer: 'One out of five hundred',
        explanation: 'Numbers 31:28 (ESV): "And levy for the Lord a tribute... one out of five hundred..."',
        difficulty: 'medium'
      },
      {
        id: 'num31-q9',
        question: 'What was the tribute from the congregation\'s half given to the Levites?',
        options: ['One out of fifty', 'One out of five hundred', 'A tithe', 'Half'],
        correctAnswer: 'One out of fifty',
        explanation: 'Numbers 31:30 (ESV): "Take one drawn out of every fifty..."',
        difficulty: 'medium'
      },
      {
        id: 'num31-q10',
        question: 'How many Israelite soldiers were missing after the battle?',
        options: ['Not a man', 'About 100', 'Thousands', 'Twelve'],
        correctAnswer: 'Not a man',
        explanation: 'Numbers 31:49 (ESV): "Your servants have counted the men of war... and there is not a man missing from us."',
        difficulty: 'medium'
      },
      {
        id: 'num31-q11',
        question: 'What did the officers bring as an offering for their safety?',
        options: ['Articles of gold (armlets, bracelets, signet rings, etc.)', 'A bull', 'Silver', 'Clothing'],
        correctAnswer: 'Articles of gold (armlets, bracelets, signet rings, etc.)',
        explanation: 'Numbers 31:50 (ESV): "And we have brought the Lord\'s offering... articles of gold..."',
        difficulty: 'hard'
      },
      {
        id: 'num31-q12',
        question: 'What had to be done with metals (gold, silver, bronze, iron, tin, lead)?',
        options: ['Make them go through the fire, and purify with water', 'Wash with water only', 'Melt them indiscriminately', 'Burry them'],
        correctAnswer: 'Make them go through the fire, and purify with water',
        explanation: 'Numbers 31:23 (ESV): "Everything that can stand the fire, you shall make it go through the fire..."',
        difficulty: 'hard'
      },
      {
        id: 'num31-q13',
        question: 'Who specifically got the tribute from the congregation\'s share?',
        options: ['The Levites who keep charge of the tabernacle', 'The poor', 'Moses', 'Joshua'],
        correctAnswer: 'The Levites who keep charge of the tabernacle',
        explanation: 'Numbers 31:30 (ESV): "Give them to the Levites who keep charge of the tabernacle..."',
        difficulty: 'hard'
      },
      {
        id: 'num31-q14',
        question: 'How much gold was the offering to the Lord?',
        options: ['16,750 shekels', '50 shekels', '10,000 shekels', '1000 talents'],
        correctAnswer: '16,750 shekels',
        explanation: 'Numbers 31:52 (ESV): "And all the gold of the contribution... was 16,750 shekels."',
        difficulty: 'hard'
      },
      {
        id: 'num31-q15',
        question: 'Where was the plunder brought?',
        options: ['To the camp at the plains of Moab by the Jordan at Jericho', 'To Shiloh', 'To Kadesh', 'To Hebron'],
        correctAnswer: 'To the camp at the plains of Moab by the Jordan at Jericho',
        explanation: 'Numbers 31:12 (ESV): "They brought the captives... to the camp at the plains of Moab by the Jordan at Jericho."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 31:49',
    key_verse_text: "And they said to Moses, 'Your servants have counted the men of war who are under our command, and there is not a man missing from us.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-32',
    bookId: 'numbers',
    chapter: 32,
    title: 'Tribes East of Jordan',
    questions: [
      {
        id: 'num32-q1',
        question: 'Which tribes asked for land east of the Jordan?',
        options: ['Reuben and Gad', 'Judah and Levi', 'Ephraim and Manasseh', 'Dan and Asher'],
        correctAnswer: 'Reuben and Gad',
        explanation: 'Numbers 32:1 (ESV): "Now the people of Reuben and the people of Gad had a very great number of livestock..."',
        difficulty: 'easy'
      },
      {
        id: 'num32-q2',
        question: 'Why did they want this land (Jazer and Gilead)?',
        options: ['It was good for livestock', 'It was safe', 'It had gold', 'They were tired'],
        correctAnswer: 'It was good for livestock',
        explanation: 'Numbers 32:1 (ESV): "They saw the land of Jazer... was a place for livestock."',
        difficulty: 'easy'
      },
      {
        id: 'num32-q3',
        question: 'How did Moses initially react to their request?',
        options: ['He thought they were discouraging the people from crossing over', 'He was happy', 'He asked God immediately', 'He agreed'],
        correctAnswer: 'He thought they were discouraging the people from crossing over',
        explanation: 'Numbers 32:7 (ESV): "Why will you discourage the heart of the people of Israel from going over..."',
        difficulty: 'easy'
      },
      {
        id: 'num32-q4',
        question: 'What historical event did Moses remind them of?',
        options: ['The spies at Kadesh-barnea', 'The golden calf', 'The Red Sea', 'The manna'],
        correctAnswer: 'The spies at Kadesh-barnea',
        explanation: 'Numbers 32:8 (ESV): "So your fathers did when I sent them from Kadesh-barnea to see the land."',
        difficulty: 'easy'
      },
      {
        id: 'num32-q5',
        question: 'What promise did the Reubenites and Gadites make?',
        options: ['We will build sheepfolds here, but we will go armed before Israel until they inherit', 'We will pay money', 'We will pray', 'We will send servants'],
        correctAnswer: 'We will build sheepfolds here, but we will go armed before Israel until they inherit',
        explanation: 'Numbers 32:17 (ESV): "But we will take up arms, ready to go before the people of Israel..."',
        difficulty: 'easy'
      },
      {
        id: 'num32-q6',
        question: 'Moses said if they didn\'t keep their word, what would happen?',
        options: ['"Be sure your sin will find you out"', '"You will be exiled"', '"God will kill you"', '"You lose the land"'],
        correctAnswer: '"Be sure your sin will find you out"',
        explanation: 'Numbers 32:23 (ESV): "Behold, you have sinned against the Lord, and be sure your sin will find you out."',
        difficulty: 'medium'
      },
      {
        id: 'num32-q7',
        question: 'Which half-tribe also received inheritance east of the Jordan?',
        options: ['Half-tribe of Manasseh', 'Half-tribe of Ephraim', 'Half-tribe of Judah', 'Half-tribe of Dan'],
        correctAnswer: 'Half-tribe of Manasseh',
        explanation: 'Numbers 32:33 (ESV): "Moses gave to them... and to the half-tribe of Manasseh the son of Joseph..."',
        difficulty: 'medium'
      },
      {
        id: 'num32-q8',
        question: 'What did they build for their little ones?',
        options: ['Fortified cities and folds for sheep', 'Temples', 'Schools', 'Boats'],
        correctAnswer: 'Fortified cities and folds for sheep',
        explanation: 'Numbers 32:36 (ESV): "And fortified cities, and folds for sheep."',
        difficulty: 'medium'
      },
      {
        id: 'num32-q9',
        question: 'Machir the son of Manasseh dispossessed whom?',
        options: ['The Amorites in Gilead', 'The Moabites', 'The Edomites', 'The Philistines'],
        correctAnswer: 'The Amorites in Gilead',
        explanation: 'Numbers 32:39 (ESV): "And the sons of Machir... went to Gilead... and dispossessed the Amorites..."',
        difficulty: 'medium'
      },
      {
        id: 'num32-q10',
        question: 'Jair the son of Manasseh captured villages and called them what?',
        options: ['Havvoth-jair', 'Jair-city', 'Manasseh-town', 'Gilead'],
        correctAnswer: 'Havvoth-jair',
        explanation: 'Numbers 32:41 (ESV): "And called them Havvoth-jair."',
        difficulty: 'medium'
      },
      {
        id: 'num32-q11',
        question: 'If they refuse to cross over armed, what penalty did Moses set?',
        options: ['They shall have possessions among you in the land of Canaan (forced to move West)', 'Death', 'Slavery', 'Fine'],
        correctAnswer: 'They shall have possessions among you in the land of Canaan (forced to move West)',
        explanation: 'Numbers 32:30 (ESV): "But if they will not pass over with you armed, they shall have possessions among you in the land of Canaan."',
        difficulty: 'hard'
      },
      {
        id: 'num32-q12',
        question: 'Who did Moses give charge concerning them?',
        options: ['Eleazar, Joshua, and the heads of the fathers\' houses', 'Aaron', 'Caleb', 'Hur'],
        correctAnswer: 'Eleazar, Joshua, and the heads of the fathers\' houses',
        explanation: 'Numbers 32:28 (ESV): "So Moses gave command concerning them to Eleazar the priest and to Joshua..."',
        difficulty: 'hard'
      },
      {
        id: 'num32-q13',
        question: 'Did the tribes return to their homes immediately after crossing?',
        options: ['No, "We will not return to our homes until each of the people of Israel has gained his inheritance"', 'Yes', 'Some did', 'After 7 days'],
        correctAnswer: 'No, "We will not return to our homes until each of the people of Israel has gained his inheritance"',
        explanation: 'Numbers 32:18 (ESV): "We will not return to our homes until..."',
        difficulty: 'hard'
      },
      {
        id: 'num32-q14',
        question: 'Nobah captured Kenath and called it what?',
        options: ['Nobah', 'Kenath-new', 'City of Victory', 'Bethel'],
        correctAnswer: 'Nobah',
        explanation: 'Numbers 32:42 (ESV): "And Nobah went and captured Kenath... and called it Nobah, after his own name."',
        difficulty: 'hard'
      },
      {
        id: 'num32-q15',
        question: 'Why did Moses reference the "brood of sinful men"?',
        options: ['To warn them not to rise up in their fathers\' place to increase God\'s anger', 'To insult them', 'To show history', 'To bless them'],
        correctAnswer: 'To warn them not to rise up in their fathers\' place to increase God\'s anger',
        explanation: 'Numbers 32:14 (ESV): "And behold, you have risen in your fathers\' place, a brood of sinful men, to increase still more the fierce anger of the Lord..."',
        difficulty: 'hard'
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
    title: 'Summary of Journeys',
    questions: [
      {
        id: 'num33-q1',
        question: 'Who recorded the stages of Israel\'s journey?',
        options: ['Moses', 'Aaron', 'Joshua', 'Eleazar'],
        correctAnswer: 'Moses',
        explanation: 'Numbers 33:2 (ESV): "Moses wrote down their starting places, stage by stage, by command of the Lord..."',
        difficulty: 'easy'
      },
      {
        id: 'num33-q2',
        question: 'They set out from Rameses in which month?',
        options: ['The first month, on the fifteenth day', 'The second month', 'The seventh month', 'The twelfth month'],
        correctAnswer: 'The first month, on the fifteenth day',
        explanation: 'Numbers 33:3 (ESV): "They set out from Rameses in the first month, on the fifteenth day..."',
        difficulty: 'easy'
      },
      {
        id: 'num33-q3',
        question: 'What were the Egyptians doing when Israel left?',
        options: ['Burying all their firstborn', 'Chasing immediately', 'Sleeping', 'Feasting'],
        correctAnswer: 'Burying all their firstborn',
        explanation: 'Numbers 33:4 (ESV): "While the Egyptians were burying all their firstborn..."',
        difficulty: 'easy'
      },
      {
        id: 'num33-q4',
        question: 'Where did they camp after the Red Sea?',
        options: ['Wilderness of Sin', 'Elim', 'Marah', 'Dophkah'],
        correctAnswer: 'Wilderness of Sin',
        explanation: 'Numbers 33:11 (ESV): "And they set out from the Red Sea and camped in the wilderness of Sin."',
        difficulty: 'easy'
      },
      {
        id: 'num33-q5',
        question: 'What command did God give regarding the inhabitants of Canaan?',
        options: ['Drive out all the inhabitants and destroy their idols', 'Make peace', 'Live among them', 'Tax them'],
        correctAnswer: 'Drive out all the inhabitants and destroy their idols',
        explanation: 'Numbers 33:52 (ESV): "Then you shall drive out all the inhabitants of the land... destroy all their figured stones and... idols..."',
        difficulty: 'easy'
      },
      {
        id: 'num33-q6',
        question: 'If they do not drive out the inhabitants, what will happen?',
        options: ['They shall be as barbs in your eyes and thorns in your sides', 'They will serve you', 'Nothing', 'Peace'],
        correctAnswer: 'They shall be as barbs in your eyes and thorns in your sides',
        explanation: 'Numbers 33:55 (ESV): "Then those of them whom you let remain shall be as barbs in your eyes and thorns in your sides..."',
        difficulty: 'medium'
      },
      {
        id: 'num33-q7',
        question: 'How old was Aaron when he died at Mount Hor?',
        options: ['123 years old', '110 years old', '120 years old', '100 years old'],
        correctAnswer: '123 years old',
        explanation: 'Numbers 33:39 (ESV): "Aaron was 123 years old when he died on Mount Hor."',
        difficulty: 'medium'
      },
      {
        id: 'num33-q8',
        question: 'Where were there twelve springs of water and seventy palm trees?',
        options: ['Elim', 'Marah', 'Rephidim', 'Kibroth-hattaavah'],
        correctAnswer: 'Elim',
        explanation: 'Numbers 33:9 (ESV): "And came to Elim;... twelve springs of water and seventy palm trees..."',
        difficulty: 'medium'
      },
      {
        id: 'num33-q9',
        question: 'Where was there no water for the people to drink (before Sinai)?',
        options: ['Rephidim', 'Alush', 'Dophkah', 'Hazeroth'],
        correctAnswer: 'Rephidim',
        explanation: 'Numbers 33:14 (ESV): "And camped at Rephidim, where there was no water for the people to drink."',
        difficulty: 'medium'
      },
      {
        id: 'num33-q10',
        question: 'When did they come to the wilderness of Zin (Kadesh)?',
        options: ['After Ezion-geber', 'First stop', 'After Sinai', 'Near end of list'],
        correctAnswer: 'After Ezion-geber',
        explanation: 'Numbers 33:36 (ESV): "Set out from Ezion-geber and camped in the wilderness of Zin (that is, Kadesh)."',
        difficulty: 'medium'
      },
      {
        id: 'num33-q11',
        question: 'God said, "I will do to you as I thought to do to...?"',
        options: ['Them', 'Egypt', ' Sodom', 'Your fathers'],
        correctAnswer: 'Them',
        explanation: 'Numbers 33:56 (ESV): "And I will do to you as I thought to do to them."',
        difficulty: 'hard'
      },
      {
        id: 'num33-q12',
        question: 'What is another name for the salt sea mentioned here?',
        options: ['No other name listed, implied by context of borders later', 'Sea of the Arabah', 'Great Sea', 'Red Sea'],
        correctAnswer: 'No other name listed, implied by context of borders later',
        explanation: 'Question is tricky; skip or rephrase. Let\'s ask: Where did they camp by the Jordan? "From Beth-jeshimoth as far as Abel-shittim"',
        difficulty: 'hard'
      },
      {
        id: 'num33-q12-alternate',
        question: 'Where did they camp by the Jordan in the plains of Moab?',
        options: ['From Beth-jeshimoth as far as Abel-shittim', 'Jericho', 'Gilgal', 'Ai'],
        correctAnswer: 'From Beth-jeshimoth as far as Abel-shittim',
        explanation: 'Numbers 33:49 (ESV): "And they camped by the Jordan from Beth-jeshimoth as far as Abel-shittim..."',
        difficulty: 'hard'
      },
      {
        id: 'num33-q13',
        question: 'Who heard of the coming of the people of Israel (in v40)?',
        options: ['The Canaanite, the king of Arad', 'Balak', 'Sihon', 'Og'],
        correctAnswer: 'The Canaanite, the king of Arad',
        explanation: 'Numbers 33:40 (ESV): "And the Canaanite, the king of Arad... heard of the coming of the people of Israel."',
        difficulty: 'hard'
      },
      {
        id: 'num33-q14',
        question: 'What happened at Kibroth-hattaavah (recalled by name)?',
        options: ['Graves of craving', 'Water from rock', 'Golden calf', 'Victory'],
        correctAnswer: 'Graves of craving',
        explanation: 'Meaning of name, context from Ch 11.',
        difficulty: 'hard'
      },
      {
        id: 'num33-q15',
        question: 'The list starts from Rameses and ends where?',
        options: ['Plains of Moab by the Jordan at Jericho', 'Canaan', 'Sinai', 'Hebron'],
        correctAnswer: 'Plains of Moab by the Jordan at Jericho',
        explanation: 'Numbers 33:48 (ESV): "And camped in the plains of Moab by the Jordan at Jericho."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 33:53',
    key_verse_text: "And you shall take possession of the land and settle in it, for I have given the land to you to possess it.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-34',
    bookId: 'numbers',
    chapter: 34,
    title: 'Boundaries of the Land',
    questions: [
      {
        id: 'num34-q1',
        question: 'What is the western boundary of the promised land?',
        options: ['The Great Sea (Mediterranean)', 'The Jordan River', 'The Red Sea', 'The Nile'],
        correctAnswer: 'The Great Sea (Mediterranean)',
        explanation: 'Numbers 34:6 (ESV): "For the western boundary, you shall have the Great Sea and its coast."',
        difficulty: 'easy'
      },
      {
        id: 'num34-q2',
        question: 'Who was appointed to divide the land?',
        options: ['Eleazar the priest and Joshua the son of Nun', 'Moses and Aaron', 'Caleb and Joshua', 'The elders'],
        correctAnswer: 'Eleazar the priest and Joshua the son of Nun',
        explanation: 'Numbers 34:17 (ESV): "Eleazar the priest and Joshua the son of Nun."',
        difficulty: 'easy'
      },
      {
        id: 'num34-q3',
        question: 'How many chielfs from each tribe were to assist?',
        options: ['One chief from every tribe', 'Two', 'Three', 'Seven'],
        correctAnswer: 'One chief from every tribe',
        explanation: 'Numbers 34:18 (ESV): "You shall take one chief from every tribe to divide the land..."',
        difficulty: 'easy'
      },
      {
        id: 'num34-q4',
        question: 'The southern boundary starts from where?',
        options: ['Wilderness of Zin along the side of Edom', 'River of Egypt', 'Sea', 'Hermon'],
        correctAnswer: 'Wilderness of Zin along the side of Edom',
        explanation: 'Numbers 34:3 (ESV): "Your south side shall be from the wilderness of Zin along the side of Edom..."',
        difficulty: 'medium'
      },
      {
        id: 'num34-q5',
        question: 'Who was the chief from the tribe of Judah?',
        options: ['Caleb the son of Jephunneh', 'Nahshon', 'Othniel', 'Hur'],
        correctAnswer: 'Caleb the son of Jephunneh',
        explanation: 'Numbers 34:19 (ESV): "For the tribe of Judah, Caleb the son of Jephunneh."',
        difficulty: 'medium'
      },
      {
        id: 'num34-q6',
        question: 'What is the eastern boundary?',
        options: ['The Jordan', 'The Euphrates', 'The Tigris', 'The Nile'],
        correctAnswer: 'The Jordan',
        explanation: 'Numbers 34:12 (ESV): "And the boundary shall go down to the Jordan..."',
        difficulty: 'medium'
      },
      {
        id: 'num34-q7',
        question: 'The northern boundary extends to which mountain?',
        options: ['Mount Hor (northern)', 'Mount Zion', 'Mount Nebo', 'Mount Sinai'],
        correctAnswer: 'Mount Hor (northern)',
        explanation: 'Numbers 34:7 (ESV): "From the Great Sea you shall mark out your line to Mount Hor." (Different from where Aaron died).',
        difficulty: 'medium'
      },
      {
        id: 'num34-q8',
        question: 'Which tribes had already received their inheritance?',
        options: ['Reuben, Gad, and half the tribe of Manasseh', 'Judah and Benjamin', 'Levi', 'Ephraim'],
        correctAnswer: 'Reuben, Gad, and half the tribe of Manasseh',
        explanation: 'Numbers 34:14 (ESV): "For the tribe of the people of Reuben... Gad... Manasseh have received their inheritance."',
        difficulty: 'medium'
      },
      {
        id: 'num34-q9',
        question: 'What sea is mentioned on the eastern border (Sea of Chinnereth)?',
        options: ['Sea of Galilee', 'Salt Sea', 'Red Sea', 'Dead Sea'],
        correctAnswer: 'Sea of Galilee',
        explanation: 'Chinnereth is the OT name for Galilee.',
        difficulty: 'hard'
      },
      {
        id: 'num34-q10',
        question: 'Who was the chief from Simeon?',
        options: ['Shemuel the son of Ammihud', 'Zimri', 'Shelumiel', 'Shaphat'],
        correctAnswer: 'Shemuel the son of Ammihud',
        explanation: 'Numbers 34:20 (ESV): "Of the tribe of the people of Simeon, Shemuel the son of Ammihud."',
        difficulty: 'hard'
      },
      {
        id: 'num34-q11',
        question: 'Who was the chief from Benjamin?',
        options: ['Elidad the son of Chislon', 'Abidan', 'Palti', 'Saul'],
        correctAnswer: 'Elidad the son of Chislon',
        explanation: 'Numbers 34:21 (ESV): "Of the tribe of Benjamin, Elidad..."',
        difficulty: 'hard'
      },
      {
        id: 'num34-q12',
        question: 'Who was the chief from Dan?',
        options: ['Bukki the son of Jogli', 'Ahiezer', 'Ammishaddai', 'Samson'],
        correctAnswer: 'Bukki the son of Jogli',
        explanation: 'Numbers 34:22 (ESV): "Of the tribe of the people of Dan a chief, Bukki..."',
        difficulty: 'hard'
      },
      {
        id: 'num34-q13',
        question: 'For Joseph, whose sons were listed?',
        options: ['Manasseh and Ephraim', 'Just Ephraim', 'Just Manasseh', 'None'],
        correctAnswer: 'Manasseh and Ephraim',
        explanation: 'Numbers 34:23 (ESV): "Of the sons of Joseph..." lists both.',
        difficulty: 'hard'
      },
      {
        id: 'num34-q14',
        question: 'What is the "Salt Sea"?',
        options: ['The Dead Sea', 'The Red Sea', 'The Med', 'The Nile'],
        correctAnswer: 'The Dead Sea',
        explanation: 'Numbers 34:3 references "end at the Salt Sea" (southern border).',
        difficulty: 'hard'
      },
      {
        id: 'num34-q15',
        question: 'Total number of men Moses named to divide the land (besides Eleazar and Joshua)?',
        options: ['Ten (for the 9.5 tribes)', 'Twelve', 'Seven', 'Seventy'],
        correctAnswer: 'Ten (for the 9.5 tribes)',
        explanation: 'Counting the names lists one for each of the remaining tribes West of Jordan.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 34:2',
    key_verse_text: "Command the people of Israel, and say to them, 'When you enter the land of Canaan (this is the land that shall fall to you for an inheritance...)'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-35',
    bookId: 'numbers',
    chapter: 35,
    title: 'Cities of Refuge',
    questions: [
      {
        id: 'num35-q1',
        question: 'How many cities were the Levites given in total?',
        options: ['48 cities', '10 cities', '12 cities', '6 cities'],
        correctAnswer: '48 cities',
        explanation: 'Numbers 35:7 (ESV): "All the cities that you give to the Levites shall be forty-eight..."',
        difficulty: 'easy'
      },
      {
        id: 'num35-q2',
        question: 'How many of these were Cities of Refuge?',
        options: ['Six', 'Three', 'Twelve', 'Forty-two'],
        correctAnswer: 'Six',
        explanation: 'Numbers 35:6 (ESV): "Six cities of refuge..."',
        difficulty: 'easy'
      },
      {
        id: 'num35-q3',
        question: 'What were the Cities of Refuge for?',
        options: ['For the manslayer who kills any person without intent to flee there', 'For debtors', 'For kings', 'For vacation'],
        correctAnswer: 'For the manslayer who kills any person without intent to flee there',
        explanation: 'Numbers 35:11 (ESV): "That the manslayer who kills any person without intent may flee there."',
        difficulty: 'easy'
      },
      {
        id: 'num35-q4',
        question: 'If a man strikes another with an iron object and he dies, he is a ...?',
        options: ['Murderer; he shall be put to death', 'Manslayer', 'Hero', 'Soldier'],
        correctAnswer: 'Murderer; he shall be put to death',
        explanation: 'Numbers 35:16 (ESV): "If he strikes him with an iron object... he is a murderer; the murderer shall be put to death."',
        difficulty: 'easy'
      },
      {
        id: 'num35-q5',
        question: 'Who puts the murderer to death?',
        options: ['The avenger of blood', 'The priest', 'The king', 'The jury'],
        correctAnswer: 'The avenger of blood',
        explanation: 'Numbers 35:19 (ESV): "The avenger of blood shall himself put the murderer to death..."',
        difficulty: 'medium'
      },
      {
        id: 'num35-q6',
        question: 'What is required to convict a murderer?',
        options: ['Witnesses (more than one)', 'A confession', 'A feeling', 'Lots'],
        correctAnswer: 'Witnesses (more than one)',
        explanation: 'Numbers 35:30 (ESV): "But no person shall be put to death on the testimony of one witness."',
        difficulty: 'medium'
      },
      {
        id: 'num35-q7',
        question: 'When can the manslayer (unintentional) return to his land?',
        options: ['After the death of the high priest', 'After 7 years', 'After paying a fine', 'Never'],
        correctAnswer: 'After the death of the high priest',
        explanation: 'Numbers 35:25 (ESV): "And he shall remain in it until the death of the high priest who was anointed..."',
        difficulty: 'medium'
      },
      {
        id: 'num35-q8',
        question: 'Can you take a ransom for the life of a murderer?',
        options: ['No', 'Yes, if rich', 'Yes, if he is a leader', 'Only 50 shekels'],
        correctAnswer: 'No',
        explanation: 'Numbers 35:31 (ESV): "Moreover, you shall accept no ransom for the life of a murderer... he shall surely be put to death."',
        difficulty: 'medium'
      },
      {
        id: 'num35-q9',
        question: 'Blood pollutes the land. How is atonement made for blood shed?',
        options: ['Only by the blood of him who shed it', 'By money', 'By water', 'By prayer'],
        correctAnswer: 'Only by the blood of him who shed it',
        explanation: 'Numbers 35:33 (ESV): "For blood pollutes the land, and no atonement... except by the blood of the one who shed it."',
        difficulty: 'medium'
      },
      {
        id: 'num35-q10',
        question: 'Where were the 6 cities located?',
        options: ['Three beyond the Jordan (East), and three in the land of Canaan (West)', 'All in Canaan', 'All in Egypt', 'All near Jerusalem'],
        correctAnswer: 'Three beyond the Jordan (East), and three in the land of Canaan (West)',
        explanation: 'Numbers 35:14 (ESV): "You shall give three cities beyond the Jordan, and three cities in the land of Canaan..."',
        difficulty: 'medium'
      },
      {
        id: 'num35-q11',
        question: 'How much pasture land around the cities for Levites?',
        options: ['2000 cubits on each side', '100 cubits', '1 mile', 'None'],
        correctAnswer: '2000 cubits on each side',
        explanation: 'Numbers 35:5 (ESV): "Measure... 2,000 cubits..."',
        difficulty: 'hard'
      },
      {
        id: 'num35-q12',
        question: 'If he pushes him out of hatred, is it murder?',
        options: ['Yes', 'No', 'Manslaughter', 'Accident'],
        correctAnswer: 'Yes',
        explanation: 'Numbers 35:20 (ESV): "And if he pushed him out of hatred... he is a murderer."',
        difficulty: 'hard'
      },
      {
        id: 'num35-q13',
        question: 'If the avenger finds the manslayer outside the city of refuge boundary?',
        options: ['He may kill him without guilt', 'He must arrest him', 'He must ignore him', 'He is guilty if he kills him'],
        correctAnswer: 'He may kill him without guilt',
        explanation: 'Numbers 35:27 (ESV): "And the avenger of blood kills the manslayer, he shall not be guilty of blood."',
        difficulty: 'hard'
      },
      {
        id: 'num35-q14',
        question: 'Why must they not defile the land?',
        options: ['Because I the Lord dwell in the midst of the people of Israel', 'It smells bad', 'It ruins crops', 'Economics'],
        correctAnswer: 'Because I the Lord dwell in the midst of the people of Israel',
        explanation: 'Numbers 35:34 (ESV): "You shall not defile the land... for I the Lord dwell in the midst..."',
        difficulty: 'hard'
      },
      {
        id: 'num35-q15',
        question: 'Does the city of refuge protect a murderer permanently?',
        options: ['No, the congregation judges; if guilty, he is given to the avenger', 'Yes', 'Only on Sabbath', 'Depends on the city'],
        correctAnswer: 'No, the congregation judges; if guilty, he is given to the avenger',
        explanation: 'Numbers 35:12, 24 indicates trial; if murder is proven, protection is lifted (implied v21).',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 35:33',
    key_verse_text: "You shall not pollute the land in which you live, for blood pollutes the land, and no atonement can be made for the land for the blood that is shed in it, except by the blood of the one who shed it.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'numbers-36',
    bookId: 'numbers',
    chapter: 36,
    title: 'Marriage of Female Heirs',
    questions: [
      {
        id: 'num36-q1',
        question: 'Who brought a problem regarding Zelophehad\'s daughters to Moses?',
        options: ['The heads of the fathers\' houses of the clan of the people of Gilead (Manasseh)', 'Aaron', 'Zelophehad himself', 'Joshua'],
        correctAnswer: 'The heads of the fathers\' houses of the clan of the people of Gilead (Manasseh)',
        explanation: 'Numbers 36:1 (ESV): "The heads... of the clan of the people of Gilead... came near and spoke..."',
        difficulty: 'easy'
      },
      {
        id: 'num36-q2',
        question: 'What was the concern?',
        options: ['If they marry outside the tribe, their inheritance will be taken from the tribe', 'They would not marry', 'They would marry Egyptians', 'They would fight'],
        correctAnswer: 'If they marry outside the tribe, their inheritance will be taken from the tribe',
        explanation: 'Numbers 36:3 (ESV): "And if they are married to any... of another tribe, then their inheritance will be taken..."',
        difficulty: 'easy'
      },
      {
        id: 'num36-q3',
        question: 'What did God command regarding Zelophehad\'s daughters?',
        options: ['They may marry whom they think best, but only within the clan of the tribe of their father', 'They must not marry', 'They marry priests', 'Anyone is fine'],
        correctAnswer: 'They may marry whom they think best, but only within the clan of the tribe of their father',
        explanation: 'Numbers 36:6 (ESV): "Let them marry whom they think best, only they shall marry within the clan of the tribe of their father."',
        difficulty: 'easy'
      },
      {
        id: 'num36-q4',
        question: 'Why this rule?',
        options: ['So that the inheritance of the people of Israel shall not be transferred from one tribe to another', 'To keep bloodlines pure', 'To annoy them', 'Tradition'],
        correctAnswer: 'So that the inheritance of the people of Israel shall not be transferred from one tribe to another',
        explanation: 'Numbers 36:7 (ESV): "The inheritance of the people of Israel shall not be transferred from one tribe to another..."',
        difficulty: 'easy'
      },
      {
        id: 'num36-q5',
        question: 'Did the daughters obey?',
        options: ['Yes, they married sons of their father\'s brothers (cousins)', 'No', 'Only two of them', 'They stayed single'],
        correctAnswer: 'Yes, they married sons of their father\'s brothers (cousins)',
        explanation: 'Numbers 36:10-11 (ESV): "Zelophehad\'s daughters did... married sons of their father\'s brothers."',
        difficulty: 'easy'
      },
      {
        id: 'num36-q6',
        question: 'This law applies to whom?',
        options: ['Every daughter who possesses an inheritance in any tribe', 'Only Zelophehad\'s family', 'Levites only', 'Men only'],
        correctAnswer: 'Every daughter who possesses an inheritance in any tribe',
        explanation: 'Numbers 36:8 (ESV): "And every daughter who possesses an inheritance... shall be wife to one of the clan of the tribe of her father..."',
        difficulty: 'medium'
      },
      {
        id: 'num36-q7',
        question: 'What happens in the Jubilee if they had married outside?',
        options: ['It would be added to the tribe into which they married (permanently lost)', 'It returns', 'It is burned', 'God takes it'],
        correctAnswer: 'It would be added to the tribe into which they married (permanently lost)',
        explanation: 'Numbers 36:4 (ESV): "And when the jubilee... comes, then their inheritance will be added to the inheritance of the tribe into which they marry."',
        difficulty: 'medium'
      },
      {
        id: 'num36-q8',
        question: 'Where were these commandments and rules given?',
        options: ['In the plains of Moab by the Jordan at Jericho', 'Sinai', 'Egypt', 'Hebron'],
        correctAnswer: 'In the plains of Moab by the Jordan at Jericho',
        explanation: 'Numbers 36:13 (ESV): "...in the plains of Moab by the Jordan at Jericho."',
        difficulty: 'medium'
      },
      {
        id: 'num36-q9',
        question: 'Who spoke God\'s command in response?',
        options: ['Moses', 'Aaron', 'Eleazar', 'Joshua'],
        correctAnswer: 'Moses',
        explanation: 'Numbers 36:5 (ESV): "And Moses commanded the people of Israel according to the word of the Lord..."',
        difficulty: 'medium'
      },
      {
        id: 'num36-q10',
        question: 'This concludes which book?',
        options: ['Numbers', 'Leviticus', 'Deuteronomy', 'Exodus'],
        correctAnswer: 'Numbers',
        explanation: 'This is the last chapter of Numbers.',
        difficulty: 'medium'
      },
      {
        id: 'num36-q11',
        question: 'The daughters married into which specific tribe?',
        options: ['Manasseh (son of Joseph)', 'Ephraim', 'Judah', 'Levi'],
        correctAnswer: 'Manasseh (son of Joseph)',
        explanation: 'Numbers 36:12 (ESV): "They were married into the clans of the people of Manasseh the son of Joseph..."',
        difficulty: 'hard'
      },
      {
        id: 'num36-q12',
        question: 'How many daughters were there again?',
        options: ['Five', 'Seven', 'Twelve', 'Three'],
        correctAnswer: 'Five',
        explanation: 'Recalling Ch 27 and 36:11 lists 5 names.',
        difficulty: 'hard'
      },
      {
        id: 'num36-q13',
        question: 'What is the key principle of land ownership here?',
        options: ['Inheritance remains in the tribe', 'Land can be sold freely', 'King owns all', 'Priests own all'],
        correctAnswer: 'Inheritance remains in the tribe',
        explanation: 'Numbers 36:9 (ESV): "So no inheritance shall be transferred from one tribe to another..."',
        difficulty: 'hard'
      },
      {
        id: 'num36-q14',
        question: 'Zelophehad was of which tribe?',
        options: ['Manasseh', 'Ephraim', 'Judah', 'Dan'],
        correctAnswer: 'Manasseh',
        explanation: 'Numbers 27:1 / 36:1 context.',
        difficulty: 'hard'
      },
      {
        id: 'num36-q15',
        question: 'Did the inheritance remain with them after marriage?',
        options: ['Yes, "and their inheritance remained in the tribe of their father\'s clan"', 'No', 'Partially', 'Only for life'],
        correctAnswer: 'Yes, "and their inheritance remained in the tribe of their father\'s clan"',
        explanation: 'Numbers 36:12 (ESV): "...and their inheritance remained in the tribe of their father\'s clan."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Numbers 36:7',
    key_verse_text: "The inheritance of the people of Israel shall not be transferred from one tribe to another, for every one of the people of Israel shall hold on to the inheritance of the tribe of his fathers.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  }
];
