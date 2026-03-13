
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import BibleBookCard from './BibleBookCard';
import { Card } from '@/components/ui/card';
import { DifficultyProgress } from '@/hooks/bible/use-difficulty-progress';

interface BibleBooksListProps {
  books: {
    id: string;
    name: string;
    testament: 'old' | 'new';
    chapters: number;
  }[];
  getBookProgress: (bookId: string) => number;
  getBookDifficultyProgress?: (bookId: string) => DifficultyProgress;
  searchTerm: string;
  activeTestament: string;
  isMobile: boolean;
}

const BibleBooksList: React.FC<BibleBooksListProps> = ({
  books,
  getBookProgress,
  getBookDifficultyProgress,
  searchTerm,
  activeTestament,
  isMobile
}) => {
  const navigate = useNavigate();
  
  const oldTestamentBooks = books.filter(book => book.testament === 'old');
  const newTestamentBooks = books.filter(book => book.testament === 'new');
  
  return (
    <div className="space-y-8">
      <Card className="bg-transparent border-0 rounded-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {oldTestamentBooks.map(book => (
            <BibleBookCard
              key={book.id}
              bookId={book.id}
              bookName={book.name}
              totalChapters={book.chapters}
              progressPercent={getBookProgress(book.id)}
              testament="old"
              difficultyProgress={getBookDifficultyProgress?.(book.id)}
              onClick={() => navigate(`/bible/${book.id}`)}
            />
          ))}
        </div>
      </Card>
      
      <Card className="pt-16 bg-transparent border-0 rounded-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {newTestamentBooks.map(book => (
            <BibleBookCard
              key={book.id}
              bookId={book.id}
              bookName={book.name}
              totalChapters={book.chapters}
              progressPercent={getBookProgress(book.id)}
              testament="new"
              difficultyProgress={getBookDifficultyProgress?.(book.id)}
              onClick={() => navigate(`/bible/${book.id}`)}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BibleBooksList;
