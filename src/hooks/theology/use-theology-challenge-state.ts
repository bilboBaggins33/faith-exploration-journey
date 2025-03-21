
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useTheologyProgress } from '@/hooks/use-theology-progress';
import { useTheologyChallengeData } from './use-theology-challenge-data';

export const useTheologyChallengeState = () => {
  const {
    bookId,
    chapter,
    challenge,
    bookInfo,
    previouslyCompletedScore
  } = useTheologyChallengeData();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [hasReadPassage, setHasReadPassage] = useState(false);
  const [isRetaking, setIsRetaking] = useState(false);
  const [isReadConfirmationOpen, setIsReadConfirmationOpen] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();
  const { completeChallenge } = useTheologyProgress();

  // Initialize state based on challenge data
  useEffect(() => {
    if (challenge) {
      setMaxScore(challenge.points);
      setSelectedAnswers(new Array(challenge.questions.length).fill(''));
      
      if (previouslyCompletedScore !== null && !isRetaking) {
        setScore(previouslyCompletedScore);
        setShowResults(true);
      } else {
        setScore(0);
        setShowResults(false);
        setCurrentQuestion(0);
        setIsSubmitted(false);
      }
    }
    
    if (!hasReadPassage && !isRetaking && previouslyCompletedScore === null) {
      setIsReadConfirmationOpen(true);
    }
  }, [challenge, previouslyCompletedScore, isRetaking, hasReadPassage]);

  return {
    currentQuestion,
    selectedAnswers, 
    isSubmitted,
    score,
    maxScore,
    showResults,
    hasReadPassage,
    isRetaking,
    isReadConfirmationOpen,
    setCurrentQuestion,
    setSelectedAnswers,
    setIsSubmitted,
    setScore,
    setShowResults,
    setHasReadPassage,
    setIsRetaking,
    setIsReadConfirmationOpen,
    toast,
    navigate,
    completeChallenge,
    bookId,
    chapter,
    challenge,
    bookInfo
  };
};
