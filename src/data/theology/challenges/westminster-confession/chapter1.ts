
import { TheologyChallenge } from '../../types';

export const chapter1Challenge: TheologyChallenge = {
  id: 'westminster-ch1',
  bookId: 'westminster-confession',
  chapter: 1,
  title: 'Of the Holy Scripture',
  questions: [
    {
      id: 'wc-ch1-q1',
      question: 'According to the Westminster Confession, what is the ultimate authority in matters of faith?',
      options: [
        'Church tradition',
        'The Holy Scripture',
        'Human reason',
        'Personal experience'
      ],
      correctAnswer: 'The Holy Scripture',
      explanation: 'The Westminster Confession affirms that Scripture is the supreme authority in matters of faith and practice.'
    },
    {
      id: 'wc-ch1-q2',
      question: 'What does the Westminster Confession teach about the canon of Scripture?',
      options: [
        'It is still being developed',
        'It includes the Apocrypha as authoritative',
        'It is complete with 66 books',
        'It varies by denomination'
      ],
      correctAnswer: 'It is complete with 66 books',
      explanation: 'The Westminster Confession teaches that the canon of Scripture is closed with the 66 books recognized in Protestant Bibles.'
    },
    {
      id: 'wc-ch1-q3',
      question: 'According to the Westminster Confession, who is the ultimate interpreter of Scripture?',
      options: [
        'The Pope',
        'Church councils',
        'The Holy Spirit',
        'Biblical scholars'
      ],
      correctAnswer: 'The Holy Spirit',
      explanation: 'The Westminster Confession teaches that the Holy Spirit speaking in Scripture is the supreme judge in matters of religion.'
    }
  ],
  key_quote: "The authority of the Holy Scripture, for which it ought to be believed, and obeyed, dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth itself) the author thereof: and therefore it is to be received, because it is the Word of God.",
  key_quote_location: "Westminster Confession of Faith, Chapter 1, Section 4",
  memory_challenge: true,
  difficulty: 'medium',
  points: 30
};
