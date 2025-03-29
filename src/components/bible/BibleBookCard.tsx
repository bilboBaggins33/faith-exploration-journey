
import React from 'react';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getBookImage } from '@/data/bible/book-images';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface BibleBookCardProps {
  bookId: string;
  bookName: string;
  totalChapters: number;
  progressPercent: number;
  testament: string;
  onClick: () => void;
}

const BibleBookCard: React.FC<BibleBookCardProps> = ({
  bookId,
  bookName,
  totalChapters,
  progressPercent,
  testament,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card rounded-xl flex flex-col cursor-pointer h-full overflow-hidden w-full" // Removed min-width
      onClick={onClick}
    >
      <div className="relative">
        <AspectRatio ratio={16/9} className="bg-muted">
          <img 
            src={getBookImage(bookId)} 
            alt={`${bookName} book cover`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </AspectRatio>
        <div className="absolute bottom-0 left-0 p-3">
          <div className="flex items-center">
            <Book className="mr-2 text-white" size={18} />
            <h3 className="font-medium text-white truncate max-w-[180px]">{bookName}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-3 mt-auto">
        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
          <div 
            className="bg-bible-blue h-2 rounded-full" 
            style={{ width: `${progressPercent}%` }} 
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{totalChapters} chapters</span>
          <span>{progressPercent}% complete</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BibleBookCard;
