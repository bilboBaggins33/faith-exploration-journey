
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { ChapterChallenge } from '@/data/bible/types';
import { useToast } from '@/hooks/use-toast';

interface ChallengeStateProps {
  challenge: ChapterChallenge;
}

export const useChallengeState = ({ challenge }: ChallengeStateProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const { completeChallenge } = useBibleProgress();
  const { toast } = useToast();
  
  // Initialize the challenge state
  useEffect(() => {
    if (challenge) {
      setLoading(false);
    }
  }, [challenge]);
  
  const currentQuestionData = challenge?.questions?.[currentQuestion];
  
  const handleAnswerSelect = (answer: string) => {
    if (!showExplanation) {
      setSelectedAnswer(answer);
    }
  };
  
  const checkAnswer = () => {
    if (!selectedAnswer || !currentQuestionData) return;
    
    const correct = selectedAnswer === currentQuestionData.correctAnswer;
    setIsCorrect(correct);
    setShowExplanation(true);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
  };
  
  const nextQuestion = () => {
    if (currentQuestion < challenge.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsCorrect(false);
    } else {
      // Quiz completed
      setQuizCompleted(true);
      
      // Save progress
      if (challenge?.id) {
        completeChallenge(challenge.id, score + (isCorrect ? 1 : 0))
          .then(() => {
            toast({
              title: "Progress saved!",
              description: `You completed this chapter challenge with a score of ${score + (isCorrect ? 1 : 0)}/${challenge.questions.length}`,
            });
          })
          .catch((error) => {
            console.error("Error saving progress:", error);
            toast({
              title: "Failed to save progress",
              description: "Please try again later",
              variant: "destructive",
            });
          });
      }
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(false);
    setScore(0);
  };
  
  const navigateToBookPage = () => {
    if (challenge?.bookId) {
      navigate(`/bible/${challenge.bookId}`);
    }
  };
  
  const navigateToBibleExplorer = () => {
    navigate('/bible');
  };
  
  return {
    // Data
    loading,
    currentQuestion,
    quizCompleted,
    selectedAnswer,
    showExplanation,
    isCorrect,
    score,
    currentQuestionData,
    
    // Actions
    handleAnswerSelect,
    checkAnswer,
    nextQuestion,
    restartQuiz,
    navigateToBookPage,
    navigateToBibleExplorer
  };
};

export default useChallengeState;
