import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
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

  // Bar colors based on score
  const getBarColor = (index: number) => {
    if (index >= score) return "bg-gray-300/60";
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
        return "bg-white/30";
    }
  };

  // Glassmorphism styling based on state
  const getGlassStyles = () => {
    if (!effectivelyUnlocked) {
      return "bg-gray-200/80 border-gray-300/50";
    }
    if (isCompleted) {
      if (scorePercentage === 100) {
        return "bg-green-100/70 backdrop-blur-sm border-green-300/60";
      }
      if (scorePercentage >= 50) {
        return "bg-amber-100/70 backdrop-blur-sm border-amber-300/60";
      }
      return "bg-red-100/70 backdrop-blur-sm border-red-300/60";
    }
    return "bg-white/70 backdrop-blur-sm border-white/70 hover:bg-white/80";
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ duration: 0.18 }}
      className={cn(
        "p-3 rounded-2xl border cursor-pointer transition-all shadow-lg w-full h-full",
        "overflow-hidden relative text-center",
        getGlassStyles()
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
                  "h-2 flex-1 rounded-full transition-colors",
                  getBarColor(index)
                )}
              />
            ))}
          </div>
        </div>
        {(!user && isFirstChapter) && (
          <span className="inline-block px-2 py-0.5 rounded-full bg-blue-500/20 backdrop-blur-sm text-blue-700 text-[10px] font-semibold mt-3 border border-blue-300/40">
            Sample
          </span>
        )}
        {!effectivelyUnlocked && !isFirstChapter && (
          <span className="inline-block px-2 py-0.5 rounded-full bg-amber-400/20 backdrop-blur-sm text-amber-700 text-[10px] font-semibold mt-3 border border-amber-300/40">
            Sign in
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default BibleChapterCard;