import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/auth';
import type { ChapterDifficultyScores } from '@/hooks/bible/bible-progress-types';
import MiniDonutChart from '@/components/ui/MiniDonutChart';

const DIFFICULTY_COLORS = {
  easy:   'hsl(142, 71%, 45%)',
  medium: 'hsl(38,  92%, 50%)',
  hard:   'hsl(0,   72%, 51%)',
} as const;

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

  const getScoreColor = (score: number, max: number): string => {
    if (max === 0) return DIFFICULTY_COLORS.easy;
    const ratio = Math.min(score / max, 1);
    const hue = ratio < 0.5
      ? Math.round(ratio * 2 * 38)
      : Math.round(38 + (ratio - 0.5) * 2 * (142 - 38));
    return `hsl(${hue}, 80%, 45%)`;
  };

  const renderDifficultyDonut = (
    difficulty: 'easy' | 'medium' | 'hard',
    label: string,
    difficultyScore: ChapterDifficultyScores['easy'],
  ) => {
    const { score, attempted } = difficultyScore;
    const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
    const ringColor = attempted ? getScoreColor(score, maxScore) : DIFFICULTY_COLORS[difficulty];

    return (
      <button
        key={difficulty}
        onClick={(e) => handleDifficultyClick(e, difficulty)}
        disabled={!effectivelyUnlocked}
        className={cn(
          "flex-1 flex flex-col items-center rounded-lg transition-all",
          effectivelyUnlocked ? "hover:scale-105 cursor-pointer" : "cursor-not-allowed opacity-60"
        )}
      >
        <MiniDonutChart
          percentage={attempted ? pct : 0}
          color={ringColor}
          label={label}
          centerText={attempted ? `${score}/${maxScore}` : '—'}
          size={38}
        />
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

        {/* Difficulty donuts */}
        <div className="flex gap-1 w-full mt-auto">
          {renderDifficultyDonut('easy',   'Easy', scores.easy)}
          {renderDifficultyDonut('medium', 'Med',  scores.medium)}
          {renderDifficultyDonut('hard',   'Hard', scores.hard)}
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(BibleChapterCard);