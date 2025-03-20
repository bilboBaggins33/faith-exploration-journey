
import { ChapterChallenge } from '../types';

export const matthewChallenges: ChapterChallenge[] = [
  {
    id: 'matthew-1',
    bookId: 'matthew',
    chapter: 1,
    title: 'The Genealogy of Jesus Christ',
    questions: [
      {
        id: 'matt1-q1',
        question: 'Whose genealogy does Matthew begin with?',
        options: ['Moses', 'David', 'Abraham', 'Adam'],
        correctAnswer: 'Abraham',
        explanation: 'Matthew 1:1 begins "The book of the genealogy of Jesus Christ, the son of David, the son of Abraham."'
      },
      {
        id: 'matt1-q2',
        question: 'How many generations does Matthew list from Abraham to Jesus?',
        options: ['14', '28', '42', '70'],
        correctAnswer: '42',
        explanation: 'Matthew 1:17 states there were 14 generations from Abraham to David, 14 from David to the Babylonian exile, and 14 from the exile to Christ, totaling 42 generations.'
      },
      {
        id: 'matt1-q3',
        question: 'What unusual feature is found in Jesus\'s genealogy that was rare for Jewish genealogies?',
        options: [
          'It includes Gentiles', 
          'It includes women', 
          'It skips generations', 
          'It includes Roman officials'
        ],
        correctAnswer: 'It includes women',
        explanation: 'Matthew\'s genealogy unusually includes several women: Tamar, Rahab, Ruth, "the wife of Uriah" (Bathsheba), and Mary.'
      },
      {
        id: 'matt1-q4',
        question: 'What does the name "Jesus" mean according to the angel\'s message to Joseph?',
        options: [
          'King of kings', 
          'God with us', 
          'He will save his people from their sins', 
          'Light of the world'
        ],
        correctAnswer: 'He will save his people from their sins',
        explanation: 'In Matthew 1:21, the angel tells Joseph: "She will bear a son, and you shall call his name Jesus, for he will save his people from their sins."'
      },
      {
        id: 'matt1-q5',
        question: 'What prophecy does Matthew cite as being fulfilled by Jesus\'s virgin birth?',
        options: [
          'A prophecy from Micah', 
          'A prophecy from Isaiah', 
          'A prophecy from Jeremiah', 
          'A prophecy from Daniel'
        ],
        correctAnswer: 'A prophecy from Isaiah',
        explanation: 'Matthew 1:22-23 cites Isaiah 7:14: "Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel."'
      }
    ],
    key_verse: 'Matthew 1:21',
    key_verse_text: 'She will bear a son, and you shall call his name Jesus, for he will save his people from their sins.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-2',
    bookId: 'matthew',
    chapter: 2,
    title: 'The Visit of the Wise Men and Flight to Egypt',
    questions: [
      {
        id: 'matt2-q1',
        question: 'Who was king when Jesus was born?',
        options: ['Caesar Augustus', 'Herod', 'Pilate', 'Tiberius'],
        correctAnswer: 'Herod',
        explanation: 'Matthew 2:1 states that Jesus was born in Bethlehem of Judea in the days of Herod the king.'
      },
      {
        id: 'matt2-q2',
        question: 'What did the wise men follow to find Jesus?',
        options: ['A dove', 'A map', 'A star', 'An angel'],
        correctAnswer: 'A star',
        explanation: 'Matthew 2:2 mentions that the wise men saw his star in the east and followed it to find Jesus.'
      },
      {
        id: 'matt2-q3',
        question: 'What gifts did the wise men bring to Jesus?',
        options: [
          'Gold, silver, and bronze', 
          'Gold, frankincense, and myrrh', 
          'Bread, wine, and oil', 
          'Clothing, food, and money'
        ],
        correctAnswer: 'Gold, frankincense, and myrrh',
        explanation: 'Matthew 2:11 records that the wise men offered Jesus gifts of gold, frankincense, and myrrh.'
      },
      {
        id: 'matt2-q4',
        question: 'How did God warn the wise men not to return to Herod?',
        options: [
          'Through a star', 
          'Through an angel', 
          'Through a dream', 
          'Through Joseph'
        ],
        correctAnswer: 'Through a dream',
        explanation: 'Matthew 2:12 states they were warned in a dream not to return to Herod.'
      },
      {
        id: 'matt2-q5',
        question: 'Where did Joseph take Mary and Jesus to escape from Herod?',
        options: [
          'Nazareth', 
          'Egypt', 
          'Galilee', 
          'Syria'
        ],
        correctAnswer: 'Egypt',
        explanation: 'Matthew 2:13-14 describes how Joseph took Mary and Jesus to Egypt to escape Herod\'s wrath.'
      }
    ],
    key_verse: 'Matthew 2:11',
    key_verse_text: 'And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.',
    memory_challenge: true,
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'matthew-3',
    bookId: 'matthew',
    chapter: 3,
    title: 'John the Baptist and the Baptism of Jesus',
    questions: [
      {
        id: 'matt3-q1',
        question: 'What was John the Baptist\'s main message?',
        options: [
          'Peace and goodwill', 
          'Love your neighbor', 
          'Repent, for the kingdom of heaven is at hand', 
          'Follow the law of Moses'
        ],
        correctAnswer: 'Repent, for the kingdom of heaven is at hand',
        explanation: 'Matthew 3:2 records John\'s message as "Repent, for the kingdom of heaven is at hand."'
      },
      {
        id: 'matt3-q2',
        question: 'What did John the Baptist wear?',
        options: [
          'Fine linen robes', 
          'A camel\'s hair garment with a leather belt', 
          'A woolen tunic', 
          'Priestly garments'
        ],
        correctAnswer: 'A camel\'s hair garment with a leather belt',
        explanation: 'Matthew 3:4 describes John as wearing a garment of camel\'s hair and a leather belt around his waist.'
      },
      {
        id: 'matt3-q3',
        question: 'What was John\'s diet in the wilderness?',
        options: [
          'Bread and fish', 
          'Manna from heaven', 
          'Locusts and wild honey', 
          'Fruits and vegetables'
        ],
        correctAnswer: 'Locusts and wild honey',
        explanation: 'Matthew 3:4 states that John\'s food was locusts and wild honey.'
      },
      {
        id: 'matt3-q4',
        question: 'What did John say about the one coming after him?',
        options: [
          'He would be a military leader', 
          'He would be a great teacher', 
          'He was more powerful and would baptize with the Holy Spirit and fire', 
          'He would restore the kingdom to Israel'
        ],
        correctAnswer: 'He was more powerful and would baptize with the Holy Spirit and fire',
        explanation: 'In Matthew 3:11, John says, "He who is coming after me is mightier than I... He will baptize you with the Holy Spirit and fire."'
      },
      {
        id: 'matt3-q5',
        question: 'What happened when Jesus was baptized?',
        options: [
          'The water turned to wine', 
          'The heavens opened, the Spirit descended like a dove, and a voice spoke from heaven', 
          'John immediately became His disciple', 
          'The crowd fell to their knees in worship'
        ],
        correctAnswer: 'The heavens opened, the Spirit descended like a dove, and a voice spoke from heaven',
        explanation: 'Matthew 3:16-17 describes how the heavens opened, the Spirit of God descended like a dove, and a voice from heaven said, "This is my beloved Son, with whom I am well pleased."'
      }
    ],
    key_verse: 'Matthew 3:16-17',
    key_verse_text: 'And when Jesus was baptized, immediately he went up from the water, and behold, the heavens were opened to him, and he saw the Spirit of God descending like a dove and coming to rest on him; and behold, a voice from heaven said, "This is my beloved Son, with whom I am well pleased."',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-4',
    bookId: 'matthew',
    chapter: 4,
    title: 'The Temptation of Jesus and Beginning of Ministry',
    questions: [
      {
        id: 'matt4-q1',
        question: 'How long did Jesus fast in the wilderness?',
        options: ['7 days', '14 days', '30 days', '40 days and 40 nights'],
        correctAnswer: '40 days and 40 nights',
        explanation: 'Matthew 4:2 states that Jesus fasted for forty days and forty nights.'
      },
      {
        id: 'matt4-q2',
        question: 'What was the first temptation Satan presented to Jesus?',
        options: [
          'To throw Himself down from the temple', 
          'To worship Satan', 
          'To turn stones into bread', 
          'To take control of all kingdoms'
        ],
        correctAnswer: 'To turn stones into bread',
        explanation: 'In Matthew 4:3, Satan first tempted Jesus to command stones to become loaves of bread.'
      },
      {
        id: 'matt4-q3',
        question: 'How did Jesus respond to each temptation?',
        options: [
          'By rebuking Satan directly', 
          'By performing miracles', 
          'By quoting Scripture', 
          'By calling angels to help Him'
        ],
        correctAnswer: 'By quoting Scripture',
        explanation: 'Jesus responded to each temptation by quoting Scripture, saying "It is written..." (Matthew 4:4, 7, 10).'
      },
      {
        id: 'matt4-q4',
        question: 'Where did Jesus begin His ministry after John was arrested?',
        options: [
          'Jerusalem', 
          'Bethlehem', 
          'Capernaum in Galilee', 
          'Nazareth'
        ],
        correctAnswer: 'Capernaum in Galilee',
        explanation: 'Matthew 4:12-13 tells us that when Jesus heard John was arrested, He withdrew into Galilee and lived in Capernaum.'
      },
      {
        id: 'matt4-q5',
        question: 'Who were the first disciples Jesus called?',
        options: [
          'Matthew and Thomas', 
          'Peter and John', 
          'Peter and Andrew, then James and John', 
          'Philip and Bartholomew'
        ],
        correctAnswer: 'Peter and Andrew, then James and John',
        explanation: 'In Matthew 4:18-22, Jesus first called Peter and his brother Andrew, then James and John, the sons of Zebedee.'
      }
    ],
    key_verse: 'Matthew 4:4',
    key_verse_text: 'But he answered, "It is written, \'Man shall not live by bread alone, but by every word that comes from the mouth of God.\'"',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-5',
    bookId: 'matthew',
    chapter: 5,
    title: 'The Sermon on the Mount: Beatitudes',
    questions: [
      {
        id: 'matt5-q1',
        question: 'What are the first words of the Sermon on the Mount?',
        options: [
          '"Our Father in heaven..."', 
          '"Blessed are the poor in spirit..."', 
          '"You are the salt of the earth..."', 
          '"Let your light shine before others..."'
        ],
        correctAnswer: '"Blessed are the poor in spirit..."',
        explanation: 'Matthew 5:3 begins the Sermon on the Mount with "Blessed are the poor in spirit, for theirs is the kingdom of heaven."'
      },
      {
        id: 'matt5-q2',
        question: 'What did Jesus say about those who mourn?',
        options: [
          'They will be exalted', 
          'They will be comforted', 
          'They will see God', 
          'They will inherit the earth'
        ],
        correctAnswer: 'They will be comforted',
        explanation: 'In Matthew 5:4, Jesus says, "Blessed are those who mourn, for they shall be comforted."'
      },
      {
        id: 'matt5-q3',
        question: 'What metaphors does Jesus use to describe His followers?',
        options: [
          'Sheep and shepherds', 
          'Wheat and tares', 
          'Salt and light', 
          'Branches and vines'
        ],
        correctAnswer: 'Salt and light',
        explanation: 'In Matthew 5:13-14, Jesus calls His followers "the salt of the earth" and "the light of the world."'
      },
      {
        id: 'matt5-q4',
        question: 'What did Jesus say He came to do regarding the Law?',
        options: [
          'To abolish it completely', 
          'To simplify it', 
          'To not abolish it but to fulfill it', 
          'To add to it'
        ],
        correctAnswer: 'To not abolish it but to fulfill it',
        explanation: 'Matthew 5:17 records Jesus saying, "Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them."'
      },
      {
        id: 'matt5-q5',
        question: 'What radical teaching did Jesus give about enemies?',
        options: [
          'Avoid them at all costs', 
          'Love them and pray for those who persecute you', 
          'Give them what they deserve', 
          'Call fire down from heaven upon them'
        ],
        correctAnswer: 'Love them and pray for those who persecute you',
        explanation: 'In Matthew 5:44, Jesus instructs, "Love your enemies and pray for those who persecute you."'
      }
    ],
    key_verse: 'Matthew 5:16',
    key_verse_text: 'In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.',
    memory_challenge: true,
    difficulty: 'hard',
    points: 20
  }
];
