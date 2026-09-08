import { useParams } from 'react-router-dom';
import { QuizFrostPanel, QuizStage } from '@/components/challenges/QuizChrome';

interface LoadingStateProps {
  type?: 'bible' | 'theology';
}

const LoadingState = ({ type = 'bible' }: LoadingStateProps) => {
  const { bookId } = useParams<{ bookId: string }>();

  return (
    <QuizStage bookId={bookId} type={type}>
      <QuizFrostPanel className="w-full max-w-sm px-8 py-12 text-center text-white">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-white/20 border-t-bible-sky mx-auto mb-5" />
        <p className="text-white/80">Loading challenge…</p>
      </QuizFrostPanel>
    </QuizStage>
  );
};

export default LoadingState;
