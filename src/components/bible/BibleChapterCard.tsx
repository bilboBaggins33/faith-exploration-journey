
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ChapterProgressChart from './ChapterProgressChart';
import { BookOpen, CheckCircle, Unlock, Lock } from 'lucide-react';
import { useAuth } from '@/context/auth';

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

  // Custom color logic for score based on the specific business rules
  const getScoreColor = () => {
    if (score === 5) return "text-green-500"; // 5 correct answers
    if (score >= 2 && score <= 4) return "text-amber-500"; // 2-4 correct answers
    return "text-red-500"; // 1 or fewer correct answers
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
          <span className="text-sm font-semibold block mb-1 text-gray-700"> Ch.{chapter}</span>
          <div className="absolute top-0 right-0">
            {isCompleted ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : isFirstChapter && !user ? (
              <Unlock className="w-4 h-4 text-bible-blue" />
            ) : !effectivelyUnlocked ? (
              <Lock className="w-4 h-4 text-gray-400" />
            ) : null}
          </div>
        </div>
        {isCompleted && (
          <div className="w-full mb-1">
            <ChapterProgressChart 
              percentage={scorePercentage} 
              showPercentage={false}
            />
            <p className={`text-xs mt-1 font-medium ${getScoreColor()}`}>
              {score}/{maxScore}
            </p>
          </div>
        )}
        {!isCompleted && (
          <div className="w-full mb-1">
            <div className="w-full h-2 bg-gray-200 rounded-full"></div>
          </div>
        )}
        {(!user && isFirstChapter) && (
          <span className="inline-block px-2 py-0.5 rounded-full bg-bible-blue/10 text-bible-blue text-[10px] font-semibold mt-1 border border-bible-blue/20">Free Chapter</span>
        )}
        {!effectivelyUnlocked && !isFirstChapter && (
          <span className="inline-block px-2 py-0.5 rounded-full bg-orange-300 text-gray-600 text-[10px] font-semibold mt-1 border border-gray-300">Premium</span>
        )}
      </div>
    </motion.div>
  );
};

export default BibleChapterCard;
