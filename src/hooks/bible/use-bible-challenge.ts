
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { bibleBooks } from '@/data/bible';
import { getBibleChallengeByBookAndChapter } from '@/data/bible/challenges';
import { ChapterChallenge, ChapterQuestion } from '@/data/bible/types';
import { BibleProgressData } from '@/hooks/bible/bible-progress-types';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

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
  difficulty: DifficultyLevel;
  filteredQuestions: ChapterQuestion[];
}

export function useBibleChallenge(bookId: string, chapter: string) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const { toast } = useToast();
  const { updateProgress, getChapterStatus } = useBibleProgress();
  const progressSavedRef = useRef(false);

  // Get difficulty from URL or default to 'easy'
  const urlDifficulty = searchParams.get('difficulty') as DifficultyLevel | null;
  const initialDifficulty: DifficultyLevel = urlDifficulty || 'easy';

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
    answeredQuestions: {},
    difficulty: initialDifficulty,
    filteredQuestions: []
  });

  const isFirstChapter = parseInt(chapter, 10) === 1;

  // Filter questions by difficulty
  const filterQuestionsByDifficulty = (questions: ChapterQuestion[], difficulty: DifficultyLevel): ChapterQuestion[] => {
    const filtered = questions.filter(q => q.difficulty === difficulty);
    // If no questions at this difficulty, return all questions with easy as fallback
    if (filtered.length === 0) {
      return questions.filter(q => q.difficulty === 'easy');
    }
    // Take only 5 questions for the challenge
    return filtered.slice(0, 5);
  };

  // Check if medium difficulty is unlocked (easy completed)
  const isMediumUnlocked = (): boolean => {
    if (!user) return false;
    const { isCompleted, score } = getChapterStatus(bookId, parseInt(chapter, 10));
    return isCompleted && score >= 3; // Need at least 3/5 to unlock medium
  };

  // Check if hard difficulty is unlocked (medium completed)
  const isHardUnlocked = (): boolean => {
    // For now, hard is not implemented - would need to track medium completion separately
    return false;
  };

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

        // Filter questions by current difficulty
        const filteredQuestions = filterQuestionsByDifficulty(loadedChallenge.questions, state.difficulty);

        // Create a modified challenge with filtered questions
        const filteredChallenge = {
          ...loadedChallenge,
          questions: filteredQuestions
        };

        setState(prev => ({
          ...prev,
          challenge: filteredChallenge,
          filteredQuestions,
          loading: false
        }));
      } catch (err: any) {
        setState(prev => ({ ...prev, error: err.message || "Failed to load challenge.", loading: false }));
      }
    };

    loadChallenge();
  }, [bookId, chapter, state.difficulty]);

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
              score: state.score,
              difficulty: state.difficulty
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

  const handleChangeDifficulty = (newDifficulty: DifficultyLevel) => {
    // Only allow changing to medium if unlocked
    if (newDifficulty === 'medium' && !isMediumUnlocked()) return;
    if (newDifficulty === 'hard' && !isHardUnlocked()) return;

    progressSavedRef.current = false;
    setState(prev => ({
      ...prev,
      difficulty: newDifficulty,
      currentQuestion: 0,
      userAnswers: {},
      score: 0,
      completed: false,
      showExplanation: false,
      isCorrect: null,
      answeredQuestions: {}
    }));
  };

  return {
    state,
    isFirstChapter,
    isMediumUnlocked: isMediumUnlocked(),
    isHardUnlocked: isHardUnlocked(),
    handleSelectAnswer,
    handleCheckAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleJumpToQuestion,
    handleRetry,
    handleGoBack,
    handleChangeDifficulty
  };
}
