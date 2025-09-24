import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Unlock, Lock } from 'lucide-react';
import { useAuth } from '@/context/auth';

interface BibleChapterCardProps {
  bookId: string;
  chapter: number;
  title?: string;
  isCompleted: boolean;
  score: number;
  maxScore: number;
  isUnlocked?: boolean;
  onClick: () => void;
}

const BibleChapterCard: React.FC<BibleChapterCardProps> = ({
  bookId,
  chapter,
  title,
  isCompleted,
  score,
  maxScore,
  isUnlocked = true,
  onClick,
}) => {
  const scorePercentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const isFirstChapter = chapter === 1;

  const { user } = useAuth();

  // First chapter is always unlocked for everyone
  const effectivelyUnlocked = isFirstChapter || isUnlocked;

  const getBorderColorClass = () => {
    if (!effectivelyUnlocked) return "border-gray-200 hover:border-gray-300 bg-gray-50";
    if (!isCompleted) return "border-gray-200 hover:border-bible-blue hover:bg-blue-50";
    if (scorePercentage === 100) return "bg-green-50 border-green-200";
    if (scorePercentage >= 50) return "bg-orange-50 border-orange-200";
    return "bg-red-50 border-red-200";
  };

  // Color gradient for bars: amber to green based on score
  const getBarColor = (index: number) => {
    if (index >= score) return "bg-gray-200";
    switch (score) {
      case 1:
        return "bg-red-400";
      case 2:
        return "bg-orange-400";
      case 3:
        return "bg-yellow-500";
      case 4:
        return "bg-lime-400";
      case 5:
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.025, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.10)" }}
      transition={{ duration: 0.18 }}
      className={cn(
        "p-3 rounded-xl border cursor-pointer transition-all shadow-sm w-full h-full",
        "bg-opacity-90 overflow-hidden relative text-center",
        getBorderColorClass(),
        effectivelyUnlocked ? "bg-gradient-to-br from-white via-white-50 to-gray-50" : "bg-gray-50"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-full">
          <span className="text-sm font-semibold block mb-1 text-gray-700">{chapter}</span>
          {title && (
            <span className="text-xs text-gray-500 block mb-2 truncate" title={title}>
              {title}
            </span>
          )}
          <div className="absolute top-0 right-0">
            {isCompleted ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : null}
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-1">
          <div className="flex space-x-1 w-full">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 flex-1 rounded-full",
                  getBarColor(index)
                )}
              />
            ))}
          </div>
        </div>
        {(!user && isFirstChapter) && (
          <span className="inline-block px-2 py-0.5 rounded-full bg-bible-blue/10 text-bible-blue text-[10px] font-semibold mt-3 border border-bible-blue/20">Sample Chapter</span>
        )}
        {!effectivelyUnlocked && !isFirstChapter && (
          <span className="inline-block px-2 py-0.5 rounded-full bg-orange-300 text-gray-600 text-[10px] font-semibold mt-3 border border-gray-300">Sign in</span>
        )}
      </div>
    </motion.div>
  );
};

export default BibleChapterCard;