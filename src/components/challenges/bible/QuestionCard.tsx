
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X, Eye, EyeOff } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer: string | null;
  showExplanation: boolean;
  isCorrect: boolean | null;
  explanation: string;
  onSelectAnswer: (answer: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
  onNavigateBack: (() => void) | null;
}

const QuestionCard = ({
  question,
  options,
  correctAnswer,
  selectedAnswer,
  showExplanation,
  isCorrect,
  explanation,
  onSelectAnswer,
  onCheckAnswer,
  onNextQuestion,
  isLastQuestion,
  onNavigateBack
}: QuestionCardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleShowAnswer = () => setShowAnswer(!showAnswer);
  
  return (
    <div className="glass-card p-6 rounded-xl">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-medium mb-6">
          {question}
        </h2>
        
        <RadioGroup
          value={selectedAnswer || ""}
          onValueChange={onSelectAnswer}
          className="space-y-3 mb-6"
          disabled={showExplanation}
        >
          {options.map((option, index) => (
  <div
    key={index}
    onClick={() => !showExplanation && onSelectAnswer(option)}
    className={cn(
      "flex items-center rounded-lg border p-4 cursor-pointer transition-all",
      selectedAnswer === option ? 'border-bible-blue bg-bible-blue/5' : 'border-gray-200',
      showExplanation && option === correctAnswer ? 'border-green-500 bg-green-50' : '',
      showExplanation && selectedAnswer === option && option !== correctAnswer ? 'border-red-500 bg-red-50' : ''
    )}
    tabIndex={0}
    role="button"
    aria-pressed={selectedAnswer === option}
    onKeyDown={e => {
      if ((e.key === 'Enter' || e.key === ' ') && !showExplanation) {
        onSelectAnswer(option);
      }
    }}
  >
    <RadioGroupItem 
      value={option} 
      id={`option-${index}`} 
      className="mr-2"
      // Prevent double event when clicking the radio itself
      onClick={e => e.stopPropagation()}
    />
    <Label 
      htmlFor={`option-${index}`}
      className="flex-1 cursor-pointer"
      onClick={e => e.stopPropagation()}
    >
      {option}
    </Label>
    {showExplanation && option === correctAnswer && (
      <CheckCircle className="text-green-500 ml-2 flex-shrink-0" size={18} />
    )}
    {showExplanation && selectedAnswer === option && option !== correctAnswer && (
      <X className="text-red-500 ml-2 flex-shrink-0" size={18} />
    )}
  </div>
))}
        </RadioGroup>
        
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "p-4 rounded-lg mb-6",
              isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            )}
          >
            {showAnswer ? (
              <div className="flex items-start">
                {isCorrect ? (
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                ) : (
                  <X className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} />
                )}
                <div>
                  <h3 className="font-medium mb-1">
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </h3>
                  <p className="text-sm">{explanation}</p>
                </div>
              </div>
            ) : (
              <p className="text-sm">Answer explanation is available. Click "Show Answer" to reveal.</p>
            )}
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleShowAnswer} 
              className="mt-2 flex items-center gap-1"
            >
              {showAnswer ? (
                <>
                  <EyeOff size={16} /> Hide Answer
                </>
              ) : (
                <>
                  <Eye size={16} /> Show Answer
                </>
              )}
            </Button>
          </motion.div>
        )}
        
        <div className="flex justify-between">
          {onNavigateBack && (
            <Button
              variant="outline"
              onClick={onNavigateBack}
              className="flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-2" style={{width: 16, height: 16}}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Back
            </Button>
          )}
          
          {!showExplanation ? (
            <Button 
              disabled={!selectedAnswer}
              onClick={onCheckAnswer}
              className={cn(!onNavigateBack && 'ml-auto')}
            >
              Check Answer
            </Button>
          ) : (
            <Button 
              onClick={onNextQuestion}
              className={cn(!onNavigateBack && 'ml-auto')}
            >
              {!isLastQuestion ? (
                <>
                  Next Question
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2" style={{width: 16, height: 16}}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </>
              ) : (
                <>
                  Complete Challenge
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle ml-2" style={{width: 16, height: 16}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                </>
              )}
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionCard;
