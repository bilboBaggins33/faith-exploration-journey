
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface BookCoverProps {
  coverImage: string;
  title: string;
}

const BookCover: React.FC<BookCoverProps> = ({ coverImage, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <AspectRatio ratio={2/3} className="bg-muted">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </AspectRatio>
    </div>
  );
};

export default BookCover;
