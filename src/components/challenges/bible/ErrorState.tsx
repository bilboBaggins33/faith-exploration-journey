import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import { QuizFrostPanel, QuizStage } from '@/components/challenges/QuizChrome';

interface ErrorStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionRoute?: string;
  onGoBack?: () => void;
  type?: 'bible' | 'theology';
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  description = 'Please try again.',
  actionText = 'Go Back',
  actionRoute = '/bible',
  onGoBack,
  type = 'bible',
}) => {
  const navigate = useNavigate();
  const { bookId } = useParams<{ bookId: string }>();

  const handleAction = () => {
    if (onGoBack) {
      onGoBack();
    } else if (actionRoute) {
      navigate(actionRoute);
    }
  };

  return (
    <QuizStage bookId={bookId} type={type}>
      <QuizFrostPanel className="w-full max-w-sm px-8 py-10 text-center text-white">
        <AlertTriangle className="h-10 w-10 text-bible-gold mx-auto mb-4" />
        <h2 className="text-xl font-serif font-semibold mb-2">{title}</h2>
        <p className="text-white/70 text-sm leading-relaxed mb-6">{description}</p>
        <Button onClick={handleAction} variant="onDark" className="w-full">
          {actionText}
        </Button>
      </QuizFrostPanel>
    </QuizStage>
  );
};

export default ErrorState;
