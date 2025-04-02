
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Check, X } from 'lucide-react';

interface QuestionOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  isSubmitted: boolean;
  onSelect: () => void;
}

const QuestionOption: React.FC<QuestionOptionProps> = ({
  option,
  index,
  isSelected,
  isCorrect,
  isSubmitted,
  onSelect
}) => {
  const getOptionClass = () => {
    if (!isSubmitted) return 'hover:bg-accent';
    if (isCorrect) return 'border-green-500 bg-green-50';
    if (isSelected && !isCorrect) return 'border-red-500 bg-red-50';
    return 'hover:bg-accent';
  };

  return (
    <div className={`
      flex items-start space-x-2 rounded-lg border p-3 cursor-pointer transition-colors
      ${getOptionClass()}
    `}>
      <RadioGroupItem 
        value={option} 
        id={`option-${index}`} 
        className="mt-1"
        onClick={onSelect}
      />
      <Label 
        htmlFor={`option-${index}`}
        className="flex-1 cursor-pointer font-normal text-base"
      >
        {option}
      </Label>
      {isSubmitted && isCorrect && (
        <Check className="h-5 w-5 text-green-500 shrink-0" />
      )}
      {isSubmitted && isSelected && !isCorrect && (
        <X className="h-5 w-5 text-red-500 shrink-0" />
      )}
    </div>
  );
};

export default QuestionOption;
