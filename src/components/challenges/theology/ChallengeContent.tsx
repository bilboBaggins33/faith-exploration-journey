
import React from 'react';
import { Card } from '@/components/ui/card';
import ChallengeHeader from './ChallengeHeader';
import ChallengeQuestionCard from './ChallengeQuestionCard';
import ChallengeResultsCard from './ChallengeResultsCard';
import ReadConfirmationSheet from '@/components/challenges/ReadConfirmationSheet';
import { useTheologyChallenge } from '@/hooks/theology/use-theology-challenge';

const ChallengeContent = () => {
  const {
    // Data
    bookInfo,
    chapterInfo,
    chapterTitle,
    passageText,
    
    // State
    showResults,
    hasReadPassage,
    isReadConfirmationOpen,
    
    // Actions
    setHasReadPassage,
    setIsReadConfirmationOpen,
  } = useTheologyChallenge();

  return (
    <>
      <ChallengeHeader 
        bookId={bookInfo.id}
        bookTitle={bookInfo.title}
        chapterTitle={chapterTitle}
        author={bookInfo.author}
        chapter={parseInt(chapterInfo?.chapter?.toString() || '1')}
        passageText={passageText}
      />

      <ReadConfirmationSheet
        open={isReadConfirmationOpen}
        onOpenChange={setIsReadConfirmationOpen}
        onConfirm={() => setHasReadPassage(true)}
        bookName={bookInfo.title}
        chapter={parseInt(chapterInfo?.chapter?.toString() || '1')}
      />

      {(hasReadPassage || showResults) && (
        <>
          {showResults ? (
            <ChallengeResultsCard />
          ) : (
            <ChallengeQuestionCard />
          )}
        </>
      )}
    </>
  );
};

export default ChallengeContent;
