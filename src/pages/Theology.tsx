
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookList from '@/components/theology/BookList';
import BookDetail from '@/components/theology/BookDetail';
import { theologyBooks } from '@/data/theology';
import { useTheologyProgress } from '@/hooks/use-theology-progress';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { InputGroup } from '@/components/ui/input-group';
import { Search } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pb-10 relative">
        {/* Blurred background */}
        <div className="fixed inset-0 -z-10 bg-[#e8dcc4]">
          <img 
            src="/assets/bible/default.jpg"
            alt="Theology background"
            className="w-full h-full object-cover blur-sm scale-110"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="flex items-center justify-center p-4 pt-2 pb-12">
          <div className="w-full max-w-4xl">
            {selectedBook ? (
              <BookDetail 
                book={selectedBook}
                bookProgress={getBookProgress(selectedBook.id)}
                bookAverageScore={getBookAverageScore(selectedBook.id)}
              />
            ) : (
              <div>
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative max-w-md mx-auto">
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Search books by title, author, or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-white/90"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </InputGroup>
                  </div>
                </div>
                
                <BookList 
                  books={filteredBooks} 
                  getBookProgress={getBookProgress}
                  getBookAverageScore={getBookAverageScore}
                />
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Theology;
