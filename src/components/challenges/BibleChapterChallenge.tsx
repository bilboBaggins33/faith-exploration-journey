
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { bibleBooks } from '@/data/bible'; 
import LoginRequired from './bible/LoginRequired';
import ChallengeSkeleton from './bible/ChallengeSkeleton';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';
import { ChapterChallenge } from '@/data/bible/types';
import QuestionCard from './bible/QuestionCard';
import ResultsCard from './bible/ResultsCard';

const BibleChapterChallenge: React.FC = () => {
  const params = useParams<{ bookId: string; chapter: string }>();
  const { bookId, chapter } = params;
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

        // Import the challenges dynamically
        const challengesModule = await import('@/data/bible/challenges');
        const loadedChallenge = challengesModule.sampleChapterChallenges.find(
          c => c.bookId === bookId && c.chapter === chapterNumber
        );
        
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
        // Update challenge progress
        updateProgress('update', {
          challenges_completed: [`${bookId}${chapter}`],
          total_points: score
        });
        
        toast({
          title: "Challenge Completed!",
          description: `You scored ${score} out of ${challenge.questions.length} in ${book?.name} ${chapter}.`,
        });
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
      {completed ? (
        <ResultsCard
          score={score}
          totalQuestions={challenge.questions.length}
          onRetry={handleRetry}
          onGoBack={handleGoBack}
        />
      ) : (
        <QuestionCard
          question={challenge.questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={challenge.questions.length}
          selectedAnswer={userAnswers[currentQuestion] || ''}
          onSelectAnswer={(answer) => handleAnswer(currentQuestion, answer)}
          onNext={handleNextQuestion}
          isLastQuestion={currentQuestion === challenge.questions.length - 1}
        />
      )}
    </ChallengeSkeleton>
  );
};

export default BibleChapterChallenge;
