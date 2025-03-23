import { TheologyChallenge } from '../types';

export const mereChristianityChallenges: TheologyChallenge[] = [
  {
    id: 'mere-christianity-1',
    bookId: 'mere-christianity',
    chapter: 1,
    title: 'The Law of Human Nature',
    questions: [
      {
        id: 'mc1-q1',
        question: 'What does C.S. Lewis say people are doing when they quarrel?',
        options: [
          'Disagreeing over personal preferences',
          'Appealing to some common standard of behavior that they expect each other to know', 
          'Merely expressing their emotions',
          'Attempting to establish dominance'
        ],
        correctAnswer: 'Appealing to some common standard of behavior that they expect each other to know',
        explanation: 'Lewis argues that quarreling reveals our belief in a standard of right and wrong that exists outside ourselves.'
      },
      {
        id: 'mc1-q2',
        question: 'What term does Lewis use to describe the universal moral code?',
        options: [
          'Natural Selection',
          'The Law of Human Nature',
          'Christian Ethics',
          'Cultural Convention'
        ],
        correctAnswer: 'The Law of Human Nature',
        explanation: 'Lewis calls this universal moral code "The Law of Human Nature" or "Moral Law."'
      },
      {
        id: 'mc1-q3',
        question: 'According to Lewis, how is the Law of Human Nature different from laws of nature like gravity?',
        options: [
          'It only applies to humans',
          'It can be broken or disobeyed',
          'It is more complex',
          'It changes over time'
        ],
        correctAnswer: 'It can be broken or disobeyed',
        explanation: 'Unlike physical laws that describe what always happens, the Moral Law tells us what ought to happen, even though we can choose to disobey it.'
      },
      {
        id: 'mc1-q4',
        question: 'What evidence does Lewis provide for the universality of the Moral Law?',
        options: [
          'Scientific experiments',
          'Biblical references', 
          'Similarities in moral codes across cultures and times',
          'Personal experiences only'
        ],
        correctAnswer: 'Similarities in moral codes across cultures and times',
        explanation: 'Lewis points out that while details may differ, all human societies throughout history have had some moral code, and these codes have remarkable similarities.'
      },
      {
        id: 'mc1-q5',
        question: 'What does Lewis say about people who claim there is no right or wrong?',
        options: [
          'They are more enlightened than others',
          'They are being dishonest when someone treats them unfairly', 
          'They have evolved beyond moral concerns',
          'They have a different but valid perspective'
        ],
        correctAnswer: 'They are being dishonest when someone treats them unfairly',
        explanation: 'Lewis notes that people who deny moral absolutes quickly appeal to fairness when someone breaks a promise to them or treats them badly.'
      },
      {
        id: 'mc1-q6',
        question: 'What does Lewis suggest is the significance of feeling guilty when we break the Moral Law?',
        options: [
          'It\'s just a social construct', 
          'It\'s proof of religious indoctrination',
          'It suggests the Law comes from outside ourselves',
          'It\'s a psychological weakness'
        ],
        correctAnswer: 'It suggests the Law comes from outside ourselves',
        explanation: 'Lewis argues that our sense of guilt when breaking the Law, even when no one is watching, suggests the Law comes from something outside ourselves.'
      },
      {
        id: 'mc1-q7',
        question: 'How does Lewis describe our relationship to the Moral Law?',
        options: [
          'We created it',
          'We are subject to it, not its creators', 
          'We can modify it as needed',
          'It only applies to religious people'
        ],
        correctAnswer: 'We are subject to it, not its creators',
        explanation: 'Lewis argues that we perceive the Moral Law as something imposed upon us, not something we invented.'
      },
      {
        id: 'mc1-q8',
        question: 'What distinction does Lewis make between facts about human behavior and the Moral Law?',
        options: [
          'There is no distinction; they are the same',
          'Facts describe what humans do; the Moral Law prescribes what they ought to do', 
          'Facts are scientific; the Moral Law is religious',
          'Facts are universal; the Moral Law is cultural'
        ],
        correctAnswer: 'Facts describe what humans do; the Moral Law prescribes what they ought to do',
        explanation: 'Lewis distinguishes between descriptive facts about human behavior and the prescriptive nature of the Moral Law.'
      },
      {
        id: 'mc1-q9',
        question: 'What is Lewis\'s purpose in establishing the existence of the Moral Law in this chapter?',
        options: [
          'To promote traditional values',
          'To criticize moral relativism',
          'To prepare for an argument about the existence of God', 
          'To establish social norms'
        ],
        correctAnswer: 'To prepare for an argument about the existence of God',
        explanation: 'Lewis is building a foundation for his later argument that the Moral Law points to the existence of God as its source.'
      },
      {
        id: 'mc1-q10',
        question: 'According to Lewis, what is significant about our failure to keep the Moral Law?',
        options: [
          'It proves the law doesn\'t exist',
          'It shows we need forgiveness and help', 
          'It demonstrates cultural differences',
          'It proves human evolution is incomplete'
        ],
        correctAnswer: 'It shows we need forgiveness and help',
        explanation: 'Lewis suggests our universal failure to live up to the Moral Law points to our need for forgiveness and assistance beyond ourselves.'
      }
    ],
    key_quote: "These, then, are the two points I wanted to make. First, that human beings, all over the earth, have this curious idea that they ought to behave in a certain way, and cannot really get rid of it. Secondly, that they do not in fact behave in that way. They know the Law of Nature; they break it.",
    key_quote_location: "Book I, Chapter 1",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  },
  {
    id: 'mere-christianity-2',
    bookId: 'mere-christianity',
    chapter: 2,
    title: 'Some Objections',
    questions: [
      {
        id: 'mc2-q1',
        question: 'What is one common objection to the Moral Law that Lewis addresses?',
        options: [
          'That it is too strict',
          'That it varies too much between cultures', 
          'That it is outdated',
          'That it can\'t be scientifically proven'
        ],
        correctAnswer: 'That it varies too much between cultures',
        explanation: 'Lewis addresses the objection that morality is merely a cultural construct that varies widely between societies.'
      },
      {
        id: 'mc2-q2',
        question: 'How does Lewis respond to the idea that morality is just a social convention?',
        options: [
          'He agrees completely',
          'He argues that basic moral principles are remarkably similar across cultures despite differences in details', 
          'He says morality is only valid within religious contexts',
          'He claims morality is entirely subjective'
        ],
        correctAnswer: 'He argues that basic moral principles are remarkably similar across cultures despite differences in details',
        explanation: 'Lewis acknowledges cultural differences in moral codes but points out that they share fundamental similarities and are variations rather than completely different systems.'
      },
      {
        id: 'mc2-q3',
        question: 'According to Lewis, what is the relationship between the Moral Law and human instincts?',
        options: [
          'They are identical',
          'The Moral Law is just another instinct',
          'The Moral Law judges between instincts and decides which one to follow in each situation', 
          'Instincts are more important than the Moral Law'
        ],
        correctAnswer: 'The Moral Law judges between instincts and decides which one to follow in each situation',
        explanation: 'Lewis argues that the Moral Law is not itself an instinct but rather adjudicates between different instincts, telling us which one to follow in a given situation.'
      },
      {
        id: 'mc2-q4',
        question: 'How does Lewis illustrate the difference between the Moral Law and herd instinct?',
        options: [
          'There is no difference',
          'The herd instinct is stronger',
          'The Moral Law sometimes tells us to go against herd instinct', 
          'Herd instinct is more reliable'
        ],
        correctAnswer: 'The Moral Law sometimes tells us to go against herd instinct',
        explanation: 'Lewis points out that sometimes the Moral Law tells us to go against the herd and help someone in danger, even when our instinct for self-preservation tells us not to.'
      },
      {
        id: 'mc2-q5',
        question: 'What does Lewis say about the argument that the Moral Law is just a useful social convention?',
        options: [
          'He completely agrees with it',
          'He argues it doesn\'t explain why we feel obligated to follow it even against our interests', 
          'He says it\'s irrelevant',
          'He offers no counterargument'
        ],
        correctAnswer: 'He argues it doesn\'t explain why we feel obligated to follow it even against our interests',
        explanation: 'Lewis argues that even if morality is socially useful, that doesn\'t explain why we feel we ought to follow it even when it goes against our personal interests.'
      },
      {
        id: 'mc2-q6',
        question: 'What distinction does Lewis make between "ought" statements in morality and other domains?',
        options: [
          'There is no distinction',
          'Moral "oughts" are about social approval',
          'Moral "oughts" carry a unique sense of obligation not found in other domains', 
          'Moral "oughts" are less important'
        ],
        correctAnswer: 'Moral "oughts" carry a unique sense of obligation not found in other domains',
        explanation: 'Lewis distinguishes between saying a car "ought" to be serviced (practical) and saying a person "ought" to be honest (moral), noting the unique obligatory nature of moral statements.'
      },
      {
        id: 'mc2-q7',
        question: 'How does Lewis respond to the claim that morality is just about what\'s convenient for society?',
        options: [
          'He agrees completely',
          'He says convenience and morality often align but are conceptually distinct', 
          'He dismisses society\'s needs as irrelevant',
          'He argues that morality is only about individual preferences'
        ],
        correctAnswer: 'He says convenience and morality often align but are conceptually distinct',
        explanation: 'Lewis acknowledges that moral actions are often what benefit society, but argues this doesn\'t explain the unique sense of obligation morality carries.'
      },
      {
        id: 'mc2-q8',
        question: 'What does Lewis suggest about moral reformers who criticize their society\'s conventions?',
        options: [
          'They are always wrong',
          'They must be appealing to a standard beyond their society\'s conventions', 
          'They are merely expressing personal preferences',
          'They are trying to destroy society'
        ],
        correctAnswer: 'They must be appealing to a standard beyond their society\'s conventions',
        explanation: 'Lewis points out that moral reformers who criticize existing conventions must be appealing to a higher standard than mere social convention.'
      },
      {
        id: 'mc2-q9',
        question: 'According to Lewis, what is wrong with the idea that morality is just what\'s good for human survival?',
        options: [
          'Nothing, he agrees with this',
          'It doesn\'t explain why we should care about the survival of others', 
          'Survival is unimportant',
          'It ignores religious sources of morality'
        ],
        correctAnswer: 'It doesn\'t explain why we should care about the survival of others',
        explanation: 'Lewis argues that while survival may explain why we have moral impulses, it doesn\'t explain why we feel obligated to care about others\' survival, not just our own.'
      },
      {
        id: 'mc2-q10',
        question: 'What conclusion does Lewis reach about objections to the Moral Law in this chapter?',
        options: [
          'The objections completely disprove the Moral Law',
          'The objections are valid but can be ignored',
          'The objections fail to explain the unique obligatory character of morality', 
          'The objections show morality is purely subjective'
        ],
        correctAnswer: 'The objections fail to explain the unique obligatory character of morality',
        explanation: 'Lewis concludes that common objections to the Moral Law fail to account for its distinctive character as something we feel obligated to follow regardless of our desires or interests.'
      }
    ],
    key_quote: "My argument against God was that the universe seemed so cruel and unjust. But how had I got this idea of just and unjust? A man does not call a line crooked unless he has some idea of a straight line.",
    key_quote_location: "Book I, Chapter 2",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  },
  {
    id: 'mere-christianity-3',
    bookId: 'mere-christianity',
    chapter: 3,
    title: 'The Reality of the Law',
    questions: [
      {
        id: 'mc3-q1',
        question: 'What does Lewis suggest about the reality of the Moral Law?',
        options: [
          'It is merely a human invention',
          'It is a biological adaptation for survival',
          'It is something real that humans did not invent',
          'It varies completely from person to person'
        ],
        correctAnswer: 'It is something real that humans did not invent',
        explanation: 'Lewis argues that the Moral Law is something objectively real that humans discover rather than invent.'
      },
      {
        id: 'mc3-q2',
        question: 'According to Lewis, what is the relationship between the Moral Law and the material universe?',
        options: [
          'The Moral Law is a product of material processes',
          'The Moral Law is completely separate from the material universe',
          'The Moral Law governs the material universe',
          'The Moral Law is something above and beyond the material universe'
        ],
        correctAnswer: 'The Moral Law is something above and beyond the material universe',
        explanation: 'Lewis suggests that the Moral Law exists independently of the material universe and cannot be explained by material processes alone.'
      },
      {
        id: 'mc3-q3',
        question: 'What analogy does Lewis use to describe how humans perceive the Moral Law?',
        options: [
          'It is like seeing with our eyes',
          'It is like touching with our hands',
          'It is like hearing music with our ears',
          'It is like sensing a direction with a compass'
        ],
        correctAnswer: 'It is like hearing music with our ears',
        explanation: 'Lewis uses the analogy of perceiving music to describe how we perceive the Moral Law - we recognize it through a faculty that allows us to perceive non-material reality.'
      }
    ],
    key_quote: "If the universe is not governed by an absolute goodness, then all our efforts are in the long run hopeless. But if it is, then we are making ourselves enemies to that goodness every day, and are not in the least likely to do any better tomorrow, and so our case is hopeless again.",
    key_quote_location: "Book I, Chapter 3",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  },
  {
    id: 'mere-christianity-4',
    bookId: 'mere-christianity',
    chapter: 4,
    title: 'What Lies Behind the Law',
    questions: [
      {
        id: 'mc4-q1',
        question: 'What conclusion does Lewis draw about what lies behind the Moral Law?',
        options: [
          'Nothing - it exists on its own',
          'Social conditioning',
          'An intelligent mind - God',
          'Evolutionary processes'
        ],
        correctAnswer: 'An intelligent mind - God',
        explanation: 'Lewis argues that the Moral Law points to an intelligent Mind behind the universe - what we call God.'
      },
      {
        id: 'mc4-q2',
        question: 'What analogy does Lewis use to explain how the Moral Law points to God?',
        options: [
          'A mathematician discovering equations',
          'A painter creating art',
          'A driver following traffic laws',
          'A composer writing music'
        ],
        correctAnswer: 'A composer writing music',
        explanation: 'Lewis suggests that the Moral Law is like music that reveals the presence of a Composer (God) who wrote it.'
      },
      {
        id: 'mc4-q3',
        question: 'According to Lewis, what does science tell us about the ultimate reality?',
        options: [
          'Science disproves the existence of God',
          'Science can explain everything without God',
          'Science cannot answer the ultimate question of why anything exists',
          'Science proves that matter is all that exists'
        ],
        correctAnswer: 'Science cannot answer the ultimate question of why anything exists',
        explanation: 'Lewis argues that science describes how the material universe works but cannot explain why anything exists at all or why there are natural laws.'
      }
    ],
    key_quote: "We want to know whether the universe simply happens to be what it is for no reason or whether there is a power behind it that makes it what it is.",
    key_quote_location: "Book I, Chapter 4",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  },
  {
    id: 'mere-christianity-5',
    bookId: 'mere-christianity',
    chapter: 5,
    title: 'We Have Cause to Be Uneasy',
    questions: [
      {
        id: 'mc5-q1',
        question: 'According to Lewis, why should humans be uneasy about their relationship with God?',
        options: [
          'Because God is arbitrary in His judgments',
          'Because we consistently fail to live up to the Moral Law we know',
          'Because God is distant and uninterested in humans',
          'Because the universe is random and meaningless'
        ],
        correctAnswer: 'Because we consistently fail to live up to the Moral Law we know',
        explanation: 'Lewis argues that we have cause to be uneasy because we recognize the Moral Law but consistently fail to keep it.'
      },
      {
        id: 'mc5-q2',
        question: 'What does Lewis suggest is the state of humanity in relation to God?',
        options: [
          'We are in a state of harmony with God',
          'We are neutral in our relationship with God',
          'We are in a state of rebellion against God',
          'We have no relationship with God at all'
        ],
        correctAnswer: 'We are in a state of rebellion against God',
        explanation: 'Lewis suggests that humanity is in a state of rebellion against God, having turned away from Him and the Moral Law He established.'
      },
      {
        id: 'mc5-q3',
        question: 'What does Lewis say we should do about our failure to keep the Moral Law?',
        options: [
          'Ignore it and live however we want',
          'Create our own standards that we can meet',
          'Realize our need for help from God',
          'Abandon the concept of morality altogether'
        ],
        correctAnswer: 'Realize our need for help from God',
        explanation: 'Lewis argues that our failure to keep the Moral Law should lead us to realize our need for God\'s help and forgiveness.'
      }
    ],
    key_quote: "The conclusion I dread is not 'So there\'s no God after all,' but 'So this is what God's really like. Deceive yourself no longer.'",
    key_quote_location: "Book I, Chapter 5",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  },
  {
    id: 'mere-christianity-6',
    bookId: 'mere-christianity',
    chapter: 6,
    title: 'The Rival Conceptions of God',
    questions: [
      {
        id: 'mc6-q1',
        question: 'What are the two primary views of God that Lewis contrasts?',
        options: [
          'Monotheism and atheism',
          'Theism and pantheism',
          'Christianity and Hinduism',
          'Materialism and spiritualism'
        ],
        correctAnswer: 'Theism and pantheism',
        explanation: 'Lewis contrasts the Materialist (atheist) view, the Christian (theistic) view, and the Pantheist view, focusing primarily on the distinction between theism and pantheism.'
      },
      {
        id: 'mc6-q2',
        question: 'According to Lewis, what does the pantheist believe about God?',
        options: [
          'God is wholly separate from the universe',
          'God is a personal being distinct from creation',
          'God is identical with the universe',
          'God does not exist'
        ],
        correctAnswer: 'God is identical with the universe',
        explanation: 'Lewis explains that pantheists believe God is the universe, or that everything is part of God.'
      },
      {
        id: 'mc6-q3',
        question: 'What does Lewis identify as a key difference between the Christian view and the Pantheist view?',
        options: [
          'Christians believe in heaven while pantheists do not',
          'Christians believe God created the universe while pantheists believe God is the universe',
          'Christians believe in Jesus while pantheists believe in Buddha',
          'Christians believe in good and evil while pantheists do not'
        ],
        correctAnswer: 'Christians believe God created the universe while pantheists believe God is the universe',
        explanation: 'Lewis highlights that in Christianity, God is separate from and created the universe, while in Pantheism, God and the universe are the same thing.'
      },
      {
        id: 'mc6-q4',
        question: 'What does Lewis say about the Pantheist view of good and evil?',
        options: [
          'Good and evil are clearly defined opposites',
          'There is no good or evil, only matter',
          'Good and evil are just different aspects of the same thing',
          'Evil is more powerful than good'
        ],
        correctAnswer: 'Good and evil are just different aspects of the same thing',
        explanation: 'Lewis points out that in Pantheism, since everything is part of God, good and evil become merely different aspects of the same ultimate reality.'
      },
      {
        id: 'mc6-q5',
        question: 'Why does Lewis argue that Christianity has a more satisfying view of good and evil than Pantheism?',
        options: [
          'Christianity is more ancient',
          'Christianity recognizes evil as a real problem to be overcome, not just an illusion',
          'Christianity is more popular worldwide',
          'Christianity is easier to understand'
        ],
        correctAnswer: 'Christianity recognizes evil as a real problem to be overcome, not just an illusion',
        explanation: 'Lewis argues that Christianity takes evil seriously as a real problem, whereas Pantheism ultimately reduces evil to an illusion or misunderstanding.'
      },
      {
        id: 'mc6-q6',
        question: 'What does Lewis suggest is a problem with the materialist (atheist) view?',
        options: [
          'It cannot account for human reason and thought',
          'It is too old-fashioned',
          'It is not scientific enough',
          'It is too complex for most people'
        ],
        correctAnswer: 'It cannot account for human reason and thought',
        explanation: 'Lewis argues that if materialism were true and the universe is just matter in motion, then human thoughts would just be random chemical events, not rational processes.'
      },
      {
        id: 'mc6-q7',
        question: 'How does Lewis describe God\'s relationship to time in the Christian view?',
        options: [
          'God is subject to time like humans',
          'God exists at a particular point in time',
          'God is outside time and sees all times as equally present',
          'God exists only in the future'
        ],
        correctAnswer: 'God is outside time and sees all times as equally present',
        explanation: 'Lewis explains that in the Christian view, God is not within time but outside it, seeing all of history as eternally present to Him.'
      },
      {
        id: 'mc6-q8',
        question: 'What does Lewis say about the personality of God in the Christian view?',
        options: [
          'God is an impersonal force',
          'God is a personal being',
          'God has no definable attributes',
          'God\'s personality is unknowable'
        ],
        correctAnswer: 'God is a personal being',
        explanation: 'Lewis emphasizes that in Christianity, God is a personal being with consciousness and intentionality, not an impersonal force or energy.'
      },
      {
        id: 'mc6-q9',
        question: 'According to Lewis, what is the significance of God being beyond good and evil in Pantheism?',
        options: [
          'It means morality is subjective',
          'It means God is perfect',
          'It leaves no basis for moral judgments',
          'It means humans cannot understand God'
        ],
        correctAnswer: 'It leaves no basis for moral judgments',
        explanation: 'Lewis points out that if God is beyond good and evil (as in Pantheism), then there can be no ultimate standard for moral judgments.'
      },
      {
        id: 'mc6-q10',
        question: 'What metaphor does Lewis use to describe the difference between God\'s existence and our existence?',
        options: [
          'A page and an author',
          'A painting and an artist',
          'A two-dimensional versus a three-dimensional being',
          'A plant and a gardener'
        ],
        correctAnswer: 'A two-dimensional versus a three-dimensional being',
        explanation: 'Lewis uses the analogy of a two-dimensional being trying to understand a three-dimensional being to illustrate how our limited minds try to comprehend God\'s unlimited nature.'
      }
    ],
    key_quote: "If you are a Christian you do not have to believe that all the other religions are simply wrong all through. If you are an atheist you do have to believe that the main point in all the religions of the whole world is simply one huge mistake.",
    key_quote_location: "Book I, Chapter 6",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  },
  {
    id: 'mere-christianity-7',
    bookId: 'mere-christianity',
    chapter: 7,
    title: 'The Invasion',
    questions: [
      {
        id: 'mc7-q1',
        question: 'What "invasion" is Lewis referring to in this chapter?',
        options: [
          'The Roman invasion of Britain',
          'Sin\'s invasion of human nature',
          'God\'s invasion of the world through Christ',
          'The invasion of rational thought by religion'
        ],
        correctAnswer: 'God\'s invasion of the world through Christ',
        explanation: 'Lewis uses "invasion" as a metaphor for God entering human history through the incarnation of Christ.'
      },
      {
        id: 'mc7-q2',
        question: 'According to Lewis, what is the central story of Christianity?',
        options: [
          'The teachings of Jesus',
          'The miracles Jesus performed',
          'How God became a man to rescue humanity',
          'The establishment of the church'
        ],
        correctAnswer: 'How God became a man to rescue humanity',
        explanation: 'Lewis emphasizes that the core of Christianity is the story of God becoming incarnate in Jesus Christ to rescue humanity from sin and death.'
      },
      {
        id: 'mc7-q3',
        question: 'What analogy does Lewis use to describe the spiritual war on earth?',
        options: [
          'A game of chess',
          'A civil war',
          'An occupied territory',
          'A medical operation'
        ],
        correctAnswer: 'An occupied territory',
        explanation: 'Lewis compares earth to a territory occupied by enemy forces (Satan), which God is now reclaiming through a kind of secret invasion.'
      },
      {
        id: 'mc7-q4',
        question: 'According to Lewis, what was God\'s strategy in the "invasion"?',
        options: [
          'A frontal assault with armies of angels',
          'A landing behind enemy lines in human form',
          'A diplomatic negotiation with evil forces',
          'A gradual evolution of human consciousness'
        ],
        correctAnswer: 'A landing behind enemy lines in human form',
        explanation: 'Lewis describes God\'s strategy as coming in human form, "landing behind enemy lines" through the incarnation.'
      },
      {
        id: 'mc7-q5',
        question: 'What does Lewis say about how Christians view paganism?',
        options: [
          'All pagan beliefs are completely false',
          'Paganism contains glimpses of truth that are fulfilled in Christianity',
          'Paganism is equal to Christianity as a path to God',
          'Paganism was a direct revelation from God'
        ],
        correctAnswer: 'Paganism contains glimpses of truth that are fulfilled in Christianity',
        explanation: 'Lewis suggests that paganism often contains shadows or reflections of the truth, which Christianity fulfills and completes.'
      },
      {
        id: 'mc7-q6',
        question: 'According to Lewis, how is Christianity different from myths about dying gods?',
        options: [
          'Christianity is historically verifiable while myths are not',
          'Christianity teaches different moral lessons',
          'Christianity has better literary quality',
          'Christianity has more followers'
        ],
        correctAnswer: 'Christianity is historically verifiable while myths are not',
        explanation: 'Lewis points out that unlike myths, Christianity claims that its central story actually happened in history, at a specific time and place.'
      },
      {
        id: 'mc7-q7',
        question: 'What does Lewis suggest about the relationship between myth and fact in Christianity?',
        options: [
          'Myth and fact are completely unrelated',
          'Christianity replaces myth with fact',
          'In Christianity, a myth became fact while remaining mythically powerful',
          'Facts are more important than myths'
        ],
        correctAnswer: 'In Christianity, a myth became fact while remaining mythically powerful',
        explanation: 'Lewis suggests that in Christianity, the mythic themes that resonate with human imagination actually became fact in history without losing their mythic power.'
      },
      {
        id: 'mc7-q8',
        question: 'What purpose does Lewis attribute to the Jewish people in God\'s plan?',
        options: [
          'They were chosen randomly',
          'They were morally superior to other peoples',
          'They were prepared specifically to receive God\'s revelation',
          'They were more intelligent than other ancient peoples'
        ],
        correctAnswer: 'They were prepared specifically to receive God\'s revelation',
        explanation: 'Lewis suggests that God prepared the Jewish people through their history and law to be the vehicle through which He would reveal himself more fully.'
      },
      {
        id: 'mc7-q9',
        question: 'What does Lewis mean by calling Christianity "the completion of something begun in all religions"?',
        options: [
          'All religions are equally valid paths to God',
          'Christianity is just a more evolved form of paganism',
          'The deep human yearnings expressed in all religions find their fulfillment in Christ',
          'Christianity borrowed its core ideas from other religions'
        ],
        correctAnswer: 'The deep human yearnings expressed in all religions find their fulfillment in Christ',
        explanation: 'Lewis suggests that all religions contain some yearning for or shadows of the truth, which Christianity claims is fully revealed in Christ.'
      },
      {
        id: 'mc7-q10',
        question: 'What contrast does Lewis draw between mythic gods and the God of Christianity?',
        options: [
          'Mythic gods are more powerful',
          'Mythic gods are fictional while the Christian God is real',
          'The Christian God is more morally perfect',
          'Mythic gods are more relatable to humans'
        ],
        correctAnswer: 'Mythic gods are fictional while the Christian God is real',
        explanation: 'Lewis emphasizes that unlike mythic gods, Christianity claims that God actually entered history as a real person in a specific time and place.'
      }
    ],
    key_quote: "The heart of Christianity is a myth which is also a fact. The old myth of the Dying God, without ceasing to be myth, comes down from the heaven of legend and imagination to the earth of history.",
    key_quote_location: "Book II, Chapter 7",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  },
  {
    id: 'mere-christianity-8',
    bookId: 'mere-christianity',
    chapter: 8,
    title: 'The Shocking Alternative',
    questions: [
      {
        id: 'mc8-q1',
        question: 'What "shocking alternative" does Lewis present in this chapter?',
        options: [
          'Either Jesus was divine or he was evil',
          'Either God exists or life is meaningless',
          'Either Christianity is true or all religions are false',
          'Either humans have free will or they are robots'
        ],
        correctAnswer: 'Either Jesus was divine or he was evil',
        explanation: 'Lewis presents the famous "trilemma": Jesus was either a liar, a lunatic, or the Lord (God), eliminating the comfortable option of seeing him as just a great moral teacher.'
      },
      {
        id: 'mc8-q2',
        question: 'According to Lewis, what claim did Jesus make that forces us to make a decision about him?',
        options: [
          'His claim to perform miracles',
          'His claim to forgive sins',
          'His claim to fulfill prophecy',
          'His claim to rise from the dead'
        ],
        correctAnswer: 'His claim to forgive sins',
        explanation: 'Lewis notes that Jesus claimed to forgive sins, which would be nonsensical unless He was God, since only the person wronged can forgive an offense.'
      },
      {
        id: 'mc8-q3',
        question: 'What does Lewis say is the reason God gave humans free will?',
        options: [
          'To test who deserves heaven',
          'Because He couldn\'t control everything',
          'To create beings who could freely love Him',
          'To make life more interesting'
        ],
        correctAnswer: 'To create beings who could freely love Him',
        explanation: 'Lewis argues that God gave humans free will because love requires freedom; automatic "love" would be meaningless.'
      },
      {
        id: 'mc8-q4',
        question: 'What does Lewis identify as the consequence of human free will?',
        options: [
          'Human creativity',
          'Human happiness',
          'Human sin and evil in the world',
          'Human intelligence'
        ],
        correctAnswer: 'Human sin and evil in the world',
        explanation: 'Lewis states that the consequence of free will is the possibility of evil choices, which humans have consistently made.'
      },
      {
        id: 'mc8-q5',
        question: 'How does Lewis describe the state of the world in relation to God?',
        options: [
          'A perfect reflection of God\'s will',
          'A territory occupied by a hostile power',
          'An experiment that failed',
          'A place God has abandoned'
        ],
        correctAnswer: 'A territory occupied by a hostile power',
        explanation: 'Lewis describes the world as a territory occupied by enemy forces (Satan), in rebellion against its rightful king (God).'
      },
      {
        id: 'mc8-q6',
        question: 'According to Lewis, what was Jesus\'s primary mission on earth?',
        options: [
          'To teach moral principles',
          'To perform miracles',
          'To suffer and die to defeat sin and death',
          'To establish a new religion'
        ],
        correctAnswer: 'To suffer and die to defeat sin and death',
        explanation: 'Lewis emphasizes that Jesus came primarily to suffer and die as a sacrifice to defeat sin and death, not merely to teach or set an example.'
      },
      {
        id: 'mc8-q7',
        question: 'What option does Lewis reject about Jesus\'s identity?',
        options: [
          'That Jesus was God',
          'That Jesus was a good moral teacher but not divine',
          'That Jesus was deluded',
          'That Jesus was deliberately deceptive'
        ],
        correctAnswer: 'That Jesus was a good moral teacher but not divine',
        explanation: 'Lewis rejects the "patronizing nonsense" that Jesus was just a great moral teacher, arguing that his claims about himself don\'t allow that option.'
      },
      {
        id: 'mc8-q8',
        question: 'What analogy does Lewis use to describe God\'s entry into the world?',
        options: [
          'A king visiting his subjects',
          'A doctor treating a patient',
          'A diver plunging into deep water',
          'A teacher entering a classroom'
        ],
        correctAnswer: 'A diver plunging into deep water',
        explanation: 'Lewis compares God becoming human to a diver stripping down and plunging into cold, dark waters to recover something valuable.'
      },
      {
        id: 'mc8-q9',
        question: 'What does Lewis say is required for humanity to regain its proper relationship with God?',
        options: [
          'Perfect moral behavior',
          'Intellectual understanding of theology',
          'Surrender and repentance',
          'Religious rituals and ceremonies'
        ],
        correctAnswer: 'Surrender and repentance',
        explanation: 'Lewis argues that humans must surrender to God, admit their rebellion, and repent to restore their proper relationship with Him.'
      },
      {
        id: 'mc8-q10',
        question: 'According to Lewis, what obstacle prevents many people from accepting Christianity?',
        options: [
          'Lack of evidence',
          'Religious trauma',
          'Pride and the unwillingness to surrender to God',
          'Intellectual objections to specific doctrines'
        ],
        correctAnswer: 'Pride and the unwillingness to surrender to God',
        explanation: 'Lewis suggests that pride—the unwillingness to kneel and surrender to God—is often the real obstacle to faith, not intellectual objections.'
      }
    ],
    key_quote: "I am trying here to prevent anyone saying the really foolish thing that people often say about Him: 'I'm ready to accept Jesus as a great moral teacher, but I don't accept His claim to be God.' That is the one thing we must not say.",
    key_quote_location: "Book II, Chapter 8",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  },
  {
    id: 'mere-christianity-9',
    bookId: 'mere-christianity',
    chapter: 9,
    title: 'The Perfect Penitent',
    questions: [
      {
        id: 'mc9-q1',
        question: 'Who does Lewis identify as the "perfect penitent"?',
        options: [
          'The Virgin Mary',
          'Saint Francis of Assisi',
          'The Apostle Paul',
          'Jesus Christ'
        ],
        correctAnswer: 'Jesus Christ',
        explanation: 'Lewis explains that Jesus, though he had no sins of his own, perfectly offered the repentance, suffering, and humility that humans owed to God but couldn\'t give.'
      },
      {
        id: 'mc9-q2',
        question: 'According to Lewis, why can\'t humans make proper repentance on their own?',
        options: [
          'Humans don\'t know how to properly repent',
          'The debt is too large for any human to pay',
          'Humans are too sinful and self-centered to repent perfectly',
          'Repentance requires divine intervention'
        ],
        correctAnswer: 'Humans are too sinful and self-centered to repent perfectly',
        explanation: 'Lewis argues that our sinful nature prevents us from making a perfect, selfless repentance; our repentance itself is flawed by self-interest.'
      },
      {
        id: 'mc9-q3',
        question: 'What does Lewis say Christ does for us that we cannot do for ourselves?',
        options: [
          'He performs miracles',
          'He teaches us moral truths',
          'He offers perfect repentance and surrender to God on our behalf',
          'He shows us what heaven is like'
        ],
        correctAnswer: 'He offers perfect repentance and surrender to God on our behalf',
        explanation: 'Lewis explains that Christ offers the perfect repentance, submission, and suffering to God that we owe but cannot give.'
      },
      {
        id: 'mc9-q4',
        question: 'According to Lewis, why did Christ have to be both God and man?',
        options: [
          'To communicate with both parties',
          'To satisfy biblical prophecy',
          'To perform both physical and spiritual miracles',
          'To represent both heaven and earth'
        ],
        correctAnswer: 'To communicate with both parties',
        explanation: 'Lewis argues that Christ needed to be God to have the strength to bear the weight of sin, and man to represent humanity in offering perfect repentance.'
      },
      {
        id: 'mc9-q5',
        question: 'What aspect of atonement does Lewis emphasize most in this chapter?',
        options: [
          'Substitutionary punishment',
          'Victory over Satan',
          'Perfect repentance and surrender',
          'Moral example'
        ],
        correctAnswer: 'Perfect repentance and surrender',
        explanation: 'While acknowledging other aspects of atonement, Lewis focuses on Christ offering the perfect repentance and surrender to God that humanity could not give.'
      },
      {
        id: 'mc9-q6',
        question: 'What analogy does Lewis use to explain how we participate in Christ\'s death?',
        options: [
          'A financial transaction',
          'A legal pardon',
          'Good infection or good pretending',
          'A medical operation'
        ],
        correctAnswer: 'Good infection or good pretending',
        explanation: 'Lewis suggests that we participate in Christ\'s perfect offering through "good infection" (Christ\'s life in us) or "good pretending" (acting as if we were Christ).'
      },
      {
        id: 'mc9-q7',
        question: 'What does Lewis mean by Christians being "in Christ"?',
        options: [
          'Physically present with Jesus',
          'Thinking about Jesus all the time',
          'Sharing in Christ\'s life through a kind of spiritual union',
          'Following Jesus\'s teachings'
        ],
        correctAnswer: 'Sharing in Christ\'s life through a kind of spiritual union',
        explanation: 'Lewis describes being "in Christ" as sharing in His life through a kind of spiritual union or "good infection," where His life becomes active within us.'
      },
      {
        id: 'mc9-q8',
        question: 'According to Lewis, why is pretending to be like Christ valuable?',
        options: [
          'It impresses other people',
          'It earns God\'s favor',
          'Eventually, the pretense can become reality',
          'It makes us feel better about ourselves'
        ],
        correctAnswer: 'Eventually, the pretense can become reality',
        explanation: 'Lewis suggests that by "pretending" to be Christ (acting as He would), we can gradually be transformed to actually become more like Him.'
      },
      {
        id: 'mc9-q9',
        question: 'What does Lewis say about the purpose of Christ\'s sacrifice?',
        options: [
          'To appease God\'s anger',
          'To pay a debt to Satan',
          'To offer perfect repentance and surrender on humanity\'s behalf',
          'To demonstrate God\'s love'
        ],
        correctAnswer: 'To offer perfect repentance and surrender on humanity\'s behalf',
        explanation: 'Lewis emphasizes that Christ\'s sacrifice was about offering the perfect surrender, submission, and repentance that humans owed God but couldn\'t give.'
      },
      {
        id: 'mc9-q10',
        question: 'What distinction does Lewis make between Christ\'s sacrifice and common views of punishment?',
        options: [
          'Christ\'s sacrifice was voluntary, not forced',
          'Christ\'s sacrifice was temporary, not eternal',
          'Christ\'s sacrifice was public, not private',
          'Christ\'s sacrifice was symbolic, not literal'
        ],
        correctAnswer: 'Christ\'s sacrifice was voluntary, not forced',
        explanation: 'Lewis emphasizes that Christ voluntarily offered Himself, distinguishing this from the common view of someone being punished against their will.'
      }
    ],
    key_quote: "The perfect submission, the perfect suffering, the perfect death were not only easier to Jesus because He was God, but were possible only because He was God. But they were still human... The human life was replaced by the kind of life which has been going on in Jesus for ever and ever.",
    key_quote_location: "Book II, Chapter 9",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  },
  {
    id: 'mere-christianity-10',
    bookId: 'mere-christianity',
    chapter: 10,
    title: 'The Practical Conclusion',
    questions: [
      {
        id: 'mc10-q1',
        question: 'What practical conclusion does Lewis draw about Christianity in this chapter?',
        options: [
          'Christianity requires intellectual agreement with doctrines',
          'Christianity requires joining a church',
          'Christianity requires surrendering oneself to Christ',
          'Christianity requires performing good deeds'
        ],
        correctAnswer: 'Christianity requires surrendering oneself to Christ',
        explanation: 'Lewis concludes that Christianity is ultimately about surrendering oneself to Christ, allowing Him to live through you.'
      },
      {
        id: 'mc10-q2',
        question: 'What distinction does Lewis make between believing in Christianity and practicing it?',
        options: [
          'Believing is important, practicing is optional',
          'Practicing is more difficult than believing',
          'Believing leads to salvation, practicing to rewards',
          'Believing without practicing is nearly worthless'
        ],
        correctAnswer: 'Believing without practicing is nearly worthless',
        explanation: 'Lewis emphasizes that merely believing Christianity intellectually without putting it into practice is of little value, like admiring a soap without washing with it.'
      },
      {
        id: 'mc10-q3',
        question: 'What metaphor does Lewis use for the process of becoming a Christian?',
        options: [
          'Building a house',
          'Climbing a mountain',
          'Crossing a bridge',
          'Being remodeled by God'
        ],
        correctAnswer: 'Being remodeled by God',
        explanation: 'Lewis compares becoming a Christian to having your house (life) completely remodeled by God—a process that often involves uncomfortable demolition work.'
      },
      {
        id: 'mc10-q4',
        question: 'What does Lewis say about the cost of becoming a Christian?',
        options: [
          'It costs nothing at all',
          'It costs money to join a church',
          'It costs everything you have',
          'The cost varies depending on your circumstances'
        ],
        correctAnswer: 'It costs everything you have',
        explanation: 'Lewis states that Christianity costs "nothing less than your whole self"—complete surrender to Christ.'
      },
      {
        id: 'mc10-q5',
        question: 'What promise does Lewis say Christ offers to those who surrender to Him?',
        options: [
          'Immediate happiness and prosperity',
          'A life free from problems',
          'Complete transformation into something better',
          'Special spiritual powers'
        ],
        correctAnswer: 'Complete transformation into something better',
        explanation: 'Lewis explains that Christ promises to transform those who surrender to Him into something far better, though the process may be difficult.'
      },
      {
        id: 'mc10-q6',
        question: 'According to Lewis, what is Christ\'s goal for humanity?',
        options: [
          'To make everyone financially prosperous',
          'To create a perfect society on earth',
          'To transform humans into perfect sons of God',
          'To establish a powerful church'
        ],
        correctAnswer: 'To transform humans into perfect sons of God',
        explanation: 'Lewis states that Christ wants to transform humans into beings like Himself—perfect sons of God.'
      },
      {
        id: 'mc10-q7',
        question: 'What analogy does Lewis use to describe humanity\'s current state?',
        options: [
          'A broken machine',
          'A disobedient child',
          'A rebellious kingdom',
          'A work in progress'
        ],
        correctAnswer: 'A rebellious kingdom',
        explanation: 'Lewis compares humanity to a kingdom that has rebelled against its rightful king and needs to be reclaimed.'
      },
      {
        id: 'mc10-q8',
        question: 'According to Lewis, what attitude should Christians have toward their own progress?',
        options: [
          'Pride in their spiritual achievements',
          'Constant dissatisfaction with themselves',
          'Concern for their progress, but trust in God\'s work',
          'Indifference to their spiritual state'
        ],
        correctAnswer: 'Concern for their progress, but trust in God\'s work',
        explanation: 'Lewis suggests Christians should be concerned about their progress but ultimately trust God\'s work in them, like patients following a doctor\'s orders.'
      },
      {
        id: 'mc10-q9',
        question: 'What does Lewis say about the difficulty of becoming a Christian?',
        options: [
          'It\'s easy if you try hard enough',
          'It\'s impossible without God\'s help',
          'It\'s mainly about following rules',
          'It\'s a gradual process of self-improvement'
        ],
        correctAnswer: 'It\'s impossible without God\'s help',
        explanation: 'Lewis emphasizes that becoming truly Christian is impossible through human effort alone; it requires God\'s help and transformation.'
      },
      {
        id: 'mc10-q10',
        question: 'What final encouragement does Lewis offer to those considering Christianity?',
        options: [
          'Try it for a while to see if it works',
          'Join a church to learn more',
          'Take the first step of surrendering to Christ',
          'Read more books about Christianity'
        ],
        correctAnswer: 'Take the first step of surrendering to Christ',
        explanation: 'Lewis encourages readers to take the first step by surrendering to Christ, even if they don\'t fully understand everything.'
      }
    ],
    key_quote: "Give up yourself, and you will find your real self. Lose your life and you will save it. Submit to death, death of your ambitions and favourite wishes every day and death of your whole body in the end: submit with every fibre of your being, and you will find eternal life.",
    key_quote_location: "Book II, Chapter 10",
    memory_challenge: true,
    difficulty: 'medium',
    points: 20
  }
];

