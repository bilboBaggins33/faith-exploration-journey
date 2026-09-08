import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TheologyBook } from '@/data/theology/types';
import type { BookStars } from '@/hooks/bible/bible-progress-utils';

interface BookCardProps {
  book: TheologyBook;
  completionPercentage: number;
  stars?: BookStars;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  completionPercentage,
  stars,
}) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const hasStars = !!stars && stars.total > 0;
  const mastered = !!stars?.mastered;

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-500 ease hover:shadow-2xl cursor-pointer h-full flex flex-col rounded-lg shadow-lg bg-card',
        mastered ? 'border-2 border-amber-300 shadow-amber-200/50' : 'border-0'
      )}
      onClick={() => navigate(`/theology/${book.id}`)}
    >
      <div className="relative pb-[46.67%]">
        <img
          src={imageError ? '/assets/bible/default.webp' : book.coverImage}
          alt={`${book.title} cover`}
          className="absolute inset-0 object-cover w-full h-full rounded-t-lg"
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-t-lg" />

        {mastered ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-white inline-flex items-center gap-1 shadow-md">
            <Crown className="h-3 w-3" />
            Mastered
          </span>
        ) : hasStars && stars!.earned > 0 ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/55 text-white backdrop-blur-sm inline-flex items-center gap-1 shadow-sm">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {stars!.earned}/{stars!.total}
          </span>
        ) : null}

        <div className="absolute bottom-0 left-0 p-3 pr-10">
          <h2 className="font-serif font-semibold text-white text-xl sm:text-2xl drop-shadow-[0_0px_2px_rgba(0,0,0,0.5)] line-clamp-2">
            {book.title}
          </h2>
          <p className="text-white text-xs sm:text-sm drop-shadow-[0_0px_2px_rgba(0,0,0,0.5)]">
            {book.author} · {book.chapters} chapters
          </p>
        </div>
      </div>

      <div className="px-3 py-2.5 mt-auto bg-white border-t border-border/10">
        <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1">
          <span>Progress</span>
          <span>{completionPercentage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
