import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { useTheologyProgress } from '@/hooks/use-theology-progress';
import { theologyBooks } from '@/data/theology';
import { useTheologyChallenge } from './use-theology-challenge';
import { ChapterChallenge } from '@/data/bible/types';

// State interface matching BibleChallengeState
export interface TheologyChallengeState {
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

export function useTheologyChallengeAdapter() {
    const { bookId = '', chapter = '' } = useParams<{ bookId: string; chapter: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { toast } = useToast();
    const { completeChallenge } = useTheologyProgress();
    const progressSavedRef = useRef(false);

    const {
        challenge,
        bookInfo,
        isLoading,
        error,
        currentQuestion,
        selectedAnswers,
        isSubmitted,
        score,
        maxScore,
        showResults,
        handleSelectAnswer,
        handleSubmitAnswer,
        handleNextQuestion,
        handleRetake,
    } = useTheologyChallenge();

    // Convert theology challenge to bible challenge format
    const [state, setState] = useState<TheologyChallengeState>({
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

    // Sync theology challenge state to adapter state
    useEffect(() => {
        if (challenge) {
            // Convert theology challenge to bible challenge format
            const bibleFormatChallenge: ChapterChallenge = {
                id: `${bookId}-${chapter}`,
                bookId: bookId,
                chapter: parseInt(chapter),
                title: `${bookInfo?.title || ''} - Chapter ${chapter}`,
                questions: challenge.questions.map((q, index) => ({
                    id: `q${index}`,
                    question: q.question,
                    options: q.options,
                    correctAnswer: q.correctAnswer,
                    explanation: q.explanation
                })),
                key_verse: challenge.key_quote_location || '',
                key_verse_text: challenge.key_quote || '',
                memory_challenge: false,
                difficulty: challenge.difficulty || 'medium',
                points: challenge.points || challenge.questions.length
            };

            setState(prev => ({
                ...prev,
                challenge: bibleFormatChallenge,
                currentQuestion,
                userAnswers: selectedAnswers,
                showExplanation: isSubmitted,
                isCorrect: isSubmitted && selectedAnswers[currentQuestion]
                    ? selectedAnswers[currentQuestion] === challenge.questions[currentQuestion].correctAnswer
                    : null,
                score,
                loading: isLoading,
                error: error ? String(error) : null,
                completed: showResults,
            }));
        } else if (isLoading) {
            setState(prev => ({ ...prev, loading: true }));
        } else if (error) {
            setState(prev => ({ ...prev, error: String(error), loading: false }));
        }
    }, [challenge, bookInfo, chapter, currentQuestion, selectedAnswers, isSubmitted, score, isLoading, error, showResults]);

    // Save progress when completed
    useEffect(() => {
        if (showResults && user && !progressSavedRef.current && challenge) {
            progressSavedRef.current = true;

            const saveProgress = async () => {
                try {
                    const chapterNumber = parseInt(chapter, 10);
                    await completeChallenge(bookId, chapterNumber, score);

                    toast({
                        title: "Challenge Completed!",
                        description: `You scored ${score} out of ${maxScore} in ${bookInfo?.title} chapter ${chapter}.`,
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
    }, [showResults, user, challenge, score, maxScore]);

    const handleSelectAnswerAdapter = (answer: string) => {
        if (state.showExplanation) return;
        handleSelectAnswer(answer);
    };

    const handleCheckAnswerAdapter = () => {
        if (!challenge) return;
        handleSubmitAnswer();
    };

    const handleNextQuestionAdapter = () => {
        if (!challenge) return;

        if (currentQuestion < challenge.questions.length - 1) {
            handleNextQuestion();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // This will trigger showResults
            handleNextQuestion();
        }
    };

    const handlePreviousQuestionAdapter = () => {
        // Theology challenges don't support going back, but we can add it
        // For now, do nothing
    };

    const handleRetryAdapter = () => {
        progressSavedRef.current = false;
        handleRetake();
    };

    const handleGoBackAdapter = () => {
        navigate(`/theology/${bookId}`);
    };

    return {
        state,
        isFirstChapter: parseInt(chapter, 10) === 1,
        handleSelectAnswer: handleSelectAnswerAdapter,
        handleCheckAnswer: handleCheckAnswerAdapter,
        handleNextQuestion: handleNextQuestionAdapter,
        handlePreviousQuestion: handlePreviousQuestionAdapter,
        handleRetry: handleRetryAdapter,
        handleGoBack: handleGoBackAdapter
    };
}
