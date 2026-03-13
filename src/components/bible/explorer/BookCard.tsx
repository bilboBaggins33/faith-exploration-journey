import React from 'react';
import { motion } from 'framer-motion';

interface BookCardProps {
  book: {
    id: string;
    name: string;
    testament: string;
    chapters: number;
  };
  progress: { completed: number; total: number; percentage: number };
  averageScore: number;
  index: number;
  onSelect: (bookId: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, progress, averageScore, index, onSelect }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.03, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onSelect(book.id)}
      className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full text-left bg-card"
    >
      {/* Image */}
      <div className="relative pb-[66.67%] w-full overflow-hidden">
        <img
          src={`/assets/bible/thumbnail/${book.id.toLowerCase()}.jpg`}
          alt={`${book.name} cover`}
          className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/bible/default.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-3 transition-all duration-300">
          <h3 className="text-base sm:text-lg font-serif font-semibold text-white drop-shadow-md">
            {book.name}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm">
            {book.testament === 'old' ? 'Old Testament' : 'New Testament'}
          </p>
        </div>

        {/* Score badge overlay */}
        {averageScore > 0 && (
          <div className="absolute top-2 right-2 bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
            {averageScore}%
          </div>
        )}
      </div>

      {/* Progress section */}
      <div className="p-3 flex-grow flex flex-col">
        <div className="mt-auto pt-1">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-muted-foreground">
              {progress.completed}/{progress.total} chapters
            </span>
            <span className="text-foreground font-semibold">{progress.percentage}%</span>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress.percentage}%` }}
              transition={{ duration: 0.8, delay: index * 0.03 + 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export default React.memo(BookCard);
