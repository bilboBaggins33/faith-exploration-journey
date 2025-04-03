
import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bibleBooks, bibleChapters } from '@/data/bibleData';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import BibleBooksList from '@/components/bible/BibleBooksList';

// Import refactored components
import BookSelector from '@/components/bible/explorer/BookSelector';
import RecentBooksSection from '@/components/bible/explorer/RecentBooksSection';
import BookHeader from '@/components/bible/explorer/BookHeader';
import ChaptersGrid from '@/components/bible/explorer/ChaptersGrid';
import BookSearchFilter from '@/components/bible/explorer/BookSearchFilter';

const BibleExplorer = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTestament, setActiveTestament] = useState('all');
  const { progress, loading, getBookProgress, getChapterStatus } = useBibleProgress();
  const isMobile = useIsMobile();
  
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
      
      <div className="flex-1 flex w-full pt-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6">
            {selectedBook ? (
              <div className="flex items-center">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate('/bible')}
                  className="mr-2"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Back
                </Button>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-bible-dark">
                  {selectedBook.name}
                </h1>
              </div>
            ) : (
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-bible-dark">
                Bible Books
              </h1>
            )}
          </div>
          
          {isMobile && !selectedBook && (
            <BookSelector currentBookId={bookId} />
          )}
          
          {!isMobile && !selectedBook && (
            <div className="mb-6">
              <RecentBooksSection 
                recentlyReadBooks={recentlyReadBooks}
                getRecentChapter={getRecentChapter}
              />
              
              <BookSearchFilter 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setActiveTestament={setActiveTestament}
              />
            </div>
          )}
          
          {!loading && selectedBook ? (
            <div className="glass-card rounded-xl overflow-hidden">
              <BookHeader selectedBook={selectedBook} />
              
              <ChaptersGrid 
                bookId={selectedBook.id}
                bookChapters={bookChapters}
                getChapterStatus={getChapterStatus}
              />
            </div>
          ) : (
            <BibleBooksList 
              books={bibleBooks}
              getBookProgress={getBookProgress}
              searchTerm={searchTerm}
              activeTestament={activeTestament}
              isMobile={isMobile}
            />
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BibleExplorer;
