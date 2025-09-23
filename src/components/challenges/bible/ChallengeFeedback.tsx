import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuestionCard from './QuestionCard';
import ResultsCard from './ResultsCard';
import ChallengeHeader from './ChallengeHeader';
import { ChapterChallenge } from '@/data/bible/types';
import { bibleBooks } from '@/data/bible';
import { BibleChallengeState } from '@/hooks/bible/use-bible-challenge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getBookImage } from '@/data/bible/book-images';

interface ChallengeFeedbackProps {
  state: BibleChallengeState;
  bookId: string;
  chapter: string;
  onSelectAnswer: (answer: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
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
  onPreviousQuestion,
  onRetry,
  onGoBack
}) => {
  const [imageError, setImageError] = useState(false);
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
      <div className="mb-6 relative">
        {/* Back arrow button */}
        <button
          onClick={onGoBack}
          className="absolute top-3 left-3 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
          aria-label="Back to book"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden mb-4 relative">
          <img 
            src={imageError ? '/assets/bible/default.jpg' : getBookImage(bookId)} 
            alt={`${book?.name || 'Bible book'} cover`}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          {/* Overlayed book name and chapter */}
          <div className="absolute left-4 bottom-4 text-white drop-shadow font-serif">
            <div className="text-4xl font-bold mb-1">{book?.name}</div>
            <div className="text-lg">Chapter {parseInt(chapter, 10)}</div>
          </div>
        </AspectRatio>
      </div>
      <div className="px-4">
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
          onPreviousQuestion={onPreviousQuestion}
          isLastQuestion={currentQuestion === challenge.questions.length - 1}
          isNotFirstQuestion={currentQuestion > 0}
          onNavigateBack={null}
        />
      </div>
    </div>
  );
};

export default ChallengeFeedback;
