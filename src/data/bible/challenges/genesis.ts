
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis16-q1',
        question: 'Who was Hagar?',
        options: ['Abram\'s wife', 'Sarai\'s Egyptian servant', 'Lot\'s daughter', 'A prophet'],
        correctAnswer: 'Sarai\'s Egyptian servant',
        explanation: 'Genesis 16:1: Sarai had an Egyptian servant named Hagar.',
        difficulty: 'easy'
      },
      {
        id: 'genesis16-q2',
        question: 'Who gave Hagar to Abram as a wife?',
        options: ['Pharaoh', 'Sarai', 'Lot', 'God'],
        correctAnswer: 'Sarai',
        explanation: 'Genesis 16:3: Sarai gave Hagar to Abram as a wife.',
        difficulty: 'easy'
      },
      {
        id: 'genesis16-q3',
        question: 'What was the name of Hagar\'s son?',
        options: ['Isaac', 'Ishmael', 'Jacob', 'Esau'],
        correctAnswer: 'Ishmael',
        explanation: 'Genesis 16:11: The angel told Hagar to name her son Ishmael.',
        difficulty: 'easy'
      },
      {
        id: 'genesis16-q4',
        question: 'Who found Hagar in the wilderness?',
        options: ['Abram', 'The angel of the LORD', 'Sarai', 'A traveler'],
        correctAnswer: 'The angel of the LORD',
        explanation: 'Genesis 16:7: The angel of the LORD found her by a spring.',
        difficulty: 'easy'
      },
      {
        id: 'genesis16-q5',
        question: 'Why did Hagar run away?',
        options: ['She was lost', 'Sarai treated her harshly', 'She wanted adventure', 'Abram sent her away'],
        correctAnswer: 'Sarai treated her harshly',
        explanation: 'Genesis 16:6: Sarai dealt harshly with her, and she fled.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis16-q6',
        question: 'Why did Sarai give Hagar to Abram?',
        options: ['As a gift', 'So she could have children through her', 'To please Pharaoh', 'God commanded it'],
        correctAnswer: 'So she could have children through her',
        explanation: 'Genesis 16:2: Sarai hoped to build a family through her servant.',
        difficulty: 'medium'
      },
      {
        id: 'genesis16-q7',
        question: 'How did Hagar act toward Sarai after becoming pregnant?',
        options: ['Respectful', 'She looked on Sarai with contempt', 'Fearful', 'Grateful'],
        correctAnswer: 'She looked on Sarai with contempt',
        explanation: 'Genesis 16:4: When Hagar conceived, she looked on Sarai with contempt.',
        difficulty: 'medium'
      },
      {
        id: 'genesis16-q8',
        question: 'What did the angel tell Hagar to do?',
        options: ['Go to Egypt', 'Return and submit to Sarai', 'Stay in the wilderness', 'Go to Canaan'],
        correctAnswer: 'Return and submit to Sarai',
        explanation: 'Genesis 16:9: The angel told her to return and submit to her mistress.',
        difficulty: 'medium'
      },
      {
        id: 'genesis16-q9',
        question: 'What name did Hagar give to God?',
        options: ['El Shaddai', 'El Roi (God who sees me)', 'El Elyon', 'Yahweh'],
        correctAnswer: 'El Roi (God who sees me)',
        explanation: 'Genesis 16:13: She called him "You are a God of seeing."',
        difficulty: 'medium'
      },
      {
        id: 'genesis16-q10',
        question: 'How old was Abram when Ishmael was born?',
        options: ['75 years', '86 years', '99 years', '100 years'],
        correctAnswer: '86 years',
        explanation: 'Genesis 16:16: Abram was 86 years old when Hagar bore Ishmael.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis16-q11',
        question: 'What does the name Ishmael mean?',
        options: ['God provides', 'God hears', 'God sees', 'God blesses'],
        correctAnswer: 'God hears',
        explanation: 'Genesis 16:11: "You shall call his name Ishmael, because the LORD has listened to your affliction."',
        difficulty: 'hard'
      },
      {
        id: 'genesis16-q12',
        question: 'What was prophesied about Ishmael\'s character?',
        options: ['He would be peaceful', 'He would be a wild donkey of a man', 'He would be wealthy', 'He would be a great priest'],
        correctAnswer: 'He would be a wild donkey of a man',
        explanation: 'Genesis 16:12: "He shall be a wild donkey of a man, his hand against everyone."',
        difficulty: 'hard'
      },
      {
        id: 'genesis16-q13',
        question: 'Where was the spring where the angel found Hagar?',
        options: ['Near Beersheba', 'On the way to Shur', 'By the Jordan', 'Near Hebron'],
        correctAnswer: 'On the way to Shur',
        explanation: 'Genesis 16:7: The spring was on the way to Shur.',
        difficulty: 'hard'
      },
      {
        id: 'genesis16-q14',
        question: 'What was the well named after this encounter?',
        options: ['Beer-lahai-roi', 'Beersheba', 'Beer-sheba', 'En-gedi'],
        correctAnswer: 'Beer-lahai-roi',
        explanation: 'Genesis 16:14: The well was called Beer-lahai-roi.',
        difficulty: 'hard'
      },
      {
        id: 'genesis16-q15',
        question: 'How long had Abram been in Canaan when Sarai gave Hagar to him?',
        options: ['5 years', '10 years', '15 years', '20 years'],
        correctAnswer: '10 years',
        explanation: 'Genesis 16:3: After Abram had lived 10 years in Canaan.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 16:13',
    key_verse_text: "So she called the name of the Lord who spoke to her, 'You are a God of seeing.'",
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis17-q1',
        question: 'What new name did God give Abram?',
        options: ['Isaac', 'Abraham', 'Israel', 'Jacob'],
        correctAnswer: 'Abraham',
        explanation: 'Genesis 17:5: God changed Abram\'s name to Abraham.',
        difficulty: 'easy'
      },
      {
        id: 'genesis17-q2',
        question: 'What new name did God give Sarai?',
        options: ['Rachel', 'Sarah', 'Rebekah', 'Leah'],
        correctAnswer: 'Sarah',
        explanation: 'Genesis 17:15: God changed Sarai\'s name to Sarah.',
        difficulty: 'easy'
      },
      {
        id: 'genesis17-q3',
        question: 'What was the sign of God\'s covenant with Abraham?',
        options: ['Sacrifice', 'Circumcision', 'A rainbow', 'An altar'],
        correctAnswer: 'Circumcision',
        explanation: 'Genesis 17:11: Circumcision was the sign of the covenant.',
        difficulty: 'easy'
      },
      {
        id: 'genesis17-q4',
        question: 'What name did God tell Abraham to give his son?',
        options: ['Ishmael', 'Isaac', 'Jacob', 'Esau'],
        correctAnswer: 'Isaac',
        explanation: 'Genesis 17:19: "You shall call his name Isaac."',
        difficulty: 'easy'
      },
      {
        id: 'genesis17-q5',
        question: 'Did Abraham obey God regarding circumcision?',
        options: ['No', 'Yes, that very day', 'He delayed', 'He refused'],
        correctAnswer: 'Yes, that very day',
        explanation: 'Genesis 17:23: Abraham circumcised the males of his household that very day.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis17-q6',
        question: 'How old was Abram when God appeared and gave this covenant?',
        options: ['75 years old', '86 years old', '99 years old', '100 years old'],
        correctAnswer: '99 years old',
        explanation: 'Genesis 17:1: Abram was 99 years old when the LORD appeared.',
        difficulty: 'medium'
      },
      {
        id: 'genesis17-q7',
        question: 'What does Abraham mean?',
        options: ['High father', 'Father of a multitude', 'Blessed one', 'God\'s servant'],
        correctAnswer: 'Father of a multitude',
        explanation: 'Genesis 17:5: "for I have made you the father of a multitude of nations."',
        difficulty: 'medium'
      },
      {
        id: 'genesis17-q8',
        question: 'What did Abraham do when God said Sarah would have a son?',
        options: ['Praised God', 'Fell on his face and laughed', 'Wept', 'Doubted silently'],
        correctAnswer: 'Fell on his face and laughed',
        explanation: 'Genesis 17:17: Abraham fell on his face and laughed.',
        difficulty: 'medium'
      },
      {
        id: 'genesis17-q9',
        question: 'At what age should males be circumcised according to this covenant?',
        options: ['At birth', '8 days old', '1 year old', 'At adulthood'],
        correctAnswer: '8 days old',
        explanation: 'Genesis 17:12: Every male shall be circumcised at 8 days old.',
        difficulty: 'medium'
      },
      {
        id: 'genesis17-q10',
        question: 'What did God say would happen to one who was not circumcised?',
        options: ['He would be blessed', 'Cut off from his people', 'Made a slave', 'Nothing'],
        correctAnswer: 'Cut off from his people',
        explanation: 'Genesis 17:14: "that person shall be cut off from his people."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis17-q11',
        question: 'What name did God reveal Himself by to Abraham?',
        options: ['Yahweh', 'El Shaddai (God Almighty)', 'El Elyon', 'Adonai'],
        correctAnswer: 'El Shaddai (God Almighty)',
        explanation: 'Genesis 17:1: "I am God Almighty (El Shaddai)."',
        difficulty: 'hard'
      },
      {
        id: 'genesis17-q12',
        question: 'How many nations would come from Abraham according to this chapter?',
        options: ['One great nation', 'A multitude of nations', 'Twelve tribes', 'Seven kingdoms'],
        correctAnswer: 'A multitude of nations',
        explanation: 'Genesis 17:4-5: "You shall be the father of a multitude of nations."',
        difficulty: 'hard'
      },
      {
        id: 'genesis17-q13',
        question: 'How old was Ishmael when he was circumcised?',
        options: ['8 days old', '10 years old', '13 years old', '15 years old'],
        correctAnswer: '13 years old',
        explanation: 'Genesis 17:25: Ishmael was 13 years old when circumcised.',
        difficulty: 'hard'
      },
      {
        id: 'genesis17-q14',
        question: 'What did Abraham ask God regarding Ishmael?',
        options: ['Make him wealthy', 'Oh that Ishmael might live before you!', 'Send him away', 'Give him land'],
        correctAnswer: 'Oh that Ishmael might live before you!',
        explanation: 'Genesis 17:18: Abraham pleaded for Ishmael to live before God.',
        difficulty: 'hard'
      },
      {
        id: 'genesis17-q15',
        question: 'How many princes would come from Ishmael according to this covenant?',
        options: ['Seven', 'Ten', 'Twelve', 'Twenty'],
        correctAnswer: 'Twelve',
        explanation: 'Genesis 17:20: "twelve princes shall he father."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 17:5',
    key_verse_text: "'No longer shall your name be called Abram, but your name shall be Abraham, for I have made you the father of a multitude of nations.'",
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis18-q1',
        question: 'How many men appeared to Abraham at Mamre?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 'Three',
        explanation: 'Genesis 18:2: Three men stood before Abraham.',
        difficulty: 'easy'
      },
      {
        id: 'genesis18-q2',
        question: 'What did Sarah do when she heard she would have a son?',
        options: ['Cried', 'Laughed', 'Prayed', 'Ran away'],
        correctAnswer: 'Laughed',
        explanation: 'Genesis 18:12: Sarah laughed to herself.',
        difficulty: 'easy'
      },
      {
        id: 'genesis18-q3',
        question: 'What famous question did the LORD ask about His power?',
        options: ['Is anything too expensive?', 'Is anything too hard for the LORD?', 'Is anything too far?', 'Is anything too late?'],
        correctAnswer: 'Is anything too hard for the LORD?',
        explanation: 'Genesis 18:14: "Is anything too hard for the LORD?"',
        difficulty: 'easy'
      },
      {
        id: 'genesis18-q4',
        question: 'Which cities was the LORD going to examine for sin?',
        options: ['Babylon and Nineveh', 'Sodom and Gomorrah', 'Jerusalem and Jericho', 'Egypt and Canaan'],
        correctAnswer: 'Sodom and Gomorrah',
        explanation: 'Genesis 18:20: The LORD spoke about Sodom and Gomorrah\'s sin.',
        difficulty: 'easy'
      },
      {
        id: 'genesis18-q5',
        question: 'Did Abraham intercede for the cities?',
        options: ['No', 'Yes, he bargained with God', 'He ignored it', 'He celebrated'],
        correctAnswer: 'Yes, he bargained with God',
        explanation: 'Genesis 18:23-32: Abraham negotiated with God about sparing the righteous.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis18-q6',
        question: 'Where was Abraham sitting when the visitors appeared?',
        options: ['In his tent', 'At the door of his tent', 'By a well', 'Under a tree'],
        correctAnswer: 'At the door of his tent',
        explanation: 'Genesis 18:1: Abraham sat at the tent door in the heat of the day.',
        difficulty: 'medium'
      },
      {
        id: 'genesis18-q7',
        question: 'What food did Abraham prepare for the visitors?',
        options: ['Fish and bread', 'Lamb only', 'Calf, bread, curds and milk', 'Vegetables'],
        correctAnswer: 'Calf, bread, curds and milk',
        explanation: 'Genesis 18:6-8: Abraham prepared a generous meal including a tender calf.',
        difficulty: 'medium'
      },
      {
        id: 'genesis18-q8',
        question: 'What was the starting number Abraham asked about for sparing Sodom?',
        options: ['Ten', 'Thirty', 'Fifty', 'One hundred'],
        correctAnswer: 'Fifty',
        explanation: 'Genesis 18:24: Abraham started by asking about fifty righteous people.',
        difficulty: 'medium'
      },
      {
        id: 'genesis18-q9',
        question: 'What was the final number Abraham negotiated down to?',
        options: ['Five', 'Ten', 'Twenty', 'Thirty'],
        correctAnswer: 'Ten',
        explanation: 'Genesis 18:32: Abraham stopped at ten righteous people.',
        difficulty: 'medium'
      },
      {
        id: 'genesis18-q10',
        question: 'Did Sarah deny laughing?',
        options: ['No, she admitted it', 'Yes, because she was afraid', 'She stayed silent', 'She laughed again'],
        correctAnswer: 'Yes, because she was afraid',
        explanation: 'Genesis 18:15: Sarah denied it because she was afraid.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis18-q11',
        question: 'Why did the LORD say He would not hide His plans from Abraham?',
        options: ['Abraham was rich', 'Abraham would become a great nation and all nations blessed through him', 'Abraham was old', 'Abraham was a prophet'],
        correctAnswer: 'Abraham would become a great nation and all nations blessed through him',
        explanation: 'Genesis 18:17-18: God shared His plans because of His covenant with Abraham.',
        difficulty: 'hard'
      },
      {
        id: 'genesis18-q12',
        question: 'What phrase describes the sin of Sodom in this chapter?',
        options: ['Minor offense', 'Very grave', 'Small matter', 'Forgivable'],
        correctAnswer: 'Very grave',
        explanation: 'Genesis 18:20: "their sin is very grave."',
        difficulty: 'hard'
      },
      {
        id: 'genesis18-q13',
        question: 'Where were the oaks where Abraham was camping?',
        options: ['Bethel', 'Mamre', 'Beersheba', 'Hebron'],
        correctAnswer: 'Mamre',
        explanation: 'Genesis 18:1: The LORD appeared at the oaks of Mamre.',
        difficulty: 'hard'
      },
      {
        id: 'genesis18-q14',
        question: 'What did Abraham call himself when speaking to the LORD?',
        options: ['A servant', 'Dust and ashes', 'A sinner', 'A friend'],
        correctAnswer: 'Dust and ashes',
        explanation: 'Genesis 18:27: "I who am but dust and ashes."',
        difficulty: 'hard'
      },
      {
        id: 'genesis18-q15',
        question: 'When would the LORD return for Sarah to have her son?',
        options: ['In a month', 'About this time next year', 'In three years', 'Immediately'],
        correctAnswer: 'About this time next year',
        explanation: 'Genesis 18:14: "At the appointed time I will return to you, about this time next year."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 18:14',
    key_verse_text: "'Is anything too hard for the Lord? At the appointed time I will return to you, about this time next year, and Sarah shall have a son.'",
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis19-q1',
        question: 'Who visited Lot in Sodom?',
        options: ['Abraham', 'Two angels', 'Three men', 'Pharaoh'],
        correctAnswer: 'Two angels',
        explanation: 'Genesis 19:1: The two angels came to Sodom in the evening.',
        difficulty: 'easy'
      },
      {
        id: 'genesis19-q2',
        question: 'How was Sodom destroyed?',
        options: ['By a flood', 'By sulfur and fire', 'By an earthquake', 'By an army'],
        correctAnswer: 'By sulfur and fire',
        explanation: 'Genesis 19:24: The LORD rained sulfur and fire from heaven.',
        difficulty: 'easy'
      },
      {
        id: 'genesis19-q3',
        question: 'What happened to Lot\'s wife?',
        options: ['She escaped safely', 'She became a pillar of salt', 'She went back to Sodom', 'She died in the fire'],
        correctAnswer: 'She became a pillar of salt',
        explanation: 'Genesis 19:26: Lot\'s wife looked back and became a pillar of salt.',
        difficulty: 'easy'
      },
      {
        id: 'genesis19-q4',
        question: 'Where did the angels tell Lot to flee?',
        options: ['To Egypt', 'To the hills', 'To Hebron', 'To the Jordan'],
        correctAnswer: 'To the hills',
        explanation: 'Genesis 19:17: "Escape to the hills, lest you be swept away."',
        difficulty: 'easy'
      },
      {
        id: 'genesis19-q5',
        question: 'What small city did Lot ask to flee to instead of the hills?',
        options: ['Beersheba', 'Zoar', 'Bethel', 'Hebron'],
        correctAnswer: 'Zoar',
        explanation: 'Genesis 19:20-22: Lot asked to flee to the small city of Zoar.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis19-q6',
        question: 'What did the men of Sodom demand from Lot?',
        options: ['Money', 'Food', 'To bring out his guests', 'His daughters'],
        correctAnswer: 'To bring out his guests',
        explanation: 'Genesis 19:5: They demanded Lot bring out the visitors.',
        difficulty: 'medium'
      },
      {
        id: 'genesis19-q7',
        question: 'What did the angels do to the men of Sodom?',
        options: ['Killed them', 'Struck them with blindness', 'Sent them away', 'Ignored them'],
        correctAnswer: 'Struck them with blindness',
        explanation: 'Genesis 19:11: The angels struck the men with blindness.',
        difficulty: 'medium'
      },
      {
        id: 'genesis19-q8',
        question: 'How did Lot\'s sons-in-law react to his warning?',
        options: ['They fled immediately', 'They thought he was joking', 'They prayed', 'They fought back'],
        correctAnswer: 'They thought he was joking',
        explanation: 'Genesis 19:14: Lot seemed to be jesting to his sons-in-law.',
        difficulty: 'medium'
      },
      {
        id: 'genesis19-q9',
        question: 'Why did Lot hesitate to leave?',
        options: ['He was sick', 'He wanted to save his wealth', 'He lingered', 'He was afraid'],
        correctAnswer: 'He lingered',
        explanation: 'Genesis 19:16: "But he lingered." The angels had to seize his hand.',
        difficulty: 'medium'
      },
      {
        id: 'genesis19-q10',
        question: 'Where did Lot end up living after leaving Zoar?',
        options: ['In a city', 'In a cave', 'In Hebron', 'In Egypt'],
        correctAnswer: 'In a cave',
        explanation: 'Genesis 19:30: Lot lived in a cave with his two daughters.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis19-q11',
        question: 'Who were the ancestors of the Moabites and Ammonites?',
        options: ['Abraham\'s sons', 'Lot\'s sons by his daughters', 'Esau\'s sons', 'Ishmael\'s sons'],
        correctAnswer: 'Lot\'s sons by his daughters',
        explanation: 'Genesis 19:37-38: Moab and Ben-ammi, sons of Lot, fathered these nations.',
        difficulty: 'hard'
      },
      {
        id: 'genesis19-q12',
        question: 'What time of day did the angels urge Lot to leave?',
        options: ['Midnight', 'When dawn arose', 'At noon', 'In the evening'],
        correctAnswer: 'When dawn arose',
        explanation: 'Genesis 19:15: "As morning dawned, the angels urged Lot."',
        difficulty: 'hard'
      },
      {
        id: 'genesis19-q13',
        question: 'Why did God spare Zoar?',
        options: ['It was righteous', 'For Lot\'s sake when he asked', 'It was too small to matter', 'Abraham prayed for it'],
        correctAnswer: 'For Lot\'s sake when he asked',
        explanation: 'Genesis 19:21: God agreed to spare Zoar at Lot\'s request.',
        difficulty: 'hard'
      },
      {
        id: 'genesis19-q14',
        question: 'What is specifically mentioned about the judgment covering Sodom and Gomorrah?',
        options: ['Just the cities', 'The cities, inhabitants, and valley vegetation', 'Only the wicked', 'Only Lot\'s house'],
        correctAnswer: 'The cities, inhabitants, and valley vegetation',
        explanation: 'Genesis 19:25: God overthrew the cities, inhabitants, and what grew on the ground.',
        difficulty: 'hard'
      },
      {
        id: 'genesis19-q15',
        question: 'Why did God remember Abraham when destroying Sodom?',
        options: ['Abraham lived nearby', 'God sent Lot out of the destruction because of Abraham', 'Abraham was watching', 'Abraham owned land there'],
        correctAnswer: 'God sent Lot out of the destruction because of Abraham',
        explanation: 'Genesis 19:29: God remembered Abraham and sent Lot out of the overthrow.',
        difficulty: 'hard'
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis20-q1',
        question: 'Where did Abraham travel to in this chapter?',
        options: ['Egypt', 'Gerar', 'Hebron', 'Bethel'],
        correctAnswer: 'Gerar',
        explanation: 'Genesis 20:1: Abraham sojourned in Gerar.',
        difficulty: 'easy'
      },
      {
        id: 'genesis20-q2',
        question: 'What did Abraham say about Sarah?',
        options: ['She is my wife', 'She is my sister', 'She is my servant', 'She is my mother'],
        correctAnswer: 'She is my sister',
        explanation: 'Genesis 20:2: Abraham said Sarah was his sister.',
        difficulty: 'easy'
      },
      {
        id: 'genesis20-q3',
        question: 'Who took Sarah?',
        options: ['Pharaoh', 'Abimelech', 'Lot', 'Laban'],
        correctAnswer: 'Abimelech',
        explanation: 'Genesis 20:2: Abimelech king of Gerar took Sarah.',
        difficulty: 'easy'
      },
      {
        id: 'genesis20-q4',
        question: 'How did God warn Abimelech?',
        options: ['Through a prophet', 'In a dream', 'Through an angel', 'By fire'],
        correctAnswer: 'In a dream',
        explanation: 'Genesis 20:3: God came to Abimelech in a dream by night.',
        difficulty: 'easy'
      },
      {
        id: 'genesis20-q5',
        question: 'Was Sarah returned to Abraham?',
        options: ['No', 'Yes', 'She refused', 'She stayed with Abimelech'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 20:14: Abimelech returned Sarah to Abraham.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis20-q6',
        question: 'What did God call Abraham when speaking to Abimelech?',
        options: ['A king', 'A prophet', 'A priest', 'A judge'],
        correctAnswer: 'A prophet',
        explanation: 'Genesis 20:7: "he is a prophet, so that he will pray for you."',
        difficulty: 'medium'
      },
      {
        id: 'genesis20-q7',
        question: 'What did Abimelech give Abraham as compensation?',
        options: ['Gold only', 'Sheep, oxen, and servants', 'Land only', 'Nothing'],
        correctAnswer: 'Sheep, oxen, and servants',
        explanation: 'Genesis 20:14: Abimelech gave sheep, oxen, and servants to Abraham.',
        difficulty: 'medium'
      },
      {
        id: 'genesis20-q8',
        question: 'Why was Abraham called to pray for Abimelech?',
        options: ['For wisdom', 'So Abimelech would live', 'For children', 'For wealth'],
        correctAnswer: 'So Abimelech would live',
        explanation: 'Genesis 20:7: "he will pray for you, and you shall live."',
        difficulty: 'medium'
      },
      {
        id: 'genesis20-q9',
        question: 'Did Abimelech actually touch Sarah?',
        options: ['Yes', 'No, God kept him from it', 'The text doesn\'t say', 'Yes, and was punished'],
        correctAnswer: 'No, God kept him from it',
        explanation: 'Genesis 20:6: "I kept you from sinning against me... I did not let you touch her."',
        difficulty: 'medium'
      },
      {
        id: 'genesis20-q10',
        question: 'How had God afflicted Abimelech\'s household?',
        options: ['With disease', 'Closed all wombs', 'With blindness', 'With poverty'],
        correctAnswer: 'Closed all wombs',
        explanation: 'Genesis 20:18: The LORD had closed all the wombs of Abimelech\'s house.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis20-q11',
        question: 'Was Sarah actually Abraham\'s sister?',
        options: ['No, it was a complete lie', 'Yes, his half-sister', 'She was his cousin', 'She was his niece'],
        correctAnswer: 'Yes, his half-sister',
        explanation: 'Genesis 20:12: "She is indeed my sister, the daughter of my father though not my mother."',
        difficulty: 'hard'
      },
      {
        id: 'genesis20-q12',
        question: 'What did Abraham fear about Gerar?',
        options: ['It was poor', 'There was no fear of God there', 'It was at war', 'It was a desert'],
        correctAnswer: 'There was no fear of God there',
        explanation: 'Genesis 20:11: "I thought, There is no fear of God at all in this place."',
        difficulty: 'hard'
      },
      {
        id: 'genesis20-q13',
        question: 'How much silver did Abimelech give to Sarah as a "covering of the eyes"?',
        options: ['100 pieces', '500 pieces', '1000 pieces', '5000 pieces'],
        correctAnswer: '1000 pieces',
        explanation: 'Genesis 20:16: Abimelech gave 1000 pieces of silver.',
        difficulty: 'hard'
      },
      {
        id: 'genesis20-q14',
        question: 'What did Abimelech offer Abraham regarding land?',
        options: ['He banished him', 'He gave him all his land', 'He said Abraham could dwell wherever he pleased', 'He asked him to leave'],
        correctAnswer: 'He said Abraham could dwell wherever he pleased',
        explanation: 'Genesis 20:15: "my land is before you; dwell where it pleases you."',
        difficulty: 'hard'
      },
      {
        id: 'genesis20-q15',
        question: 'What happened after Abraham prayed for Abimelech?',
        options: ['Nothing changed', 'God healed Abimelech\'s house and they bore children', 'Abimelech died', 'Abraham left'],
        correctAnswer: 'God healed Abimelech\'s house and they bore children',
        explanation: 'Genesis 20:17: God healed Abimelech, his wife, and female servants.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 20:7',
    key_verse_text: "'Now then, return the man's wife, for he is a prophet, so that he will pray for you, and you shall live.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-21',
    bookId: 'genesis',
    chapter: 21,
    title: 'Birth of Isaac and Hagar\'s Departure',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis21-q1',
        question: 'What was Abraham and Sarah\'s son named?',
        options: ['Ishmael', 'Isaac', 'Jacob', 'Esau'],
        correctAnswer: 'Isaac',
        explanation: 'Genesis 21:3: Abraham named his son Isaac.',
        difficulty: 'easy'
      },
      {
        id: 'genesis21-q2',
        question: 'Why did Sarah laugh?',
        options: ['She was sad', 'God brought her laughter through Isaac', 'She was angry', 'She was afraid'],
        correctAnswer: 'God brought her laughter through Isaac',
        explanation: 'Genesis 21:6: "God has made laughter for me."',
        difficulty: 'easy'
      },
      {
        id: 'genesis21-q3',
        question: 'What did God provide for Hagar in the wilderness?',
        options: ['Food', 'A well of water', 'A tent', 'An angel guide'],
        correctAnswer: 'A well of water',
        explanation: 'Genesis 21:19: God opened her eyes and she saw a well of water.',
        difficulty: 'easy'
      },
      {
        id: 'genesis21-q4',
        question: 'Who made a covenant with Abraham at Beersheba?',
        options: ['Pharaoh', 'Abimelech', 'Lot', 'Melchizedek'],
        correctAnswer: 'Abimelech',
        explanation: 'Genesis 21:27: Abraham and Abimelech made a covenant.',
        difficulty: 'easy'
      },
      {
        id: 'genesis21-q5',
        question: 'What does "Isaac" mean?',
        options: ['Strength', 'He laughs', 'Promise', 'Blessing'],
        correctAnswer: 'He laughs',
        explanation: 'The name Isaac comes from the Hebrew word for laughter.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis21-q6',
        question: 'How old was Abraham when Isaac was born?',
        options: ['75 years', '86 years', '99 years', '100 years'],
        correctAnswer: '100 years',
        explanation: 'Genesis 21:5: Abraham was 100 years old when Isaac was born.',
        difficulty: 'medium'
      },
      {
        id: 'genesis21-q7',
        question: 'What did Sarah demand Abraham do with Hagar and Ishmael?',
        options: ['Give them wealth', 'Cast them out', 'Give them land', 'Make Ishmael heir'],
        correctAnswer: 'Cast them out',
        explanation: 'Genesis 21:10: Sarah said to cast out the slave woman and her son.',
        difficulty: 'medium'
      },
      {
        id: 'genesis21-q8',
        question: 'How did Abraham feel about sending Ishmael away?',
        options: ['Happy', 'Very displeased', 'Indifferent', 'Relieved'],
        correctAnswer: 'Very displeased',
        explanation: 'Genesis 21:11: The thing was very displeasing to Abraham.',
        difficulty: 'medium'
      },
      {
        id: 'genesis21-q9',
        question: 'What did Abraham plant at Beersheba?',
        options: ['An olive tree', 'A tamarisk tree', 'A vineyard', 'A fig tree'],
        correctAnswer: 'A tamarisk tree',
        explanation: 'Genesis 21:33: Abraham planted a tamarisk tree in Beersheba.',
        difficulty: 'medium'
      },
      {
        id: 'genesis21-q10',
        question: 'What does Beersheba mean?',
        options: ['Well of seven or well of oath', 'Place of blessing', 'Land of promise', 'God\'s dwelling'],
        correctAnswer: 'Well of seven or well of oath',
        explanation: 'Genesis 21:31: It was named for the oath between Abraham and Abimelech.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis21-q11',
        question: 'What did God promise about Ishmael?',
        options: ['He would perish', 'He would become a nation', 'He would return', 'He would be forgotten'],
        correctAnswer: 'He would become a nation',
        explanation: 'Genesis 21:13: "I will make a nation of him also, because he is your offspring."',
        difficulty: 'hard'
      },
      {
        id: 'genesis21-q12',
        question: 'How many lambs did Abraham set apart for the covenant?',
        options: ['Three', 'Seven', 'Ten', 'Twelve'],
        correctAnswer: 'Seven',
        explanation: 'Genesis 21:28-30: Abraham set seven ewe lambs apart.',
        difficulty: 'hard'
      },
      {
        id: 'genesis21-q13',
        question: 'Who was Phicol?',
        options: ['A prophet', 'The commander of Abimelech\'s army', 'A priest', 'Abraham\'s servant'],
        correctAnswer: 'The commander of Abimelech\'s army',
        explanation: 'Genesis 21:22: Phicol was the commander of Abimelech\'s army.',
        difficulty: 'hard'
      },
      {
        id: 'genesis21-q14',
        question: 'By what name did Abraham call upon the LORD at Beersheba?',
        options: ['El Shaddai', 'El Olam (Everlasting God)', 'El Roi', 'Yahweh'],
        correctAnswer: 'El Olam (Everlasting God)',
        explanation: 'Genesis 21:33: Abraham called on the name of the LORD, the Everlasting God.',
        difficulty: 'hard'
      },
      {
        id: 'genesis21-q15',
        question: 'Where did Ishmael dwell after leaving Abraham?',
        options: ['Canaan', 'The wilderness of Paran', 'Egypt', 'Mesopotamia'],
        correctAnswer: 'The wilderness of Paran',
        explanation: 'Genesis 21:21: Ishmael lived in the wilderness of Paran.',
        difficulty: 'hard'
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis22-q1',
        question: 'What did God ask Abraham to offer as a sacrifice?',
        options: ['A lamb', 'His son Isaac', 'A bull', 'Grain'],
        correctAnswer: 'His son Isaac',
        explanation: 'Genesis 22:2: God told Abraham to offer Isaac as a burnt offering.',
        difficulty: 'easy'
      },
      {
        id: 'genesis22-q2',
        question: 'What did God provide instead of Isaac?',
        options: ['A lamb', 'A ram', 'A dove', 'A goat'],
        correctAnswer: 'A ram',
        explanation: 'Genesis 22:13: Abraham saw a ram caught in a thicket.',
        difficulty: 'easy'
      },
      {
        id: 'genesis22-q3',
        question: 'Did Abraham pass God\'s test?',
        options: ['No', 'Yes', 'Partially', 'He failed'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 22:12: "Now I know that you fear God."',
        difficulty: 'easy'
      },
      {
        id: 'genesis22-q4',
        question: 'Who stopped Abraham from sacrificing Isaac?',
        options: ['Sarah', 'The angel of the LORD', 'Isaac', 'A prophet'],
        correctAnswer: 'The angel of the LORD',
        explanation: 'Genesis 22:11: The angel of the LORD called to him from heaven.',
        difficulty: 'easy'
      },
      {
        id: 'genesis22-q5',
        question: 'What did Abraham name the place where God provided?',
        options: ['Bethel', 'The LORD Will Provide', 'Beersheba', 'Moriah'],
        correctAnswer: 'The LORD Will Provide',
        explanation: 'Genesis 22:14: Abraham called it "The LORD will provide."',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis22-q6',
        question: 'What question did Isaac ask his father on the way?',
        options: ['Are we there yet?', 'Where is the lamb for the offering?', 'Why are we going?', 'Who will help us?'],
        correctAnswer: 'Where is the lamb for the offering?',
        explanation: 'Genesis 22:7: Isaac asked "where is the lamb for a burnt offering?"',
        difficulty: 'medium'
      },
      {
        id: 'genesis22-q7',
        question: 'How did Abraham reply to Isaac\'s question about the lamb?',
        options: ['We have no lamb', 'God will provide for himself the lamb', 'You are the lamb', 'We will find one'],
        correctAnswer: 'God will provide for himself the lamb',
        explanation: 'Genesis 22:8: "God will provide for himself the lamb."',
        difficulty: 'medium'
      },
      {
        id: 'genesis22-q8',
        question: 'Where did God tell Abraham to go for the sacrifice?',
        options: ['Mount Sinai', 'The land of Moriah', 'Beersheba', 'Bethel'],
        correctAnswer: 'The land of Moriah',
        explanation: 'Genesis 22:2: God directed Abraham to the land of Moriah.',
        difficulty: 'medium'
      },
      {
        id: 'genesis22-q9',
        question: 'How many days did the journey to Moriah take?',
        options: ['One day', 'Three days', 'Seven days', 'Ten days'],
        correctAnswer: 'Three days',
        explanation: 'Genesis 22:4: On the third day Abraham saw the place.',
        difficulty: 'medium'
      },
      {
        id: 'genesis22-q10',
        question: 'What did Abraham tell his servants?',
        options: ['Wait here', 'We will worship and return', 'Prepare a feast', 'Build an altar'],
        correctAnswer: 'We will worship and return',
        explanation: 'Genesis 22:5: "I and the boy will go... worship and come again to you."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis22-q11',
        question: 'How was Isaac described in relation to Abraham?',
        options: ['His firstborn', 'His only son whom he loved', 'His heir', 'His chosen one'],
        correctAnswer: 'His only son whom he loved',
        explanation: 'Genesis 22:2: "your son, your only son Isaac, whom you love."',
        difficulty: 'hard'
      },
      {
        id: 'genesis22-q12',
        question: 'Where was the ram caught?',
        options: ['In a pit', 'In a thicket by its horns', 'By a stream', 'On the altar'],
        correctAnswer: 'In a thicket by its horns',
        explanation: 'Genesis 22:13: "a ram, caught in a thicket by his horns."',
        difficulty: 'hard'
      },
      {
        id: 'genesis22-q13',
        question: 'By what did God swear when blessing Abraham?',
        options: ['By heaven', 'By Himself', 'By the covenant', 'By the altar'],
        correctAnswer: 'By Himself',
        explanation: 'Genesis 22:16: "By myself I have sworn, declares the LORD."',
        difficulty: 'hard'
      },
      {
        id: 'genesis22-q14',
        question: 'To what two things did God compare Abraham\'s offspring?',
        options: ['Trees and rivers', 'Stars and sand', 'Mountains and valleys', 'Clouds and rain'],
        correctAnswer: 'Stars and sand',
        explanation: 'Genesis 22:17: "as the stars of heaven and as the sand on the seashore."',
        difficulty: 'hard'
      },
      {
        id: 'genesis22-q15',
        question: 'Why did God bless Abraham according to this chapter?',
        options: ['His wealth', 'Because he obeyed God\'s voice', 'His wisdom', 'His age'],
        correctAnswer: 'Because he obeyed God\'s voice',
        explanation: 'Genesis 22:18: "because you have obeyed my voice."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 22:14',
    key_verse_text: "So Abraham called the name of that place, 'The Lord will provide.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-23',
    bookId: 'genesis',
    chapter: 23,
    title: 'Sarah\'s Death and Burial',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis23-q1',
        question: 'How old was Sarah when she died?',
        options: ['100 years', '127 years', '90 years', '110 years'],
        correctAnswer: '127 years',
        explanation: 'Genesis 23:1: Sarah lived 127 years.',
        difficulty: 'easy'
      },
      {
        id: 'genesis23-q2',
        question: 'Where did Sarah die?',
        options: ['Beersheba', 'Hebron', 'Egypt', 'Bethel'],
        correctAnswer: 'Hebron',
        explanation: 'Genesis 23:2: Sarah died at Kiriath-arba (Hebron).',
        difficulty: 'easy'
      },
      {
        id: 'genesis23-q3',
        question: 'What did Abraham purchase from Ephron?',
        options: ['A house', 'A field with a cave', 'Livestock', 'Gold'],
        correctAnswer: 'A field with a cave',
        explanation: 'Genesis 23:17-18: Abraham purchased the field and cave.',
        difficulty: 'easy'
      },
      {
        id: 'genesis23-q4',
        question: 'Where was Sarah buried?',
        options: ['In a tomb', 'Cave of Machpelah', 'In the desert', 'At Beersheba'],
        correctAnswer: 'Cave of Machpelah',
        explanation: 'Genesis 23:19: Sarah was buried in the cave of Machpelah.',
        difficulty: 'easy'
      },
      {
        id: 'genesis23-q5',
        question: 'Did Abraham own the burial land?',
        options: ['No, he borrowed it', 'Yes, he purchased it', 'It was given free', 'He found it abandoned'],
        correctAnswer: 'Yes, he purchased it',
        explanation: 'Genesis 23:20: The field and cave were made over to Abraham as property.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis23-q6',
        question: 'Who did Abraham negotiate with for the burial site?',
        options: ['Abimelech', 'Ephron the Hittite', 'The sons of Heth', 'Phicol'],
        correctAnswer: 'Ephron the Hittite',
        explanation: 'Genesis 23:10-16: Abraham negotiated with Ephron the Hittite.',
        difficulty: 'medium'
      },
      {
        id: 'genesis23-q7',
        question: 'How much silver did Abraham pay for the field?',
        options: ['100 shekels', '200 shekels', '400 shekels', '500 shekels'],
        correctAnswer: '400 shekels',
        explanation: 'Genesis 23:15-16: Abraham paid 400 shekels of silver.',
        difficulty: 'medium'
      },
      {
        id: 'genesis23-q8',
        question: 'What did Abraham call himself when speaking to the Hittites?',
        options: ['A prophet', 'A sojourner and foreigner', 'A wealthy man', 'A friend'],
        correctAnswer: 'A sojourner and foreigner',
        explanation: 'Genesis 23:4: "I am a sojourner and foreigner among you."',
        difficulty: 'medium'
      },
      {
        id: 'genesis23-q9',
        question: 'Did Ephron initially offer to give the field for free?',
        options: ['No', 'Yes', 'He demanded payment', 'He refused to sell'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 23:11: Ephron offered to give Abraham the field.',
        difficulty: 'medium'
      },
      {
        id: 'genesis23-q10',
        question: 'What nationality were the people Abraham negotiated with?',
        options: ['Egyptians', 'Hittites', 'Canaanites', 'Philistines'],
        correctAnswer: 'Hittites',
        explanation: 'Genesis 23:10: Ephron was among the Hittites.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis23-q11',
        question: 'What was the other name for Hebron?',
        options: ['Mamre', 'Kiriath-arba', 'Beersheba', 'Zoar'],
        correctAnswer: 'Kiriath-arba',
        explanation: 'Genesis 23:2: Kiriath-arba (that is, Hebron).',
        difficulty: 'hard'
      },
      {
        id: 'genesis23-q12',
        question: 'Where was the negotiation conducted?',
        options: ['In Ephron\'s house', 'At the city gate', 'In the field', 'At the cave'],
        correctAnswer: 'At the city gate',
        explanation: 'Genesis 23:10: The transaction occurred at the gate in the hearing of all who entered.',
        difficulty: 'hard'
      },
      {
        id: 'genesis23-q13',
        question: 'What trees were in the field?',
        options: ['Olive trees', 'All the trees in the field', 'Oak trees', 'Fig trees'],
        correctAnswer: 'All the trees in the field',
        explanation: 'Genesis 23:17: All the trees in the field were included in the sale.',
        difficulty: 'hard'
      },
      {
        id: 'genesis23-q14',
        question: 'What standard were the weights measured by?',
        options: ['Egyptian standard', 'Current among the merchants', 'Temple standard', 'Royal standard'],
        correctAnswer: 'Current among the merchants',
        explanation: 'Genesis 23:16: "according to the weights current among the merchants."',
        difficulty: 'hard'
      },
      {
        id: 'genesis23-q15',
        question: 'What was confirmed as Abraham\'s possession?',
        options: ['Only the cave', 'The field, cave, and all trees', 'Just the burial site', 'The land around Hebron'],
        correctAnswer: 'The field, cave, and all trees',
        explanation: 'Genesis 23:17-18: The field, cave, and all trees were made over to Abraham.',
        difficulty: 'hard'
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis24-q1',
        question: 'Who did Abraham\'s servant find for Isaac?',
        options: ['Rachel', 'Rebekah', 'Leah', 'Sarah'],
        correctAnswer: 'Rebekah',
        explanation: 'Genesis 24:15: Rebekah came out to the well.',
        difficulty: 'easy'
      },
      {
        id: 'genesis24-q2',
        question: 'Where did the servant go to find a wife?',
        options: ['Egypt', 'To Abraham\'s homeland', 'Canaan', 'Sodom'],
        correctAnswer: 'To Abraham\'s homeland',
        explanation: 'Genesis 24:4: Abraham sent his servant to his country and kindred.',
        difficulty: 'easy'
      },
      {
        id: 'genesis24-q3',
        question: 'What sign did the servant ask for?',
        options: ['A rainbow', 'A woman who would water his camels', 'A dove', 'Fire from heaven'],
        correctAnswer: 'A woman who would water his camels',
        explanation: 'Genesis 24:14: The servant prayed for God to show him the right woman through this sign.',
        difficulty: 'easy'
      },
      {
        id: 'genesis24-q4',
        question: 'Did Rebekah agree to go with the servant?',
        options: ['No', 'Yes', 'She hesitated', 'She refused'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 24:58: Rebekah said "I will go."',
        difficulty: 'easy'
      },
      {
        id: 'genesis24-q5',
        question: 'Who was Rebekah\'s brother?',
        options: ['Lot', 'Laban', 'Nahor', 'Esau'],
        correctAnswer: 'Laban',
        explanation: 'Genesis 24:29: Rebekah had a brother named Laban.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis24-q6',
        question: 'How many camels did the servant take?',
        options: ['Five', 'Ten', 'Twenty', 'Thirty'],
        correctAnswer: 'Ten',
        explanation: 'Genesis 24:10: The servant took ten camels.',
        difficulty: 'medium'
      },
      {
        id: 'genesis24-q7',
        question: 'What did the servant give Rebekah after she watered the camels?',
        options: ['Gold coins', 'A gold ring and bracelets', 'Clothing', 'Food'],
        correctAnswer: 'A gold ring and bracelets',
        explanation: 'Genesis 24:22: He gave her a gold ring and two gold bracelets.',
        difficulty: 'medium'
      },
      {
        id: 'genesis24-q8',
        question: 'Where did Isaac first see Rebekah?',
        options: ['At home', 'In the field', 'At a well', 'In the city'],
        correctAnswer: 'In the field',
        explanation: 'Genesis 24:63: Isaac went out to meditate in the field in the evening.',
        difficulty: 'medium'
      },
      {
        id: 'genesis24-q9',
        question: 'Who was Rebekah\'s father?',
        options: ['Nahor', 'Bethuel', 'Laban', 'Terah'],
        correctAnswer: 'Bethuel',
        explanation: 'Genesis 24:15: Rebekah was born to Bethuel.',
        difficulty: 'medium'
      },
      {
        id: 'genesis24-q10',
        question: 'What did Rebekah do when she saw Isaac?',
        options: ['Ran away', 'Got down from the camel and covered herself', 'Waved', 'Called to him'],
        correctAnswer: 'Got down from the camel and covered herself',
        explanation: 'Genesis 24:64-65: Rebekah dismounted and covered herself with her veil.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis24-q11',
        question: 'What oath did Abraham make his servant swear?',
        options: ['To return quickly', 'Not to take a wife for Isaac from the Canaanites', 'To bring gifts', 'To honor Isaac'],
        correctAnswer: 'Not to take a wife for Isaac from the Canaanites',
        explanation: 'Genesis 24:3: Abraham made him swear not to take a Canaanite wife for Isaac.',
        difficulty: 'hard'
      },
      {
        id: 'genesis24-q12',
        question: 'Where did the servant make his camels kneel?',
        options: ['In the city', 'At the city gate', 'By the well outside the city', 'In Bethuel\'s house'],
        correctAnswer: 'By the well outside the city',
        explanation: 'Genesis 24:11: He made the camels kneel down outside the city by the well.',
        difficulty: 'hard'
      },
      {
        id: 'genesis24-q13',
        question: 'What did Rebekah\'s family initially want before she left?',
        options: ['Her to stay forever', 'Ten days or so', 'A month', 'A year'],
        correctAnswer: 'Ten days or so',
        explanation: 'Genesis 24:55: Her family said "Let the young woman remain with us... at least ten days."',
        difficulty: 'hard'
      },
      {
        id: 'genesis24-q14',
        question: 'What comforted Isaac after his mother\'s death?',
        options: ['Prayer', 'His father', 'Taking Rebekah as his wife', 'Work'],
        correctAnswer: 'Taking Rebekah as his wife',
        explanation: 'Genesis 24:67: Isaac was comforted after his mother\'s death when he married Rebekah.',
        difficulty: 'hard'
      },
      {
        id: 'genesis24-q15',
        question: 'How were Bethuel and Laban described in relation to Abraham?',
        options: ['Enemies', 'Family of Abraham\'s brother', 'Friends', 'Servants'],
        correctAnswer: 'Family of Abraham\'s brother',
        explanation: 'Genesis 24:15: Bethuel was the son of Milcah, wife of Nahor, Abraham\'s brother.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 24:27',
    key_verse_text: "\"Blessed be the LORD, the God of my master Abraham, who has not forsaken his steadfast love and his faithfulness toward my master.\"",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-25',
    bookId: 'genesis',
    chapter: 25,
    title: 'Abraham\'s Death and Isaac\'s Family',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis25-q1',
        question: 'Who were Rebekah\'s twin sons?',
        options: ['Cain and Abel', 'Esau and Jacob', 'Isaac and Ishmael', 'Joseph and Benjamin'],
        correctAnswer: 'Esau and Jacob',
        explanation: 'Genesis 25:24-26: Rebekah gave birth to twins, Esau and Jacob.',
        difficulty: 'easy'
      },
      {
        id: 'genesis25-q2',
        question: 'What did Esau sell to Jacob?',
        options: ['His land', 'His birthright', 'His livestock', 'His tent'],
        correctAnswer: 'His birthright',
        explanation: 'Genesis 25:33: Esau sold his birthright to Jacob.',
        difficulty: 'easy'
      },
      {
        id: 'genesis25-q3',
        question: 'How old was Abraham when he died?',
        options: ['100 years', '127 years', '175 years', '200 years'],
        correctAnswer: '175 years',
        explanation: 'Genesis 25:7: Abraham lived 175 years.',
        difficulty: 'easy'
      },
      {
        id: 'genesis25-q4',
        question: 'Who inherited everything Abraham had?',
        options: ['Ishmael', 'Isaac', 'Keturah\'s sons', 'All sons equally'],
        correctAnswer: 'Isaac',
        explanation: 'Genesis 25:5: Abraham gave all he had to Isaac.',
        difficulty: 'easy'
      },
      {
        id: 'genesis25-q5',
        question: 'Where was Abraham buried?',
        options: ['Beersheba', 'Cave of Machpelah', 'Hebron city', 'Egypt'],
        correctAnswer: 'Cave of Machpelah',
        explanation: 'Genesis 25:9: Isaac and Ishmael buried Abraham in the cave of Machpelah.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis25-q6',
        question: 'Who was Abraham\'s wife after Sarah died?',
        options: ['Hagar', 'Keturah', 'Rebekah', 'Leah'],
        correctAnswer: 'Keturah',
        explanation: 'Genesis 25:1: Abraham took another wife named Keturah.',
        difficulty: 'medium'
      },
      {
        id: 'genesis25-q7',
        question: 'What did Esau trade his birthright for?',
        options: ['Gold', 'Bread and lentil stew', 'Livestock', 'Land'],
        correctAnswer: 'Bread and lentil stew',
        explanation: 'Genesis 25:34: Jacob gave Esau bread and lentil stew for his birthright.',
        difficulty: 'medium'
      },
      {
        id: 'genesis25-q8',
        question: 'Which twin was born first?',
        options: ['Jacob', 'Esau', 'They were born simultaneously', 'Not stated'],
        correctAnswer: 'Esau',
        explanation: 'Genesis 25:25: The first came out red and hairy, and they named him Esau.',
        difficulty: 'medium'
      },
      {
        id: 'genesis25-q9',
        question: 'How old was Isaac when the twins were born?',
        options: ['40 years', '60 years', '100 years', '75 years'],
        correctAnswer: '60 years',
        explanation: 'Genesis 25:26: Isaac was 60 years old when Rebekah bore them.',
        difficulty: 'medium'
      },
      {
        id: 'genesis25-q10',
        question: 'Why did Rebekah struggle during pregnancy?',
        options: ['She was ill', 'The children struggled within her', 'She was afraid', 'She was old'],
        correctAnswer: 'The children struggled within her',
        explanation: 'Genesis 25:22: The children struggled together within her.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis25-q11',
        question: 'What did God tell Rebekah about her twins?',
        options: ['They would be friends', 'Two nations, the older will serve the younger', 'They would share equally', 'They would both be blessed'],
        correctAnswer: 'Two nations, the older will serve the younger',
        explanation: 'Genesis 25:23: "the older shall serve the younger."',
        difficulty: 'hard'
      },
      {
        id: 'genesis25-q12',
        question: 'What did Jacob mean in Hebrew?',
        options: ['Blessed one', 'He grasps the heel / Supplanter', 'Red one', 'Hunter'],
        correctAnswer: 'He grasps the heel / Supplanter',
        explanation: 'Genesis 25:26: Jacob\'s name relates to grasping Esau\'s heel at birth.',
        difficulty: 'hard'
      },
      {
        id: 'genesis25-q13',
        question: 'What did Esau become?',
        options: ['A farmer', 'A skillful hunter', 'A merchant', 'A priest'],
        correctAnswer: 'A skillful hunter',
        explanation: 'Genesis 25:27: Esau was a skillful hunter, a man of the field.',
        difficulty: 'hard'
      },
      {
        id: 'genesis25-q14',
        question: 'Who buried Abraham?',
        options: ['Isaac only', 'Isaac and Ishmael together', 'Ishmael only', 'His servants'],
        correctAnswer: 'Isaac and Ishmael together',
        explanation: 'Genesis 25:9: Isaac and Ishmael his sons buried him.',
        difficulty: 'hard'
      },
      {
        id: 'genesis25-q15',
        question: 'How many sons did Ishmael have?',
        options: ['Seven', 'Ten', 'Twelve', 'Fifteen'],
        correctAnswer: 'Twelve',
        explanation: 'Genesis 25:16: These are the twelve princes according to their tribes.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 25:23',
    key_verse_text: "\"Two nations are in your womb, and two peoples from within you shall be divided; the one shall be stronger than the other, the older shall serve the younger.\"",
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis26-q1',
        question: 'Where did Isaac go during the famine?',
        options: ['Egypt', 'Gerar', 'Hebron', 'Beersheba'],
        correctAnswer: 'Gerar',
        explanation: 'Genesis 26:1: Isaac went to Gerar to Abimelech king of the Philistines.',
        difficulty: 'easy'
      },
      {
        id: 'genesis26-q2',
        question: 'What did Isaac say about Rebekah?',
        options: ['She is my wife', 'She is my sister', 'She is my servant', 'She is my daughter'],
        correctAnswer: 'She is my sister',
        explanation: 'Genesis 26:7: Isaac said Rebekah was his sister.',
        difficulty: 'easy'
      },
      {
        id: 'genesis26-q3',
        question: 'Did God appear to Isaac?',
        options: ['No', 'Yes', 'Only in dreams', 'Through prophets'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 26:2: The LORD appeared to Isaac.',
        difficulty: 'easy'
      },
      {
        id: 'genesis26-q4',
        question: 'What did Isaac do that made him wealthy?',
        options: ['Trading', 'Sowed and reaped', 'Inherited only', 'Found treasure'],
        correctAnswer: 'Sowed and reaped',
        explanation: 'Genesis 26:12: Isaac sowed in the land and reaped a hundredfold.',
        difficulty: 'easy'
      },
      {
        id: 'genesis26-q5',
        question: 'Did Isaac make peace with Abimelech?',
        options: ['No', 'Yes', 'They went to war', 'They avoided each other'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 26:28-31: They made a covenant of peace.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis26-q6',
        question: 'Why did the Philistines stop up Isaac\'s wells?',
        options: ['To steal water', 'Out of envy', 'To punish Isaac', 'By accident'],
        correctAnswer: 'Out of envy',
        explanation: 'Genesis 26:14-15: The Philistines envied Isaac and stopped up the wells.',
        difficulty: 'medium'
      },
      {
        id: 'genesis26-q7',
        question: 'What did Isaac name the well where there was no quarreling?',
        options: ['Esek', 'Sitnah', 'Rehoboth', 'Beersheba'],
        correctAnswer: 'Rehoboth',
        explanation: 'Genesis 26:22: Isaac named it Rehoboth, saying "the LORD has made room for us."',
        difficulty: 'medium'
      },
      {
        id: 'genesis26-q8',
        question: 'How did Abimelech discover Rebekah was Isaac\'s wife?',
        options: ['Isaac confessed', 'He saw Isaac laughing with her', 'Rebekah told him', 'An angel revealed it'],
        correctAnswer: 'He saw Isaac laughing with her',
        explanation: 'Genesis 26:8: Abimelech saw Isaac laughing with Rebekah.',
        difficulty: 'medium'
      },
      {
        id: 'genesis26-q9',
        question: 'Why did Abimelech ask Isaac to leave?',
        options: ['He was angry', 'Isaac had become too powerful', 'Famine ended', 'God commanded it'],
        correctAnswer: 'Isaac had become too powerful',
        explanation: 'Genesis 26:16: "you are much mightier than we."',
        difficulty: 'medium'
      },
      {
        id: 'genesis26-q10',
        question: 'What wells did Isaac reopen?',
        options: ['New wells only', 'The wells Abraham had dug', 'Philistine wells', 'Egyptian wells'],
        correctAnswer: 'The wells Abraham had dug',
        explanation: 'Genesis 26:18: Isaac reopened the wells that had been dug in Abraham\'s days.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis26-q11',
        question: 'What was the first well Isaac\'s servants dug called?',
        options: ['Rehoboth', 'Esek', 'Sitnah', 'Shibah'],
        correctAnswer: 'Esek',
        explanation: 'Genesis 26:20: They called it Esek (meaning "contention").',
        difficulty: 'hard'
      },
      {
        id: 'genesis26-q12',
        question: 'How much did Isaac\'s crops yield?',
        options: ['Tenfold', 'Fiftyfold', 'A hundredfold', 'Twofold'],
        correctAnswer: 'A hundredfold',
        explanation: 'Genesis 26:12: Isaac reaped in that year a hundredfold.',
        difficulty: 'hard'
      },
      {
        id: 'genesis26-q13',
        question: 'Who came with Abimelech to make a covenant with Isaac?',
        options: ['His servants', 'Ahuzzath and Phicol', 'His sons', 'Philistine elders'],
        correctAnswer: 'Ahuzzath and Phicol',
        explanation: 'Genesis 26:26: Abimelech came with Ahuzzath his adviser and Phicol his army commander.',
        difficulty: 'hard'
      },
      {
        id: 'genesis26-q14',
        question: 'What did Isaac call the well at Beersheba?',
        options: ['Rehoboth', 'Esek', 'Shibah', 'Beer-lahai-roi'],
        correctAnswer: 'Shibah',
        explanation: 'Genesis 26:33: He called it Shibah, giving the city its name Beersheba.',
        difficulty: 'hard'
      },
      {
        id: 'genesis26-q15',
        question: 'How old was Esau when he married Hittite women?',
        options: ['30 years', '40 years', '50 years', '25 years'],
        correctAnswer: '40 years',
        explanation: 'Genesis 26:34: When Esau was 40 years old, he took Hittite wives.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 26:4',
    key_verse_text: "'I will multiply your offspring as the stars of heaven and will give to your offspring all these lands.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-27',
    bookId: 'genesis',
    chapter: 27,
    title: 'Jacob Steals Esau\'s Blessing',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis27-q1',
        question: 'Who helped Jacob deceive Isaac?',
        options: ['Esau', 'Rebekah', 'Laban', 'Abraham'],
        correctAnswer: 'Rebekah',
        explanation: 'Genesis 27:6-10: Rebekah told Jacob the plan to deceive Isaac.',
        difficulty: 'easy'
      },
      {
        id: 'genesis27-q2',
        question: 'What did Jacob use to feel hairy like Esau?',
        options: ['Sheep wool', 'Goat skins', 'A hairy robe', 'Animal fur'],
        correctAnswer: 'Goat skins',
        explanation: 'Genesis 27:16: Rebekah put goatskins on Jacob\'s hands and neck.',
        difficulty: 'easy'
      },
      {
        id: 'genesis27-q3',
        question: 'Who did Jacob impersonate?',
        options: ['Abraham', 'Esau', 'Isaac', 'Laban'],
        correctAnswer: 'Esau',
        explanation: 'Genesis 27:19: Jacob pretended to be Esau to receive the blessing.',
        difficulty: 'easy'
      },
      {
        id: 'genesis27-q4',
        question: 'What did Esau plan to do to Jacob?',
        options: ['Forgive him', 'Kill him', 'Ignore him', 'Bless him'],
        correctAnswer: 'Kill him',
        explanation: 'Genesis 27:41: Esau said he would kill Jacob after Isaac died.',
        difficulty: 'easy'
      },
      {
        id: 'genesis27-q5',
        question: 'Was Isaac deceived by Jacob?',
        options: ['No', 'Yes', 'He knew all along', 'He was unsure'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 27:23: Isaac blessed Jacob, thinking he was Esau.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis27-q6',
        question: 'What sense did Isaac use to try to identify Jacob?',
        options: ['Sight', 'Touch', 'Taste', 'Smell'],
        correctAnswer: 'Touch',
        explanation: 'Genesis 27:21-22: Isaac felt Jacob because his eyes were dim.',
        difficulty: 'medium'
      },
      {
        id: 'genesis27-q7',
        question: 'What did Isaac ask Jacob to bring him?',
        options: ['Water', 'Game to eat', 'Wine', 'Bread'],
        correctAnswer: 'Game to eat',
        explanation: 'Genesis 27:3-4: Isaac asked Esau (but Jacob came) to bring game.',
        difficulty: 'medium'
      },
      {
        id: 'genesis27-q8',
        question: 'How did Jacob respond when Isaac asked if he was Esau?',
        options: ['He confessed', 'He said "I am Esau"', 'He stayed silent', 'He ran away'],
        correctAnswer: 'He said "I am Esau"',
        explanation: 'Genesis 27:19: "I am Esau your firstborn."',
        difficulty: 'medium'
      },
      {
        id: 'genesis27-q9',
        question: 'What did Esau do when he realized the blessing was stolen?',
        options: ['Laughed', 'Cried out with a great and bitter cry', 'Left quietly', 'Cursed Jacob'],
        correctAnswer: 'Cried out with a great and bitter cry',
        explanation: 'Genesis 27:34: Esau cried out with an exceedingly great and bitter cry.',
        difficulty: 'medium'
      },
      {
        id: 'genesis27-q10',
        question: 'Why did Rebekah send Jacob away?',
        options: ['To find a wife', 'To escape Esau\'s anger', 'To gain wealth', 'To study'],
        correctAnswer: 'To escape Esau\'s anger',
        explanation: 'Genesis 27:42-45: Rebekah told Jacob to flee from Esau\'s anger.',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis27-q11',
        question: 'What blessing did Isaac give Jacob regarding the earth?',
        options: ['Poverty', 'The dew of heaven and fatness of the earth', 'Barren land', 'Deserts'],
        correctAnswer: 'The dew of heaven and fatness of the earth',
        explanation: 'Genesis 27:28: "God give you of the dew of heaven and of the fatness of the earth."',
        difficulty: 'hard'
      },
      {
        id: 'genesis27-q12',
        question: 'What would happen to those who cursed Jacob?',
        options: ['Nothing', 'They would be cursed', 'They would be blessed', 'They would be ignored'],
        correctAnswer: 'They would be cursed',
        explanation: 'Genesis 27:29: "Cursed be everyone who curses you."',
        difficulty: 'hard'
      },
      {
        id: 'genesis27-q13',
        question: 'What did Isaac prophesy about Esau\'s dwelling?',
        options: ['Fruitful land', 'Away from the fatness of the earth', 'By the sea', 'In the mountains'],
        correctAnswer: 'Away from the fatness of the earth',
        explanation: 'Genesis 27:39: "away from the fatness of the earth shall your dwelling be."',
        difficulty: 'hard'
      },
      {
        id: 'genesis27-q14',
        question: 'How would Esau eventually gain freedom according to Isaac?',
        options: ['Through war', 'When he grows restless and breaks the yoke', 'Never', 'Through peace'],
        correctAnswer: 'When he grows restless and breaks the yoke',
        explanation: 'Genesis 27:40: "when you grow restless you shall break his yoke from your neck."',
        difficulty: 'hard'
      },
      {
        id: 'genesis27-q15',
        question: 'Where did Rebekah tell Jacob to flee?',
        options: ['Egypt', 'To her brother Laban in Haran', 'Canaan', 'Beersheba'],
        correctAnswer: 'To her brother Laban in Haran',
        explanation: 'Genesis 27:43: "flee to Laban my brother in Haran."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 27:29',
    key_verse_text: "'Let peoples serve you, and nations bow down to you. Be lord over your brothers.'",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-28',
    bookId: 'genesis',
    chapter: 28,
    title: 'Jacob\'s Dream and Vow',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis28-q1',
        question: 'What did Jacob see in his dream?',
        options: ['A mountain', 'A ladder reaching to heaven', 'A burning bush', 'A rainbow'],
        correctAnswer: 'A ladder reaching to heaven',
        explanation: 'Genesis 28:12: Jacob saw a ladder with angels ascending and descending.',
        difficulty: 'easy'
      },
      {
        id: 'genesis28-q2',
        question: 'What did Jacob name the place where he had the dream?',
        options: ['Beersheba', 'Bethel', 'Bethlehem', 'Beer-lahai-roi'],
        correctAnswer: 'Bethel',
        explanation: 'Genesis 28:19: He called the place Bethel (house of God).',
        difficulty: 'easy'
      },
      {
        id: 'genesis28-q3',
        question: 'Where was Jacob traveling to?',
        options: ['Egypt', 'To find a wife', 'Canaan', 'Beersheba'],
        correctAnswer: 'To find a wife',
        explanation: 'Genesis 28:2: Jacob was sent to Paddan-aram to find a wife.',
        difficulty: 'easy'
      },
      {
        id: 'genesis28-q4',
        question: 'Did God speak to Jacob in the dream?',
        options: ['No', 'Yes', 'Only angels spoke', 'A prophet spoke'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 28:13: The LORD stood above the ladder and spoke to Jacob.',
        difficulty: 'easy'
      },
      {
        id: 'genesis28-q5',
        question: 'What did Jacob set up as a pillar?',
        options: ['Wood', 'A stone', 'An altar', 'A tent pole'],
        correctAnswer: 'A stone',
        explanation: 'Genesis 28:18: Jacob set up the stone he had used as a pillow.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis28-q6',
        question: 'What did Jacob pour on the stone pillar?',
        options: ['Water', 'Oil', 'Wine', 'Blood'],
        correctAnswer: 'Oil',
        explanation: 'Genesis 28:18: Jacob poured oil on top of the stone.',
        difficulty: 'medium'
      },
      {
        id: 'genesis28-q7',
        question: 'Who appeared to Jacob in the dream at the top of the ladder?',
        options: ['Angels only', 'The LORD', 'Abraham', 'Isaac'],
        correctAnswer: 'The LORD',
        explanation: 'Genesis 28:13: The LORD stood above it.',
        difficulty: 'medium'
      },
      {
        id: 'genesis28-q8',
        question: 'What was the original name of Bethel?',
        options: ['Luz', 'Beersheba', 'Peniel', 'Mahanaim'],
        correctAnswer: 'Luz',
        explanation: 'Genesis 28:19: The city was formerly called Luz.',
        difficulty: 'medium'
      },
      {
        id: 'genesis28-q9',
        question: 'What did Jacob use as a pillow?',
        options: ['His cloak', 'A stone', 'Sand', 'A bundle of reeds'],
        correctAnswer: 'A stone',
        explanation: 'Genesis 28:11: He took one of the stones and put it under his head.',
        difficulty: 'medium'
      },
      {
        id: 'genesis28-q10',
        question: 'What fraction did Jacob vow to give to God?',
        options: ['A fifth', 'A tenth', 'A fourth', 'A third'],
        correctAnswer: 'A tenth',
        explanation: 'Genesis 28:22: "of all that you give me I will give a full tenth to you."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis28-q11',
        question: 'What did God promise about Jacob\'s offspring?',
        options: ['12 sons', 'They would be like the dust of the earth', 'A great nation', 'Numberless as stars'],
        correctAnswer: 'They would be like the dust of the earth',
        explanation: 'Genesis 28:14: "Your offspring shall be like the dust of the earth."',
        difficulty: 'hard'
      },
      {
        id: 'genesis28-q12',
        question: 'What specific promise did God make about being with Jacob?',
        options: ['Be strong', 'I am with you and will keep you wherever you go', 'Fight for you', 'Make you rich'],
        correctAnswer: 'I am with you and will keep you wherever you go',
        explanation: 'Genesis 28:15: "I am with you and will keep you wherever you go."',
        difficulty: 'hard'
      },
      {
        id: 'genesis28-q13',
        question: 'What was Jacob\'s response when he awoke?',
        options: ['He was happy', 'He was afraid', 'He was confused', 'He was angry'],
        correctAnswer: 'He was afraid',
        explanation: 'Genesis 28:17: "How awesome is this place! This is none other than the house of God."',
        difficulty: 'hard'
      },
      {
        id: 'genesis28-q14',
        question: 'In which direction(s) would Jacob\'s offspring spread?',
        options: ['North only', 'West, east, north, and south', 'East and west', 'All over Canaan'],
        correctAnswer: 'West, east, north, and south',
        explanation: 'Genesis 28:14: "spread abroad to the west and to the east and to the north and to the south."',
        difficulty: 'hard'
      },
      {
        id: 'genesis28-q15',
        question: 'What condition did Jacob place on his vow?',
        options: ['None', 'If God will be with him and bring him back safely', 'If he becomes rich', 'If he has many children'],
        correctAnswer: 'If God will be with him and bring him back safely',
        explanation: 'Genesis 28:20-21: Jacob\'s vow was conditional on God being with him and bringing him back in peace.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 28:15',
    key_verse_text: "'Behold, I am with you and will keep you wherever you go, and will bring you back to this land.'",
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis29-q1',
        question: 'Who did Jacob meet at the well?',
        options: ['Leah', 'Rachel', 'Rebekah', 'Bilhah'],
        correctAnswer: 'Rachel',
        explanation: 'Genesis 29:10: Jacob saw Rachel, Laban\'s daughter, at the well.',
        difficulty: 'easy'
      },
      {
        id: 'genesis29-q2',
        question: 'How many years did Jacob agree to work for Rachel?',
        options: ['Five', 'Seven', 'Ten', 'Fourteen'],
        correctAnswer: 'Seven',
        explanation: 'Genesis 29:18: Jacob agreed to serve seven years for Rachel.',
        difficulty: 'easy'
      },
      {
        id: 'genesis29-q3',
        question: 'Who did Laban give Jacob on his wedding night instead of Rachel?',
        options: ['Rachel', 'Leah', 'Bilhah', 'Zilpah'],
        correctAnswer: 'Leah',
        explanation: 'Genesis 29:23: Laban gave Leah to Jacob instead of Rachel.',
        difficulty: 'easy'
      },
      {
        id: 'genesis29-q4',
        question: 'Who was Jacob\'s first son?',
        options: ['Joseph', 'Reuben', 'Judah', 'Levi'],
        correctAnswer: 'Reuben',
        explanation: 'Genesis 29:32: Leah bore Reuben, Jacob\'s firstborn.',
        difficulty: 'easy'
      },
      {
        id: 'genesis29-q5',
        question: 'Was Jacob deceived by Laban?',
        options: ['No', 'Yes', 'He knew beforehand', 'Partially'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 29:25: Jacob discovered the deception in the morning.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis29-q6',
        question: 'What did the seven years seem like to Jacob?',
        options: ['An eternity', 'Like a few days because of his love', 'Very difficult', 'Unbearable'],
        correctAnswer: 'Like a few days because of his love',
        explanation: 'Genesis 29:20: "they seemed to him but a few days because of the love he had for her."',
        difficulty: 'medium'
      },
      {
        id: 'genesis29-q7',
        question: 'How long did Jacob have to wait after marrying Leah to marry Rachel?',
        options: ['One month', 'One week', 'One year', 'Immediately'],
        correctAnswer: 'One week',
        explanation: 'Genesis 29:27-28: Jacob completed Leah\'s week and then married Rachel.',
        difficulty: 'medium'
      },
      {
        id: 'genesis29-q8',
        question: 'Which wife did Jacob love more?',
        options: ['Leah', 'Rachel', 'Both equally', 'Neither'],
        correctAnswer: 'Rachel',
        explanation: 'Genesis 29:30: "he loved Rachel more than Leah."',
        difficulty: 'medium'
      },
      {
        id: 'genesis29-q9',
        question: 'How many sons did Leah bear Jacob in this chapter?',
        options: ['Two', 'Three', 'Four', 'Five'],
        correctAnswer: 'Four',
        explanation: 'Genesis 29:32-35: Leah bore Reuben, Simeon, Levi, and Judah.',
        difficulty: 'medium'
      },
      {
        id: 'genesis29-q10',
        question: 'Why did God open Leah\'s womb?',
        options: ['She prayed', 'Because she was unloved', 'Jacob asked', 'Laban requested'],
        correctAnswer: 'Because she was unloved',
        explanation: 'Genesis 29:31: "the LORD saw that Leah was hated, he opened her womb."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis29-q11',
        question: 'What reason did Laban give for giving Leah first?',
        options: ['Custom', 'It is not so done in our country to give the younger before the firstborn', 'Leah asked', 'Jacob misunderstood'],
        correctAnswer: 'It is not so done in our country to give the younger before the firstborn',
        explanation: 'Genesis 29:26: Custom dictated the older daughter should marry first.',
        difficulty: 'hard'
      },
      {
        id: 'genesis29-q12',
        question: 'What was Leah\'s maidservant\'s name?',
        options: ['Bilhah', 'Zilpah', 'Hagar', 'Deborah'],
        correctAnswer: 'Zilpah',
        explanation: 'Genesis 29:24: Laban gave Zilpah as Leah\'s maidservant.',
        difficulty: 'hard'
      },
      {
        id: 'genesis29-q13',
        question: 'What was Rachel\'s maidservant\'s name?',
        options: ['Zilpah', 'Bilhah', 'Hagar', 'Keturah'],
        correctAnswer: 'Bilhah',
        explanation: 'Genesis 29:29: Laban gave Bilhah as Rachel\'s maidservant.',
        difficulty: 'hard'
      },
      {
        id: 'genesis29-q14',
        question: 'What did Leah say when she bore Judah?',
        options: ['"God has taken away my reproach"', '"This time I will praise the LORD"', '"Now my husband will love me"', '"God has heard me"'],
        correctAnswer: '"This time I will praise the LORD"',
        explanation: 'Genesis 29:35: "This time I will praise the LORD."',
        difficulty: 'hard'
      },
      {
        id: 'genesis29-q15',
        question: 'What does Reuben mean?',
        options: ['"Praise"', '"See, a son" / "The LORD has looked on my affliction"', '"Attached"', '"Hearing"'],
        correctAnswer: '"See, a son" / "The LORD has looked on my affliction"',
        explanation: 'Genesis 29:32: The name relates to God seeing Leah\'s affliction.',
        difficulty: 'hard'
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
    title: 'Jacob\'s Children and Prosperity',
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis30-q1',
        question: 'Who did Rachel give to Jacob as a wife to bear children?',
        options: ['Zilpah', 'Bilhah', 'Leah', 'A concubine'],
        correctAnswer: 'Bilhah',
        explanation: 'Genesis 30:3-4: Rachel gave her servant Bilhah to Jacob.',
        difficulty: 'easy'
      },
      {
        id: 'genesis30-q2',
        question: 'Who did Leah give to Jacob as a wife?',
        options: ['Bilhah', 'Zilpah', 'Her friend', 'Hagar'],
        correctAnswer: 'Zilpah',
        explanation: 'Genesis 30:9: Leah gave her servant Zilpah to Jacob.',
        difficulty: 'easy'
      },
      {
        id: 'genesis30-q3',
        question: 'What did Rachel trade for mandrakes?',
        options: ['Gold', 'A night with Jacob', 'Sheep', 'Clothing'],
        correctAnswer: 'A night with Jacob',
        explanation: 'Genesis 30:15-16: Rachel traded a night with Jacob for Reuben\'s mandrakes.',
        difficulty: 'easy'
      },
      {
        id: 'genesis30-q4',
        question: 'Who was Rachel\'s first son?',
        options: ['Dan', 'Joseph', 'Naphtali', 'Benjamin'],
        correctAnswer: 'Joseph',
        explanation: 'Genesis 30:24: Rachel bore Joseph.',
        difficulty: 'easy'
      },
      {
        id: 'genesis30-q5',
        question: 'Did Jacob become wealthy while with Laban?',
        options: ['No', 'Yes', 'He stayed poor', 'He lost everything'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 30:43: Jacob increased greatly in wealth.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis30-q6',
        question: 'How many sons did Jacob have through his wives and servants?',
        options: ['Ten', 'Eleven', 'Twelve', 'Thirteen'],
        correctAnswer: 'Eleven',
        explanation: 'Genesis 30: Eleven sons were born before Benjamin (chapter 35).',
        difficulty: 'medium'
      },
      {
        id: 'genesis30-q7',
        question: 'What wages did Jacob ask from Laban?',
        options: ['Gold', 'Speckled and spotted animals', 'Half the flock', 'Land'],
        correctAnswer: 'Speckled and spotted animals',
        explanation: 'Genesis 30:32: Jacob asked for every speckled and spotted sheep.',
        difficulty: 'medium'
      },
      {
        id: 'genesis30-q8',
        question: 'What did Jacob use to influence the breeding of the flocks?',
        options: ['Special food', 'Peeled rods at watering troughs', 'Separation', 'Prayer only'],
        correctAnswer: 'Peeled rods at watering troughs',
        explanation: 'Genesis 30:37-38: Jacob peeled rods and placed them at the watering places.',
        difficulty: 'medium'
      },
      {
        id: 'genesis30-q9',
        question: 'Who was Dan\'s mother?',
        options: ['Rachel', 'Leah', 'Bilhah', 'Zilpah'],
        correctAnswer: 'Bilhah',
        explanation: 'Genesis 30:5-6: Bilhah bore Dan to Jacob.',
        difficulty: 'medium'
      },
      {
        id: 'genesis30-q10',
        question: 'What does Joseph mean?',
        options: ['"God judges"', '"May he add"', '"Attached"', '"Happy"'],
        correctAnswer: '"May he add"',
        explanation: 'Genesis 30:24: Rachel said "May the LORD add to me another son."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis30-q11',
        question: 'How many sons did Bilhah bear for Jacob?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 'Two',
        explanation: 'Genesis 30:5-8: Bilhah bore Dan and Naphtali.',
        difficulty: 'hard'
      },
      {
        id: 'genesis30-q12',
        question: 'How many sons did Zilpah bear for Jacob?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 'Two',
        explanation: 'Genesis 30:10-13: Zilpah bore Gad and Asher.',
        difficulty: 'hard'
      },
      {
        id: 'genesis30-q13',
        question: 'What was Leah\'s sixth son named?',
        options: ['Issachar', 'Zebulun', 'Judah', 'Levi'],
        correctAnswer: 'Zebulun',
        explanation: 'Genesis 30:20: Leah\'s sixth son was Zebulun.',
        difficulty: 'hard'
      },
      {
        id: 'genesis30-q14',
        question: 'When did Jacob ask to leave Laban?',
        options: ['Immediately', 'After Joseph was born', 'After 14 years', 'After 20 years'],
        correctAnswer: 'After Joseph was born',
        explanation: 'Genesis 30:25: "As soon as Rachel had borne Joseph, Jacob said to Laban..."',
        difficulty: 'hard'
      },
      {
        id: 'genesis30-q15',
        question: 'Which animals did Jacob selectively breed?',
        options: ['Cattle only', 'The stronger animals', 'The weaker animals', 'All equally'],
        correctAnswer: 'The stronger animals',
        explanation: 'Genesis 30:41-42: Jacob used the rods with stronger animals only.',
        difficulty: 'hard'
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis31-q1',
        question: 'What did Rachel steal from her father?',
        options: ['Gold', 'Household gods', 'Sheep', 'Jewelry'],
        correctAnswer: 'Household gods',
        explanation: 'Genesis 31:19: Rachel stole the household gods.',
        difficulty: 'easy'
      },
      {
        id: 'genesis31-q2',
        question: 'Did Jacob tell Laban he was leaving?',
        options: ['Yes', 'No, he fled secretly', 'He sent a message', 'Laban knew'],
        correctAnswer: 'No, he fled secretly',
        explanation: 'Genesis 31:20: Jacob fled without telling Laban.',
        difficulty: 'easy'
      },
      {
        id: 'genesis31-q3',
        question: 'Who warned Laban not to harm Jacob?',
        options: ['An angel', 'God', 'Abraham', 'Isaac'],
        correctAnswer: 'God',
        explanation: 'Genesis 31:24: God warned Laban in a dream.',
        difficulty: 'easy'
      },
      {
        id: 'genesis31-q4',
        question: 'Did Laban find the stolen household gods?',
        options: ['Yes', 'No', 'He found some', 'He didn\'t search'],
        correctAnswer: 'No',
        explanation: 'Genesis 31:34-35: Rachel hid them and Laban didn\'t find them.',
        difficulty: 'easy'
      },
      {
        id: 'genesis31-q5',
        question: 'Did Jacob and Laban make peace?',
        options: ['No', 'Yes, with a covenant', 'They fought', 'They parted enemies'],
        correctAnswer: 'Yes, with a covenant',
        explanation: 'Genesis 31:44: They made a covenant together.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis31-q6',
        question: 'How long had Jacob worked for Laban?',
        options: ['14 years', '20 years', '7 years', '10 years'],
        correctAnswer: '20 years',
        explanation: 'Genesis 31:41: Jacob served 20 years in Laban\'s house.',
        difficulty: 'medium'
      },
      {
        id: 'genesis31-q7',
        question: 'Where did Rachel hide the household gods?',
        options: ['In a bag', 'In the camel\'s saddle', 'Underground', 'In a tent corner'],
        correctAnswer: 'In the camel\'s saddle',
        explanation: 'Genesis 31:34: Rachel put them in the camel\'s saddle and sat on them.',
        difficulty: 'medium'
      },
      {
        id: 'genesis31-q8',
        question: 'What did Jacob set up as a witness of the covenant?',
        options: ['An altar', 'A pillar and heap of stones', 'A tree', 'A tent'],
        correctAnswer: 'A pillar and heap of stones',
        explanation: 'Genesis 31:45-46: Jacob set up a pillar and they made a heap.',
        difficulty: 'medium'
      },
      {
        id: 'genesis31-q9',
        question: 'What name did Laban give the heap?',
        options: ['Bethel', 'Jegar-sahadutha', 'Mizpah', 'Mahanaim'],
        correctAnswer: 'Jegar-sahadutha',
        explanation: 'Genesis 31:47: Laban called it Jegar-sahadutha (in Aramaic).',
        difficulty: 'medium'
      },
      {
        id: 'genesis31-q10',
        question: 'What name did Jacob give the heap?',
        options: ['Jegar-sahadutha', 'Galeed', 'Bethel', 'Peniel'],
        correctAnswer: 'Galeed',
        explanation: 'Genesis 31:47: Jacob called it Galeed (in Hebrew).',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis31-q11',
        question: 'How many times did Laban change Jacob\'s wages?',
        options: ['Three', 'Five', 'Ten times', 'Twenty times'],
        correctAnswer: 'Ten times',
        explanation: 'Genesis 31:7: "your father has cheated me and changed my wages ten times."',
        difficulty: 'hard'
      },
      {
        id: 'genesis31-q12',
        question: 'What was also called Mizpah?',
        options: ['The pillar', 'The heap of witness', 'The well', 'The altar'],
        correctAnswer: 'The heap of witness',
        explanation: 'Genesis 31:49: The heap was also called Mizpah.',
        difficulty: 'hard'
      },
      {
        id: 'genesis31-q13',
        question: 'What did the Mizpah blessing mean?',
        options: ['Goodbye', 'The LORD watch between you and me', 'Peace', 'Blessing'],
        correctAnswer: 'The LORD watch between you and me',
        explanation: 'Genesis 31:49: "The LORD watch between you and me, when we are out of one another\'s sight."',
        difficulty: 'hard'
      },
      {
        id: 'genesis31-q14',
        question: 'What penalty did Jacob unknowingly pronounce on Rachel?',
        options: ['Exile', 'Death for whoever stole the gods', 'Poverty', 'Servitude'],
        correctAnswer: 'Death for whoever stole the gods',
        explanation: 'Genesis 31:32: "Anyone with whom you find your gods shall not live."',
        difficulty: 'hard'
      },
      {
        id: 'genesis31-q15',
        question: 'How many days did it take Laban to catch up to Jacob?',
        options: ['Three', 'Seven', 'Ten', 'Fourteen'],
        correctAnswer: 'Seven',
        explanation: 'Genesis 31:23: Laban pursued Jacob for seven days.',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 31:49',
    key_verse_text: "'The Lord watch between you and me, when we are out of one another\'s sight.'",
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis32-q1',
        question: 'Who did Jacob wrestle with all night?',
        options: ['An angel', 'A man', 'Esau', 'Laban'],
        correctAnswer: 'A man',
        explanation: 'Genesis 32:24: A man wrestled with Jacob until daybreak.',
        difficulty: 'easy'
      },
      {
        id: 'genesis32-q2',
        question: 'What new name did Jacob receive?',
        options: ['Abraham', 'Israel', 'Isaac', 'Judah'],
        correctAnswer: 'Israel',
        explanation: 'Genesis 32:28: "Your name shall no longer be Jacob, but Israel."',
        difficulty: 'easy'
      },
      {
        id: 'genesis32-q3',
        question: 'What did Jacob send to Esau?',
        options: ['A message', 'Gifts of livestock', 'Money', 'Weapons'],
        correctAnswer: 'Gifts of livestock',
        explanation: 'Genesis 32:13-15: Jacob sent herds as a gift to Esau.',
        difficulty: 'easy'
      },
      {
        id: 'genesis32-q4',
        question: 'What did Jacob name the place where he wrestled?',
        options: ['Bethel', 'Peniel', 'Mahanaim', 'Beersheba'],
        correctAnswer: 'Peniel',
        explanation: 'Genesis 32:30: Jacob called it Peniel (face of God).',
        difficulty: 'easy'
      },
      {
        id: 'genesis32-q5',
        question: 'Was Jacob afraid to meet Esau?',
        options: ['No', 'Yes', 'He was confident', 'He was excited'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 32:7: Jacob was greatly afraid and distressed.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis32-q6',
        question: 'What was injured during Jacob\'s wrestling match?',
        options: ['His arm', 'His hip socket', 'His leg', 'His shoulder'],
        correctAnswer: 'His hip socket',
        explanation: 'Genesis 32:25: The man touched Jacob\'s hip socket.',
        difficulty: 'medium'
      },
      {
        id: 'genesis32-q7',
        question: 'Who met Jacob when he set out?',
        options: ['Laban', 'Angels of God', 'Esau\'s men', 'Servants'],
        correctAnswer: 'Angels of God',
        explanation: 'Genesis 32:1: The angels of God met Jacob.',
        difficulty: 'medium'
      },
      {
        id: 'genesis32-q8',
        question: 'What did Jacob call the place where angels met him?',
        options: ['Peniel', 'Mahanaim', 'Bethel', 'Mizpah'],
        correctAnswer: 'Mahanaim',
        explanation: 'Genesis 32:2: Jacob called it Mahanaim (two camps).',
        difficulty: 'medium'
      },
      {
        id: 'genesis32-q9',
        question: 'How did Jacob divide his camp?',
        options: ['Into three groups', 'Into two camps', 'He didn\'t divide it', 'Into four groups'],
        correctAnswer: 'Into two camps',
        explanation: 'Genesis 32:7: Jacob divided the people into two camps.',
        difficulty: 'medium'
      },
      {
        id: 'genesis32-q10',
        question: 'What did Jacob ask the man for before letting him go?',
        options: ['His name', 'A blessing', 'Forgiveness', 'Strength'],
        correctAnswer: 'A blessing',
        explanation: 'Genesis 32:26: "I will not let you go unless you bless me."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis32-q11',
        question: 'Why was Jacob given the name Israel?',
        options: ['He was blessed', 'He struggled with God and men and prevailed', 'He was faithful', 'He was strong'],
        correctAnswer: 'He struggled with God and men and prevailed',
        explanation: 'Genesis 32:28: "for you have striven with God and with men, and have prevailed."',
        difficulty: 'hard'
      },
      {
        id: 'genesis32-q12',
        question: 'Did the man tell Jacob his name?',
        options: ['Yes', 'No', 'He revealed it partly', 'Later he did'],
        correctAnswer: 'No',
        explanation: 'Genesis 32:29: "Why is it that you ask my name?" And he blessed him there.',
        difficulty: 'hard'
      },
      {
        id: 'genesis32-q13',
        question: 'When did the wrestling end?',
        options: ['At midnight', 'At daybreak', 'At sunset', 'In the afternoon'],
        correctAnswer: 'At daybreak',
        explanation: 'Genesis 32:24: They wrestled "until the breaking of the day."',
        difficulty: 'hard'
      },
      {
        id: 'genesis32-q14',
        question: 'How many men did Jacob hear were coming with Esau?',
        options: ['100', '200', '400', '1000'],
        correctAnswer: '400',
        explanation: 'Genesis 32:6: "Esau is coming to meet you, and four hundred men with him."',
        difficulty: 'hard'
      },
      {
        id: 'genesis32-q15',
        question: 'What does Peniel mean?',
        options: ['"House of God"', '"Face of God"', '"Struggle"', '"Two camps"'],
        correctAnswer: '"Face of God"',
        explanation: 'Genesis 32:30: "For I have seen God face to face."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 32:28',
    key_verse_text: "\"Your name shall no longer be called Jacob, but Israel, for you have striven with God and with men, and have prevailed.\"",
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis33-q1',
        question: 'How did Esau greet Jacob?',
        options: ['With anger', 'Embraced and kissed him', 'With a sword', 'He ignored him'],
        correctAnswer: 'Embraced and kissed him',
        explanation: 'Genesis 33:4 (ESV): "But Esau ran to meet him and embraced him and fell on his neck and kissed him, and they wept."',
        difficulty: 'easy'
      },
      {
        id: 'genesis33-q2',
        question: 'What did Jacob offer Esau?',
        options: ['Gold', 'A gift of livestock', 'Land', 'Clothing'],
        correctAnswer: 'A gift of livestock',
        explanation: 'Genesis 33:10-11: Jacob urged Esau to accept his gift of livestock.',
        difficulty: 'easy'
      },
      {
        id: 'genesis33-q3',
        question: 'Where did Jacob settle after meeting Esau?',
        options: ['Haran', 'Succoth', 'Bethel', 'Gerar'],
        correctAnswer: 'Succoth',
        explanation: 'Genesis 33:17: Jacob journeyed to Succoth and built a house there.',
        difficulty: 'easy'
      },
      {
        id: 'genesis33-q4',
        question: 'Did Jacob and Esau reconcile peacefully?',
        options: ['No, they fought', 'Yes', 'They avoided each other', 'Esau attacked'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 33:4: Esau ran to meet Jacob, embraced him, and they wept together.',
        difficulty: 'easy'
      },
      {
        id: 'genesis33-q5',
        question: 'What did Jacob buy near Shechem?',
        options: ['A house', 'A piece of land', 'Livestock', 'A well'],
        correctAnswer: 'A piece of land',
        explanation: 'Genesis 33:19: Jacob bought a piece of land from the sons of Hamor.',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis33-q6',
        question: 'How many men were with Esau when he came to meet Jacob?',
        options: ['100', '200', '400', '1000'],
        correctAnswer: '400',
        explanation: 'Genesis 33:1: Esau was coming with four hundred men.',
        difficulty: 'medium'
      },
      {
        id: 'genesis33-q7',
        question: 'How did Jacob arrange his family when meeting Esau?',
        options: ['All together', 'Servants first, Rachel and Joseph last', 'Men in front, women behind', 'He hid them'],
        correctAnswer: 'Servants first, Rachel and Joseph last',
        explanation: 'Genesis 33:2: Jacob put the servants first, Leah and her children next, and Rachel and Joseph last.',
        difficulty: 'medium'
      },
      {
        id: 'genesis33-q8',
        question: 'What did Jacob do as he approached Esau?',
        options: ['Ran toward him', 'Bowed seven times', 'Called out to him', 'Hid behind his servants'],
        correctAnswer: 'Bowed seven times',
        explanation: 'Genesis 33:3: Jacob went on before them, bowing himself to the ground seven times.',
        difficulty: 'medium'
      },
      {
        id: 'genesis33-q9',
        question: 'What did Esau offer to do for Jacob?',
        options: ['Give him land', 'Travel together', 'Build him a house', 'Give him servants'],
        correctAnswer: 'Travel together',
        explanation: 'Genesis 33:12: Esau said, "Let us journey on our way, and I will go ahead of you."',
        difficulty: 'medium'
      },
      {
        id: 'genesis33-q10',
        question: "What did Jacob say about seeing Esau's face?",
        options: ['It frightened him', 'It was like seeing the face of God', 'It made him weep', 'It reminded him of their father'],
        correctAnswer: 'It was like seeing the face of God',
        explanation: 'Genesis 33:10: "for I have seen your face, which is like seeing the face of God."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis33-q11',
        question: 'Why did Jacob decline to travel with Esau?',
        options: ['He was afraid', 'The children were frail and the flocks needed care', 'He wanted to go to Bethel', "He didn't trust Esau"],
        correctAnswer: 'The children were frail and the flocks needed care',
        explanation: 'Genesis 33:13: Jacob said the children are frail and the nursing flocks needed gentle driving.',
        difficulty: 'hard'
      },
      {
        id: 'genesis33-q12',
        question: 'What does "Succoth" mean?',
        options: ['Rest', 'Booths', 'Peace', 'Dwelling'],
        correctAnswer: 'Booths',
        explanation: 'Genesis 33:17: Jacob built booths for his livestock, so the place was called Succoth (booths).',
        difficulty: 'hard'
      },
      {
        id: 'genesis33-q13',
        question: 'How much did Jacob pay for the land near Shechem?',
        options: ['50 pieces of money', 'A hundred pieces of money', '400 shekels of silver', 'Ten pieces of gold'],
        correctAnswer: 'A hundred pieces of money',
        explanation: 'Genesis 33:19: He bought it for a hundred pieces of money.',
        difficulty: 'hard'
      },
      {
        id: 'genesis33-q14',
        question: 'What did Jacob name the altar he built near Shechem?',
        options: ['Bethel', 'El-Elohe-Israel', 'Mizpah', 'Peniel'],
        correctAnswer: 'El-Elohe-Israel',
        explanation: 'Genesis 33:20: Jacob erected an altar and called it El-Elohe-Israel (God, the God of Israel).',
        difficulty: 'hard'
      },
      {
        id: 'genesis33-q15',
        question: 'Where did Esau return to after meeting Jacob?',
        options: ['Canaan', 'Seir', 'Haran', 'Beersheba'],
        correctAnswer: 'Seir',
        explanation: 'Genesis 33:16: Esau returned that day on his way to Seir.',
        difficulty: 'hard'
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis34-q1',
        question: "Who violated Jacob's daughter Dinah?",
        options: ['Abimelech', 'Shechem, son of Hamor', 'Esau', 'Laban'],
        correctAnswer: 'Shechem, son of Hamor',
        explanation: 'Genesis 34:2 (ESV): "And when Shechem the son of Hamor the Hivite, the prince of the land, saw her, he seized her and lay with her and humiliated her."',
        difficulty: 'easy'
      },
      {
        id: 'genesis34-q2',
        question: 'What did Shechem ask of Jacob?',
        options: ['A dowry', 'To marry Dinah', 'An alliance', 'Peace'],
        correctAnswer: 'To marry Dinah',
        explanation: 'Genesis 34:8: Hamor spoke with them, saying his son Shechem longed for Dinah and asked for her as his wife.',
        difficulty: 'easy'
      },
      {
        id: 'genesis34-q3',
        question: 'Who killed the men of Shechem?',
        options: ['Isaac', 'Simeon and Levi', 'Judah', 'Reuben'],
        correctAnswer: 'Simeon and Levi',
        explanation: "Genesis 34:25: Simeon and Levi, Dinah's brothers, took their swords and attacked the city.",
        difficulty: 'easy'
      },
      {
        id: 'genesis34-q4',
        question: 'What did Jacob fear after the attack on Shechem?',
        options: ['Loss of wealth', 'Retaliation by Canaanites', 'Famine', 'Exile'],
        correctAnswer: 'Retaliation by Canaanites',
        explanation: 'Genesis 34:30: Jacob feared the Canaanites and Perizzites would gather against him and attack.',
        difficulty: 'easy'
      },
      {
        id: 'genesis34-q5',
        question: 'Did Shechem love Dinah?',
        options: ['No', 'Yes', 'It is not mentioned', 'He hated her'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 34:3: "His soul was drawn to Dinah...he loved the young woman and spoke tenderly to her."',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis34-q6',
        question: "What condition did Jacob's sons set for allowing intermarriage?",
        options: ['Payment of gold', 'Circumcision of all males', 'Building an altar', 'Leaving the land'],
        correctAnswer: 'Circumcision of all males',
        explanation: 'Genesis 34:15: They would agree only if every male among the Shechemites was circumcised.',
        difficulty: 'medium'
      },
      {
        id: 'genesis34-q7',
        question: 'When did Simeon and Levi attack the city?',
        options: ['At night', 'On the third day when the men were sore', 'During a feast', 'At dawn'],
        correctAnswer: 'On the third day when the men were sore',
        explanation: 'Genesis 34:25: On the third day after circumcision, when the men were still in pain, they attacked.',
        difficulty: 'medium'
      },
      {
        id: 'genesis34-q8',
        question: "What did Jacob's sons do after killing the men?",
        options: ['Fled immediately', 'Plundered the city', 'Buried the dead', 'Made peace'],
        correctAnswer: 'Plundered the city',
        explanation: 'Genesis 34:27-29: The sons of Jacob plundered the city, taking flocks, herds, donkeys, wealth, women, and children.',
        difficulty: 'medium'
      },
      {
        id: 'genesis34-q9',
        question: 'Who was Hamor?',
        options: ['A servant of Jacob', 'The father of Shechem', 'A Pharaoh', 'A priest'],
        correctAnswer: 'The father of Shechem',
        explanation: 'Genesis 34:2: Shechem was the son of Hamor the Hivite, the prince of the land.',
        difficulty: 'medium'
      },
      {
        id: 'genesis34-q10',
        question: "Were Jacob's sons honest in their demand for circumcision?",
        options: ['Yes, it was sincere', 'No, they answered deceitfully', 'They were unsure', 'Jacob told them to'],
        correctAnswer: 'No, they answered deceitfully',
        explanation: 'Genesis 34:13: "The sons of Jacob answered Shechem and his father Hamor deceitfully."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis34-q11',
        question: "What did Hamor propose to Jacob's family besides the marriage?",
        options: ['To leave the land', 'Intermarriage and shared land', 'To pay double dowry', 'To serve Jacob'],
        correctAnswer: 'Intermarriage and shared land',
        explanation: 'Genesis 34:9-10: Hamor proposed mutual intermarriage, dwelling together, trading, and acquiring property.',
        difficulty: 'hard'
      },
      {
        id: 'genesis34-q12',
        question: 'How did Simeon and Levi justify their actions?',
        options: ['God commanded it', 'Should Dinah be treated like a prostitute?', 'They blamed Jacob', 'They denied involvement'],
        correctAnswer: 'Should Dinah be treated like a prostitute?',
        explanation: 'Genesis 34:31: "But they said, \'Should he treat our sister like a prostitute?\'"',
        difficulty: 'hard'
      },
      {
        id: 'genesis34-q13',
        question: 'Where did the Shechemites agree to be circumcised?',
        options: ['In the temple', 'At the gate of the city', "In Jacob's camp", 'By the river'],
        correctAnswer: 'At the gate of the city',
        explanation: 'Genesis 34:20: Hamor and Shechem went to the gate of their city and spoke to the men.',
        difficulty: 'hard'
      },
      {
        id: 'genesis34-q14',
        question: 'What argument did Hamor use to convince the Shechemites?',
        options: ['Fear of God', "Jacob's livestock would become theirs", "Jacob would share his God", 'Military alliance'],
        correctAnswer: "Jacob's livestock would become theirs",
        explanation: 'Genesis 34:23: "Will not their livestock, their property, and all their beasts be ours?"',
        difficulty: 'hard'
      },
      {
        id: 'genesis34-q15',
        question: 'What was Dinah doing when Shechem first saw her?',
        options: ['Drawing water', 'Going out to see the women of the land', 'Tending sheep', 'Praying'],
        correctAnswer: 'Going out to see the women of the land',
        explanation: 'Genesis 34:1: "Now Dinah the daughter of Leah went out to see the women of the land."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 34:30',
    key_verse_text: "Then Jacob said to Simeon and Levi, 'You have brought trouble on me by making me stink to the inhabitants of the land.'",
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
      // EASY QUESTIONS (5)
      {
        id: 'genesis35-q1',
        question: 'Where did God tell Jacob to go?',
        options: ['Egypt', 'Bethel', 'Haran', 'Shechem'],
        correctAnswer: 'Bethel',
        explanation: 'Genesis 35:1 (ESV): "God said to Jacob, \'Arise, go up to Bethel and dwell there.\'"',
        difficulty: 'easy'
      },
      {
        id: 'genesis35-q2',
        question: 'Who died and was buried near Bethlehem?',
        options: ['Leah', 'Rachel', 'Rebekah', 'Sarah'],
        correctAnswer: 'Rachel',
        explanation: 'Genesis 35:19: "So Rachel died, and she was buried on the way to Ephrath (that is, Bethlehem)."',
        difficulty: 'easy'
      },
      {
        id: 'genesis35-q3',
        question: 'What was the name of the son born as Rachel was dying?',
        options: ['Judah', 'Benjamin', 'Joseph', 'Dan'],
        correctAnswer: 'Benjamin',
        explanation: 'Genesis 35:18: Rachel named him Ben-oni, but Jacob called him Benjamin.',
        difficulty: 'easy'
      },
      {
        id: 'genesis35-q4',
        question: 'How many sons did Jacob have?',
        options: ['Ten', 'Twelve', 'Eight', 'Fourteen'],
        correctAnswer: 'Twelve',
        explanation: 'Genesis 35:22-26: Jacob had twelve sons total.',
        difficulty: 'easy'
      },
      {
        id: 'genesis35-q5',
        question: 'Who died at the age of 180 years?',
        options: ['Abraham', 'Isaac', 'Jacob', 'Joseph'],
        correctAnswer: 'Isaac',
        explanation: 'Genesis 35:28: "Now the days of Isaac were 180 years."',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis35-q6',
        question: 'What did Jacob tell his household to do before going to Bethel?',
        options: ['Fast for seven days', 'Put away foreign gods and purify themselves', 'Offer burnt offerings', 'Shave their heads'],
        correctAnswer: 'Put away foreign gods and purify themselves',
        explanation: 'Genesis 35:2: "Put away the foreign gods that are among you and purify yourselves and change your garments."',
        difficulty: 'medium'
      },
      {
        id: 'genesis35-q7',
        question: 'What did God rename Jacob?',
        options: ['Abraham', 'Israel', 'Judah', 'Benjamin'],
        correctAnswer: 'Israel',
        explanation: 'Genesis 35:10: "Your name is Jacob; no longer shall your name be called Jacob, but Israel shall be your name."',
        difficulty: 'medium'
      },
      {
        id: 'genesis35-q8',
        question: 'What name did Rachel give her newborn before she died?',
        options: ['Benjamin', 'Ben-oni', 'Benaiah', 'Bethuel'],
        correctAnswer: 'Ben-oni',
        explanation: 'Genesis 35:18: Rachel called him Ben-oni (son of my sorrow), but Jacob called him Benjamin.',
        difficulty: 'medium'
      },
      {
        id: 'genesis35-q9',
        question: "What sin did Reuben commit?",
        options: ['He stole from Jacob', 'He lay with Bilhah, his father\'s concubine', 'He worshiped idols', 'He murdered a man'],
        correctAnswer: "He lay with Bilhah, his father's concubine",
        explanation: 'Genesis 35:22: "Reuben went and lay with Bilhah his father\'s concubine. And Israel heard of it."',
        difficulty: 'medium'
      },
      {
        id: 'genesis35-q10',
        question: 'Who buried Isaac?',
        options: ['Jacob alone', 'Esau and Jacob', 'Joseph', 'The Hittites'],
        correctAnswer: 'Esau and Jacob',
        explanation: 'Genesis 35:29: "Esau and Jacob his sons buried him."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis35-q11',
        question: 'Where did Jacob hide the foreign gods?',
        options: ['In a river', 'Under the terebinth tree near Shechem', 'In a cave', 'He burned them'],
        correctAnswer: 'Under the terebinth tree near Shechem',
        explanation: 'Genesis 35:4: "Jacob hid them under the terebinth tree that was near Shechem."',
        difficulty: 'hard'
      },
      {
        id: 'genesis35-q12',
        question: "Who was Deborah in this chapter?",
        options: ['A prophetess', "Rebekah's nurse", "Rachel's servant", "Leah's daughter"],
        correctAnswer: "Rebekah's nurse",
        explanation: 'Genesis 35:8: "And Deborah, Rebekah\'s nurse, died, and she was buried under an oak below Bethel."',
        difficulty: 'hard'
      },
      {
        id: 'genesis35-q13',
        question: 'What did Jacob set up at the place where God spoke to him?',
        options: ['An altar of stone', 'A pillar of stone and poured a drink offering on it', 'A tent', 'A well'],
        correctAnswer: 'A pillar of stone and poured a drink offering on it',
        explanation: 'Genesis 35:14: "Jacob set up a pillar...a pillar of stone. He poured out a drink offering on it and poured oil on it."',
        difficulty: 'hard'
      },
      {
        id: 'genesis35-q14',
        question: 'What promise did God reaffirm to Jacob at Bethel?',
        options: ['Victory in battle', 'A nation and kings would come from him', 'Long life', 'Great wealth'],
        correctAnswer: 'A nation and kings would come from him',
        explanation: 'Genesis 35:11: "A nation and a company of nations shall come from you, and kings shall spring from you."',
        difficulty: 'hard'
      },
      {
        id: 'genesis35-q15',
        question: 'Where was Jacob when Rachel began giving birth?',
        options: ['At Bethel', 'Some distance from Ephrath', 'In Shechem', 'At Hebron'],
        correctAnswer: 'Some distance from Ephrath',
        explanation: 'Genesis 35:16: "Then they journeyed from Bethel. When they were still some distance from Ephrath, Rachel went into labor."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 35:10',
    key_verse_text: "Your name is Jacob; no longer shall your name be called Jacob, but Israel shall be your name.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'genesis-36',
    bookId: 'genesis',
    chapter: 36,
    title: "Esau's Descendants",
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis36-q1',
        question: 'What is another name for Esau?',
        options: ['Israel', 'Edom', 'Moab', 'Ammon'],
        correctAnswer: 'Edom',
        explanation: 'Genesis 36:1 (ESV): "These are the generations of Esau (that is, Edom)."',
        difficulty: 'easy'
      },
      {
        id: 'genesis36-q2',
        question: 'Where did Esau settle?',
        options: ['Canaan', 'The hill country of Seir', 'Egypt', 'Haran'],
        correctAnswer: 'The hill country of Seir',
        explanation: 'Genesis 36:8: "So Esau settled in the hill country of Seir. Esau is Edom."',
        difficulty: 'easy'
      },
      {
        id: 'genesis36-q3',
        question: 'Why did Esau move away from Jacob?',
        options: ['They fought', 'Their possessions were too great to dwell together', 'God commanded it', 'Famine'],
        correctAnswer: 'Their possessions were too great to dwell together',
        explanation: 'Genesis 36:7: "For their possessions were too great for them to dwell together."',
        difficulty: 'easy'
      },
      {
        id: 'genesis36-q4',
        question: 'From how many wives did Esau have sons?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 'Three',
        explanation: 'Genesis 36:2-5: Esau had sons from Adah, Oholibamah, and Basemath.',
        difficulty: 'easy'
      },
      {
        id: 'genesis36-q5',
        question: 'What people descended from Esau?',
        options: ['Israelites', 'Edomites', 'Moabites', 'Ammonites'],
        correctAnswer: 'Edomites',
        explanation: 'Genesis 36:9: "These are the generations of Esau the father of the Edomites in the hill country of Seir."',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis36-q6',
        question: "Who was Esau's grandson through Eliphaz?",
        options: ['Teman', 'Korah', 'Both Teman and others', 'None listed'],
        correctAnswer: 'Both Teman and others',
        explanation: 'Genesis 36:11: "The sons of Eliphaz were Teman, Omar, Zepho, Gatam, and Kenaz."',
        difficulty: 'medium'
      },
      {
        id: 'genesis36-q7',
        question: 'Who was Amalek in relation to Esau?',
        options: ['Son', 'Grandson', 'Brother', 'Servant'],
        correctAnswer: 'Grandson',
        explanation: 'Genesis 36:12: "Timna was a concubine of Eliphaz...and she bore Amalek to Eliphaz."',
        difficulty: 'medium'
      },
      {
        id: 'genesis36-q8',
        question: 'What type of leaders ruled Edom?',
        options: ['Judges', 'Chiefs (or clan leaders)', 'Prophets', 'Priests'],
        correctAnswer: 'Chiefs (or clan leaders)',
        explanation: 'Genesis 36:15-19: The sons of Esau became chiefs of their clans.',
        difficulty: 'medium'
      },
      {
        id: 'genesis36-q9',
        question: "Who were Esau's wives from?",
        options: ['Israelites', 'Canaanite and Ishmaelite women', 'Egyptians', 'Philistines'],
        correctAnswer: 'Canaanite and Ishmaelite women',
        explanation: 'Genesis 36:2-3: Esau married Canaanite women and Basemath, daughter of Ishmael.',
        difficulty: 'medium'
      },
      {
        id: 'genesis36-q10',
        question: 'Did Edom have kings before Israel?',
        options: ['No', 'Yes', 'At the same time', 'It is not mentioned'],
        correctAnswer: 'Yes',
        explanation: 'Genesis 36:31: "These are the kings who reigned in the land of Edom, before any king reigned over the Israelites."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis36-q11',
        question: 'Who were the Horites?',
        options: ['Egyptian slaves', 'The original inhabitants of Seir', 'Canaanite priests', 'Philistine warriors'],
        correctAnswer: 'The original inhabitants of Seir',
        explanation: 'Genesis 36:20: "These are the sons of Seir the Horite, the inhabitants of the land."',
        difficulty: 'hard'
      },
      {
        id: 'genesis36-q12',
        question: 'Who was Anah and what did he discover?',
        options: ['A king who found gold', 'A chief who found hot springs in the wilderness', 'A shepherd who found a well', 'A priest who found an altar'],
        correctAnswer: 'A chief who found hot springs in the wilderness',
        explanation: 'Genesis 36:24: "He is the Anah who found the hot springs in the wilderness."',
        difficulty: 'hard'
      },
      {
        id: 'genesis36-q13',
        question: 'How many kings of Edom are listed in this chapter?',
        options: ['Five', 'Eight', 'Twelve', 'Three'],
        correctAnswer: 'Eight',
        explanation: 'Genesis 36:31-39: Eight kings are listed who reigned in Edom.',
        difficulty: 'hard'
      },
      {
        id: 'genesis36-q14',
        question: "What was the name of Esau's first son?",
        options: ['Reuel', 'Eliphaz', 'Korah', 'Jeush'],
        correctAnswer: 'Eliphaz',
        explanation: 'Genesis 36:10: "Eliphaz the son of Adah the wife of Esau."',
        difficulty: 'hard'
      },
      {
        id: 'genesis36-q15',
        question: "Who was Timna?",
        options: ['A wife of Esau', 'A concubine of Eliphaz', 'A daughter of Jacob', 'A queen of Edom'],
        correctAnswer: 'A concubine of Eliphaz',
        explanation: 'Genesis 36:12: "Timna was a concubine of Eliphaz, Esau\'s son; she bore Amalek to Eliphaz."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 36:8',
    key_verse_text: "So Esau settled in the hill country of Seir. Esau is Edom.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },

  {
    id: 'genesis-37',
    bookId: 'genesis',
    chapter: 37,
    title: "Joseph's Dreams and Betrayal",
    questions: [
      // EASY QUESTIONS (5)
      {
        id: 'genesis37-q1',
        question: 'What special garment did Jacob give Joseph?',
        options: ['A golden crown', 'A robe of many colors', 'A suit of armor', 'A priestly garment'],
        correctAnswer: 'A robe of many colors',
        explanation: 'Genesis 37:3 (ESV): "Now Israel loved Joseph more than any other of his sons...And he made him a robe of many colors."',
        difficulty: 'easy'
      },
      {
        id: 'genesis37-q2',
        question: "Why did Joseph's brothers hate him?",
        options: ['He was lazy', 'Their father loved him more', 'He stole from them', 'He was the oldest'],
        correctAnswer: 'Their father loved him more',
        explanation: 'Genesis 37:4: "But when his brothers saw that their father loved him more than all his brothers, they hated him."',
        difficulty: 'easy'
      },
      {
        id: 'genesis37-q3',
        question: 'What did Joseph dream about sheaves?',
        options: ['They were burned', "His brothers' sheaves bowed to his", 'They flew away', 'They turned to dust'],
        correctAnswer: "His brothers' sheaves bowed to his",
        explanation: 'Genesis 37:7: "Your sheaves gathered around it and bowed down to my sheaf."',
        difficulty: 'easy'
      },
      {
        id: 'genesis37-q4',
        question: "What did Joseph's brothers do to him?",
        options: ['Honored him', 'Sold him to traders', 'Sent him to school', 'Made him king'],
        correctAnswer: 'Sold him to traders',
        explanation: 'Genesis 37:28: "They...sold him to the Ishmaelites for twenty shekels of silver."',
        difficulty: 'easy'
      },
      {
        id: 'genesis37-q5',
        question: 'Where was Joseph taken to?',
        options: ['Babylon', 'Egypt', 'Haran', 'Moab'],
        correctAnswer: 'Egypt',
        explanation: 'Genesis 37:28: "They took Joseph to Egypt."',
        difficulty: 'easy'
      },
      // MEDIUM QUESTIONS (5)
      {
        id: 'genesis37-q6',
        question: 'In his second dream, what bowed down to Joseph?',
        options: ['Stars only', 'The sun, moon, and eleven stars', 'Trees', 'Animals'],
        correctAnswer: 'The sun, moon, and eleven stars',
        explanation: 'Genesis 37:9: "The sun, the moon, and eleven stars were bowing down to me."',
        difficulty: 'medium'
      },
      {
        id: 'genesis37-q7',
        question: 'Which brother suggested not killing Joseph?',
        options: ['Judah', 'Reuben', 'Simeon', 'Levi'],
        correctAnswer: 'Reuben',
        explanation: 'Genesis 37:21-22: "Reuben heard it and rescued him out of their hands, saying, \'Let us not take his life.\'"',
        difficulty: 'medium'
      },
      {
        id: 'genesis37-q8',
        question: 'What did the brothers do to deceive Jacob?',
        options: ['Said Joseph ran away', "Dipped Joseph's robe in goat blood", 'Said he drowned', 'Said a fire killed him'],
        correctAnswer: "Dipped Joseph's robe in goat blood",
        explanation: 'Genesis 37:31: "They took Joseph\'s robe and slaughtered a goat and dipped the robe in the blood."',
        difficulty: 'medium'
      },
      {
        id: 'genesis37-q9',
        question: 'How much was Joseph sold for?',
        options: ['Ten shekels', 'Twenty shekels of silver', 'Thirty pieces of gold', 'Fifty shekels'],
        correctAnswer: 'Twenty shekels of silver',
        explanation: 'Genesis 37:28: "They...sold him to the Ishmaelites for twenty shekels of silver."',
        difficulty: 'medium'
      },
      {
        id: 'genesis37-q10',
        question: 'Who bought Joseph in Egypt?',
        options: ['Pharaoh', 'Potiphar', 'The jailer', 'A priest'],
        correctAnswer: 'Potiphar',
        explanation: 'Genesis 37:36: "The Midianites had sold him in Egypt to Potiphar, an officer of Pharaoh."',
        difficulty: 'medium'
      },
      // HARD QUESTIONS (5)
      {
        id: 'genesis37-q11',
        question: 'Which brother proposed selling Joseph instead of killing him?',
        options: ['Reuben', 'Judah', 'Simeon', 'Dan'],
        correctAnswer: 'Judah',
        explanation: 'Genesis 37:26-27: "Then Judah said...Come, let us sell him to the Ishmaelites."',
        difficulty: 'hard'
      },
      {
        id: 'genesis37-q12',
        question: 'Where were the brothers pasturing when Joseph was sent to them?',
        options: ['Hebron', 'Shechem, then Dothan', 'Bethel', 'Beersheba'],
        correctAnswer: 'Shechem, then Dothan',
        explanation: 'Genesis 37:12-17: Jacob sent Joseph to Shechem, but the brothers had moved to Dothan.',
        difficulty: 'hard'
      },
      {
        id: 'genesis37-q13',
        question: 'Where did the brothers first throw Joseph?',
        options: ['A river', 'A pit (cistern)', 'A cave', 'A field'],
        correctAnswer: 'A pit (cistern)',
        explanation: 'Genesis 37:24: "They took him and threw him into a pit. The pit was empty; there was no water in it."',
        difficulty: 'hard'
      },
      {
        id: 'genesis37-q14',
        question: 'What was Potiphar\'s role?',
        options: ['Pharaoh\'s cupbearer', 'Captain of the guard', 'Chief baker', 'Tax collector'],
        correctAnswer: 'Captain of the guard',
        explanation: 'Genesis 37:36: "Potiphar, an officer of Pharaoh, the captain of the guard."',
        difficulty: 'hard'
      },
      {
        id: 'genesis37-q15',
        question: 'How old was Joseph when he had his dreams?',
        options: ['Twelve', 'Seventeen', 'Twenty', 'Thirty'],
        correctAnswer: 'Seventeen',
        explanation: 'Genesis 37:2: "Joseph, being seventeen years old, was pasturing the flock with his brothers."',
        difficulty: 'hard'
      }
    ],
    key_verse: 'Genesis 37:28',
    key_verse_text: "They drew Joseph up and lifted him out of the pit, and sold him to the Ishmaelites for twenty shekels of silver.",
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
            // EASY QUESTIONS (5)
            {
              id: 'genesis38-q1',
              question: "Who was Judah's first son?",
              options: ['Shelah', 'Er', 'Onan', 'Perez'],
              correctAnswer: 'Er',
              explanation: 'Genesis 38:3 (ESV): "She conceived and bore a son, and he called his name Er."',
              difficulty: 'easy'
            },
            {
              id: 'genesis38-q2',
              question: 'Why did God put Er to death?',
              options: ['He stole', 'He was wicked', 'He lied', 'He worshiped idols'],
              correctAnswer: 'He was wicked',
              explanation: 'Genesis 38:7: "But Er, Judah\'s firstborn, was wicked in the sight of the LORD, and the LORD put him to death."',
              difficulty: 'easy'
            },
            {
              id: 'genesis38-q3',
              question: 'Who disguised herself to deceive Judah?',
              options: ['Leah', 'Tamar', 'Rachel', 'Dinah'],
              correctAnswer: 'Tamar',
              explanation: 'Genesis 38:14: "She took off her widow\'s garments and covered herself with a veil."',
              difficulty: 'easy'
            },
            {
              id: 'genesis38-q4',
              question: 'What twins did Tamar bear?',
              options: ['Jacob and Esau', 'Perez and Zerah', 'Simeon and Levi', 'Er and Onan'],
              correctAnswer: 'Perez and Zerah',
              explanation: 'Genesis 38:27-30: Tamar gave birth to twins: Perez and Zerah.',
              difficulty: 'easy'
            },
            {
              id: 'genesis38-q5',
              question: "Who was Judah's wife?",
              options: ['Tamar', 'The daughter of Shua', 'Rachel', 'Leah'],
              correctAnswer: 'The daughter of Shua',
              explanation: 'Genesis 38:2: "There Judah saw the daughter of a certain Canaanite whose name was Shua. He took her and went in to her."',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis38-q6',
              question: 'Why did God put Onan to death?',
              options: ['He murdered', 'He refused to raise offspring for his brother', 'He stole', 'He blasphemed'],
              correctAnswer: 'He refused to raise offspring for his brother',
              explanation: 'Genesis 38:9-10: Onan refused to fulfill his duty to raise offspring for his brother, and God put him to death.',
              difficulty: 'medium'
            },
            {
              id: 'genesis38-q7',
              question: 'What pledge did Judah give Tamar?',
              options: ['Money', 'His signet, cord, and staff', 'A ring', 'Livestock'],
              correctAnswer: 'His signet, cord, and staff',
              explanation: 'Genesis 38:18: "He said, \'What pledge shall I give you?\' She replied, \'Your signet and your cord and your staff.\'"',
              difficulty: 'medium'
            },
            {
              id: 'genesis38-q8',
              question: "What was Judah's initial reaction when he learned Tamar was pregnant?",
              options: ['Joy', 'He ordered her to be burned', 'He forgave her', 'He ignored it'],
              correctAnswer: 'He ordered her to be burned',
              explanation: 'Genesis 38:24: "Judah said, \'Bring her out, and let her be burned.\'"',
              difficulty: 'medium'
            },
            {
              id: 'genesis38-q9',
              question: 'How did Tamar prove Judah was the father?',
              options: ['She had witnesses', 'She showed his signet, cord, and staff', 'She swore an oath', 'A servant testified'],
              correctAnswer: 'She showed his signet, cord, and staff',
              explanation: 'Genesis 38:25: "She sent to her father-in-law, saying, \'By the man to whom these belong, I am pregnant.\'"',
              difficulty: 'medium'
            },
            {
              id: 'genesis38-q10',
              question: 'What did Judah say about Tamar after learning the truth?',
              options: ['She should still die', 'She is more righteous than I', 'She should be exiled', 'He said nothing'],
              correctAnswer: 'She is more righteous than I',
              explanation: 'Genesis 38:26: "Then Judah identified them and said, \'She is more righteous than I.\'"',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis38-q11',
              question: 'Why did Tamar disguise herself?',
              options: ['For fun', 'Because Judah withheld Shelah from her', 'She was fleeing', 'To steal'],
              correctAnswer: 'Because Judah withheld Shelah from her',
              explanation: 'Genesis 38:14: "For she saw that Shelah was grown up, and she had not been given to him in marriage."',
              difficulty: 'hard'
            },
            {
              id: 'genesis38-q12',
              question: "What happened at Zerah's birth?",
              options: ['He came out first', 'A scarlet thread was tied on his hand though Perez came out first', 'He was silent', 'He cried loudly'],
              correctAnswer: 'A scarlet thread was tied on his hand though Perez came out first',
              explanation: 'Genesis 38:28-30: The midwife tied a scarlet thread on Zerah\'s hand, but Perez broke through first.',
              difficulty: 'hard'
            },
            {
              id: 'genesis38-q13',
              question: "Who did Judah send to pay Tamar and retrieve his pledge?",
              options: ['His servant', 'His friend Hirah the Adullamite', 'His son Shelah', 'A shepherd'],
              correctAnswer: 'His friend Hirah the Adullamite',
              explanation: 'Genesis 38:20: "Judah sent the young goat by his friend the Adullamite to take back the pledge."',
              difficulty: 'hard'
            },
            {
              id: 'genesis38-q14',
              question: 'Where was Tamar sitting when Judah saw her?',
              options: ['At a well', 'At the entrance to Enaim', 'In a marketplace', 'By the city gate'],
              correctAnswer: 'At the entrance to Enaim',
              explanation: 'Genesis 38:14: "She sat at the entrance to Enaim, which is on the road to Timnah."',
              difficulty: 'hard'
            },
            {
              id: 'genesis38-q15',
              question: 'Why is Perez significant in biblical history?',
              options: ['He became a priest', 'He was in the lineage of David and Jesus', 'He conquered Egypt', 'He built the temple'],
              correctAnswer: 'He was in the lineage of David and Jesus',
              explanation: 'Perez is listed in the genealogy of David (Ruth 4:18-22) and Jesus (Matthew 1:3).',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 38:26',
              key_verse_text: "Then Judah identified them and said, 'She is more righteous than I.'",
                memory_challenge: true,
                  difficulty: 'hard',
                    points: 20
  },
{
  id: 'genesis-39',
    bookId: 'genesis',
      chapter: 39,
        title: "Joseph and Potiphar's Wife",
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis39-q1',
              question: 'Who bought Joseph in Egypt?',
              options: ['Pharaoh', 'Potiphar', 'The jailer', 'A merchant'],
              correctAnswer: 'Potiphar',
              explanation: 'Genesis 39:1 (ESV): "Joseph had been brought down to Egypt, and Potiphar, an officer of Pharaoh...bought him."',
              difficulty: 'easy'
            },
            {
              id: 'genesis39-q2',
              question: 'Did the LORD bless Joseph in Potiphar\'s house?',
              options: ['No', 'Yes', 'Partially', 'Only at the end'],
              correctAnswer: 'Yes',
              explanation: 'Genesis 39:2: "The LORD was with Joseph, and he became a successful man."',
              difficulty: 'easy'
            },
            {
              id: 'genesis39-q3',
              question: "What did Potiphar's wife want Joseph to do?",
              options: ['Steal for her', 'Lie with her', 'Leave Egypt', 'Serve only her'],
              correctAnswer: 'Lie with her',
              explanation: 'Genesis 39:7: "His master\'s wife cast her eyes on Joseph and said, \'Lie with me.\'"',
              difficulty: 'easy'
            },
            {
              id: 'genesis39-q4',
              question: 'What happened to Joseph after the false accusation?',
              options: ['He was killed', 'He was put in prison', 'He was freed', 'He was sold again'],
              correctAnswer: 'He was put in prison',
              explanation: 'Genesis 39:20: "Joseph\'s master took him and put him into the prison."',
              difficulty: 'easy'
            },
            {
              id: 'genesis39-q5',
              question: 'Was the LORD with Joseph in prison?',
              options: ['No', 'Yes', 'It is not stated', 'Only sometimes'],
              correctAnswer: 'Yes',
              explanation: 'Genesis 39:21: "But the LORD was with Joseph and showed him steadfast love."',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis39-q6',
              question: 'What role did Joseph have in Potiphar\'s house?',
              options: ['Cook', 'Overseer of all he had', 'Guard', 'Shepherd'],
              correctAnswer: 'Overseer of all he had',
              explanation: 'Genesis 39:4-5: "He made him overseer of his house and put him in charge of all that he had."',
              difficulty: 'medium'
            },
            {
              id: 'genesis39-q7',
              question: 'What did Joseph leave behind when he fled from Potiphar\'s wife?',
              options: ['His sandals', 'His garment', 'His ring', 'His staff'],
              correctAnswer: 'His garment',
              explanation: 'Genesis 39:12: "She caught him by his garment, saying, \'Lie with me.\' But he left his garment in her hand and fled."',
              difficulty: 'medium'
            },
            {
              id: 'genesis39-q8',
              question: 'What reason did Joseph give for refusing Potiphar\'s wife?',
              options: ['Fear of Potiphar', 'It would be a sin against God', 'He was married', 'He did not find her attractive'],
              correctAnswer: 'It would be a sin against God',
              explanation: 'Genesis 39:9: "How then can I do this great wickedness and sin against God?"',
              difficulty: 'medium'
            },
            {
              id: 'genesis39-q9',
              question: 'What did the keeper of the prison do with Joseph?',
              options: ['Punished him harshly', 'Put all prisoners under Joseph\'s care', 'Released him', 'Ignored him'],
              correctAnswer: "Put all prisoners under Joseph's care",
              explanation: 'Genesis 39:22: "The keeper of the prison put Joseph in charge of all the prisoners."',
              difficulty: 'medium'
            },
            {
              id: 'genesis39-q10',
              question: "What did Potiphar's wife accuse Joseph of?",
              options: ['Stealing', 'Trying to force himself on her', 'Plotting against Potiphar', 'Running away'],
              correctAnswer: 'Trying to force himself on her',
              explanation: 'Genesis 39:14: "She called to the men of her household and said...He came in to me to lie with me."',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis39-q11',
              question: 'What detail shows Potiphar trusted Joseph completely?',
              options: ['He gave him his ring', 'He did not concern himself with anything except the food he ate', 'He gave him a wife', 'He made him his equal'],
              correctAnswer: 'He did not concern himself with anything except the food he ate',
              explanation: 'Genesis 39:6: "He left all that he had in Joseph\'s charge, and because of him he had no concern about anything but the food he ate."',
              difficulty: 'hard'
            },
            {
              id: 'genesis39-q12',
              question: 'How often did Potiphar\'s wife tempt Joseph?',
              options: ['Once', 'Day after day', 'Three times', 'Only twice'],
              correctAnswer: 'Day after day',
              explanation: 'Genesis 39:10: "And as she spoke to Joseph day after day, he would not listen to her."',
              difficulty: 'hard'
            },
            {
              id: 'genesis39-q13',
              question: 'What type of prison was Joseph placed in?',
              options: ['A common jail', 'The place where the king\'s prisoners were confined', 'A dungeon', 'House arrest'],
              correctAnswer: "The place where the king's prisoners were confined",
              explanation: 'Genesis 39:20: "He put him into the prison, the place where the king\'s prisoners were confined."',
              difficulty: 'hard'
            },
            {
              id: 'genesis39-q14',
              question: "What was Potiphar's official title?",
              options: ['Chief steward', 'Captain of the guard', 'Royal treasurer', 'High priest'],
              correctAnswer: 'Captain of the guard',
              explanation: 'Genesis 39:1: "Potiphar, an officer of Pharaoh, the captain of the guard, an Egyptian."',
              difficulty: 'hard'
            },
            {
              id: 'genesis39-q15',
              question: 'What phrase is repeated to emphasize God\'s presence with Joseph?',
              options: ['God blessed him', 'The LORD was with Joseph', 'Joseph found grace', 'God remembered Joseph'],
              correctAnswer: 'The LORD was with Joseph',
              explanation: 'Genesis 39:2, 21, 23: "The LORD was with Joseph" is repeated throughout the chapter.',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 39:2',
              key_verse_text: "The LORD was with Joseph, and he became a successful man.",
                memory_challenge: true,
                  difficulty: 'medium',
                    points: 15
  },
{
  id: 'genesis-40',
    bookId: 'genesis',
      chapter: 40,
        title: "Joseph Interprets Dreams in Prison",
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis40-q1',
              question: "Whose dreams did Joseph interpret in prison?",
              options: ["Pharaoh's", "The cupbearer's and the baker's", "Potiphar's", "His own"],
              correctAnswer: "The cupbearer's and the baker's",
              explanation: 'Genesis 40:5: "The cupbearer and the baker of the king of Egypt...each his own dream."',
              difficulty: 'easy'
            },
            {
              id: 'genesis40-q2',
              question: "What happened to the cupbearer?",
              options: ['He died', 'He was restored to his position', 'He was exiled', 'He stayed in prison'],
              correctAnswer: 'He was restored to his position',
              explanation: 'Genesis 40:21: "He restored the chief cupbearer to his position."',
              difficulty: 'easy'
            },
            {
              id: 'genesis40-q3',
              question: 'What happened to the baker?',
              options: ['He was freed', 'He was hanged', 'He was promoted', 'He escaped'],
              correctAnswer: 'He was hanged',
              explanation: 'Genesis 40:22: "But he hanged the chief baker, as Joseph had interpreted to them."',
              difficulty: 'easy'
            },
            {
              id: 'genesis40-q4',
              question: 'Who did Joseph say could interpret dreams?',
              options: ['Himself', 'God', 'The wise men', 'Pharaoh'],
              correctAnswer: 'God',
              explanation: 'Genesis 40:8: "Joseph said to them, \'Do not interpretations belong to God?\'"',
              difficulty: 'easy'
            },
            {
              id: 'genesis40-q5',
              question: 'Did the cupbearer remember Joseph after being freed?',
              options: ['Yes, immediately', 'No, he forgot him', 'He sent Joseph a gift', 'He told Pharaoh right away'],
              correctAnswer: 'No, he forgot him',
              explanation: 'Genesis 40:23: "Yet the chief cupbearer did not remember Joseph, but forgot him."',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis40-q6',
              question: "What was in the cupbearer's dream?",
              options: ['A tree', 'A vine with three branches bearing grapes', 'A river', 'A field of wheat'],
              correctAnswer: 'A vine with three branches bearing grapes',
              explanation: 'Genesis 40:9-10: "In my dream there was a vine before me, and on the vine there were three branches."',
              difficulty: 'medium'
            },
            {
              id: 'genesis40-q7',
              question: "What was in the baker's dream?",
              options: ['Three cakes', 'Three baskets of bread on his head', 'Three loaves', 'Three ovens'],
              correctAnswer: 'Three baskets of bread on his head',
              explanation: 'Genesis 40:16: "I also had a dream: there were three cake baskets on my head."',
              difficulty: 'medium'
            },
            {
              id: 'genesis40-q8',
              question: 'What did the three branches/baskets represent?',
              options: ['Three years', 'Three days', 'Three months', 'Three weeks'],
              correctAnswer: 'Three days',
              explanation: 'Genesis 40:12-13, 18: "The three branches are three days...the three baskets are three days."',
              difficulty: 'medium'
            },
            {
              id: 'genesis40-q9',
              question: 'What did Joseph ask the cupbearer to do?',
              options: ['Pay him', 'Remember him and mention him to Pharaoh', 'Free him', 'Bring him food'],
              correctAnswer: 'Remember him and mention him to Pharaoh',
              explanation: 'Genesis 40:14: "Only remember me, when it is well with you, and please do me the kindness to mention me to Pharaoh."',
              difficulty: 'medium'
            },
            {
              id: 'genesis40-q10',
              question: 'Why were the cupbearer and baker in prison?',
              options: ['They stole', 'They offended Pharaoh', 'They lied', 'They plotted against him'],
              correctAnswer: 'They offended Pharaoh',
              explanation: 'Genesis 40:1: "The cupbearer of the king of Egypt and his baker offended their lord the king of Egypt."',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis40-q11',
              question: "What detail in the baker's dream foreshadowed his fate?",
              options: ['The baskets fell', 'Birds ate from the top basket', 'Bread turned moldy', 'Fire consumed the baskets'],
              correctAnswer: 'Birds ate from the top basket',
              explanation: 'Genesis 40:17: "The birds were eating it out of the basket on my head."',
              difficulty: 'hard'
            },
            {
              id: 'genesis40-q12',
              question: 'What did Joseph say about how he ended up in prison?',
              options: ['He deserved it', 'He was stolen from the land of the Hebrews and done nothing wrong', 'He blamed his brothers', 'He said God sent him'],
              correctAnswer: 'He was stolen from the land of the Hebrews and done nothing wrong',
              explanation: 'Genesis 40:15: "For I was indeed stolen out of the land of the Hebrews, and here also I have done nothing that they should put me into the pit."',
              difficulty: 'hard'
            },
            {
              id: 'genesis40-q13',
              question: 'How did Joseph notice the officials were troubled?',
              options: ['They told him', 'He saw their sad faces', 'A guard told him', 'They were crying'],
              correctAnswer: 'He saw their sad faces',
              explanation: 'Genesis 40:6-7: "He saw that they were troubled. So he asked...Why are your faces downcast today?"',
              difficulty: 'hard'
            },
            {
              id: 'genesis40-q14',
              question: "What did the cupbearer do in Pharaoh's cup in his dream?",
              options: ['Poured wine', 'Pressed grapes into the cup and placed it in Pharaoh\'s hand', 'Put water in it', 'Dropped it'],
              correctAnswer: "Pressed grapes into the cup and placed it in Pharaoh's hand",
              explanation: 'Genesis 40:11: "I took the grapes and pressed them into Pharaoh\'s cup and placed the cup in Pharaoh\'s hand."',
              difficulty: 'hard'
            },
            {
              id: 'genesis40-q15',
              question: 'On what occasion was the baker hanged and cupbearer restored?',
              options: ['A religious festival', "Pharaoh's birthday", 'A harvest celebration', 'A military victory'],
              correctAnswer: "Pharaoh's birthday",
              explanation: 'Genesis 40:20: "On the third day, which was Pharaoh\'s birthday, he made a feast."',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 40:8',
              key_verse_text: "Do not interpretations belong to God? Please tell them to me.",
                memory_challenge: true,
                  difficulty: 'medium',
                    points: 15
  },
{
  id: 'genesis-41',
    bookId: 'genesis',
      chapter: 41,
        title: "Pharaoh's Dreams and Joseph's Rise",
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis41-q1',
              question: "What did Pharaoh dream about?",
              options: ['Stars and moon', 'Seven fat cows and seven thin cows', 'A great flood', 'A burning bush'],
              correctAnswer: 'Seven fat cows and seven thin cows',
              explanation: 'Genesis 41:2-4 (ESV): Pharaoh dreamed of seven attractive, plump cows eaten by seven thin, ugly cows.',
              difficulty: 'easy'
            },
            {
              id: 'genesis41-q2',
              question: 'Who interpreted Pharaoh\'s dreams?',
              options: ['The magicians', 'Joseph', 'Moses', 'Daniel'],
              correctAnswer: 'Joseph',
              explanation: 'Genesis 41:25: Joseph said to Pharaoh, "The dreams of Pharaoh are one; God has revealed to Pharaoh what he is about to do."',
              difficulty: 'easy'
            },
            {
              id: 'genesis41-q3',
              question: 'What position did Pharaoh give Joseph?',
              options: ['Slave master', 'Ruler over all Egypt', 'Chief baker', 'Prison warden'],
              correctAnswer: 'Ruler over all Egypt',
              explanation: 'Genesis 41:41: "Pharaoh said to Joseph, \'See, I have set you over all the land of Egypt.\'"',
              difficulty: 'easy'
            },
            {
              id: 'genesis41-q4',
              question: 'How many years of plenty did the dreams predict?',
              options: ['Three', 'Five', 'Seven', 'Ten'],
              correctAnswer: 'Seven',
              explanation: 'Genesis 41:29: "There will come seven years of great plenty throughout all the land of Egypt."',
              difficulty: 'easy'
            },
            {
              id: 'genesis41-q5',
              question: 'How many years of famine followed the plenty?',
              options: ['Three', 'Five', 'Seven', 'Ten'],
              correctAnswer: 'Seven',
              explanation: 'Genesis 41:30: "After them there will arise seven years of famine."',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis41-q6',
              question: "What was Pharaoh's second dream about?",
              options: ['Seven fat sheep', 'Seven full ears of grain and seven thin ears', 'Seven stars', 'Seven rivers'],
              correctAnswer: 'Seven full ears of grain and seven thin ears',
              explanation: 'Genesis 41:5-7: Seven plump, good ears of grain were swallowed by seven thin ears.',
              difficulty: 'medium'
            },
            {
              id: 'genesis41-q7',
              question: 'Who remembered Joseph and recommended him to Pharaoh?',
              options: ['Potiphar', 'The chief cupbearer', 'The chief baker', 'A guard'],
              correctAnswer: 'The chief cupbearer',
              explanation: 'Genesis 41:9-13: The chief cupbearer finally remembered Joseph and told Pharaoh.',
              difficulty: 'medium'
            },
            {
              id: 'genesis41-q8',
              question: 'What Egyptian name did Pharaoh give Joseph?',
              options: ['Imhotep', 'Zaphenath-paneah', 'Amenhotep', 'Rameses'],
              correctAnswer: 'Zaphenath-paneah',
              explanation: 'Genesis 41:45: "Pharaoh called Joseph\'s name Zaphenath-paneah."',
              difficulty: 'medium'
            },
            {
              id: 'genesis41-q9',
              question: 'How old was Joseph when he stood before Pharaoh?',
              options: ['Twenty', 'Twenty-five', 'Thirty', 'Forty'],
              correctAnswer: 'Thirty',
              explanation: 'Genesis 41:46: "Joseph was thirty years old when he entered the service of Pharaoh."',
              difficulty: 'medium'
            },
            {
              id: 'genesis41-q10',
              question: "What were Joseph's two sons named?",
              options: ['Perez and Zerah', 'Manasseh and Ephraim', 'Simeon and Levi', 'Er and Onan'],
              correctAnswer: 'Manasseh and Ephraim',
              explanation: 'Genesis 41:51-52: Joseph named his sons Manasseh and Ephraim.',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis41-q11',
              question: "Who was Joseph's wife?",
              options: ['Tamar', 'Asenath, daughter of Potiphera', 'Zipporah', 'Hagar'],
              correctAnswer: 'Asenath, daughter of Potiphera',
              explanation: 'Genesis 41:45: "Pharaoh gave him in marriage Asenath, the daughter of Potiphera priest of On."',
              difficulty: 'hard'
            },
            {
              id: 'genesis41-q12',
              question: 'What did Joseph do with the grain during the years of plenty?',
              options: ['Sold it', 'Stored it in the cities', 'Exported it', 'Gave it away'],
              correctAnswer: 'Stored it in the cities',
              explanation: 'Genesis 41:48: "He gathered up all the food of these seven years...and put the food in the cities."',
              difficulty: 'hard'
            },
            {
              id: 'genesis41-q13',
              question: 'What does "Manasseh" mean?',
              options: ['God is great', 'God has made me forget all my hardship', 'Blessed by God', 'Gift of God'],
              correctAnswer: 'God has made me forget all my hardship',
              explanation: 'Genesis 41:51: "Joseph called the name of the firstborn Manasseh. \'For God has made me forget all my hardship.\'"',
              difficulty: 'hard'
            },
            {
              id: 'genesis41-q14',
              question: 'What does "Ephraim" mean?',
              options: ['Fruitful', 'God has made me fruitful in the land of my affliction', 'Strong one', 'Heir of promise'],
              correctAnswer: 'God has made me fruitful in the land of my affliction',
              explanation: 'Genesis 41:52: "The name of the second he called Ephraim, \'For God has made me fruitful in the land of my affliction.\'"',
              difficulty: 'hard'
            },
            {
              id: 'genesis41-q15',
              question: 'What did Joseph advise Pharaoh to do during the years of plenty?',
              options: ['Build pyramids', 'Appoint a wise man and store a fifth of the produce', 'Expand the army', 'Build canals'],
              correctAnswer: 'Appoint a wise man and store a fifth of the produce',
              explanation: 'Genesis 41:33-34: Joseph advised appointing an overseer and collecting one-fifth of the produce during the plentiful years.',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 41:41',
              key_verse_text: "Pharaoh said to Joseph, 'See, I have set you over all the land of Egypt.'",
                memory_challenge: true,
                  difficulty: 'medium',
                    points: 15
  },
{
  id: 'genesis-42',
    bookId: 'genesis',
      chapter: 42,
        title: "Joseph's Brothers Go to Egypt",
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis42-q1',
              question: 'Why did Jacob send his sons to Egypt?',
              options: ['To find Joseph', 'To buy grain', 'To trade livestock', 'To visit Pharaoh'],
              correctAnswer: 'To buy grain',
              explanation: 'Genesis 42:2: "I have heard that there is grain for sale in Egypt. Go down and buy grain for us there."',
              difficulty: 'easy'
            },
            {
              id: 'genesis42-q2',
              question: 'Which brother did Jacob not send to Egypt?',
              options: ['Judah', 'Benjamin', 'Reuben', 'Simeon'],
              correctAnswer: 'Benjamin',
              explanation: 'Genesis 42:4: "But Jacob did not send Benjamin, Joseph\'s brother, with his brothers."',
              difficulty: 'easy'
            },
            {
              id: 'genesis42-q3',
              question: 'What did the brothers do when they came before Joseph?',
              options: ['They recognized him', 'They bowed down before him', 'They fled', 'They fought him'],
              correctAnswer: 'They bowed down before him',
              explanation: 'Genesis 42:6: "Joseph\'s brothers came and bowed themselves before him with their faces to the ground."',
              difficulty: 'easy'
            },
            {
              id: 'genesis42-q4',
              question: 'Did the brothers recognize Joseph?',
              options: ['Yes', 'No', 'Only Reuben did', 'Only Judah did'],
              correctAnswer: 'No',
              explanation: 'Genesis 42:8: "Joseph recognized his brothers, but they did not recognize him."',
              difficulty: 'easy'
            },
            {
              id: 'genesis42-q5',
              question: 'What did Joseph accuse his brothers of being?',
              options: ['Thieves', 'Spies', 'Murderers', 'Liars'],
              correctAnswer: 'Spies',
              explanation: 'Genesis 42:9: "He said to them, \'You are spies; you have come to see the nakedness of the land.\'"',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis42-q6',
              question: 'Which brother did Joseph keep as a hostage?',
              options: ['Reuben', 'Simeon', 'Judah', 'Levi'],
              correctAnswer: 'Simeon',
              explanation: 'Genesis 42:24: "He took Simeon from them and bound him before their eyes."',
              difficulty: 'medium'
            },
            {
              id: 'genesis42-q7',
              question: 'What did the brothers find in their sacks?',
              options: ['Extra grain', 'Their money returned', 'A letter', 'Gifts from Joseph'],
              correctAnswer: 'Their money returned',
              explanation: 'Genesis 42:27-28: Each man found his money in the mouth of his sack.',
              difficulty: 'medium'
            },
            {
              id: 'genesis42-q8',
              question: 'What did Joseph demand they bring next time?',
              options: ['Gifts', 'Their youngest brother', 'Their father', 'More money'],
              correctAnswer: 'Their youngest brother',
              explanation: 'Genesis 42:20: "Bring your youngest brother to me. So your words will be verified."',
              difficulty: 'medium'
            },
            {
              id: 'genesis42-q9',
              question: 'What did the brothers say to each other about their guilt?',
              options: ['They denied any guilt', 'They were being punished for what they did to Joseph', 'They blamed Jacob', 'They blamed Reuben'],
              correctAnswer: 'They were being punished for what they did to Joseph',
              explanation: 'Genesis 42:21: "Then they said to one another, \'In truth we are guilty concerning our brother.\'"',
              difficulty: 'medium'
            },
            {
              id: 'genesis42-q10',
              question: "What was Jacob's reaction to their request to take Benjamin?",
              options: ['He agreed immediately', 'He refused', 'He asked for time', 'He sent a servant instead'],
              correctAnswer: 'He refused',
              explanation: 'Genesis 42:38: "My son shall not go down with you...if harm should happen to him."',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis42-q11',
              question: 'What did Reuben offer Jacob to guarantee Benjamin\'s safety?',
              options: ['His inheritance', 'The lives of his own two sons', 'His livestock', 'His servitude'],
              correctAnswer: 'The lives of his own two sons',
              explanation: 'Genesis 42:37: "Kill my two sons if I do not bring him back to you."',
              difficulty: 'hard'
            },
            {
              id: 'genesis42-q12',
              question: 'How many days did Joseph keep his brothers in custody?',
              options: ['One', 'Three', 'Seven', 'Ten'],
              correctAnswer: 'Three',
              explanation: 'Genesis 42:17: "He put them all together in custody for three days."',
              difficulty: 'hard'
            },
            {
              id: 'genesis42-q13',
              question: 'What did Joseph do after hearing his brothers speak of their guilt?',
              options: ['He punished them', 'He turned away and wept', 'He revealed himself', 'He sent them away'],
              correctAnswer: 'He turned away and wept',
              explanation: 'Genesis 42:24: "Then he turned away from them and wept."',
              difficulty: 'hard'
            },
            {
              id: 'genesis42-q14',
              question: 'How many brothers went to Egypt the first time?',
              options: ['Eleven', 'Ten', 'Nine', 'Twelve'],
              correctAnswer: 'Ten',
              explanation: 'Genesis 42:3: "So ten of Joseph\'s brothers went down to buy grain in Egypt."',
              difficulty: 'hard'
            },
            {
              id: 'genesis42-q15',
              question: 'What did Reuben remind his brothers about?',
              options: ['Their father\'s blessing', 'That he had warned them not to harm Joseph', 'Their covenant', 'Their journey'],
              correctAnswer: 'That he had warned them not to harm Joseph',
              explanation: 'Genesis 42:22: "Reuben answered them, \'Did I not tell you not to sin against the boy? But you did not listen.\'"',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 42:6',
              key_verse_text: "Joseph's brothers came and bowed themselves before him with their faces to the ground.",
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
            // EASY QUESTIONS (5)
            {
              id: 'genesis43-q1',
              question: 'Why did the brothers have to return to Egypt?',
              options: ['To rescue Simeon', 'The famine was severe and they needed more grain', 'Joseph summoned them', 'To trade'],
              correctAnswer: 'The famine was severe and they needed more grain',
              explanation: 'Genesis 43:1-2: "Now the famine was severe in the land." Jacob told them to go buy more food.',
              difficulty: 'easy'
            },
            {
              id: 'genesis43-q2',
              question: 'Who pledged to guarantee Benjamin\'s safety?',
              options: ['Reuben', 'Judah', 'Simeon', 'Levi'],
              correctAnswer: 'Judah',
              explanation: 'Genesis 43:9: "I will be a pledge of his safety. From my hand you shall require him."',
              difficulty: 'easy'
            },
            {
              id: 'genesis43-q3',
              question: 'Did Jacob eventually let Benjamin go?',
              options: ['No', 'Yes', 'He sent a servant instead', 'He went himself'],
              correctAnswer: 'Yes',
              explanation: 'Genesis 43:13-14: Jacob finally agreed and sent Benjamin with his brothers.',
              difficulty: 'easy'
            },
            {
              id: 'genesis43-q4',
              question: 'What did Joseph do when he saw Benjamin?',
              options: ['He was angry', 'He hurried out to weep privately', 'He ignored him', 'He punished him'],
              correctAnswer: 'He hurried out to weep privately',
              explanation: 'Genesis 43:30: "Joseph hurried out, for his compassion grew warm for his brother, and he sought a place to weep."',
              difficulty: 'easy'
            },
            {
              id: 'genesis43-q5',
              question: 'Were the brothers invited to eat at Joseph\'s house?',
              options: ['No', 'Yes', 'Only Benjamin', 'Only Judah'],
              correctAnswer: 'Yes',
              explanation: 'Genesis 43:16: Joseph told his steward, "Bring the men to my house, and slaughter an animal and make ready."',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis43-q6',
              question: 'What gifts did Jacob send to the man in Egypt?',
              options: ['Gold and silver', 'Balm, honey, gum, myrrh, pistachio nuts, and almonds', 'Livestock', 'Clothing'],
              correctAnswer: 'Balm, honey, gum, myrrh, pistachio nuts, and almonds',
              explanation: 'Genesis 43:11: "Take some of the choice fruits of the land...balm and honey, gum, myrrh, pistachio nuts, and almonds."',
              difficulty: 'medium'
            },
            {
              id: 'genesis43-q7',
              question: 'What did the brothers fear when brought to Joseph\'s house?',
              options: ['Execution', 'Being enslaved because of the money returned in their sacks', 'Being robbed', 'Being imprisoned'],
              correctAnswer: 'Being enslaved because of the money returned in their sacks',
              explanation: 'Genesis 43:18: "They were afraid because they were brought to Joseph\'s house...because of the money."',
              difficulty: 'medium'
            },
            {
              id: 'genesis43-q8',
              question: 'What did the steward say about the money in their sacks?',
              options: ['He accused them', 'He said their God must have put treasure in their sacks', 'He took it back', 'He ignored it'],
              correctAnswer: 'He said their God must have put treasure in their sacks',
              explanation: 'Genesis 43:23: "Your God and the God of your father has put treasure in your sacks."',
              difficulty: 'medium'
            },
            {
              id: 'genesis43-q9',
              question: 'How were the brothers seated at the meal?',
              options: ['Randomly', 'In order of their birth, from firstborn to youngest', 'By tribe', 'By height'],
              correctAnswer: 'In order of their birth, from firstborn to youngest',
              explanation: 'Genesis 43:33: "The men looked at one another in amazement" because they were seated in birth order.',
              difficulty: 'medium'
            },
            {
              id: 'genesis43-q10',
              question: 'How much more food did Benjamin receive compared to his brothers?',
              options: ['Twice as much', 'Five times as much', 'Three times as much', 'The same'],
              correctAnswer: 'Five times as much',
              explanation: 'Genesis 43:34: "Portions were taken to them from Joseph\'s table, but Benjamin\'s portion was five times as much."',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis43-q11',
              question: 'What did Jacob instruct about the money?',
              options: ['Hide it', 'Take double the money and return the first amount', 'Send gold instead', 'Borrow from neighbors'],
              correctAnswer: 'Take double the money and return the first amount',
              explanation: 'Genesis 43:12: "Take double the money with you. Carry back with you the money that was returned."',
              difficulty: 'hard'
            },
            {
              id: 'genesis43-q12',
              question: 'What did Joseph ask about when he saw his brothers?',
              options: ['Their journey', 'Whether their father was still alive', 'Their livestock', 'The famine'],
              correctAnswer: 'Whether their father was still alive',
              explanation: 'Genesis 43:27: "He asked them about their welfare and said, \'Is your father well, the old man of whom you spoke? Is he still alive?\'"',
              difficulty: 'hard'
            },
            {
              id: 'genesis43-q13',
              question: 'Why did Joseph eat separately from the Egyptians and his brothers?',
              options: ['He was fasting', 'Egyptians could not eat with Hebrews as it was an abomination', 'He was sick', 'He was too emotional'],
              correctAnswer: 'Egyptians could not eat with Hebrews as it was an abomination',
              explanation: 'Genesis 43:32: "The Egyptians could not eat with the Hebrews, for that is an abomination to the Egyptians."',
              difficulty: 'hard'
            },
            {
              id: 'genesis43-q14',
              question: 'What did Joseph say when he blessed Benjamin?',
              options: ['You are my brother', 'God be gracious to you, my son', 'You will rule someday', 'The LORD bless you'],
              correctAnswer: 'God be gracious to you, my son',
              explanation: 'Genesis 43:29: "He said, \'God be gracious to you, my son!\'"',
              difficulty: 'hard'
            },
            {
              id: 'genesis43-q15',
              question: "What was the brothers' condition at the end of the meal?",
              options: ['They were anxious', 'They drank and were merry with him', 'They wanted to leave', 'They were suspicious'],
              correctAnswer: 'They drank and were merry with him',
              explanation: 'Genesis 43:34: "So they drank and were merry with him."',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 43:30',
              key_verse_text: "Joseph hurried out, for his compassion grew warm for his brother, and he sought a place to weep.",
                memory_challenge: true,
                  difficulty: 'medium',
                    points: 15
  },
{
  id: 'genesis-44',
    bookId: 'genesis',
      chapter: 44,
        title: "Joseph's Silver Cup",
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis44-q1',
              question: "What did Joseph's steward hide in Benjamin's sack?",
              options: ['Gold', "Joseph's silver cup", 'A scroll', 'Grain'],
              correctAnswer: "Joseph's silver cup",
              explanation: 'Genesis 44:2: "Put my cup, the silver cup, in the mouth of the sack of the youngest."',
              difficulty: 'easy'
            },
            {
              id: 'genesis44-q2',
              question: "In whose sack was the cup found?",
              options: ["Reuben's", "Judah's", "Benjamin's", "Simeon's"],
              correctAnswer: "Benjamin's",
              explanation: 'Genesis 44:12: "The cup was found in Benjamin\'s sack."',
              difficulty: 'easy'
            },
            {
              id: 'genesis44-q3',
              question: 'What did the brothers do when the cup was found?',
              options: ['They fled', 'They tore their clothes and returned to the city', 'They fought', 'They blamed Benjamin'],
              correctAnswer: 'They tore their clothes and returned to the city',
              explanation: 'Genesis 44:13: "Then they tore their clothes, and every man loaded his donkey, and they returned to the city."',
              difficulty: 'easy'
            },
            {
              id: 'genesis44-q4',
              question: "What punishment did Joseph declare for the one who had the cup?",
              options: ['Death', 'He would become Joseph\'s slave', 'Prison', 'Beating'],
              correctAnswer: "He would become Joseph's slave",
              explanation: 'Genesis 44:17: "Only the man in whose hand the cup was found shall be my servant."',
              difficulty: 'easy'
            },
            {
              id: 'genesis44-q5',
              question: 'Who pleaded with Joseph on behalf of Benjamin?',
              options: ['Reuben', 'Simeon', 'Judah', 'Levi'],
              correctAnswer: 'Judah',
              explanation: 'Genesis 44:18: "Then Judah went up to him and said, \'Oh, my lord, please let your servant speak a word.\'"',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis44-q6',
              question: 'What did the brothers first say when accused of stealing?',
              options: ['They confessed', 'Whoever has it shall die, and the rest will be slaves', 'They denied it', 'They ran'],
              correctAnswer: 'Whoever has it shall die, and the rest will be slaves',
              explanation: 'Genesis 44:9: "Whichever of your servants is found with it shall die, and we also will be my lord\'s servants."',
              difficulty: 'medium'
            },
            {
              id: 'genesis44-q7',
              question: 'What did Judah say would happen if Benjamin did not return?',
              options: ['War would break out', 'Jacob would die of grief', 'They would revolt', 'Nothing'],
              correctAnswer: 'Jacob would die of grief',
              explanation: 'Genesis 44:31: "When he sees that the boy is not with us, he will die."',
              difficulty: 'medium'
            },
            {
              id: 'genesis44-q8',
              question: 'What did Judah offer in place of Benjamin?',
              options: ['Gold', 'Himself as a slave', 'His sons', 'Livestock'],
              correctAnswer: 'Himself as a slave',
              explanation: 'Genesis 44:33: "Please let your servant remain instead of the boy as a servant to my lord."',
              difficulty: 'medium'
            },
            {
              id: 'genesis44-q9',
              question: "What did Judah reveal about Jacob's feelings for Benjamin?",
              options: ['Jacob was indifferent', "Jacob's life was bound up in the boy's life", 'Jacob preferred Reuben', 'Jacob wanted to send Benjamin away'],
              correctAnswer: "Jacob's life was bound up in the boy's life",
              explanation: 'Genesis 44:30: "His life is bound up in the boy\'s life."',
              difficulty: 'medium'
            },
            {
              id: 'genesis44-q10',
              question: 'What did Joseph claim the silver cup was used for?',
              options: ['Drinking', 'Divination', 'Offerings', 'Decoration'],
              correctAnswer: 'Divination',
              explanation: 'Genesis 44:5: "Is it not from this that my lord drinks, and by this that he practices divination?"',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis44-q11',
              question: "How did Judah's plea demonstrate his transformation?",
              options: ['He was angry', 'He was willing to sacrifice himself for Benjamin, unlike when he sold Joseph', 'He blamed others', 'He was silent'],
              correctAnswer: 'He was willing to sacrifice himself for Benjamin, unlike when he sold Joseph',
              explanation: 'In Genesis 37, Judah suggested selling Joseph. Now in 44:33, he offers himself as a slave to protect Benjamin.',
              difficulty: 'hard'
            },
            {
              id: 'genesis44-q12',
              question: 'What did Judah say Jacob told them about Rachel\'s sons?',
              options: ['They were cursed', 'One is gone and if harm comes to the other he would die', 'They would rule', 'They should stay home'],
              correctAnswer: 'One is gone and if harm comes to the other he would die',
              explanation: 'Genesis 44:27-29: Jacob said Rachel bore him two sons; one is gone, and if this one is taken too, it would bring his gray hairs to Sheol.',
              difficulty: 'hard'
            },
            {
              id: 'genesis44-q13',
              question: 'What did the steward modify about the brothers\' proposed punishment?',
              options: ['He increased it', 'He said only the one with the cup would be a slave and the rest could go free', 'He ignored it', 'He added fines'],
              correctAnswer: 'He said only the one with the cup would be a slave and the rest could go free',
              explanation: 'Genesis 44:10: "Only the one who is found with it shall be my servant. But the rest of you shall be innocent."',
              difficulty: 'hard'
            },
            {
              id: 'genesis44-q14',
              question: 'What did Judah say God had done?',
              options: ['Blessed them', 'Found out the guilt of your servants', 'Punished Egypt', 'Forgotten them'],
              correctAnswer: 'Found out the guilt of your servants',
              explanation: 'Genesis 44:16: "God has found out the guilt of your servants."',
              difficulty: 'hard'
            },
            {
              id: 'genesis44-q15',
              question: 'In what order were the sacks searched?',
              options: ['Randomly', 'From the eldest to the youngest', 'Youngest first', 'Only Benjamin\'s'],
              correctAnswer: 'From the eldest to the youngest',
              explanation: 'Genesis 44:12: "He searched, beginning with the eldest and ending with the youngest."',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 44:33',
              key_verse_text: "Now therefore, please let your servant remain instead of the boy as a servant to my lord, and let the boy go back with his brothers.",
                memory_challenge: true,
                  difficulty: 'hard',
                    points: 20
  },
{
  id: 'genesis-45',
    bookId: 'genesis',
      chapter: 45,
        title: 'Joseph Reveals Himself',
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis45-q1',
              question: 'What did Joseph reveal to his brothers?',
              options: ['His wealth', 'That he was their brother Joseph', 'His power', 'His Egyptian name'],
              correctAnswer: 'That he was their brother Joseph',
              explanation: 'Genesis 45:3 (ESV): "Joseph said to his brothers, \'I am Joseph! Is my father still alive?\'"',
              difficulty: 'easy'
            },
            {
              id: 'genesis45-q2',
              question: "How did the brothers react to Joseph's revelation?",
              options: ['Joy', 'They were dismayed and terrified', 'Anger', 'Disbelief only'],
              correctAnswer: 'They were dismayed and terrified',
              explanation: 'Genesis 45:3: "His brothers could not answer him, for they were dismayed at his presence."',
              difficulty: 'easy'
            },
            {
              id: 'genesis45-q3',
              question: 'Where did Joseph tell his family to come live?',
              options: ['Canaan', 'The land of Goshen', 'On the Nile', 'In the palace'],
              correctAnswer: 'The land of Goshen',
              explanation: 'Genesis 45:10: "You shall dwell in the land of Goshen, and you shall be near me."',
              difficulty: 'easy'
            },
            {
              id: 'genesis45-q4',
              question: 'Did Pharaoh approve of Joseph\'s family coming to Egypt?',
              options: ['No', 'Yes', 'He was indifferent', 'He was angry'],
              correctAnswer: 'Yes',
              explanation: 'Genesis 45:16-20: Pharaoh was pleased and offered them the best of the land of Egypt.',
              difficulty: 'easy'
            },
            {
              id: 'genesis45-q5',
              question: 'How did Joseph and Benjamin greet each other?',
              options: ['They shook hands', 'They wept on each other\'s necks', 'They bowed', 'They spoke formally'],
              correctAnswer: "They wept on each other's necks",
              explanation: 'Genesis 45:14: "Then he fell upon his brother Benjamin\'s neck and wept, and Benjamin wept upon his neck."',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis45-q6',
              question: 'What did Joseph say about why God sent him to Egypt?',
              options: ['To punish them', 'To preserve life', 'To build pyramids', 'To rule the world'],
              correctAnswer: 'To preserve life',
              explanation: 'Genesis 45:5: "God sent me before you to preserve life."',
              difficulty: 'medium'
            },
            {
              id: 'genesis45-q7',
              question: 'How many more years of famine did Joseph say remained?',
              options: ['Two', 'Five', 'Three', 'Seven'],
              correctAnswer: 'Five',
              explanation: 'Genesis 45:6: "For the famine has been in the land these two years, and there are yet five years."',
              difficulty: 'medium'
            },
            {
              id: 'genesis45-q8',
              question: 'What did Joseph send to Jacob?',
              options: ['A letter', 'Carts, provisions, and changes of clothing', 'Soldiers', 'Gold only'],
              correctAnswer: 'Carts, provisions, and changes of clothing',
              explanation: 'Genesis 45:21-23: Joseph gave them carts, provisions, changes of clothes, and extra gifts for Benjamin.',
              difficulty: 'medium'
            },
            {
              id: 'genesis45-q9',
              question: 'How much silver did Joseph give Benjamin?',
              options: ['100 shekels', '300 shekels', '50 shekels', '200 shekels'],
              correctAnswer: '300 shekels',
              explanation: 'Genesis 45:22: "To Benjamin he gave 300 shekels of silver and five changes of garments."',
              difficulty: 'medium'
            },
            {
              id: 'genesis45-q10',
              question: "What was Jacob's initial reaction to the news?",
              options: ['He believed immediately', 'His heart became numb, for he did not believe them', 'He was angry', 'He wept'],
              correctAnswer: 'His heart became numb, for he did not believe them',
              explanation: 'Genesis 45:26: "His heart became numb, for he did not believe them."',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis45-q11',
              question: 'What convinced Jacob that Joseph was alive?',
              options: ['A letter', 'When he saw the carts Joseph had sent', 'A messenger\'s oath', 'A dream from God'],
              correctAnswer: 'When he saw the carts Joseph had sent',
              explanation: 'Genesis 45:27: "But when he saw the carts that Joseph had sent to carry him, the spirit of their father Jacob revived."',
              difficulty: 'hard'
            },
            {
              id: 'genesis45-q12',
              question: "What did Joseph say about who sent him to Egypt?",
              options: ['His brothers sent him', 'It was not his brothers but God who sent him', 'Fate brought him', 'Potiphar arranged it'],
              correctAnswer: 'It was not his brothers but God who sent him',
              explanation: 'Genesis 45:8: "So it was not you who sent me here, but God."',
              difficulty: 'hard'
            },
            {
              id: 'genesis45-q13',
              question: 'What role did Joseph say God gave him in Egypt?',
              options: ['A prophet', 'A father to Pharaoh and lord of all his house', 'A priest', 'A general'],
              correctAnswer: 'A father to Pharaoh and lord of all his house',
              explanation: 'Genesis 45:8: "He has made me a father to Pharaoh, and lord of all his house and ruler over all the land of Egypt."',
              difficulty: 'hard'
            },
            {
              id: 'genesis45-q14',
              question: "What parting instruction did Joseph give his brothers?",
              options: ['Hurry back', 'Do not quarrel on the way', 'Keep it secret', 'Bring weapons'],
              correctAnswer: 'Do not quarrel on the way',
              explanation: 'Genesis 45:24: "Then he sent his brothers away, and as they departed, he said to them, \'Do not quarrel on the way.\'"',
              difficulty: 'hard'
            },
            {
              id: 'genesis45-q15',
              question: 'What did Joseph say God made him in addition to lord of Pharaoh\'s house?',
              options: ['A priest', 'Ruler over all the land of Egypt', 'A judge', 'A prophet'],
              correctAnswer: 'Ruler over all the land of Egypt',
              explanation: 'Genesis 45:8-9: Joseph described himself as ruler over all the land of Egypt.',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 45:5',
              key_verse_text: "God sent me before you to preserve life.",
                memory_challenge: true,
                  difficulty: 'medium',
                    points: 15
  },
{
  id: 'genesis-46',
    bookId: 'genesis',
      chapter: 46,
        title: 'Jacob Goes to Egypt',
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis46-q1',
              question: 'Where did God speak to Jacob on his way to Egypt?',
              options: ['Bethel', 'Beersheba', 'Hebron', 'Shechem'],
              correctAnswer: 'Beersheba',
              explanation: 'Genesis 46:1 (ESV): "So Israel took his journey...and came to Beersheba, and offered sacrifices to the God of his father Isaac."',
              difficulty: 'easy'
            },
            {
              id: 'genesis46-q2',
              question: 'Did God tell Jacob not to be afraid to go to Egypt?',
              options: ['No', 'Yes', 'God was silent', 'God told him not to go'],
              correctAnswer: 'Yes',
              explanation: 'Genesis 46:3: "Do not be afraid to go down to Egypt, for there I will make you into a great nation."',
              difficulty: 'easy'
            },
            {
              id: 'genesis46-q3',
              question: 'How many of Jacob\'s family went to Egypt?',
              options: ['Fifty', 'Seventy', 'Twelve', 'One hundred'],
              correctAnswer: 'Seventy',
              explanation: 'Genesis 46:27: "All the persons of the house of Jacob who came into Egypt were seventy."',
              difficulty: 'easy'
            },
            {
              id: 'genesis46-q4',
              question: 'Who did Jacob send ahead to Joseph?',
              options: ['Reuben', 'Judah', 'Benjamin', 'Simeon'],
              correctAnswer: 'Judah',
              explanation: 'Genesis 46:28: "He had sent Judah ahead of him to Joseph to show the way before him in Goshen."',
              difficulty: 'easy'
            },
            {
              id: 'genesis46-q5',
              question: 'What did Jacob say when he met Joseph?',
              options: ['I am angry at you', 'Now let me die, since I have seen your face', 'Tell me everything', 'How wealthy are you?'],
              correctAnswer: 'Now let me die, since I have seen your face',
              explanation: 'Genesis 46:30: "Israel said to Joseph, \'Now let me die, since I have seen your face and know that you are still alive.\'"',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis46-q6',
              question: 'What promise did God make to Jacob at Beersheba?',
              options: ['Victory over enemies', 'He would make him a great nation and bring him back', 'A long life', 'Wealth'],
              correctAnswer: 'He would make him a great nation and bring him back',
              explanation: 'Genesis 46:3-4: "I will make you into a great nation...I will also surely bring you up again."',
              difficulty: 'medium'
            },
            {
              id: 'genesis46-q7',
              question: 'What did Joseph instruct his brothers to tell Pharaoh?',
              options: ['They were warriors', 'They were shepherds and keepers of livestock', 'They were merchants', 'They were priests'],
              correctAnswer: 'They were shepherds and keepers of livestock',
              explanation: 'Genesis 46:34: "You shall say, \'Your servants have been keepers of livestock from our youth.\'"',
              difficulty: 'medium'
            },
            {
              id: 'genesis46-q8',
              question: 'Why did Joseph want them to say they were shepherds?',
              options: ['So Pharaoh would respect them', 'So they could dwell in Goshen since shepherds were an abomination to Egyptians', 'To impress Pharaoh', 'To get good jobs'],
              correctAnswer: 'So they could dwell in Goshen since shepherds were an abomination to Egyptians',
              explanation: 'Genesis 46:34: "Every shepherd is an abomination to the Egyptians" — this would keep them separate in Goshen.',
              difficulty: 'medium'
            },
            {
              id: 'genesis46-q9',
              question: 'How did Joseph greet Jacob?',
              options: ['He bowed', 'He presented himself, fell on his neck, and wept', 'He sent gifts', 'He waved'],
              correctAnswer: 'He presented himself, fell on his neck, and wept',
              explanation: 'Genesis 46:29: "Joseph prepared his chariot and went up to meet Israel his father in Goshen. He presented himself to him and fell on his neck and wept on his neck a good while."',
              difficulty: 'medium'
            },
            {
              id: 'genesis46-q10',
              question: 'Who promised to close Jacob\'s eyes (be with him at death)?',
              options: ['Joseph', 'God', 'Judah', 'Benjamin'],
              correctAnswer: 'God',
              explanation: 'Genesis 46:4: "I myself will go down with you to Egypt, and I will also bring you up again, and Joseph\'s hand shall close your eyes."',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis46-q11',
              question: 'How many descendants came through Leah?',
              options: ['Twenty', 'Thirty-three', 'Forty', 'Sixteen'],
              correctAnswer: 'Thirty-three',
              explanation: 'Genesis 46:15: "All the persons of his sons and his daughters were thirty-three."',
              difficulty: 'hard'
            },
            {
              id: 'genesis46-q12',
              question: 'Who were the sons of Benjamin listed in this chapter?',
              options: ['None were listed', 'Ten sons including Bela, Becher, and others', 'Two sons', 'Five sons'],
              correctAnswer: 'Ten sons including Bela, Becher, and others',
              explanation: 'Genesis 46:21: Ten sons of Benjamin are listed including Bela, Becher, Ashbel, Gera, and others.',
              difficulty: 'hard'
            },
            {
              id: 'genesis46-q13',
              question: 'Who were Joseph\'s sons born in Egypt?',
              options: ['Er and Onan', 'Manasseh and Ephraim', 'Perez and Zerah', 'Simeon and Levi'],
              correctAnswer: 'Manasseh and Ephraim',
              explanation: 'Genesis 46:20: "And to Joseph in the land of Egypt were born Manasseh and Ephraim."',
              difficulty: 'hard'
            },
            {
              id: 'genesis46-q14',
              question: "How many descendants came through Rachel?",
              options: ['Seven', 'Fourteen', 'Twenty', 'Ten'],
              correctAnswer: 'Fourteen',
              explanation: 'Genesis 46:22: "All the persons of Rachel were fourteen."',
              difficulty: 'hard'
            },
            {
              id: 'genesis46-q15',
              question: 'In what visions did God speak to Jacob?',
              options: ['A dream', 'Visions of the night', 'A burning bush', 'Through an angel'],
              correctAnswer: 'Visions of the night',
              explanation: 'Genesis 46:2: "And God spoke to Israel in visions of the night."',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 46:3',
              key_verse_text: "Do not be afraid to go down to Egypt, for there I will make you into a great nation.",
                memory_challenge: true,
                  difficulty: 'medium',
                    points: 15
  },
{
  id: 'genesis-47',
    bookId: 'genesis',
      chapter: 47,
        title: "Jacob's Family Settles in Egypt",
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis47-q1',
              question: 'Where did Pharaoh allow Jacob\'s family to settle?',
              options: ['Memphis', 'The land of Goshen', 'Thebes', 'On the Nile'],
              correctAnswer: 'The land of Goshen',
              explanation: 'Genesis 47:6: Pharaoh told Joseph to settle his family in the best of the land, in the land of Goshen.',
              difficulty: 'easy'
            },
            {
              id: 'genesis47-q2',
              question: 'Did Jacob bless Pharaoh?',
              options: ['No', 'Yes', 'Only Joseph did', 'He cursed him'],
              correctAnswer: 'Yes',
              explanation: 'Genesis 47:7: "Then Joseph brought in Jacob his father and stood him before Pharaoh, and Jacob blessed Pharaoh."',
              difficulty: 'easy'
            },
            {
              id: 'genesis47-q3',
              question: 'How old was Jacob when he stood before Pharaoh?',
              options: ['100', '130', '150', '147'],
              correctAnswer: '130',
              explanation: 'Genesis 47:9: "Jacob said to Pharaoh, \'The days of the years of my sojourning are 130 years.\'"',
              difficulty: 'easy'
            },
            {
              id: 'genesis47-q4',
              question: 'Where did Jacob want to be buried?',
              options: ['Egypt', 'With his fathers in Canaan', 'Beersheba', 'Bethel'],
              correctAnswer: 'With his fathers in Canaan',
              explanation: 'Genesis 47:30: "Let me lie with my fathers. Carry me out of Egypt and bury me in their burying place."',
              difficulty: 'easy'
            },
            {
              id: 'genesis47-q5',
              question: 'How many years did Jacob live in Egypt?',
              options: ['Ten', 'Seventeen', 'Twenty', 'Thirty'],
              correctAnswer: 'Seventeen',
              explanation: 'Genesis 47:28: "Jacob lived in the land of Egypt seventeen years."',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis47-q6',
              question: 'What did the Egyptians give Joseph in exchange for food during the famine?',
              options: ['Nothing', 'Their money, livestock, land, and themselves', 'Gold only', 'Their children'],
              correctAnswer: 'Their money, livestock, land, and themselves',
              explanation: 'Genesis 47:18-21: The Egyptians progressively gave money, livestock, land, and themselves for food.',
              difficulty: 'medium'
            },
            {
              id: 'genesis47-q7',
              question: "What percentage of crops did Joseph require from the Egyptians?",
              options: ['A tenth', 'A fifth', 'A third', 'Half'],
              correctAnswer: 'A fifth',
              explanation: 'Genesis 47:26: "Joseph made it a statute...that Pharaoh should have the fifth."',
              difficulty: 'medium'
            },
            {
              id: 'genesis47-q8',
              question: 'How old was Jacob when he died?',
              options: ['130', '147', '150', '175'],
              correctAnswer: '147',
              explanation: 'Genesis 47:28: "The whole age of Jacob was 147 years."',
              difficulty: 'medium'
            },
            {
              id: 'genesis47-q9',
              question: 'What did Jacob make Joseph swear?',
              options: ['To never leave Egypt', 'To bury him in Canaan, not Egypt', 'To forgive his brothers', 'To serve Pharaoh'],
              correctAnswer: 'To bury him in Canaan, not Egypt',
              explanation: 'Genesis 47:29-30: Jacob made Joseph swear to carry him out of Egypt and bury him with his fathers.',
              difficulty: 'medium'
            },
            {
              id: 'genesis47-q10',
              question: "How did Jacob describe his years?",
              options: ['Blessed and long', 'Few and evil', 'Full of joy', 'Peaceful'],
              correctAnswer: 'Few and evil',
              explanation: 'Genesis 47:9: "Few and evil have been the days of the years of my life."',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis47-q11',
              question: "Whose land was exempt from Pharaoh's purchase?",
              options: ["Jacob's family", "The priests'", "The soldiers'", "The merchants'"],
              correctAnswer: "The priests'",
              explanation: 'Genesis 47:22: "Only the land of the priests he did not buy, for the priests had a fixed allowance from Pharaoh."',
              difficulty: 'hard'
            },
            {
              id: 'genesis47-q12',
              question: 'How many brothers did Joseph present before Pharaoh?',
              options: ['All twelve', 'Five', 'Three', 'Ten'],
              correctAnswer: 'Five',
              explanation: 'Genesis 47:2: "From among his brothers he took five men and presented them to Pharaoh."',
              difficulty: 'hard'
            },
            {
              id: 'genesis47-q13',
              question: 'What did Joseph give the people in exchange for their land?',
              options: ['Money', 'Seed to sow the land', 'Freedom', 'Animals'],
              correctAnswer: 'Seed to sow the land',
              explanation: 'Genesis 47:23: "Then Joseph said to the people, \'Behold, I have this day bought you and your land for Pharaoh. Now here is seed for you, and you shall sow the land.\'"',
              difficulty: 'hard'
            },
            {
              id: 'genesis47-q14',
              question: 'What did Jacob do after Joseph swore his oath?',
              options: ['He stood up', 'Israel bowed himself upon the head of his bed', 'He ate', 'He fell asleep'],
              correctAnswer: 'Israel bowed himself upon the head of his bed',
              explanation: 'Genesis 47:31: "Then Israel bowed himself upon the head of his bed."',
              difficulty: 'hard'
            },
            {
              id: 'genesis47-q15',
              question: 'What happened to the Israelites in Goshen?',
              options: ['They suffered', 'They were fruitful and multiplied greatly', 'They left', 'They became servants'],
              correctAnswer: 'They were fruitful and multiplied greatly',
              explanation: 'Genesis 47:27: "Thus Israel settled in the land of Egypt, in the land of Goshen. And they gained possessions in it, and were fruitful and multiplied greatly."',
              difficulty: 'hard'
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
        title: 'Jacob Blesses Ephraim and Manasseh',
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis48-q1',
              question: 'Who did Joseph bring to Jacob to be blessed?',
              options: ['His brothers', 'His two sons, Manasseh and Ephraim', 'Pharaoh', 'His servants'],
              correctAnswer: 'His two sons, Manasseh and Ephraim',
              explanation: 'Genesis 48:1 (ESV): "So he took with him his two sons, Manasseh and Ephraim."',
              difficulty: 'easy'
            },
            {
              id: 'genesis48-q2',
              question: 'What did Jacob do when he blessed Joseph\'s sons?',
              options: ['He crossed his hands', 'He stood up', 'He wept', 'He refused'],
              correctAnswer: 'He crossed his hands',
              explanation: 'Genesis 48:14: "Israel stretched out his right hand and laid it on the head of Ephraim, who was the younger, and his left hand on the head of Manasseh, crossing his hands."',
              difficulty: 'easy'
            },
            {
              id: 'genesis48-q3',
              question: 'Which son received the greater blessing?',
              options: ['Manasseh (the older)', 'Ephraim (the younger)', 'Both equally', 'Neither'],
              correctAnswer: 'Ephraim (the younger)',
              explanation: 'Genesis 48:19: "Nevertheless, his younger brother shall be greater than he."',
              difficulty: 'easy'
            },
            {
              id: 'genesis48-q4',
              question: 'Did Joseph try to correct his father\'s hand placement?',
              options: ['Yes', 'No', 'He didn\'t notice', 'He was angry'],
              correctAnswer: 'Yes',
              explanation: 'Genesis 48:17-18: "When Joseph saw that his father laid his right hand on the head of Ephraim, it displeased him, and he took his father\'s hand to remove it."',
              difficulty: 'easy'
            },
            {
              id: 'genesis48-q5',
              question: 'What did Jacob say about his vision?',
              options: ['It was dim due to age', 'It was perfect', 'He was blind', 'He could see angels'],
              correctAnswer: 'It was dim due to age',
              explanation: 'Genesis 48:10: "Now the eyes of Israel were dim with age, so that he could not see."',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis48-q6',
              question: 'What status did Jacob give Ephraim and Manasseh?',
              options: ['They would be like Reuben and Simeon (his own sons)', 'They would be servants', 'They would be priests', 'They would rule Egypt'],
              correctAnswer: 'They would be like Reuben and Simeon (his own sons)',
              explanation: 'Genesis 48:5: "Ephraim and Manasseh shall be mine; like Reuben and Simeon, they shall be mine."',
              difficulty: 'medium'
            },
            {
              id: 'genesis48-q7',
              question: 'Who did Jacob say had been his shepherd all his life?',
              options: ['Joseph', 'God', 'Abraham', 'Isaac'],
              correctAnswer: 'God',
              explanation: 'Genesis 48:15: "The God who has been my shepherd all my life long to this day."',
              difficulty: 'medium'
            },
            {
              id: 'genesis48-q8',
              question: 'In whose name did Jacob bless the boys?',
              options: ['Pharaoh', 'Abraham, Isaac, and himself', 'Joseph', 'The God of Egypt'],
              correctAnswer: 'Abraham, Isaac, and himself',
              explanation: 'Genesis 48:16: "Let my name be carried on in them, and the name of my fathers Abraham and Isaac."',
              difficulty: 'medium'
            },
            {
              id: 'genesis48-q9',
              question: 'What prophecy did Jacob make about the younger brother?',
              options: ['He would serve the older', 'His offspring would become a multitude of nations', 'He would be a king', 'He would be a priest'],
              correctAnswer: 'His offspring would become a multitude of nations',
              explanation: 'Genesis 48:19: "His offspring shall become a multitude of nations."',
              difficulty: 'medium'
            },
            {
              id: 'genesis48-q10',
              question: 'What extra portion did Jacob give to Joseph?',
              options: ['A double inheritance', 'A mountain slope (Shechem) taken from the Amorites', 'All his gold', 'His staff'],
              correctAnswer: 'A mountain slope (Shechem) taken from the Amorites',
              explanation: 'Genesis 48:22: "I have given to you rather than to your brothers one mountain slope that I took from the hand of the Amorites with my sword and with my bow."',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis48-q11',
              question: 'Where did Jacob bury Rachel?',
              options: ['Cave of Machpelah', 'On the way to Ephrath (Bethlehem)', 'Shechem', 'Bethel'],
              correctAnswer: 'On the way to Ephrath (Bethlehem)',
              explanation: 'Genesis 48:7: "I buried her there on the way to Ephrath (that is, Bethlehem)."',
              difficulty: 'hard'
            },
            {
              id: 'genesis48-q12',
              question: 'Why did Jacob guide his hands knowingly?',
              options: ['To confuse Joseph', 'Because he knew God\'s will was to bless the younger over the older', 'Because he was blind', 'Because Ephraim was taller'],
              correctAnswer: 'Because he knew God\'s will was to bless the younger over the older',
              explanation: 'Genesis 48:14, 19: Jacob "crossed his hands" knowingly, and refused Joseph\'s correction, stating the younger would be greater.',
              difficulty: 'hard'
            },
            {
              id: 'genesis48-q13',
              question: 'What angel did Jacob mention in his blessing?',
              options: ['The angel who redeemed him from all evil', 'The angel of death', 'Gabriel', 'Michael'],
              correctAnswer: 'The angel who redeemed him from all evil',
              explanation: 'Genesis 48:16: "The angel who has redeemed me from all evil, bless the boys."',
              difficulty: 'hard'
            },
            {
              id: 'genesis48-q14',
              question: 'What specific phrase did Jacob use to describe God\'s presence with him?',
              options: ['God Almighty appeared to me', 'The Lord is my shepherd', 'The God of my fathers', 'The Almighty One'],
              correctAnswer: 'God Almighty appeared to me',
              explanation: 'Genesis 48:3: "God Almighty appeared to me at Luz in the land of Canaan and blessed me."',
              difficulty: 'hard'
            },
            {
              id: 'genesis48-q15',
              question: 'How did Jacob strengthen himself when Joseph came?',
              options: ['He drank wine', 'He sat up in bed', 'He prayed', 'He called for food'],
              correctAnswer: 'He sat up in bed',
              explanation: 'Genesis 48:2: "Israel summoned his strength and sat up in bed."',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 48:15',
              key_verse_text: "He blessed Joseph and said, 'The God before whom my fathers Abraham and Isaac walked, the God who has been my shepherd all my life long to this day...'",
                memory_challenge: true,
                  difficulty: 'hard',
                    points: 20
  },
{
  id: 'genesis-49',
    bookId: 'genesis',
      chapter: 49,
        title: "Jacob Blesses His Twelve Sons",
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis49-q1',
              question: 'What did Jacob gather his sons to tell them?',
              options: ['Where to bury him', 'What would happen to them in days to come', 'How to divide the land', 'Who would be the next leader'],
              correctAnswer: 'What would happen to them in days to come',
              explanation: 'Genesis 49:1 (ESV): "Gather yourselves together, that I may tell you what shall happen to you in days to come."',
              difficulty: 'easy'
            },
            {
              id: 'genesis49-q2',
              question: 'Who did Jacob call "unstable as water"?',
              options: ['Simeon', 'Levi', 'Reuben', 'Judah'],
              correctAnswer: 'Reuben',
              explanation: 'Genesis 49:4: "Unstable as water, you shall not have preeminence."',
              difficulty: 'easy'
            },
            {
              id: 'genesis49-q3',
              question: 'Which son did Jacob call a "lion\'s cub"?',
              options: ['Judah', 'Dan', 'Benjamin', 'Joseph'],
              correctAnswer: 'Judah',
              explanation: 'Genesis 49:9: "Judah is a lion\'s cub; from the prey, my son, you have gone up."',
              difficulty: 'easy'
            },
            {
              id: 'genesis49-q4',
              question: 'What animal did Jacob compare Benjamin to?',
              options: ['A ravenous wolf', 'A strong donkey', 'A lion', 'A viper'],
              correctAnswer: 'A ravenous wolf',
              explanation: 'Genesis 49:27: "Benjamin is a ravenous wolf, in the morning devouring the prey and at evening dividing the spoil."',
              difficulty: 'easy'
            },
            {
              id: 'genesis49-q5',
              question: 'Where did Jacob ask to be buried?',
              options: ['In the cave of Machpelah', 'In Egypt', 'Beersheba', 'Shechem'],
              correctAnswer: 'In the cave of Machpelah',
              explanation: 'Genesis 49:29-30: "Bury me with my fathers in the cave that is in the field of Ephron the Hittite...the cave of Machpelah."',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis49-q6',
              question: 'What did Jacob say about Simeon and Levi?',
              options: ['They are righteous', 'Their swords are weapons of violence', 'They are blessed priests', 'They are strong warriors'],
              correctAnswer: 'Their swords are weapons of violence',
              explanation: 'Genesis 49:5: "Simeon and Levi are brothers; weapons of violence are their swords."',
              difficulty: 'medium'
            },
            {
              id: 'genesis49-q7',
              question: 'What prophecy was given to Judah regarding the scepter?',
              options: ['It shall not depart from him', 'It will break', 'It will be given to Joseph', 'He will lose it to Edom'],
              correctAnswer: 'It shall not depart from him',
              explanation: 'Genesis 49:10: "The scepter shall not depart from Judah, nor the ruler\'s staff from between his feet."',
              difficulty: 'medium'
            },
            {
              id: 'genesis49-q8',
              question: 'What did Jacob say about Zebulun?',
              options: ['He shall dwell at the shore of the sea', 'He is a strong donkey', 'He is a fruitful bough', 'He is unstable'],
              correctAnswer: 'He shall dwell at the shore of the sea',
              explanation: 'Genesis 49:13: "Zebulun shall dwell at the shore of the sea; he shall become a haven for ships."',
              difficulty: 'medium'
            },
            {
              id: 'genesis49-q9',
              question: 'Who is described as a "fruitful bough"?',
              options: ['Joseph', 'Judah', 'Asher', 'Naphtali'],
              correctAnswer: 'Joseph',
              explanation: 'Genesis 49:22: "Joseph is a fruitful bough, a fruitful bough by a spring."',
              difficulty: 'medium'
            },
            {
              id: 'genesis49-q10',
              question: 'What did Jacob say about Dan?',
              options: ['He shall judge his people', 'He is a doe let loose', 'He provides royal delicacies', 'He bows down'],
              correctAnswer: 'He shall judge his people',
              explanation: 'Genesis 49:16: "Dan shall judge his people as one of the tribes of Israel."',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis49-q11',
              question: "Who is described as a 'strong donkey crouching between the sheepfolds'?",
              options: ['Issachar', 'Gad', 'Asher', 'Naphtali'],
              correctAnswer: 'Issachar',
              explanation: 'Genesis 49:14: "Issachar is a strong donkey, crouching between the sheepfolds."',
              difficulty: 'hard'
            },
            {
              id: 'genesis49-q12',
              question: 'What does the name "Shiloh" refer to in Judah\'s blessing (often interpreted as)?',
              options: ['A city', 'The Messiah (to whom it belongs)', 'Peace', 'A weapon'],
              correctAnswer: 'The Messiah (to whom it belongs)',
              explanation: 'Genesis 49:10: "Until tribute (Shiloh) comes to him; and to him shall be the obedience of the peoples."',
              difficulty: 'hard'
            },
            {
              id: 'genesis49-q13',
              question: 'What title for God is used in Joseph\'s blessing?',
              options: ['The Mighty One of Jacob', 'El Shaddai', 'Jehovah Jireh', 'The Lord of Hosts'],
              correctAnswer: 'The Mighty One of Jacob',
              explanation: 'Genesis 49:24: "By the hands of the Mighty One of Jacob (from there is the Shepherd, the Stone of Israel)."',
              difficulty: 'hard'
            },
            {
              id: 'genesis49-q14',
              question: 'Which tribe is described as giving "royal delicacies"?',
              options: ['Asher', 'Naphtali', 'Gad', 'Benjamin'],
              correctAnswer: 'Asher',
              explanation: 'Genesis 49:20: "Asher\'s food shall be rich, and he shall yield royal delicacies."',
              difficulty: 'hard'
            },
            {
              id: 'genesis49-q15',
              question: 'What did Jacob do immediately after finishing his instructions?',
              options: ['He ate', 'He blessed Pharaoh', 'He gathered up his feet into the bed and breathed his last', 'He slept'],
              correctAnswer: 'He gathered up his feet into the bed and breathed his last',
              explanation: 'Genesis 49:33: "He gathered up his feet into the bed and breathed his last and was gathered to his people."',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 49:10',
              key_verse_text: "The scepter shall not depart from Judah, nor the ruler's staff from between his feet, until tribute comes to him.",
                memory_challenge: true,
                  difficulty: 'hard',
                    points: 20
  },
{
  id: 'genesis-50',
    bookId: 'genesis',
      chapter: 50,
        title: 'Joseph Reassures His Brothers',
          questions: [
            // EASY QUESTIONS (5)
            {
              id: 'genesis50-q1',
              question: 'Where was Jacob buried?',
              options: ['In Egypt', 'In the cave of Machpelah in Canaan', 'In Shechem', 'By the river Jordan'],
              correctAnswer: 'In the cave of Machpelah in Canaan',
              explanation: 'Genesis 50:13 (ESV): "His sons carried him to the land of Canaan and buried him in the cave of the field at Machpelah."',
              difficulty: 'easy'
            },
            {
              id: 'genesis50-q2',
              question: 'What did Joseph say when his brothers feared revenge?',
              options: ['You meant evil against me, but God meant it for good', 'I will punish you now', 'Leave Egypt immediately', 'You are my servants'],
              correctAnswer: 'You meant evil against me, but God meant it for good',
              explanation: 'Genesis 50:20: "As for you, you meant evil against me, but God meant it for good."',
              difficulty: 'easy'
            },
            {
              id: 'genesis50-q3',
              question: 'How old was Joseph when he died?',
              options: ['110', '120', '100', '147'],
              correctAnswer: '110',
              explanation: 'Genesis 50:26: "So Joseph died, being 110 years old."',
              difficulty: 'easy'
            },
            {
              id: 'genesis50-q4',
              question: 'What promise did Joseph ask of his brothers before he died?',
              options: ['To carry his bones up from Egypt', 'To build him a pyramid', 'To stay in Egypt forever', 'To make his son king'],
              correctAnswer: 'To carry his bones up from Egypt',
              explanation: 'Genesis 50:25: "God will surely visit you, and you shall carry up my bones from here."',
              difficulty: 'easy'
            },
            {
              id: 'genesis50-q5',
              question: 'Did the Egyptians mourn for Jacob?',
              options: ['No', 'Yes, for seventy days', 'Yes, for seven days', 'They ignored his death'],
              correctAnswer: 'Yes, for seventy days',
              explanation: 'Genesis 50:3: "The Egyptians wept for him seventy days."',
              difficulty: 'easy'
            },
            // MEDIUM QUESTIONS (5)
            {
              id: 'genesis50-q6',
              question: 'How long did the embalming of Jacob take?',
              options: ['Forty days', 'Seven days', 'Thirty days', 'Ten days'],
              correctAnswer: 'Forty days',
              explanation: 'Genesis 50:3: "Forty days were required for it, for that is how many are required for embalming."',
              difficulty: 'medium'
            },
            {
              id: 'genesis50-q7',
              question: 'Who went with Joseph to bury Jacob?',
              options: ['Only his brothers', 'All the servants of Pharaoh, the elders of his household, and all the elders of Egypt', 'Just his sons', 'No one'],
              correctAnswer: 'All the servants of Pharaoh, the elders of his household, and all the elders of Egypt',
              explanation: 'Genesis 50:7: "So Joseph went up to bury his father. With him went up all the servants of Pharaoh..."',
              difficulty: 'medium'
            },
            {
              id: 'genesis50-q8',
              question: 'What message did the brothers send to Joseph after Jacob died?',
              options: ['We are leaving', 'Your father gave this command: Forgive your brothers', 'We are sorry', 'Give us money'],
              correctAnswer: 'Your father gave this command: Forgive your brothers',
              explanation: 'Genesis 50:16-17: They sent a message saying Jacob commanded Joseph to forgive them.',
              difficulty: 'medium'
            },
            {
              id: 'genesis50-q9',
              question: 'How did Joseph react to his brothers\' message?',
              options: ['He was angry', 'He wept', 'He ignored it', 'He laughed'],
              correctAnswer: 'He wept',
              explanation: 'Genesis 50:17: "Joseph wept when they spoke to him."',
              difficulty: 'medium'
            },
            {
              id: 'genesis50-q10',
              question: 'Where did they stop to mourn on the way to Canaan?',
              options: ['The threshing floor of Atad', 'The river Jordan', 'Mount Sinai', 'Jericho'],
              correctAnswer: 'The threshing floor of Atad',
              explanation: 'Genesis 50:10: "When they came to the threshing floor of Atad...they lamented there with a very great and grievous lamentation."',
              difficulty: 'medium'
            },
            // HARD QUESTIONS (5)
            {
              id: 'genesis50-q11',
              question: 'What did the Canaanites call the place where they mourned?',
              options: ['Abel-mizraim', 'Bethel', 'Eshcol', 'Mara'],
              correctAnswer: 'Abel-mizraim',
              explanation: 'Genesis 50:11: "Therefore its name was called Abel-mizraim (Mourning of Egypt)."',
              difficulty: 'hard'
            },
            {
              id: 'genesis50-q12',
              question: 'What generation of Ephraim\'s children did Joseph see?',
              options: ['The third generation', 'The fourth generation', 'Only the first', 'None'],
              correctAnswer: 'The third generation',
              explanation: 'Genesis 50:23: "And Joseph saw Ephraim\'s children of the third generation."',
              difficulty: 'hard'
            },
            {
              id: 'genesis50-q13',
              question: 'What specific reassurance did Joseph give his brothers?',
              options: ['Am I in the place of God?', 'I have forgotten it', 'You are forgiven', 'Do not fear'],
              correctAnswer: 'Am I in the place of God?',
              explanation: 'Genesis 50:19: "But Joseph said to them, \'Do not fear, for am I in the place of God?\'"',
              difficulty: 'hard'
            },
            {
              id: 'genesis50-q14',
              question: "Whose children were 'counted as Joseph's' (born on his knees)?",
              options: ['The children of Machir son of Manasseh', 'The children of Ephraim', 'The children of Benjamin', 'The children of Judah'],
              correctAnswer: 'The children of Machir son of Manasseh',
              explanation: 'Genesis 50:23: "The children also of Machir the son of Manasseh were counted as Joseph\'s own."',
              difficulty: 'hard'
            },
            {
              id: 'genesis50-q15',
              question: 'How ends the book of Genesis?',
              options: ['With a feast', 'With Joseph in a coffin in Egypt', 'With the return to Canaan', 'With the birth of Moses'],
              correctAnswer: 'With Joseph in a coffin in Egypt',
              explanation: 'Genesis 50:26: "So Joseph died...and he was put in a coffin in Egypt."',
              difficulty: 'hard'
            }
          ],
            key_verse: 'Genesis 50:20',
              key_verse_text: "As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive, as they are today.",
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