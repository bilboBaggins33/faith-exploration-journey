
import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface ChallengeHeaderProps {
  bookName: string;
  chapter: number;
  title: string;
  currentQuestion?: number;
  totalQuestions?: number;
  score?: number;
  showProgress?: boolean;
  onBackClick?: () => void;
}

const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({
  bookName,
  chapter,
  title,
  currentQuestion = 0,
  totalQuestions = 0,
  score = 0,
  showProgress = true,
  onBackClick
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <button 
          onClick={onBackClick}
          className="mr-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          aria-label="Go back"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold font-serif">{bookName} {chapter}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{title}</p>
        </div>
      </div>
      
      {showProgress && totalQuestions > 0 && (
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>Question {currentQuestion + 1} of {totalQuestions}</span>
          <span>Score: {score}/{totalQuestions}</span>
        </div>
      )}
      
      {showProgress && totalQuestions > 0 && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
          <div 
            className="bg-bible-gold h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ChallengeHeader;
