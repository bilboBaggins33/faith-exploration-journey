import { useState } from 'react';
import { cn } from '@/lib/utils';
import { getBookImage } from '@/data/bible/book-images';
import { getTheologyBookImage } from '@/data/theology/book-images';

/** Frosted panel shared by quiz questions, results, loading, and access gates. */
export const QUIZ_FROST =
  'bg-black/20 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 overflow-hidden';

export const QUIZ_CHIP =
  'backdrop-blur-sm bg-black/20 rounded-full px-3 py-1.5 text-white/90 text-sm';

interface QuizBackdropProps {
  bookId?: string;
  type?: 'bible' | 'theology';
  className?: string;
}

export function QuizBackdrop({ bookId, type = 'bible', className }: QuizBackdropProps) {
  const [imageError, setImageError] = useState(false);
  const src = imageError
    ? '/assets/bible/default.webp'
    : type === 'theology' && bookId
      ? getTheologyBookImage(bookId)
      : bookId
        ? getBookImage(bookId)
        : '/assets/bible/default.webp';

  return (
    <div className={cn('fixed inset-0 -z-10', className)}>
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover scale-110"
        onError={() => setImageError(true)}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

interface QuizFrostPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function QuizFrostPanel({ children, className }: QuizFrostPanelProps) {
  return <div className={cn(QUIZ_FROST, className)}>{children}</div>;
}

interface QuizStageProps {
  bookId?: string;
  type?: 'bible' | 'theology';
  children: React.ReactNode;
  className?: string;
}

/** Full-viewport stage: book art + centered frosted content (loading, gate, error). */
export function QuizStage({ bookId, type = 'bible', children, className }: QuizStageProps) {
  return (
    <div className={cn('relative min-h-dvh w-full overflow-hidden', className)}>
      <QuizBackdrop bookId={bookId} type={type} />
      <div className="relative z-10 min-h-dvh flex items-center justify-center p-4 py-10">
        {children}
      </div>
    </div>
  );
}
