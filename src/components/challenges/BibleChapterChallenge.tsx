import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { bibleBooks } from '@/data/bible/books'; // Changed from BibleBook to bibleBooks
import { getBibleChallengeByBookAndChapter } from '@/data/bible/challenges';
import LoginRequired from './bible/LoginRequired';
import ChallengeSkeleton from './bible/ChallengeSkeleton';
import ChallengeState from './bible/ChallengeState';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';

interface Params {
  bookId?: string;
  chapter?: string;
}

const BibleChapterChallenge: React.FC = () => {
  const { bookId, chapter } = useParams<Params>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { saveChallengeProgress } = useBibleProgress();
  
  const [challenge, setChallenge] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any>({});
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  
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
          setError("Challenge not found for this book and chapter.");
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
    if (challenge && completed) {
      const book = bibleBooks.find(b => b.id === bookId);
      if (user && bookId && chapter) {
        saveChallengeProgress(bookId, parseInt(chapter), score === challenge.questions.length);
        toast({
          title: "Challenge Completed!",
          description: `You scored ${score} out of ${challenge.questions.length} in ${book?.name} ${chapter}.`,
        });
      }
    }
  }, [completed, score, challenge, bookId, chapter, saveChallengeProgress, toast, user]);
  
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
  
  if (!user) {
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
      <ChallengeState 
        bookName={book?.name || 'Unknown'}
        chapter={parseInt(chapter || '0', 10)}
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
    </ChallengeSkeleton>
  );
};

export default BibleChapterChallenge;
