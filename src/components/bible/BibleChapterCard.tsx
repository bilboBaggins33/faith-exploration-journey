import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useAuth } from '@/context/auth';
import type { ChapterDifficultyScores } from '@/hooks/bible/bible-progress-types';

interface BibleChapterCardProps {
  bookId: string;
  chapter: number;
  title?: string;
  isCompleted: boolean;
  scores: ChapterDifficultyScores;
  maxScore: number;
  isUnlocked?: boolean;
  onCardClick: (bookId: string, chapter: number, difficulty: 'easy' | 'medium' | 'hard') => void;
}

const BibleChapterCard: React.FC<BibleChapterCardProps> = ({
  bookId,
  chapter,
  title,
  isCompleted,
  scores,
  maxScore,
  isUnlocked = true,
  onCardClick,
}) => {
  const isFirstChapter = chapter === 1;

  const { user } = useAuth();

  const handleDifficultyClick = React.useCallback(
    (e: React.MouseEvent, difficulty: 'easy' | 'medium' | 'hard') => {
      e.stopPropagation();
      onCardClick(bookId, chapter, difficulty);
    },
    [bookId, chapter, onCardClick]
  );

  // First chapter is always unlocked for everyone
  const effectivelyUnlocked = isFirstChapter || isUnlocked;

  // Glassmorphism styling based on state
  const getGlassStyles = () => {
    if (!effectivelyUnlocked) {
      return "bg-gray-200/80 border-gray-300/50 opacity-70";
    }
    if (isCompleted) {
      return "bg-amber-50/70 backdrop-blur-sm border-amber-200/60";
    }
    return "bg-white/70 backdrop-blur-sm border-white/70 hover:bg-white/80";
  };

  const getScoreColor = (score: number, max: number) => {
    if (max === 0) return null;
    const ratio = Math.min(score / max, 1);
    // Interpolate hue: 0 (red) → 38 (amber) → 142 (green)
    const hue = ratio < 0.5
      ? Math.round(ratio * 2 * 38)           // 0 → 38
      : Math.round(38 + (ratio - 0.5) * 2 * (142 - 38)); // 38 → 142
    return `hsl(${hue}, 80%, 45%)`;
  };

  const renderDifficultyButton = (
    difficulty: 'easy' | 'medium' | 'hard',
    label: string,
    difficultyScore: ChapterDifficultyScores['easy'],
    colorClass: string,
    _bgClass: string
  ) => {
    const score = difficultyScore.score;
    const isPerfect = score === maxScore && maxScore > 0;
    const hasAttempt = difficultyScore.attempted;
    const dynamicColor = getScoreColor(score, maxScore);
    
    return (
      <button
        onClick={(e) => handleDifficultyClick(e, difficulty)}
        disabled={!effectivelyUnlocked}
        className={cn(
          "flex-1 flex flex-col items-center justify-center p-1.5 rounded-lg border transition-all relative overflow-hidden",
          effectivelyUnlocked ? "hover:scale-105 cursor-pointer shadow-sm hover:shadow-md" : "cursor-not-allowed",
          !hasAttempt && "bg-white/50 border-gray-200 hover:bg-gray-50",
          !effectivelyUnlocked && "opacity-60"
        )}
        style={hasAttempt && dynamicColor ? { backgroundColor: dynamicColor, borderColor: dynamicColor } : {}}
      >
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-wider mb-0.5",
          hasAttempt ? "text-white drop-shadow-sm" : "text-gray-500"
        )}>
          {label}
        </span>
        <div className="flex items-center justify-center">
          {isPerfect ? (
            <CheckCircle className="w-3.5 h-3.5 text-white drop-shadow-sm" />
          ) : (
            <span className={cn(
              "text-xs font-semibold leading-none",
              hasAttempt ? "text-white" : "text-gray-400"
            )}>
              {hasAttempt ? `${score}/${maxScore}` : '-'}
            </span>
          )}
        </div>
      </button>
    );
  };

  return (
    <motion.div
      whileHover={effectivelyUnlocked ? { y: -2, scale: 1.02 } : {}}
      transition={{ duration: 0.18 }}
      className={cn(
        "p-2.5 rounded-2xl border-0 transition-all shadow-md w-full h-full",
        "flex flex-col relative",
        getGlassStyles()
      )}
    >
      <div className="flex-grow flex flex-col">
        {/* Header section with Chapter number and Title */}
        <div className="flex flex-col mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-gray-800 bg-white/60 px-2 py-0.5 rounded-md shadow-sm">
              Ch. {chapter}
            </span>
            {isFirstChapter && !user && (
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700">
                Free
              </span>
            )}
            {!effectivelyUnlocked && (
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700">
                Lock
              </span>
            )}
          </div>
          
          {title ? (
            <span className="text-xs text-gray-600 line-clamp-2 leading-tight font-medium min-h-[32px]" title={title}>
              {title}
            </span>
          ) : (
            <div className="min-h-[32px]" />
          )}
        </div>

        {/* Difficulty buttons section */}
        <div className="flex gap-1.5 w-full mt-auto">
          {renderDifficultyButton('easy', 'Easy', scores.easy, 'text-green-600', 'bg-green-500 border-green-600')}
          {renderDifficultyButton('medium', 'Med', scores.medium, 'text-amber-500', 'bg-amber-400 border-amber-500')}
          {renderDifficultyButton('hard', 'Hard', scores.hard, 'text-red-500', 'bg-red-500 border-red-600')}
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(BibleChapterCard);