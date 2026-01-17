
import React, { useState } from 'react';
import { getBookThumbnail } from '@/data/bible/book-images';
import { Progress } from '@/components/ui/progress';

interface BibleBookCardProps {
  bookId: string;
  bookName: string;
  totalChapters: number;
  progressPercent: number;
  testament: 'old' | 'new';
  onClick: () => void;
}

const BibleBookCard: React.FC<BibleBookCardProps> = ({
  bookId,
  bookName,
  totalChapters,
  progressPercent,
  testament,
  onClick
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="overflow-hidden transition-all hover:shadow-2xl hover:scale-105 cursor-pointer h-full flex flex-col rounded-2xl backdrop-blur-md border border-white/30 shadow-lg bg-white/10"
      onClick={onClick}
    >
      {/* Image section with rounded top corners */}
      <div className="relative pb-[46.67%]">
        <img
          src={imageError ? '/assets/bible/default.jpg' : getBookThumbnail(bookId)}
          alt={`${bookName} cover`}
          className="absolute inset-0 object-cover w-full h-full rounded-t-2xl"
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-t-2xl" />
        <div className="absolute bottom-0 left-0 p-3">
          <h2 className="font-semibold text-white text-xl sm:text-xl drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
            {bookName}
          </h2>
        </div>
      </div>

      {/* Glassmorphic bottom section */}
      <div className="p-3 mt-auto  bg-white/50 border-t border-white/20">
        <div className="flex justify-between items-center text-xs mb-1">
          <span className="text-gray-700">{totalChapters} chapters</span>
          <span className="font-medium text-gray-800">{progressPercent}%</span>
        </div>
        <div className="w-full bg-white/50 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default BibleBookCard;
