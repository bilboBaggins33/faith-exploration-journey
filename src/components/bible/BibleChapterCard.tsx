
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ChapterProgressChart from './ChapterProgressChart';
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
      whileHover={{ y: -5 }}
      className={cn(
        "p-4 rounded-lg border cursor-pointer transition-all shadow-sm",
        getBorderColorClass()
      )}
      onClick={onClick}
    >
      <div className="text-center">
        <div className="h-14 w-14 mx-auto mb-2">
          <ChapterProgressChart percentage={scorePercentage} />
        </div>
        <span className="font-medium block mb-1">Chapter {chapter}</span>
        {isCompleted && (
          <p className="text-xs text-gray-500">
            Score: {score}/{maxScore}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default BibleChapterCard;
