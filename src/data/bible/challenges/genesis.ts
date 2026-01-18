
import { ChapterChallenge } from '../types';

export const genesisChallenges: ChapterChallenge[] = [
  {
    id: 'genesis-1',
    bookId: 'genesis',
    chapter: 1,
    title: 'Creation - The Beginning',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'gen1-q1',
        question: 'What did God create on the first day?',
        options: ['The sun and moon', 'Light', 'Animals', 'Plants'],
        correctAnswer: 'Light',
        explanation: 'Genesis 1:3 (ESV): "And God said, Let there be light, and there was light."',
        difficulty: 'easy'
      },
      {
        id: 'gen1-q2',
        question: 'According to Genesis 1:26, in whose image was mankind created?',
        options: ['In the image of angels', 'In the image of God', 'In the image of animals', 'In the image of the earth'],
        correctAnswer: 'In the image of God',
        explanation: 'Genesis 1:26 (ESV): "Then God said, Let us make man in our image, after our likeness..."',
        difficulty: 'easy'
      },
      {
        id: 'gen1-q3',
        question: 'What phrase is repeated to emphasize God\'s creation was good?',
        options: ['And it was perfect', 'And God blessed it', 'And God saw that it was good', 'And it remained forever'],
        correctAnswer: 'And God saw that it was good',
        explanation: 'This phrase appears multiple times throughout Genesis 1 to affirm the goodness of creation.',
        difficulty: 'easy'
      },
      {
        id: 'gen1-q4',
        question: 'What did God create on day six?',
        options: ['Fish and birds', 'Sun, moon, and stars', 'Land animals and humans', 'Plants and trees'],
        correctAnswer: 'Land animals and humans',
        explanation: 'Genesis 1:24-27: God created land animals and then mankind on the sixth day.',
        difficulty: 'easy'
      },
      {
        id: 'gen1-q5',
        question: 'What did God do on the seventh day?',
        options: ['Created more animals', 'Rested from His work', 'Made the sun', 'Created the seas'],
        correctAnswer: 'Rested from His work',
        explanation: 'Genesis 2:2 (ESV): "And on the seventh day God finished his work... and he rested."',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'gen1-q6',
        question: 'On which day did God create the sun, moon, and stars?',
        options: ['First day', 'Third day', 'Fourth day', 'Fifth day'],
        correctAnswer: 'Fourth day',
        explanation: 'Genesis 1:14-19: God made the two great lights and the stars on the fourth day.',
        difficulty: 'medium'
      },
      {
        id: 'gen1-q7',
        question: 'What did God give mankind dominion over?',
        options: ['Only the land', 'Fish, birds, livestock, and all the earth', 'The stars and heavens', 'Other humans'],
        correctAnswer: 'Fish, birds, livestock, and all the earth',
        explanation: 'Genesis 1:26,28: God gave humans dominion over all living creatures and the earth.',
        difficulty: 'medium'
      },
      {
        id: 'gen1-q8',
        question: 'What did God create on the fifth day?',
        options: ['Light and darkness', 'Sea creatures and birds', 'Land animals', 'Plants and trees'],
        correctAnswer: 'Sea creatures and birds',
        explanation: 'Genesis 1:20-23: God created fish and birds on the fifth day.',
        difficulty: 'medium'
      },
      {
        id: 'gen1-q9',
        question: 'What did God create to separate day from night on day four?',
        options: ['Clouds', 'The sun and moon', 'The mountains', 'The atmosphere'],
        correctAnswer: 'The sun and moon',
        explanation: 'Genesis 1:14-18: God made two great lights to govern day and night.',
        difficulty: 'medium'
      },
      {
        id: 'gen1-q10',
        question: 'What command did God give to the living creatures He created?',
        options: ['To worship Him only', 'Be fruitful and multiply', 'To eat only plants', 'To stay in one place'],
        correctAnswer: 'Be fruitful and multiply',
        explanation: 'Genesis 1:22,28: God blessed them saying "Be fruitful and multiply."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'gen1-q11',
        question: 'What was the state of the earth before God began creating?',
        options: ['Beautiful and orderly', 'Without form and void', 'Full of animals', 'Covered with plants'],
        correctAnswer: 'Without form and void',
        explanation: 'Genesis 1:2 (ESV): "The earth was without form and void, and darkness was over the face of the deep."',
        difficulty: 'hard'
      },
      {
        id: 'gen1-q12',
        question: 'What was hovering over the face of the waters in Genesis 1:2?',
        options: ['An angel', 'The Spirit of God', 'A great wind', 'A cloud of darkness'],
        correctAnswer: 'The Spirit of God',
        explanation: 'Genesis 1:2 (ESV): "And the Spirit of God was hovering over the face of the waters."',
        difficulty: 'hard'
      },
      {
        id: 'gen1-q13',
        question: 'What did God call the expanse that separated the waters above from waters below?',
        options: ['Earth', 'Heaven', 'Firmament', 'Clouds'],
        correctAnswer: 'Heaven',
        explanation: 'Genesis 1:8 (ESV): "And God called the expanse Heaven."',
        difficulty: 'hard'
      },
      {
        id: 'gen1-q14',
        question: 'According to Genesis 1, what food did God originally give to mankind?',
        options: ['Meat from animals', 'Fish from the sea', 'Every seed-bearing plant and fruit', 'Bread and wine'],
        correctAnswer: 'Every seed-bearing plant and fruit',
        explanation: 'Genesis 1:29 (ESV): "I have given you every plant yielding seed... and every tree with seed in its fruit."',
        difficulty: 'hard'
      },
      {
        id: 'gen1-q15',
        question: 'What unique phrase in Genesis 1:26 suggests plurality within God?',
        options: ['"God alone said"', '"Let us make man in our image"', '"The Lord commanded"', '"I will create"'],
        correctAnswer: '"Let us make man in our image"',
        explanation: 'Genesis 1:26: The plural "us" and "our" is understood as a reference to the Trinity.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 1:1',
    key_verse_text: 'In the beginning God created the heavens and the earth.',
    memory_challenge: true,
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'genesis-2',
    bookId: 'genesis',
    chapter: 2,
    title: 'Garden of Eden and Creation of Mankind',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'gen2-q1',
        question: 'What did God do on the seventh day?',
        options: ['Created humans', 'Blessed the animals', 'Rested from His work', 'Planted more gardens'],
        correctAnswer: 'Rested from His work',
        explanation: 'Genesis 2:2 (ESV): "And on the seventh day God finished his work... and he rested."',
        difficulty: 'easy'
      },
      {
        id: 'gen2-q2',
        question: 'From what material did God form man?',
        options: ['Water', 'Dust of the ground', 'Clay from the riverbed', 'Light'],
        correctAnswer: 'Dust of the ground',
        explanation: 'Genesis 2:7 (ESV): "the LORD God formed the man of dust from the ground."',
        difficulty: 'easy'
      },
      {
        id: 'gen2-q3',
        question: 'Which tree was Adam forbidden to eat from?',
        options: ['The tree of life', 'The tree of knowledge of good and evil', 'The fig tree', 'The olive tree'],
        correctAnswer: 'The tree of knowledge of good and evil',
        explanation: 'Genesis 2:17 (ESV): "of the tree of the knowledge of good and evil you shall not eat."',
        difficulty: 'easy'
      },
      {
        id: 'gen2-q4',
        question: 'From which part of Adam did God create woman?',
        options: ['From his heart', 'From his rib', 'From his hand', 'From the same dust'],
        correctAnswer: 'From his rib',
        explanation: 'Genesis 2:21-22: God took one of Adam\'s ribs and made a woman.',
        difficulty: 'easy'
      },
      {
        id: 'gen2-q5',
        question: 'Where did God place the man He had formed?',
        options: ['In the mountains', 'In the Garden of Eden', 'By the sea', 'In the desert'],
        correctAnswer: 'In the Garden of Eden',
        explanation: 'Genesis 2:8 (ESV): "the LORD God planted a garden in Eden... and there he put the man."',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'gen2-q6',
        question: 'What did God breathe into man\'s nostrils to give him life?',
        options: ['Holy Spirit', 'The breath of life', 'Wind', 'Fire'],
        correctAnswer: 'The breath of life',
        explanation: 'Genesis 2:7 (ESV): "breathed into his nostrils the breath of life, and the man became a living being."',
        difficulty: 'medium'
      },
      {
        id: 'gen2-q7',
        question: 'What was the man\'s first task in the garden?',
        options: ['To build an altar', 'To work it and keep it', 'To name the animals', 'To eat from all trees'],
        correctAnswer: 'To work it and keep it',
        explanation: 'Genesis 2:15 (ESV): "The LORD God took the man and put him in the garden of Eden to work it and keep it."',
        difficulty: 'medium'
      },
      {
        id: 'gen2-q8',
        question: 'What did God say would happen if Adam ate from the forbidden tree?',
        options: ['He would become wise', 'He would surely die', 'He would be cast out', 'He would become like God'],
        correctAnswer: 'He would surely die',
        explanation: 'Genesis 2:17 (ESV): "in the day that you eat of it you shall surely die."',
        difficulty: 'medium'
      },
      {
        id: 'gen2-q9',
        question: 'Why did God create woman?',
        options: ['To serve man', 'Because it was not good for man to be alone', 'To tend the garden', 'To rule alongside him'],
        correctAnswer: 'Because it was not good for man to be alone',
        explanation: 'Genesis 2:18 (ESV): "It is not good that the man should be alone; I will make him a helper fit for him."',
        difficulty: 'medium'
      },
      {
        id: 'gen2-q10',
        question: 'What did Adam do when God brought the animals to him?',
        options: ['Feared them', 'Named them', 'Fed them', 'Counted them'],
        correctAnswer: 'Named them',
        explanation: 'Genesis 2:19-20: God brought the animals to Adam to see what he would call them.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'gen2-q11',
        question: 'How many rivers flowed from Eden according to Genesis 2?',
        options: ['Two rivers', 'Three rivers', 'Four rivers', 'Seven rivers'],
        correctAnswer: 'Four rivers',
        explanation: 'Genesis 2:10-14: Pishon, Gihon, Tigris (Hiddekel), and Euphrates.',
        difficulty: 'hard'
      },
      {
        id: 'gen2-q12',
        question: 'Which river flowed around the land of Cush?',
        options: ['Pishon', 'Gihon', 'Tigris', 'Euphrates'],
        correctAnswer: 'Gihon',
        explanation: 'Genesis 2:13 (ESV): "The name of the second river is the Gihon. It is the one that flows around the whole land of Cush."',
        difficulty: 'hard'
      },
      {
        id: 'gen2-q13',
        question: 'What precious materials were found in the land of Havilah where the Pishon flows?',
        options: ['Silver and bronze', 'Gold, bdellium, and onyx', 'Iron and copper', 'Diamonds and pearls'],
        correctAnswer: 'Gold, bdellium, and onyx',
        explanation: 'Genesis 2:11-12: The gold of that land is good; bdellium and onyx stone are there.',
        difficulty: 'hard'
      },
      {
        id: 'gen2-q14',
        question: 'What did Adam call his wife and why?',
        options: ['Eve, because she was beautiful', 'Woman, because she was taken out of man', 'Helper, because she helped him', 'Beloved, because he loved her'],
        correctAnswer: 'Woman, because she was taken out of man',
        explanation: 'Genesis 2:23 (ESV): "She shall be called Woman, because she was taken out of Man."',
        difficulty: 'hard'
      },
      {
        id: 'gen2-q15',
        question: 'According to Genesis 2:24, what does a man do when he marries?',
        options: ['Gains new responsibilities', 'Leaves father and mother and holds fast to his wife', 'Receives a blessing from God', 'Enters a covenant with her family'],
        correctAnswer: 'Leaves father and mother and holds fast to his wife',
        explanation: 'Genesis 2:24 (ESV): "a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 2:7',
    key_verse_text: 'Then the LORD God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.',
    memory_challenge: true,
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'genesis-3',
    bookId: 'genesis',
    chapter: 3,
    title: 'The Fall of Man',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis3-q1',
        question: 'Which creature tempted the woman in the garden?',
        options: ['An angel', 'The serpent', 'A lion', 'A bird'],
        correctAnswer: 'The serpent',
        explanation: 'Genesis 3:1 (ESV): "Now the serpent was more crafty than any other beast of the field."',
        difficulty: 'easy'
      },
      {
        id: 'genesis3-q2',
        question: 'What curse did God give to the serpent?',
        options: ['To lose its voice', 'To crawl on its belly', 'To be blind', 'To live in water'],
        correctAnswer: 'To crawl on its belly',
        explanation: 'Genesis 3:14 (ESV): "on your belly you shall go, and dust you shall eat."',
        difficulty: 'easy'
      },
      {
        id: 'genesis3-q3',
        question: 'What did Adam and Eve do after eating the forbidden fruit?',
        options: ['Ran away from Eden', 'Hid from God', 'Built an altar', 'Blamed the animals'],
        correctAnswer: 'Hid from God',
        explanation: 'Genesis 3:8: They hid themselves from the presence of the LORD God.',
        difficulty: 'easy'
      },
      {
        id: 'genesis3-q4',
        question: 'What did God use to make clothing for Adam and Eve?',
        options: ['Fig leaves', 'Animal skins', 'Tree bark', 'Woven grass'],
        correctAnswer: 'Animal skins',
        explanation: 'Genesis 3:21 (ESV): "the LORD God made for Adam and his wife garments of skins."',
        difficulty: 'easy'
      },
      {
        id: 'genesis3-q5',
        question: 'What happened to Adam and Eve at the end of Genesis 3?',
        options: ['They died immediately', 'They were driven out of Eden', 'They became angels', 'They were forgiven'],
        correctAnswer: 'They were driven out of Eden',
        explanation: 'Genesis 3:24: God drove out the man from the garden of Eden.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis3-q6',
        question: 'What did Eve see about the forbidden tree that attracted her?',
        options: ['It was the tallest tree', 'It was good for food and desirable for wisdom', 'It had golden fruit', 'It glowed with light'],
        correctAnswer: 'It was good for food and desirable for wisdom',
        explanation: 'Genesis 3:6: The tree was good for food, a delight to the eyes, and desired to make one wise.',
        difficulty: 'medium'
      },
      {
        id: 'genesis3-q7',
        question: 'What did God place at the east of Eden to guard the tree of life?',
        options: ['A wall of fire', 'Cherubim with a flaming sword', 'An angel army', 'A great river'],
        correctAnswer: 'Cherubim with a flaming sword',
        explanation: 'Genesis 3:24: God placed cherubim and a flaming sword to guard the way to the tree of life.',
        difficulty: 'medium'
      },
      {
        id: 'genesis3-q8',
        question: 'What did the serpent tell Eve would happen if she ate the fruit?',
        options: ['She would become like the animals', 'She would become like God, knowing good and evil', 'She would live forever', 'She would rule over Adam'],
        correctAnswer: 'She would become like God, knowing good and evil',
        explanation: 'Genesis 3:5: The serpent said "you will be like God, knowing good and evil."',
        difficulty: 'medium'
      },
      {
        id: 'genesis3-q9',
        question: 'What punishment did God give to the ground because of Adam?',
        options: ['It would be flooded', 'It would be cursed and produce thorns', 'It would become sand', 'It would shake with earthquakes'],
        correctAnswer: 'It would be cursed and produce thorns',
        explanation: 'Genesis 3:17-18: The ground was cursed, bringing forth thorns and thistles.',
        difficulty: 'medium'
      },
      {
        id: 'genesis3-q10',
        question: 'According to Genesis 3:16, what would increase for the woman?',
        options: ['Her wisdom', 'Her pain in childbearing', 'Her years of life', 'Her beauty'],
        correctAnswer: 'Her pain in childbearing',
        explanation: 'Genesis 3:16: "I will surely multiply your pain in childbearing."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis3-q11',
        question: 'In Genesis 3:15, what is promised about the woman\'s offspring?',
        options: ['He would rule all nations', 'He would crush the serpent\'s head', 'He would live forever', 'He would return to Eden'],
        correctAnswer: 'He would crush the serpent\'s head',
        explanation: 'Genesis 3:15 (ESV): "he shall bruise your head." This is the first messianic prophecy (protoevangelium).',
        difficulty: 'hard'
      },
      {
        id: 'genesis3-q12',
        question: 'How did the serpent describe God\'s command about the tree?',
        options: ['"God knows you will be like angels"', '"Did God actually say, You shall not eat of any tree?"', '"God wants to keep you in darkness"', '"God is testing your obedience"'],
        correctAnswer: '"Did God actually say, You shall not eat of any tree?"',
        explanation: 'Genesis 3:1: The serpent twisted God\'s words to create doubt.',
        difficulty: 'hard'
      },
      {
        id: 'genesis3-q13',
        question: 'What did Adam name his wife and why?',
        options: ['Woman, because she came from man', 'Eve, because she was the mother of all living', 'Helper, because she helped him', 'Beloved, because he loved her'],
        correctAnswer: 'Eve, because she was the mother of all living',
        explanation: 'Genesis 3:20: "The man called his wife\'s name Eve, because she was the mother of all living."',
        difficulty: 'hard'
      },
      {
        id: 'genesis3-q14',
        question: 'What reason did God give for driving man out of the garden?',
        options: ['To punish him for disobedience', 'So he would not eat from the tree of life and live forever', 'To make room for angels', 'Because the garden was destroyed'],
        correctAnswer: 'So he would not eat from the tree of life and live forever',
        explanation: 'Genesis 3:22: "lest he reach out his hand and take also of the tree of life and eat, and live forever."',
        difficulty: 'hard'
      },
      {
        id: 'genesis3-q15',
        question: 'According to Genesis 3:19, what would happen to man because of his sin?',
        options: ['He would become like an animal', 'He would return to dust', 'He would lose his memory', 'He would become invisible to God'],
        correctAnswer: 'He would return to dust',
        explanation: 'Genesis 3:19: "for you are dust, and to dust you shall return."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 3:15',
    key_verse_text: "'I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-4',
    bookId: 'genesis',
    chapter: 4,
    title: 'Cain and Abel',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis4-q1',
        question: 'Who were Adam and Eve\'s first two sons?',
        options: ['Jacob and Esau', 'Cain and Abel', 'Seth and Enosh', 'Isaac and Ishmael'],
        correctAnswer: 'Cain and Abel',
        explanation: 'Genesis 4:1-2: Eve bore Cain, then his brother Abel.',
        difficulty: 'easy'
      },
      {
        id: 'genesis4-q2',
        question: 'What happened to Abel?',
        options: ['He died of old age', 'Cain killed him', 'He was taken by God', 'He moved away'],
        correctAnswer: 'Cain killed him',
        explanation: 'Genesis 4:8: Cain rose up against his brother Abel and killed him.',
        difficulty: 'easy'
      },
      {
        id: 'genesis4-q3',
        question: 'What was Abel\'s occupation?',
        options: ['A farmer', 'A keeper of sheep', 'A builder', 'A hunter'],
        correctAnswer: 'A keeper of sheep',
        explanation: 'Genesis 4:2: Abel was a keeper of sheep.',
        difficulty: 'easy'
      },
      {
        id: 'genesis4-q4',
        question: 'Whose offering did God accept?',
        options: ['Cain\'s offering', 'Abel\'s offering', 'Both offerings', 'Neither offering'],
        correctAnswer: 'Abel\'s offering',
        explanation: 'Genesis 4:4: The LORD had regard for Abel and his offering.',
        difficulty: 'easy'
      },
      {
        id: 'genesis4-q5',
        question: 'Who was born to Adam and Eve to replace Abel?',
        options: ['Enoch', 'Seth', 'Lamech', 'Jared'],
        correctAnswer: 'Seth',
        explanation: 'Genesis 4:25: Eve bore a son and called his name Seth.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis4-q6',
        question: 'What was Cain\'s occupation?',
        options: ['A shepherd', 'A worker of the ground', 'A builder', 'A metalworker'],
        correctAnswer: 'A worker of the ground',
        explanation: 'Genesis 4:2: Cain was a worker of the ground (farmer).',
        difficulty: 'medium'
      },
      {
        id: 'genesis4-q7',
        question: 'What was Cain\'s punishment for killing Abel?',
        options: ['Death', 'To be a fugitive and wanderer', 'Imprisonment', 'Exile to Egypt'],
        correctAnswer: 'To be a fugitive and wanderer',
        explanation: 'Genesis 4:12: "you shall be a fugitive and a wanderer on the earth."',
        difficulty: 'medium'
      },
      {
        id: 'genesis4-q8',
        question: 'What did God say was crouching at Cain\'s door?',
        options: ['An animal', 'Sin', 'Blessing', 'Judgment'],
        correctAnswer: 'Sin',
        explanation: 'Genesis 4:7: "sin is crouching at the door. Its desire is contrary to you."',
        difficulty: 'medium'
      },
      {
        id: 'genesis4-q9',
        question: 'What did God put on Cain to protect him?',
        options: ['A crown', 'A mark', 'A shield', 'Armor'],
        correctAnswer: 'A mark',
        explanation: 'Genesis 4:15: "the LORD put a mark on Cain, lest any who found him should attack him."',
        difficulty: 'medium'
      },
      {
        id: 'genesis4-q10',
        question: 'Where did Cain settle after leaving God\'s presence?',
        options: ['Land of Nod', 'Land of Canaan', 'Land of Egypt', 'Land of Shinar'],
        correctAnswer: 'Land of Nod',
        explanation: 'Genesis 4:16: "Cain went away... and settled in the land of Nod, east of Eden."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis4-q11',
        question: 'What was the name of Cain\'s son?',
        options: ['Seth', 'Enoch', 'Lamech', 'Methuselah'],
        correctAnswer: 'Enoch',
        explanation: 'Genesis 4:17: Cain\'s wife bore Enoch, and he built a city named after him.',
        difficulty: 'hard'
      },
      {
        id: 'genesis4-q12',
        question: 'Who was Lamech in Cain\'s lineage, and what did he do?',
        options: ['Built the ark', 'Killed a man and boasted about it', 'Walked with God', 'Invented writing'],
        correctAnswer: 'Killed a man and boasted about it',
        explanation: 'Genesis 4:23: Lamech said to his wives, "I have killed a man for wounding me."',
        difficulty: 'hard'
      },
      {
        id: 'genesis4-q13',
        question: 'According to Genesis 4, who was the father of those who dwell in tents and have livestock?',
        options: ['Cain', 'Jabal', 'Jubal', 'Tubal-cain'],
        correctAnswer: 'Jabal',
        explanation: 'Genesis 4:20: "Jabal... was the father of those who dwell in tents and have livestock."',
        difficulty: 'hard'
      },
      {
        id: 'genesis4-q14',
        question: 'Who was the first forger of instruments of bronze and iron?',
        options: ['Jabal', 'Jubal', 'Tubal-cain', 'Lamech'],
        correctAnswer: 'Tubal-cain',
        explanation: 'Genesis 4:22: "Tubal-cain; he was the forger of all instruments of bronze and iron."',
        difficulty: 'hard'
      },
      {
        id: 'genesis4-q15',
        question: 'What question did Cain ask God after killing Abel?',
        options: ['"Why do you reject me?"', '"Am I my brother\'s keeper?"', '"Where can I hide?"', '"Will you forgive me?"'],
        correctAnswer: '"Am I my brother\'s keeper?"',
        explanation: 'Genesis 4:9: When God asked where Abel was, Cain replied, "Am I my brother\'s keeper?"',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 4:7',
    key_verse_text: "'If you do well, will you not be accepted? And if you do not do well, sin is crouching at the door. Its desire is contrary to you, but you must rule over it.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-5',
    bookId: 'genesis',
    chapter: 5,
    title: 'Genealogy from Adam to Noah',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis5-q1',
        question: 'Who was first made in the likeness of God?',
        options: ['Noah', 'Adam', 'Seth', 'Enoch'],
        correctAnswer: 'Adam',
        explanation: 'Genesis 5:1: "When God created man, he made him in the likeness of God."',
        difficulty: 'easy'
      },
      {
        id: 'genesis5-q2',
        question: 'What are the names of Noah\'s three sons?',
        options: ['Abraham, Isaac, Jacob', 'Shem, Ham, and Japheth', 'Cain, Abel, Seth', 'Reuben, Simeon, Levi'],
        correctAnswer: 'Shem, Ham, and Japheth',
        explanation: 'Genesis 5:32: "Noah fathered Shem, Ham, and Japheth."',
        difficulty: 'easy'
      },
      {
        id: 'genesis5-q3',
        question: 'Who lived the longest in the Bible?',
        options: ['Adam', 'Methuselah', 'Noah', 'Enoch'],
        correctAnswer: 'Methuselah',
        explanation: 'Genesis 5:27: Methuselah lived 969 years, the longest recorded lifespan.',
        difficulty: 'easy'
      },
      {
        id: 'genesis5-q4',
        question: 'Who was Adam\'s son born in his own likeness?',
        options: ['Cain', 'Abel', 'Seth', 'Enoch'],
        correctAnswer: 'Seth',
        explanation: 'Genesis 5:3: "Adam fathered a son in his own likeness... and named him Seth."',
        difficulty: 'easy'
      },
      {
        id: 'genesis5-q5',
        question: 'What happened to Enoch?',
        options: ['He died at 365 years', 'God took him and he did not die', 'He built a city', 'He became a priest'],
        correctAnswer: 'God took him and he did not die',
        explanation: 'Genesis 5:24: "Enoch walked with God, and he was not, for God took him."',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis5-q6',
        question: 'How old was Adam when he died?',
        options: ['850 years', '930 years', '969 years', '1000 years'],
        correctAnswer: '930 years',
        explanation: 'Genesis 5:5: "Thus all the days that Adam lived were 930 years, and he died."',
        difficulty: 'medium'
      },
      {
        id: 'genesis5-q7',
        question: 'What was unique about Enoch compared to others in this chapter?',
        options: ['He lived the longest', 'He walked with God and did not die', 'He had the most children', 'He was a prophet'],
        correctAnswer: 'He walked with God and did not die',
        explanation: 'Genesis 5:24: Unlike others who "died," Enoch "was not, for God took him."',
        difficulty: 'medium'
      },
      {
        id: 'genesis5-q8',
        question: 'How old was Noah when his three sons were born?',
        options: ['400 years old', '500 years old', '600 years old', '700 years old'],
        correctAnswer: '500 years old',
        explanation: 'Genesis 5:32: "After Noah was 500 years old, Noah fathered Shem, Ham, and Japheth."',
        difficulty: 'medium'
      },
      {
        id: 'genesis5-q9',
        question: 'Who was Methuselah\'s father?',
        options: ['Jared', 'Enoch', 'Lamech', 'Noah'],
        correctAnswer: 'Enoch',
        explanation: 'Genesis 5:21: "When Enoch had lived 65 years, he fathered Methuselah."',
        difficulty: 'medium'
      },
      {
        id: 'genesis5-q10',
        question: 'What phrase is repeated about each person in this chapter?',
        options: ['"He walked with God"', '"And he died"', '"He was righteous"', '"He built an altar"'],
        correctAnswer: '"And he died"',
        explanation: 'The phrase "and he died" is repeated for each patriarch, except Enoch.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis5-q11',
        question: 'Who was the father of Enoch (the one who walked with God)?',
        options: ['Mahalalel', 'Jared', 'Methuselah', 'Kenan'],
        correctAnswer: 'Jared',
        explanation: 'Genesis 5:18: "When Jared had lived 162 years, he fathered Enoch."',
        difficulty: 'hard'
      },
      {
        id: 'genesis5-q12',
        question: 'How many years did Enoch live before God took him?',
        options: ['300 years', '365 years', '500 years', '777 years'],
        correctAnswer: '365 years',
        explanation: 'Genesis 5:23: "Thus all the days of Enoch were 365 years."',
        difficulty: 'hard'
      },
      {
        id: 'genesis5-q13',
        question: 'Who was Noah\'s father?',
        options: ['Methuselah', 'Lamech', 'Enoch', 'Jared'],
        correctAnswer: 'Lamech',
        explanation: 'Genesis 5:28-29: "When Lamech had lived 182 years, he fathered a son and called his name Noah."',
        difficulty: 'hard'
      },
      {
        id: 'genesis5-q14',
        question: 'What did Lamech prophesy about his son Noah?',
        options: ['He would build an ark', 'He would bring relief from toil and pain', 'He would walk with God', 'He would live the longest'],
        correctAnswer: 'He would bring relief from toil and pain',
        explanation: 'Genesis 5:29: "Out of the ground... this one shall bring us relief from our work and painful toil."',
        difficulty: 'hard'
      },
      {
        id: 'genesis5-q15',
        question: 'In the genealogy, who came immediately after Seth?',
        options: ['Enosh', 'Kenan', 'Mahalalel', 'Jared'],
        correctAnswer: 'Enosh',
        explanation: 'Genesis 5:6: "When Seth had lived 105 years, he fathered Enosh."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 5:24',
    key_verse_text: "Enoch walked with God, and he was not, for God took him.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-6',
    bookId: 'genesis',
    chapter: 6,
    title: 'Corruption and the Ark',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis6-q1',
        question: 'Why did God decide to send the flood?',
        options: ['Too many people', 'Wickedness and violence', 'Drought', 'To start over'],
        correctAnswer: 'Wickedness and violence',
        explanation: 'Genesis 6:5,11: The wickedness of man was great and the earth was filled with violence.',
        difficulty: 'easy'
      },
      {
        id: 'genesis6-q2',
        question: 'Why did Noah find favor with God?',
        options: ['He was wealthy', 'He was righteous', 'He was the oldest', 'He was a king'],
        correctAnswer: 'He was righteous',
        explanation: 'Genesis 6:9: Noah was a righteous man, blameless in his generation.',
        difficulty: 'easy'
      },
      {
        id: 'genesis6-q3',
        question: 'What did God tell Noah to build?',
        options: ['A temple', 'An ark', 'A tower', 'An altar'],
        correctAnswer: 'An ark',
        explanation: 'Genesis 6:14: "Make yourself an ark of gopher wood."',
        difficulty: 'easy'
      },
      {
        id: 'genesis6-q4',
        question: 'How many sons did Noah have?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 'Three',
        explanation: 'Genesis 6:10: Noah had three sons: Shem, Ham, and Japheth.',
        difficulty: 'easy'
      },
      {
        id: 'genesis6-q5',
        question: 'Who would enter the ark with Noah?',
        options: ['Noah alone', 'Noah and animals', 'Noah, his family, and animals', 'Everyone who believed'],
        correctAnswer: 'Noah, his family, and animals',
        explanation: 'Genesis 6:18-20: Noah, his wife, sons, their wives, and pairs of animals.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis6-q6',
        question: 'What type of wood was used to build the ark?',
        options: ['Cedar', 'Oak', 'Gopher wood', 'Acacia'],
        correctAnswer: 'Gopher wood',
        explanation: 'Genesis 6:14: "Make yourself an ark of gopher wood."',
        difficulty: 'medium'
      },
      {
        id: 'genesis6-q7',
        question: 'How many people were saved on the ark?',
        options: ['4 people', '6 people', '8 people', '12 people'],
        correctAnswer: '8 people',
        explanation: 'Noah, his wife, their three sons and their three wives = 8 people.',
        difficulty: 'medium'
      },
      {
        id: 'genesis6-q8',
        question: 'What did Genesis 6 say about man\'s thoughts?',
        options: ['They were good', 'They were mixed', 'They were only evil continually', 'They pleased God'],
        correctAnswer: 'They were only evil continually',
        explanation: 'Genesis 6:5: "every intention of the thoughts of his heart was only evil continually."',
        difficulty: 'medium'
      },
      {
        id: 'genesis6-q9',
        question: 'How many levels did the ark have?',
        options: ['One deck', 'Two decks', 'Three decks', 'Four decks'],
        correctAnswer: 'Three decks',
        explanation: 'Genesis 6:16: "Make it with lower, second, and third decks."',
        difficulty: 'medium'
      },
      {
        id: 'genesis6-q10',
        question: 'What was Noah to cover the ark with inside and out?',
        options: ['Paint', 'Pitch', 'Gold', 'Animal skins'],
        correctAnswer: 'Pitch',
        explanation: 'Genesis 6:14: "cover it inside and out with pitch."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis6-q11',
        question: 'What were the dimensions of the ark in cubits?',
        options: ['200x40x25', '300x50x30', '400x60x40', '250x45x35'],
        correctAnswer: '300x50x30',
        explanation: 'Genesis 6:15: The ark was 300 cubits long, 50 cubits wide, and 30 cubits high.',
        difficulty: 'hard'
      },
      {
        id: 'genesis6-q12',
        question: 'Who are the "sons of God" mentioned in Genesis 6:2?',
        options: ['Angels', 'Descendants of Seth', 'Giants', 'This is debated among scholars'],
        correctAnswer: 'This is debated among scholars',
        explanation: 'Genesis 6:2: The identity of the "sons of God" is debated - some say angels, others say Sethites.',
        difficulty: 'hard'
      },
      {
        id: 'genesis6-q13',
        question: 'Who were the Nephilim mentioned in Genesis 6?',
        options: ['Angels', 'Giants/mighty men', 'Demons', 'Prophets'],
        correctAnswer: 'Giants/mighty men',
        explanation: 'Genesis 6:4: "The Nephilim were on the earth... mighty men who were of old."',
        difficulty: 'hard'
      },
      {
        id: 'genesis6-q14',
        question: 'What did God limit human lifespan to in Genesis 6:3?',
        options: ['100 years', '120 years', '150 years', '200 years'],
        correctAnswer: '120 years',
        explanation: 'Genesis 6:3: "his days shall be 120 years."',
        difficulty: 'hard'
      },
      {
        id: 'genesis6-q15',
        question: 'According to Genesis 6:6, what did God feel about creating humanity?',
        options: ['Pride', 'Joy', 'Regret/grief', 'Indifference'],
        correctAnswer: 'Regret/grief',
        explanation: 'Genesis 6:6: "the LORD regretted that he had made man... and it grieved him to his heart."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 6:9',
    key_verse_text: "Noah was a righteous man, blameless in his generation. Noah walked with God.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-7',
    bookId: 'genesis',
    chapter: 7,
    title: 'The Flood Begins',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis7-q1',
        question: 'How long did the rain fall during the flood?',
        options: ['7 days', '40 days and nights', '100 days', '1 year'],
        correctAnswer: '40 days and nights',
        explanation: 'Genesis 7:12: Rain fell upon the earth forty days and forty nights.',
        difficulty: 'easy'
      },
      {
        id: 'genesis7-q2',
        question: 'Who shut the door of the ark?',
        options: ['Noah', 'The Lord', 'Noah\'s sons', 'An angel'],
        correctAnswer: 'The Lord',
        explanation: 'Genesis 7:16: "And the LORD shut him in."',
        difficulty: 'easy'
      },
      {
        id: 'genesis7-q3',
        question: 'What happened to all creatures outside the ark?',
        options: ['They survived on high ground', 'They all died', 'Some swam', 'Angels saved them'],
        correctAnswer: 'They all died',
        explanation: 'Genesis 7:21-23: All flesh with the breath of life died; only Noah and those with him survived.',
        difficulty: 'easy'
      },
      {
        id: 'genesis7-q4',
        question: 'Did the waters cover the mountains?',
        options: ['No, just the valleys', 'Only small hills', 'Yes, all the high mountains', 'Just halfway up'],
        correctAnswer: 'Yes, all the high mountains',
        explanation: 'Genesis 7:19: "all the high mountains under the whole heaven were covered."',
        difficulty: 'easy'
      },
      {
        id: 'genesis7-q5',
        question: 'How many of each unclean animal went on the ark?',
        options: ['One pair', 'Seven pairs', 'Three pairs', 'Ten of each'],
        correctAnswer: 'One pair',
        explanation: 'Genesis 7:2: Unclean animals came in pairs, clean animals in sevens.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis7-q6',
        question: 'How many pairs of clean animals did Noah take?',
        options: ['Two pairs', 'Seven pairs', 'One pair', 'Twelve pairs'],
        correctAnswer: 'Seven pairs',
        explanation: 'Genesis 7:2: "Take with you seven pairs of all clean animals."',
        difficulty: 'medium'
      },
      {
        id: 'genesis7-q7',
        question: 'How many days passed between Noah entering the ark and the rain starting?',
        options: ['3 days', '7 days', '10 days', '40 days'],
        correctAnswer: '7 days',
        explanation: 'Genesis 7:4,10: God gave 7 days notice before sending rain.',
        difficulty: 'medium'
      },
      {
        id: 'genesis7-q8',
        question: 'How deep did the waters rise above the mountains?',
        options: ['5 cubits', '15 cubits', '30 cubits', '100 cubits'],
        correctAnswer: '15 cubits',
        explanation: 'Genesis 7:20: Waters covered the mountains by fifteen cubits.',
        difficulty: 'medium'
      },
      {
        id: 'genesis7-q9',
        question: 'How long did the waters prevail upon the earth?',
        options: ['40 days', '100 days', '150 days', '1 year'],
        correctAnswer: '150 days',
        explanation: 'Genesis 7:24: "the waters prevailed on the earth 150 days."',
        difficulty: 'medium'
      },
      {
        id: 'genesis7-q10',
        question: 'What two sources did the flood waters come from?',
        options: ['Rain only', 'Rivers and rain', 'Fountains of the deep and windows of heaven', 'Melting ice and rain'],
        correctAnswer: 'Fountains of the deep and windows of heaven',
        explanation: 'Genesis 7:11: Fountains of the great deep burst forth and windows of heaven opened.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis7-q11',
        question: 'How old was Noah when the flood came?',
        options: ['500 years old', '600 years old', '700 years old', '950 years old'],
        correctAnswer: '600 years old',
        explanation: 'Genesis 7:6: Noah was 600 years old when the flood waters came.',
        difficulty: 'hard'
      },
      {
        id: 'genesis7-q12',
        question: 'In what month and day did the flood begin?',
        options: ['First month, first day', 'Second month, seventeenth day', 'Third month, first day', 'Seventh month, seventeenth day'],
        correctAnswer: 'Second month, seventeenth day',
        explanation: 'Genesis 7:11: "In the 600th year... second month, seventeenth day."',
        difficulty: 'hard'
      },
      {
        id: 'genesis7-q13',
        question: 'According to Genesis 7:15, how many of each kind came to Noah?',
        options: ['One', 'Two of every sort', 'Seven', 'As many as would fit'],
        correctAnswer: 'Two of every sort',
        explanation: 'Genesis 7:15: "They went into the ark with Noah, two and two of all flesh."',
        difficulty: 'hard'
      },
      {
        id: 'genesis7-q14',
        question: 'What phrase describes how the animals came to the ark?',
        options: ['Noah gathered them', 'They came to him', 'Angels brought them', 'They were scared by the storm'],
        correctAnswer: 'They came to him',
        explanation: 'Genesis 7:9,15: The animals came to Noah and entered the ark themselves.',
        difficulty: 'hard'
      },
      {
        id: 'genesis7-q15',
        question: 'What happened to the ark when the waters rose?',
        options: ['It sank', 'It rose high above the earth', 'It stayed on the ground', 'It broke apart'],
        correctAnswer: 'It rose high above the earth',
        explanation: 'Genesis 7:17: "the ark rose high above the earth."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 7:16',
    key_verse_text: "And the LORD shut him in.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-8',
    bookId: 'genesis',
    chapter: 8,
    title: 'The Flood Recedes',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis8-q1',
        question: 'Which bird did Noah send out first?',
        options: ['A dove', 'A raven', 'A sparrow', 'An eagle'],
        correctAnswer: 'A raven',
        explanation: 'Genesis 8:7: Noah first sent out a raven.',
        difficulty: 'easy'
      },
      {
        id: 'genesis8-q2',
        question: 'What did the dove bring back to Noah?',
        options: ['A fig leaf', 'An olive leaf', 'A piece of grain', 'A twig'],
        correctAnswer: 'An olive leaf',
        explanation: 'Genesis 8:11: The dove returned with a freshly plucked olive leaf.',
        difficulty: 'easy'
      },
      {
        id: 'genesis8-q3',
        question: 'What was the first thing Noah built after leaving the ark?',
        options: ['A house', 'An altar', 'A vineyard', 'A city'],
        correctAnswer: 'An altar',
        explanation: 'Genesis 8:20: Noah built an altar to the LORD.',
        difficulty: 'easy'
      },
      {
        id: 'genesis8-q4',
        question: 'On which mountain did the ark come to rest?',
        options: ['Mount Sinai', 'Mount Ararat', 'Mount Moriah', 'Mount Nebo'],
        correctAnswer: 'Mount Ararat',
        explanation: 'Genesis 8:4: The ark came to rest on the mountains of Ararat.',
        difficulty: 'easy'
      },
      {
        id: 'genesis8-q5',
        question: 'What did Noah offer on the altar?',
        options: ['Grain offerings', 'Burnt offerings of clean animals', 'Wine', 'Incense'],
        correctAnswer: 'Burnt offerings of clean animals',
        explanation: 'Genesis 8:20: Noah offered burnt offerings from every clean animal and bird.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis8-q6',
        question: 'How did God cause the flood waters to recede?',
        options: ['The sun dried them', 'A wind blew over the earth', 'The ground absorbed them', 'Rivers drained them'],
        correctAnswer: 'A wind blew over the earth',
        explanation: 'Genesis 8:1: God made a wind blow over the earth and the waters subsided.',
        difficulty: 'medium'
      },
      {
        id: 'genesis8-q7',
        question: 'What happened when Noah sent out the dove the third time?',
        options: ['It returned with a leaf', 'It returned empty', 'It did not return', 'It died'],
        correctAnswer: 'It did not return',
        explanation: 'Genesis 8:12: The dove did not return to him anymore.',
        difficulty: 'medium'
      },
      {
        id: 'genesis8-q8',
        question: 'What did God promise never to do again after the flood?',
        options: ['Create animals', 'Curse the ground because of man', 'Send rain', 'Speak to humans'],
        correctAnswer: 'Curse the ground because of man',
        explanation: 'Genesis 8:21: "I will never again curse the ground because of man."',
        difficulty: 'medium'
      },
      {
        id: 'genesis8-q9',
        question: 'What did God say would never cease while the earth remains?',
        options: ['Human sin', 'Seedtime, harvest, cold, heat, summer, winter, day, night', 'Rain', 'The wind'],
        correctAnswer: 'Seedtime, harvest, cold, heat, summer, winter, day, night',
        explanation: 'Genesis 8:22: "seedtime and harvest, cold and heat, summer and winter, day and night, shall not cease."',
        difficulty: 'medium'
      },
      {
        id: 'genesis8-q10',
        question: 'How long did Noah wait between sending out the dove the second time?',
        options: ['3 days', '7 days', '14 days', '40 days'],
        correctAnswer: '7 days',
        explanation: 'Genesis 8:10: Noah waited another seven days before sending the dove again.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis8-q11',
        question: 'In what month did the ark rest on Ararat?',
        options: ['First month', 'Fifth month', 'Seventh month', 'Tenth month'],
        correctAnswer: 'Seventh month',
        explanation: 'Genesis 8:4: The ark rested on Ararat in the seventh month.',
        difficulty: 'hard'
      },
      {
        id: 'genesis8-q12',
        question: 'When did the tops of the mountains become visible?',
        options: ['Seventh month', 'Tenth month', 'First month', 'Twelfth month'],
        correctAnswer: 'Tenth month',
        explanation: 'Genesis 8:5: On the first day of the tenth month, the tops of the mountains were seen.',
        difficulty: 'hard'
      },
      {
        id: 'genesis8-q13',
        question: 'How long after the flood started did Noah remove the covering of the ark?',
        options: ['150 days', '301 days (first day of first month in 601st year)', '40 days', '1 year exactly'],
        correctAnswer: '301 days (first day of first month in 601st year)',
        explanation: 'Genesis 8:13: In the 601st year, first month, first day, Noah removed the covering.',
        difficulty: 'hard'
      },
      {
        id: 'genesis8-q14',
        question: 'What did God smell from Noah\'s sacrifice?',
        options: ['A warning', 'A pleasing aroma', 'Smoke only', 'Nothing special'],
        correctAnswer: 'A pleasing aroma',
        explanation: 'Genesis 8:21: "the LORD smelled the pleasing aroma."',
        difficulty: 'hard'
      },
      {
        id: 'genesis8-q15',
        question: 'What reason did God give for not cursing the ground again?',
        options: ['Noah was righteous', 'The intention of man\'s heart is evil from youth', 'The animals deserved life', 'The flood was too destructive'],
        correctAnswer: 'The intention of man\'s heart is evil from youth',
        explanation: 'Genesis 8:21: God showed mercy despite man\'s evil nature from youth.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 8:22',
    key_verse_text: "While the earth remains, seedtime and harvest, cold and heat, summer and winter, day and night, shall not cease.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-9',
    bookId: 'genesis',
    chapter: 9,
    title: 'God\'s Covenant with Noah',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis9-q1',
        question: 'What was the sign of God\'s covenant with Noah?',
        options: ['A star', 'The rainbow', 'A dove', 'An altar'],
        correctAnswer: 'The rainbow',
        explanation: 'Genesis 9:13: "I have set my bow in the cloud, and it shall be a sign of the covenant."',
        difficulty: 'easy'
      },
      {
        id: 'genesis9-q2',
        question: 'What command did God give Noah after the flood?',
        options: ['Build a temple', 'Be fruitful and multiply', 'Stay on the ark', 'Go to Canaan'],
        correctAnswer: 'Be fruitful and multiply',
        explanation: 'Genesis 9:1: "Be fruitful and multiply and fill the earth."',
        difficulty: 'easy'
      },
      {
        id: 'genesis9-q3',
        question: 'What did God promise never to do again?',
        options: ['Create humans', 'Destroy earth with a flood', 'Make covenants', 'Send rain'],
        correctAnswer: 'Destroy earth with a flood',
        explanation: 'Genesis 9:11: "Never again shall all flesh be cut off by the waters of the flood."',
        difficulty: 'easy'
      },
      {
        id: 'genesis9-q4',
        question: 'How long did Noah live after the flood?',
        options: ['150 years', '250 years', '350 years', '450 years'],
        correctAnswer: '350 years',
        explanation: 'Genesis 9:28: Noah lived 350 years after the flood.',
        difficulty: 'easy'
      },
      {
        id: 'genesis9-q5',
        question: 'How old was Noah when he died?',
        options: ['750 years', '850 years', '950 years', '1000 years'],
        correctAnswer: '950 years',
        explanation: 'Genesis 9:29: "All the days of Noah were 950 years, and he died."',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis9-q6',
        question: 'What dietary restriction did God give after the flood?',
        options: ['No plants', 'No meat with blood', 'No fish', 'Vegetables only'],
        correctAnswer: 'No meat with blood',
        explanation: 'Genesis 9:4: "you shall not eat flesh with its life, that is, its blood."',
        difficulty: 'medium'
      },
      {
        id: 'genesis9-q7',
        question: 'What did Noah plant after the flood?',
        options: ['Fig trees', 'A vineyard', 'Wheat', 'Olive trees'],
        correctAnswer: 'A vineyard',
        explanation: 'Genesis 9:20: "Noah... planted a vineyard."',
        difficulty: 'medium'
      },
      {
        id: 'genesis9-q8',
        question: 'What happened to Noah after he drank wine?',
        options: ['He danced', 'He became drunk and lay uncovered', 'He fell asleep outside', 'He prophesied'],
        correctAnswer: 'He became drunk and lay uncovered',
        explanation: 'Genesis 9:21: "He drank of the wine and became drunk and lay uncovered in his tent."',
        difficulty: 'medium'
      },
      {
        id: 'genesis9-q9',
        question: 'What did Shem and Japheth do when they learned of Noah\'s nakedness?',
        options: ['Laughed at him', 'Ignored him', 'Covered him walking backward', 'Woke him up'],
        correctAnswer: 'Covered him walking backward',
        explanation: 'Genesis 9:23: They walked backward and covered him without seeing his nakedness.',
        difficulty: 'medium'
      },
      {
        id: 'genesis9-q10',
        question: 'What is the penalty for murder according to Genesis 9?',
        options: ['Exile', 'A fine', 'Death - life for life', 'Imprisonment'],
        correctAnswer: 'Death - life for life',
        explanation: 'Genesis 9:6: "Whoever sheds the blood of man, by man shall his blood be shed."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis9-q11',
        question: 'Which of Noah\'s sons saw his nakedness?',
        options: ['Shem', 'Ham', 'Japheth', 'All three'],
        correctAnswer: 'Ham',
        explanation: 'Genesis 9:22: "Ham, the father of Canaan, saw the nakedness of his father."',
        difficulty: 'hard'
      },
      {
        id: 'genesis9-q12',
        question: 'Who was cursed because of Ham\'s actions?',
        options: ['Ham', 'Canaan', 'Noah', 'Shem'],
        correctAnswer: 'Canaan',
        explanation: 'Genesis 9:25: "Cursed be Canaan; a servant of servants shall he be."',
        difficulty: 'hard'
      },
      {
        id: 'genesis9-q13',
        question: 'What blessing did Noah give to Shem?',
        options: ['Wealth', 'Blessed be the LORD, the God of Shem', 'Many children', 'Long life'],
        correctAnswer: 'Blessed be the LORD, the God of Shem',
        explanation: 'Genesis 9:26: "Blessed be the LORD, the God of Shem."',
        difficulty: 'hard'
      },
      {
        id: 'genesis9-q14',
        question: 'What blessing did Noah give to Japheth?',
        options: ['Wealth', 'God shall enlarge Japheth', 'Priesthood', 'Kingship'],
        correctAnswer: 'God shall enlarge Japheth',
        explanation: 'Genesis 9:27: "May God enlarge Japheth, and let him dwell in the tents of Shem."',
        difficulty: 'hard'
      },
      {
        id: 'genesis9-q15',
        question: 'Why was man given authority to eat meat after the flood?',
        options: ['Plants became scarce', 'God gave every moving thing as food', 'Noah requested it', 'Animals were too numerous'],
        correctAnswer: 'God gave every moving thing as food',
        explanation: 'Genesis 9:3: "Every moving thing that lives shall be food for you."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 9:13',
    key_verse_text: "'I have set my bow in the cloud, and it shall be a sign of the covenant between me and the earth.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-10',
    bookId: 'genesis',
    chapter: 10,
    title: 'Table of Nations',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis10-q1',
        question: 'Whose descendants are listed in Genesis 10?',
        options: ['Adam\'s family', 'Noah\'s three sons', 'Abraham\'s family', 'Jacob\'s sons'],
        correctAnswer: 'Noah\'s three sons',
        explanation: 'Genesis 10:1: The generations of the sons of Noah: Shem, Ham, and Japheth.',
        difficulty: 'easy'
      },
      {
        id: 'genesis10-q2',
        question: 'What is Genesis 10 commonly called?',
        options: ['The Creation Story', 'The Table of Nations', 'The Book of Law', 'The Covenant'],
        correctAnswer: 'The Table of Nations',
        explanation: 'Genesis 10 lists the descendants of Noah and how nations spread across the earth.',
        difficulty: 'easy'
      },
      {
        id: 'genesis10-q3',
        question: 'From which son of Noah did Nimrod descend?',
        options: ['Shem', 'Ham', 'Japheth', 'None of them'],
        correctAnswer: 'Ham',
        explanation: 'Genesis 10:6-8: Ham fathered Cush, and Cush fathered Nimrod.',
        difficulty: 'easy'
      },
      {
        id: 'genesis10-q4',
        question: 'What happened to the nations after the flood?',
        options: ['They stayed together', 'They spread abroad on the earth', 'They died out', 'They returned to the ark'],
        correctAnswer: 'They spread abroad on the earth',
        explanation: 'Genesis 10:32: From Noah\'s sons the nations spread abroad on the earth.',
        difficulty: 'easy'
      },
      {
        id: 'genesis10-q5',
        question: 'How many sons of Noah are named as ancestors of nations?',
        options: ['One', 'Two', 'Three', 'Twelve'],
        correctAnswer: 'Three',
        explanation: 'Shem, Ham, and Japheth - all three sons of Noah became ancestors of nations.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis10-q6',
        question: 'Who is described as "a mighty hunter before the LORD"?',
        options: ['Shem', 'Canaan', 'Nimrod', 'Eber'],
        correctAnswer: 'Nimrod',
        explanation: 'Genesis 10:9: "He was a mighty hunter before the LORD."',
        difficulty: 'medium'
      },
      {
        id: 'genesis10-q7',
        question: 'Which son of Ham became father of the Canaanites?',
        options: ['Cush', 'Egypt', 'Put', 'Canaan'],
        correctAnswer: 'Canaan',
        explanation: 'Genesis 10:15-18: Canaan fathered Sidon and the Canaanite clans.',
        difficulty: 'medium'
      },
      {
        id: 'genesis10-q8',
        question: 'What cities were part of Nimrod\'s kingdom?',
        options: ['Jerusalem and Hebron', 'Babel, Erech, Accad', 'Sodom and Gomorrah', 'Ur and Haran'],
        correctAnswer: 'Babel, Erech, Accad',
        explanation: 'Genesis 10:10: The beginning of his kingdom was Babel, Erech, Accad, and Calneh.',
        difficulty: 'medium'
      },
      {
        id: 'genesis10-q9',
        question: 'From which of Noah\'s sons did the Hebrews descend?',
        options: ['Ham', 'Japheth', 'Shem', 'All three'],
        correctAnswer: 'Shem',
        explanation: 'Genesis 10:21: Shem was the father of all the children of Eber (Hebrews).',
        difficulty: 'medium'
      },
      {
        id: 'genesis10-q10',
        question: 'Where did Nimrod go from the land of Shinar?',
        options: ['Egypt', 'Assyria', 'Canaan', 'Persia'],
        correctAnswer: 'Assyria',
        explanation: 'Genesis 10:11: From that land he went into Assyria and built Nineveh.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis10-q11',
        question: 'What does the name "Peleg" mean and why was he so named?',
        options: ['Strength - he was strong', 'Division - the earth was divided', 'Wisdom - he was wise', 'Victory - he conquered'],
        correctAnswer: 'Division - the earth was divided',
        explanation: 'Genesis 10:25: "in his days the earth was divided."',
        difficulty: 'hard'
      },
      {
        id: 'genesis10-q12',
        question: 'Which famous city did Nimrod build in Assyria?',
        options: ['Babylon', 'Nineveh', 'Damascus', 'Jerusalem'],
        correctAnswer: 'Nineveh',
        explanation: 'Genesis 10:11: He went into Assyria and built Nineveh.',
        difficulty: 'hard'
      },
      {
        id: 'genesis10-q13',
        question: 'Who were the sons of Japheth?',
        options: ['Cush, Egypt, Put', 'Gomer, Magog, Madai, Javan, Tubal, Meshech, Tiras', 'Elam, Asshur, Arpachshad', 'Sidon, Heth, the Jebusites'],
        correctAnswer: 'Gomer, Magog, Madai, Javan, Tubal, Meshech, Tiras',
        explanation: 'Genesis 10:2 lists the seven sons of Japheth.',
        difficulty: 'hard'
      },
      {
        id: 'genesis10-q14',
        question: 'Which peoples descended from Canaan?',
        options: ['Egyptians and Libyans', 'Jebusites, Amorites, Hivites', 'Persians and Medes', 'Greeks and Romans'],
        correctAnswer: 'Jebusites, Amorites, Hivites',
        explanation: 'Genesis 10:15-18: Canaan fathered several peoples including Jebusites, Amorites, Hivites.',
        difficulty: 'hard'
      },
      {
        id: 'genesis10-q15',
        question: 'Who was Eber\'s father?',
        options: ['Shem', 'Shelah', 'Arpachshad', 'Peleg'],
        correctAnswer: 'Shelah',
        explanation: 'Genesis 10:24: Arpachshad fathered Shelah, and Shelah fathered Eber.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 10:32',
    key_verse_text: "These are the clans of the sons of Noah, according to their genealogies, in their nations, and from these the nations spread abroad on the earth after the flood.",
    memory_challenge: true,
    difficulty: 'hard',
    points: 20
  },
  {
    id: 'genesis-11',
    bookId: 'genesis',
    chapter: 11,
    title: 'The Tower of Babel and Shem\'s Line',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis11-q1',
        question: 'What did the people at Babel try to build?',
        options: ['A palace', 'A tower reaching to heaven', 'A temple', 'A fortress'],
        correctAnswer: 'A tower reaching to heaven',
        explanation: 'Genesis 11:4: They planned to build a city and a tower with its top in the heavens.',
        difficulty: 'easy'
      },
      {
        id: 'genesis11-q2',
        question: 'What did God do to stop the building project?',
        options: ['Destroyed the tower', 'Confused their language', 'Sent a flood', 'Killed the workers'],
        correctAnswer: 'Confused their language',
        explanation: 'Genesis 11:7: God confused their language so they could not understand each other.',
        difficulty: 'easy'
      },
      {
        id: 'genesis11-q3',
        question: 'What does "Babel" mean?',
        options: ['Great city', 'Confusion', 'Tower', 'Unity'],
        correctAnswer: 'Confusion',
        explanation: 'Genesis 11:9: The name Babel sounds like the Hebrew word for "confused."',
        difficulty: 'easy'
      },
      {
        id: 'genesis11-q4',
        question: 'Who was Abram\'s father?',
        options: ['Nahor', 'Terah', 'Haran', 'Shem'],
        correctAnswer: 'Terah',
        explanation: 'Genesis 11:26: "Terah fathered Abram, Nahor, and Haran."',
        difficulty: 'easy'
      },
      {
        id: 'genesis11-q5',
        question: 'Where did Terah and his family originally come from?',
        options: ['Canaan', 'Egypt', 'Ur of the Chaldeans', 'Babylon'],
        correctAnswer: 'Ur of the Chaldeans',
        explanation: 'Genesis 11:31: Terah took his family from Ur of the Chaldeans.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis11-q6',
        question: 'What materials did the people use to build at Babel?',
        options: ['Stone and mortar', 'Brick and tar/bitumen', 'Wood and nails', 'Gold and silver'],
        correctAnswer: 'Brick and tar/bitumen',
        explanation: 'Genesis 11:3: They used brick for stone and bitumen for mortar.',
        difficulty: 'medium'
      },
      {
        id: 'genesis11-q7',
        question: 'Why did the people want to build the tower?',
        options: ['To worship God', 'To make a name for themselves', 'To escape another flood', 'To see God'],
        correctAnswer: 'To make a name for themselves',
        explanation: 'Genesis 11:4: "let us make a name for ourselves, lest we be dispersed."',
        difficulty: 'medium'
      },
      {
        id: 'genesis11-q8',
        question: 'Where did Terah settle instead of reaching Canaan?',
        options: ['Egypt', 'Haran', 'Babylon', 'Damascus'],
        correctAnswer: 'Haran',
        explanation: 'Genesis 11:31: They intended to go to Canaan but settled in Haran.',
        difficulty: 'medium'
      },
      {
        id: 'genesis11-q9',
        question: 'Who was Sarai\'s husband?',
        options: ['Nahor', 'Haran', 'Abram', 'Lot'],
        correctAnswer: 'Abram',
        explanation: 'Genesis 11:29: "Abram and Nahor took wives. The name of Abram\'s wife was Sarai."',
        difficulty: 'medium'
      },
      {
        id: 'genesis11-q10',
        question: 'What does Genesis 11:30 say about Sarai?',
        options: ['She was beautiful', 'She was barren', 'She was old', 'She was wealthy'],
        correctAnswer: 'She was barren',
        explanation: 'Genesis 11:30: "Now Sarai was barren; she had no child."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis11-q11',
        question: 'How old was Terah when he died?',
        options: ['175 years', '205 years', '600 years', '969 years'],
        correctAnswer: '205 years',
        explanation: 'Genesis 11:32: "The days of Terah were 205 years, and Terah died in Haran."',
        difficulty: 'hard'
      },
      {
        id: 'genesis11-q12',
        question: 'Who was Lot\'s father?',
        options: ['Abram', 'Nahor', 'Haran', 'Terah'],
        correctAnswer: 'Haran',
        explanation: 'Genesis 11:27: "Haran fathered Lot."',
        difficulty: 'hard'
      },
      {
        id: 'genesis11-q13',
        question: 'At what age did Shem father Arpachshad?',
        options: ['50 years', '100 years old', '200 years', '500 years'],
        correctAnswer: '100 years old',
        explanation: 'Genesis 11:10: Shem was 100 years old when he fathered Arpachshad.',
        difficulty: 'hard'
      },
      {
        id: 'genesis11-q14',
        question: 'How long did Eber live?',
        options: ['239 years', '464 years', '600 years', '969 years'],
        correctAnswer: '464 years',
        explanation: 'Genesis 11:16-17: Eber lived 464 years in total.',
        difficulty: 'hard'
      },
      {
        id: 'genesis11-q15',
        question: 'What was the land of Shinar known for in Genesis 11?',
        options: ['The birthplace of Abraham', 'The location of the tower of Babel', 'The promised land', 'The garden of Eden'],
        correctAnswer: 'The location of the tower of Babel',
        explanation: 'Genesis 11:2: The people settled in Shinar and built the tower there.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 11:9',
    key_verse_text: "Therefore its name was called Babel, because there the Lord confused the language of all the earth.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-12',
    bookId: 'genesis',
    chapter: 12,
    title: 'The Call of Abram',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis12-q1',
        question: 'What did God tell Abram to leave?',
        options: ['His wealth', 'His country and father\'s house', 'His servants', 'His animals'],
        correctAnswer: 'His country and father\'s house',
        explanation: 'Genesis 12:1: "Go from your country and your kindred and your father\'s house."',
        difficulty: 'easy'
      },
      {
        id: 'genesis12-q2',
        question: 'What did God promise to make Abram?',
        options: ['A king', 'A great nation', 'A priest', 'A prophet'],
        correctAnswer: 'A great nation',
        explanation: 'Genesis 12:2: "I will make of you a great nation."',
        difficulty: 'easy'
      },
      {
        id: 'genesis12-q3',
        question: 'Where did Abram go during a famine?',
        options: ['Canaan', 'Egypt', 'Mesopotamia', 'Babylon'],
        correctAnswer: 'Egypt',
        explanation: 'Genesis 12:10: Abram went down to Egypt because of the famine.',
        difficulty: 'easy'
      },
      {
        id: 'genesis12-q4',
        question: 'Who went with Abram when he left Haran?',
        options: ['Noah', 'Lot', 'Isaac', 'Jacob'],
        correctAnswer: 'Lot',
        explanation: 'Genesis 12:4-5: Abram took Sarai and Lot with him.',
        difficulty: 'easy'
      },
      {
        id: 'genesis12-q5',
        question: 'How old was Abram when he left Haran?',
        options: ['50 years old', '75 years old', '100 years old', '175 years old'],
        correctAnswer: '75 years old',
        explanation: 'Genesis 12:4: "Abram was seventy-five years old when he departed from Haran."',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis12-q6',
        question: 'What did Abram say about Sarai in Egypt?',
        options: ['She is my wife', 'She is my sister', 'She is my servant', 'She is a widow'],
        correctAnswer: 'She is my sister',
        explanation: 'Genesis 12:13: Abram asked Sarai to say she was his sister.',
        difficulty: 'medium'
      },
      {
        id: 'genesis12-q7',
        question: 'What happened to Pharaoh when he took Sarai?',
        options: ['He became rich', 'God afflicted him with plagues', 'He became sick', 'Nothing happened'],
        correctAnswer: 'God afflicted him with plagues',
        explanation: 'Genesis 12:17: The LORD afflicted Pharaoh and his house with great plagues.',
        difficulty: 'medium'
      },
      {
        id: 'genesis12-q8',
        question: 'Where did Abram first build an altar in Canaan?',
        options: ['Jerusalem', 'At the oak of Moreh at Shechem', 'Beersheba', 'Hebron'],
        correctAnswer: 'At the oak of Moreh at Shechem',
        explanation: 'Genesis 12:6-7: At Shechem, at the oak of Moreh, Abram built an altar.',
        difficulty: 'medium'
      },
      {
        id: 'genesis12-q9',
        question: 'What did God promise to give Abram\'s offspring?',
        options: ['Wealth', 'This land (Canaan)', 'Many servants', 'Victory in battle'],
        correctAnswer: 'This land (Canaan)',
        explanation: 'Genesis 12:7: "To your offspring I will give this land."',
        difficulty: 'medium'
      },
      {
        id: 'genesis12-q10',
        question: 'What was in the land when Abram arrived?',
        options: ['Egyptians', 'Canaanites', 'Philistines', 'Amalekites'],
        correctAnswer: 'Canaanites',
        explanation: 'Genesis 12:6: "At that time the Canaanites were in the land."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis12-q11',
        question: 'What blessing would come through Abram to all families?',
        options: ['Wealth', 'They would be blessed', 'Land', 'Victory'],
        correctAnswer: 'They would be blessed',
        explanation: 'Genesis 12:3: "in you all the families of the earth shall be blessed."',
        difficulty: 'hard'
      },
      {
        id: 'genesis12-q12',
        question: 'Where did Abram pitch his tent between two cities?',
        options: ['Between Sodom and Gomorrah', 'Between Bethel and Ai', 'Between Jerusalem and Jericho', 'Between Haran and Damascus'],
        correctAnswer: 'Between Bethel and Ai',
        explanation: 'Genesis 12:8: He pitched his tent with Bethel on the west and Ai on the east.',
        difficulty: 'hard'
      },
      {
        id: 'genesis12-q13',
        question: 'What did Pharaoh give Abram because of Sarai?',
        options: ['Gold only', 'Sheep, oxen, donkeys, servants, and camels', 'Land in Egypt', 'A title of nobility'],
        correctAnswer: 'Sheep, oxen, donkeys, servants, and camels',
        explanation: 'Genesis 12:16: Pharaoh gave Abram livestock and servants for Sarai\'s sake.',
        difficulty: 'hard'
      },
      {
        id: 'genesis12-q14',
        question: 'What happened after Pharaoh discovered the truth about Sarai?',
        options: ['He killed Abram', 'He sent Abram away with all he had', 'He imprisoned Abram', 'He took back the gifts'],
        correctAnswer: 'He sent Abram away with all he had',
        explanation: 'Genesis 12:19-20: Pharaoh sent Abram away with his wife and all that he had.',
        difficulty: 'hard'
      },
      {
        id: 'genesis12-q15',
        question: 'What would happen to those who cursed Abram according to God\'s promise?',
        options: ['Nothing', 'God would curse them', 'They would prosper', 'They would take his land'],
        correctAnswer: 'God would curse them',
        explanation: 'Genesis 12:3: "him who dishonors you I will curse."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 12:2',
    key_verse_text: "'And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-13',
    bookId: 'genesis',
    chapter: 13,
    title: 'Abram and Lot Separate',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis13-q1',
        question: 'Why did Abram and Lot need to separate?',
        options: ['They were enemies', 'The land could not support both', 'Lot was rebellious', 'God commanded it'],
        correctAnswer: 'The land could not support both',
        explanation: 'Genesis 13:6: The land could not support both of them dwelling together.',
        difficulty: 'easy'
      },
      {
        id: 'genesis13-q2',
        question: 'What did Abram generously offer Lot?',
        options: ['Gold', 'First choice of the land', 'His flocks', 'A city'],
        correctAnswer: 'First choice of the land',
        explanation: 'Genesis 13:9: Abram let Lot choose which direction to go.',
        difficulty: 'easy'
      },
      {
        id: 'genesis13-q3',
        question: 'Which direction did Lot choose?',
        options: ['West toward the sea', 'East toward the Jordan Valley', 'North toward Damascus', 'South toward Egypt'],
        correctAnswer: 'East toward the Jordan Valley',
        explanation: 'Genesis 13:11: Lot chose the Jordan Valley and journeyed east.',
        difficulty: 'easy'
      },
      {
        id: 'genesis13-q4',
        question: 'What city did Lot settle near?',
        options: ['Jerusalem', 'Sodom', 'Hebron', 'Bethel'],
        correctAnswer: 'Sodom',
        explanation: 'Genesis 13:12: Lot moved his tent as far as Sodom.',
        difficulty: 'easy'
      },
      {
        id: 'genesis13-q5',
        question: 'Where did Abram settle after they separated?',
        options: ['Egypt', 'Hebron', 'Sodom', 'Ur'],
        correctAnswer: 'Hebron',
        explanation: 'Genesis 13:18: Abram settled by the oaks of Mamre at Hebron.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis13-q6',
        question: 'What was the conflict between Abram and Lot?',
        options: ['Personal quarrel', 'Strife between their herdsmen', 'Property dispute', 'Religious differences'],
        correctAnswer: 'Strife between their herdsmen',
        explanation: 'Genesis 13:7: There was strife between their herdsmen.',
        difficulty: 'medium'
      },
      {
        id: 'genesis13-q7',
        question: 'Why was the Jordan Valley attractive to Lot?',
        options: ['It had gold', 'It was well-watered like the garden of the LORD', 'It was near family', 'It had no inhabitants'],
        correctAnswer: 'It was well-watered like the garden of the LORD',
        explanation: 'Genesis 13:10: The Jordan Valley was well-watered everywhere, like the garden of the LORD.',
        difficulty: 'medium'
      },
      {
        id: 'genesis13-q8',
        question: 'What was the moral condition of Sodom?',
        options: ['Righteous', 'Wicked and great sinners', 'Neutral', 'Holy'],
        correctAnswer: 'Wicked and great sinners',
        explanation: 'Genesis 13:13: The men of Sodom were wicked, great sinners against the LORD.',
        difficulty: 'medium'
      },
      {
        id: 'genesis13-q9',
        question: 'To what did God compare Abram\'s future offspring?',
        options: ['The stars', 'The dust of the earth', 'The sand', 'The leaves of a tree'],
        correctAnswer: 'The dust of the earth',
        explanation: 'Genesis 13:16: God said He would make Abram\'s offspring as the dust of the earth.',
        difficulty: 'medium'
      },
      {
        id: 'genesis13-q10',
        question: 'What did God tell Abram to do after Lot left?',
        options: ['Build a city', 'Walk through the land', 'Go to Egypt', 'Make war'],
        correctAnswer: 'Walk through the land',
        explanation: 'Genesis 13:17: "Arise, walk through the length and breadth of the land."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis13-q11',
        question: 'What peoples were dwelling in the land during Abram\'s time?',
        options: ['Egyptians and Assyrians', 'Canaanites and Perizzites', 'Philistines and Amorites', 'Hittites and Jebusites'],
        correctAnswer: 'Canaanites and Perizzites',
        explanation: 'Genesis 13:7: The Canaanites and Perizzites were dwelling in the land.',
        difficulty: 'hard'
      },
      {
        id: 'genesis13-q12',
        question: 'What did Abram build at the oaks of Mamre?',
        options: ['A house', 'An altar to the LORD', 'A well', 'A city'],
        correctAnswer: 'An altar to the LORD',
        explanation: 'Genesis 13:18: Abram built an altar to the LORD at Hebron.',
        difficulty: 'hard'
      },
      {
        id: 'genesis13-q13',
        question: 'From where did Abram return when this chapter begins?',
        options: ['Canaan', 'Egypt', 'Ur', 'Haran'],
        correctAnswer: 'Egypt',
        explanation: 'Genesis 13:1: Abram went up from Egypt into the Negeb.',
        difficulty: 'hard'
      },
      {
        id: 'genesis13-q14',
        question: 'How wealthy was Abram described as being?',
        options: ['Poor', 'Modest', 'Very rich in livestock, silver, and gold', 'Average'],
        correctAnswer: 'Very rich in livestock, silver, and gold',
        explanation: 'Genesis 13:2: "Now Abram was very rich in livestock, in silver, and in gold."',
        difficulty: 'hard'
      },
      {
        id: 'genesis13-q15',
        question: 'What directions did God tell Abram to look?',
        options: ['Only east', 'North, south, east, and west', 'Only toward Sodom', 'Toward Egypt'],
        correctAnswer: 'North, south, east, and west',
        explanation: 'Genesis 13:14: "Lift up your eyes and look... northward and southward and eastward and westward."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 13:15',
    key_verse_text: "'for all the land that you see I will give to you and to your offspring forever.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-14',
    bookId: 'genesis',
    chapter: 14,
    title: 'Abram Rescues Lot',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis14-q1',
        question: 'Who was captured by invading kings?',
        options: ['Abram', 'Lot', 'Sarai', 'Melchizedek'],
        correctAnswer: 'Lot',
        explanation: 'Genesis 14:12: They took Lot, who was dwelling in Sodom.',
        difficulty: 'easy'
      },
      {
        id: 'genesis14-q2',
        question: 'What did Abram do when he heard Lot was captured?',
        options: ['Prayed', 'Rescued him', 'Mourned', 'Left for Egypt'],
        correctAnswer: 'Rescued him',
        explanation: 'Genesis 14:14-16: Abram led his men to rescue Lot and brought him back.',
        difficulty: 'easy'
      },
      {
        id: 'genesis14-q3',
        question: 'Who blessed Abram after the battle?',
        options: ['Pharaoh', 'Melchizedek', 'The king of Sodom', 'Lot'],
        correctAnswer: 'Melchizedek',
        explanation: 'Genesis 14:18-19: Melchizedek, king of Salem, blessed Abram.',
        difficulty: 'easy'
      },
      {
        id: 'genesis14-q4',
        question: 'What did Abram give Melchizedek?',
        options: ['Gold', 'A tenth of everything', 'Livestock', 'Land'],
        correctAnswer: 'A tenth of everything',
        explanation: 'Genesis 14:20: Abram gave him a tenth of everything.',
        difficulty: 'easy'
      },
      {
        id: 'genesis14-q5',
        question: 'What did Melchizedek bring out to Abram?',
        options: ['Gold and silver', 'Bread and wine', 'Weapons', 'Clothing'],
        correctAnswer: 'Bread and wine',
        explanation: 'Genesis 14:18: Melchizedek brought out bread and wine.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis14-q6',
        question: 'How many trained men did Abram lead?',
        options: ['100', '318', '500', '1000'],
        correctAnswer: '318',
        explanation: 'Genesis 14:14: Abram led 318 trained men born in his house.',
        difficulty: 'medium'
      },
      {
        id: 'genesis14-q7',
        question: 'Who was the leader of the invading kings?',
        options: ['Melchizedek', 'Chedorlaomer', 'The king of Sodom', 'Pharaoh'],
        correctAnswer: 'Chedorlaomer',
        explanation: 'Genesis 14:4-5: Chedorlaomer was the dominant king leading the alliance.',
        difficulty: 'medium'
      },
      {
        id: 'genesis14-q8',
        question: 'What did the king of Sodom offer Abram after the rescue?',
        options: ['His kingdom', 'The goods, but asked for the people back', 'Marriage alliance', 'A treaty'],
        correctAnswer: 'The goods, but asked for the people back',
        explanation: 'Genesis 14:21: The king asked Abram to give him the people and keep the goods.',
        difficulty: 'medium'
      },
      {
        id: 'genesis14-q9',
        question: 'What was Melchizedek\'s title?',
        options: ['King of Egypt', 'King of Salem, priest of God Most High', 'King of Sodom', 'Prophet of the LORD'],
        correctAnswer: 'King of Salem, priest of God Most High',
        explanation: 'Genesis 14:18: Melchizedek was king of Salem and priest of God Most High.',
        difficulty: 'medium'
      },
      {
        id: 'genesis14-q10',
        question: 'How far did Abram pursue the enemy kings?',
        options: ['To Egypt', 'As far as Dan', 'To Babylon', 'To the Jordan'],
        correctAnswer: 'As far as Dan',
        explanation: 'Genesis 14:14: Abram pursued them as far as Dan.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis14-q11',
        question: 'How many kings were in the alliance that attacked Sodom?',
        options: ['Two', 'Four', 'Seven', 'Twelve'],
        correctAnswer: 'Four',
        explanation: 'Genesis 14:1-2: Four kings against five - Chedorlaomer led four allied kings.',
        difficulty: 'hard'
      },
      {
        id: 'genesis14-q12',
        question: 'Why did Abram refuse the king of Sodom\'s offer?',
        options: ['He was too proud', 'So no one could say they made Abram rich', 'He already had enough', 'God told him to refuse'],
        correctAnswer: 'So no one could say they made Abram rich',
        explanation: 'Genesis 14:23: "lest you should say, I have made Abram rich."',
        difficulty: 'hard'
      },
      {
        id: 'genesis14-q13',
        question: 'What did Abram swear when refusing the spoils?',
        options: ['By his life', 'By the LORD, God Most High', 'By his offspring', 'By the land'],
        correctAnswer: 'By the LORD, God Most High',
        explanation: 'Genesis 14:22: "I have lifted my hand to the LORD, God Most High."',
        difficulty: 'hard'
      },
      {
        id: 'genesis14-q14',
        question: 'Where were the tar pits that some kings fell into?',
        options: ['Valley of Shinar', 'Valley of Siddim', 'Valley of Sorek', 'Valley of Elah'],
        correctAnswer: 'Valley of Siddim',
        explanation: 'Genesis 14:10: The Valley of Siddim was full of bitumen (tar) pits.',
        difficulty: 'hard'
      },
      {
        id: 'genesis14-q15',
        question: 'Which allies of Abram went with him on the rescue mission?',
        options: ['Lot and his servants', 'Aner, Eshcol, and Mamre', 'The kings of Sodom', 'Melchizedek\'s army'],
        correctAnswer: 'Aner, Eshcol, and Mamre',
        explanation: 'Genesis 14:13,24: Aner, Eshcol, and Mamre were Abram\'s Amorite allies.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 14:19',
    key_verse_text: "And he blessed him and said, 'Blessed be Abram by God Most High, Possessor of heaven and earth;'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-15',
    bookId: 'genesis',
    chapter: 15,
    title: 'God’s Covenant with Abram',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis15-q1',
        question: 'What did God promise to be for Abram?',
        options: ['His king', 'His shield', 'His father', 'His teacher'],
        correctAnswer: 'His shield',
        explanation: 'Genesis 15:1: "Fear not, Abram, I am your shield."',
        difficulty: 'easy'
      },
      {
        id: 'genesis15-q2',
        question: 'To what did God compare Abram\'s offspring?',
        options: ['The dust', 'The stars', 'The sand', 'The trees'],
        correctAnswer: 'The stars',
        explanation: 'Genesis 15:5: God told Abram to count the stars - so shall his offspring be.',
        difficulty: 'easy'
      },
      {
        id: 'genesis15-q3',
        question: 'Why was Abram counted as righteous?',
        options: ['His good works', 'His sacrifices', 'He believed the LORD', 'His wealth'],
        correctAnswer: 'He believed the LORD',
        explanation: 'Genesis 15:6: "he believed the LORD, and he counted it to him as righteousness."',
        difficulty: 'easy'
      },
      {
        id: 'genesis15-q4',
        question: 'What was Abram concerned about?',
        options: ['His wealth', 'Having no children', 'His enemies', 'His wife'],
        correctAnswer: 'Having no children',
        explanation: 'Genesis 15:2-3: Abram was concerned because he had no children.',
        difficulty: 'easy'
      },
      {
        id: 'genesis15-q5',
        question: 'What did God promise to give Abram\'s descendants?',
        options: ['Gold', 'This land', 'Servants', 'Long life'],
        correctAnswer: 'This land',
        explanation: 'Genesis 15:18: God made a covenant to give Abram\'s offspring the land.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis15-q6',
        question: 'Who did Abram say was his current heir?',
        options: ['Lot', 'Eliezer of Damascus', 'Ishmael', 'Pharaoh'],
        correctAnswer: 'Eliezer of Damascus',
        explanation: 'Genesis 15:2: Abram thought Eliezer would be his heir since he had no children.',
        difficulty: 'medium'
      },
      {
        id: 'genesis15-q7',
        question: 'What came over Abram as the sun was going down?',
        options: ['Joy', 'A deep sleep and dread', 'Hunger', 'Anger'],
        correctAnswer: 'A deep sleep and dread',
        explanation: 'Genesis 15:12: "a deep sleep fell on Abram... dreadful and great darkness."',
        difficulty: 'medium'
      },
      {
        id: 'genesis15-q8',
        question: 'How long would Abram\'s descendants be oppressed in another land?',
        options: ['200 years', '400 years', '500 years', '1000 years'],
        correctAnswer: '400 years',
        explanation: 'Genesis 15:13: "your offspring will be... afflicted for four hundred years."',
        difficulty: 'medium'
      },
      {
        id: 'genesis15-q9',
        question: 'What animals did Abram bring for the covenant ceremony?',
        options: ['One lamb', 'A heifer, goat, ram, turtledove, and pigeon', 'Seven bulls', 'Two oxen'],
        correctAnswer: 'A heifer, goat, ram, turtledove, and pigeon',
        explanation: 'Genesis 15:9: God instructed Abram to bring five animals for the covenant.',
        difficulty: 'medium'
      },
      {
        id: 'genesis15-q10',
        question: 'What passed between the cut pieces of the animals?',
        options: ['Water', 'A smoking fire pot and flaming torch', 'An angel', 'Wind'],
        correctAnswer: 'A smoking fire pot and flaming torch',
        explanation: 'Genesis 15:17: A smoking fire pot and flaming torch passed between the pieces.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis15-q11',
        question: 'Whose sin was "not yet complete" according to Genesis 15:16?',
        options: ['The Egyptians', 'The Amorites', 'The Canaanites', 'Abram\'s descendants'],
        correctAnswer: 'The Amorites',
        explanation: 'Genesis 15:16: "the iniquity of the Amorites is not yet complete."',
        difficulty: 'hard'
      },
      {
        id: 'genesis15-q12',
        question: 'What nation would God judge for oppressing Abram\'s descendants?',
        options: ['Canaan', 'Egypt', 'Babylon', 'Assyria'],
        correctAnswer: 'Egypt',
        explanation: 'Genesis 15:14: "I will bring judgment on the nation that they serve."',
        difficulty: 'hard'
      },
      {
        id: 'genesis15-q13',
        question: 'What did Abram drive away from the carcasses?',
        options: ['Wolves', 'Birds of prey', 'Lions', 'Snakes'],
        correctAnswer: 'Birds of prey',
        explanation: 'Genesis 15:11: "And when birds of prey came down... Abram drove them away."',
        difficulty: 'hard'
      },
      {
        id: 'genesis15-q14',
        question: 'From what river to what river did God promise the land?',
        options: ['Jordan to Nile', 'River of Egypt to Euphrates', 'Tigris to Jordan', 'Red Sea to Dead Sea'],
        correctAnswer: 'River of Egypt to Euphrates',
        explanation: 'Genesis 15:18: "from the river of Egypt to... the Euphrates."',
        difficulty: 'hard'
      },
      {
        id: 'genesis15-q15',
        question: 'In what generation would Abram\'s descendants return to Canaan?',
        options: ['Second', 'Third', 'Fourth', 'Fifth'],
        correctAnswer: 'Fourth',
        explanation: 'Genesis 15:16: "they shall come back here in the fourth generation."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 15:6',
    key_verse_text: "And he believed the Lord, and he counted it to him as righteousness.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-16',
    bookId: 'genesis',
    chapter: 16,
    title: 'Hagar and Ishmael',
    questions: [
      {
        id: 'genesis16-q1',
        question: 'Who gave Hagar to Abram as a wife?',
        options: [
          'Rich Pharaoh',
          'Sarai',
          'Strong Lot',
          'Silent Eliezer'
        ],
        correctAnswer: 'Sarai',
        explanation: 'Genesis 16:3 (ESV): "So, after Abram had lived ten years in the land of Canaan, Sarai, Abram’s wife, took Hagar the Egyptian, her servant, and gave her to Abram her husband as a wife." Plan offers.'
      },
      {
        id: 'genesis16-q2',
        question: 'Why did Hagar flee from Sarai?',
        options: [
          'Seeking riches',
          'Sarai treated her harshly',
          'Seeking strength',
          'Silent fear'
        ],
        correctAnswer: 'Sarai treated her harshly',
        explanation: 'Genesis 16:6 (ESV): "But Abram said to Sarai, ‘Behold, your servant is in your power; do to her as you please.’ Then Sarai dealt harshly with her, and she fled from her." Conflict drives.'
      },
      {
        id: 'genesis16-q3',
        question: 'Who found Hagar by a spring?',
        options: [
          'Rich merchant',
          'The angel of the Lord',
          'Strong Abram',
          'Silent Sarai'
        ],
        correctAnswer: 'The angel of the Lord',
        explanation: 'Genesis 16:7 (ESV): "The angel of the Lord found her by a spring of water in the wilderness, the spring on the way to Shur." Mercy seeks.'
      },
      {
        id: 'genesis16-q4',
        question: 'What did the angel tell Hagar about her son?',
        options: [
          'He’ll be rich',
          'He’ll be a wild donkey of a man',
          'He’ll be strong',
          'He’ll be silent'
        ],
        correctAnswer: 'He’ll be a wild donkey of a man',
        explanation: 'Genesis 16:12 (ESV): "‘He shall be a wild donkey of a man, his hand against everyone and everyone’s hand against him, and he shall dwell over against all his kinsmen.’" Destiny foretells.'
      },
      {
        id: 'genesis16-q5',
        question: 'What name did Hagar give God?',
        options: [
          'Rich Provider',
          'God who sees me',
          'Strong Deliverer',
          'Silent Watcher'
        ],
        correctAnswer: 'God who sees me',
        explanation: 'Genesis 16:13 (ESV): "So she called the name of the Lord who spoke to her, ‘You are a God of seeing,’ for she said, ‘Truly here I have seen him who looks after me.’" Faith names.'
      }
    ],
    key_verse: 'Genesis 16:13',
    key_verse_text: "So she called the name of the Lord who spoke to her, ‘You are a God of seeing,’ for she said, ‘Truly here I have seen him who looks after me.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-17',
    bookId: 'genesis',
    chapter: 17,
    title: 'The Covenant of Circumcision',
    questions: [
      {
        id: 'genesis17-q1',
        question: 'How old was Abram when God appeared?',
        options: [
          'Rich seventy',
          'Ninety-nine',
          'Strong eighty',
          'Silent sixty'
        ],
        correctAnswer: 'Ninety-nine',
        explanation: 'Genesis 17:1 (ESV): "When Abram was ninety-nine years old the Lord appeared to Abram and said to him, ‘I am God Almighty; walk before me, and be blameless,’" Time marks.'
      },
      {
        id: 'genesis17-q2',
        question: 'What new name did God give Abram?',
        options: [
          'Rich Abner',
          'Abraham',
          'Strong Abiram',
          'Silent Abra'
        ],
        correctAnswer: 'Abraham',
        explanation: 'Genesis 17:5 (ESV): "‘No longer shall your name be called Abram, but your name shall be Abraham, for I have made you the father of a multitude of nations.’" Name changes.'
      },
      {
        id: 'genesis17-q3',
        question: 'What was the sign of the covenant?',
        options: [
          'Rich offerings',
          'Circumcision',
          'Strong altars',
          'Silent vows'
        ],
        correctAnswer: 'Circumcision',
        explanation: 'Genesis 17:11 (ESV): "‘You shall be circumcised in the flesh of your foreskins, and it shall be a sign of the covenant between me and you.’" Sign seals.'
      },
      {
        id: 'genesis17-q4',
        question: 'What new name was Sarai given?',
        options: [
          'Rich Sarina',
          'Sarah',
          'Strong Saria',
          'Silent Sara'
        ],
        correctAnswer: 'Sarah',
        explanation: 'Genesis 17:15 (ESV): "And God said to Abraham, ‘As for Sarai your wife, you shall not call her name Sarai, but Sarah shall be her name.’" Identity shifts.'
      },
      {
        id: 'genesis17-q5',
        question: 'What did Abraham do when God promised a son?',
        options: [
          'Sought riches',
          'Laughed and questioned',
          'Grew strong',
          'Fell silent'
        ],
        correctAnswer: 'Laughed and questioned',
        explanation: 'Genesis 17:17 (ESV): "Then Abraham fell on his face and laughed and said to himself, ‘Shall a child be born to a man who is a hundred years old? Shall Sarah, who is ninety years old, bear a child?’" Doubt marvels.'
      }
    ],
    key_verse: 'Genesis 17:5',
    key_verse_text: "‘No longer shall your name be called Abram, but your name shall be Abraham, for I have made you the father of a multitude of nations.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-18',
    bookId: 'genesis',
    chapter: 18,
    title: 'The Lord Visits Abraham',
    questions: [
      {
        id: 'genesis18-q1',
        question: 'Who appeared to Abraham by the oaks?',
        options: [
          'Rich kings',
          'The Lord and two angels',
          'Strong warriors',
          'Silent messengers'
        ],
        correctAnswer: 'The Lord and two angels',
        explanation: 'Genesis 18:1-2 (ESV): "And the Lord appeared to him by the oaks of Mamre, as he sat at the door of his tent in the heat of the day. He lifted up his eyes and looked, and behold, three men were standing in front of him." Visitors arrive.'
      },
      {
        id: 'genesis18-q2',
        question: 'What did Sarah do when told she’d bear a son?',
        options: [
          'Sought riches',
          'Laughed to herself',
          'Grew strong',
          'Fell silent'
        ],
        correctAnswer: 'Laughed to herself',
        explanation: 'Genesis 18:12 (ESV): "So Sarah laughed to herself, saying, ‘After I am worn out, and my lord is old, shall I have pleasure?’" Doubt chuckles.'
      },
      {
        id: 'genesis18-q3',
        question: 'What did the Lord say about Sodom’s sin?',
        options: [
          'It’s rich',
          'It’s very grave',
          'It’s strong',
          'It’s silent'
        ],
        correctAnswer: 'It’s very grave',
        explanation: 'Genesis 18:20 (ESV): "Then the Lord said, ‘Because the outcry against Sodom and Gomorrah is great and their sin is very grave,’" Judgment looms.'
      },
      {
        id: 'genesis18-q4',
        question: 'How many righteous did Abraham first ask about?',
        options: [
          'Rich ten',
          'Fifty',
          'Strong twenty',
          'Silent five'
        ],
        correctAnswer: 'Fifty',
        explanation: 'Genesis 18:24 (ESV): "‘Suppose there are fifty righteous within the city. Will you then sweep away the place and not spare it for the fifty righteous who are in it?’" Mercy pleads.'
      },
      {
        id: 'genesis18-q5',
        question: 'What was the lowest number Abraham negotiated?',
        options: [
          'Rich forty',
          'Ten',
          'Strong thirty',
          'Silent fifteen'
        ],
        correctAnswer: 'Ten',
        explanation: 'Genesis 18:32 (ESV): "Then he said, ‘Oh let not the Lord be angry, and I will speak again but this once. Suppose ten are found there.’ He answered, ‘For the sake of ten I will not destroy it.’" Intercession limits.'
      }
    ],
    key_verse: 'Genesis 18:14',
    key_verse_text: "‘Is anything too hard for the Lord? At the appointed time I will return to you, about this time next year, and Sarah shall have a son.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-19',
    bookId: 'genesis',
    chapter: 19,
    title: 'Destruction of Sodom and Gomorrah',
    questions: [
      {
        id: 'genesis19-q1',
        question: 'Who visited Lot in Sodom?',
        options: [
          'Rich merchants',
          'Two angels',
          'Strong kings',
          'Silent prophets'
        ],
        correctAnswer: 'Two angels',
        explanation: 'Genesis 19:1 (ESV): "The two angels came to Sodom in the evening, and Lot was sitting in the gate of Sodom. When Lot saw them, he rose to meet them and bowed himself with his face to the earth" Guests arrive.'
      },
      {
        id: 'genesis19-q2',
        question: 'What did the men of Sodom demand?',
        options: [
          'Rich tribute',
          'To know Lot’s guests',
          'Strong protection',
          'Silent departure'
        ],
        correctAnswer: 'To know Lot’s guests',
        explanation: 'Genesis 19:5 (ESV): "And they called to Lot, ‘Where are the men who came to you tonight? Bring them out to us, that we may know them.’" Sin demands.'
      },
      {
        id: 'genesis19-q3',
        question: 'How was Sodom destroyed?',
        options: [
          'Rich flood',
          'Sulfur and fire',
          'Strong earthquake',
          'Silent plague'
        ],
        correctAnswer: 'Sulfur and fire',
        explanation: 'Genesis 19:24 (ESV): "Then the Lord rained on Sodom and Gomorrah sulfur and fire from the Lord out of heaven." Judgment falls.'
      },
      {
        id: 'genesis19-q4',
        question: 'What happened to Lot’s wife?',
        options: [
          'Gained riches',
          'Became a pillar of salt',
          'Grew strong',
          'Fell silent'
        ],
        correctAnswer: 'Became a pillar of salt',
        explanation: 'Genesis 19:26 (ESV): "But Lot’s wife, behind him, looked back, and she became a pillar of salt." Disobedience hardens.'
      },
      {
        id: 'genesis19-q5',
        question: 'Where did Lot’s daughters conceive sons?',
        options: [
          'Rich city',
          'A cave',
          'Strong fortress',
          'Silent valley'
        ],
        correctAnswer: 'A cave',
        explanation: 'Genesis 19:30 (ESV): "Now Lot went up out of Zoar and lived in a cave with his two daughters." Refuge hides.'
      }
    ],
    key_verse: 'Genesis 19:24',
    key_verse_text: "Then the Lord rained on Sodom and Gomorrah sulfur and fire from the Lord out of heaven.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-20',
    bookId: 'genesis',
    chapter: 20,
    title: 'Abraham and Abimelech',
    questions: [
      {
        id: 'genesis20-q1',
        question: 'Where did Abraham sojourn?',
        options: [
          'Rich Egypt',
          'Gerar',
          'Strong Sodom',
          'Silent Canaan'
        ],
        correctAnswer: 'Gerar',
        explanation: 'Genesis 20:1 (ESV): "From there Abraham journeyed toward the territory of the Negeb and lived between Kadesh and Shur; and he sojourned in Gerar." Journey moves.'
      },
      {
        id: 'genesis20-q2',
        question: 'What did Abraham say about Sarah?',
        options: [
          'She’s rich',
          'She’s my sister',
          'She’s strong',
          'She’s silent'
        ],
        correctAnswer: 'She’s my sister',
        explanation: 'Genesis 20:2 (ESV): "And Abraham said of Sarah his wife, ‘She is my sister.’ And Abimelech king of Gerar sent and took Sarah." Fear repeats.'
      },
      {
        id: 'genesis20-q3',
        question: 'How did God warn Abimelech?',
        options: [
          'With rich visions',
          'In a dream',
          'With strong signs',
          'With silent omens'
        ],
        correctAnswer: 'In a dream',
        explanation: 'Genesis 20:3 (ESV): "But God came to Abimelech in a dream by night and said to him, ‘Behold, you are a dead man because of the woman whom you have taken, for she is a man’s wife.’" Warning speaks.'
      },
      {
        id: 'genesis20-q4',
        question: 'What did Abimelech give Abraham?',
        options: [
          'Rich gold',
          'Sheep, oxen, and servants',
          'Strong horses',
          'Silent lands'
        ],
        correctAnswer: 'Sheep, oxen, and servants',
        explanation: 'Genesis 20:14 (ESV): "Then Abimelech took sheep and oxen, and male servants and female servants, and gave them to Abraham, and returned Sarah his wife to him." Restitution offers.'
      },
      {
        id: 'genesis20-q5',
        question: 'What role did Abraham have for Abimelech?',
        options: [
          'Rich advisor',
          'Prophet who prayed',
          'Strong ally',
          'Silent guide'
        ],
        correctAnswer: 'Prophet who prayed',
        explanation: 'Genesis 20:7 (ESV): "‘Now then, return the man’s wife, for he is a prophet, so that he will pray for you, and you shall live. But if you do not return her, know that you shall surely die, you and all who are yours.’" Intercession heals.'
      }
    ],
    key_verse: 'Genesis 20:7',
    key_verse_text: "‘Now then, return the man’s wife, for he is a prophet, so that he will pray for you, and you shall live. But if you do not return her, know that you shall surely die, you and all who are yours.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-21',
    bookId: 'genesis',
    chapter: 21,
    title: 'Birth of Isaac and Hagar’s Departure',
    questions: [
      {
        id: 'genesis21-q1',
        question: 'What was the name of Abraham’s son by Sarah?',
        options: [
          'Rich Ishmael',
          'Isaac',
          'Strong Lot',
          'Silent Jacob'
        ],
        correctAnswer: 'Isaac',
        explanation: 'Genesis 21:3 (ESV): "Abraham called the name of his son who was born to him, whom Sarah bore him, Isaac." Promise fulfills.'
      },
      {
        id: 'genesis21-q2',
        question: 'What did Sarah ask Abraham to do with Hagar and Ishmael?',
        options: [
          'Give them riches',
          'Cast them out',
          'Make them strong',
          'Keep them silent'
        ],
        correctAnswer: 'Cast them out',
        explanation: 'Genesis 21:10 (ESV): "So she said to Abraham, ‘Cast out this slave woman with her son, for the son of this slave woman shall not be heir with my son Isaac.’" Jealousy demands.'
      },
      {
        id: 'genesis21-q3',
        question: 'What did God provide for Hagar in the wilderness?',
        options: [
          'Rich treasures',
          'A well of water',
          'Strong shelter',
          'Silent refuge'
        ],
        correctAnswer: 'A well of water',
        explanation: 'Genesis 21:19 (ESV): "Then God opened her eyes, and she saw a well of water. And she went and filled the skin with water and gave the boy a drink." Mercy sustains.'
      },
      {
        id: 'genesis21-q4',
        question: 'Who made a treaty with Abraham?',
        options: [
          'Rich Pharaoh',
          'Abimelech',
          'Strong Lot',
          'Silent Ishmael'
        ],
        correctAnswer: 'Abimelech',
        explanation: 'Genesis 21:27 (ESV): "So Abraham took sheep and oxen and gave them to Abimelech, and the two men made a covenant." Peace binds.'
      },
      {
        id: 'genesis21-q5',
        question: 'What did Abraham plant at Beersheba?',
        options: [
          'Rich vines',
          'A tamarisk tree',
          'Strong oaks',
          'Silent figs'
        ],
        correctAnswer: 'A tamarisk tree',
        explanation: 'Genesis 21:33 (ESV): "Abraham planted a tamarisk tree in Beersheba and called there on the name of the Lord, the Everlasting God." Worship marks.'
      }
    ],
    key_verse: 'Genesis 21:1',
    key_verse_text: "The Lord visited Sarah as he had said, and the Lord did to Sarah as he had promised.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-22',
    bookId: 'genesis',
    chapter: 22,
    title: 'The Sacrifice of Isaac',
    questions: [
      {
        id: 'genesis22-q1',
        question: 'What did God ask Abraham to sacrifice?',
        options: [
          'Rich herds',
          'His son Isaac',
          'Strong lambs',
          'Silent offerings'
        ],
        correctAnswer: 'His son Isaac',
        explanation: 'Genesis 22:2 (ESV): "He said, ‘Take your son, your only son Isaac, whom you love, and go to the land of Moriah, and offer him there as a burnt offering on one of the mountains of which I shall tell you.’" Test commands.'
      },
      {
        id: 'genesis22-q2',
        question: 'What did Abraham take to the mountain?',
        options: [
          'Rich gold',
          'Wood, fire, and Isaac',
          'Strong guards',
          'Silent tools'
        ],
        correctAnswer: 'Wood, fire, and Isaac',
        explanation: 'Genesis 22:6 (ESV): "And Abraham took the wood of the burnt offering and laid it on Isaac his son. And he took in his hand the fire and the knife. So they went both of them together." Obedience prepares.'
      },
      {
        id: 'genesis22-q3',
        question: 'What did Isaac ask about the offering?',
        options: [
          'Where’s the riches?',
          'Where’s the lamb?',
          'Where’s the strength?',
          'Where’s the silence?'
        ],
        correctAnswer: 'Where’s the lamb?',
        explanation: 'Genesis 22:7 (ESV): "And Isaac said to his father Abraham, ‘My father!’ And he said, ‘Here I am, my son.’ He said, ‘Behold, the fire and the wood, but where is the lamb for a burnt offering?’" Question trusts.'
      },
      {
        id: 'genesis22-q4',
        question: 'What did God provide instead of Isaac?',
        options: [
          'Rich treasure',
          'A ram caught in a thicket',
          'Strong bull',
          'Silent dove'
        ],
        correctAnswer: 'A ram caught in a thicket',
        explanation: 'Genesis 22:13 (ESV): "And Abraham lifted up his eyes and looked, and behold, behind him was a ram, caught in a thicket by his horns. And Abraham went and took the ram and offered it up as a burnt offering instead of his son." Provision spares.'
      },
      {
        id: 'genesis22-q5',
        question: 'What did God reaffirm to Abraham?',
        options: [
          'Rich wealth',
          'Blessing and many offspring',
          'Strong power',
          'Silent favor'
        ],
        correctAnswer: 'Blessing and many offspring',
        explanation: 'Genesis 22:17 (ESV): "‘I will surely bless you, and I will surely multiply your offspring as the stars of heaven and as the sand that is on the seashore. And your offspring shall possess the gate of his enemies,’" Covenant renews.'
      }
    ],
    key_verse: 'Genesis 22:14',
    key_verse_text: "So Abraham called the name of that place, ‘The Lord will provide’; as it is said to this day, ‘On the mount of the Lord it shall be provided.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-23',
    bookId: 'genesis',
    chapter: 23,
    title: 'Sarah’s Death and Burial',
    questions: [
      {
        id: 'genesis23-q1',
        question: 'How old was Sarah when she died?',
        options: [
          'Rich hundred years',
          'One hundred twenty-seven years',
          'Strong ninety years',
          'Silent eighty years'
        ],
        correctAnswer: 'One hundred twenty-seven years',
        explanation: 'Genesis 23:1 (ESV): "Sarah lived 127 years; these were the years of the life of Sarah." Age records.'
      },
      {
        id: 'genesis23-q2',
        question: 'Where did Sarah die?',
        options: [
          'Rich Egypt',
          'Kiriath-arba (Hebron)',
          'Strong Sodom',
          'Silent Gerar'
        ],
        correctAnswer: 'Kiriath-arba (Hebron)',
        explanation: 'Genesis 23:2 (ESV): "And Sarah died at Kiriath-arba (that is, Hebron) in the land of Canaan, and Abraham went in to mourn for Sarah and to weep for her." Place grieves.'
      },
      {
        id: 'genesis23-q3',
        question: 'From whom did Abraham buy the burial site?',
        options: [
          'Rich Abimelech',
          'Ephron the Hittite',
          'Strong Lot',
          'Silent Heth'
        ],
        correctAnswer: 'Ephron the Hittite',
        explanation: 'Genesis 23:10 (ESV): "Now Ephron was sitting among the Hittites, and Ephron the Hittite answered Abraham in the hearing of the Hittites, of all who went in at the gate of his city," Deal negotiates.'
      },
      {
        id: 'genesis23-q4',
        question: 'What was the name of the burial site?',
        options: [
          'Rich Bethel',
          'Cave of Machpelah',
          'Strong Mamre',
          'Silent Zoar'
        ],
        correctAnswer: 'Cave of Machpelah',
        explanation: 'Genesis 23:19 (ESV): "After this, Abraham buried Sarah his wife in the cave of the field of Machpelah east of Mamre (that is, Hebron) in the land of Canaan." Tomb rests.'
      },
      {
        id: 'genesis23-q5',
        question: 'How much did Abraham pay for the cave?',
        options: [
          'Rich gold',
          'Four hundred shekels of silver',
          'Strong bronze',
          'Silent wealth'
        ],
        correctAnswer: 'Four hundred shekels of silver',
        explanation: 'Genesis 23:16 (ESV): "Abraham listened to Ephron, and Abraham weighed out for Ephron the silver that he had named in the hearing of the Hittites, four hundred shekels of silver, according to the weights current among the merchants." Price settles.'
      }
    ],
    key_verse: 'Genesis 23:19',
    key_verse_text: "After this, Abraham buried Sarah his wife in the cave of the field of Machpelah east of Mamre (that is, Hebron) in the land of Canaan.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-24',
    bookId: 'genesis',
    chapter: 24,
    title: 'A Wife for Isaac',
    questions: [
      {
        id: 'genesis24-q1',
        question: 'Who did Abraham send to find a wife for Isaac?',
        options: [
          'Rich steward',
          'His chief servant',
          'Strong Lot',
          'Silent Eliezer'
        ],
        correctAnswer: 'His chief servant',
        explanation: 'Genesis 24:2 (ESV): "And Abraham said to his servant, the oldest of his household, who had charge of all that he had, ‘Put your hand under my thigh,’" Mission entrusts.'
      },
      {
        id: 'genesis24-q2',
        question: 'Where was the servant sent to find a wife?',
        options: [
          'Rich Egypt',
          'Mesopotamia, Nahor’s city',
          'Strong Canaan',
          'Silent Gerar'
        ],
        correctAnswer: 'Mesopotamia, Nahor’s city',
        explanation: 'Genesis 24:10 (ESV): "Then the servant took ten of his master’s camels and departed, taking all sorts of choice gifts from his master; and he arose and went to Mesopotamia to the city of Nahor." Journey seeks.'
      },
      {
        id: 'genesis24-q3',
        question: 'What sign did the servant ask God for?',
        options: [
          'Rich gifts',
          'A woman offering water',
          'Strong winds',
          'Silent stars'
        ],
        correctAnswer: 'A woman offering water',
        explanation: 'Genesis 24:14 (ESV): "‘Let the young woman to whom I shall say, “Please let down your jar that I may drink,” and who shall say, “Drink, and I will water your camels”—let her be the one whom you have appointed for your servant Isaac. By this I shall know that you have shown steadfast love to my master.’" Sign confirms.'
      },
      {
        id: 'genesis24-q4',
        question: 'Who met the servant’s criteria?',
        options: [
          'Rich Sarah',
          'Rebekah',
          'Strong Rachel',
          'Silent Dinah'
        ],
        correctAnswer: 'Rebekah',
        explanation: 'Genesis 24:15-16 (ESV): "Before he had finished speaking, behold, Rebekah, who was born to Bethuel the son of Milcah, the wife of Nahor, Abraham’s brother, came out with her water jar on her shoulder." Providence answers.'
      },
      {
        id: 'genesis24-q5',
        question: 'What did Rebekah agree to do?',
        options: [
          'Seek riches',
          'Go with the servant to marry Isaac',
          'Stay strong',
          'Remain silent'
        ],
        correctAnswer: 'Go with the servant to marry Isaac',
        explanation: 'Genesis 24:58 (ESV): "And they called Rebekah and said to her, ‘Will you go with this man?’ She said, ‘I will go.’" Consent commits.'
      }
    ],
    key_verse: 'Genesis 24:27',
    key_verse_text: "and he said, ‘Blessed be the Lord, the God of my master Abraham, who has not forsaken his steadfast love and his faithfulness toward my master. As for me, the Lord has led me in the way to the house of my master’s kinsmen.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-25',
    bookId: 'genesis',
    chapter: 25,
    title: 'Abraham’s Death and Isaac’s Family',
    questions: [
      {
        id: 'genesis25-q1',
        question: 'Who was Abraham’s second wife?',
        options: [
          'Rich Hagar',
          'Keturah',
          'Strong Sarah',
          'Silent Rebekah'
        ],
        correctAnswer: 'Keturah',
        explanation: 'Genesis 25:1 (ESV): "Abraham took another wife, whose name was Keturah." Family extends.'
      },
      {
        id: 'genesis25-q2',
        question: 'Who inherited all Abraham owned?',
        options: [
          'Rich Ishmael',
          'Isaac',
          'Strong Midian',
          'Silent Lot'
        ],
        correctAnswer: 'Isaac',
        explanation: 'Genesis 25:5 (ESV): "Abraham gave all he had to Isaac." Heir receives.'
      },
      {
        id: 'genesis25-q3',
        question: 'How old was Abraham when he died?',
        options: [
          'Rich hundred years',
          'One hundred seventy-five years',
          'Strong ninety years',
          'Silent eighty years'
        ],
        correctAnswer: 'One hundred seventy-five years',
        explanation: 'Genesis 25:7 (ESV): "These are the days of the years of Abraham’s life, 175 years." Life ends.'
      },
      {
        id: 'genesis25-q4',
        question: 'Who were Rebekah’s twin sons?',
        options: [
          'Rich Ishmael and Isaac',
          'Esau and Jacob',
          'Strong Midian and Zimran',
          'Silent Joseph and Benjamin'
        ],
        correctAnswer: 'Esau and Jacob',
        explanation: 'Genesis 25:24-26 (ESV): "When her days to give birth were completed, behold, there were twins in her womb. The first came out red, all his body like a hairy cloak, so they called his name Esau. Afterward his brother came out with his hand holding Esau’s heel, so his name was called Jacob." Birth contends.'
      },
      {
        id: 'genesis25-q5',
        question: 'What did Esau sell to Jacob?',
        options: [
          'Rich lands',
          'His birthright',
          'Strong herds',
          'Silent rights'
        ],
        correctAnswer: 'His birthright',
        explanation: 'Genesis 25:33 (ESV): "Jacob said, ‘Swear to me now.’ So he swore to him and sold his birthright to Jacob." Trade shifts.'
      }
    ],
    key_verse: 'Genesis 25:33',
    key_verse_text: "Jacob said, ‘Swear to me now.’ So he swore to him and sold his birthright to Jacob.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-26',
    bookId: 'genesis',
    chapter: 26,
    title: 'Isaac and Abimelech',
    questions: [
      {
        id: 'genesis26-q1',
        question: 'Where did Isaac go during a famine?',
        options: [
          'Rich Egypt',
          'Gerar, to Abimelech',
          'Strong Haran',
          'Silent Canaan'
        ],
        correctAnswer: 'Gerar, to Abimelech',
        explanation: 'Genesis 26:1 (ESV): "Now there was a famine in the land, besides the former famine that was in the days of Abraham. And Isaac went to Gerar to Abimelech king of the Philistines." Need journeys.'
      },
      {
        id: 'genesis26-q2',
        question: 'What did Isaac say about Rebekah?',
        options: [
          'She’s rich',
          'She’s my sister',
          'She’s strong',
          'She’s silent'
        ],
        correctAnswer: 'She’s my sister',
        explanation: 'Genesis 26:7 (ESV): "When the men of the place asked about his wife, he said, ‘She is my sister,’ for he feared to say, ‘My wife,’ thinking, ‘lest the men of the place should kill me because of Rebekah,’ because she was attractive in appearance." Fear deceives.'
      },
      {
        id: 'genesis26-q3',
        question: 'What did God reaffirm to Isaac?',
        options: [
          'Rich wealth',
          'Land and offspring',
          'Strong power',
          'Silent favor'
        ],
        correctAnswer: 'Land and offspring',
        explanation: 'Genesis 26:3-4 (ESV): "‘Sojourn in this land, and I will be with you and will bless you, for to you and to your offspring I will give all these lands, and I will establish the oath that I swore to Abraham your father. I will multiply your offspring as the stars of heaven and will give to your offspring all these lands.’" Covenant continues.'
      },
      {
        id: 'genesis26-q4',
        question: 'Why did Abimelech send Isaac away?',
        options: [
          'Isaac’s riches',
          'Isaac’s great might',
          'Isaac’s strong army',
          'Isaac’s silent ways'
        ],
        correctAnswer: 'Isaac’s great might',
        explanation: 'Genesis 26:16 (ESV): "And Abimelech said to Isaac, ‘Go away from us, for you are much mightier than we.’" Prosperity threatens.'
      },
      {
        id: 'genesis26-q5',
        question: 'What did Isaac call the well at Beersheba?',
        options: [
          'Rich Well',
          'Shibah',
          'Strong Spring',
          'Silent Water'
        ],
        correctAnswer: 'Shibah',
        explanation: 'Genesis 26:33 (ESV): "He called it Shibah; therefore the name of the city is Beersheba to this day." Name endures.'
      }
    ],
    key_verse: 'Genesis 26:4',
    key_verse_text: "‘I will multiply your offspring as the stars of heaven and will give to your offspring all these lands. And in your offspring all the nations of the earth shall be blessed,’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-27',
    bookId: 'genesis',
    chapter: 27,
    title: 'Jacob Steals Esau’s Blessing',
    questions: [
      {
        id: 'genesis27-q1',
        question: 'Who encouraged Jacob to deceive Isaac?',
        options: [
          'Rich servant',
          'Rebekah',
          'Strong Esau',
          'Silent Laban'
        ],
        correctAnswer: 'Rebekah',
        explanation: 'Genesis 27:6-7 (ESV): "Rebekah said to her son Jacob, ‘I heard your father speak to Esau your brother, saying, “Bring me game and prepare for me delicious food, that I may eat it and bless you before the Lord before I die.”’" Plan schemes.'
      },
      {
        id: 'genesis27-q2',
        question: 'How did Jacob disguise himself as Esau?',
        options: [
          'With rich robes',
          'Goat skins on hands and neck',
          'With strong armor',
          'With silent steps'
        ],
        correctAnswer: 'Goat skins on hands and neck',
        explanation: 'Genesis 27:16 (ESV): "And the skins of the young goats she put on his hands and on the smooth part of his neck." Deception cloaks.'
      },
      {
        id: 'genesis27-q3',
        question: 'What did Isaac bless Jacob with?',
        options: [
          'Rich gold',
          'Dew, fatness, and lordship',
          'Strong armies',
          'Silent lands'
        ],
        correctAnswer: 'Dew, fatness, and lordship',
        explanation: 'Genesis 27:28-29 (ESV): "‘May God give you of the dew of heaven and of the fatness of the earth and plenty of grain and wine. Let peoples serve you, and nations bow down to you. Be lord over your brothers, and may your mother’s sons bow down to you.’" Blessing bestows.'
      },
      {
        id: 'genesis27-q4',
        question: 'What did Esau receive from Isaac?',
        options: [
          'Rich inheritance',
          'A lesser blessing',
          'Strong power',
          'Silent favor'
        ],
        correctAnswer: 'A lesser blessing',
        explanation: 'Genesis 27:39-40 (ESV): "Then Isaac his father answered and said to him: ‘Behold, away from the fatness of the earth shall your dwelling be, and away from the dew of heaven on high. By your sword you shall live, and you shall serve your brother; but when you grow restless you shall break his yoke from your neck.’" Fate assigns.'
      },
      {
        id: 'genesis27-q5',
        question: 'Why did Jacob flee from Esau?',
        options: [
          'To seek riches',
          'Esau planned to kill him',
          'To gain strength',
          'To stay silent'
        ],
        correctAnswer: 'Esau planned to kill him',
        explanation: 'Genesis 27:41 (ESV): "Now Esau hated Jacob because of the blessing with which his father had blessed him, and Esau said in his heart, ‘The days of mourning for my father are approaching; then I will kill my brother Jacob.’" Anger threatens.'
      }
    ],
    key_verse: 'Genesis 27:29',
    key_verse_text: "‘Let peoples serve you, and nations bow down to you. Be lord over your brothers, and may your mother’s sons bow down to you. Cursed be everyone who curses you, and blessed be everyone who blesses you!’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-28',
    bookId: 'genesis',
    chapter: 28,
    title: 'Jacob’s Dream and Vow',
    questions: [
      {
        id: 'genesis28-q1',
        question: 'Where was Jacob sent to find a wife?',
        options: [
          'Rich Egypt',
          'Paddan-aram',
          'Strong Canaan',
          'Silent Gerar'
        ],
        correctAnswer: 'Paddan-aram',
        explanation: 'Genesis 28:2 (ESV): "‘Arise, go to Paddan-aram to the house of Bethuel your mother’s father, and take a wife from there from the daughters of Laban your mother’s brother.’" Journey directs.'
      },
      {
        id: 'genesis28-q2',
        question: 'What did Jacob see in his dream?',
        options: [
          'Rich treasures',
          'A ladder to heaven',
          'Strong armies',
          'Silent angels'
        ],
        correctAnswer: 'A ladder to heaven',
        explanation: 'Genesis 28:12 (ESV): "And he dreamed, and behold, there was a ladder set up on the earth, and the top of it reached to heaven. And behold, the angels of God were ascending and descending on it!" Vision reveals.'
      },
      {
        id: 'genesis28-q3',
        question: 'What did God promise Jacob?',
        options: [
          'Rich wealth',
          'Land, offspring, and blessing',
          'Strong power',
          'Silent protection'
        ],
        correctAnswer: 'Land, offspring, and blessing',
        explanation: 'Genesis 28:13-14 (ESV): "And behold, the Lord stood above it and said, ‘I am the Lord, the God of Abraham your father and the God of Isaac. The land on which you lie I will give to you and to your offspring. Your offspring shall be like the dust of the earth, and you shall spread abroad to the west and to the east and to the north and to the south, and in you and your offspring shall all the families of the earth be blessed.’" Covenant extends.'
      },
      {
        id: 'genesis28-q4',
        question: 'What did Jacob name the place of his dream?',
        options: [
          'Rich Bethel',
          'Bethel',
          'Strong Luz',
          'Silent Peniel'
        ],
        correctAnswer: 'Bethel',
        explanation: 'Genesis 28:19 (ESV): "He called the name of that place Bethel, but the name of the city was Luz at the first." Name sanctifies.'
      },
      {
        id: 'genesis28-q5',
        question: 'What vow did Jacob make to God?',
        options: [
          'To give riches',
          'To give a tenth if God protects',
          'To build a strong altar',
          'To remain silent'
        ],
        correctAnswer: 'To give a tenth if God protects',
        explanation: 'Genesis 28:20-22 (ESV): "Then Jacob made a vow, saying, ‘If God will be with me and will keep me in this way that I go, and will give me bread to eat and clothing to wear, so that I come again to my father’s house in peace, then the Lord shall be my God, and this stone, which I have set up for a pillar, shall be God’s house. And of all that you give me I will give a full tenth to you.’" Faith pledges.'
      }
    ],
    key_verse: 'Genesis 28:15',
    key_verse_text: "‘Behold, I am with you and will keep you wherever you go, and will bring you back to this land. For I will not leave you until I have done what I have promised you.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-29',
    bookId: 'genesis',
    chapter: 29,
    title: 'Jacob Marries Leah and Rachel',
    questions: [
      {
        id: 'genesis29-q1',
        question: 'Who did Jacob meet at the well?',
        options: [
          'Rich Bethuel',
          'Rachel',
          'Strong Laban',
          'Silent Leah'
        ],
        correctAnswer: 'Rachel',
        explanation: 'Genesis 29:10 (ESV): "Now as soon as Jacob saw Rachel the daughter of Laban his mother’s brother, and the sheep of Laban his mother’s brother, Jacob came near and rolled the stone from the well’s mouth and watered the flock of Laban his mother’s brother." Love begins.'
      },
      {
        id: 'genesis29-q2',
        question: 'How long did Jacob work for Rachel?',
        options: [
          'Rich five years',
          'Seven years',
          'Strong ten years',
          'Silent three years'
        ],
        correctAnswer: 'Seven years',
        explanation: 'Genesis 29:20 (ESV): "So Jacob served seven years for Rachel, and they seemed to him but a few days because of the love he had for her." Labor endures.'
      },
      {
        id: 'genesis29-q3',
        question: 'Who was given to Jacob first?',
        options: [
          'Rich Rachel',
          'Leah',
          'Strong Bilhah',
          'Silent Zilpah'
        ],
        correctAnswer: 'Leah',
        explanation: 'Genesis 29:25 (ESV): "And in the morning, behold, it was Leah! And Jacob said to Laban, ‘What is this you have done to me? Did I not serve with you for Rachel? Why then have you deceived me?’" Trick reveals.'
      },
      {
        id: 'genesis29-q4',
        question: 'What did Laban give with each daughter?',
        options: [
          'Rich gold',
          'A servant',
          'Strong flocks',
          'Silent gifts'
        ],
        correctAnswer: 'A servant',
        explanation: 'Genesis 29:24, 29 (ESV): "Laban gave his female servant Zilpah to his daughter Leah to be her servant. ... Laban gave his female servant Bilhah to his daughter Rachel to be her servant." Dowry includes.'
      },
      {
        id: 'genesis29-q5',
        question: 'Who was Jacob’s first son by Leah?',
        options: [
          'Rich Joseph',
          'Reuben',
          'Strong Judah',
          'Silent Levi'
        ],
        correctAnswer: 'Reuben',
        explanation: 'Genesis 29:32 (ESV): "And Leah conceived and bore a son, and she called his name Reuben, for she said, ‘Because the Lord has looked upon my affliction; for now my husband will love me.’" Family grows.'
      }
    ],
    key_verse: 'Genesis 29:20',
    key_verse_text: "So Jacob served seven years for Rachel, and they seemed to him but a few days because of the love he had for her.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-30',
    bookId: 'genesis',
    chapter: 30,
    title: 'Jacob’s Children and Prosperity',
    questions: [
      {
        id: 'genesis30-q1',
        question: 'What did Rachel give Jacob to bear children?',
        options: [
          'Rich jewels',
          'Her servant Bilhah',
          'Strong herbs',
          'Silent prayers'
        ],
        correctAnswer: 'Her servant Bilhah',
        explanation: 'Genesis 30:3 (ESV): "Then she said, ‘Here is my servant Bilhah; go in to her, so that she may give birth on my behalf, that even I may have children through her.’" Plan competes.'
      },
      {
        id: 'genesis30-q2',
        question: 'Who was Jacob’s son by Bilhah?',
        options: [
          'Rich Simeon',
          'Dan',
          'Strong Gad',
          'Silent Asher'
        ],
        correctAnswer: 'Dan',
        explanation: 'Genesis 30:6 (ESV): "Then Rachel said, ‘God has judged me, and has also heard my voice and given me a son.’ Therefore she called his name Dan." Name judges.'
      },
      {
        id: 'genesis30-q3',
        question: 'What did Leah trade for mandrakes?',
        options: [
          'Rich gold',
          'A night with Jacob',
          'Strong flocks',
          'Silent vows'
        ],
        correctAnswer: 'A night with Jacob',
        explanation: 'Genesis 30:15-16 (ESV): "But she said to her, ‘Is it a small matter that you have taken away my husband? Would you take away my son’s mandrakes also?’ Rachel said, ‘Then he may lie with you tonight in exchange for your son’s mandrakes.’" Bargain trades.'
      },
      {
        id: 'genesis30-q4',
        question: 'How did Jacob increase his flocks?',
        options: [
          'Rich purchases',
          'Speckled rods by water',
          'Strong breeding',
          'Silent deals'
        ],
        correctAnswer: 'Speckled rods by water',
        explanation: 'Genesis 30:38-39 (ESV): "He set the rods that he had peeled in front of the flocks in the troughs, that is, the watering places, where the flocks came to drink. And since they bred when they came to drink, the flocks bred in front of the rods and so the flocks brought forth striped, speckled, and spotted." Strategy prospers.'
      },
      {
        id: 'genesis30-q5',
        question: 'What did Jacob’s wealth include?',
        options: [
          'Rich gold and silver',
          'Flocks, servants, and camels',
          'Strong fortresses',
          'Silent lands'
        ],
        correctAnswer: 'Flocks, servants, and camels',
        explanation: 'Genesis 30:43 (ESV): "Thus the man increased greatly and had large flocks, female servants and male servants, and camels and donkeys." Wealth grows.'
      }
    ],
    key_verse: 'Genesis 30:43',
    key_verse_text: "Thus the man increased greatly and had large flocks, female servants and male servants, and camels and donkeys.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-31',
    bookId: 'genesis',
    chapter: 31,
    title: 'Jacob Flees from Laban',
    questions: [
      {
        id: 'genesis31-q1',
        question: 'Why did Jacob decide to leave Laban?',
        options: [
          'Seeking riches',
          'Laban’s changed attitude',
          'Stronger flocks',
          'Silent fear'
        ],
        correctAnswer: 'Laban’s changed attitude',
        explanation: 'Genesis 31:2 (ESV): "And Jacob saw that Laban did not regard him with favor as before." Tension rises.'
      },
      {
        id: 'genesis31-q2',
        question: 'What did Rachel steal from Laban?',
        options: [
          'Rich gold',
          'Household gods',
          'Strong camels',
          'Silent jewels'
        ],
        correctAnswer: 'Household gods',
        explanation: 'Genesis 31:19 (ESV): "Laban had gone to shear his sheep, and Rachel stole her father’s household gods." Theft hides.'
      },
      {
        id: 'genesis31-q3',
        question: 'What did God tell Laban in a dream?',
        options: [
          'Seek riches',
          'Do not harm Jacob',
          'Grow strong',
          'Stay silent'
        ],
        correctAnswer: 'Do not harm Jacob',
        explanation: 'Genesis 31:24 (ESV): "But God came to Laban the Aramean in a dream by night and said to him, ‘Be careful not to say anything to Jacob, either good or bad.’" Warning protects.'
      },
      {
        id: 'genesis31-q4',
        question: 'Where did Rachel hide the household gods?',
        options: [
          'In rich bags',
          'In a camel’s saddle',
          'In strong boxes',
          'In silent tents'
        ],
        correctAnswer: 'In a camel’s saddle',
        explanation: 'Genesis 31:34 (ESV): "Now Rachel had taken the household gods and put them in the camel’s saddle and sat on them. Laban felt all about the tent, but did not find them." Deception conceals.'
      },
      {
        id: 'genesis31-q5',
        question: 'What covenant did Jacob and Laban make?',
        options: [
          'Rich trade',
          'Mizpah, a boundary heap',
          'Strong alliance',
          'Silent oath'
        ],
        correctAnswer: 'Mizpah, a boundary heap',
        explanation: 'Genesis 31:48-49 (ESV): "Laban said, ‘This heap is a witness between you and me today.’ Therefore he named it Galeed, and Mizpah, for he said, ‘The Lord watch between you and me, when we are out of one another’s sight.’" Pact divides.'
      }
    ],
    key_verse: 'Genesis 31:49',
    key_verse_text: "and Mizpah, for he said, ‘The Lord watch between you and me, when we are out of one another’s sight.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-32',
    bookId: 'genesis',
    chapter: 32,
    title: 'Jacob Prepares to Meet Esau',
    questions: [
      {
        id: 'genesis32-q1',
        question: 'Who met Jacob as he traveled?',
        options: [
          'Rich merchants',
          'Angels of God',
          'Strong warriors',
          'Silent guides'
        ],
        correctAnswer: 'Angels of God',
        explanation: 'Genesis 32:1 (ESV): "Jacob went on his way, and the angels of God met him." Encounter assures.'
      },
      {
        id: 'genesis32-q2',
        question: 'What did Jacob send to Esau?',
        options: [
          'Rich gold',
          'Gifts of livestock',
          'Strong guards',
          'Silent messages'
        ],
        correctAnswer: 'Gifts of livestock',
        explanation: 'Genesis 32:13 (ESV): "So he stayed there that night, and from what he had with him he took a present for his brother Esau," Peace offers.'
      },
      {
        id: 'genesis32-q3',
        question: 'What did Jacob do alone at night?',
        options: [
          'Sought riches',
          'Wrestled with a man',
          'Built strength',
          'Kept silent'
        ],
        correctAnswer: 'Wrestled with a man',
        explanation: 'Genesis 32:24 (ESV): "And Jacob was left alone. And a man wrestled with him until the breaking of the day." Struggle transforms.'
      },
      {
        id: 'genesis32-q4',
        question: 'What new name was Jacob given?',
        options: [
          'Rich Abram',
          'Israel',
          'Strong Isaac',
          'Silent Judah'
        ],
        correctAnswer: 'Israel',
        explanation: 'Genesis 32:28 (ESV): "Then he said, ‘Your name shall no longer be called Jacob, but Israel, for you have striven with God and with men, and have prevailed.’" Name changes.'
      },
      {
        id: 'genesis32-q5',
        question: 'What did Jacob name the place of wrestling?',
        options: [
          'Rich Bethel',
          'Peniel',
          'Strong Mahanaim',
          'Silent Mizpah'
        ],
        correctAnswer: 'Peniel',
        explanation: 'Genesis 32:30 (ESV): "So Jacob called the name of the place Peniel, saying, ‘For I have seen God face to face, and yet my life has been delivered.’" Vision names.'
      }
    ],
    key_verse: 'Genesis 32:28',
    key_verse_text: "Then he said, ‘Your name shall no longer be called Jacob, but Israel, for you have striven with God and with men, and have prevailed.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-33',
    bookId: 'genesis',
    chapter: 33,
    title: 'Jacob and Esau Reconcile',
    questions: [
      {
        id: 'genesis33-q1',
        question: 'How did Esau greet Jacob?',
        options: [
          'With rich gifts',
          'Embraced and kissed him',
          'With strong guards',
          'With silent anger'
        ],
        correctAnswer: 'Embraced and kissed him',
        explanation: 'Genesis 33:4 (ESV): "But Esau ran to meet him and embraced him and fell on his neck and kissed him, and they wept." Reconciliation heals.'
      },
      {
        id: 'genesis33-q2',
        question: 'What did Jacob offer Esau?',
        options: [
          'Rich gold',
          'A gift of livestock',
          'Strong protection',
          'Silent tribute'
        ],
        correctAnswer: 'A gift of livestock',
        explanation: 'Genesis 33:8 (ESV): "Esau said, ‘What do you mean by all this company that I met?’ Jacob answered, ‘To find favor in the sight of my lord.’" Gift humbles.'
      },
      {
        id: 'genesis33-q3',
        question: 'What did Esau offer to do for Jacob?',
        options: [
          'Give riches',
          'Travel together',
          'Build strength',
          'Stay silent'
        ],
        correctAnswer: 'Travel together',
        explanation: 'Genesis 33:12 (ESV): "Then Esau said, ‘Let us journey on our way, and I will go ahead of you.’" Unity offers.'
      },
      {
        id: 'genesis33-q4',
        question: 'Where did Jacob settle after meeting Esau?',
        options: [
          'Rich Haran',
          'Succoth',
          'Strong Paddan-aram',
          'Silent Gerar'
        ],
        correctAnswer: 'Succoth',
        explanation: 'Genesis 33:17 (ESV): "But Jacob journeyed to Succoth, and built himself a house and made booths for his livestock. Therefore the place is called Succoth." Home builds.'
      },
      {
        id: 'genesis33-q5',
        question: 'What did Jacob buy near Shechem?',
        options: [
          'Rich jewels',
          'A piece of land',
          'Strong flocks',
          'Silent tents'
        ],
        correctAnswer: 'A piece of land',
        explanation: 'Genesis 33:19 (ESV): "And from the sons of Hamor, Shechem’s father, he bought for a hundred pieces of money the piece of land on which he had pitched his tent." Purchase settles.'
      }
    ],
    key_verse: 'Genesis 33:4',
    key_verse_text: "But Esau ran to meet him and embraced him and fell on his neck and kissed him, and they wept.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-34',
    bookId: 'genesis',
    chapter: 34,
    title: 'Dinah and the Shechemites',
    questions: [
      {
        id: 'genesis34-q1',
        question: 'Who violated Jacob’s daughter Dinah?',
        options: [
          'Rich Abimelech',
          'Shechem, son of Hamor',
          'Strong Esau',
          'Silent Laban'
        ],
        correctAnswer: 'Shechem, son of Hamor',
        explanation: 'Genesis 34:2 (ESV): "And when Shechem the son of Hamor the Hivite, the prince of the land, saw her, he seized her and lay with her and humiliated her." Crime offends.'
      },
      {
        id: 'genesis34-q2',
        question: 'What did Shechem ask of Jacob?',
        options: [
          'Rich dowry',
          'To marry Dinah',
          'Strong alliance',
          'Silent peace'
        ],
        correctAnswer: 'To marry Dinah',
        explanation: 'Genesis 34:8 (ESV): "But Hamor spoke with them, saying, ‘The soul of my son Shechem longs for your daughter. Please give her to him to be his wife.’" Request seeks.'
      },
      {
        id: 'genesis34-q3',
        question: 'What did Jacob’s sons require of the Shechemites?',
        options: [
          'Rich tribute',
          'Circumcision',
          'Strong oaths',
          'Silent vows'
        ],
        correctAnswer: 'Circumcision',
        explanation: 'Genesis 34:15 (ESV): "‘Only on this condition will we agree with you—that you will become as we are by every male among you being circumcised.’" Deception demands.'
      },
      {
        id: 'genesis34-q4',
        question: 'Who killed the men of Shechem?',
        options: [
          'Rich Isaac',
          'Simeon and Levi',
          'Strong Judah',
          'Silent Reuben'
        ],
        correctAnswer: 'Simeon and Levi',
        explanation: 'Genesis 34:25 (ESV): "On the third day, when they were sore, two of the sons of Jacob, Simeon and Levi, Dinah’s brothers, took their swords and came against the city while it felt secure and killed all the males." Vengeance strikes.'
      },
      {
        id: 'genesis34-q5',
        question: 'What did Jacob fear after the attack?',
        options: [
          'Loss of riches',
          'Attack by Canaanites',
          'Loss of strength',
          'Silent ruin'
        ],
        correctAnswer: 'Attack by Canaanites',
        explanation: 'Genesis 34:30 (ESV): "Then Jacob said to Simeon and Levi, ‘You have brought trouble on me by making me stink to the inhabitants of the land, the Canaanites and the Perizzites. My numbers are few, and if they gather themselves against me and attack me, I shall be destroyed, both I and my household.’" Fear threatens.'
      }
    ],
    key_verse: 'Genesis 34:30',
    key_verse_text: "Then Jacob said to Simeon and Levi, ‘You have brought trouble on me by making me stink to the inhabitants of the land, the Canaanites and the Perizzites. My numbers are few, and if they gather themselves against me and attack me, I shall be destroyed, both I and my household.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-35',
    bookId: 'genesis',
    chapter: 35,
    title: 'Jacob Returns to Bethel',
    questions: [
      {
        id: 'genesis35-q1',
        question: 'Where did God tell Jacob to settle?',
        options: [
          'Rich Haran',
          'Bethel',
          'Strong Shechem',
          'Silent Succoth'
        ],
        correctAnswer: 'Bethel',
        explanation: 'Genesis 35:1 (ESV): "God said to Jacob, ‘Arise, go up to Bethel and dwell there. Make an altar there to the God who appeared to you when you fled from your brother Esau.’" Command directs.'
      },
      {
        id: 'genesis35-q2',
        question: 'What did Jacob tell his household to do?',
        options: [
          'Seek riches',
          'Put away foreign gods',
          'Grow strong',
          'Stay silent'
        ],
        correctAnswer: 'Put away foreign gods',
        explanation: 'Genesis 35:2 (ESV): "So Jacob said to his household and to all who were with him, ‘Put away the foreign gods that are among you and purify yourselves and change your garments.’" Purity calls.'
      },
      {
        id: 'genesis35-q3',
        question: 'What name did God confirm for Jacob?',
        options: [
          'Rich Abraham',
          'Israel',
          'Strong Isaac',
          'Silent Judah'
        ],
        correctAnswer: 'Israel',
        explanation: 'Genesis 35:10 (ESV): "And God said to him, ‘Your name is Jacob; no longer shall your name be called Jacob, but Israel shall be your name.’ So he called his name Israel." Identity affirms.'
      },
      {
        id: 'genesis35-q4',
        question: 'Who died giving birth to Benjamin?',
        options: [
          'Rich Leah',
          'Rachel',
          'Strong Bilhah',
          'Silent Zilpah'
        ],
        correctAnswer: 'Rachel',
        explanation: 'Genesis 35:18 (ESV): "And as her soul was departing (for she was dying), she called his name Ben-oni; but his father called him Benjamin." Loss grieves.'
      },
      {
        id: 'genesis35-q5',
        question: 'Where was Isaac buried?',
        options: [
          'Rich Egypt',
          'Mamre, with Abraham',
          'Strong Bethel',
          'Silent Shechem'
        ],
        correctAnswer: 'Mamre, with Abraham',
        explanation: 'Genesis 35:27 (ESV): "And Jacob came to his father Isaac at Mamre, or Kiriath-arba (that is, Hebron), where Abraham and Isaac had sojourned." Tomb rests.'
      }
    ],
    key_verse: 'Genesis 35:10',
    key_verse_text: "And God said to him, ‘Your name is Jacob; no longer shall your name be called Jacob, but Israel shall be your name.’ So he called his name Israel.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-36',
    bookId: 'genesis',
    chapter: 36,
    title: 'Esau’s Descendants',
    questions: [
      {
        id: 'genesis36-q1',
        question: 'Where did Esau settle?',
        options: [
          'Rich Canaan',
          'Seir',
          'Strong Egypt',
          'Silent Haran'
        ],
        correctAnswer: 'Seir',
        explanation: 'Genesis 36:8 (ESV): "So Esau settled in the hill country of Seir. (Esau is Edom.)" Land claims.'
      },
      {
        id: 'genesis36-q2',
        question: 'What was another name for Esau?',
        options: [
          'Rich Jacob',
          'Edom',
          'Strong Israel',
          'Silent Isaac'
        ],
        correctAnswer: 'Edom',
        explanation: 'Genesis 36:1 (ESV): "These are the generations of Esau (that is, Edom)." Name identifies.'
      },
      {
        id: 'genesis36-q3',
        question: 'Who was one of Esau’s wives?',
        options: [
          'Rich Rebekah',
          'Adah, daughter of Elon',
          'Strong Rachel',
          'Silent Leah'
        ],
        correctAnswer: 'Adah, daughter of Elon',
        explanation: 'Genesis 36:2 (ESV): "Esau took his wives from the Canaanites: Adah the daughter of Elon the Hittite, Oholibamah the daughter of Anah the daughter of Zibeon the Hivite," Family lists.'
      },
      {
        id: 'genesis36-q4',
        question: 'Who was a chief among Esau’s sons?',
        options: [
          'Rich Amalek',
          'Korah',
          'Strong Teman',
          'Silent Eliphaz'
        ],
        correctAnswer: 'Korah',
        explanation: 'Genesis 36:16 (ESV): "Korah, Gatam, and Amalek; these are the chiefs of Eliphaz in the land of Edom; these are the sons of Adah." Lineage leads.'
      },
      {
        id: 'genesis36-q5',
        question: 'Who ruled Edom before any king ruled Israel?',
        options: [
          'Rich Job',
          'Bela, son of Beor',
          'Strong Saul',
          'Silent Hadad'
        ],
        correctAnswer: 'Bela, son of Beor',
        explanation: 'Genesis 36:31-32 (ESV): "These are the kings who reigned in the land of Edom, before any king reigned over the Israelites. Bela the son of Beor reigned in Edom, the name of his city being Dinhabah." Rule begins.'
      }
    ],
    key_verse: 'Genesis 36:8',
    key_verse_text: "So Esau settled in the hill country of Seir. (Esau is Edom.)",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-37',
    bookId: 'genesis',
    chapter: 37,
    title: 'Joseph’s Dreams and Slavery',
    questions: [
      {
        id: 'genesis37-q1',
        question: 'How old was Joseph when he had his dreams?',
        options: [
          'Rich twelve',
          'Seventeen',
          'Strong twenty',
          'Silent fifteen'
        ],
        correctAnswer: 'Seventeen',
        explanation: 'Genesis 37:2 (ESV): "These are the generations of Jacob. Joseph, being seventeen years old, was pasturing the flock with his brothers." Age marks.'
      },
      {
        id: 'genesis37-q2',
        question: 'What did Joseph dream his brothers did?',
        options: [
          'Gave him riches',
          'Bowed down to him',
          'Grew strong',
          'Kept silent'
        ],
        correctAnswer: 'Bowed down to him',
        explanation: 'Genesis 37:7 (ESV): "‘Behold, we were binding sheaves in the field, and behold, my sheaf arose and stood upright. And behold, your sheaves gathered around it and bowed down to my sheaf.’" Vision foretells.'
      },
      {
        id: 'genesis37-q3',
        question: 'What did Jacob give Joseph?',
        options: [
          'Rich gold',
          'A robe of many colors',
          'Strong flocks',
          'Silent blessings'
        ],
        correctAnswer: 'A robe of many colors',
        explanation: 'Genesis 37:3 (ESV): "Now Israel loved Joseph more than any other of his sons, because he was the son of his old age. And he made him a robe of many colors." Favor adorns.'
      },
      {
        id: 'genesis37-q4',
        question: 'Who suggested selling Joseph?',
        options: [
          'Rich Reuben',
          'Judah',
          'Strong Simeon',
          'Silent Levi'
        ],
        correctAnswer: 'Judah',
        explanation: 'Genesis 37:26-27 (ESV): "Then Judah said to his brothers, ‘What profit is it if we kill our brother and conceal his blood? Come, let us sell him to the Ishmaelites, and let not our hand be upon him, for he is our brother, our own flesh.’ And his brothers listened to him." Plan spares.'
      },
      {
        id: 'genesis37-q5',
        question: 'To whom was Joseph sold in Egypt?',
        options: [
          'Rich Pharaoh',
          'Potiphar, an officer',
          'Strong Ishmaelites',
          'Silent Midianites'
        ],
        correctAnswer: 'Potiphar, an officer',
        explanation: 'Genesis 37:36 (ESV): "Meanwhile the Midianites had sold him in Egypt to Potiphar, an officer of Pharaoh, the captain of the guard." Fate delivers.'
      }
    ],
    key_verse: 'Genesis 37:7',
    key_verse_text: "‘Behold, we were binding sheaves in the field, and behold, my sheaf arose and stood upright. And behold, your sheaves gathered around it and bowed down to my sheaf.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-38',
    bookId: 'genesis',
    chapter: 38,
    title: 'Judah and Tamar',
    questions: [
      {
        id: 'genesis38-q1',
        question: 'Who was Judah’s first wife?',
        options: [
          'Rich Tamar',
          'Daughter of Shua',
          'Strong Dinah',
          'Silent Rachel'
        ],
        correctAnswer: 'Daughter of Shua',
        explanation: 'Genesis 38:2 (ESV): "There Judah saw the daughter of a certain Canaanite whose name was Shua. He took her and went in to her," Marriage begins.'
      },
      {
        id: 'genesis38-q2',
        question: 'What happened to Judah’s son Er?',
        options: [
          'Gained riches',
          'God put him to death',
          'Grew strong',
          'Fell silent'
        ],
        correctAnswer: 'God put him to death',
        explanation: 'Genesis 38:7 (ESV): "But Er, Judah’s firstborn, was wicked in the sight of the Lord, and the Lord put him to death." Judgment falls.'
      },
      {
        id: 'genesis38-q3',
        question: 'What did Tamar do to Judah?',
        options: [
          'Gave him riches',
          'Posed as a prostitute',
          'Built strength',
          'Kept silent'
        ],
        correctAnswer: 'Posed as a prostitute',
        explanation: 'Genesis 38:15-16 (ESV): "When Judah saw her, he thought she was a prostitute, for she had covered her face. He turned to her at the roadside and said, ‘Come, let me come in to you,’ for he did not know that she was his daughter-in-law." Deception acts.'
      },
      {
        id: 'genesis38-q4',
        question: 'What did Tamar keep as a pledge?',
        options: [
          'Rich gold',
          'Judah’s signet, cord, and staff',
          'Strong flocks',
          'Silent tokens'
        ],
        correctAnswer: 'Judah’s signet, cord, and staff',
        explanation: 'Genesis 38:18 (ESV): "He said, ‘What pledge shall I give you?’ She replied, ‘Your signet and your cord and your staff that is in your hand.’ So he gave them to her and went in to her, and she conceived by him." Proof secures.'
      },
      {
        id: 'genesis38-q5',
        question: 'Who were Tamar’s twin sons?',
        options: [
          'Rich Er and Onan',
          'Perez and Zerah',
          'Strong Shelah and Judah',
          'Silent Pharez and Zimri'
        ],
        correctAnswer: 'Perez and Zerah',
        explanation: 'Genesis 38:29-30 (ESV): "But as he drew back his hand, behold, his brother came out. And she said, ‘What a breach you have made for yourself!’ Therefore his name was called Perez. Afterward his brother came out with the scarlet thread on his hand, and his name was called Zerah." Birth names.'
      }
    ],
    key_verse: 'Genesis 38:26',
    key_verse_text: "Then Judah identified them and said, ‘She is more righteous than I, since I did not give her to my son Shelah.’ And he did not know her again.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-39',
    bookId: 'genesis',
    chapter: 39,
    title: 'Joseph in Potiphar’s House',
    questions: [
      {
        id: 'genesis39-q1',
        question: 'Who bought Joseph in Egypt?',
        options: [
          'Rich Pharaoh',
          'Potiphar, captain of the guard',
          'Strong Midianites',
          'Silent Ishmaelites'
        ],
        correctAnswer: 'Potiphar, captain of the guard',
        explanation: 'Genesis 39:1 (ESV): "Now Joseph had been brought down to Egypt, and Potiphar, an Egyptian who was one of Pharaoh’s officers, the captain of the guard, bought him from the Ishmaelites who had brought him down there." Service begins.'
      },
      {
        id: 'genesis39-q2',
        question: 'Why did Joseph prosper in Potiphar’s house?',
        options: [
          'Rich bribes',
          'The Lord was with him',
          'Strong skills',
          'Silent favor'
        ],
        correctAnswer: 'The Lord was with him',
        explanation: 'Genesis 39:2-3 (ESV): "The Lord was with Joseph, and he became a successful man, and he was in the house of his Egyptian master. His master saw that the Lord was with him and that the Lord caused all that he did to succeed in his hands." Blessing prospers.'
      },
      {
        id: 'genesis39-q3',
        question: 'What did Potiphar’s wife try to do?',
        options: [
          'Give him riches',
          'Seduce Joseph',
          'Make him strong',
          'Keep him silent'
        ],
        correctAnswer: 'Seduce Joseph',
        explanation: 'Genesis 39:7 (ESV): "And after a time his master’s wife cast her eyes on Joseph and said, ‘Lie with me.’" Temptation lures.'
      },
      {
        id: 'genesis39-q4',
        question: 'Why was Joseph imprisoned?',
        options: [
          'Stole riches',
          'False accusation of assault',
          'Lost strength',
          'Spoke silently'
        ],
        correctAnswer: 'False accusation of assault',
        explanation: 'Genesis 39:17-18 (ESV): "and she told him the same story, saying, ‘The Hebrew servant, whom you have brought among us, came in to me to laugh at me. But as soon as I lifted up my voice and cried, he left his garment beside me and fled out of the house.’" Lie accuses.'
      },
      {
        id: 'genesis39-q5',
        question: 'How did Joseph fare in prison?',
        options: [
          'Gained riches',
          'The Lord showed him favor',
          'Grew strong',
          'Remained silent'
        ],
        correctAnswer: 'The Lord showed him favor',
        explanation: 'Genesis 39:21 (ESV): "But the Lord was with Joseph and showed him steadfast love and gave him favor in the sight of the keeper of the prison." Grace sustains.'
      }
    ],
    key_verse: 'Genesis 39:21',
    key_verse_text: "But the Lord was with Joseph and showed him steadfast love and gave him favor in the sight of the keeper of the prison.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-40',
    bookId: 'genesis',
    chapter: 40,
    title: 'Joseph Interprets Dreams',
    questions: [
      {
        id: 'genesis40-q1',
        question: 'Who were imprisoned with Joseph?',
        options: [
          'Rich merchants',
          'Pharaoh’s cupbearer and baker',
          'Strong guards',
          'Silent scribes'
        ],
        correctAnswer: 'Pharaoh’s cupbearer and baker',
        explanation: 'Genesis 40:1-2 (ESV): "Some time after this, the cupbearer of the king of Egypt and his baker committed an offense against their lord the king of Egypt. And Pharaoh was angry with his two officers, the chief cupbearer and the chief baker," Companions join.'
      },
      {
        id: 'genesis40-q2',
        question: 'What did the cupbearer dream about?',
        options: [
          'Rich gold',
          'A vine with three branches',
          'Strong horses',
          'Silent rivers'
        ],
        correctAnswer: 'A vine with three branches',
        explanation: 'Genesis 40:9-10 (ESV): "So the chief cupbearer told his dream to Joseph and said to him, ‘In my dream there was a vine before me, and on the vine there were three branches. As soon as it budded, its blossoms shot forth, and the clusters ripened into grapes.’" Vision shares.'
      },
      {
        id: 'genesis40-q3',
        question: 'What did Joseph say the cupbearer’s dream meant?',
        options: [
          'Rich reward',
          'Restored in three days',
          'Strong rule',
          'Silent freedom'
        ],
        correctAnswer: 'Restored in three days',
        explanation: 'Genesis 40:12-13 (ESV): "Then Joseph said to him, ‘This is its interpretation: the three branches are three days. In three days Pharaoh will lift up your head and restore you to your office, and you shall place Pharaoh’s cup in his hand as formerly, when you were his cupbearer.’" Hope interprets.'
      },
      {
        id: 'genesis40-q4',
        question: 'What did the baker dream about?',
        options: [
          'Rich feasts',
          'Three baskets of bread',
          'Strong ovens',
          'Silent loaves'
        ],
        correctAnswer: 'Three baskets of bread',
        explanation: 'Genesis 40:16-17 (ESV): "When the chief baker saw that the interpretation was favorable, he said to Joseph, ‘I also had a dream: there were three cake baskets on my head, and in the top basket there were all sorts of baked food for Pharaoh, but the birds were eating it out of the basket on my head.’" Doom foretells.'
      },
      {
        id: 'genesis40-q5',
        question: 'What happened to the baker?',
        options: [
          'Gained riches',
          'Hanged, as Joseph predicted',
          'Grew strong',
          'Fell silent'
        ],
        correctAnswer: 'Hanged, as Joseph predicted',
        explanation: 'Genesis 40:22 (ESV): "But he hanged the chief baker, as Joseph had interpreted to them." Fate fulfills.'
      }
    ],
    key_verse: 'Genesis 40:13',
    key_verse_text: "In three days Pharaoh will lift up your head and restore you to your office, and you shall place Pharaoh’s cup in his hand as formerly, when you were his cupbearer.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-41',
    bookId: 'genesis',
    chapter: 41,
    title: 'Joseph Rises to Power',
    questions: [
      {
        id: 'genesis41-q1',
        question: 'How long was Joseph in prison before Pharaoh’s dreams?',
        options: [
          'Rich one year',
          'Two years',
          'Strong three years',
          'Silent five years'
        ],
        correctAnswer: 'Two years',
        explanation: 'Genesis 41:1 (ESV): "After two whole years, Pharaoh dreamed that he was standing by the Nile," Time passes.'
      },
      {
        id: 'genesis41-q2',
        question: 'What did Pharaoh dream about first?',
        options: [
          'Rich gold',
          'Seven fat and seven thin cows',
          'Strong soldiers',
          'Silent rivers'
        ],
        correctAnswer: 'Seven fat and seven thin cows',
        explanation: 'Genesis 41:2-4 (ESV): "and behold, there came up out of the Nile seven cows, attractive and plump, and they fed in the reed grass. And behold, seven other cows, gaunt and thin, came up out of the Nile after them, and stood by the other cows on the bank of the Nile. And the gaunt and thin cows ate up the seven attractive and plump cows." Vision warns.'
      },
      {
        id: 'genesis41-q3',
        question: 'What did Joseph interpret the dreams to mean?',
        options: [
          'Rich harvest',
          'Seven years of plenty, seven of famine',
          'Strong battles',
          'Silent peace'
        ],
        correctAnswer: 'Seven years of plenty, seven of famine',
        explanation: 'Genesis 41:29-30 (ESV): "There will come seven years of great plenty throughout all the land of Egypt, but after them there will arise seven years of famine, and all the plenty will be forgotten in the land of Egypt. The famine will consume the land," Wisdom foretells.'
      },
      {
        id: 'genesis41-q4',
        question: 'What role did Pharaoh give Joseph?',
        options: [
          'Rich treasurer',
          'Ruler over Egypt',
          'Strong general',
          'Silent advisor'
        ],
        correctAnswer: 'Ruler over Egypt',
        explanation: 'Genesis 41:40-41 (ESV): "‘You shall be over my house, and all my people shall order themselves as you command. Only as regards the throne will I be greater than you.’ And Pharaoh said to Joseph, ‘See, I have set you over all the land of Egypt.’" Authority rises.'
      },
      {
        id: 'genesis41-q5',
        question: 'What was Joseph’s Egyptian name?',
        options: [
          'Rich Potiphar',
          'Zaphenath-paneah',
          'Strong Amun',
          'Silent Ptah'
        ],
        correctAnswer: 'Zaphenath-paneah',
        explanation: 'Genesis 41:45 (ESV): "And Pharaoh called Joseph’s name Zaphenath-paneah. And he gave him in marriage Asenath, the daughter of Potiphera priest of On. So Joseph went out over the land of Egypt." Identity shifts.'
      }
    ],
    key_verse: 'Genesis 41:16',
    key_verse_text: "Joseph answered Pharaoh, ‘It is not in me; God will give Pharaoh a favorable answer.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-42',
    bookId: 'genesis',
    chapter: 42,
    title: 'Joseph’s Brothers Go to Egypt',
    questions: [
      {
        id: 'genesis42-q1',
        question: 'Why did Jacob send his sons to Egypt?',
        options: [
          'To seek riches',
          'To buy grain',
          'To gain strength',
          'To stay silent'
        ],
        correctAnswer: 'To buy grain',
        explanation: 'Genesis 42:1-2 (ESV): "When Jacob learned that there was grain for sale in Egypt, he said to his sons, ‘Why do you look at one another?’ And he said, ‘Behold, I have heard that there is grain for sale in Egypt. Go down and buy grain for us there, that we may live and not die.’" Famine drives.'
      },
      {
        id: 'genesis42-q2',
        question: 'Which brother stayed behind?',
        options: [
          'Rich Judah',
          'Benjamin',
          'Strong Reuben',
          'Silent Levi'
        ],
        correctAnswer: 'Benjamin',
        explanation: 'Genesis 42:4 (ESV): "But Jacob did not send Benjamin, Joseph’s brother, with his brothers, for he feared that harm might happen to him." Fear protects.'
      },
      {
        id: 'genesis42-q3',
        question: 'What did Joseph accuse his brothers of being?',
        options: [
          'Rich merchants',
          'Spies',
          'Strong warriors',
          'Silent thieves'
        ],
        correctAnswer: 'Spies',
        explanation: 'Genesis 42:9 (ESV): "And Joseph remembered the dreams that he had dreamed of them. And he said to them, ‘You are spies; you have come to see the nakedness of the land.’" Test probes.'
      },
      {
        id: 'genesis42-q4',
        question: 'Who was kept in prison by Joseph?',
        options: [
          'Rich Judah',
          'Simeon',
          'Strong Reuben',
          'Silent Levi'
        ],
        correctAnswer: 'Simeon',
        explanation: 'Genesis 42:24 (ESV): "Then he turned away from them and wept. And he returned to them and spoke to them. And he took Simeon from them and bound him before their eyes." Bond holds.'
      },
      {
        id: 'genesis42-q5',
        question: 'What did the brothers find in their sacks?',
        options: [
          'Rich gold',
          'Their money returned',
          'Strong tools',
          'Silent gifts'
        ],
        correctAnswer: 'Their money returned',
        explanation: 'Genesis 42:27-28 (ESV): "And as one of them opened his sack to give his donkey fodder at the lodging place, he saw his money in the mouth of his sack. He said to his brothers, ‘My money has been put back; here it is in the mouth of my sack!’" Discovery alarms.'
      }
    ],
    key_verse: 'Genesis 42:18',
    key_verse_text: "On the third day Joseph said to them, ‘Do this and you will live, for I fear God:",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-43',
    bookId: 'genesis',
    chapter: 43,
    title: 'The Brothers Return with Benjamin',
    questions: [
      {
        id: 'genesis43-q1',
        question: 'Why did Jacob finally send Benjamin?',
        options: [
          'Seeking riches',
          'Famine forced more grain',
          'Strengthening ties',
          'Silent agreement'
        ],
        correctAnswer: 'Famine forced more grain',
        explanation: 'Genesis 43:2 (ESV): "And when they had eaten the grain that they had brought from Egypt, their father said to them, ‘Go again, buy us a little food.’" Need compels.'
      },
      {
        id: 'genesis43-q2',
        question: 'What did Judah promise Jacob?',
        options: [
          'Rich rewards',
          'To ensure Benjamin’s safety',
          'Strong protection',
          'Silent return'
        ],
        correctAnswer: 'To ensure Benjamin’s safety',
        explanation: 'Genesis 43:9 (ESV): "‘I will be a pledge of his safety. From my hand you shall require him. If I do not bring him back to you and set him before you, then let me bear the blame forever.’" Oath binds.'
      },
      {
        id: 'genesis43-q3',
        question: 'What did the brothers bring to Joseph?',
        options: [
          'Rich gold',
          'Gifts of balm and honey',
          'Strong camels',
          'Silent offerings'
        ],
        correctAnswer: 'Gifts of balm and honey',
        explanation: 'Genesis 43:11 (ESV): "Then their father Israel said to them, ‘If it must be so, then do this: take some of the choice fruits of the land in your bags, and carry a present down to the man, a little balm and a little honey, gum, myrrh, pistachio nuts, and almonds.’" Tribute offers.'
      },
      {
        id: 'genesis43-q4',
        question: 'Where did Joseph host his brothers?',
        options: [
          'Rich palace',
          'His own house',
          'Strong fortress',
          'Silent temple'
        ],
        correctAnswer: 'His own house',
        explanation: 'Genesis 43:16 (ESV): "When Joseph saw Benjamin with them, he said to the steward of his house, ‘Bring the men into the house, and slaughter an animal and make ready, for the men are to dine with me at noon.’" Hospitality invites.'
      },
      {
        id: 'genesis43-q5',
        question: 'What amazed the brothers at the meal?',
        options: [
          'Rich wealth',
          'Seating by birth order',
          'Strong guards',
          'Silent service'
        ],
        correctAnswer: 'Seating by birth order',
        explanation: 'Genesis 43:33 (ESV): "And they sat before him, the firstborn according to his birthright and the youngest according to his youth. And the men looked at one another in amazement." Order reveals.'
      }
    ],
    key_verse: 'Genesis 43:14',
    key_verse_text: "‘May God Almighty grant you mercy before the man, and may he send back your other brother and Benjamin. And as for me, if I am bereaved of my children, I am bereaved.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-44',
    bookId: 'genesis',
    chapter: 44,
    title: 'Joseph Tests His Brothers',
    questions: [
      {
        id: 'genesis44-q1',
        question: 'What did Joseph hide in Benjamin’s sack?',
        options: [
          'Rich gold',
          'A silver cup',
          'Strong jewels',
          'Silent coins'
        ],
        correctAnswer: 'A silver cup',
        explanation: 'Genesis 44:2 (ESV): "‘and put my cup, the silver cup, in the mouth of the sack of the youngest, with his money for the grain.’ And he did as Joseph told him." Trap sets.'
      },
      {
        id: 'genesis44-q2',
        question: 'What did Joseph’s steward accuse the brothers of?',
        options: [
          'Stealing riches',
          'Stealing the cup',
          'Breaking strength',
          'Silent theft'
        ],
        correctAnswer: 'Stealing the cup',
        explanation: 'Genesis 44:6-7 (ESV): "When he overtook them, he spoke to them these words. They said to him, ‘Why does my lord speak such words as these? Far be it from your servants to do such a thing!’" Accusation challenges.'
      },
      {
        id: 'genesis44-q3',
        question: 'Who offered himself as a slave for Benjamin?',
        options: [
          'Rich Reuben',
          'Judah',
          'Strong Levi',
          'Silent Simeon'
        ],
        correctAnswer: 'Judah',
        explanation: 'Genesis 44:33 (ESV): "‘Now therefore, please let your servant remain instead of the boy as a servant to my lord, and let the boy go back with his brothers.’" Sacrifice pleads.'
      },
      {
        id: 'genesis44-q4',
        question: 'What did the brothers fear losing?',
        options: [
          'Rich lands',
          'Benjamin to slavery',
          'Strong flocks',
          'Silent hope'
        ],
        correctAnswer: 'Benjamin to slavery',
        explanation: 'Genesis 44:17 (ESV): "But he said, ‘Far be it from me that I should do so! Only the man in whose hand the cup was found shall be my servant. But as for you, go up in peace to your father.’" Threat looms.'
      },
      {
        id: 'genesis44-q5',
        question: 'What did Judah recount to Joseph?',
        options: [
          'Rich promises',
          'Their father’s grief',
          'Strong battles',
          'Silent vows'
        ],
        correctAnswer: 'Their father’s grief',
        explanation: 'Genesis 44:30-31 (ESV): "‘Now therefore, as soon as I come to your servant my father, and the boy is not with us, then, as his life is bound up in the boy’s life, as soon as he sees that the boy is not with us, he will die, and your servants will bring down the gray hairs of your servant our father with sorrow to Sheol.’" Love speaks.'
      }
    ],
    key_verse: 'Genesis 44:33',
    key_verse_text: "‘Now therefore, please let your servant remain instead of the boy as a servant to my lord, and let the boy go back with his brothers.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-45',
    bookId: 'genesis',
    chapter: 45,
    title: 'Joseph Reveals Himself',
    questions: [
      {
        id: 'genesis45-q1',
        question: 'What did Joseph do when he revealed himself?',
        options: [
          'Gave riches',
          'Wept aloud',
          'Grew strong',
          'Fell silent'
        ],
        correctAnswer: 'Wept aloud',
        explanation: 'Genesis 45:2 (ESV): "And he wept aloud, so that the Egyptians heard it, and the household of Pharaoh heard it." Emotion overflows.'
      },
      {
        id: 'genesis45-q2',
        question: 'Who did Joseph say sent him to Egypt?',
        options: [
          'Rich Pharaoh',
          'God',
          'Strong brothers',
          'Silent fate'
        ],
        correctAnswer: 'God',
        explanation: 'Genesis 45:7-8 (ESV): "‘And God sent me before you to preserve for you a remnant on earth, and to keep alive for you many survivors. So it was not you who sent me here, but God. He has made me a father to Pharaoh, and lord of all his house and ruler over all the land of Egypt.’" Providence rules.'
      },
      {
        id: 'genesis45-q3',
        question: 'Where did Joseph invite his family to live?',
        options: [
          'Rich Canaan',
          'Goshen',
          'Strong Memphis',
          'Silent On'
        ],
        correctAnswer: 'Goshen',
        explanation: 'Genesis 45:10 (ESV): "‘You shall dwell in the land of Goshen, and you shall be near me, you and your children and your children’s children, and your flocks, your herds, and all that you have.’" Refuge offers.'
      },
      {
        id: 'genesis45-q4',
        question: 'What did Pharaoh give Joseph’s brothers?',
        options: [
          'Rich gold',
          'Carts and provisions',
          'Strong horses',
          'Silent lands'
        ],
        correctAnswer: 'Carts and provisions',
        explanation: 'Genesis 45:21 (ESV): "The sons of Israel did so: and Joseph gave them wagons, according to the command of Pharaoh, and gave them provisions for the journey." Generosity aids.'
      },
      {
        id: 'genesis45-q5',
        question: 'What did Joseph warn his brothers not to do?',
        options: [
          'Seek riches',
          'Quarrel on the way',
          'Grow strong',
          'Stay silent'
        ],
        correctAnswer: 'Quarrel on the way',
        explanation: 'Genesis 45:24 (ESV): "Then he sent his brothers away, and as they departed, he said to them, ‘Do not quarrel on the way.’" Unity urges.'
      }
    ],
    key_verse: 'Genesis 45:8',
    key_verse_text: "‘So it was not you who sent me here, but God. He has made me a father to Pharaoh, and lord of all his house and ruler over all the land of Egypt.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-46',
    bookId: 'genesis',
    chapter: 46,
    title: 'Jacob’s Family Moves to Egypt',
    questions: [
      {
        id: 'genesis46-q1',
        question: 'Where did God speak to Jacob in a vision?',
        options: [
          'Rich Canaan',
          'Beersheba',
          'Strong Haran',
          'Silent Bethel'
        ],
        correctAnswer: 'Beersheba',
        explanation: 'Genesis 46:2 (ESV): "And God spoke to Israel in visions of the night and said, ‘Jacob, Jacob.’ And he said, ‘Here I am.’" Vision assures.'
      },
      {
        id: 'genesis46-q2',
        question: 'What did God promise Jacob in Egypt?',
        options: [
          'Rich wealth',
          'A great nation',
          'Strong armies',
          'Silent return'
        ],
        correctAnswer: 'A great nation',
        explanation: 'Genesis 46:3 (ESV): "Then he said, ‘I am God, the God of your father. Do not be afraid to go down to Egypt, for there I will make you into a great nation.’" Covenant reaffirms.'
      },
      {
        id: 'genesis46-q3',
        question: 'How many of Jacob’s descendants went to Egypt?',
        options: [
          'Rich fifty',
          'Seventy',
          'Strong eighty',
          'Silent sixty'
        ],
        correctAnswer: 'Seventy',
        explanation: 'Genesis 46:27 (ESV): "And the sons of Joseph, who were born to him in Egypt, were two. All the persons of the house of Jacob who came into Egypt were seventy." Count totals.'
      },
      {
        id: 'genesis46-q4',
        question: 'Where did Jacob settle in Egypt?',
        options: [
          'Rich Memphis',
          'Goshen',
          'Strong On',
          'Silent Rameses'
        ],
        correctAnswer: 'Goshen',
        explanation: 'Genesis 46:34 (ESV): "you shall say, ‘Your servants have been keepers of livestock from our youth even until now, both we and our fathers,’ in order that you may dwell in the land of Goshen, for every shepherd is an abomination to the Egyptians." Land settles.'
      },
      {
        id: 'genesis46-q5',
        question: 'Who presented Jacob to Pharaoh?',
        options: [
          'Rich Judah',
          'Joseph',
          'Strong Reuben',
          'Silent Benjamin'
        ],
        correctAnswer: 'Joseph',
        explanation: 'Genesis 46:31 (ESV): "Joseph said to his brothers and to his father’s household, ‘I will go up and tell Pharaoh and will say to him, “My brothers and my father’s household, who were in the land of Canaan, have come to me.”’" Honor introduces.'
      }
    ],
    key_verse: 'Genesis 46:3',
    key_verse_text: "Then he said, ‘I am God, the God of your father. Do not be afraid to go down to Egypt, for there I will make you into a great nation.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-47',
    bookId: 'genesis',
    chapter: 47,
    title: 'Jacob’s Family in Egypt',
    questions: [
      {
        id: 'genesis47-q1',
        question: 'What did Jacob tell Pharaoh about his life?',
        options: [
          'Rich with wealth',
          'Few and evil years',
          'Strong with sons',
          'Silent with peace'
        ],
        correctAnswer: 'Few and evil years',
        explanation: 'Genesis 47:9 (ESV): "And Jacob said to Pharaoh, ‘The days of the years of my sojourning are 130 years. Few and evil have been the days of the years of my life, and they have not attained to the days of the years of the life of my fathers in the days of their sojourning.’" Reflection humbles.'
      },
      {
        id: 'genesis47-q2',
        question: 'What did Joseph give his family in Egypt?',
        options: [
          'Rich gold',
          'Land in Rameses',
          'Strong camels',
          'Silent tents'
        ],
        correctAnswer: 'Land in Rameses',
        explanation: 'Genesis 47:11 (ESV): "Then Joseph settled his father and his brothers and gave them a possession in the land of Egypt, in the best of the land, in the land of Rameses, as Pharaoh had commanded." Provision secures.'
      },
      {
        id: 'genesis47-q3',
        question: 'How did Joseph manage Egypt’s famine?',
        options: [
          'Sold rich treasures',
          'Sold grain for money, then land',
          'Built strong storehouses',
          'Kept silent stores'
        ],
        correctAnswer: 'Sold grain for money, then land',
        explanation: 'Genesis 47:14, 20 (ESV): "And Joseph gathered up all the money that was found in the land of Egypt and in the land of Canaan, for the grain that they bought. ... So Joseph bought all the land of Egypt for Pharaoh, for all the Egyptians sold their fields, because the famine was severe on them." Strategy sustains.'
      },
      {
        id: 'genesis47-q4',
        question: 'What did the Egyptians give for food?',
        options: [
          'Rich jewels',
          'Their land and themselves',
          'Strong livestock',
          'Silent offerings'
        ],
        correctAnswer: 'Their land and themselves',
        explanation: 'Genesis 47:19 (ESV): "‘Why should we die before your eyes, both we and our land? Buy us and our land for food, and we with our land will be servants to Pharaoh. And give us seed that we may live and not die, and that the land may not be desolate.’" Desperation yields.'
      },
      {
        id: 'genesis47-q5',
        question: 'What did Jacob ask Joseph to swear?',
        options: [
          'Rich inheritance',
          'Bury him in Canaan',
          'Strong leadership',
          'Silent loyalty'
        ],
        correctAnswer: 'Bury him in Canaan',
        explanation: 'Genesis 47:29-30 (ESV): "And when the time drew near that Israel must die, he called his son Joseph and said to him, ‘If now I have found favor in your sight, put your hand under my thigh and promise to deal kindly and truly with me. Do not bury me in Egypt, but let me lie with my fathers. Carry me out of Egypt and bury me in their burying place.’ He answered, ‘I will do as you have said.’" Oath binds.'
      }
    ],
    key_verse: 'Genesis 47:27',
    key_verse_text: "Thus Israel settled in the land of Egypt, in the land of Goshen. And they gained possessions in it, and were fruitful and multiplied greatly.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-48',
    bookId: 'genesis',
    chapter: 48,
    title: 'Jacob Blesses Joseph’s Sons',
    questions: [
      {
        id: 'genesis48-q1',
        question: 'Who did Joseph bring to Jacob to bless?',
        options: [
          'Rich Judah',
          'Manasseh and Ephraim',
          'Strong Reuben',
          'Silent Benjamin'
        ],
        correctAnswer: 'Manasseh and Ephraim',
        explanation: 'Genesis 48:1 (ESV): "After this, Joseph was told, ‘Behold, your father is ill.’ So he took with him his two sons, Manasseh and Ephraim." Family gathers.'
      },
      {
        id: 'genesis48-q2',
        question: 'What did Jacob claim about Joseph’s sons?',
        options: [
          'Rich heirs',
          'They are mine like Reuben',
          'Strong warriors',
          'Silent sons'
        ],
        correctAnswer: 'They are mine like Reuben',
        explanation: 'Genesis 48:5 (ESV): "‘And now your two sons, who were born to you in the land of Egypt before I came to you in Egypt, are mine; Ephraim and Manasseh shall be mine, as Reuben and Simeon are.’" Adoption elevates.'
      },
      {
        id: 'genesis48-q3',
        question: 'Who received the greater blessing?',
        options: [
          'Rich Manasseh',
          'Ephraim, the younger',
          'Strong Judah',
          'Silent Simeon'
        ],
        correctAnswer: 'Ephraim, the younger',
        explanation: 'Genesis 48:14 (ESV): "And Israel stretched out his right hand and laid it on the head of Ephraim, who was the younger, and his left hand on the head of Manasseh, crossing his hands, for Manasseh was the firstborn." Blessing reverses.'
      },
      {
        id: 'genesis48-q4',
        question: 'What did Jacob promise Joseph’s sons?',
        options: [
          'Rich gold',
          'Land and increase',
          'Strong armies',
          'Silent peace'
        ],
        correctAnswer: 'Land and increase',
        explanation: 'Genesis 48:16 (ESV): "‘the angel who has redeemed me from all evil, bless the boys; and in them let my name be carried on, and the name of my fathers Abraham and Isaac; and let them grow into a multitude in the midst of the earth.’" Legacy extends.'
      },
      {
        id: 'genesis48-q5',
        question: 'What did Jacob give Joseph specifically?',
        options: [
          'Rich treasures',
          'One mountain slope',
          'Strong flocks',
          'Silent fields'
        ],
        correctAnswer: 'One mountain slope',
        explanation: 'Genesis 48:22 (ESV): "‘Moreover, I have given to you rather than to your brothers one mountain slope that I took from the hand of the Amorites with my sword and with my bow.’" Gift distinguishes.'
      }
    ],
    key_verse: 'Genesis 48:16',
    key_verse_text: "‘the angel who has redeemed me from all evil, bless the boys; and in them let my name be carried on, and the name of my fathers Abraham and Isaac; and let them grow into a multitude in the midst of the earth.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-49',
    bookId: 'genesis',
    chapter: 49,
    title: 'Jacob Blesses His Sons',
    questions: [
      {
        id: 'genesis49-q1',
        question: 'What did Jacob call his sons to do?',
        options: [
          'Seek riches',
          'Hear their future',
          'Grow strong',
          'Stay silent'
        ],
        correctAnswer: 'Hear their future',
        explanation: 'Genesis 49:1 (ESV): "Then Jacob called his sons and said, ‘Gather yourselves together, that I may tell you what shall happen to you in days to come.’" Prophecy summons.'
      },
      {
        id: 'genesis49-q2',
        question: 'Why did Reuben lose his preeminence?',
        options: [
          'Lost riches',
          'Defiled his father’s bed',
          'Lacked strength',
          'Kept silent'
        ],
        correctAnswer: 'Defiled his father’s bed',
        explanation: 'Genesis 49:4 (ESV): "‘Unstable as water, you shall not have preeminence, because you went up to your father’s bed; then you defiled it—he went up to my couch!’" Sin demotes.'
      },
      {
        id: 'genesis49-q3',
        question: 'What was Judah promised?',
        options: [
          'Rich wealth',
          'A ruler’s scepter',
          'Strong armies',
          'Silent lands'
        ],
        correctAnswer: 'A ruler’s scepter',
        explanation: 'Genesis 49:10 (ESV): "‘The scepter shall not depart from Judah, nor the ruler’s staff from between his feet, until tribute comes to him; and to him shall be the obedience of the peoples.’" Dominion foretold.'
      },
      {
        id: 'genesis49-q4',
        question: 'What was Joseph compared to?',
        options: [
          'Rich vine',
          'A fruitful bough',
          'Strong lion',
          'Silent deer'
        ],
        correctAnswer: 'A fruitful bough',
        explanation: 'Genesis 49:22 (ESV): "‘Joseph is a fruitful bough, a fruitful bough by a spring; his branches run over the wall.’" Blessing prospers.'
      },
      {
        id: 'genesis49-q5',
        question: 'Where did Jacob ask to be buried?',
        options: [
          'Rich Egypt',
          'Cave of Machpelah',
          'Strong Goshen',
          'Silent Bethel'
        ],
        correctAnswer: 'Cave of Machpelah',
        explanation: 'Genesis 49:29-30 (ESV): "Then he commanded them and said to them, ‘I am to be gathered to my people; bury me with my fathers in the cave that is in the field of Ephron the Hittite, in the cave that is in the field of Machpelah to the east of Mamre, in the land of Canaan, which Abraham bought with the field from Ephron the Hittite to possess as a burying place.’" Rest requests.'
      }
    ],
    key_verse: 'Genesis 49:10',
    key_verse_text: "‘The scepter shall not depart from Judah, nor the ruler’s staff from between his feet, until tribute comes to him; and to him shall be the obedience of the peoples.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-50',
    bookId: 'genesis',
    chapter: 50,
    title: 'Jacob’s Burial and Joseph’s Death',
    questions: [
      {
        id: 'genesis50-q1',
        question: 'What did Joseph do when Jacob died?',
        options: [
          'Sought riches',
          'Wept and kissed him',
          'Grew strong',
          'Fell silent'
        ],
        correctAnswer: 'Wept and kissed him',
        explanation: 'Genesis 50:1 (ESV): "Then Joseph fell on his father’s face and wept over him and kissed him." Grief mourns.'
      },
      {
        id: 'genesis50-q2',
        question: 'Where was Jacob buried?',
        options: [
          'Rich Rameses',
          'Cave of Machpelah',
          'Strong Goshen',
          'Silent On'
        ],
        correctAnswer: 'Cave of Machpelah',
        explanation: 'Genesis 50:13 (ESV): "for his sons carried him to the land of Canaan and buried him in the cave of the field of Machpelah to the east of Mamre, which Abraham bought with the field from Ephron the Hittite as a possession for a burying place." Tomb honors.'
      },
      {
        id: 'genesis50-q3',
        question: 'What did Joseph’s brothers fear after Jacob’s death?',
        options: [
          'Loss of riches',
          'Joseph’s revenge',
          'Loss of strength',
          'Silent exile'
        ],
        correctAnswer: 'Joseph’s revenge',
        explanation: 'Genesis 50:15 (ESV): "When Joseph’s brothers saw that their father was dead, they said, ‘It may be that Joseph will hate us and pay us back for all the evil that we did to him.’" Fear doubts.'
      },
      {
        id: 'genesis50-q4',
        question: 'What did Joseph promise his brothers?',
        options: [
          'Rich gifts',
          'To provide and protect',
          'Strong leadership',
          'Silent peace'
        ],
        correctAnswer: 'To provide and protect',
        explanation: 'Genesis 50:21 (ESV): "‘So do not fear; I will provide for you and your little ones.’ Thus he comforted them and spoke kindly to them." Assurance comforts.'
      },
      {
        id: 'genesis50-q5',
        question: 'How old was Joseph when he died?',
        options: [
          'Rich ninety years',
          'One hundred ten years',
          'Strong one hundred years',
          'Silent eighty years'
        ],
        correctAnswer: 'One hundred ten years',
        explanation: 'Genesis 50:26 (ESV): "So Joseph died, being 110 years old. They embalmed him, and he was put in a coffin in Egypt." Life ends.'
      }
    ],
    key_verse: 'Genesis 50:20',
    key_verse_text: "‘As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive, as they are today.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  }
];