
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookText, RefreshCw } from 'lucide-react';

interface ResultsActionsProps {
  onRetake: () => void;
  onContinue: () => void;
}

const ResultsActions: React.FC<ResultsActionsProps> = ({
  onRetake,
  onContinue
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 justify-center mt-6">
      <Button 
        onClick={onRetake}
        variant="outline"
        className="flex items-center"
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Retake Challenge
      </Button>
      <Button 
        onClick={onContinue}
        className="flex items-center"
      >
        <BookText className="mr-2 h-4 w-4" />
        Continue Reading
      </Button>
    </div>
  );
};

export default ResultsActions;
