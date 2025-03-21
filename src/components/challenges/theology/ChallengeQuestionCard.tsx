
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ChallengeProgress from './ChallengeProgress';
import ChallengeQuestion from './ChallengeQuestion';
import { useTheologyChallenge } from '@/hooks/theology/use-theology-challenge';

const ChallengeQuestionCard = () => {
  const navigate = useNavigate();
  const {
    // Data
    challenge,
    bookInfo,
    
    // State
    currentQuestion,
    selectedAnswers,
    isSubmitted,
    
    // Actions
    handleSelectAnswer,
    handleSubmitAnswer,
    handleNextQuestion,
  } = useTheologyChallenge();

  return (
    <Card className="mb-6">
      <CardHeader>
        <ChallengeProgress
          currentQuestion={currentQuestion}
          totalQuestions={challenge.questions.length}
          difficulty={challenge.difficulty}
          points={challenge.points}
        />
      </CardHeader>
      <CardContent>
        <ChallengeQuestion
          question={challenge.questions[currentQuestion].question}
          options={challenge.questions[currentQuestion].options}
          correctAnswer={challenge.questions[currentQuestion].correctAnswer}
          selectedAnswer={selectedAnswers[currentQuestion]}
          isSubmitted={isSubmitted}
          explanation={challenge.questions[currentQuestion].explanation}
          onSelectAnswer={handleSelectAnswer}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => navigate(`/theology/${bookInfo.id}`)}
        >
          Exit
        </Button>
        {isSubmitted ? (
          <Button onClick={handleNextQuestion}>
            {currentQuestion < challenge.questions.length - 1 ? 'Next Question' : 'Finish'}
          </Button>
        ) : (
          <Button onClick={handleSubmitAnswer}>
            Check Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ChallengeQuestionCard;
