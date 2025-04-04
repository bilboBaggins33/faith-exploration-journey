
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ChapterProgressChart from './ChapterProgressChart';
import { BookOpen, CheckCircle, PlusCircle, Unlock, Lock } from 'lucide-react';

interface BibleChapterCardProps {
  bookId: string;
  chapter: number;
  isCompleted: boolean;
  score: number;
  maxScore: number;
  isUnlocked?: boolean;
  onClick: () => void;
}

const BibleChapterCard: React.FC<BibleChapterCardProps> = ({
  bookId,
  chapter,
  isCompleted,
  score,
  maxScore,
  isUnlocked = true,
  onClick,
}) => {
  const scorePercentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const isFirstChapter = chapter === 1;

  const getBorderColorClass = () => {
    if (!isUnlocked) return "border-gray-200 hover:border-gray-300 bg-gray-50";
    if (!isCompleted) return "border-gray-200 hover:border-bible-blue hover:bg-blue-50";
    if (scorePercentage === 100) return "bg-green-50 border-green-200";
    if (scorePercentage >= 50) return "bg-orange-50 border-orange-200";
    return "bg-red-50 border-red-200";
  };

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
      className={cn(
        "p-2 rounded-md border cursor-pointer transition-all shadow-sm w-full h-full",
        "bg-opacity-80 overflow-hidden relative text-center",
        getBorderColorClass()
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-full">
          <span className="text-xs font-medium block mb-1">Ch {chapter}</span>
          
          <div className="absolute top-0 right-0">
            {isCompleted ? (
              <CheckCircle className="w-3 h-3 text-green-500" />
            ) : isFirstChapter ? (
              <Unlock className="w-3 h-3 text-bible-blue" />
            ) : !isUnlocked ? (
              <Lock className="w-3 h-3 text-gray-400" />
            ) : (
              <PlusCircle className="w-3 h-3 text-gray-400" />
            )}
          </div>
        </div>
        
        <div className="w-full mb-1">
          <ChapterProgressChart 
            percentage={scorePercentage} 
            showPercentage={false}
          />
        </div>
        
        {isCompleted && (
          <p className="text-[10px] text-gray-500">
            {score}/{maxScore}
          </p>
        )}
        
        {isFirstChapter && (
          <p className="text-[10px] text-bible-blue mt-1">
            Free Chapter
          </p>
        )}

        {!isUnlocked && !isFirstChapter && (
          <p className="text-[10px] text-gray-500 mt-1">
            Premium
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default BibleChapterCard;
