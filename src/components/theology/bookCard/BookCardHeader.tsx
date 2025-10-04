
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

interface BookCardHeaderProps {
  title: string;
  author: string;
  category: string;
  coverImage: string;
  thumbnailImage?: string;
}

const BookCardHeader: React.FC<BookCardHeaderProps> = ({
  title,
  author,
  category,
  coverImage,
  thumbnailImage
}) => {
  // If thumbnail is provided, use it, otherwise fallback to original
  const imageToUse = thumbnailImage || coverImage;
  
  return (
    <div className="relative overflow-hidden">
      <AspectRatio ratio={2/3} className="bg-muted">
        <img 
          src={imageToUse} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // If thumbnail fails, try original image
            if (thumbnailImage && target.src !== coverImage) {
              target.src = coverImage;
            } else {
              target.src = '/placeholder.svg';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3 ">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white line-clamp-2">{title}</h3>
          <p className="text-white/80 text-xs sm:text-sm truncate">by {author}</p>
        </div>
      </AspectRatio>
    </div>
  );
};

export default BookCardHeader;
