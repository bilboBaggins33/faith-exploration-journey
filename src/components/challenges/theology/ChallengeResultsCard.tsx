
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ChallengeResults from './ChallengeResults';
import { useTheologyChallenge } from '@/hooks/theology/use-theology-challenge';

const ChallengeResultsCard = () => {
  const {
    // Data
    challenge,
    bookInfo,
    chapterInfo,
    chapterTitle,
    
    // State
    score,
    maxScore,
    
    // Actions
    handleRetake,
    navigateToBook
  } = useTheologyChallenge();

  return (
    <Card className="mb-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Challenge Complete!</CardTitle>
        <CardDescription>
          You've completed the challenge for {bookInfo.title}: {chapterTitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChallengeResults
          score={score}
          maxScore={maxScore}
          onRetake={handleRetake}
          onContinue={navigateToBook}
          bookTitle={bookInfo.title}
          chapterTitle={chapterTitle}
          keyQuote={challenge.key_quote}
          keyQuoteLocation={challenge.key_quote_location}
          keyThemes={chapterInfo?.key_themes || []}
        />
      </CardContent>
    </Card>
  );
};

export default ChallengeResultsCard;
