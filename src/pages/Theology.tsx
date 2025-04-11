
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
              <h1 className="text-3xl font-serif font-bold mb-4">Theology Books</h1>
              
              {/* Introduction Card */}
              <Card className="mb-8 p-6 bg-white/80 shadow-md">
                <div className="prose max-w-none">
                  <h2 className="text-xl font-serif font-semibold mb-3">Welcome to Theological Studies</h2>
                  <p className="mb-2">
                    Explore classic theological works that have shaped Christian thinking throughout history.
                    Each book is divided into chapters with interactive challenges to deepen your understanding.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Click on any book to view its chapters and details</li>
                    <li>Complete chapter challenges to track your progress</li>
                    <li>Use the search bar below to find books by title, author, or category</li>
                  </ul>
                  <p className="text-bible-gold text-sm font-medium">
                    Your reading progress is automatically saved as you complete chapters.
                  </p>
                </div>
              </Card>
              
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-md mx-auto">
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Search books by title, author, or category..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Theology;
