
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bibleBooks } from '@/data/bible';
import { getBibleChallengeByBookAndChapter } from '@/data/bible/challenges';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import BibleBooksList from '@/components/bible/BibleBooksList';
import BibleBookCard from '@/components/bible/BibleBookCard';
import BibleChapterCard from '@/components/bible/BibleChapterCard';
import { useIsMobile } from '@/hooks/use-mobile';
import BookSearchFilter from '@/components/bible/explorer/BookSearchFilter';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/context/auth';
import ScrollToTop from '@/components/ScrollToTop';
import { getBookImage } from '@/data/bible/book-images';

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
    <div className="min-h-screen flex flex-col p-4">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow pb-10 relative">
        <div className="max-w-7xl mx-auto">
          <div>
            {!selectedBook && (
              <div>
                
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
                      {/* <li>Use the search bar below to find specific books</li>
                      <li>Filter books by Old or New Testament</li> */}
                    </ul>
                    <p className="text-bible-gold text-sm font-medium">
                      Your reading progress is automatically saved as you complete chapters.
                    </p>
                  </div>
                </Card>
                
                {/* Search Filter */}
                {/* <div className="mb-6">
                  <BookSearchFilter 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    setActiveTestament={setActiveTestament} 
                  />
                </div> */}
                
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
              <div className="relative overflow-hidden">
                {/* Blurred background */}
                <div className="fixed inset-0 -z-10 bg-[#e8dcc4]">
                  <img 
                    src={getBookImage(selectedBook.id)} 
                    alt={`${selectedBook.name} background`}
                    className="w-full h-full object-cover blur-sm scale-110"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/bible/default.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Main content card */}
                <div className="flex items-center justify-center p-4 pt-2 pb-12">
                  <div className="w-full max-w-4xl bg-white backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
                    {/* Header section with book info */}
                    <div className="relative overflow-hidden">
                      {/* Background image */}
                      <div className="absolute inset-0 bg-[#e8dcc4]">
                        <img 
                          src={getBookImage(selectedBook.id)} 
                          alt={`${selectedBook.name} background`}
                          className="w-full h-full object-cover"
                          loading="eager"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.src = '/assets/bible/default.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>
                      
                      {/* Content over background */}
                      <div className="relative z-10 p-6 pt-4">
                        <div className="mb-4">
                          <button 
                            onClick={handleBackToBooks}
                            className="text-white/90 hover:text-white transition-colors inline-flex items-center mb-3 text-sm"
                          >
                            <span className="mr-1">←</span> Back to All Books
                          </button>
                          <h1 className="text-2xl leading-tight font-bold font-serif text-white drop-shadow-lg">{selectedBook.name}</h1>
                        </div>
                        
                        {/* Progress info */}
                        <div className="flex justify-between items-center text-sm text-white/80 mb-2">
                          <span>{selectedBook.chapters} chapters</span>
                          <span className="font-semibold">
                            Progress: <span className="text-white">{getBookProgressPercentage(selectedBook.id)}%</span>
                          </span>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div 
                            className="bg-white h-2 rounded-full transition-all duration-300 ease-in-out"
                            style={{ width: `${getBookProgressPercentage(selectedBook.id)}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Chapters grid */}
                    <div className="p-6">
                      <h2 className="text-xl font-serif font-semibold mb-4">Chapters</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                        {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(chapter => {
                          const challengeData = getBibleChallengeByBookAndChapter(selectedBook.id, chapter);
                          return (
                            <BibleChapterCard
                              key={chapter}
                              bookId={selectedBook.id}
                              chapter={chapter}
                              title={challengeData?.title}
                              isCompleted={false}
                              score={getChapterScore(selectedBook.id, chapter)}
                              maxScore={5}
                              isUnlocked={!!user}
                              onClick={() => handleGoToChallenge(selectedBook.id, chapter)}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {selectedBook && selectedChapter && (
              <BibleChapterCard
                bookId={selectedBook.id}
                chapter={selectedChapter}
                title={getBibleChallengeByBookAndChapter(selectedBook.id, selectedChapter)?.title}
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
