
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { bibleBooks } from '@/data/bible'; 
import { getBibleChallengeByBookAndChapter } from '@/data/bible/challenges';
import { ChapterChallenge } from '@/data/bible/types';
import { BibleProgressData } from '@/hooks/bible/bible-progress-types';

export interface BibleChallengeState {
  challenge: ChapterChallenge | null;
  currentQuestion: number;
  userAnswers: Record<number, string>;
  showExplanation: boolean;
  isCorrect: boolean | null;
  score: number;
  loading: boolean;
  error: string | null;
  completed: boolean;
}

export function useBibleChallenge(bookId: string, chapter: string) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { updateProgress } = useBibleProgress();
  
  const [state, setState] = useState<BibleChallengeState>({
    challenge: null,
    currentQuestion: 0,
    userAnswers: {},
    showExplanation: false,
    isCorrect: null,
    score: 0,
    loading: true,
    error: null,
    completed: false
  });
  
  const isFirstChapter = parseInt(chapter, 10) === 1;
  
  useEffect(() => {
    if (!bookId || !chapter) {
      setState(prev => ({ ...prev, error: "Invalid book or chapter.", loading: false }));
      return;
    }
    
    const loadChallenge = async () => {
      setState(prev => ({ ...prev, loading: true, error: null }));
      try {
        const chapterNumber = parseInt(chapter, 10);
        if (isNaN(chapterNumber)) {
          throw new Error("Invalid chapter number.");
        }

        const loadedChallenge = getBibleChallengeByBookAndChapter(bookId, chapterNumber);
        
        if (!loadedChallenge) {
          const book = bibleBooks.find(b => b.id === bookId);
          setState(prev => ({ 
            ...prev, 
            error: `Challenge not found for ${book?.name || bookId} chapter ${chapterNumber}.`,
            loading: false
          }));
          return;
        }
        
        setState(prev => ({ ...prev, challenge: loadedChallenge, loading: false }));
      } catch (err: any) {
        setState(prev => ({ ...prev, error: err.message || "Failed to load challenge.", loading: false }));
      }
    };
    
    loadChallenge();
  }, [bookId, chapter]);
  
  useEffect(() => {
    if (state.challenge && state.completed && user) {
      const book = bibleBooks.find(b => b.id === bookId);
      if (bookId && chapter) {
        if (updateProgress) {
          const saveProgress = async () => {
            try {
              const chapterNumber = parseInt(chapter, 10);
              const completedChapter = {
                book_id: bookId,
                chapter: chapterNumber,
                completed_at: new Date().toISOString(),
                score: state.score
              };

              const progressData: Partial<BibleProgressData> = {
                challenges_completed: [`${bookId}${chapter}`],
                completed_chapters: [completedChapter],
                total_points: state.score
              };
              
              // Update progress and ensure fresh data is loaded
              await updateProgress(progressData);
              
              toast({
                title: "Challenge Completed!",
                description: `You scored ${state.score} out of ${state.challenge.questions.length} in ${book?.name} ${chapter}.`,
              });
            } catch (error) {
              console.error("Error updating progress:", error);
            }
          };
          
          saveProgress();
        }
      }
    }
  }, [state.completed, state.score, state.challenge, bookId, chapter, updateProgress, toast, user]);
  
  const handleSelectAnswer = (answer: string) => {
    if (state.showExplanation) return;
    setState(prev => ({
      ...prev,
      userAnswers: { ...prev.userAnswers, [prev.currentQuestion]: answer }
    }));
  };

  const handleCheckAnswer = () => {
    if (!state.challenge) return;
    
    const currentQuestionData = state.challenge.questions[state.currentQuestion];
    const selectedAnswer = state.userAnswers[state.currentQuestion];
    
    if (!selectedAnswer) return;
    
    const correct = selectedAnswer === currentQuestionData.correctAnswer;
    setState(prev => ({
      ...prev,
      isCorrect: correct,
      score: correct ? prev.score + 1 : prev.score,
      showExplanation: true
    }));
  };
  
  const handleNextQuestion = () => {
    if (!state.challenge) return;
    
    setState(prev => ({
      ...prev,
      showExplanation: false,
      isCorrect: null
    }));
    
    if (state.currentQuestion < state.challenge.questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else {
      setState(prev => ({
        ...prev,
        completed: true
      }));
    }
  };
  
  const handlePreviousQuestion = () => {
    if (state.currentQuestion > 0) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const handleRetry = () => {
    setState(prev => ({
      ...prev,
      currentQuestion: 0,
      userAnswers: {},
      score: 0,
      completed: false,
      showExplanation: false,
      isCorrect: null
    }));
  };
  
  const handleGoBack = () => {
    navigate(`/bible/${bookId}`);
  };

  return {
    state,
    isFirstChapter,
    handleSelectAnswer,
    handleCheckAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleRetry,
    handleGoBack
  };
}
