import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import QuestionCard from './QuestionCard';
import { useNavigate } from 'react-router-dom';
import ResultsCard from './ResultsCard';
import { bibleBooks } from '@/data/bible';
import { theologyBooks } from '@/data/theology';
import { BibleChallengeState } from '@/hooks/bible/use-bible-challenge';
import { getBookImage } from '@/data/bible/book-images';
import { getTheologyBookImage } from '@/data/theology/book-images';

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
  const navigate = useNavigate();

  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!headerRef.current) return;
    const el = headerRef.current;

    // Blur the active element to avoid the browser keeping the clicked button in view
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Scroll after layout settles to avoid scroll anchoring on Next
    // requestAnimationFrame(() => {
    //   requestAnimationFrame(() => {
    //     const y = el.getBoundingClientRect().top + window.scrollY - 8; // slight offset
    //     window.scrollTo({ top: y, behavior: 'smooth' });

    //     // Move focus to the header (without additional scrolling) for accessibility
    //     setTimeout(() => {
    //       el.focus?.({ preventScroll: true } as any);
    //     }, 200);
    //   });
    // });
  }, [currentQuestion]);

  if (!challenge) {
    return null;
  }

  const book = bibleBooks.find(b => b.id === bookId);
  const theologyBook = theologyBooks.find(b => b.id === bookId);
  const bookName = book?.name || theologyBook?.title || '';

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
        bookId={bookId}
        chapter={chapter}
      />
    );
  }

  const currentQuestionData = challenge.questions[currentQuestion];

  const handleBackToBookPage = () => {
    if (theologyBook) {
      navigate(`/theology/${bookId}`);
    } else {
      navigate(`/bible/${(book?.name || '').toLowerCase().replace(/\s+/g, '')}`);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Blurred background */}
      <div className="fixed inset-0 -z-10">
        <img
          src={imageError ? '/assets/bible/default.jpg' : (theologyBook ? getTheologyBookImage(bookId) : getBookImage(bookId))}
          alt={`${bookName || 'Book'} background`}
          className="w-full h-full object-cover blur-sm scale-110"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Back button */}
      {/* <button
        onClick={onGoBack}
        className="absolute top-4 left-4 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
        aria-label="Back to book"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button> */}

      {/* Main content card */}
      <div className="flex items-center justify-center p-4 pt-2 pb-12">
        <div ref={headerRef} className="w-full max-w-2xl backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden" tabIndex={-1}>
          {/* Header section with book info */}
          <div className="relative overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src={imageError ? '/assets/bible/default.jpg' : (theologyBook ? getTheologyBookImage(bookId) : getBookImage(bookId))}
                alt={`${bookName || 'Book'} background`}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content over background */}
            <div className="relative z-10 p-5 pt-2 pb-4">
              <div className="mb-4">
                <button
                  onClick={handleBackToBookPage}
                  className="text-white/90 hover:text-white transition-colors inline-flex items-center mb-3 text-sm"
                >
                  <span className="mr-1">←</span> Back
                </button>
                <h1 className="text-2xl leading-tight font-bold font-serif text-white drop-shadow-lg">{bookName}</h1>
                <p className="text-md leading-tight text-white/90 drop-shadow">Chapter {parseInt(chapter, 10)}</p>
              </div>

              {/* Progress and Score */}
              <div className="flex justify-between items-center text-sm text-white/80 mb-2">
                <span>Question {currentQuestion + 1} of {challenge.questions.length}</span>
                <span className="font-semibold">
                  Score: <span className="text-white">{score}/{challenge.questions.length}</span>
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${((currentQuestion + 1) / challenge.questions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Question content */}
          <div className="px-6 pb-6 bg-white">
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
      </div>
    </div>
  );
};

export default ChallengeFeedback;
