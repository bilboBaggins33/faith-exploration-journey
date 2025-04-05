
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChapterChallenge } from '@/data/bible/types';

interface ChallengeStateComponentProps {
  bookName: string;
  chapter: number;
  title: string;
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  questions: any[];
  userAnswers: Record<number, string>;
  completed: boolean;
  onAnswer: (questionIndex: number, answer: string) => void;
  onNextQuestion: () => void;
  onSubmit: () => void;
  onRetry: () => void;
  onGoBack: () => void;
}

const ChallengeState: React.FC<ChallengeStateComponentProps> = ({
  bookName,
  chapter,
  title,
  currentQuestion,
  totalQuestions,
  score,
  questions,
  userAnswers,
  completed,
  onAnswer,
  onNextQuestion,
  onSubmit,
  onRetry,
  onGoBack,
}) => {
  const currentQuestionData = questions[currentQuestion];
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const selectedAnswer = userAnswers[currentQuestion] || '';
  
  if (completed) {
    // Show results view
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Challenge Results</h2>
        
        <div className="text-center py-6">
          <p className="text-lg mb-2">You scored</p>
          <div className="text-4xl font-bold mb-2">
            {score} / {totalQuestions}
          </div>
          <p className="text-gray-600">
            {score === totalQuestions 
              ? "Perfect! Amazing job!" 
              : score >= totalQuestions / 2 
                ? "Good job! Keep studying." 
                : "Keep studying and try again."}
          </p>
        </div>
        
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={onGoBack}
          >
            Return to Book
          </Button>
          
          <Button onClick={onRetry}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }
  
  // Show question view
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-1">Question {currentQuestion + 1} of {totalQuestions}</p>
        <h3 className="text-xl font-medium">{currentQuestionData?.question}</h3>
      </div>
      
      <div className="space-y-3 mb-6">
        {currentQuestionData?.options.map((option: string, index: number) => (
          <div 
            key={index}
            className={`p-3 border rounded-md cursor-pointer ${
              selectedAnswer === option 
                ? 'bg-blue-50 border-blue-500' 
                : 'hover:bg-gray-50'
            }`}
            onClick={() => onAnswer(currentQuestion, option)}
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mt-6">
        <Button
          onClick={isLastQuestion ? onSubmit : onNextQuestion}
          disabled={!selectedAnswer}
        >
          {isLastQuestion ? 'Finish' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default ChallengeState;
