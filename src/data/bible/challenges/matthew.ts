
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
  },
  {
    id: 'matthew-6',
    bookId: 'matthew',
    chapter: 6,
    title: 'The Lord\'s Prayer and Teachings on Worry',
    questions: [
      {
        id: 'matt6-q1',
        question: 'According to Jesus, what should NOT be our motivation when giving to the needy?',
        options: [
          'To help others', 
          'To be seen by others', 
          'To follow God\'s commands', 
          'To reduce suffering'
        ],
        correctAnswer: 'To be seen by others',
        explanation: 'In Matthew 6:1-4, Jesus warns against giving to be seen and praised by others.'
      },
      {
        id: 'matt6-q2',
        question: 'How does Jesus teach us to address God in prayer?',
        options: [
          'Almighty God', 
          'Lord of hosts', 
          'Our Father in heaven', 
          'Creator of all things'
        ],
        correctAnswer: 'Our Father in heaven',
        explanation: 'Matthew 6:9 begins the Lord\'s Prayer with "Our Father in heaven..."'
      },
      {
        id: 'matt6-q3',
        question: 'What does Jesus teach about forgiveness in the Lord\'s Prayer?',
        options: [
          'We should forgive only if we are forgiven', 
          'God forgives us as we forgive others', 
          'Forgiveness is optional', 
          'We should seek revenge on our enemies'
        ],
        correctAnswer: 'God forgives us as we forgive others',
        explanation: 'In Matthew 6:12, Jesus teaches to pray "forgive us our debts, as we also have forgiven our debtors," and reinforces this in verses 14-15.'
      },
      {
        id: 'matt6-q4',
        question: 'What does Jesus say about storing up treasures?',
        options: [
          'Store treasures on earth for security', 
          'Avoid all forms of wealth', 
          'Store treasures in heaven, not on earth', 
          'Give away everything you own'
        ],
        correctAnswer: 'Store treasures in heaven, not on earth',
        explanation: 'In Matthew 6:19-21, Jesus instructs not to store up treasures on earth but in heaven.'
      },
      {
        id: 'matt6-q5',
        question: 'What example from nature does Jesus use to illustrate God\'s provision?',
        options: [
          'Trees and their fruit', 
          'Birds of the air and lilies of the field', 
          'Fish in the sea', 
          'Stars in the sky'
        ],
        correctAnswer: 'Birds of the air and lilies of the field',
        explanation: 'In Matthew 6:26-29, Jesus points to how God feeds the birds and clothes the lilies as evidence of His care for us.'
      }
    ],
    key_verse: 'Matthew 6:33',
    key_verse_text: 'But seek first the kingdom of God and his righteousness, and all these things will be added to you.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-7',
    bookId: 'matthew',
    chapter: 7,
    title: 'Judging Others and the Wise Builder',
    questions: [
      {
        id: 'matt7-q1',
        question: 'What warning does Jesus give about judging others?',
        options: [
          'Judge others fairly', 
          'Do not judge, or you will be judged', 
          'Only religious leaders can judge', 
          'Judge according to appearances'
        ],
        correctAnswer: 'Do not judge, or you will be judged',
        explanation: 'Matthew 7:1-2 states, "Judge not, that you be not judged. For with the judgment you pronounce you will be judged."'
      },
      {
        id: 'matt7-q2',
        question: 'What metaphor does Jesus use about seeing others\' faults?',
        options: [
          'Picking fruit from trees', 
          'Speck and log in the eye', 
          'Wheat and tares', 
          'Sheep and goats'
        ],
        correctAnswer: 'Speck and log in the eye',
        explanation: 'In Matthew 7:3-5, Jesus speaks of trying to remove a speck from another\'s eye while having a log in your own.'
      },
      {
        id: 'matt7-q3',
        question: 'What is the "Golden Rule" as taught by Jesus?',
        options: [
          'Love God above all else', 
          'Whoever has the gold makes the rules', 
          'Do to others what you would have them do to you', 
          'Give to everyone who asks of you'
        ],
        correctAnswer: 'Do to others what you would have them do to you',
        explanation: 'Matthew 7:12 gives the Golden Rule: "So whatever you wish that others would do to you, do also to them."'
      },
      {
        id: 'matt7-q4',
        question: 'What imagery does Jesus use to describe the way to life versus destruction?',
        options: [
          'Light and darkness', 
          'Mountain and valley', 
          'Narrow gate/road and wide gate/road', 
          'Bridge and river'
        ],
        correctAnswer: 'Narrow gate/road and wide gate/road',
        explanation: 'In Matthew 7:13-14, Jesus describes a narrow gate and road leading to life, and a wide gate and road leading to destruction.'
      },
      {
        id: 'matt7-q5',
        question: 'What foundation metaphor does Jesus use for those who obey His teachings?',
        options: [
          'Building on rock versus sand', 
          'Planting in good soil versus rocky ground', 
          'Drawing water from a well versus a cistern', 
          'Walking on a paved road versus a muddy path'
        ],
        correctAnswer: 'Building on rock versus sand',
        explanation: 'In Matthew 7:24-27, Jesus compares those who hear and act on His words to a wise man who built his house on rock, and those who don\'t to a foolish man who built on sand.'
      }
    ],
    key_verse: 'Matthew 7:7',
    key_verse_text: 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-8',
    bookId: 'matthew',
    chapter: 8,
    title: 'Jesus Performs Miracles',
    questions: [
      {
        id: 'matt8-q1',
        question: 'What was the first miracle recorded in Matthew chapter 8?',
        options: [
          'Calming the storm', 
          'Healing a paralytic', 
          'Healing a leper', 
          'Casting out demons'
        ],
        correctAnswer: 'Healing a leper',
        explanation: 'Matthew 8:1-4 records Jesus healing a man with leprosy as the first miracle in this chapter.'
      },
      {
        id: 'matt8-q2',
        question: 'Whose servant did Jesus heal without even visiting their home?',
        options: [
          'A Pharisee\'s', 
          'A centurion\'s', 
          'A merchant\'s', 
          'A priest\'s'
        ],
        correctAnswer: 'A centurion\'s',
        explanation: 'In Matthew 8:5-13, Jesus healed a Roman centurion\'s servant from a distance.'
      },
      {
        id: 'matt8-q3',
        question: 'What did Jesus say about the centurion\'s faith?',
        options: [
          'It was weak but growing', 
          'It was typical of Roman converts', 
          'He had not found such great faith in Israel', 
          'It needed to be tested'
        ],
        correctAnswer: 'He had not found such great faith in Israel',
        explanation: 'In Matthew 8:10, Jesus says, "Truly, I tell you, with no one in Israel have I found such faith."'
      },
      {
        id: 'matt8-q4',
        question: 'What miracle did Jesus perform on the Sea of Galilee?',
        options: [
          'He walked on water', 
          'He caught a miraculous haul of fish', 
          'He calmed a storm', 
          'He turned the water into wine'
        ],
        correctAnswer: 'He calmed a storm',
        explanation: 'Matthew 8:23-27 describes Jesus calming a violent storm on the Sea of Galilee while in a boat with His disciples.'
      },
      {
        id: 'matt8-q5',
        question: 'What happened to the herd of pigs after Jesus cast demons out of the two men?',
        options: [
          'They were given to the men as a gift', 
          'They immediately became healthy', 
          'They rushed down the bank into the sea and drowned', 
          'They ran away into the wilderness'
        ],
        correctAnswer: 'They rushed down the bank into the sea and drowned',
        explanation: 'Matthew 8:32 records that after the demons entered the pigs, the whole herd rushed down the steep bank into the sea and drowned.'
      }
    ],
    key_verse: 'Matthew 8:17',
    key_verse_text: 'This was to fulfill what was spoken by the prophet Isaiah: "He took our illnesses and bore our diseases."',
    memory_challenge: true,
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'matthew-9',
    bookId: 'matthew',
    chapter: 9,
    title: 'Healing and Calling Disciples',
    questions: [
      {
        id: 'matt9-q1',
        question: 'What did Jesus say to the paralytic before healing him physically?',
        options: [
          '"Be healed!"', 
          '"Take up your bed and walk"', 
          '"Your sins are forgiven"', 
          '"Do you want to be made well?"'
        ],
        correctAnswer: '"Your sins are forgiven"',
        explanation: 'In Matthew 9:2, Jesus first told the paralytic, "Take heart, my son; your sins are forgiven."'
      },
      {
        id: 'matt9-q2',
        question: 'Which disciple was called by Jesus while sitting at a tax booth?',
        options: [
          'Peter', 
          'Andrew', 
          'Matthew', 
          'John'
        ],
        correctAnswer: 'Matthew',
        explanation: 'Matthew 9:9 records Jesus calling Matthew (also called Levi) while he was sitting at the tax booth.'
      },
      {
        id: 'matt9-q3',
        question: 'What did Jesus mean when He said, "Those who are well have no need of a physician, but those who are sick"?',
        options: [
          'He only came to heal physical illnesses', 
          'He came to call sinners to repentance, not the righteous', 
          'The Pharisees needed medical attention', 
          'His disciples should become doctors'
        ],
        correctAnswer: 'He came to call sinners to repentance, not the righteous',
        explanation: 'In Matthew 9:12-13, Jesus explains that He came to call sinners, not the righteous, using the physician metaphor.'
      },
      {
        id: 'matt9-q4',
        question: 'What miracle did Jesus perform for the woman who touched His garment?',
        options: [
          'He restored her sight', 
          'He healed her hemorrhage', 
          'He cast out a demon', 
          'He raised her from the dead'
        ],
        correctAnswer: 'He healed her hemorrhage',
        explanation: 'Matthew 9:20-22 describes a woman with a 12-year hemorrhage being healed after touching Jesus\' garment.'
      },
      {
        id: 'matt9-q5',
        question: 'What did Jesus say was needed for the harvest?',
        options: [
          'More time', 
          'Better weather', 
          'More workers', 
          'More fields'
        ],
        correctAnswer: 'More workers',
        explanation: 'In Matthew 9:37-38, Jesus tells His disciples, "The harvest is plentiful, but the laborers are few; therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest."'
      }
    ],
    key_verse: 'Matthew 9:13',
    key_verse_text: 'Go and learn what this means: "I desire mercy, and not sacrifice." For I came not to call the righteous, but sinners.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-10',
    bookId: 'matthew',
    chapter: 10,
    title: 'The Twelve Apostles Sent Out',
    questions: [
      {
        id: 'matt10-q1',
        question: 'How many apostles did Jesus call and send out?',
        options: ['7', '10', '12', '24'],
        correctAnswer: '12',
        explanation: 'Matthew 10:1-4 lists the twelve apostles whom Jesus called and sent out.'
      },
      {
        id: 'matt10-q2',
        question: 'To whom did Jesus specifically instruct His apostles to go?',
        options: [
          'To all nations', 
          'To the lost sheep of Israel', 
          'To the Gentiles', 
          'To the Samaritans'
        ],
        correctAnswer: 'To the lost sheep of Israel',
        explanation: 'In Matthew 10:5-6, Jesus instructed them not to go to Gentiles or Samaritans but "to the lost sheep of the house of Israel."'
      },
      {
        id: 'matt10-q3',
        question: 'What were the apostles instructed to do on their mission?',
        options: [
          'Build synagogues', 
          'Collect money for the poor', 
          'Proclaim the kingdom and heal the sick', 
          'Write down Jesus\' teachings'
        ],
        correctAnswer: 'Proclaim the kingdom and heal the sick',
        explanation: 'Matthew 10:7-8 shows Jesus instructing them to proclaim that the kingdom of heaven is at hand, and to heal the sick, raise the dead, cleanse lepers, and cast out demons.'
      },
      {
        id: 'matt10-q4',
        question: 'What did Jesus say about how they should prepare financially for their journey?',
        options: [
          'Take gold and silver for emergencies', 
          'Earn your keep by working along the way', 
          'Acquire no gold, silver, or copper; the worker deserves his food', 
          'Ask for donations from each town'
        ],
        correctAnswer: 'Acquire no gold, silver, or copper; the worker deserves his food',
        explanation: 'In Matthew 10:9-10, Jesus told them not to acquire gold, silver, or copper, and explained that "the worker deserves his food."'
      },
      {
        id: 'matt10-q5',
        question: 'What did Jesus promise would happen to those who acknowledge Him before others?',
        options: [
          'They will be first in the kingdom', 
          'They will be acknowledged by Him before the Father', 
          'They will receive rewards on earth', 
          'They will perform miracles'
        ],
        correctAnswer: 'They will be acknowledged by Him before the Father',
        explanation: 'Matthew 10:32 states, "So everyone who acknowledges me before men, I also will acknowledge before my Father who is in heaven."'
      }
    ],
    key_verse: 'Matthew 10:16',
    key_verse_text: 'Behold, I am sending you out as sheep in the midst of wolves, so be wise as serpents and innocent as doves.',
    memory_challenge: true,
    difficulty: 'hard',
    points: 20
  }
];
