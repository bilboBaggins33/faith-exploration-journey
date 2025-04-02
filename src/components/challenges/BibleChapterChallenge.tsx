
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

// Import our components
import ChallengeSkeleton from './bible/ChallengeSkeleton';
import ChallengeHeader from './bible/ChallengeHeader';
import QuestionCard from './bible/QuestionCard';
import ResultsCard from './bible/ResultsCard';
import LoadingState from './bible/LoadingState';
import ErrorState from './bible/ErrorState';
import LoginRequired from './bible/LoginRequired';
import { useChallengeState } from './bible/ChallengeState';
import { useNavigate } from 'react-router-dom';

const BibleChapterChallenge = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const {
    // Data
    book,
    challenge,
    
    // State
    loading,
    currentQuestion,
    quizCompleted,
    selectedAnswer,
    showExplanation,
    isCorrect,
    score,
    currentQuestionData,
    
    // Actions
    handleAnswerSelect,
    checkAnswer,
    nextQuestion,
    restartQuiz,
    navigateToBookPage,
    navigateToBibleExplorer
  } = useChallengeState();
  
  // Conditional rendering logic
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
  
  return (
    <ChallengeSkeleton>
      {/* Challenge Header */}
      <ChallengeHeader
        bookName={book?.name || ''}
        chapter={Number(challenge.chapter) || 1}
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
            correctAnswer={currentQuestionData.correctAnswer}
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
            score={isCorrect ? score + 1 : score}
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
