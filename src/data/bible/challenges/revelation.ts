import { ChapterChallenge } from '../types';

export const revelationChallenges: ChapterChallenge[] = [
  {
    id: 'revelation-1',
    bookId: 'revelation',
    chapter: 1,
    title: 'The Revelation of Jesus Christ',
    questions: [
      {
        id: 'rev1-q1',
        question: 'Who received this revelation from God to show His servants?',
        options: [
          'Paul',
          'John',
          'Peter',
          'James'
        ],
        correctAnswer: 'John',
        explanation: 'Revelation 1:1 says, “The revelation of Jesus Christ, which God gave him… and he made it known… to his servant John…”'
      },
      {
        id: 'rev1-q2',
        question: 'Where was John when he received this vision?',
        options: [
          'Jerusalem',
          'The island of Patmos',
          'Rome',
          'Ephesus'
        ],
        correctAnswer: 'The island of Patmos',
        explanation: 'Revelation 1:9 states, “I, John… was on the island called Patmos on account of the word of God…”'
      },
      {
        id: 'rev1-q3',
        question: 'How does Jesus describe Himself to John?',
        options: [
          'The Alpha and the Omega',
          'The King of Israel',
          'The Son of David',
          'The Prophet'
        ],
        correctAnswer: 'The Alpha and the Omega',
        explanation: 'Revelation 1:8 says, “‘I am the Alpha and the Omega,’ says the Lord God…” and 1:17 echoes this with Jesus saying, “I am the first and the last…”'
      },
      {
        id: 'rev1-q4',
        question: 'What did John see among the seven golden lampstands?',
        options: [
          'Seven angels',
          'One like a son of man',
          'A throne',
          'A scroll'
        ],
        correctAnswer: 'One like a son of man',
        explanation: 'Revelation 1:12-13 states, “…I saw seven golden lampstands, and in the midst of the lampstands one like a son of man…”'
      },
      {
        id: 'rev1-q5',
        question: 'What do the seven stars in Jesus’ hand represent?',
        options: [
          'The seven churches',
          'The angels of the seven churches',
          'The seven seals',
          'The seven plagues'
        ],
        correctAnswer: 'The angels of the seven churches',
        explanation: 'Revelation 1:20 says, “…the seven stars are the angels of the seven churches…”'
      }
    ],
    key_verse: 'Revelation 1:8',
    key_verse_text: "‘I am the Alpha and the Omega,’ says the Lord God, ‘who is and who was and who is to come, the Almighty.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-2',
    bookId: 'revelation',
    chapter: 2,
    title: 'Letters to Four Churches',
    questions: [
      {
        id: 'rev2-q1',
        question: 'What does Jesus commend the church in Ephesus for?',
        options: [
          'Their wealth',
          'Their patient endurance and testing false apostles',
          'Their silence',
          'Their size'
        ],
        correctAnswer: 'Their patient endurance and testing false apostles',
        explanation: 'Revelation 2:2-3 says, “…I know your works, your toil and your patient endurance… you have tested those who call themselves apostles and are not…”'
      },
      {
        id: 'rev2-q2',
        question: 'What does Jesus criticize the Ephesian church for abandoning?',
        options: [
          'The law',
          'Their first love',
          'Their wealth',
          'Their strength'
        ],
        correctAnswer: 'Their first love',
        explanation: 'Revelation 2:4 states, “But I have this against you, that you have abandoned the love you had at first.”'
      },
      {
        id: 'rev2-q3',
        question: 'What does Jesus promise the faithful in Smyrna who overcome?',
        options: [
          'A crown of life',
          'A new law',
          'Wealth',
          'A throne'
        ],
        correctAnswer: 'A crown of life',
        explanation: 'Revelation 2:10 says, “…Be faithful unto death, and I will give you the crown of life.”'
      },
      {
        id: 'rev2-q4',
        question: 'What does Jesus accuse some in Pergamum of holding to?',
        options: [
          'The teaching of Balaam',
          'The law of Moses',
          'The gospel',
          'The truth'
        ],
        correctAnswer: 'The teaching of Balaam',
        explanation: 'Revelation 2:14 states, “…you have some there who hold the teaching of Balaam, who taught Balak to put a stumbling block before the sons of Israel…”'
      },
      {
        id: 'rev2-q5',
        question: 'Who does Jesus threaten to make war against in Thyatira?',
        options: [
          'The faithful',
          'Jezebel and her followers',
          'The elders',
          'The poor'
        ],
        correctAnswer: 'Jezebel and her followers',
        explanation: 'Revelation 2:20-23 says, “…you tolerate that woman Jezebel… I will throw her onto a sickbed, and those who commit adultery with her…”'
      }
    ],
    key_verse: 'Revelation 2:7',
    key_verse_text: '"He who has an ear, let him hear what the Spirit says to the churches. To the one who conquers I will grant to eat of the tree of life, which is in the paradise of God."',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-3',
    bookId: 'revelation',
    chapter: 3,
    title: 'Letters to Three Churches',
    questions: [
      {
        id: 'rev3-q1',
        question: 'What does Jesus say about the church in Sardis’ reputation?',
        options: [
          'They are alive but dead',
          'They are wealthy and strong',
          'They are faithful and true',
          'They are silent and hidden'
        ],
        correctAnswer: 'They are alive but dead',
        explanation: 'Revelation 3:1 says, “…I know your works. You have the reputation of being alive, but you are dead.”'
      },
      {
        id: 'rev3-q2',
        question: 'What does Jesus promise those in Sardis who conquer?',
        options: [
          'Wealth',
          'White garments and name in the book of life',
          'Power',
          'A new law'
        ],
        correctAnswer: 'White garments and name in the book of life',
        explanation: 'Revelation 3:5 states, “The one who conquers will be clothed thus in white garments, and I will never blot his name out of the book of life…”'
      },
      {
        id: 'rev3-q3',
        question: 'What does Jesus commend the church in Philadelphia for?',
        options: [
          'Their wealth',
          'Keeping His word and not denying His name',
          'Their size',
          'Their silence'
        ],
        correctAnswer: 'Keeping His word and not denying His name',
        explanation: 'Revelation 3:8 says, “…you have kept my word and have not denied my name.”'
      },
      {
        id: 'rev3-q4',
        question: 'What does Jesus say about the Laodiceans’ self-perception?',
        options: [
          'They are rich but actually poor, blind, naked',
          'They are poor but actually rich',
          'They are strong and wise',
          'They are faithful and true'
        ],
        correctAnswer: 'They are rich but actually poor, blind, naked',
        explanation: 'Revelation 3:17 states, “For you say, I am rich… and do not know that you are wretched, pitiable, poor, blind, and naked.”'
      },
      {
        id: 'rev3-q5',
        question: 'What does Jesus stand at and knock, offering fellowship?',
        options: [
          'The gate',
          'The door',
          'The throne',
          'The temple'
        ],
        correctAnswer: 'The door',
        explanation: 'Revelation 3:20 says, “Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him…”'
      }
    ],
    key_verse: 'Revelation 3:20',
    key_verse_text: '"Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me."',
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-4',
    bookId: 'revelation',
    chapter: 4,
    title: 'The Throne in Heaven',
    questions: [
      {
        id: 'rev4-q1',
        question: 'What did John see after being called up in the Spirit?',
        options: [
          'A lamb',
          'A throne in heaven',
          'Seven churches',
          'A scroll'
        ],
        correctAnswer: 'A throne in heaven',
        explanation: 'Revelation 4:1-2 says, “…I looked, and behold, a door standing open in heaven… I saw a throne in heaven…”'
      },
      {
        id: 'rev4-q2',
        question: 'Who sat on the throne, surrounded by a rainbow?',
        options: [
          'An angel',
          'One with the appearance of jasper and carnelian',
          'John',
          'The Lamb'
        ],
        correctAnswer: 'One with the appearance of jasper and carnelian',
        explanation: 'Revelation 4:3 states, “And he who sat there had the appearance of jasper and carnelian, and around the throne was a rainbow…”'
      },
      {
        id: 'rev4-q3',
        question: 'How many elders surrounded the throne?',
        options: [
          'Seven',
          'Twelve',
          'Twenty-four',
          'Four'
        ],
        correctAnswer: 'Twenty-four',
        explanation: 'Revelation 4:4 says, “Around the throne were twenty-four thrones, and seated on the thrones were twenty-four elders…”'
      },
      {
        id: 'rev4-q4',
        question: 'What creatures were around the throne, full of eyes?',
        options: [
          'Four living creatures',
          'Seven angels',
          'Twelve beasts',
          'Twenty-four elders'
        ],
        correctAnswer: 'Four living creatures',
        explanation: 'Revelation 4:6-7 states, “…around the throne, on each side of the throne, are four living creatures, full of eyes…”'
      },
      {
        id: 'rev4-q5',
        question: 'What do the living creatures never cease to say?',
        options: [
          '“Worthy is the Lamb”',
          '“Holy, holy, holy, is the Lord God Almighty”',
          '“Come and see”',
          '“Glory to the elders”'
        ],
        correctAnswer: '“Holy, holy, holy, is the Lord God Almighty”',
        explanation: 'Revelation 4:8 says, “…day and night they never cease to say, ‘Holy, holy, holy, is the Lord God Almighty…’”'
      }
    ],
    key_verse: 'Revelation 4:8',
    key_verse_text: "And the four living creatures… never cease to say, ‘Holy, holy, holy, is the Lord God Almighty, who was and is and is to come!’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-5',
    bookId: 'revelation',
    chapter: 5,
    title: 'The Lamb Takes the Scroll',
    questions: [
      {
        id: 'rev5-q1',
        question: 'What did John see in the right hand of Him who sat on the throne?',
        options: [
          'A sword',
          'A scroll with seven seals',
          'A crown',
          'A lampstand'
        ],
        correctAnswer: 'A scroll with seven seals',
        explanation: 'Revelation 5:1 says, “Then I saw in the right hand of him who was seated on the throne a scroll written within and on the back, sealed with seven seals.”'
      },
      {
        id: 'rev5-q2',
        question: 'Why did John weep at first?',
        options: [
          'No one was worthy to open the scroll',
          'The throne was empty',
          'The elders fell silent',
          'The seals were broken'
        ],
        correctAnswer: 'No one was worthy to open the scroll',
        explanation: 'Revelation 5:4 states, “And I began to weep loudly because no one was found worthy to open the scroll or to look into it.”'
      },
      {
        id: 'rev5-q3',
        question: 'Who was worthy to take and open the scroll?',
        options: [
          'The Lion of Judah, the Lamb',
          'One of the elders',
          'An angel',
          'John'
        ],
        correctAnswer: 'The Lion of Judah, the Lamb',
        explanation: 'Revelation 5:5-6 says, “…the Lion of the tribe of Judah… has conquered… And I saw a Lamb standing, as though it had been slain…”'
      },
      {
        id: 'rev5-q4',
        question: 'What did the four living creatures and elders do when the Lamb took the scroll?',
        options: [
          'Fled in fear',
          'Fell down and worshiped',
          'Sealed the scroll',
          'Sang a new law'
        ],
        correctAnswer: 'Fell down and worshiped',
        explanation: 'Revelation 5:8 states, “And when he had taken the scroll, the four living creatures and the twenty-four elders fell down before the Lamb…”'
      },
      {
        id: 'rev5-q5',
        question: 'What did the Lamb purchase with His blood?',
        options: [
          'Wealth for the elders',
          'People from every tribe, language, people, and nation',
          'A new throne',
          'The seven churches'
        ],
        correctAnswer: 'People from every tribe, language, people, and nation',
        explanation: 'Revelation 5:9 says, “…for you were slain, and by your blood you ransomed people for God from every tribe and language and people and nation…”'
      }
    ],
    key_verse: 'Revelation 5:9',
    key_verse_text: "And they sang a new song, saying, ‘Worthy are you to take the scroll and to open its seals, for you were slain, and by your blood you ransomed people for God from every tribe and language and people and nation…’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-6',
    bookId: 'revelation',
    chapter: 6,
    title: 'The Seven Seals Begin',
    questions: [
      {
        id: 'rev6-q1',
        question: 'Who opened the seals of the scroll?',
        options: [
          'An angel',
          'The Lamb',
          'One of the elders',
          'John'
        ],
        correctAnswer: 'The Lamb',
        explanation: 'Revelation 6:1 says, “Now I watched when the Lamb opened one of the seven seals…”'
      },
      {
        id: 'rev6-q2',
        question: 'What did the first seal reveal?',
        options: [
          'A white horse with a conqueror',
          'A red horse with war',
          'A black horse with famine',
          'A pale horse with death'
        ],
        correctAnswer: 'A white horse with a conqueror',
        explanation: 'Revelation 6:2 states, “…behold, a white horse! And its rider had a bow, and a crown was given to him, and he came out conquering…”'
      },
      {
        id: 'rev6-q3',
        question: 'What did the fourth seal’s rider bring?',
        options: [
          'Peace',
          'Death with Hades following',
          'Wealth',
          'Famine only'
        ],
        correctAnswer: 'Death with Hades following',
        explanation: 'Revelation 6:8 says, “…behold, a pale horse! And its rider’s name was Death, and Hades followed him…”'
      },
      {
        id: 'rev6-q4',
        question: 'What did the souls under the altar cry out for in the fifth seal?',
        options: [
          'Wealth',
          'Vengeance for their blood',
          'A new scroll',
          'Silence'
        ],
        correctAnswer: 'Vengeance for their blood',
        explanation: 'Revelation 6:10 states, “They cried out… ‘O Sovereign Lord… how long before you will judge and avenge our blood…?’”'
      },
      {
        id: 'rev6-q5',
        question: 'What happened when the sixth seal was opened?',
        options: [
          'The sun turned black, moon to blood, stars fell',
          'Seven trumpets sounded',
          'The scroll was read',
          'The Lamb appeared'
        ],
        correctAnswer: 'The sun turned black, moon to blood, stars fell',
        explanation: 'Revelation 6:12-13 says, “…the sun became black… the moon became like blood, and the stars of the sky fell to the earth…”'
      }
    ],
    key_verse: 'Revelation 6:10',
    key_verse_text: "They cried out with a loud voice, ‘O Sovereign Lord, holy and true, how long before you will judge and avenge our blood on those who dwell on the earth?’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-7',
    bookId: 'revelation',
    chapter: 7,
    title: 'The Sealed and the Multitude',
    questions: [
      {
        id: 'rev7-q1',
        question: 'What did the four angels hold back until the servants were sealed?',
        options: [
          'The trumpets',
          'The winds of the earth',
          'The seals',
          'The plagues'
        ],
        correctAnswer: 'The winds of the earth',
        explanation: 'Revelation 7:1 says, “…four angels… holding back the four winds of the earth…”'
      },
      {
        id: 'rev7-q2',
        question: 'How many were sealed from the tribes of Israel?',
        options: [
          'Twelve thousand',
          'One hundred forty-four thousand',
          'Seven thousand',
          'A countless number'
        ],
        correctAnswer: 'One hundred forty-four thousand',
        explanation: 'Revelation 7:4 states, “And I heard the number of the sealed, 144,000, sealed from every tribe of the sons of Israel…”'
      },
      {
        id: 'rev7-q3',
        question: 'Who was the great multitude John saw before the throne?',
        options: [
          'Angels only',
          'Those from every nation, tribe, people, and language',
          'The elders',
          'The sealed of Israel'
        ],
        correctAnswer: 'Those from every nation, tribe, people, and language',
        explanation: 'Revelation 7:9 says, “…a great multitude… from every nation, from all tribes and peoples and languages…”'
      },
      {
        id: 'rev7-q4',
        question: 'What did the multitude wear, washed in the Lamb’s blood?',
        options: [
          'White robes',
          'Golden crowns',
          'Purple garments',
          'Armor'
        ],
        correctAnswer: 'White robes',
        explanation: 'Revelation 7:14 states, “…They have washed their robes and made them white in the blood of the Lamb.”'
      },
      {
        id: 'rev7-q5',
        question: 'What do the multitude do before the throne?',
        options: [
          'Sleep',
          'Worship God day and night',
          'Fight',
          'Wait silently'
        ],
        correctAnswer: 'Worship God day and night',
        explanation: 'Revelation 7:15 says, “Therefore they are before the throne of God, and serve him day and night in his temple…”'
      }
    ],
    key_verse: 'Revelation 7:12',
    key_verse_text: "Saying, ‘Amen! Blessing and glory and wisdom and thanksgiving and honor and power and might be to our God forever and ever! Amen.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-8',
    bookId: 'revelation',
    chapter: 8,
    title: 'The Seven Trumpets Begin',
    questions: [
      {
        id: 'rev8-q1',
        question: 'What happened when the seventh seal was opened?',
        options: [
          'Fire fell',
          'Silence in heaven for half an hour',
          'The scroll was read',
          'The Lamb spoke'
        ],
        correctAnswer: 'Silence in heaven for half an hour',
        explanation: 'Revelation 8:1 says, “When the Lamb opened the seventh seal, there was silence in heaven for about half an hour.”'
      },
      {
        id: 'rev8-q2',
        question: 'What did the seven angels receive to sound?',
        options: [
          'Harps',
          'Seven trumpets',
          'Scrolls',
          'Crowns'
        ],
        correctAnswer: 'Seven trumpets',
        explanation: 'Revelation 8:2 states, “Then I saw the seven angels… and seven trumpets were given to them.”'
      },
      {
        id: 'rev8-q3',
        question: 'What fell to earth when the first trumpet sounded?',
        options: [
          'Hail and fire mixed with blood',
          'A star',
          'Locusts',
          'Darkness'
        ],
        correctAnswer: 'Hail and fire mixed with blood',
        explanation: 'Revelation 8:7 says, “The first angel blew his trumpet, and there followed hail and fire, mixed with blood…”'
      },
      {
        id: 'rev8-q4',
        question: 'What happened to the sea with the second trumpet?',
        options: [
          'It turned to blood, a third died',
          'It dried up',
          'It rose',
          'It froze'
        ],
        correctAnswer: 'It turned to blood, a third died',
        explanation: 'Revelation 8:8-9 states, “…a third of the sea became blood, a third of the living creatures in the sea died…”'
      },
      {
        id: 'rev8-q5',
        question: 'What star fell from heaven with the third trumpet?',
        options: [
          'Wormwood',
          'Abaddon',
          'Apollyon',
          'Lucifer'
        ],
        correctAnswer: 'Wormwood',
        explanation: 'Revelation 8:10-11 says, “…a great star fell from heaven… The name of the star is Wormwood…”'
      }
    ],
    key_verse: 'Revelation 8:1',
    key_verse_text: "When the Lamb opened the seventh seal, there was silence in heaven for about half an hour.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-9',
    bookId: 'revelation',
    chapter: 9,
    title: 'The Fifth and Sixth Trumpets',
    questions: [
      {
        id: 'rev9-q1',
        question: 'What was opened with the fifth trumpet?',
        options: [
          'The bottomless pit',
          'The sea',
          'The heavens',
          'A scroll'
        ],
        correctAnswer: 'The bottomless pit',
        explanation: 'Revelation 9:1-2 says, “…and to him was given the key to the shaft of the bottomless pit. He opened the shaft…”'
      },
      {
        id: 'rev9-q2',
        question: 'What emerged from the smoke of the pit?',
        options: [
          'Angels',
          'Locusts with power like scorpions',
          'Stars',
          'Fire'
        ],
        correctAnswer: 'Locusts with power like scorpions',
        explanation: 'Revelation 9:3 states, “Then from the smoke came locusts on the earth, and they were given power like the power of scorpions…”'
      },
      {
        id: 'rev9-q3',
        question: 'Who was the angel of the bottomless pit called in Hebrew and Greek?',
        options: [
          'Wormwood',
          'Abaddon and Apollyon',
          'Michael',
          'Gabriel'
        ],
        correctAnswer: 'Abaddon and Apollyon',
        explanation: 'Revelation 9:11 says, “They have as king over them the angel of the bottomless pit. His name in Hebrew is Abaddon, and in Greek he is called Apollyon.”'
      },
      {
        id: 'rev9-q4',
        question: 'What did the sixth trumpet release?',
        options: [
          'Four angels bound at the Euphrates',
          'Seven seals',
          'A great star',
          'Locusts'
        ],
        correctAnswer: 'Four angels bound at the Euphrates',
        explanation: 'Revelation 9:14-15 says, “…Release the four angels who are bound at the great river Euphrates…”'
      },
      {
        id: 'rev9-q5',
        question: 'What did the survivors refuse to repent of after the sixth trumpet?',
        options: [
          'Their faith',
          'Idolatry, murders, sorceries, immorality, thefts',
          'Their wealth',
          'Their silence'
        ],
        correctAnswer: 'Idolatry, murders, sorceries, immorality, thefts',
        explanation: 'Revelation 9:20-21 states, “…they did not repent of the works of their hands… murders… sorceries… sexual immorality… thefts.”'
      }
    ],
    key_verse: 'Revelation 9:20',
    key_verse_text: "The rest of mankind, who were not killed by these plagues, did not repent of the works of their hands nor give up worshiping demons and idols…",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-10',
    bookId: 'revelation',
    chapter: 10,
    title: 'The Mighty Angel and Little Scroll',
    questions: [
      {
        id: 'rev10-q1',
        question: 'What did the mighty angel hold in his hand?',
        options: [
          'A sword',
          'A little scroll open',
          'A trumpet',
          'A crown'
        ],
        correctAnswer: 'A little scroll open',
        explanation: 'Revelation 10:2 says, “He had a little scroll open in his hand…”'
      },
      {
        id: 'rev10-q2',
        question: 'What did the angel’s voice sound like with seven thunders?',
        options: [
          'A whisper',
          'A lion’s roar',
          'A harp',
          'A trumpet'
        ],
        correctAnswer: 'A lion’s roar',
        explanation: 'Revelation 10:3 states, “…he called out with a loud voice, like a lion roaring…”'
      },
      {
        id: 'rev10-q3',
        question: 'What was John told to do with the seven thunders’ words?',
        options: [
          'Write them down',
          'Seal them up and not write them',
          'Proclaim them',
          'Sing them'
        ],
        correctAnswer: 'Seal them up and not write them',
        explanation: 'Revelation 10:4 says, “…I was about to write, but I heard a voice from heaven saying, ‘Seal up what the seven thunders have said, and do not write it down.’”'
      },
      {
        id: 'rev10-q4',
        question: 'What did the angel swear would be no more delayed?',
        options: [
          'The mystery of God',
          'The trumpets',
          'The seals',
          'The plagues'
        ],
        correctAnswer: 'The mystery of God',
        explanation: 'Revelation 10:6-7 says, “…there would be no more delay, but… the mystery of God would be fulfilled…”'
      },
      {
        id: 'rev10-q5',
        question: 'What did John do with the little scroll after taking it?',
        options: [
          'Burned it',
          'Ate it, and it was sweet then bitter',
          'Sealed it',
          'Gave it away'
        ],
        correctAnswer: 'Ate it, and it was sweet then bitter',
        explanation: 'Revelation 10:10 states, “And I took the little scroll… and ate it. It was sweet as honey in my mouth, but when I had eaten it my stomach was made bitter.”'
      }
    ],
    key_verse: 'Revelation 10:7',
    key_verse_text: "But in the days of the trumpet call to be sounded by the seventh angel, the mystery of God would be fulfilled, just as he announced to his servants the prophets.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-11',
    bookId: 'revelation',
    chapter: 11,
    title: 'The Two Witnesses and Seventh Trumpet',
    questions: [
      {
        id: 'rev11-q1',
        question: 'What was John given to measure in the vision?',
        options: [
          'The sea',
          'The temple of God, altar, and worshipers',
          'The heavens',
          'The scroll'
        ],
        correctAnswer: 'The temple of God, altar, and worshipers',
        explanation: 'Revelation 11:1 says, “Then I was given a measuring rod… and told, ‘Rise and measure the temple of God and the altar and those who worship there…’”'
      },
      {
        id: 'rev11-q2',
        question: 'How long will the two witnesses prophesy?',
        options: [
          '1,260 days',
          'Seven years',
          'Forty-two months',
          'A thousand years'
        ],
        correctAnswer: '1,260 days',
        explanation: 'Revelation 11:3 states, “And I will grant authority to my two witnesses, and they will prophesy for 1,260 days…”'
      },
      {
        id: 'rev11-q3',
        question: 'What happens to the two witnesses after they finish testifying?',
        options: [
          'They ascend immediately',
          'The beast kills them',
          'They rule the earth',
          'They disappear'
        ],
        correctAnswer: 'The beast kills them',
        explanation: 'Revelation 11:7 says, “And when they have finished their testimony, the beast… will make war on them and conquer them and kill them…”'
      },
      {
        id: 'rev11-q4',
        question: 'What happens to the witnesses after three and a half days?',
        options: [
          'They remain dead',
          'God breathes life into them, and they ascend',
          'The beast destroys them',
          'The earth swallows them'
        ],
        correctAnswer: 'God breathes life into them, and they ascend',
        explanation: 'Revelation 11:11-12 states, “…after the three and a half days a breath of life from God entered them… and they went up to heaven in a cloud…”'
      },
      {
        id: 'rev11-q5',
        question: 'What is announced when the seventh trumpet sounds?',
        options: [
          'The end of the seals',
          'The kingdom of the world has become the Lord’s',
          'The fall of heaven',
          'The rise of the beast'
        ],
        correctAnswer: 'The kingdom of the world has become the Lord’s',
        explanation: 'Revelation 11:15 says, “…The kingdom of the world has become the kingdom of our Lord and of his Christ…”'
      }
    ],
    key_verse: 'Revelation 11:15',
    key_verse_text: "Then the seventh angel blew his trumpet, and there were loud voices in heaven, saying, ‘The kingdom of the world has become the kingdom of our Lord and of his Christ, and he shall reign forever and ever.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-12',
    bookId: 'revelation',
    chapter: 12,
    title: 'The Woman, Child, and Dragon',
    questions: [
      {
        id: 'rev12-q1',
        question: 'What did John see as a great sign in heaven?',
        options: [
          'A dragon only',
          'A woman clothed with the sun, with a child',
          'A beast rising',
          'Seven angels'
        ],
        correctAnswer: 'A woman clothed with the sun, with a child',
        explanation: 'Revelation 12:1 says, “And a great sign appeared in heaven: a woman clothed with the sun… she was pregnant…”'
      },
      {
        id: 'rev12-q2',
        question: 'Who tried to devour the woman’s child as soon as it was born?',
        options: [
          'The beast',
          'A great red dragon',
          'The false prophet',
          'The elders'
        ],
        correctAnswer: 'A great red dragon',
        explanation: 'Revelation 12:4 states, “…the dragon stood before the woman… so that he might devour her child…”'
      },
      {
        id: 'rev12-q3',
        question: 'What happened to the child after being born?',
        options: [
          'He was killed',
          'He was caught up to God and His throne',
          'He ruled the earth',
          'He hid in the wilderness'
        ],
        correctAnswer: 'He was caught up to God and His throne',
        explanation: 'Revelation 12:5 says, “…her child was caught up to God and to his throne…”'
      },
      {
        id: 'rev12-q4',
        question: 'Who fought the dragon and his angels in heaven?',
        options: [
          'Michael and his angels',
          'The woman',
          'The child',
          'The beast'
        ],
        correctAnswer: 'Michael and his angels',
        explanation: 'Revelation 12:7 states, “Now war arose in heaven, Michael and his angels fighting against the dragon…”'
      },
      {
        id: 'rev12-q5',
        question: 'How did the brethren overcome the dragon, the accuser?',
        options: [
          'By their wealth',
          'By the blood of the Lamb and their testimony',
          'By the sword',
          'By hiding'
        ],
        correctAnswer: 'By the blood of the Lamb and their testimony',
        explanation: 'Revelation 12:11 says, “And they have conquered him by the blood of the Lamb and by the word of their testimony…”'
      }
    ],
    key_verse: 'Revelation 12:11',
    key_verse_text: "And they have conquered him by the blood of the Lamb and by the word of their testimony, for they loved not their lives even unto death.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-13',
    bookId: 'revelation',
    chapter: 13,
    title: 'The Beasts from Sea and Earth',
    questions: [
      {
        id: 'rev13-q1',
        question: 'What did John see rising out of the sea?',
        options: [
          'A lamb',
          'A beast with ten horns and seven heads',
          'An angel',
          'A dragon'
        ],
        correctAnswer: 'A beast with ten horns and seven heads',
        explanation: 'Revelation 13:1 says, “And I saw a beast rising out of the sea, with ten horns and seven heads…”'
      },
      {
        id: 'rev13-q2',
        question: 'Who gave power and authority to the beast from the sea?',
        options: [
          'The Lamb',
          'The dragon',
          'The woman',
          'The elders'
        ],
        correctAnswer: 'The dragon',
        explanation: 'Revelation 13:2 states, “…And to it the dragon gave his power and his throne and great authority.”'
      },
      {
        id: 'rev13-q3',
        question: 'What did the second beast rise from, enforcing worship of the first?',
        options: [
          'The sea',
          'The earth',
          'The heavens',
          'The pit'
        ],
        correctAnswer: 'The earth',
        explanation: 'Revelation 13:11 says, “Then I saw another beast rising out of the earth…”'
      },
      {
        id: 'rev13-q4',
        question: 'What mark did the second beast require on people to buy or sell?',
        options: [
          'A seal',
          'The mark of the beast, 666',
          'A crown',
          'A star'
        ],
        correctAnswer: 'The mark of the beast, 666',
        explanation: 'Revelation 13:16-17 states, “…it causes all… to be marked… the mark… the number of its name… 666.”'
      },
      {
        id: 'rev13-q5',
        question: 'How long was the first beast allowed to exercise authority?',
        options: [
          'Seven years',
          'Forty-two months',
          '1,260 days',
          'A thousand years'
        ],
        correctAnswer: 'Forty-two months',
        explanation: 'Revelation 13:5 says, “And the beast was given… authority for forty-two months.”'
      }
    ],
    key_verse: 'Revelation 13:18',
    key_verse_text: "This calls for wisdom: let the one who has understanding calculate the number of the beast, for it is the number of a man, and his number is 666.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-14',
    bookId: 'revelation',
    chapter: 14,
    title: 'The Lamb and the Harvest',
    questions: [
      {
        id: 'rev14-q1',
        question: 'Where did John see the Lamb standing with the 144,000?',
        options: [
          'On Mount Zion',
          'In the sea',
          'On the throne',
          'In the pit'
        ],
        correctAnswer: 'On Mount Zion',
        explanation: 'Revelation 14:1 says, “Then I looked, and behold, on Mount Zion stood the Lamb, and with him 144,000…”'
      },
      {
        id: 'rev14-q2',
        question: 'What did the 144,000 have written on their foreheads?',
        options: [
          'The mark of the beast',
          'The name of the Lamb and His Father',
          'A number',
          'A seal'
        ],
        correctAnswer: 'The name of the Lamb and His Father',
        explanation: 'Revelation 14:1 states, “…having his name and his Father’s name written on their foreheads.”'
      },
      {
        id: 'rev14-q3',
        question: 'What did the first of three angels proclaim?',
        options: [
          'The fall of Babylon',
          'Fear God and give Him glory',
          'Worship the beast',
          'The end of the world'
        ],
        correctAnswer: 'Fear God and give Him glory',
        explanation: 'Revelation 14:7 says, “…Fear God and give him glory, because the hour of his judgment has come…”'
      },
      {
        id: 'rev14-q4',
        question: 'What did the second angel announce?',
        options: [
          'The eternal gospel',
          'Babylon the great has fallen',
          'The harvest is ripe',
          'The beast is defeated'
        ],
        correctAnswer: 'Babylon the great has fallen',
        explanation: 'Revelation 14:8 states, “…Fallen, fallen is Babylon the great…”'
      },
      {
        id: 'rev14-q5',
        question: 'What did the one like a son of man reap with a sickle?',
        options: [
          'The heavens',
          'The earth’s harvest',
          'The sea',
          'The beast'
        ],
        correctAnswer: 'The earth’s harvest',
        explanation: 'Revelation 14:14-16 says, “…one like a son of man… swung his sickle across the earth, and the earth was reaped.”'
      }
    ],
    key_verse: 'Revelation 14:7',
    key_verse_text: "And he said with a loud voice, ‘Fear God and give him glory, because the hour of his judgment has come, and worship him who made heaven and earth, the sea and the springs of water.’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-15',
    bookId: 'revelation',
    chapter: 15,
    title: 'Prelude to the Seven Bowls',
    questions: [
      {
        id: 'rev15-q1',
        question: 'What did John see as a sign in heaven?',
        options: [
          'A dragon',
          'Seven angels with seven plagues',
          'A beast',
          'A woman'
        ],
        correctAnswer: 'Seven angels with seven plagues',
        explanation: 'Revelation 15:1 says, “Then I saw another sign in heaven… seven angels with seven plagues, which are the last…”'
      },
      {
        id: 'rev15-q2',
        question: 'What did those who conquered the beast stand on?',
        options: [
          'A sea of glass mixed with fire',
          'Mount Zion',
          'The earth',
          'A cloud'
        ],
        correctAnswer: 'A sea of glass mixed with fire',
        explanation: 'Revelation 15:2 states, “…those who had conquered the beast… standing beside the sea of glass with fire…”'
      },
      {
        id: 'rev15-q3',
        question: 'What song did the victors sing?',
        options: [
          'The song of Moses and the Lamb',
          'The song of the elders',
          'The song of the beast',
          'The song of the angels'
        ],
        correctAnswer: 'The song of Moses and the Lamb',
        explanation: 'Revelation 15:3 says, “And they sing the song of Moses… and the song of the Lamb…”'
      },
      {
        id: 'rev15-q4',
        question: 'What filled the sanctuary after the seven angels appeared?',
        options: [
          'Light',
          'Smoke from God’s glory',
          'Water',
          'Darkness'
        ],
        correctAnswer: 'Smoke from God’s glory',
        explanation: 'Revelation 15:8 states, “And the sanctuary was filled with smoke from the glory of God and from his power…”'
      },
      {
        id: 'rev15-q5',
        question: 'What were the seven angels given by one of the four living creatures?',
        options: [
          'Seven trumpets',
          'Seven golden bowls full of God’s wrath',
          'Seven scrolls',
          'Seven crowns'
        ],
        correctAnswer: 'Seven golden bowls full of God’s wrath',
        explanation: 'Revelation 15:7 says, “And one of the four living creatures gave to the seven angels seven golden bowls full of the wrath of God…”'
      }
    ],
    key_verse: 'Revelation 15:3',
    key_verse_text: "And they sing the song of Moses, the servant of God, and the song of the Lamb, saying, ‘Great and amazing are your deeds, O Lord God the Almighty! Just and true are your ways, O King of the nations!’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-16',
    bookId: 'revelation',
    chapter: 16,
    title: 'The Seven Bowls of Wrath',
    questions: [
      {
        id: 'rev16-q1',
        question: 'What did the seven angels pour out on the earth?',
        options: [
          'Seven trumpets',
          'Seven bowls of God’s wrath',
          'Seven seals',
          'Seven blessings'
        ],
        correctAnswer: 'Seven bowls of God’s wrath',
        explanation: 'Revelation 16:1 says, “…Go and pour out on the earth the seven bowls of the wrath of God.”'
      },
      {
        id: 'rev16-q2',
        question: 'What happened with the first bowl?',
        options: [
          'The sea turned to blood',
          'Harmful sores on those with the beast’s mark',
          'Darkness covered the earth',
          'The Euphrates dried up'
        ],
        correctAnswer: 'Harmful sores on those with the beast’s mark',
        explanation: 'Revelation 16:2 states, “…poured out his bowl… and harmful and painful sores came upon the people who bore the mark of the beast…”'
      },
      {
        id: 'rev16-q3',
        question: 'What did the third bowl turn rivers and springs into?',
        options: [
          'Wine',
          'Blood',
          'Fire',
          'Dust'
        ],
        correctAnswer: 'Blood',
        explanation: 'Revelation 16:4 says, “The third angel poured out his bowl into the rivers and the springs of water, and they became blood.”'
      },
      {
        id: 'rev16-q4',
        question: 'What did the sixth bowl do to the Euphrates River?',
        options: [
          'Turned it to blood',
          'Dried it up',
          'Flooded it',
          'Purified it'
        ],
        correctAnswer: 'Dried it up',
        explanation: 'Revelation 16:12 states, “The sixth angel poured out his bowl on the great river Euphrates, and its water was dried up…”'
      },
      {
        id: 'rev16-q5',
        question: 'What came out of the mouths of the dragon, beast, and false prophet?',
        options: [
          'Fire',
          'Froglike spirits',
          'Blessings',
          'Songs'
        ],
        correctAnswer: 'Froglike spirits',
        explanation: 'Revelation 16:13 says, “And I saw… three unclean spirits like frogs come out of the mouth of the dragon… beast… false prophet…”'
      }
    ],
    key_verse: 'Revelation 16:7',
    key_verse_text: "And I heard the altar saying, ‘Yes, Lord God the Almighty, true and just are your judgments!’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-17',
    bookId: 'revelation',
    chapter: 17,
    title: 'The Fall of Babylon the Great',
    questions: [
      {
        id: 'rev17-q1',
        question: 'What did John see sitting on many waters?',
        options: [
          'A lamb',
          'The great prostitute',
          'The Lamb',
          'An elder'
        ],
        correctAnswer: 'The great prostitute',
        explanation: 'Revelation 17:1 says, “…I will show you the judgment of the great prostitute who is seated on many waters…”'
      },
      {
        id: 'rev17-q2',
        question: 'What was written on the woman’s forehead?',
        options: [
          'Holy to the Lord',
          'Babylon the Great, Mother of Prostitutes',
          'Victory',
          'The Beast'
        ],
        correctAnswer: 'Babylon the Great, Mother of Prostitutes',
        explanation: 'Revelation 17:5 states, “And on her forehead was written a name of mystery: ‘Babylon the great, mother of prostitutes and of earth’s abominations.’”'
      },
      {
        id: 'rev17-q3',
        question: 'What did the beast with seven heads and ten horns represent?',
        options: [
          'Seven churches',
          'Seven hills and ten kings',
          'Seven angels',
          'Seven seals'
        ],
        correctAnswer: 'Seven hills and ten kings',
        explanation: 'Revelation 17:9-12 says, “…the seven heads are seven mountains… and they are also seven kings… the ten horns are ten kings…”'
      },
      {
        id: 'rev17-q4',
        question: 'Who will the ten horns and the beast hate and destroy?',
        options: [
          'The Lamb',
          'The prostitute',
          'The saints',
          'The elders'
        ],
        correctAnswer: 'The prostitute',
        explanation: 'Revelation 17:16 states, “And the ten horns… and the beast will hate the prostitute. They will make her desolate and naked…”'
      },
      {
        id: 'rev17-q5',
        question: 'Who is sovereign over the kings of the earth?',
        options: [
          'The beast',
          'God, putting it into their hearts',
          'The prostitute',
          'The dragon'
        ],
        correctAnswer: 'God, putting it into their hearts',
        explanation: 'Revelation 17:17 says, “For God has put it into their hearts to carry out his purpose…”'
      }
    ],
    key_verse: 'Revelation 17:14',
    key_verse_text: "They will make war on the Lamb, and the Lamb will conquer them, for he is Lord of lords and King of kings, and those with him are called and chosen and faithful.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-18',
    bookId: 'revelation',
    chapter: 18,
    title: 'Babylon’s Destruction',
    questions: [
      {
        id: 'rev18-q1',
        question: 'What did an angel announce with a mighty voice?',
        options: [
          'The rise of the beast',
          'Babylon the great has fallen',
          'The Lamb is coming',
          'The seals are opened'
        ],
        correctAnswer: 'Babylon the great has fallen',
        explanation: 'Revelation 18:2 says, “And he called out with a mighty voice, ‘Fallen, fallen is Babylon the great!...’”'
      },
      {
        id: 'rev18-q2',
        question: 'What were the merchants of the earth mourning over?',
        options: [
          'The loss of their wealth from Babylon',
          'The death of the Lamb',
          'The rise of the beast',
          'The sealing of the saints'
        ],
        correctAnswer: 'The loss of their wealth from Babylon',
        explanation: 'Revelation 18:11 states, “And the merchants of the earth weep and mourn for her, since no one buys their cargo anymore…”'
      },
      {
        id: 'rev18-q3',
        question: 'What were God’s people called to do regarding Babylon?',
        options: [
          'Stay and fight',
          'Come out of her',
          'Worship her',
          'Rebuild her'
        ],
        correctAnswer: 'Come out of her',
        explanation: 'Revelation 18:4 says, “Then I heard another voice from heaven saying, ‘Come out of her, my people…’”'
      },
      {
        id: 'rev18-q4',
        question: 'How quickly was Babylon destroyed?',
        options: [
          'In one hour',
          'In seven days',
          'In forty-two months',
          'In a thousand years'
        ],
        correctAnswer: 'In one hour',
        explanation: 'Revelation 18:10 says, “…Alas! Alas!... In a single hour your judgment has come.”'
      },
      {
        id: 'rev18-q5',
        question: 'What was thrown into the sea as a sign of Babylon’s end?',
        options: [
          'A crown',
          'A great millstone',
          'A scroll',
          'A trumpet'
        ],
        correctAnswer: 'A great millstone',
        explanation: 'Revelation 18:21 states, “Then a mighty angel took up a stone like a great millstone and threw it into the sea…”'
      }
    ],
    key_verse: 'Revelation 18:4',
    key_verse_text: "Then I heard another voice from heaven saying, ‘Come out of her, my people, lest you take part in her sins, lest you share in her plagues…’",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-19',
    bookId: 'revelation',
    chapter: 19,
    title: 'The Marriage Supper and Christ’s Return',
    questions: [
      {
        id: 'rev19-q1',
        question: 'What did the great multitude shout in heaven?',
        options: [
          '“Woe to the earth”',
          '“Hallelujah! Salvation and glory and power”',
          '“The beast has won”',
          '“Come quickly”'
        ],
        correctAnswer: '“Hallelujah! Salvation and glory and power”',
        explanation: 'Revelation 19:1 says, “…a great multitude… crying out, ‘Hallelujah! Salvation and glory and power belong to our God…’”'
      },
      {
        id: 'rev19-q2',
        question: 'What event was announced with rejoicing?',
        options: [
          'The fall of the beast',
          'The marriage supper of the Lamb',
          'The rise of Babylon',
          'The sealing of the scroll'
        ],
        correctAnswer: 'The marriage supper of the Lamb',
        explanation: 'Revelation 19:7 says, “Let us rejoice… for the marriage of the Lamb has come, and his Bride has made herself ready…”'
      },
      {
        id: 'rev19-q3',
        question: 'How did John describe the rider on the white horse?',
        options: [
          'Faithful and True, judging in righteousness',
          'Weak and weary',
          'Silent and hidden',
          'Proud and boastful'
        ],
        correctAnswer: 'Faithful and True, judging in righteousness',
        explanation: 'Revelation 19:11 states, “…behold, a white horse! The one sitting on it is called Faithful and True, and in righteousness he judges…”'
      },
      {
        id: 'rev19-q4',
        question: 'What name was written on the rider’s robe and thigh?',
        options: [
          'King of kings and Lord of lords',
          'The Alpha and Omega',
          'The Lamb',
          'The Conqueror'
        ],
        correctAnswer: 'King of kings and Lord of lords',
        explanation: 'Revelation 19:16 says, “On his robe and on his thigh he has a name written, King of kings and Lord of lords.”'
      },
      {
        id: 'rev19-q5',
        question: 'What happened to the beast and false prophet?',
        options: [
          'They fled',
          'They were thrown alive into the lake of fire',
          'They repented',
          'They ruled the earth'
        ],
        correctAnswer: 'They were thrown alive into the lake of fire',
        explanation: 'Revelation 19:20 says, “…the beast was captured, and with it the false prophet… These two were thrown alive into the lake of fire…”'
      }
    ],
    key_verse: 'Revelation 19:11',
    key_verse_text: "Then I saw heaven opened, and behold, a white horse! The one sitting on it is called Faithful and True, and in righteousness he judges and makes war.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-20',
    bookId: 'revelation',
    chapter: 20,
    title: 'The Millennium and Final Judgment',
    questions: [
      {
        id: 'rev20-q1',
        question: 'What did an angel do to Satan with a great chain?',
        options: [
          'Gave him power',
          'Bound him for a thousand years',
          'Set him free',
          'Crowned him'
        ],
        correctAnswer: 'Bound him for a thousand years',
        explanation: 'Revelation 20:1-2 says, “…an angel… seized the dragon… and bound him for a thousand years…”'
      },
      {
        id: 'rev20-q2',
        question: 'Who reigned with Christ for a thousand years?',
        options: [
          'The beast',
          'Those beheaded for their testimony',
          'The false prophet',
          'The merchants'
        ],
        correctAnswer: 'Those beheaded for their testimony',
        explanation: 'Revelation 20:4 states, “…I saw the souls of those who had been beheaded for the testimony of Jesus… They came to life and reigned with Christ…”'
      },
      {
        id: 'rev20-q3',
        question: 'What happened to Satan after the thousand years?',
        options: [
          'He was destroyed',
          'He was released from the pit',
          'He ruled forever',
          'He repented'
        ],
        correctAnswer: 'He was released from the pit',
        explanation: 'Revelation 20:7 says, “And when the thousand years are ended, Satan will be released from his prison…”'
      },
      {
        id: 'rev20-q4',
        question: 'What was the fate of Satan after deceiving the nations?',
        options: [
          'He was bound again',
          'He was thrown into the lake of fire',
          'He was exalted',
          'He escaped'
        ],
        correctAnswer: 'He was thrown into the lake of fire',
        explanation: 'Revelation 20:10 states, “…the devil who had deceived them was thrown into the lake of fire and sulfur…”'
      },
      {
        id: 'rev20-q5',
        question: 'What determined judgment before the great white throne?',
        options: [
          'Wealth',
          'What was written in the books, according to deeds',
          'Strength',
          'Faith alone'
        ],
        correctAnswer: 'What was written in the books, according to deeds',
        explanation: 'Revelation 20:12 says, “…the dead were judged by what was written in the books, according to what they had done.”'
      }
    ],
    key_verse: 'Revelation 20:6',
    key_verse_text: "Blessed and holy is the one who shares in the first resurrection! Over such the second death has no power, but they will be priests of God and of Christ, and they will reign with him for a thousand years.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-21',
    bookId: 'revelation',
    chapter: 21,
    title: 'The New Heaven and New Earth',
    questions: [
      {
        id: 'rev21-q1',
        question: 'What did John see descending from heaven?',
        options: [
          'A dragon',
          'A new heaven and a new earth',
          'The beast',
          'A scroll'
        ],
        correctAnswer: 'A new heaven and a new earth',
        explanation: 'Revelation 21:1 says, “Then I saw a new heaven and a new earth…”'
      },
      {
        id: 'rev21-q2',
        question: 'What city came down from God, prepared as a bride?',
        options: [
          'Babylon',
          'The holy city, new Jerusalem',
          'Rome',
          'Ephesus'
        ],
        correctAnswer: 'The holy city, new Jerusalem',
        explanation: 'Revelation 21:2 states, “And I saw the holy city, new Jerusalem, coming down out of heaven from God, prepared as a bride…”'
      },
      {
        id: 'rev21-q3',
        question: 'What will God wipe away in the new creation?',
        options: [
          'Wealth',
          'Every tear from their eyes',
          'The earth',
          'The law'
        ],
        correctAnswer: 'Every tear from their eyes',
        explanation: 'Revelation 21:4 says, “He will wipe away every tear from their eyes, and death shall be no more…”'
      },
      {
        id: 'rev21-q4',
        question: 'What did the one on the throne say about all things?',
        options: [
          '“I am making all things new”',
          '“All things will end”',
          '“All things are lost”',
          '“All things remain”'
        ],
        correctAnswer: '“I am making all things new”',
        explanation: 'Revelation 21:5 states, “And he who was seated on the throne said, ‘Behold, I am making all things new.’”'
      },
      {
        id: 'rev21-q5',
        question: 'Who will not enter the new Jerusalem?',
        options: [
          'The faithful',
          'The cowardly, faithless, detestable, murderers',
          'The poor',
          'The weak'
        ],
        correctAnswer: 'The cowardly, faithless, detestable, murderers',
        explanation: 'Revelation 21:8 says, “But as for the cowardly, the faithless, the detestable, as for murderers… their portion will be in the lake that burns…”'
      }
    ],
    key_verse: 'Revelation 21:4',
    key_verse_text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'revelation-22',
    bookId: 'revelation',
    chapter: 22,
    title: 'The River of Life and Final Words',
    questions: [
      {
        id: 'rev22-q1',
        question: 'What flowed from the throne of God and the Lamb?',
        options: [
          'Fire',
          'The river of the water of life',
          'Blood',
          'Darkness'
        ],
        correctAnswer: 'The river of the water of life',
        explanation: 'Revelation 22:1 says, “Then the angel showed me the river of the water of life… flowing from the throne of God and of the Lamb…”'
      },
      {
        id: 'rev22-q2',
        question: 'What grew on either side of the river for healing?',
        options: [
          'The tree of life',
          'The tree of knowledge',
          'A vine',
          'A fig tree'
        ],
        correctAnswer: 'The tree of life',
        explanation: 'Revelation 22:2 states, “…on either side of the river, the tree of life… the leaves of the tree were for the healing of the nations.”'
      },
      {
        id: 'rev22-q3',
        question: 'What did Jesus say He is bringing with Him?',
        options: [
          'His reward',
          'A new law',
          'The beast',
          'A scroll'
        ],
        correctAnswer: 'His reward',
        explanation: 'Revelation 22:12 says, “Behold, I am coming soon, bringing my recompense with me, to repay each one for what he has done.”'
      },
      {
        id: 'rev22-q4',
        question: 'Who did Jesus say may wash their robes to enter the city?',
        options: [
          'The wealthy',
          'Those who wash their robes',
          'The strong',
          'The wise'
        ],
        correctAnswer: 'Those who wash their robes',
        explanation: 'Revelation 22:14 states, “Blessed are those who wash their robes, so that they may have the right to the tree of life and… enter the city…”'
      },
      {
        id: 'rev22-q5',
        question: 'What did John and the Spirit say in closing?',
        options: [
          '“Come, Lord Jesus!”',
          '“Stay away”',
          '“Write more”',
          '“Be silent”'
        ],
        correctAnswer: '“Come, Lord Jesus!”',
        explanation: 'Revelation 22:17, 20 says, “…the Spirit and the Bride say, ‘Come.’… Amen. Come, Lord Jesus!”'
      }
    ],
    key_verse: 'Revelation 22:20',
    key_verse_text: "He who testifies to these things says, ‘Surely I am coming soon.’ Amen. Come, Lord Jesus!",
    memory_challenge: true,
    difficulty: 'medium',
    points: 15
  }
];