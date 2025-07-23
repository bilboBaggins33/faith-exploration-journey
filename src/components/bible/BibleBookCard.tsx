
import React, { useState } from 'react';
import { getBookImage } from '@/data/bible/book-images';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

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
    <Card 
      className="overflow-hidden transition-shadow hover:shadow-md cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative pb-[46.67%]">
        <img
          src={imageError ? '/assets/bible/default.jpg' : getBookImage(bookId)}
          alt={`${bookName} cover`}
          className="absolute inset-0 object-cover w-full h-full"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 p-3">
          <h2 className="font-serif font-semibold text-white text-xl sm:text-4xl">{bookName}</h2>
          {/* <p className="text-white/80 text-sm">
            {testament === 'old' ? 'Old Testament' : 'New Testament'}
          </p> */}
        </div>
      </div>
      
      <div className="p-3 mt-auto">
        <div className="flex justify-between items-center text-xs mb-1">
          <span className="text-gray-600">{totalChapters} chapters</span>
          <span className="font-medium">{progressPercent}%</span>
        </div>
        <Progress value={progressPercent} className="h-2" />
      </div>
    </Card>
  );
};

export default BibleBookCard;
