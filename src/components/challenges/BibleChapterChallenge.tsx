
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { bibleBooks } from '@/data/bible'; 
import { getBibleChallengeByBookAndChapter } from '@/data/bible/challenges';
import LoginRequired from './bible/LoginRequired';
import ChallengeSkeleton from './bible/ChallengeSkeleton';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';
import { ChapterChallenge } from '@/data/bible/types';
import ChallengeState from './bible/ChallengeState';
import ResultsCard from './bible/ResultsCard';

const BibleChapterChallenge: React.FC = () => {
  const { bookId = '', chapter = '' } = useParams<{ bookId: string; chapter: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { updateProgress } = useBibleProgress();
  
  const [challenge, setChallenge] = useState<ChapterChallenge | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  
  const isFirstChapter = parseInt(chapter, 10) === 1;
  
  useEffect(() => {
    if (!bookId || !chapter) {
      setError("Invalid book or chapter.");
      setLoading(false);
      return;
    }
    
    const loadChallenge = async () => {
      setLoading(true);
      setError(null);
      try {
        const chapterNumber = parseInt(chapter, 10);
        if (isNaN(chapterNumber)) {
          throw new Error("Invalid chapter number.");
        }

        const loadedChallenge = getBibleChallengeByBookAndChapter(bookId, chapterNumber);
        
        if (!loadedChallenge) {
          const book = bibleBooks.find(b => b.id === bookId);
          setError(`Challenge not found for ${book?.name || bookId} chapter ${chapterNumber}.`);
          setLoading(false);
          return;
        }
        
        setChallenge(loadedChallenge);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Failed to load challenge.");
        setLoading(false);
      }
    };
    
    loadChallenge();
  }, [bookId, chapter]);
  
  useEffect(() => {
    if (challenge && completed && user) {
      const book = bibleBooks.find(b => b.id === bookId);
      if (bookId && chapter) {
        // Update challenge progress with the proper data structure
        if (updateProgress) {
          updateProgress({
            challenges_completed: [`${bookId}${chapter}`],
            total_points: score
          });
          
          toast({
            title: "Challenge Completed!",
            description: `You scored ${score} out of ${challenge.questions.length} in ${book?.name} ${chapter}.`,
          });
        }
      }
    }
  }, [completed, score, challenge, bookId, chapter, updateProgress, toast, user]);
  
  const handleAnswer = (questionIndex: number, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };
  
  const handleSubmit = () => {
    if (!challenge) return;
    
    let newScore = 0;
    challenge.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });
    
    setScore(newScore);
    setCompleted(true);
  };
  
  const handleNextQuestion = () => {
    if (!challenge) return;
    if (currentQuestion < challenge.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };
  
  const handleRetry = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setScore(0);
    setCompleted(false);
  };
  
  const handleGoBack = () => {
    navigate(`/bible/${bookId}`);
  };

  const handleNavigateToBook = () => {
    navigate(`/bible/${bookId}`);
  };
  
  const handleNavigateToBible = () => {
    navigate('/bible');
  };
  
  if (!user && !isFirstChapter) {
    return <LoginRequired />;
  }
  
  if (loading) {
    return <LoadingState />;
  }
  
  if (error) {
    return <ErrorState description={error} onGoBack={handleGoBack} />;
  }
  
  if (!challenge) {
    return <ErrorState description="Challenge not found." onGoBack={handleGoBack} />;
  }
  
  const book = bibleBooks.find(b => b.id === bookId);
  
  return (
    <ChallengeSkeleton>
      {completed ? (
        <ResultsCard
          score={score}
          totalQuestions={challenge.questions.length}
          keyVerseText={challenge.key_verse_text}
          keyVerse={challenge.key_verse}
          onRestartQuiz={handleRetry}
          onNavigateToBook={handleNavigateToBook}
          onNavigateToBible={handleNavigateToBible}
          bookName={book?.name || ''}
        />
      ) : (
        <ChallengeState
          bookName={book?.name || ''}
          chapter={parseInt(chapter, 10)}
          title={challenge.title}
          currentQuestion={currentQuestion}
          totalQuestions={challenge.questions.length}
          score={score}
          questions={challenge.questions}
          userAnswers={userAnswers}
          completed={completed}
          onAnswer={handleAnswer}
          onNextQuestion={handleNextQuestion}
          onSubmit={handleSubmit}
          onRetry={handleRetry}
          onGoBack={handleGoBack}
        />
      )}
    </ChallengeSkeleton>
  );
};

export default BibleChapterChallenge;
