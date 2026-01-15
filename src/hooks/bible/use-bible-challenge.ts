
import { useState, useEffect, useRef } from 'react';
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
  answeredQuestions: Record<number, { isCorrect: boolean; hasBeenScored: boolean }>;
}

export function useBibleChallenge(bookId: string, chapter: string) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { updateProgress } = useBibleProgress();
  const progressSavedRef = useRef(false);

  const [state, setState] = useState<BibleChallengeState>({
    challenge: null,
    currentQuestion: 0,
    userAnswers: {},
    showExplanation: false,
    isCorrect: null,
    score: 0,
    loading: true,
    error: null,
    completed: false,
    answeredQuestions: {}
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
    if (state.challenge && state.completed && user && !progressSavedRef.current) {
      progressSavedRef.current = true;
      const book = bibleBooks.find(b => b.id === bookId);

      if (bookId && chapter && updateProgress) {
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

            await updateProgress(progressData);

            toast({
              title: "Challenge Completed!",
              description: `You scored ${state.score} out of ${state.challenge.questions.length} in ${book?.name} ${chapter}.`,
            });
          } catch (error) {
            console.error("Error updating progress:", error);
            toast({
              title: "Error",
              description: "Failed to save your progress. Please try again.",
              variant: "destructive"
            });
          }
        };

        saveProgress();
      }
    }
  }, [state.completed, state.challenge, user]);

  const handleSelectAnswer = (answer: string, index?: number) => {
    const targetQuestion = index !== undefined ? index : state.currentQuestion;
    if (state.answeredQuestions[targetQuestion]) return;
    if (index === undefined && state.showExplanation) return;

    setState(prev => ({
      ...prev,
      currentQuestion: targetQuestion,
      userAnswers: { ...prev.userAnswers, [targetQuestion]: answer }
    }));
  };

  const handleCheckAnswer = (index?: number) => {
    if (!state.challenge) return;

    const targetQuestion = index !== undefined ? index : state.currentQuestion;
    const currentQuestionData = state.challenge.questions[targetQuestion];
    const selectedAnswer = state.userAnswers[targetQuestion];

    if (!selectedAnswer) return;

    const correct = selectedAnswer === currentQuestionData.correctAnswer;
    const alreadyAnswered = state.answeredQuestions[targetQuestion];

    setState(prev => ({
      ...prev,
      currentQuestion: targetQuestion,
      isCorrect: correct,
      score: correct && !alreadyAnswered?.hasBeenScored ? prev.score + 1 : prev.score,
      showExplanation: true,
      answeredQuestions: {
        ...prev.answeredQuestions,
        [targetQuestion]: { isCorrect: correct, hasBeenScored: correct && !alreadyAnswered?.hasBeenScored }
      }
    }));
  };

  const handleNextQuestion = () => {
    if (!state.challenge) return;

    if (state.currentQuestion < state.challenge.questions.length - 1) {
      const nextQuestionIndex = state.currentQuestion + 1;
      const nextQuestionAnswered = state.answeredQuestions[nextQuestionIndex];

      setState(prev => ({
        ...prev,
        currentQuestion: nextQuestionIndex,
        showExplanation: nextQuestionAnswered ? true : false,
        isCorrect: nextQuestionAnswered ? nextQuestionAnswered.isCorrect : null
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
      const prevQuestionIndex = state.currentQuestion - 1;
      const prevQuestionAnswered = state.answeredQuestions[prevQuestionIndex];

      setState(prev => ({
        ...prev,
        currentQuestion: prevQuestionIndex,
        showExplanation: prevQuestionAnswered ? true : false,
        isCorrect: prevQuestionAnswered ? prevQuestionAnswered.isCorrect : null
      }));
    }
  };

  const handleRetry = () => {
    progressSavedRef.current = false;
    setState(prev => ({
      ...prev,
      currentQuestion: 0,
      userAnswers: {},
      score: 0,
      completed: false,
      showExplanation: false,
      isCorrect: null,
      answeredQuestions: {}
    }));
  };

  const handleJumpToQuestion = (index: number) => {
    if (!state.challenge || index < 0 || index >= state.challenge.questions.length) return;

    const questionAnswered = state.answeredQuestions[index];

    setState(prev => ({
      ...prev,
      currentQuestion: index,
      showExplanation: questionAnswered ? true : false,
      isCorrect: questionAnswered ? questionAnswered.isCorrect : null
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
    handleJumpToQuestion,
    handleRetry,
    handleGoBack
  };
}
