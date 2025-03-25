
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Bookmark, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ResultsCardProps {
  score: number;
  totalQuestions: number;
  keyVerseText: string;
  keyVerse: string;
  onRestartQuiz: () => void;
  onNavigateToBook: () => void;
  onNavigateToBible: () => void;
  bookName: string;
}

const ResultsCard = ({
  score,
  totalQuestions,
  keyVerseText,
  keyVerse,
  onRestartQuiz,
  onNavigateToBook,
  onNavigateToBible,
  bookName
}: ResultsCardProps) => {
  // Ensure that score doesn't exceed totalQuestions
  const normalizedScore = Math.min(score, totalQuestions);
  const percentage = totalQuestions > 0 ? Math.round((normalizedScore / totalQuestions) * 100) : 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="p-8 text-center">
        <Award className={cn(
          "mx-auto mb-4", 
          normalizedScore === totalQuestions ? "text-purple-500" : "text-bible-gold"
        )} size={60} />
        
        <h2 className="text-2xl font-bold mb-2">
          {normalizedScore === totalQuestions ? "Perfect Score!" : "Challenge Completed!"}
        </h2>
        
        <p className="text-gray-600 mb-2">
          You've earned {normalizedScore} out of {totalQuestions} possible points.
        </p>
        
        <div className="w-full max-w-xs mx-auto mb-6">
          <Progress 
            value={Math.min(percentage, 100)} 
            className={cn(
              "h-3 rounded-full",
              normalizedScore === totalQuestions ? "bg-purple-200" : ""
            )}
          />
          <p className="text-sm text-gray-500 mt-1">
            {Math.min(percentage, 100)}% complete
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-2 flex items-center justify-center">
            <Bookmark className="mr-2 text-bible-blue" size={16} />
            Key Verse to Remember
          </h3>
          <p className="italic text-gray-700 mb-2">"{keyVerseText}"</p>
          <p className="text-sm text-gray-500">{keyVerse}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-4">
          <Button 
            onClick={onRestartQuiz}
            variant="outline"
          >
            Retake Challenge
          </Button>
          
          <Button onClick={onNavigateToBook}>
            Return to {bookName || 'Book'}
          </Button>
        </div>
        
        <div className="mt-6">
          <Button 
            variant="link" 
            className="text-gray-500"
            onClick={onNavigateToBible}
          >
            <BookOpen className="mr-2" size={16} />
            Bible Explorer
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default ResultsCard;
