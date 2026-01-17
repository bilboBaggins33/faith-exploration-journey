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
    showExplanation, // Note: this global state might conflict if we want per-card explanation state. 
    // But the hook updates global state based on current question.
    // In a scroll view, "current question" is the one in view.
    isCorrect,
    score,
    completed,
    answeredQuestions
  } = state;
  const navigate = useNavigate();

  // Scroll to current question when it changes externally (e.g. initial load or skip)
  useEffect(() => {
    if (containerRef.current && challenge) {
      const el = containerRef.current.children[currentQuestion] as HTMLElement;
      if (el) {
        // Only scroll if not already visible? 
        // Actually, we want to sync scroll position with state.
        // But if the user scrolled, that triggered the state change, so scrolling back is redundant and might cause jitter.
        // We need a flag or check.
        // For now, let's trust the observer to handle state updates from scroll, 
        // and only programmatic updates (like "Next") should trigger scroll.
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
            // Only update if different to prevent loops
            // Debouncing might be good but let's try direct first.
            // We need to access the LATEST currentQuestion, so we should rely on the state passed in props or a ref.
            // But here we just fire the event.
            onJumpToQuestion(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.6 // Must be 60% visible to count as "current"
      }
    );

    Array.from(container.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [challenge, onJumpToQuestion]); // Dependencies should be stable

  // Scroll to first card on mount to ensure it's centered
  useEffect(() => {
    if (containerRef.current && challenge && challenge.questions.length > 0) {
      const firstEl = containerRef.current.children[0] as HTMLElement;
      if (firstEl) {
        // Use requestAnimationFrame to ensure DOM is ready
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
        // Last question - maybe complete?
        onNextQuestion(); // This triggers completion logic in hook
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
    if (theologyBook) {
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
          className="w-full h-full object-cover blur-sm scale-110"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="w-full h-full flex md:flex-row flex-col overflow-y-auto md:overflow-x-auto snap-y md:snap-x snap-mandatory scrollbar-hide py-16 md:py-0 md:items-center"
      >
        {challenge.questions.map((q, index) => {
          const isAnswered = !!userAnswers[index];
          const answerState = answeredQuestions[index];
          const localIsCorrect = answerState ? answerState.isCorrect : null;
          // Only show explanation if we have explicitly checked the answer (answerState exists)
          const localShowExplanation = !!answerState;

          return (
            <div
              key={q.id}
              data-index={index}
              className="w-full flex-shrink-0 snap-center md:snap-center p-4 md:p-8 flex items-center justify-center min-h-[80vh] md:min-h-screen"
            >
              <div className="w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden backdrop-blur-md bg-white/20 border border-white/30" tabIndex={-1}>
                {/* Logo centered on top */}
                <div className="flex justify-center py-4 bg-gradient-to-b from-black/20 to-transparent">
                  <img 
                    src="/BibleQuestLogoDark.png" 
                    alt="BibleQuest Logo" 
                    className="h-10 w-auto drop-shadow-lg"
                  />
                </div>
                
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
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
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
                      <span>Question {index + 1} of {challenge.questions.length}</span>
                      <span className="font-semibold">
                        Score: <span className="text-white">{score}/{challenge.questions.length}</span>
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${((index + 1) / challenge.questions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Question content */}
                <div className="px-6 pb-6 bg-white/95 backdrop-blur-sm">
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
          );
        })}

      </div>

      {/* Desktop Navigation Arrows */}
      <div className="hidden md:block">
        {currentQuestion > 0 && (
          <button
            onClick={() => handleScrollToPrev(currentQuestion)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white transition-all hover:scale-110"
            aria-label="Previous question"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
        )}

        {currentQuestion < (challenge?.questions.length || 0) - 1 && (
          <button
            onClick={() => handleScrollToNext(currentQuestion)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white transition-all hover:scale-110"
            aria-label="Next question"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ChallengeFeedback;
