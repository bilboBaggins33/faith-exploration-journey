
import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bibleBooks, bibleChapters, sampleChapterChallenges } from '@/data/bibleData';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

// Component imports
import BibleSidebar from '@/components/bible/explorer/BibleSidebar';
import BibleBookHeader from '@/components/bible/explorer/BibleBookHeader';
import BibleMobileSelector from '@/components/bible/explorer/BibleMobileSelector';
import BibleContinueReading from '@/components/bible/explorer/BibleContinueReading';
import BibleSearch from '@/components/bible/explorer/BibleSearch';
import BibleBooksList from '@/components/bible/explorer/BibleBooksList';
import BibleBookDetail from '@/components/bible/explorer/BibleBookDetail';

const BibleExplorer = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTestament, setActiveTestament] = useState('all');
  const { progress, loading, getBookProgress, getChapterStatus } = useBibleProgress();
  const isMobile = useIsMobile();
  
  const filteredBooks = bibleBooks.filter(book => {
    const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTestament = activeTestament === 'all' || book.testament === activeTestament;
    return matchesSearch && matchesTestament;
  });
  
  const selectedBook = bibleBooks.find(book => book.id === bookId);
  const bookChapters = selectedBook 
    ? Array.from({ length: selectedBook.chapters }, (_, i) => i + 1)
    : [];
  
  const recentlyReadBooks = useMemo(() => {
    if (!progress || !progress.completed_chapters || progress.completed_chapters.length === 0) {
      return [];
    }

    const bookIds = progress.completed_chapters
      .sort((a, b) => new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime())
      .map(chapter => chapter.book_id)
      .filter((id, index, self) => self.indexOf(id) === index)
      .slice(0, 5);

    return bookIds.map(id => bibleBooks.find(book => book.id === id))
      .filter(book => book !== undefined) as typeof bibleBooks;
  }, [progress]);

  const navigateToAdjacentBook = (direction: 'prev' | 'next') => {
    if (!selectedBook) return;
    
    const currentIndex = bibleBooks.findIndex(book => book.id === selectedBook.id);
    if (currentIndex === -1) return;
    
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + bibleBooks.length) % bibleBooks.length 
      : (currentIndex + 1) % bibleBooks.length;
      
    navigate(`/bible/${bibleBooks[newIndex].id}`);
  };

  const navigateToChapter = (bookId: string, chapter: number) => {
    navigate(`/challenge/bible/${bookId}/${chapter}`);
  };

  const handleBookChange = (value: string) => {
    navigate(`/bible/${value}`);
  };

  const getRecentChapter = (bookId: string) => {
    if (!progress || !progress.completed_chapters) return 1;

    const bookChapters = progress.completed_chapters
      .filter(chapter => chapter.book_id === bookId)
      .sort((a, b) => new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime());

    return bookChapters.length > 0 ? bookChapters[0].chapter : 1;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <SidebarProvider defaultOpen={!isMobile}>
        <div className="flex-1 flex w-full pt-24">
          <BibleSidebar 
            recentlyReadBooks={recentlyReadBooks}
            allBooks={bibleBooks}
            currentBookId={bookId}
          />
          
          <SidebarInset className="p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              <BibleBookHeader 
                selectedBook={selectedBook}
                onBackClick={() => navigate('/bible')}
              />
              
              {isMobile && !selectedBook && (
                <div className="mb-6">
                  <BibleMobileSelector 
                    books={bibleBooks}
                    selectedBookId={bookId}
                    onBookChange={handleBookChange}
                  />
                </div>
              )}
              
              {!isMobile && !selectedBook && (
                <div className="mb-6">
                  <BibleContinueReading 
                    recentlyReadBooks={recentlyReadBooks}
                    getRecentChapter={getRecentChapter}
                    navigateToChapter={navigateToChapter}
                  />
                  
                  <BibleSearch 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    activeTestament={activeTestament}
                    setActiveTestament={setActiveTestament}
                  />
                </div>
              )}
              
              {selectedBook ? (
                <BibleBookDetail 
                  selectedBook={selectedBook}
                  onBackClick={() => navigate('/bible')}
                  onAdjacentBookClick={navigateToAdjacentBook}
                  bookChapters={bookChapters}
                  getChapterStatus={getChapterStatus}
                  navigateToChapter={navigateToChapter}
                />
              ) : !isMobile && (
                <BibleBooksList 
                  filteredBooks={filteredBooks}
                  getBookProgress={getBookProgress}
                />
              )}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default BibleExplorer;
