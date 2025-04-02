
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { bibleBooks } from '@/data/bibleData';

interface BookSelectorProps {
  currentBookId: string | undefined;
}

const BookSelector = ({ currentBookId }: BookSelectorProps) => {
  const navigate = useNavigate();

  const handleBookChange = (value: string) => {
    navigate(`/bible/${value}`);
  };

  return (
    <div className="mb-6 sticky top-24 z-10 bg-background">
      <Select onValueChange={handleBookChange} value={currentBookId || "select-book"}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a book" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="old-testament-header" disabled className="font-bold">
            Old Testament
          </SelectItem>
          {bibleBooks
            .filter(book => book.testament === 'old')
            .map(book => (
              <SelectItem key={book.id} value={book.id}>
                {book.name}
              </SelectItem>
            ))}
          
          <SelectItem value="new-testament-header" disabled className="font-bold">
            New Testament
          </SelectItem>
          {bibleBooks
            .filter(book => book.testament === 'new')
            .map(book => (
              <SelectItem key={book.id} value={book.id}>
                {book.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BookSelector;
