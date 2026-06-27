
import React, { useState } from 'react';
import { Star, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getBookThumbnail } from '@/data/bible/book-images';
import MiniDonutChart from '@/components/ui/MiniDonutChart';
import { DifficultyProgress } from '@/hooks/bible/use-difficulty-progress';
import type { BookStars } from '@/hooks/bible/bible-progress-utils';

interface BibleBookCardProps {
  bookId: string;
  bookName: string;
  totalChapters: number;
  progressPercent: number;
  testament: 'old' | 'new';
  difficultyProgress?: DifficultyProgress;
  stars?: BookStars;
  onClick: () => void;
}

const DIFFICULTY_COLORS = {
  easy: 'hsl(142, 71%, 45%)',
  medium: 'hsl(38, 92%, 50%)',
  hard: 'hsl(0, 72%, 51%)',
};

const DIFFICULTY_LABELS = { easy: 'Easy', medium: 'Med', hard: 'Hard' } as const;

function scoreColor(pct: number, attempted: boolean): string {
  if (!attempted) return 'text-muted-foreground/30';
  if (pct >= 90) return 'text-green-600';
  if (pct >= 70) return 'text-emerald-500';
  if (pct >= 50) return 'text-amber-500';
  if (pct >= 30) return 'text-orange-500';
  return 'text-red-500';
}

const BibleBookCard: React.FC<BibleBookCardProps> = ({
  bookId,
  bookName,
  totalChapters,
  progressPercent,
  testament,
  difficultyProgress,
  stars,
  onClick
}) => {
  const [imageError, setImageError] = useState(false);

  const hasStars = !!stars && stars.total > 0;
  const mastered = !!stars?.mastered;

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-500 ease hover:shadow-2xl hover:scale-105 cursor-pointer h-full flex flex-col rounded-lg shadow-lg bg-card',
        mastered ? 'border-2 border-amber-300 shadow-amber-200/50' : 'border-0'
      )}
      onClick={onClick}
    >
      {/* Image section */}
      <div className="relative pb-[46.67%]">
        <img
          src={imageError ? '/assets/bible/default.jpg' : getBookThumbnail(bookId)}
          alt={`${bookName} cover`}
          className="absolute inset-0 object-cover w-full h-full rounded-t-lg"
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-t-lg" />

        {/* Stars / mastery badge */}
        {mastered ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-white inline-flex items-center gap-1 shadow-md">
            <Crown className="h-3 w-3" />
            Mastered
          </span>
        ) : hasStars ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/55 text-white backdrop-blur-sm inline-flex items-center gap-1 shadow-sm">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {stars!.earned}/{stars!.total}
          </span>
        ) : null}

        <div className="absolute bottom-0 left-0 p-3">
          <h2 className="font-serif font-semibold text-white text-2xl sm:text-2xl drop-shadow-[0_0px_2px_rgba(0,0,0,0.5)]">
            {bookName}
          </h2>
          <p className="text-white text-xs sm:text-sm flex justify-between">
          <span className="text-white drop-shadow-[0_0px_2px_rgba(0,0,0,0.5)]">{totalChapters} chapters</span>
          </p>
        </div>
      </div>

      {/* Bottom section with donuts */}
      <div className="px-2 py-2 mt-auto bg-white border-t border-border/10">
        {difficultyProgress ? (
          <div className="flex items-start justify-around">
            {(['easy', 'medium', 'hard'] as const).map(diff => {
              const dp = difficultyProgress[diff];
              const attempted = dp.completed > 0;
              return (
                <div key={diff} className="flex flex-col items-center gap-0.5">
                  <MiniDonutChart
                    percentage={dp.percentage}
                    color={DIFFICULTY_COLORS[diff]}
                    label={DIFFICULTY_LABELS[diff]}
                    centerText={`${dp.completed}/${dp.total}`}
                    size={40}
                  />
                  {/* Fixed-height score row — always rendered to keep alignment */}
                  <div className="h-3.5 flex items-center justify-center">
                    <span className={`text-[9px] font-semibold ${scoreColor(dp.correctPercentage, attempted)}`}>
                      {attempted ? `${dp.correctPercentage}%` : '—'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BibleBookCard;
