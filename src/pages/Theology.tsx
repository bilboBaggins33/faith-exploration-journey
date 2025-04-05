
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookList from '@/components/theology/BookList';
import BookDetail from '@/components/theology/BookDetail';
import { theologyBooks } from '@/data/theology';
import { useTheologyProgress } from '@/hooks/use-theology-progress';

const Theology = () => {
  const { bookId } = useParams<{ bookId?: string }>();
  const [selectedBookId, setSelectedBookId] = useState<string | null>(bookId || null);
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-bible-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedBook ? (
            <BookDetail 
              book={selectedBook}
              bookProgress={getBookProgress(selectedBook.id)}
              bookAverageScore={getBookAverageScore(selectedBook.id)}
            />
          ) : (
            <div>
              <h1 className="text-3xl font-serif font-bold mb-6">Theology Books</h1>
              <BookList 
                books={theologyBooks} 
                getBookProgress={getBookProgress}
                getBookAverageScore={getBookAverageScore}
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Theology;
