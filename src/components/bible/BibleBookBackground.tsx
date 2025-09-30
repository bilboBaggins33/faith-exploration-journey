import React from 'react';
import { ProgressiveImage } from '@/components/ui/progressive-image';
import { getBookImage } from '@/data/bible/book-images';

interface BibleBookBackgroundProps {
  bookId: string;
  bookName?: string;
  children: React.ReactNode;
}

const BibleBookBackground: React.FC<BibleBookBackgroundProps> = ({ 
  bookId, 
  bookName,
  children 
}) => {
  return (
    <div className="relative min-h-screen">
      {/* Blurred background - fixed to prevent flashing between pages */}
      <div className="fixed inset-0 -z-10">
        <ProgressiveImage
          src={getBookImage(bookId)}
          alt={`${bookName || 'Bible book'} background`}
          fallbackSrc="/assets/bible/default.jpg"
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {children}
    </div>
  );
};

export default BibleBookBackground;
