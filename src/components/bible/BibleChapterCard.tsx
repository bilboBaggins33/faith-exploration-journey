import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Lock, Star, Crown, Sparkles } from 'lucide-react';
import { useAuth } from '@/context/auth';
import type { ChapterDifficultyScores, DifficultyScore } from '@/hooks/bible/bible-progress-types';
import { getStarsForScore } from '@/hooks/bible/bible-progress-utils';

type Difficulty = 'easy' | 'medium' | 'hard';

const DIFFICULTY_THEME: Record<
  Difficulty,
  { label: string; text: string; dot: string; idle: string; active: string }
> = {
  easy: {
    label: 'Easy',
    text: 'text-emerald-600',
    dot: 'bg-emerald-400',
    idle: 'bg-white border-emerald-200 hover:bg-emerald-50',
    active: 'bg-emerald-50 border-emerald-300',
  },
  medium: {
    label: 'Med',
    text: 'text-amber-600',
    dot: 'bg-amber-400',
    idle: 'bg-white border-amber-200 hover:bg-amber-50',
    active: 'bg-amber-50 border-amber-300',
  },
  hard: {
    label: 'Hard',
    text: 'text-rose-600',
    dot: 'bg-rose-400',
    idle: 'bg-white border-rose-200 hover:bg-rose-50',
    active: 'bg-rose-50 border-rose-300',
  },
};

interface BibleChapterCardProps {
  bookId: string;
  chapter: number;
  title?: string;
  isCompleted: boolean;
  scores: ChapterDifficultyScores;
  maxScore: number;
  isUnlocked?: boolean;
  onCardClick: (bookId: string, chapter: number, difficulty: Difficulty) => void;
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
    (e: React.MouseEvent, difficulty: Difficulty) => {
      e.stopPropagation();
      onCardClick(bookId, chapter, difficulty);
    },
    [bookId, chapter, onCardClick]
  );

  const effectivelyUnlocked = isFirstChapter || isUnlocked;

  const starsFor = (ds: DifficultyScore) => (ds.attempted ? getStarsForScore(ds.score, maxScore) : 0);
  const easyStars = starsFor(scores.easy);
  const medStars = starsFor(scores.medium);
  const hardStars = starsFor(scores.hard);
  const totalStars = easyStars + medStars + hardStars;
  const fullyMastered = easyStars === 3 && medStars === 3 && hardStars === 3;
  const anyAttempted = scores.easy.attempted || scores.medium.attempted || scores.hard.attempted;

  const getCardStyles = () => {
    if (!effectivelyUnlocked) return 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200';
    if (fullyMastered)
      return 'bg-gradient-to-br from-amber-100 via-amber-50 to-white border-amber-300 shadow-amber-200/60';
    if (anyAttempted || isCompleted) return 'bg-gradient-to-br from-amber-50 to-white border-amber-200';
    return 'bg-white border-gray-200/80 hover:border-slate-300';
  };

  const getNumberBadgeStyles = () => {
    if (!effectivelyUnlocked) return 'bg-gradient-to-br from-gray-300 to-gray-400 text-white';
    if (fullyMastered) return 'bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-amber-300/50';
    if (anyAttempted) return 'bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-amber-300/40';
    return 'bg-gradient-to-br from-slate-700 to-slate-900 text-white';
  };

  const renderStars = (count: number, attempted: boolean) => (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2].map((i) => (
        <Star
          key={i}
          className={cn(
            'h-3.5 w-3.5 transition-colors',
            i < count
              ? 'text-amber-400 fill-amber-400'
              : attempted
                ? 'text-gray-300 fill-gray-200'
                : 'text-gray-300/70'
          )}
        />
      ))}
    </div>
  );

  const renderDifficultyChip = (difficulty: Difficulty, ds: DifficultyScore) => {
    const theme = DIFFICULTY_THEME[difficulty];
    const stars = starsFor(ds);
    const mastered = stars === 3;

    return (
      <button
        key={difficulty}
        onClick={(e) => handleDifficultyClick(e, difficulty)}
        title={`${theme.label} · ${ds.attempted ? `${ds.score}/${maxScore}` : 'Not started'}`}
        aria-label={`${theme.label} difficulty, ${stars} of 3 stars`}
        className={cn(
          'flex-1 flex flex-col items-center gap-1 rounded-xl border px-1 py-1.5 transition-all hover:-translate-y-0.5 active:translate-y-0',
          ds.attempted ? theme.active : theme.idle,
          mastered && 'ring-1 ring-amber-300 shadow-sm shadow-amber-200/60'
        )}
      >
        <span className={cn('flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide', theme.text)}>
          <span className={cn('h-1.5 w-1.5 rounded-full', theme.dot)} />
          {theme.label}
        </span>
        {renderStars(stars, ds.attempted)}
      </button>
    );
  };

  const renderHeaderBadge = () => {
    if (!effectivelyUnlocked) {
      return (
        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 inline-flex items-center gap-1">
          <Lock className="h-2.5 w-2.5" />
          Premium
        </span>
      );
    }
    if (fullyMastered) {
      return (
        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-white inline-flex items-center gap-1 shadow-sm">
          <Crown className="h-2.5 w-2.5" />
          Mastered
        </span>
      );
    }
    if (totalStars > 0) {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 inline-flex items-center gap-1">
          <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
          {totalStars}/9
        </span>
      );
    }
    if (isFirstChapter && !user) {
      return (
        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 inline-flex items-center gap-1">
          <Sparkles className="h-2.5 w-2.5" />
          Free
        </span>
      );
    }
    return null;
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      className={cn(
        'p-3 rounded-2xl border transition-all shadow-sm hover:shadow-lg w-full h-full flex flex-col relative',
        getCardStyles()
      )}
    >
      {/* Header: chapter number badge + status badge */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={cn(
              'shrink-0 h-9 w-9 rounded-xl flex flex-col items-center justify-center leading-none shadow-sm',
              getNumberBadgeStyles()
            )}
          >
            <span className="text-[7px] font-semibold uppercase tracking-wider opacity-80">Ch</span>
            <span className="text-sm font-extrabold">{chapter}</span>
          </span>
        </div>
        {renderHeaderBadge()}
      </div>

      {/* Title */}
      {title ? (
        <span
          className="text-xs text-gray-700 line-clamp-2 leading-tight font-semibold min-h-[32px] mb-3"
          title={title}
        >
          {title}
        </span>
      ) : (
        <div className="min-h-[32px] mb-3" />
      )}

      {/* Footer: difficulty chips, or premium unlock bar */}
      {effectivelyUnlocked ? (
        <div className="flex gap-1.5 w-full mt-auto">
          {renderDifficultyChip('easy', scores.easy)}
          {renderDifficultyChip('medium', scores.medium)}
          {renderDifficultyChip('hard', scores.hard)}
        </div>
      ) : (
        <button
          onClick={(e) => handleDifficultyClick(e, 'easy')}
          className="mt-auto w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-2 flex items-center justify-center gap-1.5 text-xs font-bold shadow-sm hover:from-amber-500 hover:to-amber-600 transition-colors"
        >
          <Lock className="h-3.5 w-3.5" />
          Unlock
        </button>
      )}
    </motion.div>
  );
};

export default React.memo(BibleChapterCard);
