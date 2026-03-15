import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import QuestionCard from './QuestionCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  onSelectAnswer: (answer: string, index?: number) => void;
  onCheckAnswer: (index?: number) => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
  onJumpToQuestion: (index: number) => void;
  onRetry: () => void;
  onGoBack: () => void;
}

const CardContainer = React.memo(({
  q,
  index,
  userAnswers,
  answeredQuestions,
  challenge,
  onSelectAnswer,
  onCheckAnswer,
  handleScrollToNext,
  handleScrollToPrev
}: any) => {
  const answerState = answeredQuestions[index];
  const localIsCorrect = answerState ? answerState.isCorrect : null;
  const localShowExplanation = !!answerState;

  // Stable handlers for QuestionCard
  const handleSelect = useCallback((ans: string) => onSelectAnswer(ans, index), [onSelectAnswer, index]);
  const handleCheck = useCallback(() => onCheckAnswer(index), [onCheckAnswer, index]);
  const handleNext = useCallback(() => handleScrollToNext(index), [handleScrollToNext, index]);
  const handlePrev = useCallback(() => handleScrollToPrev(index), [handleScrollToPrev, index]);

  return (
    <div
      key={q.id}
      data-index={index}
      className="w-full flex-shrink-0 snap-center px-4 md:px-8 py-2 flex items-center justify-center h-dvh"
    >
      <div className="w-full max-w-[92vw] sm:max-w-sm relative" tabIndex={-1}>
        {/* Card container */}

        {/* Semi-transparent dark bg for contrast with white text */}
        <div className="bg-black/20 backdrop-blur-md rounded-[28px] md:rounded-[32px] shadow-2xl border border-white/20 overflow-hidden">
          {/* Question Numbers inside card */}
          <div className="pt-9 md:pt-10 pb-3 md:pb-4 px-4 md:px-6">
            <div className="flex items-center justify-center gap-3 md:gap-4">
              {challenge.questions.map((_: any, qIndex: number) => {
                const questionResult = answeredQuestions[qIndex];
                const isAnswered = !!questionResult;
                const isCorrectNum = questionResult?.isCorrect;
                const isCurrent = qIndex === index;

                let colorClass = 'text-white/50 bg-white/10 border border-white/20';
                if (isAnswered) {
                  colorClass = isCorrectNum ? 'text-green-400 bg-green-400/15 border border-green-400/30' : 'text-red-400 bg-red-100 border border-red-400/30';
                } else if (isCurrent) {
                  colorClass = 'text-white bg-white/20 border border-white/40';
                }

                return (
                  <span
                    key={qIndex}
                    className={`w-7 h-7 md:w-8 md:h-8 rounded-full inline-flex items-center justify-center text-xs md:text-sm font-semibold transition-all duration-200 ${colorClass}`}
                  >
                    {qIndex + 1}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Question Content */}
          <div className="px-4 md:px-6 pb-5 md:pb-6">
            <QuestionCard
              question={q.question}
              options={q.options}
              correctAnswer={q.correctAnswer}
              selectedAnswer={userAnswers[index] || null}
              showExplanation={localShowExplanation}
              isCorrect={localIsCorrect}
              explanation={q.explanation}
              onSelectAnswer={handleSelect}
              onCheckAnswer={handleCheck}
              onNextQuestion={handleNext}
              onPreviousQuestion={handlePrev}
              isLastQuestion={index === challenge.questions.length - 1}
              isNotFirstQuestion={index > 0}
              onNavigateBack={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

const ChallengeFeedback: React.FC<ChallengeFeedbackProps> = ({
  state,
  bookId,
  chapter,
  onSelectAnswer,
  onCheckAnswer,
  onNextQuestion,
  onPreviousQuestion,
  onJumpToQuestion,
  onRetry,
  onGoBack
}) => {
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const jumpTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const {
    challenge,
    currentQuestion,
    userAnswers,
    showExplanation,
    isCorrect,
    score,
    completed,
    answeredQuestions,
    difficulty
  } = state as typeof state & { difficulty?: string };
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fromDaily = searchParams.get('from') === 'daily';

  // Debounced jump to question – prevents rapid state updates from IntersectionObserver
  const debouncedJump = useCallback(
    (index: number) => {
      if (jumpTimerRef.current) clearTimeout(jumpTimerRef.current);
      jumpTimerRef.current = setTimeout(() => {
        onJumpToQuestion(index);
      }, 80);
    },
    [onJumpToQuestion]
  );

  // Cleanup debounce timer
  useEffect(() => {
    return () => {
      if (jumpTimerRef.current) clearTimeout(jumpTimerRef.current);
    };
  }, []);

  // Scroll to current question when it changes externally
  useEffect(() => {
    if (containerRef.current && challenge) {
      const el = containerRef.current.children[currentQuestion] as HTMLElement;
      if (el) {
        // Sync scroll position with state
      }
    }
  }, [currentQuestion, challenge]);

  // Observer to track visible card
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !challenge) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            debouncedJump(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.55
      }
    );

    Array.from(container.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [challenge, debouncedJump]);

  // Scroll to first card on mount
  useEffect(() => {
    if (containerRef.current && challenge && challenge.questions.length > 0) {
      const firstEl = containerRef.current.children[0] as HTMLElement;
      if (firstEl) {
        requestAnimationFrame(() => {
          firstEl.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' });
        });
      }
    }
  }, [challenge]);

  const handleScrollToNext = useCallback((index: number) => {
    // Only allow scrolling to next if current question is answered
    const currentAnswered = !!answeredQuestions[index];
    if (!currentAnswered) return;
    
    if (containerRef.current) {
      const nextIndex = index + 1;
      if (nextIndex < (challenge?.questions.length || 0)) {
        const nextEl = containerRef.current.children[nextIndex] as HTMLElement;
        nextEl?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      } else {
        onNextQuestion();
      }
    }
  }, [answeredQuestions, challenge, onNextQuestion]);

  const handleScrollToPrev = useCallback((index: number) => {
    if (containerRef.current) {
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        const prevEl = containerRef.current.children[prevIndex] as HTMLElement;
        prevEl?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }
    }
  }, []);

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

  const handleBackToBookPage = () => {
    if (fromDaily) {
      navigate('/daily-reading');
    } else if (theologyBook) {
      navigate(`/theology/${bookId}`);
    } else {
      navigate(`/bible/${(book?.name || '').toLowerCase().replace(/\s+/g, '')}`);
    }
  };

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src={imageError ? '/assets/bible/default.jpg' : (theologyBook ? getTheologyBookImage(bookId) : getBookImage(bookId))}
          alt={`${bookName || 'Book'} background`}
          className="w-full h-full object-cover scale-110"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Sticky top header — shown once, not per card */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
        <div className="flex justify-between items-center px-4 pt-3 pb-2 pointer-events-auto">
          <button
            onClick={handleBackToBookPage}
            className="text-white/90 hover:text-white transition-colors inline-flex items-center text-sm backdrop-blur-sm bg-black/20 rounded-full px-3 py-1.5"
          >
            <span className="mr-1">←</span> Back
          </button>
          <div className="flex items-center gap-2">
            <span className="text-white/90 text-sm font-medium backdrop-blur-sm bg-black/20 rounded-full px-3 py-1.5">
              {bookName} {chapter}
            </span>
            {difficulty && (
              <span className={`text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm ${difficulty === 'easy' ? 'bg-green-500/30 text-green-300 border border-green-400/40' :
                difficulty === 'medium' ? 'bg-amber-500/30 text-amber-300 border border-amber-400/40' :
                  'bg-red-500/30 text-red-300 border border-red-400/40'
                }`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Fixed bottom progress dots */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <div className="flex items-center justify-center gap-2.5 pb-4 pt-6 bg-gradient-to-t from-black/30 to-transparent">
          {challenge.questions.map((_, qIndex) => {
            const questionResult = answeredQuestions[qIndex];
            const isAnswered = !!questionResult;
            const isCorrectDot = questionResult?.isCorrect;
            const isCurrent = qIndex === currentQuestion;

            let dotClass = 'bg-white/50 border border-white/40';
            if (isAnswered) {
              dotClass = isCorrectDot ? 'bg-green-400 border border-green-300/50' : 'bg-red-400 border border-red-300/50';
            } else if (isCurrent) {
              dotClass = 'bg-white border border-white/60';
            }

            return (
              <button
                key={qIndex}
                onClick={() => {
                  if (containerRef.current) {
                    const el = containerRef.current.children[qIndex] as HTMLElement;
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                  }
                }}
                className={`pointer-events-auto transition-all duration-300 rounded-full ${dotClass} ${isCurrent ? 'w-3 h-3 scale-110' : 'w-2.5 h-2.5'}`}
                aria-label={`Go to question ${qIndex + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Scroll Container - controlled scroll only */}
      <div
        ref={containerRef}
        className="w-full h-full flex flex-col overflow-y-auto snap-y snap-mandatory scrollbar-hide items-center touch-none"
        style={{ overscrollBehavior: 'none' }}
      >
        {challenge.questions.map((q, index) => (
          <CardContainer
            key={q.id || index}
            q={q}
            index={index}
            userAnswers={userAnswers}
            answeredQuestions={answeredQuestions}
            challenge={challenge}
            onSelectAnswer={onSelectAnswer}
            onCheckAnswer={onCheckAnswer}
            handleScrollToNext={handleScrollToNext}
            handleScrollToPrev={handleScrollToPrev}
          />
        ))}
      </div>

      {/* Desktop Navigation Arrows - positioned closer to card */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
        <div className="w-full max-w-xl flex justify-between px-4">
          {currentQuestion > 0 ? (
            <button
              onClick={() => handleScrollToPrev(currentQuestion)}
              className="pointer-events-auto p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white transition-all hover:scale-110"
              aria-label="Previous question"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
          ) : (
            <div />
          )}

          {currentQuestion < (challenge?.questions.length || 0) - 1 ? (
            <button
              onClick={() => handleScrollToNext(currentQuestion)}
              className="pointer-events-auto p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white transition-all hover:scale-110"
              aria-label="Next question"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeFeedback;
