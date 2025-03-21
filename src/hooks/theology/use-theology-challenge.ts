
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { theologyChapterChallenges, theologyChapters, theologyBooks } from '@/data/theology';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { isSupabaseConfigured } from '@/lib/supabase';
import { useTheologyProgress } from '@/hooks/use-theology-progress';

export const useTheologyChallenge = () => {
  const { bookId = '', chapter = '' } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [previouslyCompletedScore, setPreviouslyCompletedScore] = useState<number | null>(null);
  const [hasReadPassage, setHasReadPassage] = useState(false);
  const [isRetaking, setIsRetaking] = useState(false);
  const [isReadConfirmationOpen, setIsReadConfirmationOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { completeChallenge, getChapterStatus } = useTheologyProgress();

  // Query for loading the challenge data
  const { data: challenge, isLoading, error } = useQuery({
    queryKey: ['theology-challenge', bookId, chapter],
    queryFn: async () => {
      const chapterNum = parseInt(chapter);
      const found = theologyChapterChallenges.find(
        c => c.bookId === bookId && c.chapter === chapterNum
      );
      
      if (!found) {
        throw new Error('Challenge not found');
      }
      
      if (isSupabaseConfigured()) {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          // Check if the user has already completed this chapter
          const status = getChapterStatus(bookId, chapterNum);
          
          if (status.completed && !isRetaking) {
            setPreviouslyCompletedScore(status.score || 0);
            setMaxScore(found.points);
          }
        }
      }
      
      return found;
    }
  });

  // Query for loading book info
  const { data: bookInfo } = useQuery({
    queryKey: ['theology-book', bookId],
    queryFn: () => {
      return theologyBooks.find(b => b.id === bookId);
    }
  });

  // Query for loading chapter info
  const { data: chapterInfo } = useQuery({
    queryKey: ['theology-chapter', bookId, chapter],
    queryFn: () => {
      const chapterNum = parseInt(chapter);
      return theologyChapters[bookId as string]?.find(c => c.chapter === chapterNum);
    }
  });

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

  // Handle answer selection
  const handleSelectAnswer = (answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  // Handle answer submission
  const handleSubmitAnswer = () => {
    if (selectedAnswers[currentQuestion] === '') {
      toast({
        title: "Select an answer",
        description: "Please select an answer before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);

    if (selectedAnswers[currentQuestion] === challenge?.questions[currentQuestion].correctAnswer) {
      const pointsPerQuestion = challenge.points / challenge.questions.length;
      setScore(prevScore => prevScore + pointsPerQuestion);
    }
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (currentQuestion < (challenge?.questions.length || 0) - 1) {
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
        await completeChallenge(bookId, parseInt(chapter), score);
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
    setIsRetaking(true);
    setSelectedAnswers(new Array(challenge?.questions.length || 0).fill(''));
    setCurrentQuestion(0);
    setScore(0);
    setIsSubmitted(false);
    setShowResults(false);
    setHasReadPassage(false);
    setIsReadConfirmationOpen(true);
  };

  // Computed values
  const chapterTitle = chapterInfo?.title || `Chapter ${chapter}`;
  const passageText = `This is a placeholder for the text of ${bookInfo?.title || 'the book'}, chapter ${chapter}. In a real application, this would contain the actual text of the chapter from the theological work.`;

  // Navigation helpers
  const navigateToBook = () => navigate(`/theology/${bookId}`);
  
  return {
    // Data
    challenge,
    bookInfo,
    chapterInfo,
    chapterTitle,
    passageText,
    
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
    isLoading,
    error,
    
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
