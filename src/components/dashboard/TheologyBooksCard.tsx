import React, { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Book, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getTheologyBookImage } from '@/data/theology/book-images';
import DashboardCard from './DashboardCard';

interface TheologyBook {
  id: string;
  name: string;
  progress: number;
  author: string;
}

interface TheologyBooksCardProps {
  recentTheologyBooks: TheologyBook[];
}

const TheologyBooksCard = ({ recentTheologyBooks }: TheologyBooksCardProps) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const isEmpty = recentTheologyBooks.length === 0;

  return (
    <DashboardCard
      title="Theology"
      icon={<Book className="h-4 w-4" />}
    >
      {!isEmpty ? (
        <ul className="space-y-1">
          {recentTheologyBooks.map(book => (
            <li
              key={book.id}
              className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 hover:bg-muted/50 transition-colors"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{book.name}</p>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{book.author}</p>
                <div className="flex items-center gap-2 mt-2 max-w-[180px]">
                  <Progress value={book.progress} className="h-1 flex-1" />
                  <span className="text-xs text-muted-foreground tabular-nums">{book.progress}%</span>
                </div>
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="shrink-0 h-8"
                onClick={() => navigate(`/theology/${book.id}`)}
              >
                Continue
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start">
          <img
            src={
              imageError
                ? '/assets/bible/default.webp'
                : getTheologyBookImage('mere-christianity')
            }
            alt=""
            className="w-[88px] h-[120px] rounded-lg object-cover shadow-md shrink-0"
            loading="lazy"
            onError={() => setImageError(true)}
          />
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Start with Mere Christianity
            </h3>
            <p className="text-sm text-muted-foreground mt-1.5 !leading-relaxed">
              Chapter 1 is free. Classic Christian works — Lewis, Packer, and more.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
              <Button
                size="sm"
                className="bg-bible-deepBlue hover:bg-bible-dark"
                onClick={() => navigate('/theology/mere-christianity/1')}
              >
                Read chapter 1
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-muted-foreground"
                onClick={() => navigate('/theology')}
              >
                All books
              </Button>
            </div>
          </div>
        </div>
      )}

      {!isEmpty && (
        <button
          type="button"
          onClick={() => navigate('/theology')}
          className="mt-4 inline-flex items-center text-xs font-medium text-bible-deepBlue hover:underline"
        >
          All theology books
          <ArrowRight className="ml-1 h-3 w-3" />
        </button>
      )}
    </DashboardCard>
  );
};

export default TheologyBooksCard;
