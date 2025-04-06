
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bibleBooks } from '@/data/bible';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import BibleBooksList from '@/components/bible/BibleBooksList';
import BibleBookCard from '@/components/bible/BibleBookCard';
import BibleChapterCard from '@/components/bible/BibleChapterCard';
import { SidebarProvider } from '@/components/ui/sidebar';
import BibleSidebar from '@/components/bible/explorer/BibleSidebar';

const Bible: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [recentlyReadBooks, setRecentlyReadBooks] = useState<string[]>([]);
  const { getBookProgress, getBookAverageScore } = useBibleProgress();
  
  const selectedBook = bookId ? bibleBooks.find(book => book.id === bookId) : null;
  
  useEffect(() => {
    // Reset selected chapter when book changes
    setSelectedChapter(null);
    
    // Store recently read books in localStorage
    if (bookId) {
      const recent = JSON.parse(localStorage.getItem('recentBooks') || '[]');
      if (!recent.includes(bookId)) {
        const newRecent = [bookId, ...recent].slice(0, 5);
        localStorage.setItem('recentBooks', JSON.stringify(newRecent));
        setRecentlyReadBooks(newRecent);
      } else {
        setRecentlyReadBooks(recent);
      }
    } else {
      // Load recently read books from localStorage when on main Bible page
      const recent = JSON.parse(localStorage.getItem('recentBooks') || '[]');
      setRecentlyReadBooks(recent);
    }
  }, [bookId]);
  
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
      <Navbar />
      
      <main className="flex-grow py-10 bg-bible-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SidebarProvider>
            <div className="flex w-full">
              <BibleSidebar 
                recentlyReadBooks={recentlyReadBooks.map(id => 
                  bibleBooks.find(book => book.id === id)
                ).filter(Boolean) as any} 
                currentBookId={bookId}
                onBookSelect={handleBookSelect}
              />
              
              <div className="flex-1 ml-4">
                {!selectedBook && (
                  <div>
                    <h1 className="text-3xl font-serif font-bold mb-6">Bible Study</h1>
                    <BibleBooksList 
                      books={bibleBooks}
                      getBookProgress={getBookProgressPercentage}
                      searchTerm=""
                      activeTestament="all"
                      isMobile={false}
                    />
                  </div>
                )}
                
                {selectedBook && !selectedChapter && (
                  <BibleBookCard 
                    bookId={selectedBook.id}
                    bookName={selectedBook.name}
                    totalChapters={selectedBook.chapters}
                    progressPercent={getBookProgressPercentage(selectedBook.id)}
                    testament={selectedBook.testament}
                    onClick={() => {}} // Empty function as it's already selected
                  />
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
          </SidebarProvider>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bible;
