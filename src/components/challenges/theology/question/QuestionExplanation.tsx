
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

interface QuestionExplanationProps {
  explanation: string;
  isVisible: boolean;
}

const QuestionExplanation: React.FC<QuestionExplanationProps> = ({
  explanation,
  isVisible
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  
  if (!isVisible) return null;
  
  return (
    <div className={cn(
      "mt-4 p-4 rounded-lg border", 
      showExplanation ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"
    )}>
      {showExplanation ? (
        <div className="text-sm">
          <h4 className="font-medium mb-1">Explanation:</h4>
          <p>{explanation}</p>
        </div>
      ) : (
        <p className="text-sm text-gray-600">Answer explanation available.</p>
      )}
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowExplanation(!showExplanation)}
        className="mt-2 flex items-center gap-1"
      >
        {showExplanation ? (
          <>
            <EyeOff size={16} /> Hide Explanation
          </>
        ) : (
          <>
            <Eye size={16} /> Show Explanation
          </>
        )}
      </Button>
    </div>
  );
};

export default QuestionExplanation;
