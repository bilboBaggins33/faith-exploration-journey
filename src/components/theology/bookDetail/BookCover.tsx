
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ProgressiveImage } from '@/components/ui/progressive-image';

interface BookCoverProps {
  coverImage: string;
  title: string;
}

const BookCover: React.FC<BookCoverProps> = ({ coverImage, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <AspectRatio ratio={2/3} className="bg-muted">
        <ProgressiveImage
          src={coverImage} 
          alt={title}
          fallbackSrc="/placeholder.svg"
          className="w-full h-full object-cover"
        />
      </AspectRatio>
    </div>
  );
};

export default BookCover;
