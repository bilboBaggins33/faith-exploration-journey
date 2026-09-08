import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Lock, Star, Crown, Sparkles } from 'lucide-react';
import { useAuth } from '@/context/auth';
import { getStarsForScore } from '@/hooks/bible/bible-progress-utils';

interface TheologyChapterCardProps {
  bookId: string;
  chapter: number;
  title?: string;
  isCompleted: boolean;
  score: number;
  maxScore: number;
  isUnlocked?: boolean;
  onClick: () => void;
}

const TheologyChapterCard: React.FC<TheologyChapterCardProps> = ({
  bookId: _bookId,
  chapter,
  title,
  isCompleted,
  score,
  maxScore,
  isUnlocked = true,
  onClick,
}) => {
  const isFirstChapter = chapter === 1;
  const { user } = useAuth();
  const effectivelyUnlocked = isFirstChapter || isUnlocked;
  const attempted = isCompleted || score > 0;
  const stars = attempted ? getStarsForScore(score, maxScore) : 0;
  const fullyMastered = stars === 3;

  const getCardStyles = () => {
    if (!effectivelyUnlocked) return 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200';
    if (fullyMastered)
      return 'bg-gradient-to-br from-amber-100 via-amber-50 to-white border-amber-300 shadow-amber-200/60';
    if (attempted) return 'bg-gradient-to-br from-amber-50 to-white border-amber-200';
    return 'bg-white border-gray-200/80 hover:border-slate-300';
  };

  const getNumberBadgeStyles = () => {
    if (!effectivelyUnlocked) return 'bg-gradient-to-br from-gray-300 to-gray-400 text-white';
    if (fullyMastered || attempted)
      return 'bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-amber-300/40';
    return 'bg-gradient-to-br from-slate-700 to-slate-900 text-white';
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
    if (stars > 0) {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 inline-flex items-center gap-1">
          <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
          {stars}/3
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

      {effectivelyUnlocked ? (
        <button
          type="button"
          onClick={onClick}
          className={cn(
            'mt-auto w-full rounded-xl border px-3 py-2 flex flex-col items-center gap-1 transition-all hover:-translate-y-0.5 active:translate-y-0',
            attempted
              ? 'bg-amber-50 border-amber-300'
              : 'bg-white border-amber-200 hover:bg-amber-50',
            fullyMastered && 'ring-1 ring-amber-300 shadow-sm shadow-amber-200/60'
          )}
        >
          <span className="text-[9px] font-bold uppercase tracking-wide text-amber-600">
            {attempted ? 'Retry' : 'Start'}
          </span>
          <div className="flex items-center gap-0.5">
            {[0, 1, 2].map(i => (
              <Star
                key={i}
                className={cn(
                  'h-3.5 w-3.5 transition-colors',
                  i < stars
                    ? 'text-amber-400 fill-amber-400'
                    : attempted
                      ? 'text-gray-300 fill-gray-200'
                      : 'text-gray-300/70'
                )}
              />
            ))}
          </div>
        </button>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="mt-auto w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-2 flex items-center justify-center gap-1.5 text-xs font-bold shadow-sm hover:from-amber-500 hover:to-amber-600 transition-colors"
        >
          <Lock className="h-3.5 w-3.5" />
          Unlock
        </button>
      )}
    </motion.div>
  );
};

export default React.memo(TheologyChapterCard);
