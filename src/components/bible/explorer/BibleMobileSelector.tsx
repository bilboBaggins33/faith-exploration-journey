
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BibleBook } from '@/data/bible/types';

interface BibleMobileSelectorProps {
  books: BibleBook[];
  selectedBookId: string | undefined;
  onBookChange: (bookId: string) => void;
}

const BibleMobileSelector: React.FC<BibleMobileSelectorProps> = ({
  books,
  selectedBookId,
  onBookChange
}) => {
  return (
    <Select onValueChange={onBookChange} value={selectedBookId || "select-book"}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a book" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="old-testament-header" disabled className="font-bold">
          Old Testament
        </SelectItem>
        {books
          .filter(book => book.testament === 'old')
          .map(book => (
            <SelectItem key={book.id} value={book.id}>
              {book.name}
            </SelectItem>
          ))}
        
        <SelectItem value="new-testament-header" disabled className="font-bold">
          New Testament
        </SelectItem>
        {books
          .filter(book => book.testament === 'new')
          .map(book => (
            <SelectItem key={book.id} value={book.id}>
              {book.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default BibleMobileSelector;
