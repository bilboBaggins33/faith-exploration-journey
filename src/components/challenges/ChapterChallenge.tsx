import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';
import ChallengeFeedback from './bible/ChallengeFeedback';
import { useBibleChallenge } from '@/hooks/bible/use-bible-challenge';
import { useTheologyChallengeAdapter } from '@/hooks/theology/use-theology-challenge-adapter';

interface ChapterChallengeProps {
  type: 'bible' | 'theology';
}

const ChapterChallengeComponent: React.FC<ChapterChallengeProps> = ({ type }) => {
  const { bookId = '', chapter = '' } = useParams<{ bookId: string; chapter: string }>();

  const bibleChallenge = useBibleChallenge(bookId, chapter);
  const theologyChallenge = useTheologyChallengeAdapter();

  const {
    state,
    handleSelectAnswer,
    handleCheckAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleJumpToQuestion,
    handleRetry,
    handleGoBack,
  } = type === 'bible' ? bibleChallenge : theologyChallenge;

  if (state.loading) {
    return <LoadingState type={type} />;
  }

  if (state.error || !state.challenge) {
    return (
      <ErrorState
        type={type}
        description={state.error || 'Challenge not found.'}
        onGoBack={handleGoBack}
      />
    );
  }

  return (
    <div className="w-full">
      <ChallengeFeedback
        state={state}
        bookId={bookId}
        chapter={chapter}
        onSelectAnswer={handleSelectAnswer}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={handleNextQuestion}
        onPreviousQuestion={handlePreviousQuestion}
        onJumpToQuestion={handleJumpToQuestion}
        onRetry={handleRetry}
        onGoBack={handleGoBack}
      />
    </div>
  );
};

export default ChapterChallengeComponent;
