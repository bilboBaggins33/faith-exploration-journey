
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bibleBooks } from '@/data/bible';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import BibleBooksList from '@/components/bible/BibleBooksList';
import BibleBookCard from '@/components/bible/BibleBookCard';
import BibleChapterCard from '@/components/bible/BibleChapterCard';
import { useIsMobile } from '@/hooks/use-mobile';
import BookSearchFilter from '@/components/bible/explorer/BookSearchFilter';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/context/auth';
import ScrollToTop from '@/components/ScrollToTop';

const Bible: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [recentlyReadBooks, setRecentlyReadBooks] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTestament, setActiveTestament] = useState<string>('all');
  const { getBookProgress, getBookAverageScore, getChapterScore } = useBibleProgress();
  const isMobile = useIsMobile();
  const { user } = useAuth();
  
  const selectedBook = bookId ? bibleBooks.find(book => book.id === bookId) : null;
  
  useEffect(() => {
    // Reset selected chapter when book changes
    setSelectedChapter(null);
    
    // Only store recently read books if user is authenticated
    if (bookId && user) {
      const recent = JSON.parse(localStorage.getItem('recentBooks') || '[]');
      if (!recent.includes(bookId)) {
        const newRecent = [bookId, ...recent].slice(0, 5);
        localStorage.setItem('recentBooks', JSON.stringify(newRecent));
        setRecentlyReadBooks(newRecent);
      } else {
        setRecentlyReadBooks(recent);
      }
    } else if (user) {
      // Load recently read books from localStorage when on main Bible page and user is authenticated
      const recent = JSON.parse(localStorage.getItem('recentBooks') || '[]');
      setRecentlyReadBooks(recent);
    } else {
      // Clear recent books if not authenticated
      setRecentlyReadBooks([]);
    }
  }, [bookId, user]);
  
  const handleBookSelect = (id: string) => {
    navigate(`/bible/${id}`);
  };
  
  const handleChapterSelect = (chapter: number) => {
    setSelectedChapter(chapter);
  };
  
  const handleBackToBooks = () => {
    navigate('/bible');
  };
  
  const handleGoToChallenge = (bookId: string, chapter: number) => {
    navigate(`/challenge/bible/${bookId}/${chapter}`);
  };
  
  // Helper function to transform the book progress object to just return the percentage
  const getBookProgressPercentage = (bookId: string): number => {
    const progress = getBookProgress(bookId);
    return progress.percentage;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-10 bg-bible-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {!selectedBook && (
              <div>
                <h1 className="text-3xl font-serif font-bold mb-4 text-center">Bible Study</h1>
                
                {/* Introduction Card */}
                <Card className="mb-8 p-6 bg-white/80 shadow-md">
                  <div className="prose max-w-none">
                    <h2 className="text-xl font-serif font-semibold mb-3">Welcome to Bible Study</h2>
                    <p className="mb-2">
                      Explore the Bible by selecting a book below. Each book is organized by chapters, 
                      allowing you to study at your own pace and track your progress.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>Click on any book to view its chapters</li>
                      <li>Complete chapter challenges to track your progress</li>
                      <li>Use the search bar below to find specific books</li>
                      <li>Filter books by Old or New Testament</li>
                    </ul>
                    <p className="text-bible-gold text-sm font-medium">
                      Your reading progress is automatically saved as you complete chapters.
                    </p>
                  </div>
                </Card>
                
                {/* Search Filter */}
                <div className="mb-6">
                  <BookSearchFilter 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    setActiveTestament={setActiveTestament} 
                  />
                </div>
                
                {user && recentlyReadBooks.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-serif font-semibold mb-4 text-center">Recently Read</h2>
                    <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {recentlyReadBooks.map(id => {
                        const book = bibleBooks.find(book => book.id === id);
                        if (!book) return null;
                        return (
                          <BibleBookCard
                            key={book.id}
                            bookId={book.id}
                            bookName={book.name}
                            totalChapters={book.chapters}
                            progressPercent={getBookProgressPercentage(book.id)}
                            testament={book.testament as 'old' | 'new'}
                            onClick={() => handleBookSelect(book.id)}
                          />
                        );
                      })}
                    </div>
                    <hr className="my-8 border-bible-gold/30" />
                  </div>
                )}
                
                <BibleBooksList 
                  books={bibleBooks}
                  getBookProgress={getBookProgressPercentage}
                  searchTerm={searchTerm}
                  activeTestament={activeTestament}
                  isMobile={isMobile}
                />
              </div>
            )}
            
            {selectedBook && !selectedChapter && (
              <div>
                <div className="mb-6 text-center">
                  <button 
                    onClick={handleBackToBooks}
                    className="text-bible-blue hover:text-bible-gold transition-colors inline-flex items-center"
                  >
                    <span className="mr-1">←</span> Back to All Books
                  </button>
                  <h1 className="text-3xl font-serif font-bold mt-2">{selectedBook.name}</h1>
                  <p className="text-gray-600">{selectedBook.testament === 'old' ? 'Old Testament' : 'New Testament'}</p>
                </div>
                
                <BibleBookCard 
                  bookId={selectedBook.id}
                  bookName={selectedBook.name}
                  totalChapters={selectedBook.chapters}
                  progressPercent={getBookProgressPercentage(selectedBook.id)}
                  testament={selectedBook.testament as 'old' | 'new'}
                  onClick={() => {}} // Empty function as it's already selected
                />
                
                <div className="mt-6">
                  <h2 className="text-xl font-serif font-semibold mb-4">Chapters</h2>
                  <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-2">
                    {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(chapter => (
                      <BibleChapterCard
                        key={chapter}
                        bookId={selectedBook.id}
                        chapter={chapter}
                        isCompleted={false}
                        score={getChapterScore(selectedBook.id, chapter)}
                        maxScore={5}
                        isUnlocked={!!user}
                        onClick={() => handleGoToChallenge(selectedBook.id, chapter)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {selectedBook && selectedChapter && (
              <BibleChapterCard
                bookId={selectedBook.id}
                chapter={selectedChapter}
                isCompleted={false}
                score={0}
                maxScore={0}
                isUnlocked={true}
                onClick={() => handleGoToChallenge(selectedBook.id, selectedChapter)}
              />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bible;
