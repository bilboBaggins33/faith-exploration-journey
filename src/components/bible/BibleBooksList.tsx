
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import BibleBookCard from './BibleBookCard';

interface BibleBooksListProps {
  books: {
    id: string;
    name: string;
    testament: string;
    chapters: number;
  }[];
  getBookProgress: (bookId: string) => number;
  searchTerm: string;
  activeTestament: string;
  isMobile: boolean;
}

const BibleBooksList: React.FC<BibleBooksListProps> = ({
  books,
  getBookProgress,
  searchTerm,
  activeTestament,
  isMobile
}) => {
  const navigate = useNavigate();
  
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTestament = activeTestament === 'all' || book.testament === activeTestament;
    return matchesSearch && matchesTestament;
  });
  
  if (filteredBooks.length === 0) {
    return (
      <div className="text-center py-8">
        <BookOpen className="mx-auto text-gray-300 mb-2" size={40} />
        <p className="text-gray-500">No books found</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {filteredBooks.map(book => {
        const bookProgressPercent = getBookProgress(book.id);
        
        return (
          <div key={book.id} className="w-full">
            <BibleBookCard
              bookId={book.id}
              bookName={book.name}
              totalChapters={book.chapters}
              progressPercent={bookProgressPercent}
              testament={book.testament}
              onClick={() => navigate(`/bible/${book.id}`)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BibleBooksList;
