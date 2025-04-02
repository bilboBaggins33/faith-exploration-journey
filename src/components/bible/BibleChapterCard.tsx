
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ChapterProgressChart from './ChapterProgressChart';
import { BookOpen, CheckCircle, PlusCircle } from 'lucide-react';
import { getProgressColorClass } from '@/lib/color-utils';

interface BibleChapterCardProps {
  bookId: string;
  chapter: number;
  isCompleted: boolean;
  score: number;
  maxScore: number;
  onClick: () => void;
}

const BibleChapterCard: React.FC<BibleChapterCardProps> = ({
  bookId,
  chapter,
  isCompleted,
  score,
  maxScore,
  onClick,
}) => {
  const scorePercentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  const getBorderColorClass = () => {
    if (!isCompleted) return "border-gray-200 hover:border-bible-blue hover:bg-blue-50";
    if (scorePercentage === 100) return "bg-green-50 border-green-200";
    if (scorePercentage >= 50) return "bg-orange-50 border-orange-200";
    return "bg-red-50 border-red-200";
  };

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
      className={cn(
        "p-4 rounded-lg border cursor-pointer transition-all shadow-sm w-full h-full backdrop-blur-sm",
        "bg-opacity-80 overflow-hidden relative",
        getBorderColorClass()
      )}
      onClick={onClick}
    >
      <div className="absolute top-0 right-0 opacity-10">
        <BookOpen className="w-16 h-16 text-gray-900" />
      </div>
      
      <div className="text-center relative z-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="absolute top-0 right-0 mt-1 mr-1"
        >
          {isCompleted ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <PlusCircle className="w-4 h-4 text-gray-400" />
          )}
        </motion.div>
        
        <span className="font-medium block mb-2">Chapter {chapter}</span>
        <div className="mb-2">
          <ChapterProgressChart 
            percentage={scorePercentage} 
            showPercentage={true}
          />
        </div>
        {isCompleted && (
          <motion.p 
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xs text-gray-500"
          >
            Score: {score}/{maxScore}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default BibleChapterCard;
