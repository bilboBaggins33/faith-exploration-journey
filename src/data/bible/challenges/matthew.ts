
import { ChapterChallenge } from '../types';

export const matthewChallenges: ChapterChallenge[] = [
  // Previous chapters 1-10 remain unchanged as provided
  // Adding chapters 14-28 below

  {
    id: 'matthew-14',
    bookId: 'matthew',
    chapter: 14,
    title: 'The Death of John the Baptist and Feeding the Five Thousand',
    questions: [
      {
        id: 'matt14-q1',
        question: 'Why did Herod have John the Baptist beheaded?',
        options: [
          'John criticized Herod’s marriage to Herodias',
          'John refused to baptize Herod',
          'John led a rebellion against Herod',
          'Herod feared John’s miraculous powers'
        ],
        correctAnswer: 'John criticized Herod’s marriage to Herodias',
        explanation: 'Matthew 14:3-4 explains that Herod arrested John because John said it was unlawful for Herod to have Herodias, his brother’s wife, leading to his execution at Herodias’s request (Matthew 14:6-11).'
      },
      {
        id: 'matt14-q2',
        question: 'What did Jesus do when He heard about John the Baptist’s death?',
        options: [
          'He confronted Herod',
          'He withdrew to a desolate place alone',
          'He sent His disciples to investigate',
          'He preached a sermon of vengeance'
        ],
        correctAnswer: 'He withdrew to a desolate place alone',
        explanation: 'Matthew 14:13 says, “Now when Jesus heard this, he withdrew from there in a boat to a desolate place by himself.”'
      },
      {
        id: 'matt14-q3',
        question: 'How many loaves and fish did Jesus use to feed the five thousand?',
        options: [
          'Seven loaves and a few fish',
          'Two loaves and five fish',
          'Five loaves and two fish',
          'Three loaves and three fish'
        ],
        correctAnswer: 'Five loaves and two fish',
        explanation: 'In Matthew 14:17, the disciples tell Jesus, “We have only five loaves here and two fish,” which He then multiplied to feed the crowd.'
      },
      {
        id: 'matt14-q4',
        question: 'What miracle did Jesus perform after sending the crowd away?',
        options: [
          'He turned water into wine',
          'He walked on water',
          'He healed a blind man',
          'He raised someone from the dead'
        ],
        correctAnswer: 'He walked on water',
        explanation: 'Matthew 14:25 records, “And in the fourth watch of the night he came to them, walking on the sea.”'
      },
      {
        id: 'matt14-q5',
        question: 'What did Peter do when he saw Jesus walking on water?',
        options: [
          'He stayed in the boat out of fear',
          'He walked on water toward Jesus but began to sink',
          'He swam to Jesus',
          'He called the other disciples to join him'
        ],
        correctAnswer: 'He walked on water toward Jesus but began to sink',
        explanation: 'In Matthew 14:28-30, Peter asked to come to Jesus on the water, walked briefly, but began to sink when he saw the wind and became afraid.'
      }
    ],
    key_verse: 'Matthew 14:27',
    key_verse_text: 'But immediately Jesus spoke to them, saying, “Take heart; it is I. Do not be afraid.”',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-15',
    bookId: 'matthew',
    chapter: 15,
    title: 'Tradition vs. Commandment and Feeding the Four Thousand',
    questions: [
      {
        id: 'matt15-q1',
        question: 'What did the Pharisees criticize Jesus’ disciples for not doing?',
        options: [
          'Paying taxes',
          'Washing their hands before eating',
          'Attending synagogue',
          'Fasting regularly'
        ],
        correctAnswer: 'Washing their hands before eating',
        explanation: 'Matthew 15:2 states the Pharisees asked, “Why do your disciples break the tradition of the elders? For they do not wash their hands when they eat.”'
      },
      {
        id: 'matt15-q2',
        question: 'How did Jesus respond to the Pharisees’ criticism about tradition?',
        options: [
          'He said traditions were more important than commandments',
          'He accused them of honoring God with their lips only',
          'He criticized them for neglecting God’s commandment to honor parents',
          'He ignored their question'
        ],
        correctAnswer: 'He criticized them for neglecting God’s commandment to honor parents',
        explanation: 'In Matthew 15:3-6, Jesus says they break the commandment of God by their tradition, citing how they allow neglect of parents under the guise of offerings.'
      },
      {
        id: 'matt15-q3',
        question: 'Who did Jesus heal in the region of Tyre and Sidon?',
        options: [
          'A Roman centurion’s servant',
          'A Canaanite woman’s daughter',
          'A blind man',
          'A leper'
        ],
        correctAnswer: 'A Canaanite woman’s daughter',
        explanation: 'Matthew 15:22-28 describes a Canaanite woman begging Jesus to heal her demon-possessed daughter, which He did after praising her faith.'
      },
      {
        id: 'matt15-q4',
        question: 'How many loaves did Jesus use to feed the four thousand?',
        options: [
          'Five loaves',
          'Seven loaves',
          'Three loaves',
          'Two loaves'
        ],
        correctAnswer: 'Seven loaves',
        explanation: 'Matthew 15:34-36 notes the disciples had seven loaves and a few small fish, which Jesus blessed to feed four thousand men plus women and children.'
      },
      {
        id: 'matt15-q5',
        question: 'What did Jesus say defiles a person?',
        options: [
          'Eating with unwashed hands',
          'Breaking traditions',
          'What comes out of the mouth, from the heart',
          'Touching unclean things'
        ],
        correctAnswer: 'What comes out of the mouth, from the heart',
        explanation: 'In Matthew 15:11 and 18-20, Jesus teaches, “It is not what goes into the mouth that defiles a person, but what comes out of the mouth; this defiles a person,” referring to evil thoughts from the heart.'
      }
    ],
    key_verse: 'Matthew 15:11',
    key_verse_text: 'It is not what goes into the mouth that defiles a person, but what comes out of the mouth; this defiles a person.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-16',
    bookId: 'matthew',
    chapter: 16,
    title: 'Peter’s Confession and Jesus Predicts His Death',
    questions: [
      {
        id: 'matt16-q1',
        question: 'What sign did the Pharisees and Sadducees demand from Jesus?',
        options: [
          'A sign from heaven',
          'Healing on the Sabbath',
          'Turning water into wine',
          'Raising someone from the dead'
        ],
        correctAnswer: 'A sign from heaven',
        explanation: 'Matthew 16:1 says, “And the Pharisees and Sadducees came, and to test him they asked him to show them a sign from heaven.”'
      },
      {
        id: 'matt16-q2',
        question: 'What did Jesus say was the only sign that would be given to an evil generation?',
        options: [
          'The sign of the dove',
          'The sign of Jonah',
          'The sign of the star',
          'The sign of the cross'
        ],
        correctAnswer: 'The sign of Jonah',
        explanation: 'In Matthew 16:4, Jesus says, “An evil and adulterous generation seeks for a sign, but no sign will be given to it except the sign of Jonah,” referring to His resurrection.'
      },
      {
        id: 'matt16-q3',
        question: 'Who did Peter say Jesus was?',
        options: [
          'John the Baptist',
          'Elijah',
          'The Christ, the Son of the living God',
          'A prophet'
        ],
        correctAnswer: 'The Christ, the Son of the living God',
        explanation: 'In Matthew 16:16, Peter declares, “You are the Christ, the Son of the living God.”'
      },
      {
        id: 'matt16-q4',
        question: 'What did Jesus promise to build upon Peter’s confession?',
        options: [
          'A temple',
          'His church',
          'A kingdom on earth',
          'A school for disciples'
        ],
        correctAnswer: 'His church',
        explanation: 'Matthew 16:18 states, “And I tell you, you are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it.”'
      },
      {
        id: 'matt16-q5',
        question: 'What did Jesus predict would happen to Him in Jerusalem?',
        options: [
          'He would be crowned king',
          'He would suffer, die, and be raised on the third day',
          'He would overthrow the Romans',
          'He would ascend to heaven'
        ],
        correctAnswer: 'He would suffer, die, and be raised on the third day',
        explanation: 'In Matthew 16:21, Jesus tells His disciples “that he must go to Jerusalem and suffer many things from the elders and chief priests and scribes, and be killed, and on the third day be raised.”'
      }
    ],
    key_verse: 'Matthew 16:18',
    key_verse_text: 'And I tell you, you are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-17',
    bookId: 'matthew',
    chapter: 17,
    title: 'The Transfiguration and Healing a Boy',
    questions: [
      {
        id: 'matt17-q1',
        question: 'Who appeared with Jesus during the Transfiguration?',
        options: [
          'Abraham and Isaac',
          'Moses and Elijah',
          'David and Solomon',
          'Isaiah and Jeremiah'
        ],
        correctAnswer: 'Moses and Elijah',
        explanation: 'Matthew 17:3 says, “And behold, there appeared to them Moses and Elijah, talking with him.”'
      },
      {
        id: 'matt17-q2',
        question: 'What did Peter suggest during the Transfiguration?',
        options: [
          'To call down fire from heaven',
          'To build three tents for Jesus, Moses, and Elijah',
          'To worship Moses and Elijah',
          'To leave the mountain immediately'
        ],
        correctAnswer: 'To build three tents for Jesus, Moses, and Elijah',
        explanation: 'In Matthew 17:4, Peter says, “Lord, it is good that we are here. If you wish, I will make three tents here, one for you and one for Moses and one for Elijah.”'
      },
      {
        id: 'matt17-q3',
        question: 'What did the voice from the cloud say during the Transfiguration?',
        options: [
          'This is my Son, listen to Him',
          'This is my beloved Son, with whom I am well pleased; listen to him',
          'Fear not, for I am with you',
          'Behold, the kingdom of God is at hand'
        ],
        correctAnswer: 'This is my beloved Son, with whom I am well pleased; listen to him',
        explanation: 'Matthew 17:5 records the voice saying, “This is my beloved Son, with whom I am well pleased; listen to him.”'
      },
      {
        id: 'matt17-q4',
        question: 'Why couldn’t the disciples cast out the demon from the boy?',
        options: [
          'They lacked faith',
          'The demon was too powerful',
          'They needed to fast and pray',
          'Both A and C'
        ],
        correctAnswer: 'Both A and C',
        explanation: 'In Matthew 17:19-20, Jesus says it was “because of your little faith,” and adds in verse 21 (in some manuscripts), “But this kind never comes out except by prayer and fasting.”'
      },
      {
        id: 'matt17-q5',
        question: 'What did Jesus use to pay the temple tax?',
        options: [
          'Money from His purse',
          'A coin from a fish’s mouth',
          'Gold from a rich follower',
          'Offerings from the crowd'
        ],
        correctAnswer: 'A coin from a fish’s mouth',
        explanation: 'Matthew 17:27 says Jesus told Peter to “go to the sea and cast a hook and take the first fish that comes up, and when you open its mouth you will find a shekel.”'
      }
    ],
    key_verse: 'Matthew 17:5',
    key_verse_text: 'He was still speaking when, behold, a bright cloud overshadowed them, and a voice from the cloud said, “This is my beloved Son, with whom I am well pleased; listen to him.”',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-18',
    bookId: 'matthew',
    chapter: 18,
    title: 'Who Is the Greatest and Parable of the Unforgiving Servant',
    questions: [
      {
        id: 'matt18-q1',
        question: 'Who did Jesus say is the greatest in the kingdom of heaven?',
        options: [
          'The richest person',
          'The one who becomes like a child',
          'The strongest leader',
          'The most knowledgeable scribe'
        ],
        correctAnswer: 'The one who becomes like a child',
        explanation: 'In Matthew 18:3-4, Jesus says, “Unless you turn and become like children, you will never enter the kingdom of heaven. Whoever humbles himself like this child is the greatest in the kingdom of heaven.”'
      },
      {
        id: 'matt18-q2',
        question: 'What did Jesus say about causing a little one to sin?',
        options: [
          'It’s better to be thrown into the sea with a millstone around your neck',
          'It’s forgivable with repentance',
          'It’s a minor offense',
          'It’s the responsibility of the parents'
        ],
        correctAnswer: 'It’s better to be thrown into the sea with a millstone around your neck',
        explanation: 'Matthew 18:6 states, “But whoever causes one of these little ones who believe in me to sin, it would be better for him to have a great millstone fastened around his neck and to be drowned in the depth of the sea.”'
      },
      {
        id: 'matt18-q3',
        question: 'In the parable of the lost sheep, how many sheep did the shepherd leave to find the one that was lost?',
        options: [
          '99',
          '50',
          '10',
          '100'
        ],
        correctAnswer: '99',
        explanation: 'Matthew 18:12 says, “If a man has a hundred sheep, and one of them has gone astray, does he not leave the ninety-nine on the mountains and go in search of the one that went astray?”'
      },
      {
        id: 'matt18-q4',
        question: 'How many times did Jesus say to forgive someone who sins against you?',
        options: [
          'Seven times',
          'Seventy times seven',
          'Three times',
          'As many times as they ask'
        ],
        correctAnswer: 'Seventy times seven',
        explanation: 'In Matthew 18:22, Jesus tells Peter, “I do not say to you seven times, but seventy-seven times” (or seventy times seven, depending on translation), emphasizing limitless forgiveness.'
      },
      {
        id: 'matt18-q5',
        question: 'In the parable of the unforgiving servant, what happened to the servant who wouldn’t forgive a smaller debt?',
        options: [
          'He was praised for his justice',
          'He was handed over to the jailers until he paid his debt',
          'He was given more time to pay',
          'He was forgiven again'
        ],
        correctAnswer: 'He was handed over to the jailers until he paid his debt',
        explanation: 'Matthew 18:34-35 says the master, angered by the servant’s lack of mercy, “delivered him to the jailers until he should pay all his debt,” illustrating the need to forgive as we are forgiven.'
      }
    ],
    key_verse: 'Matthew 18:20',
    key_verse_text: 'For where two or three are gathered in my name, there am I among them.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-19',
    bookId: 'matthew',
    chapter: 19,
    title: 'Teachings on Marriage and the Rich Young Man',
    questions: [
      {
        id: 'matt19-q1',
        question: 'What did Jesus say about divorce?',
        options: [
          'It’s allowed for any reason',
          'It was not God’s intention from the beginning, except for sexual immorality',
          'It’s never permissible',
          'It’s a matter of personal choice'
        ],
        correctAnswer: 'It was not God’s intention from the beginning, except for sexual immorality',
        explanation: 'In Matthew 19:8-9, Jesus says, “Because of your hardness of heart Moses allowed you to divorce your wives, but from the beginning it was not so. And I say to you: whoever divorces his wife, except for sexual immorality, and marries another, commits adultery.”'
      },
      {
        id: 'matt19-q2',
        question: 'Who did Jesus say the kingdom of heaven belongs to?',
        options: [
          'Those who keep the law perfectly',
          'Those who are like little children',
          'The rich and powerful',
          'The religious leaders'
        ],
        correctAnswer: 'Those who are like little children',
        explanation: 'Matthew 19:14 states, “But Jesus said, ‘Let the little children come to me and do not hinder them, for to such belongs the kingdom of heaven.’”'
      },
      {
        id: 'matt19-q3',
        question: 'What did the rich young man ask Jesus?',
        options: [
          'How can I become a disciple?',
          'What good deed must I do to have eternal life?',
          'Why do you call yourself the Son of God?',
          'How can I avoid taxes?'
        ],
        correctAnswer: 'What good deed must I do to have eternal life?',
        explanation: 'In Matthew 19:16, the young man asks, “Teacher, what good deed must I do to have eternal life?”'
      },
      {
        id: 'matt19-q4',
        question: 'What did Jesus tell the rich young man to do to be perfect?',
        options: [
          'Keep the commandments',
          'Sell all he had, give to the poor, and follow Him',
          'Pray daily and fast',
          'Build a temple in His name'
        ],
        correctAnswer: 'Sell all he had, give to the poor, and follow Him',
        explanation: 'Matthew 19:21 says, “Jesus said to him, ‘If you would be perfect, go, sell what you possess and give to the poor, and you will have treasure in heaven; and come, follow me.’”'
      },
      {
        id: 'matt19-q5',
        question: 'What did Jesus say about the difficulty of a rich person entering the kingdom of God?',
        options: [
          'It’s easier than for a poor person',
          'It’s impossible without God’s help',
          'It’s easier for a camel to go through the eye of a needle',
          'It’s only possible if they tithe'
        ],
        correctAnswer: 'It’s easier for a camel to go through the eye of a needle',
        explanation: 'In Matthew 19:24, Jesus says, “Again I tell you, it is easier for a camel to go through the eye of a needle than for a rich person to enter the kingdom of God.”'
      }
    ],
    key_verse: 'Matthew 19:26',
    key_verse_text: 'But Jesus looked at them and said, “With man this is impossible, but with God all things are possible.”',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-20',
    bookId: 'matthew',
    chapter: 20,
    title: 'Parable of the Workers and Jesus Predicts His Death Again',
    questions: [
      {
        id: 'matt20-q1',
        question: 'In the parable of the workers, how much did the landowner pay all the workers?',
        options: [
          'A denarius each',
          'Based on hours worked',
          'Ten denarii each',
          'Half a denarius each'
        ],
        correctAnswer: 'A denarius each',
        explanation: 'Matthew 20:9-10 shows that all workers, whether hired early or late, received a denarius, illustrating God’s equal grace.'
      },
      {
        id: 'matt20-q2',
        question: 'What did the workers hired first complain about?',
        options: [
          'The heat of the day',
          'The landowner’s harshness',
          'Receiving the same pay as those who worked less',
          'Not getting food'
        ],
        correctAnswer: 'Receiving the same pay as those who worked less',
        explanation: 'In Matthew 20:11-12, they grumbled, “These last worked only one hour, and you have made them equal to us who have borne the burden of the day and the scorching heat.”'
      },
      {
        id: 'matt20-q3',
        question: 'What did Jesus say about the first and the last in the kingdom?',
        options: [
          'The first will always be first',
          'The last will be first, and the first last',
          'The last will serve the first',
          'The first will judge the last'
        ],
        correctAnswer: 'The last will be first, and the first last',
        explanation: 'Matthew 20:16 states, “So the last will be first, and the first last,” emphasizing humility and God’s reversal of human expectations.'
      },
      {
        id: 'matt20-q4',
        question: 'What did Jesus predict would happen to Him in Jerusalem this time?',
        options: [
          'He would be welcomed as king',
          'He would be delivered to Gentiles, mocked, flogged, and crucified, then rise',
          'He would perform more miracles',
          'He would ascend to heaven'
        ],
        correctAnswer: 'He would be delivered to Gentiles, mocked, flogged, and crucified, then rise',
        explanation: 'In Matthew 20:18-19, Jesus says, “The Son of Man will be delivered over to the chief priests and scribes… and delivered over to the Gentiles to be mocked and flogged and crucified, and he will be raised on the third day.”'
      },
      {
        id: 'matt20-q5',
        question: 'What did Jesus heal the two blind men by doing?',
        options: [
          'Spitting on their eyes',
          'Touching their eyes',
          'Praying over them',
          'Telling them to wash in a pool'
        ],
        correctAnswer: 'Touching their eyes',
        explanation: 'Matthew 20:34 says, “And Jesus in pity touched their eyes, and immediately they recovered their sight and followed him.”'
      }
    ],
    key_verse: 'Matthew 20:28',
    key_verse_text: 'Even as the Son of Man came not to be served but to serve, and to give his life as a ransom for many.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-21',
    bookId: 'matthew',
    chapter: 21,
    title: 'Triumphal Entry and Cleansing the Temple',
    questions: [
      {
        id: 'matt21-q1',
        question: 'What did Jesus ride into Jerusalem on?',
        options: [
          'A horse',
          'A donkey and a colt',
          'A camel',
          'A chariot'
        ],
        correctAnswer: 'A donkey and a colt',
        explanation: 'Matthew 21:5-7 describes Jesus riding a donkey and its colt, fulfilling Zechariah 9:9: “Behold, your king is coming to you… mounted on a donkey, and on a colt, the foal of a donkey.”'
      },
      {
        id: 'matt21-q2',
        question: 'What did the crowd shout as Jesus entered Jerusalem?',
        options: [
          '“Blessed is the king of Israel!”',
          '“Hosanna to the Son of David!”',
          '“Glory to God in the highest!”',
          '“Peace be to Jerusalem!”'
        ],
        correctAnswer: '“Hosanna to the Son of David!”',
        explanation: 'Matthew 21:9 records, “Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest!”'
      },
      {
        id: 'matt21-q3',
        question: 'What did Jesus do in the temple after entering Jerusalem?',
        options: [
          'He taught a parable',
          'He drove out those buying and selling',
          'He healed the sick',
          'He prayed with the priests'
        ],
        correctAnswer: 'He drove out those buying and selling',
        explanation: 'Matthew 21:12 says, “And Jesus entered the temple and drove out all who sold and bought in the temple, and he overturned the tables of the money-changers and the seats of those who sold pigeons.”'
      },
      {
        id: 'matt21-q4',
        question: 'What did Jesus say the temple should be called?',
        options: [
          'A house of prayer',
          'A den of robbers',
          'A place of sacrifice',
          'A holy sanctuary'
        ],
        correctAnswer: 'A house of prayer',
        explanation: 'In Matthew 21:13, Jesus quotes Isaiah 56:7, “My house shall be called a house of prayer,” contrasting it with “you make it a den of robbers.”'
      },
      {
        id: 'matt21-q5',
        question: 'What happened to the fig tree Jesus cursed?',
        options: [
          'It bore fruit immediately',
          'It withered at once',
          'It grew taller',
          'It was struck by lightning'
        ],
        correctAnswer: 'It withered at once',
        explanation: 'Matthew 21:19-20 states, “And he said to it, ‘May no fruit ever come from you again!’ And the fig tree withered at once.”'
      }
    ],
    key_verse: 'Matthew 21:9',
    key_verse_text: 'And the crowds that went before him and that followed him were shouting, “Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest!”',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-22',
    bookId: 'matthew',
    chapter: 22,
    title: 'Parable of the Wedding Feast and Questions for Jesus',
    questions: [
      {
        id: 'matt22-q1',
        question: 'In the parable of the wedding feast, why did the king destroy the invited guests?',
        options: [
          'They arrived late',
          'They refused to come and killed his servants',
          'They wore the wrong clothes',
          'They brought no gifts'
        ],
        correctAnswer: 'They refused to come and killed his servants',
        explanation: 'Matthew 22:5-7 says the invited guests made excuses or killed the king’s servants, so “the king was angry, and he sent his troops and destroyed those murderers and burned their city.”'
      },
      {
        id: 'matt22-q2',
        question: 'What happened to the man without a wedding garment at the feast?',
        options: [
          'He was welcomed anyway',
          'He was cast into outer darkness',
          'He was given a new garment',
          'He was asked to leave politely'
        ],
        correctAnswer: 'He was cast into outer darkness',
        explanation: 'Matthew 22:13 states, “Then the king said to the attendants, ‘Bind him hand and foot and cast him into the outer darkness. In that place there will be weeping and gnashing of teeth.’”'
      },
      {
        id: 'matt22-q3',
        question: 'What did the Pharisees ask Jesus about paying taxes to Caesar?',
        options: [
          'Is it lawful to pay taxes to Caesar, or not?',
          'Should we refuse to pay taxes?',
          'How much should we pay Caesar?',
          'Why does Caesar demand taxes?'
        ],
        correctAnswer: 'Is it lawful to pay taxes to Caesar, or not?',
        explanation: 'In Matthew 22:17, they ask, “Tell us, then, what you think. Is it lawful to pay taxes to Caesar, or not?” to trap Him.'
      },
      {
        id: 'matt22-q4',
        question: 'What was Jesus’ response to the tax question?',
        options: [
          'Pay nothing to Caesar',
          'Give to Caesar what is Caesar’s, and to God what is God’s',
          'Taxes are unjust',
          'Only pay what you can afford'
        ],
        correctAnswer: 'Give to Caesar what is Caesar’s, and to God what is God’s',
        explanation: 'Matthew 22:21 records, “Then he said to them, ‘Therefore render to Caesar the things that are Caesar’s, and to God the things that are God’s.’”'
      },
      {
        id: 'matt22-q5',
        question: 'What did Jesus say is the greatest commandment?',
        options: [
          'Honor your father and mother',
          'Love the Lord your God with all your heart, soul, and mind',
          'Do not murder',
          'Keep the Sabbath holy'
        ],
        correctAnswer: 'Love the Lord your God with all your heart, soul, and mind',
        explanation: 'In Matthew 22:37-38, Jesus says, “You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment.”'
      }
    ],
    key_verse: 'Matthew 22:37-38',
    key_verse_text: 'And he said to him, “You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment.”',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-23',
    bookId: 'matthew',
    chapter: 23,
    title: 'Woe to the Scribes and Pharisees',
    questions: [
      {
        id: 'matt23-q1',
        question: 'What did Jesus say the scribes and Pharisees sat on?',
        options: [
          'The throne of David',
          'Moses’ seat',
          'The council of elders',
          'The high priest’s chair'
        ],
        correctAnswer: 'Moses’ seat',
        explanation: 'Matthew 23:2 says, “The scribes and the Pharisees sit on Moses’ seat,” indicating their teaching authority.'
      },
      {
        id: 'matt23-q2',
        question: 'What did Jesus criticize the Pharisees for doing with their burdens?',
        options: [
          'Making them too light',
          'Putting heavy burdens on people without helping',
          'Ignoring burdens entirely',
          'Sharing burdens equally'
        ],
        correctAnswer: 'Putting heavy burdens on people without helping',
        explanation: 'Matthew 23:4 states, “They tie up heavy burdens, hard to bear, and lay them on people’s shoulders, but they themselves are not willing to move them with their finger.”'
      },
      {
        id: 'matt23-q3',
        question: 'What did Jesus call the Pharisees that means pretenders?',
        options: [
          'Liars',
          'Hypocrites',
          'Fools',
          'Deceivers'
        ],
        correctAnswer: 'Hypocrites',
        explanation: 'Throughout Matthew 23 (e.g., verses 13, 15, 23), Jesus repeatedly says, “Woe to you, scribes and Pharisees, hypocrites!” for their outward righteousness but inward corruption.'
      },
      {
        id: 'matt23-q4',
        question: 'What did Jesus say the Pharisees neglected while focusing on tithing spices?',
        options: [
          'Justice, mercy, and faithfulness',
          'Prayer and fasting',
          'Sacrifices and offerings',
          'Teaching the law'
        ],
        correctAnswer: 'Justice, mercy, and faithfulness',
        explanation: 'Matthew 23:23 says, “Woe to you, scribes and Pharisees, hypocrites! For you tithe mint and dill and cumin, and have neglected the weightier matters of the law: justice and mercy and faithfulness.”'
      },
      {
        id: 'matt23-q5',
        question: 'What did Jesus predict about Jerusalem at the end of the chapter?',
        options: [
          'It would prosper forever',
          'Its house would be left desolate until they blessed Him',
          'It would be rebuilt in three days',
          'It would become the eternal capital'
        ],
        correctAnswer: 'Its house would be left desolate until they blessed Him',
        explanation: 'Matthew 23:38-39 states, “See, your house is left to you desolate. For I tell you, you will not see me again until you say, ‘Blessed is he who comes in the name of the Lord.’”'
      }
    ],
    key_verse: 'Matthew 23:12',
    key_verse_text: 'Whoever exalts himself will be humbled, and whoever humbles himself will be exalted.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-24',
    bookId: 'matthew',
    chapter: 24,
    title: 'Signs of the End and the Second Coming',
    questions: [
      {
        id: 'matt24-q1',
        question: 'What did the disciples ask Jesus about on the Mount of Olives?',
        options: [
          'How to rebuild the temple',
          'The sign of His coming and the end of the age',
          'When He would become king',
          'How to defeat the Romans'
        ],
        correctAnswer: 'The sign of His coming and the end of the age',
        explanation: 'Matthew 24:3 says, “Tell us, when will these things be, and what will be the sign of your coming and of the end of the age?”'
      },
      {
        id: 'matt24-q2',
        question: 'What did Jesus warn would deceive many people?',
        options: [
          'False prophets and false christs',
          'Roman rulers',
          'Wealth and riches',
          'The Pharisees’ teachings'
        ],
        correctAnswer: 'False prophets and false christs',
        explanation: 'Matthew 24:5 and 24:24 warn, “For many will come in my name, saying, ‘I am the Christ,’ and they will lead many astray,” and “false christs and false prophets will arise.”'
      },
      {
        id: 'matt24-q3',
        question: 'What event did Jesus say must happen before the end comes?',
        options: [
          'The temple must be rebuilt',
          'The gospel must be preached to all nations',
          'The Romans must be defeated',
          'The stars must fall from heaven'
        ],
        correctAnswer: 'The gospel must be preached to all nations',
        explanation: 'Matthew 24:14 states, “And this gospel of the kingdom will be proclaimed throughout the whole world as a testimony to all nations, and then the end will come.”'
      },
      {
        id: 'matt24-q4',
        question: 'What did Jesus call the “abomination of desolation”?',
        options: [
          'A sign spoken of by Daniel the prophet',
          'The destruction of Jerusalem',
          'The betrayal of Judas',
          'The fall of the temple'
        ],
        correctAnswer: 'A sign spoken of by Daniel the prophet',
        explanation: 'Matthew 24:15 says, “So when you see the abomination of desolation spoken of by the prophet Daniel, standing in the holy place…” referencing Daniel 9:27.'
      },
      {
        id: 'matt24-q5',
        question: 'How did Jesus describe His return?',
        options: [
          'As a thief in the night',
          'Like lightning from the east to the west',
          'With a loud trumpet call',
          'All of the above'
        ],
        correctAnswer: 'Like lightning from the east to the west',
        explanation: 'Matthew 24:27 states, “For as the lightning comes from the east and shines as far as the west, so will be the coming of the Son of Man.” (Other descriptions appear elsewhere, but this is specific to verse 27.)'
      }
    ],
    key_verse: 'Matthew 24:42',
    key_verse_text: 'Therefore, stay awake, for you do not know on what day your Lord is coming.',
    memory_challenge: true,
    difficulty: 'hard',
    points: 20
  },
  {
    id: 'matthew-25',
    bookId: 'matthew',
    chapter: 25,
    title: 'Parables of the End Times',
    questions: [
      {
        id: 'matt25-q1',
        question: 'In the parable of the ten virgins, what did the foolish virgins forget?',
        options: [
          'Their lamps',
          'Oil for their lamps',
          'The time of the wedding',
          'Their invitations'
        ],
        correctAnswer: 'Oil for their lamps',
        explanation: 'Matthew 25:3-4 says, “For when the foolish took their lamps, they took no oil with them, but the wise took flasks of oil with their lamps.”'
      },
      {
        id: 'matt25-q2',
        question: 'What happened to the foolish virgins when the bridegroom arrived?',
        options: [
          'They were let in late',
          'They were shut out of the wedding feast',
          'They were given more oil',
          'They were forgiven'
        ],
        correctAnswer: 'They were shut out of the wedding feast',
        explanation: 'Matthew 25:10-12 states, “And the door was shut… and he answered, ‘Truly, I say to you, I do not know you.’”'
      },
      {
        id: 'matt25-q3',
        question: 'In the parable of the talents, how many talents did the master give to the first servant?',
        options: [
          'One talent',
          'Two talents',
          'Five talents',
          'Ten talents'
        ],
        correctAnswer: 'Five talents',
        explanation: 'Matthew 25:15 says, “To one he gave five talents, to another two, to another one, to each according to his ability.”'
      },
      {
        id: 'matt25-q4',
        question: 'What did the servant with one talent do with it?',
        options: [
          'He doubled it',
          'He hid it in the ground',
          'He gave it away',
          'He lost it'
        ],
        correctAnswer: 'He hid it in the ground',
        explanation: 'Matthew 25:18 states, “But he who had received the one talent went and dug in the ground and hid his master’s money.”'
      },
      {
        id: 'matt25-q5',
        question: 'In the judgment of the nations, what did Jesus say to those who fed the hungry and clothed the naked?',
        options: [
          'You did it to me',
          'You earned your reward',
          'You are forgiven',
          'You will be kings'
        ],
        correctAnswer: 'You did it to me',
        explanation: 'Matthew 25:40 says, “And the King will answer them, ‘Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.’”'
      }
    ],
    key_verse: 'Matthew 25:40',
    key_verse_text: 'And the King will answer them, “Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.”',
    memory_challenge: true,
    difficulty: 'hard',
    points: 20
  },
  {
    id: 'matthew-26',
    bookId: 'matthew',
    chapter: 26,
    title: 'The Last Supper and Jesus’ Arrest',
    questions: [
      {
        id: 'matt26-q1',
        question: 'What did the woman pour on Jesus’ head at Bethany?',
        options: [
          'Water',
          'Wine',
          'Expensive ointment',
          'Olive oil'
        ],
        correctAnswer: 'Expensive ointment',
        explanation: 'Matthew 26:7 says, “a woman came up to him with an alabaster flask of very expensive ointment, and she poured it on his head as he reclined at table.”'
      },
      {
        id: 'matt26-q2',
        question: 'Who agreed to betray Jesus for thirty pieces of silver?',
        options: [
          'Peter',
          'Judas Iscariot',
          'Thomas',
          'John'
        ],
        correctAnswer: 'Judas Iscariot',
        explanation: 'Matthew 26:14-15 states, “Then one of the twelve, whose name was Judas Iscariot, went to the chief priests and said, ‘What will you give me if I deliver him over to you?’ And they paid him thirty pieces of silver.”'
      },
      {
        id: 'matt26-q3',
        question: 'What did Jesus say the bread represented at the Last Supper?',
        options: [
          'His body',
          'The kingdom',
          'The law',
          'The harvest'
        ],
        correctAnswer: 'His body',
        explanation: 'Matthew 26:26 says, “Jesus took bread, and after blessing it broke it and gave it to the disciples, and said, ‘Take, eat; this is my body.’”'
      },
      {
        id: 'matt26-q4',
        question: 'What did Jesus predict Peter would do before the rooster crowed?',
        options: [
          'Betray Him',
          'Deny Him three times',
          'Flee from the garden',
          'Fall asleep'
        ],
        correctAnswer: 'Deny Him three times',
        explanation: 'Matthew 26:34 states, “Jesus said to him, ‘Truly, I tell you, this very night, before the rooster crows, you will deny me three times.’”'
      },
      {
        id: 'matt26-q5',
        question: 'Where was Jesus arrested?',
        options: [
          'The temple',
          'Gethsemane',
          'Bethany',
          'Jerusalem’s gates'
        ],
        correctAnswer: 'Gethsemane',
        explanation: 'Matthew 26:36 and 47-50 describe Jesus praying in Gethsemane, where Judas led a crowd to arrest Him.'
      }
    ],
    key_verse: 'Matthew 26:28',
    key_verse_text: 'For this is my blood of the covenant, which is poured out for many for the forgiveness of sins.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-27',
    bookId: 'matthew',
    chapter: 27,
    title: 'Jesus’ Trial and Crucifixion',
    questions: [
      {
        id: 'matt27-q1',
        question: 'What did Judas do with the thirty pieces of silver after betraying Jesus?',
        options: [
          'Kept them',
          'Threw them into the temple and hanged himself',
          'Gave them to the poor',
          'Used them to buy land'
        ],
        correctAnswer: 'Threw them into the temple and hanged himself',
        explanation: 'Matthew 27:5 says, “And throwing down the pieces of silver into the temple, he departed, and he went and hanged himself.”'
      },
      {
        id: 'matt27-q2',
        question: 'Who did Pilate release instead of Jesus?',
        options: [
          'Barabbas',
          'Barnabas',
          'Barrabas',
          'Bartholomew'
        ],
        correctAnswer: 'Barabbas',
        explanation: 'Matthew 27:21-26 records the crowd choosing Barabbas, a notorious prisoner, to be released instead of Jesus.'
      },
      {
        id: 'matt27-q3',
        question: 'What did the soldiers place on Jesus’ head before the crucifixion?',
        options: [
          'A golden crown',
          'A crown of thorns',
          'A cloth veil',
          'A helmet'
        ],
        correctAnswer: 'A crown of thorns',
        explanation: 'Matthew 27:29 says, “And twisting together a crown of thorns, they put it on his head and put a reed in his right hand.”'
      },
      {
        id: 'matt27-q4',
        question: 'What did Jesus cry out on the cross before He died?',
        options: [
          '“Father, forgive them”',
          '“It is finished”',
          '“My God, my God, why have you forsaken me?”',
          '“Into your hands I commit my spirit”'
        ],
        correctAnswer: '“My God, my God, why have you forsaken me?”',
        explanation: 'Matthew 27:46 records, “And about the ninth hour Jesus cried out with a loud voice, saying, ‘Eli, Eli, lema sabachthani?’ that is, ‘My God, my God, why have you forsaken me?’”'
      },
      {
        id: 'matt27-q5',
        question: 'What unusual events happened when Jesus died?',
        options: [
          'The sun rose early',
          'The curtain of the temple tore, the earth shook, and tombs opened',
          'A star appeared in the sky',
          'The Romans surrendered'
        ],
        correctAnswer: 'The curtain of the temple tore, the earth shook, and tombs opened',
        explanation: 'Matthew 27:51-52 states, “And behold, the curtain of the temple was torn in two, from top to bottom. And the earth shook, and the rocks were split. The tombs also were opened.”'
      }
    ],
    key_verse: 'Matthew 27:54',
    key_verse_text: 'When the centurion and those who were with him, keeping watch over Jesus, saw the earthquake and what took place, they were filled with awe and said, “Truly this was the Son of God!”',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'matthew-28',
    bookId: 'matthew',
    chapter: 28,
    title: 'The Resurrection and Great Commission',
    questions: [
      {
        id: 'matt28-q1',
        question: 'Who discovered the empty tomb first?',
        options: [
          'Peter and John',
          'Mary Magdalene and the other Mary',
          'The Roman guards',
          'The disciples as a group'
        ],
        correctAnswer: 'Mary Magdalene and the other Mary',
        explanation: 'Matthew 28:1 says, “Now after the Sabbath, toward the dawn of the first day of the week, Mary Magdalene and the other Mary went to see the tomb.”'
      },
      {
        id: 'matt28-q2',
        question: 'What did the angel tell the women at the tomb?',
        options: [
          '“He is not here, for he has risen”',
          '“Go tell the guards”',
          '“The tomb is sealed”',
          '“Wait here for Him”'
        ],
        correctAnswer: '“He is not here, for he has risen”',
        explanation: 'Matthew 28:6 records the angel saying, “He is not here, for he has risen, as he said. Come, see the place where he lay.”'
      },
      {
        id: 'matt28-q3',
        question: 'What did the guards do after the angel appeared?',
        options: [
          'They ran to tell Pilate',
          'They trembled and became like dead men',
          'They sealed the tomb again',
          'They attacked the angel'
        ],
        correctAnswer: 'They trembled and became like dead men',
        explanation: 'Matthew 28:4 says, “And for fear of him the guards trembled and became like dead men.”'
      },
      {
        id: 'matt28-q4',
        question: 'Where did Jesus tell the disciples to meet Him after His resurrection?',
        options: [
          'Jerusalem',
          'Bethlehem',
          'Galilee',
          'Nazareth'
        ],
        correctAnswer: 'Galilee',
        explanation: 'Matthew 28:7 and 10 have the angel and Jesus saying, “Go quickly and tell his disciples that he has risen from the dead, and behold, he is going before you to Galilee; there you will see him.”'
      },
      {
        id: 'matt28-q5',
        question: 'What did Jesus command in the Great Commission?',
        options: [
          'Build a church in every city',
          'Make disciples of all nations, baptizing and teaching them',
          'Wait for His return',
          'Preach only to the Jews'
        ],
        correctAnswer: 'Make disciples of all nations, baptizing and teaching them',
        explanation: 'Matthew 28:19-20 says, “Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.”'
      }
    ],
    key_verse: 'Matthew 28:19-20',
    key_verse_text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  }
];
