
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { bibleBooks, sampleChapterChallenges } from '@/data/bibleData';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';

export const useChallengeState = () => {
  const { bookId, chapter } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const { completeChallenge, isCompleted, progress } = useBibleProgress();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [retakeInProgress, setRetakeInProgress] = useState(false);
  
  // Find challenge data
  const book = bibleBooks.find(b => b.id === bookId);
  
  // For demonstration, we'll use the sample challenges
  const challenge = sampleChapterChallenges.find(
    c => c.bookId === bookId && c.chapter === Number(chapter)
  ) || sampleChapterChallenges[0]; // Default to Genesis 1 for demo
  
  // Track whether this challenge is already completed
  const challengeId = `${bookId}-${chapter}`;
  const challengeCompleted = isCompleted(challengeId);
  
  useEffect(() => {
    console.log('BibleChapterChallenge component mounted', { bookId, chapter });
    console.log('Current user:', user?.id);
    console.log('Current progress:', progress);
    console.log('Challenge completed?', challengeCompleted);
    
    // Check if the challenge exists and initialize
    if (challenge) {
      setLoading(false);
      
      // Check if we're explicitly restarting via URL params or state
      const urlParams = new URLSearchParams(window.location.search);
      const forceRestart = urlParams.get('restart') === 'true' || retakeInProgress;
      
      // If already completed and not forcing restart, load the saved score but don't auto-show the results
      if (challengeCompleted && !forceRestart) {
        console.log('Challenge is already completed');
        
        // Find the saved score for this chapter
        const chapterData = progress?.completed_chapters?.find(
          c => c.book_id === bookId && c.chapter === Number(chapter)
        );
        
        if (chapterData && chapterData.score !== undefined) {
          console.log('Found saved score:', chapterData.score);
          // Calculate max possible score from the challenge
          const maxPossibleScore = challenge.questions.length;
          // Ensure score doesn't exceed max possible points
          setScore(Math.min(chapterData.score, maxPossibleScore));
        } else {
          // If no specific score saved, default to max points
          console.log('No saved score found, defaulting to max points');
          setScore(challenge.questions.length);
        }
      } else if (forceRestart) {
        // Reset all states if we're restarting
        console.log('Restarting challenge');
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setIsCorrect(null);
        setScore(0);
        setQuizCompleted(false);
        setRetakeInProgress(false);
      } 
    } else {
      // Challenge doesn't exist, show error or redirect
      toast({
        title: "Challenge Not Found",
        description: "This Bible chapter challenge is not available yet.",
        variant: "destructive",
      });
      setLoading(false);
    }
  }, [challenge, challengeCompleted, progress, bookId, chapter, user, toast, retakeInProgress]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };
  
  const checkAnswer = () => {
    if (!selectedAnswer) return;
    
    const currentQ = challenge.questions[currentQuestion];
    const correct = selectedAnswer === currentQ.correctAnswer;
    
    setIsCorrect(correct);
    setShowExplanation(true);
    
    if (correct) {
      // 1 point per correct question
      setScore(score + 1);
    }
  };
  
  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
    
    if (currentQuestion < challenge.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Complete the challenge
      setQuizCompleted(true);
      
      // Only update score if it's a new score or better than previous
      if (!challengeCompleted || retakeInProgress) {
        console.log('Completing challenge with score:', score);
        // Make sure challengeId is correct format: "bookId-chapter"
        // Calculate final score based on current result
        const finalScore = isCorrect ? score + 1 : score;
        
        // Only update if it's a new completion or a better score
        if (!challengeCompleted || finalScore > (score || 0)) {
          completeChallenge(challengeId, finalScore);
        } else {
          console.log('Not updating score as new score is not better than previous');
        }
      }
    }
  };
  
  const restartQuiz = () => {
    setRetakeInProgress(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
    setScore(0);
    setQuizCompleted(false);
  };
  
  const navigateToBookPage = () => {
    navigate(`/bible/${bookId}`);
  };

  const navigateToBibleExplorer = () => {
    navigate('/bible');
  };

  const currentQuestionData = challenge?.questions[currentQuestion];

  return {
    // Data
    book,
    challenge,
    challengeId,
    challengeCompleted,
    
    // State
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
