
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
import QuestionCard from './bible/QuestionCard';
import ResultsCard from './bible/ResultsCard';
import { BibleProgressData } from '@/hooks/bible/bible-progress-types';
import ChallengeHeader from './bible/ChallengeHeader';

const BibleChapterChallenge: React.FC = () => {
  const { bookId = '', chapter = '' } = useParams<{ bookId: string; chapter: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { updateProgress } = useBibleProgress();
  
  const [challenge, setChallenge] = useState<ChapterChallenge | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
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
        if (updateProgress) {
          try {
            const progressData: Partial<BibleProgressData> = {
              challenges_completed: [`${bookId}${chapter}`],
              total_points: score
            };
            
            updateProgress(progressData);
            
            toast({
              title: "Challenge Completed!",
              description: `You scored ${score} out of ${challenge.questions.length} in ${book?.name} ${chapter}.`,
            });
          } catch (error) {
            console.error("Error updating progress:", error);
          }
        }
      }
    }
  }, [completed, score, challenge, bookId, chapter, updateProgress, toast, user]);
  
  const handleSelectAnswer = (answer: string) => {
    if (showExplanation) return;
    setUserAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
  };

  const handleCheckAnswer = () => {
    if (!challenge) return;
    
    const currentQuestionData = challenge.questions[currentQuestion];
    const selectedAnswer = userAnswers[currentQuestion];
    
    if (!selectedAnswer) return;
    
    const correct = selectedAnswer === currentQuestionData.correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(prevScore => prevScore + 1);
    }
    setShowExplanation(true);
  };
  
  const handleNextQuestion = () => {
    if (!challenge) return;
    
    setShowExplanation(false);
    setIsCorrect(null);
    
    if (currentQuestion < challenge.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };
  
  const handleRetry = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setScore(0);
    setCompleted(false);
    setShowExplanation(false);
    setIsCorrect(null);
  };
  
  const handleGoBack = () => {
    navigate(`/bible/${bookId}`);
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
  
  if (completed) {
    return (
      <ChallengeSkeleton>
        <ResultsCard
          score={score}
          totalQuestions={challenge.questions.length}
          keyVerseText={challenge.key_verse_text}
          keyVerse={challenge.key_verse}
          onRestartQuiz={handleRetry}
          onNavigateToBook={() => navigate(`/bible/${bookId}`)}
          onNavigateToBible={() => navigate('/bible')}
          bookName={book?.name || ''}
        />
      </ChallengeSkeleton>
    );
  }

  const currentQuestionData = challenge.questions[currentQuestion];
  
  return (
    <ChallengeSkeleton>
      <div>
        <ChallengeHeader
          bookName={book?.name || ''}
          chapter={parseInt(chapter, 10)}
          title={challenge.title}
          currentQuestion={currentQuestion}
          totalQuestions={challenge.questions.length}
          score={score}
          onBackClick={handleGoBack}
        />
        
        <QuestionCard
          question={currentQuestionData.question}
          options={currentQuestionData.options}
          correctAnswer={currentQuestionData.correctAnswer}
          selectedAnswer={userAnswers[currentQuestion] || null}
          showExplanation={showExplanation}
          isCorrect={isCorrect}
          explanation={currentQuestionData.explanation}
          onSelectAnswer={handleSelectAnswer}
          onCheckAnswer={handleCheckAnswer}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={currentQuestion === challenge.questions.length - 1}
          onNavigateBack={null} // Remove the duplicate back button in the QuestionCard
        />
      </div>
    </ChallengeSkeleton>
  );
};

export default BibleChapterChallenge;
