
import { useState, useEffect, useRef, useCallback } from 'react';
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
  const { updateProgress, getChapterStatus, getChapterDifficultyScores } = useBibleProgress();
  const progressSavedRef = useRef(false);
  const savePromiseRef = useRef<Promise<void> | null>(null);

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
    // Check if any questions have the difficulty field at all
    const hasDifficultyField = questions.some(q => q.difficulty);

    // If questions don't have difficulty tags, return all questions (up to 5)
    if (!hasDifficultyField) {
      return questions.slice(0, 5);
    }

    const filtered = questions.filter(q => q.difficulty === difficulty);
    // If no questions at this difficulty, fall back to easy, then all
    if (filtered.length === 0) {
      const easyFallback = questions.filter(q => q.difficulty === 'easy');
      return easyFallback.length > 0 ? easyFallback.slice(0, 5) : questions.slice(0, 5);
    }
    // Take only 5 questions for the challenge
    return filtered.slice(0, 5);
  };

  // Check if medium difficulty is unlocked (easy completed with score >= 3)
  const isMediumUnlocked = (): boolean => {
    if (!user) return false;
    const scores = getChapterDifficultyScores(bookId, parseInt(chapter, 10));
    return scores.easy.score >= 3;
  };

  // Check if hard difficulty is unlocked (medium completed with score >= 3)
  const isHardUnlocked = (): boolean => {
    if (!user) return false;
    const scores = getChapterDifficultyScores(bookId, parseInt(chapter, 10));
    return scores.medium.score >= 3;
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
            progressSavedRef.current = true;

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

        // Store the promise so handleGoBack can await it before navigating
        savePromiseRef.current = saveProgress();
      }
    }
  }, [state.completed, state.challenge, user]);

  const handleSelectAnswer = useCallback((answer: string, index?: number) => {
    const targetQuestion = index !== undefined ? index : state.currentQuestion;
    if (state.answeredQuestions[targetQuestion]) return;
    if (index === undefined && state.showExplanation) return;

    setState(prev => ({
      ...prev,
      currentQuestion: targetQuestion,
      userAnswers: { ...prev.userAnswers, [targetQuestion]: answer }
    }));
  }, [state.currentQuestion, state.answeredQuestions, state.showExplanation]);

  const handleCheckAnswer = useCallback((index?: number) => {
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
  }, [state.challenge, state.currentQuestion, state.userAnswers, state.answeredQuestions]);

  const handleNextQuestion = useCallback(() => {
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
  }, [state.challenge, state.currentQuestion, state.answeredQuestions]);

  const handlePreviousQuestion = useCallback(() => {
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
  }, [state.currentQuestion, state.answeredQuestions]);

  const handleRetry = useCallback(() => {
    progressSavedRef.current = false;
    savePromiseRef.current = null;
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
  }, []);

  const handleJumpToQuestion = useCallback((index: number) => {
    if (!state.challenge || index < 0 || index >= state.challenge.questions.length) return;

    const questionAnswered = state.answeredQuestions[index];

    setState(prev => ({
      ...prev,
      currentQuestion: index,
      showExplanation: questionAnswered ? true : false,
      isCorrect: questionAnswered ? questionAnswered.isCorrect : null
    }));
  }, [state.challenge, state.answeredQuestions]);

  const handleGoBack = useCallback(async () => {
    // Wait for the save to complete before navigating so the Bible page
    // fetches up-to-date scores when it mounts.
    if (savePromiseRef.current) {
      try {
        await savePromiseRef.current;
      } catch {
        // Error already handled in saveProgress; navigate anyway
      }
    }
    navigate(`/bible/${bookId}`);
  }, [navigate, bookId]);

  const handleChangeDifficulty = useCallback((newDifficulty: DifficultyLevel) => {
    // Only allow changing to medium if unlocked
    if (newDifficulty === 'medium' && !isMediumUnlocked()) return;
    if (newDifficulty === 'hard' && !isHardUnlocked()) return;

    progressSavedRef.current = false;
    savePromiseRef.current = null;
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
  }, [isMediumUnlocked, isHardUnlocked]);

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
