import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';
import ChallengeFeedback from './bible/ChallengeFeedback';
import { useTheologyChallengeAdapter } from '@/hooks/theology/use-theology-challenge-adapter';

import Navbar from '@/components/Navbar';

const TheologyChapterChallenge: React.FC = () => {
  const { bookId = '', chapter = '' } = useParams<{ bookId: string; chapter: string }>();

  const {
    state,
    handleSelectAnswer,
    handleCheckAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleRetry,
    handleGoBack
  } = useTheologyChallengeAdapter();

  if (state.loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <LoadingState />
        </main>
      </div>
    );
  }

  if (state.error || !state.challenge) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4">
          <ErrorState
            description={state.error || "Challenge not found."}
            onGoBack={handleGoBack}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto">
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
        </div>
      </main>
    </div>
  );
};

export default TheologyChapterChallenge;
