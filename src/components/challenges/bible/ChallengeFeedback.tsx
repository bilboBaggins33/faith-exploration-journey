import React, { useState, useEffect, useRef } from 'react';
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

  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!headerRef.current) return;
    const el = headerRef.current;

    // Blur the active element to avoid the browser keeping the clicked button in view
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Scroll after layout settles to avoid scroll anchoring on Next
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const y = el.getBoundingClientRect().top + window.scrollY - 8; // slight offset
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Move focus to the header (without additional scrolling) for accessibility
        setTimeout(() => {
          el.focus?.({ preventScroll: true } as any);
        }, 200);
      });
    });
  }, [currentQuestion]);

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
    <div className="min-h-screen bg-primary">
      {/* Header area - matches mobile app design */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex justify-between items-center">
          <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div className="flex space-x-1">
            <div className="w-6 h-1 bg-primary-foreground/80 rounded"></div>
            <div className="w-6 h-1 bg-primary-foreground/80 rounded"></div>
            <div className="w-6 h-1 bg-primary-foreground/80 rounded"></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 pb-4 -mt-2">
        <div ref={headerRef} className="bg-secondary rounded-t-2xl shadow-lg" tabIndex={-1}>
          {/* Book title section */}
          <div className="px-6 pt-6 pb-4">
            <h1 className="text-3xl font-bold font-serif text-secondary-foreground">{book?.name}</h1>
            <p className="text-lg text-secondary-foreground/80">Chapter {parseInt(chapter, 10)}</p>
            
            {/* Question and Score info */}
            <div className="flex justify-between items-center mt-4 mb-3">
              <span className="text-sm text-secondary-foreground/70">Question {currentQuestion + 1} of {challenge.questions.length}</span>
              <span className="text-sm text-secondary-foreground/70">
                Score: <span className="font-semibold text-secondary-foreground">{score}/{challenge.questions.length}</span>
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-secondary-foreground/20 rounded-full h-2">
              <div 
                className="bg-secondary-foreground h-2 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${((currentQuestion + 1) / challenge.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question content */}
          <div className="px-6 pb-6">
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
              onNavigateBack={onGoBack}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeFeedback;
