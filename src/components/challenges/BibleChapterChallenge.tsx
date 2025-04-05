
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';
import { ChapterChallenge } from '@/data/bible/types';
import { BibleBook } from '@/data/bible/books';

// Import our components
import ChallengeSkeleton from './bible/ChallengeSkeleton';
import ChallengeHeader from './bible/ChallengeHeader';
import QuestionCard from './bible/QuestionCard';
import ResultsCard from './bible/ResultsCard';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';
import LoginRequired from './bible/LoginRequired';
import { useChallengeState } from './bible/ChallengeState';
import { useNavigate } from 'react-router-dom';

interface BibleChapterChallengeProps {
  book?: BibleBook;
  challenge: ChapterChallenge;
}

const BibleChapterChallenge = ({ book, challenge }: BibleChapterChallengeProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const {
    // Data
    loading,
    currentQuestion,
    quizCompleted,
    selectedAnswer,
    showExplanation,
    isCorrect,
    score,
    currentQuestionData,
    
    // Actions
    handleAnswerSelect,
    checkAnswer,
    nextQuestion,
    restartQuiz,
    navigateToBookPage,
    navigateToBibleExplorer
  } = useChallengeState({ challenge });
  
  // Conditional rendering logic
  if (loading) {
    return <LoadingState />;
  }
  
  if (!challenge) {
    return (
      <ErrorState 
        title="Challenge Not Available"
        description="This Bible chapter challenge hasn't been created yet."
        actionText="Return to Bible Explorer"
        actionRoute="/bible"
      />
    );
  }
  
  // Allow non-logged in users to access chapter 1 of any book
  const isFirstChapter = Number(challenge.chapter) === 1;
  
  // Only require login for non-first chapters
  if (!user && !isFirstChapter) {
    return <LoginRequired />;
  }
  
  return (
    <ChallengeSkeleton>
      {/* Challenge content */}
      <AnimatePresence mode="wait">
        {!quizCompleted && currentQuestionData ? (
          <QuestionCard
            question={currentQuestionData.question}
            options={currentQuestionData.options}
            correctAnswer={currentQuestionData.correctAnswer}
            selectedAnswer={selectedAnswer}
            showExplanation={showExplanation}
            isCorrect={isCorrect}
            explanation={currentQuestionData.explanation}
            onSelectAnswer={handleAnswerSelect}
            onCheckAnswer={checkAnswer}
            onNextQuestion={nextQuestion}
            isLastQuestion={currentQuestion === challenge.questions.length - 1}
            onNavigateBack={() => navigate(-1)}
          />
        ) : quizCompleted && challenge ? (
          <ResultsCard
            score={isCorrect ? score + 1 : score}
            totalQuestions={challenge.questions.length}
            keyVerseText={challenge.key_verse_text}
            keyVerse={challenge.key_verse}
            onRestartQuiz={restartQuiz}
            onNavigateToBook={navigateToBookPage}
            onNavigateToBible={navigateToBibleExplorer}
            bookName={book?.name || ''}
            showSignUpPrompt={!user}
          />
        ) : (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bible-blue mx-auto mb-4"></div>
            <p>Loading challenge...</p>
          </div>
        )}
      </AnimatePresence>
    </ChallengeSkeleton>
  );
};

export default BibleChapterChallenge;
