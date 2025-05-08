
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle, BookMarked } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getBookImage } from '@/data/bible/book-images';
import { bibleBooks } from '@/data/bible';
import { BibleBook } from '@/data/bible/types';

interface BookHeaderProps {
  book: BibleBook | null | undefined;
  onBack?: () => void;
}

const BookHeader = ({ book, onBack }: BookHeaderProps) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = React.useState(false);

  const navigateToAdjacentBook = (direction: 'prev' | 'next') => {
    if (!book) return;
    
    const currentIndex = bibleBooks.findIndex(b => b.id === book.id);
    if (currentIndex === -1) return;
    
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + bibleBooks.length) % bibleBooks.length 
      : (currentIndex + 1) % bibleBooks.length;
      
    navigate(`/bible/${bibleBooks[newIndex].id}`);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/bible');
    }
  };

  if (!book) return null;

  return (
    <div className="relative">
      <AspectRatio ratio={3/1} className="bg-muted">
        <img 
          src={imageError ? '/assets/bible/default.jpg' : getBookImage(book.id)} 
          alt={`${book.name} book cover`}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-between px-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigateToAdjacentBook('prev')}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors h-10 w-10 rounded-full"
          >
            <ArrowLeftCircle className="text-white" size={24} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigateToAdjacentBook('next')}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors h-10 w-10 rounded-full"
          >
            <ArrowRightCircle className="text-white" size={24} />
          </Button>
        </div>
      </AspectRatio>
      <div className="absolute bottom-0 left-0 p-6">
        <h2 className="text-2xl font-serif font-bold text-white flex items-center">
          <BookMarked className="mr-2 text-white" />
          {book.name}
        </h2>
        <p className="text-white/80">
          {book.testament === 'old' ? 'Old Testament' : 'New Testament'} • 
          {book.chapters} chapters
        </p>
      </div>
    </div>
  );
};

export default BookHeader;
