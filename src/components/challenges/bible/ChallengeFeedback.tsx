import React, { useState, useEffect, useRef } from 'react';
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
  const {
    challenge,
    currentQuestion,
    userAnswers,
    showExplanation,
    isCorrect,
    score,
    completed,
    answeredQuestions
  } = state;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fromDaily = searchParams.get('from') === 'daily';

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
            onJumpToQuestion(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.6
      }
    );

    Array.from(container.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [challenge, onJumpToQuestion]);

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

  const handleScrollToNext = (index: number) => {
    if (containerRef.current) {
      const nextIndex = index + 1;
      if (nextIndex < (challenge?.questions.length || 0)) {
        const nextEl = containerRef.current.children[nextIndex] as HTMLElement;
        nextEl?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      } else {
        onNextQuestion();
      }
    }
  };

  const handleScrollToPrev = (index: number) => {
    if (containerRef.current) {
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        const prevEl = containerRef.current.children[prevIndex] as HTMLElement;
        prevEl?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }
    }
  };

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
    <div className="relative h-screen w-full overflow-hidden">
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

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="w-full h-full flex md:flex-row flex-col overflow-y-auto md:overflow-x-auto snap-y md:snap-x snap-mandatory scrollbar-hide items-center"
      >
        {challenge.questions.map((q, index) => {
          const answerState = answeredQuestions[index];
          const localIsCorrect = answerState ? answerState.isCorrect : null;
          const localShowExplanation = !!answerState;

          return (
            <div
              key={q.id}
              data-index={index}
              className="w-full flex-shrink-0 snap-center p-4 md:p-8 flex items-center justify-center min-h-screen"
            >
              <div className="w-full max-w-sm relative" tabIndex={-1}>
                {/* Header row with Back button and Book/Chapter info */}
                <div className="flex justify-between items-center mb-2">
                  <button
                    onClick={handleBackToBookPage}
                    className="text-white/90 hover:text-white transition-colors inline-flex items-center text-sm"
                  >
                    <span className="mr-1">←</span> Back
                  </button>
                  <span className="text-white/90 text-sm font-medium">
                    {bookName} {chapter}
                  </span>
                </div>

                {/* Logo overlapping the top edge */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 z-20">
                  <img
                    src="/BibleQuestLogo.png"
                    alt="Bible Quest Logo"
                    className="h-8 w-auto drop-shadow-lg"
                  />
                </div>

                {/* Glassmorphism Card */}
                <div className="backdrop-blur-xl bg-white/20 rounded-[32px] shadow-2xl border border-white/30 overflow-hidden">
                  {/* Question Numbers - colored by result */}
                  <div className="pt-10 pb-4 px-6">
                    <div className="flex items-center justify-center gap-4">
                      {challenge.questions.map((_, qIndex) => {
                        const questionResult = answeredQuestions[qIndex];
                        const isAnswered = !!questionResult;
                        const isCorrect = questionResult?.isCorrect;
                        const isCurrent = qIndex === index;

                        // Color logic: green if correct, red if wrong, white if current, gray if not answered
                        let colorClass = 'text-white/40'; // default - not answered yet
                        if (isAnswered) {
                          colorClass = isCorrect ? 'text-green-400' : 'text-red-400';
                        } else if (isCurrent) {
                          colorClass = 'text-white';
                        }

                        return (
                          <span
                            key={qIndex}
                            className={`text-lg font-semibold transition-all ${colorClass}`}
                          >
                            {qIndex + 1}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className="px-6 pb-6">
                    <QuestionCard
                      question={q.question}
                      options={q.options}
                      correctAnswer={q.correctAnswer}
                      selectedAnswer={userAnswers[index] || null}
                      showExplanation={localShowExplanation}
                      isCorrect={localIsCorrect}
                      explanation={q.explanation}
                      onSelectAnswer={(ans) => {
                        onSelectAnswer(ans, index);
                      }}
                      onCheckAnswer={() => {
                        onCheckAnswer(index);
                      }}
                      onNextQuestion={() => handleScrollToNext(index)}
                      onPreviousQuestion={() => handleScrollToPrev(index)}
                      isLastQuestion={index === challenge.questions.length - 1}
                      isNotFirstQuestion={index > 0}
                      onNavigateBack={null}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
