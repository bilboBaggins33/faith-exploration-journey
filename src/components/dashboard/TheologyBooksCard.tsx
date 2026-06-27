
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Book, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
              <Button size="sm" variant="secondary" className="shrink-0 h-8" onClick={() => navigate('/theology')}>
                Continue
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Classic Christian works — Pilgrim's Progress, Confessions, and more.
          </p>
          <Button
            size="sm"
            variant="outline"
            className="mt-4"
            onClick={() => navigate('/theology')}
          >
            Browse theology
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
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
