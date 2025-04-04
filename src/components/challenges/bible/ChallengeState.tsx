
import React from 'react';
import { useBibleChallenges } from '@/hooks/bible/use-bible-challenges';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import { sampleChapterChallenges } from '@/data/bible';

interface ChallengeStateProps {
  bookId: string;
  chapter: number;
  children: React.ReactNode;
}

const ChallengeState = ({ bookId, chapter, children }: ChallengeStateProps) => {
  const { data, isLoading, isError } = useBibleChallenges(bookId, chapter);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState message="Failed to load challenge" />;
  }

  if (!data || !data.questions || data.questions.length === 0) {
    return (
      <ErrorState 
        title="No Challenge Available"
        message="There is no challenge available for this chapter yet."
      />
    );
  }

  return <>{children}</>;
};

export default ChallengeState;
