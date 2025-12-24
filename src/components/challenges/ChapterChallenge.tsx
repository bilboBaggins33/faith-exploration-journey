import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';
import ChallengeFeedback from './bible/ChallengeFeedback';
import { useBibleChallenge } from '@/hooks/bible/use-bible-challenge';
import { useTheologyChallengeAdapter } from '@/hooks/theology/use-theology-challenge-adapter';

interface ChapterChallengeProps {
    type: 'bible' | 'theology';
}

const ChapterChallengeComponent: React.FC<ChapterChallengeProps> = ({ type }) => {
    const { bookId = '', chapter = '' } = useParams<{ bookId: string; chapter: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();

    const bibleChallenge = useBibleChallenge(bookId, chapter);
    const theologyChallenge = useTheologyChallengeAdapter();

    const {
        state,
        isFirstChapter,
        handleSelectAnswer,
        handleCheckAnswer,
        handleNextQuestion,
        handlePreviousQuestion,
        handleRetry,
        handleGoBack
    } = type === 'bible' ? bibleChallenge : theologyChallenge;

    // Redirect to auth if not logged in and not first chapter
    useEffect(() => {
        if (!user && !isFirstChapter && !state.loading) {
            navigate('/auth', { state: { from: location.pathname } });
        }
    }, [user, isFirstChapter, state.loading, navigate, location.pathname]);

    // Show loading while redirecting or checking auth
    if (!user && !isFirstChapter) {
        return null; // Will redirect via useEffect
    }

    if (state.loading) {
        return (
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow flex items-center justify-center">
                    <LoadingState />
                </main>
            </div>
        );
    }

    if (state.error || !state.challenge) {
        return (
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow flex items-center justify-center p-4">
                    <ErrorState
                        description={state.error || "Challenge not found."}
                        onGoBack={handleGoBack}
                    />
                </main>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <main className="flex-grow">
                <div className="max-w-4xl mx-auto">
                    <ChallengeFeedback
                        state={state}
                        bookId={bookId}
                        chapter={chapter}
                        onSelectAnswer={handleSelectAnswer}
                        onCheckAnswer={handleCheckAnswer}
                        onNextQuestion={handleNextQuestion}
                        onPreviousQuestion={handlePreviousQuestion}
                        onRetry={handleRetry}
                        onGoBack={handleGoBack}
                    />
                </div>
            </main>
        </div>
    );
};

export default ChapterChallengeComponent;
