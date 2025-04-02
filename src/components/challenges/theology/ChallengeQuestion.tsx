
import React from 'react';
import { RadioGroup } from "@/components/ui/radio-group";
import QuestionOption from './question/QuestionOption';
import QuestionExplanation from './question/QuestionExplanation';

interface ChallengeQuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer: string;
  isSubmitted: boolean;
  explanation: string;
  onSelectAnswer: (answer: string) => void;
}

const ChallengeQuestion: React.FC<ChallengeQuestionProps> = ({
  question,
  options,
  correctAnswer,
  selectedAnswer,
  isSubmitted,
  explanation,
  onSelectAnswer
}) => {
  return (
    <div>
      <h3 className="text-xl font-medium mb-6">{question}</h3>
      
      <RadioGroup 
        value={selectedAnswer} 
        onValueChange={onSelectAnswer}
        className="space-y-3"
        disabled={isSubmitted}
      >
        {options.map((option, index) => (
          <QuestionOption
            key={index}
            option={option}
            index={index}
            isSelected={selectedAnswer === option}
            isCorrect={option === correctAnswer}
            isSubmitted={isSubmitted}
            onSelect={() => onSelectAnswer(option)}
          />
        ))}
      </RadioGroup>
      
      <QuestionExplanation 
        explanation={explanation}
        isVisible={isSubmitted}
      />
    </div>
  );
};

export default ChallengeQuestion;
