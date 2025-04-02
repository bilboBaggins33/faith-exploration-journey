
import React from 'react';
import ResultsScore from './results/ResultsScore';
import ResultsTabs from './results/ResultsTabs';
import ResultsActions from './results/ResultsActions';

interface ChallengeResultsProps {
  score: number;
  maxScore: number;
  onRetake: () => void;
  onContinue: () => void;
  bookTitle: string;
  chapterTitle: string;
  keyQuote: string;
  keyQuoteLocation: string;
  keyThemes: string[];
}

const ChallengeResults: React.FC<ChallengeResultsProps> = ({
  score,
  maxScore,
  onRetake,
  onContinue,
  bookTitle,
  chapterTitle,
  keyQuote,
  keyQuoteLocation,
  keyThemes = []
}) => {
  // Calculate score percentage
  const scorePercentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
  
  return (
    <div>
      <ResultsScore 
        score={score} 
        maxScore={maxScore} 
      />

      <ResultsTabs 
        keyThemes={keyThemes}
        keyQuote={keyQuote}
        keyQuoteLocation={keyQuoteLocation}
        scorePercentage={scorePercentage}
      />

      <ResultsActions 
        onRetake={onRetake} 
        onContinue={onContinue} 
      />
    </div>
  );
};

export default ChallengeResults;
