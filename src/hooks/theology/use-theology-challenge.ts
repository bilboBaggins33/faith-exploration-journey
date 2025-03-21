
import { useTheologyChallengeData } from './use-theology-challenge-data';
import { useTheologyChallengeState } from './use-theology-challenge-state';
import { useTheologyChallengeActions } from './use-theology-challenge-actions';

export const useTheologyChallenge = () => {
  const data = useTheologyChallengeData();
  const { 
    currentQuestion,
    selectedAnswers,
    isSubmitted,
    score,
    maxScore,
    showResults,
    hasReadPassage,
    isReadConfirmationOpen,
    setHasReadPassage,
    setIsReadConfirmationOpen,
    challenge,
    bookInfo,
    chapterInfo
  } = useTheologyChallengeState();
  
  const {
    handleSelectAnswer,
    handleSubmitAnswer,
    handleNextQuestion,
    handleFinish,
    handleRetake,
    navigateToBook
  } = useTheologyChallengeActions();

  return {
    // Data
    challenge,
    bookInfo,
    chapterInfo,
    chapterTitle: data.chapterTitle,
    passageText: data.passageText,
    
    // State
    currentQuestion,
    selectedAnswers,
    isSubmitted,
    score,
    maxScore,
    showResults,
    hasReadPassage,
    isReadConfirmationOpen,
    
    // Loading states
    isLoading: data.isLoading,
    error: data.error,
    
    // Actions
    handleSelectAnswer,
    handleSubmitAnswer,
    handleNextQuestion,
    handleFinish,
    handleRetake,
    setHasReadPassage,
    setIsReadConfirmationOpen,
    navigateToBook
  };
};
