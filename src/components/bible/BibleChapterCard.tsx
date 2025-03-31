
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ChapterProgressChart from './ChapterProgressChart';
import { getProgressColorClass } from '@/lib/color-utils';
import { CheckCircle, Circle } from 'lucide-react';

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

  const getCardClasses = () => {
    if (!isCompleted) {
      return "bg-white/70 border-gray-200 hover:border-bible-blue hover:bg-blue-50/80";
    }
    if (scorePercentage === 100) {
      return "bg-green-50/70 border-green-200 hover:bg-green-100/80";
    }
    if (scorePercentage >= 50) {
      return "bg-orange-50/70 border-orange-200 hover:bg-orange-100/80";
    }
    return "bg-red-50/70 border-red-200 hover:bg-red-100/80";
  };

  return (
    <motion.div
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: chapter * 0.02 }}
      className={cn(
        "p-4 rounded-lg border-2 cursor-pointer transition-all backdrop-blur-sm w-full h-full flex flex-col",
        getCardClasses()
      )}
      onClick={onClick}
    >
      <div className="text-center flex flex-col justify-between h-full">
        <div>
          {isCompleted ? (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="mb-2 flex justify-center"
            >
              <CheckCircle 
                className={cn(
                  "h-6 w-6",
                  scorePercentage === 100 ? "text-green-500" : 
                  scorePercentage >= 50 ? "text-orange-500" : "text-red-500"
                )} 
              />
            </motion.div>
          ) : (
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="mb-2 flex justify-center"
            >
              <Circle className="h-6 w-6 text-gray-300" />
            </motion.div>
          )}

          <motion.span 
            className="font-bold text-lg block"
            whileHover={{ scale: 1.05 }}
          >
            {chapter}
          </motion.span>
        </div>

        <div className="mt-2">
          <ChapterProgressChart 
            percentage={scorePercentage} 
            showPercentage={true} 
            className="mt-2"
          />
          
          {isCompleted && (
            <motion.p 
              className="text-xs mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className={cn(
                scorePercentage === 100 ? "text-green-600" : 
                scorePercentage >= 50 ? "text-orange-600" : "text-red-600"
              )}>
                {score}/{maxScore}
              </span>
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BibleChapterCard;
