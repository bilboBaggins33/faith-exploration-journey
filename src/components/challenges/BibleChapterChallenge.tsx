
import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';
import ChallengeFeedback from './bible/ChallengeFeedback';
import { useBibleChallenge } from '@/hooks/bible/use-bible-challenge';

const BibleChapterChallenge: React.FC = () => {
  const { bookId = '', chapter = '' } = useParams<{ bookId: string; chapter: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  
  const {
    state,
    isFirstChapter,
    handleSelectAnswer,
    handleCheckAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleRetry,
    handleGoBack
  } = useBibleChallenge(bookId, chapter);
  
  // Redirect to auth if not logged in and not first chapter
  useEffect(() => {
    if (!user && !isFirstChapter && !state.loading) {
      navigate('/auth', { state: { from: location.pathname } });
    }
  }, [user, isFirstChapter, state.loading, navigate, location.pathname]);
  
  // Show loading while redirecting or checking auth
  if (!user && !isFirstChapter) {
    return null; // Will redirect via useEffect
  }
  
  if (state.loading) {
    return <LoadingState />;
  }
  
  if (state.error) {
    return <ErrorState description={state.error} onGoBack={handleGoBack} />;
  }
  
  if (!state.challenge) {
    return <ErrorState description="Challenge not found." onGoBack={handleGoBack} />;
  }
  
  return (
    <ChallengeFeedback
      state={state}
      bookId={bookId}
      chapter={chapter}
      onSelectAnswer={handleSelectAnswer}
      onCheckAnswer={handleCheckAnswer}
      onNextQuestion={handleNextQuestion}
      onPreviousQuestion={handlePreviousQuestion}
      onRetry={handleRetry}
      onGoBack={handleGoBack}
    />
  );
};

export default BibleChapterChallenge;
