
import { useTheologyChallengeData } from './use-theology-challenge-data';
import { useTheologyChallengeState } from './use-theology-challenge-state';
import { useTheologyChallengeActions } from './use-theology-challenge-actions';

export const useTheologyChallenge = () => {
  const data = useTheologyChallengeData();
  const state = useTheologyChallengeState();
  const actions = useTheologyChallengeActions(state);

  return {
    // Data
    challenge: state.challenge,
    bookInfo: state.bookInfo,
    chapterInfo: state.chapterInfo,
    chapterTitle: data.chapterTitle,
    passageText: data.passageText,

    // State
    currentQuestion: state.currentQuestion,
    selectedAnswers: state.selectedAnswers,
    isSubmitted: state.isSubmitted,
    score: state.score,
    maxScore: state.maxScore,
    showResults: state.showResults,
    hasReadPassage: state.hasReadPassage,
    isReadConfirmationOpen: state.isReadConfirmationOpen,

    // Loading states
    isLoading: data.isLoading,
    error: data.error,

    // Actions
    handleSelectAnswer: actions.handleSelectAnswer,
    handleSubmitAnswer: actions.handleSubmitAnswer,
    handleNextQuestion: actions.handleNextQuestion,
    handleFinish: actions.handleFinish,
    handleRetake: actions.handleRetake,
    setHasReadPassage: state.setHasReadPassage,
    setIsReadConfirmationOpen: state.setIsReadConfirmationOpen,
    navigateToBook: actions.navigateToBook
  };
};
