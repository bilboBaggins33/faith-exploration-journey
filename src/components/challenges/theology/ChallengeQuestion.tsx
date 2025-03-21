
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, X } from "lucide-react";

interface ChallengeQuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer: string;
  isSubmitted: boolean;
  explanation: string;
  onSelectAnswer: (answer: string) => void;
}

const ChallengeQuestion = ({
  question,
  options,
  correctAnswer,
  selectedAnswer,
  isSubmitted,
  explanation,
  onSelectAnswer
}: ChallengeQuestionProps) => {
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
          <div key={index} className={`
            flex items-start space-x-2 rounded-lg border p-3 cursor-pointer transition-colors
            ${isSubmitted && option === correctAnswer 
              ? 'border-green-500 bg-green-50' 
              : isSubmitted && option === selectedAnswer && 
                option !== correctAnswer 
                ? 'border-red-500 bg-red-50'
                : 'hover:bg-accent'}
          `}>
            <RadioGroupItem 
              value={option} 
              id={`option-${index}`} 
              className="mt-1"
            />
            <Label 
              htmlFor={`option-${index}`}
              className="flex-1 cursor-pointer font-normal text-base"
            >
              {option}
            </Label>
            {isSubmitted && option === correctAnswer && (
              <Check className="h-5 w-5 text-green-500 shrink-0" />
            )}
            {isSubmitted && option === selectedAnswer && 
              option !== correctAnswer && (
              <X className="h-5 w-5 text-red-500 shrink-0" />
            )}
          </div>
        ))}
      </RadioGroup>
      
      {isSubmitted && (
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Explanation</h4>
          <p className="text-sm text-muted-foreground">
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeQuestion;
