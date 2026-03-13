
import React, { useState } from 'react';
import { getBookThumbnail } from '@/data/bible/book-images';
import MiniDonutChart from '@/components/ui/MiniDonutChart';
import { DifficultyProgress } from '@/hooks/bible/use-difficulty-progress';

interface BibleBookCardProps {
  bookId: string;
  bookName: string;
  totalChapters: number;
  progressPercent: number;
  testament: 'old' | 'new';
  difficultyProgress?: DifficultyProgress;
  onClick: () => void;
}

const DIFFICULTY_COLORS = {
  easy: 'hsl(142, 71%, 45%)',    // green
  medium: 'hsl(38, 92%, 50%)',   // amber
  hard: 'hsl(0, 72%, 51%)',      // red
};

const BibleBookCard: React.FC<BibleBookCardProps> = ({
  bookId,
  bookName,
  totalChapters,
  progressPercent,
  testament,
  difficultyProgress,
  onClick
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="overflow-hidden transition-all duration-500 ease hover:shadow-2xl hover:scale-105 cursor-pointer h-full flex flex-col rounded-lg border-0 shadow-lg bg-card"
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
        <div className="absolute bottom-0 left-0 p-3">
          <h2 className="font-semibold text-white text-2xl sm:text-2xl drop-shadow-[0_0px_2px_rgba(0,0,0,0.5)]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {bookName}
          </h2>
          <p className="text-white text-xs sm:text-sm flex justify-between">
          <span className="text-white drop-shadow-[0_0px_2px_rgba(0,0,0,0.5)]">{totalChapters} chapters</span>
          </p>
        </div>
      </div>

      {/* Bottom section with donuts */}
      <div className="p-3 mt-auto bg-white border-t border-border/10">

        {difficultyProgress ? (
          <div className="flex items-center justify-around pt-1 pb-1">
            <div className="flex flex-col items-center">
              <MiniDonutChart
                percentage={difficultyProgress.easy.percentage}
                color={DIFFICULTY_COLORS.easy}
                label="Easy"
                size={34}
              />
              <div className="text-[9px] text-muted-foreground mt-1 text-center flex flex-col">
                {difficultyProgress.easy.completed > 0 ? (
                  <>
                    <span><span className="font-semibold text-foreground/80">{difficultyProgress.easy.completed}</span> attempted</span>
                    <span><span className="font-semibold text-foreground/80">{difficultyProgress.easy.correctPercentage}%</span> avg score</span>
                  </>
                ) : (
                  <span className="opacity-50">—</span>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <MiniDonutChart
                percentage={difficultyProgress.medium.percentage}
                color={DIFFICULTY_COLORS.medium}
                label="Med"
                size={34}
              />
              <div className="text-[9px] text-muted-foreground mt-1 text-center flex flex-col">
                {difficultyProgress.medium.completed > 0 ? (
                  <>
                    <span><span className="font-semibold text-foreground/80">{difficultyProgress.medium.completed}</span> attempted</span>
                    <span><span className="font-semibold text-foreground/80">{difficultyProgress.medium.correctPercentage}%</span> avg score</span>
                  </>
                ) : (
                  <span className="opacity-50">—</span>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <MiniDonutChart
                percentage={difficultyProgress.hard.percentage}
                color={DIFFICULTY_COLORS.hard}
                label="Hard"
                size={34}
              />
              <div className="text-[9px] text-muted-foreground mt-1 text-center flex flex-col">
                {difficultyProgress.hard.completed > 0 ? (
                  <>
                    <span><span className="font-semibold text-foreground/80">{difficultyProgress.hard.completed}</span> attempted</span>
                    <span><span className="font-semibold text-foreground/80">{difficultyProgress.hard.correctPercentage}%</span> avg score</span>
                  </>
                ) : (
                  <span className="opacity-50">—</span>
                )}
              </div>
            </div>
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
