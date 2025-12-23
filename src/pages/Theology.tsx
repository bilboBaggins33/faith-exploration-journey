import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import BookList from '@/components/theology/BookList';
import BookDetail from '@/components/theology/BookDetail';
import { theologyBooks } from '@/data/theology';
import { useTheologyProgress } from '@/hooks/use-theology-progress';

const Theology = () => {
  const { bookId } = useParams<{ bookId?: string }>();
  const [selectedBookId, setSelectedBookId] = useState<string | null>(bookId || null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { getBookProgress, getBookAverageScore } = useTheologyProgress();
  
  const handleBookSelect = (id: string) => {
    setSelectedBookId(id);
  };
  
  const handleBackClick = () => {
    setSelectedBookId(null);
  };
  
  const selectedBook = selectedBookId 
    ? theologyBooks.find(book => book.id === selectedBookId) 
    : null;
  
  // Filter books based on search query
  const filteredBooks = searchQuery.trim() 
    ? theologyBooks.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : theologyBooks;
  
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      
      <main className="flex-grow pb-10 relative">
        {/* Blurred background */}
        <div className="fixed inset-0 -z-10 bg-[#2b1306]">
          <img 
            src="/assets/bible/default.jpg"
            alt="Theology background"
            className="w-full h-full object-cover blur-sm scale-110"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="flex items-center justify-center p-4 pt-2 md:pt-28 pb-12">
          <div className="w-full max-w-4xl">
            {selectedBook ? (
              <BookDetail 
                book={selectedBook}
                bookProgress={getBookProgress(selectedBook.id)}
                bookAverageScore={getBookAverageScore(selectedBook.id)}
              />
            ) : (
              <BookList 
                books={theologyBooks} 
                getBookProgress={getBookProgress}
                getBookAverageScore={getBookAverageScore}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Theology;
