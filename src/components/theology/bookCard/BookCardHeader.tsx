
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
      <AspectRatio ratio={2/3} className="rounded-t-xl overflow-hidden">
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
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
      </AspectRatio>
    </div>
  );
};

export default BookCardHeader;
