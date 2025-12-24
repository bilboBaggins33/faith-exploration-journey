
import { useTheologyChallengeState } from './use-theology-challenge-state';
import { isSupabaseConfigured } from '@/lib/supabase';

export const useTheologyChallengeActions = (state: any) => {
  const {
    currentQuestion,
    selectedAnswers,
    setSelectedAnswers,
    setIsSubmitted,
    score,
    setScore,
    setCurrentQuestion,
    setShowResults,
    challenge,
    completeChallenge,
    bookId,
    chapter,
    toast,
    navigate
  } = state;

  // Handle answer selection
  const handleSelectAnswer = (answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  // Handle answer submission
  const handleSubmitAnswer = () => {
    if (!challenge) return;

    if (selectedAnswers[currentQuestion] === '') {
      toast({
        title: "Select an answer",
        description: "Please select an answer before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);

    if (selectedAnswers[currentQuestion] === challenge.questions[currentQuestion].correctAnswer) {
      const pointsPerQuestion = challenge.points / challenge.questions.length;
      setScore(prevScore => prevScore + pointsPerQuestion);
    }
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (!challenge) return;

    if (currentQuestion < (challenge.questions.length || 0) - 1) {
      setCurrentQuestion(prev => prev + 1);
      setIsSubmitted(false);
    } else {
      handleFinish();
    }
  };

  // Handle finishing the challenge
  const handleFinish = async () => {
    setShowResults(true);

    if (isSupabaseConfigured() && challenge) {
      try {
        await completeChallenge(bookId, chapter, score);
      } catch (error) {
        console.error('Error saving challenge results:', error);
        toast({
          title: "Error",
          description: "There was a problem saving your progress.",
          variant: "destructive"
        });
      }
    }
  };

  // Handle retaking the challenge
  const handleRetake = () => {
    if (!challenge) return;

    setSelectedAnswers(new Array(challenge.questions.length || 0).fill(''));
    setCurrentQuestion(0);
    setScore(0);
    setIsSubmitted(false);
    setShowResults(false);
  };

  // Navigation helpers
  const navigateToBook = () => navigate(`/theology/${bookId}`);

  return {
    handleSelectAnswer,
    handleSubmitAnswer,
    handleNextQuestion,
    handleFinish,
    handleRetake,
    navigateToBook
  };
};
