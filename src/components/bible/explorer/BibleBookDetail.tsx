
import React from 'react';
import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getBookImage } from '@/data/bible/book-images';
import BibleChapterCard from '@/components/bible/BibleChapterCard';
import { BibleBook } from '@/data/bible/types';

interface BibleBookDetailProps {
  selectedBook: BibleBook;
  onBackClick: () => void;
  onAdjacentBookClick: (direction: 'prev' | 'next') => void;
  bookChapters: number[];
  getChapterStatus: (bookId: string, chapter: number) => {
    isCompleted: boolean;
    score: number;
    maxScore: number;
  };
  navigateToChapter: (bookId: string, chapter: number) => void;
}

const BibleBookDetail: React.FC<BibleBookDetailProps> = ({
  selectedBook,
  onBackClick,
  onAdjacentBookClick,
  bookChapters,
  getChapterStatus,
  navigateToChapter
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={16/9} className="bg-muted">
          <img 
            src={getBookImage(selectedBook.id)} 
            alt={`${selectedBook.name} book cover`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-between px-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onAdjacentBookClick('prev')}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors h-10 w-10 rounded-full"
            >
              <ArrowLeftCircle className="text-white" size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onAdjacentBookClick('next')}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors h-10 w-10 rounded-full"
            >
              <ArrowRightCircle className="text-white" size={24} />
            </Button>
          </div>
        </AspectRatio>
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-2xl font-serif font-bold text-white flex items-center">
            <BookMarked className="mr-2 text-white" />
            {selectedBook.name}
          </h2>
          <p className="text-white/80">
            {selectedBook.testament === 'old' ? 'Old Testament' : 'New Testament'} • 
            {selectedBook.chapters} chapters
          </p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {bookChapters.map(chapter => {
            const { isCompleted, score, maxScore } = getChapterStatus(selectedBook.id, chapter);
            
            return (
              <div key={chapter} className="w-full aspect-square">
                <BibleChapterCard
                  bookId={selectedBook.id}
                  chapter={chapter}
                  isCompleted={isCompleted}
                  score={score}
                  maxScore={maxScore}
                  onClick={() => navigateToChapter(selectedBook.id, chapter)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BibleBookDetail;
