
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { bibleBooks, sampleChapterChallenges } from '@/data/bibleData';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';

// Import our new modular components
import ChallengeSkeleton from './bible/ChallengeSkeleton';
import ChallengeHeader from './bible/ChallengeHeader';
import QuestionCard from './bible/QuestionCard';
import ResultsCard from './bible/ResultsCard';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';
import LoginRequired from './bible/LoginRequired';

const BibleChapterChallenge = () => {
  const { bookId, chapter } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const { completeChallenge, isCompleted, progress } = useBibleProgress();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [retakeInProgress, setRetakeInProgress] = useState(false);
  
  // Find challenge data
  const book = bibleBooks.find(b => b.id === bookId);
  
  // For demonstration, we'll use the sample challenges
  const challenge = sampleChapterChallenges.find(
    c => c.bookId === bookId && c.chapter === Number(chapter)
  ) || sampleChapterChallenges[0]; // Default to Genesis 1 for demo
  
  // Track whether this challenge is already completed
  const challengeId = `${bookId}-${chapter}`;
  const challengeCompleted = isCompleted(challengeId);
  
  useEffect(() => {
    console.log('BibleChapterChallenge component mounted', { bookId, chapter });
    console.log('Current user:', user?.id);
    console.log('Current progress:', progress);
    console.log('Challenge completed?', challengeCompleted);
    
    // Check if the challenge exists and initialize
    if (challenge) {
      setLoading(false);
      
      // Check if we're explicitly restarting via URL params or state
      const urlParams = new URLSearchParams(window.location.search);
      const forceRestart = urlParams.get('restart') === 'true' || retakeInProgress;
      
      // If already completed and not forcing restart, load the saved score but don't auto-show the results
      if (challengeCompleted && !forceRestart) {
        console.log('Challenge is already completed');
        
        // Find the saved score for this chapter
        const chapterData = progress?.completed_chapters?.find(
          c => c.book_id === bookId && c.chapter === Number(chapter)
        );
        
        if (chapterData && chapterData.score !== undefined) {
          console.log('Found saved score:', chapterData.score);
          // Ensure score doesn't exceed max possible points
          const maxPossibleScore = challenge.questions.length;
          setScore(Math.min(chapterData.score, maxPossibleScore));
        } else {
          // If no specific score saved, default to max points
          console.log('No saved score found, defaulting to max points');
          setScore(challenge.questions.length);
        }
      } else if (forceRestart) {
        // Reset all states if we're restarting
        console.log('Restarting challenge');
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setIsCorrect(null);
        setScore(0);
        setQuizCompleted(false);
        setRetakeInProgress(false);
      } 
    } else {
      // Challenge doesn't exist, show error or redirect
      toast({
        title: "Challenge Not Found",
        description: "This Bible chapter challenge is not available yet.",
        variant: "destructive",
      });
      setLoading(false);
    }
  }, [challenge, challengeCompleted, progress, bookId, chapter, user, toast, retakeInProgress]);
  
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };
  
  const checkAnswer = () => {
    if (!selectedAnswer) return;
    
    const currentQ = challenge.questions[currentQuestion];
    const correct = selectedAnswer === currentQ.correctAnswer;
    
    setIsCorrect(correct);
    setShowExplanation(true);
    
    if (correct) {
      // 1 point per correct question
      setScore(score + 1);
    }
  };
  
  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
    
    if (currentQuestion < challenge.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Complete the challenge
      setQuizCompleted(true);
      
      // Only update score if it's a new score or better than previous
      if (!challengeCompleted || retakeInProgress) {
        console.log('Completing challenge with score:', score);
        // Make sure challengeId is correct format: "bookId-chapter"
        // Ensure score doesn't exceed maximum points possible
        const finalScore = isCorrect ? score + 1 : score;
        const maxPossibleScore = challenge.questions.length;
        const cappedScore = Math.min(finalScore, maxPossibleScore);
        
        // Only update if it's a new completion or a better score
        if (!challengeCompleted || cappedScore > (score || 0)) {
          completeChallenge(challengeId, cappedScore);
        } else {
          console.log('Not updating score as new score is not better than previous');
        }
      }
    }
  };
  
  const restartQuiz = () => {
    setRetakeInProgress(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
    setScore(0);
    setQuizCompleted(false);
  };
  
  const navigateToBookPage = () => {
    navigate(`/bible/${bookId}`);
  };

  const navigateToBibleExplorer = () => {
    navigate('/bible');
  };
  
  // ------------ Render conditional states ------------
  
  if (loading) {
    return <LoadingState />;
  }
  
  if (!challenge) {
    return (
      <ErrorState 
        title="Challenge Not Available"
        description="This Bible chapter challenge hasn't been created yet."
        actionText="Return to Bible Explorer"
        actionRoute="/bible"
      />
    );
  }
  
  if (!user) {
    return <LoginRequired />;
  }
  
  const currentQuestionData = challenge?.questions[currentQuestion];
  
  return (
    <ChallengeSkeleton>
      {/* Challenge Header */}
      <ChallengeHeader
        bookName={book?.name || ''}
        chapter={Number(chapter) || 1}
        title={challenge?.title || ''}
        currentQuestion={currentQuestion}
        totalQuestions={challenge?.questions.length || 0}
        score={score}
        showProgress={!quizCompleted}
      />
      
      {/* Quiz content or results */}
      <AnimatePresence mode="wait">
        {!quizCompleted && currentQuestionData ? (
          <QuestionCard
            question={currentQuestionData.question}
            options={currentQuestionData.options}
            selectedAnswer={selectedAnswer}
            showExplanation={showExplanation}
            isCorrect={isCorrect}
            explanation={currentQuestionData.explanation}
            onSelectAnswer={handleAnswerSelect}
            onCheckAnswer={checkAnswer}
            onNextQuestion={nextQuestion}
            isLastQuestion={currentQuestion === challenge.questions.length - 1}
            onNavigateBack={() => navigate(-1)}
          />
        ) : quizCompleted && challenge ? (
          <ResultsCard
            score={score}
            totalQuestions={challenge.questions.length}
            keyVerseText={challenge.key_verse_text}
            keyVerse={challenge.key_verse}
            onRestartQuiz={restartQuiz}
            onNavigateToBook={navigateToBookPage}
            onNavigateToBible={navigateToBibleExplorer}
            bookName={book?.name || ''}
          />
        ) : (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bible-blue mx-auto mb-4"></div>
            <p>Loading challenge...</p>
          </div>
        )}
      </AnimatePresence>
    </ChallengeSkeleton>
  );
};

export default BibleChapterChallenge;
