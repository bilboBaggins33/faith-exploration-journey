
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ErrorStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionRoute?: string;
  onGoBack?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ 
  title = "Error", 
  description = "Something went wrong. Please try again.", 
  actionText = "Go Back", 
  actionRoute = "/bible",
  onGoBack 
}) => {
  const navigate = useNavigate();
  
  const handleAction = () => {
    if (onGoBack) {
      onGoBack();
    } else if (actionRoute) {
      navigate(actionRoute);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">{description}</p>
      <Button onClick={handleAction}>
        {actionText}
      </Button>
    </div>
  );
};

export default ErrorState;
