import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  blurDataURL?: string;
  className?: string;
}

// Global cache to persist loaded images across component remounts
const imageCache = new Map<string, string>();

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  fallbackSrc = '/assets/bible/default.jpg',
  blurDataURL,
  className,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(() => {
    // Check cache first
    if (imageCache.has(src)) {
      return imageCache.get(src)!;
    }
    return blurDataURL || src;
  });
  const [isLoading, setIsLoading] = useState(() => !imageCache.has(src));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // If already cached, no need to reload
    if (imageCache.has(src)) {
      setImgSrc(imageCache.get(src)!);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setHasError(false);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      imageCache.set(src, src); // Cache the successful load
      setImgSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      imageCache.set(src, fallbackSrc); // Cache the fallback
      setImgSrc(fallbackSrc);
      setIsLoading(false);
      setHasError(true);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
};
