
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BibleBooksList from '@/components/bible/BibleBooksList';
import BibleSidebar from '@/components/bible/explorer/BibleSidebar';
import BookHeader from '@/components/bible/explorer/BookHeader';
import ChaptersGrid from '@/components/bible/explorer/ChaptersGrid';
import RecentBooksSection from '@/components/bible/explorer/RecentBooksSection';
import { bibleBooks } from '@/data/bible';
import { useBibleProgress } from '@/hooks/use-bible-progress';

const Bible = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const selectedBook = bookId ? bibleBooks.find(book => book.id === bookId) : null;
  const { getBookProgress } = useBibleProgress();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTestament, setActiveTestament] = useState<'all' | 'old' | 'new'>('all');
  
  // Recent books handling
  const [recentBooks, setRecentBooks] = useState<string[]>([]);
  
  const handleBookSelect = (bookId: string) => {
    // Update recent books when a book is selected
    if (!recentBooks.includes(bookId)) {
      setRecentBooks(prev => [bookId, ...prev.slice(0, 2)]);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-bible-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!bookId ? (
            // Bible Explorer Home
            <div>
              <h1 className="text-3xl font-serif font-bold mb-6">Bible Explorer</h1>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <BibleBooksList 
                    books={bibleBooks} 
                    getBookProgress={getBookProgress}
                    searchTerm={searchTerm}
                    activeTestament={activeTestament}
                    isMobile={false}
                  />
                </div>
                <div className="space-y-6">
                  <RecentBooksSection 
                    recentBooks={recentBooks}
                    onBookSelect={handleBookSelect}
                  />
                </div>
              </div>
            </div>
          ) : (
            // Book Detail View
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <BibleSidebar onBookSelect={handleBookSelect} />
              </div>
              <div className="md:col-span-3">
                {selectedBook && (
                  <>
                    <BookHeader book={selectedBook} />
                    {selectedBook && <ChaptersGrid book={selectedBook} />}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bible;
