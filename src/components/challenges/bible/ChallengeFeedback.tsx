
import React from 'react';
import { motion } from 'framer-motion';  // Remove Motion, use only motion
import QuestionCard from './QuestionCard';
import ResultsCard from './ResultsCard';
import ChallengeHeader from './ChallengeHeader';
import { ChapterChallenge } from '@/data/bible/types';
import { bibleBooks } from '@/data/bible';
import { BibleChallengeState } from '@/hooks/bible/use-bible-challenge';

interface ChallengeFeedbackProps {
  state: BibleChallengeState;
  bookId: string;
  chapter: string;
  onSelectAnswer: (answer: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onRetry: () => void;
  onGoBack: () => void;
}

const ChallengeFeedback: React.FC<ChallengeFeedbackProps> = ({
  state,
  bookId,
  chapter,
  onSelectAnswer,
  onCheckAnswer,
  onNextQuestion,
  onRetry,
  onGoBack
}) => {
  const { 
    challenge, 
    currentQuestion, 
    userAnswers, 
    showExplanation, 
    isCorrect, 
    score, 
    completed 
  } = state;

  if (!challenge) {
    return null;
  }

  const book = bibleBooks.find(b => b.id === bookId);
  
  if (completed) {
    return (
      <ResultsCard
        score={score}
        totalQuestions={challenge.questions.length}
        keyVerseText={challenge.key_verse_text}
        keyVerse={challenge.key_verse}
        onRestartQuiz={onRetry}
        onNavigateToBook={() => onGoBack()}
        onNavigateToBible={() => window.location.href = '/bible'}
        bookName={book?.name || ''}
      />
    );
  }

  const currentQuestionData = challenge.questions[currentQuestion];
  
  return (
    <div>
      <ChallengeHeader
        bookName={book?.name || ''}
        chapter={parseInt(chapter, 10)}
        title={challenge.title}
        currentQuestion={currentQuestion}
        totalQuestions={challenge.questions.length}
        score={score}
        onBackClick={onGoBack}
      />
      
      <QuestionCard
        question={currentQuestionData.question}
        options={currentQuestionData.options}
        correctAnswer={currentQuestionData.correctAnswer}
        selectedAnswer={userAnswers[currentQuestion] || null}
        showExplanation={showExplanation}
        isCorrect={isCorrect}
        explanation={currentQuestionData.explanation}
        onSelectAnswer={onSelectAnswer}
        onCheckAnswer={onCheckAnswer}
        onNextQuestion={onNextQuestion}
        isLastQuestion={currentQuestion === challenge.questions.length - 1}
        onNavigateBack={null}
      />
    </div>
  );
};

export default ChallengeFeedback;
