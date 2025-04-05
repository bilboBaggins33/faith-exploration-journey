
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookList from '@/components/theology/BookList';
import { theologyBooks } from '@/data/theology';
import BookDetail from '@/components/theology/BookDetail';

const Theology = () => {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  
  const handleBookSelect = (bookId: string) => {
    setSelectedBook(bookId);
  };
  
  const handleBackToList = () => {
    setSelectedBook(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-bible-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedBook ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold">Theology Books</h1>
                <p className="text-gray-600">
                  Explore classic works of Christian theology to deepen your understanding of faith.
                </p>
              </div>
              
              <BookList books={theologyBooks} onBookSelect={handleBookSelect} />
            </>
          ) : (
            <BookDetail bookId={selectedBook} onBackClick={handleBackToList} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Theology;
