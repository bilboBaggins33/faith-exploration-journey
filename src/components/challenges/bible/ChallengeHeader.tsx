
import React from 'react';
import { Book } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import BiblePassageDialog from '../BiblePassageDialog';

interface ChallengeHeaderProps {
  bookName: string;
  chapter: number;
  title: string;
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  showProgress: boolean;
}

const ChallengeHeader = ({ 
  bookName, 
  chapter, 
  title, 
  currentQuestion, 
  totalQuestions, 
  score, 
  showProgress 
}: ChallengeHeaderProps) => {
  return (
    <div className="mb-8 text-center">
      <div className="flex items-center justify-center mb-2">
        <Book className="mr-2 text-bible-blue" size={20} />
        <h3 className="text-lg font-medium">{bookName || 'Bible'} {chapter}</h3>
      </div>
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-4">
        {title}
      </h1>
      
      {showProgress && totalQuestions > 0 && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {totalQuestions}</span>
            <span>{score} points earned</span>
          </div>
          <Progress value={((currentQuestion + 1) / totalQuestions) * 100} className="h-2" />
        </div>
      )}
      
      <div className="mb-4">
        <BiblePassageDialog
          bookName={bookName || ''}
          chapter={chapter || 1}
          passageText={""}
        />
      </div>
    </div>
  );
};

export default ChallengeHeader;
