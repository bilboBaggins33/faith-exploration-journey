
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import ChallengeSkeleton from './bible/ChallengeSkeleton';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';
import LoginRequired from './bible/LoginRequired';
import ChallengeFeedback from './bible/ChallengeFeedback';
import { useBibleChallenge } from '@/hooks/bible/use-bible-challenge';

const BibleChapterChallenge: React.FC = () => {
  const { bookId = '', chapter = '' } = useParams<{ bookId: string; chapter: string }>();
  const { user } = useAuth();
  
  const {
    state,
    isFirstChapter,
    handleSelectAnswer,
    handleCheckAnswer,
    handleNextQuestion,
    handleRetry,
    handleGoBack
  } = useBibleChallenge(bookId, chapter);
  
  if (!user && !isFirstChapter) {
    return <LoginRequired />;
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
      onRetry={handleRetry}
      onGoBack={handleGoBack}
    />
  );
};

export default BibleChapterChallenge;
