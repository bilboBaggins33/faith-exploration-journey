
import React from 'react';
import { useBibleChallenges } from '@/hooks/bible/use-bible-challenges';
import { useAuth } from '@/context/auth';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import LoginRequired from './LoginRequired';

interface ChallengeStateProps {
  bookId: string;
  chapter: number;
  children: React.ReactNode;
}

const ChallengeState = ({ bookId, chapter, children }: ChallengeStateProps) => {
  const { data, isLoading, isError } = useBibleChallenges(bookId, chapter);
  const { user } = useAuth();

  // Allow access to first chapter of each book without login
  const isFirstChapter = chapter === 1;
  
  // If not logged in and not the first chapter, require login
  if (!user && !isFirstChapter) {
    return <LoginRequired />;
  }

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState 
      title="Failed to load challenge"
      description="There was a problem loading the challenge data. Please try again later."
      actionText="Go back"
      actionRoute={`/bible/${bookId}`}
    />;
  }

  if (!data || !data.questions || data.questions.length === 0) {
    return (
      <ErrorState 
        title="No Challenge Available"
        description="There is no challenge available for this chapter yet."
        actionText="Return to book"
        actionRoute={`/bible/${bookId}`}
      />
    );
  }

  return <>{children}</>;
};

// Export a hook that can be used to access the challenge state
export const useChallengeState = () => {
  // This is a placeholder for future implementation
  // In a real app, this would contain the challenge state management logic
  return {
    book: null,
    challenge: null,
    loading: true,
    currentQuestion: 0,
    quizCompleted: false,
    selectedAnswer: null,
    showExplanation: false,
    isCorrect: false,
    score: 0,
    currentQuestionData: null,
    handleAnswerSelect: () => {},
    checkAnswer: () => {},
    nextQuestion: () => {},
    restartQuiz: () => {},
    navigateToBookPage: () => {},
    navigateToBibleExplorer: () => {},
  };
};

export default ChallengeState;
