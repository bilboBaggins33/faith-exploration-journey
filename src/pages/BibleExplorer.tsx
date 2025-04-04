import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BibleSidebar from '@/components/bible/explorer/BibleSidebar';
import BookHeader from '@/components/bible/explorer/BookHeader';
import ChaptersGrid from '@/components/bible/explorer/ChaptersGrid';
import BookSelector from '@/components/bible/explorer/BookSelector';
import LoginRequired from '@/components/challenges/bible/LoginRequired';
import SubscriptionRequired from '@/components/bible/SubscriptionRequired';
import { useAuth } from '@/context/auth';
import { getBibleBooks } from '@/data/bible';

const BibleExplorer = () => {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { bookId } = useParams();
  const bibleBooks = getBibleBooks();
  const selectedBook = selectedBookId ? bibleBooks.find(book => book.id === selectedBookId) : null;

  useEffect(() => {
    if (bookId) {
      setSelectedBookId(bookId);
    }
  }, [bookId]);

  const handleBookSelect = (bookId: string) => {
    setSelectedBookId(bookId);
    navigate(`/bible/${bookId}`);
  };

  const { user, isLoading } = useAuth();
  
  // If the user is not logged in and we've finished loading auth state,
  // show the login required component
  if (!isLoading && !user) {
    return <LoginRequired />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="flex flex-col md:flex-row">
          <BibleSidebar
            selectedBookId={selectedBookId}
            onBookSelect={handleBookSelect}
            isMobileOpen={isSidebarOpen}
            onMobileClose={() => setIsSidebarOpen(false)}
          />
          
          <div className="flex-1 p-4 md:p-8">
            {selectedBookId ? (
              <SubscriptionRequired
                message="Access to complete Bible chapters requires a premium subscription"
              >
                <div className="max-w-7xl mx-auto">
                  <BookHeader
                    selectedBook={selectedBook}
                    onBackClick={() => setSelectedBookId(null)}
                  />
                  <ChaptersGrid 
                    selectedBook={selectedBook}
                    selectedBookId={selectedBookId}
                  />
                </div>
              </SubscriptionRequired>
            ) : (
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-serif font-bold mb-8">Bible Explorer</h1>
                <BookSelector onBookSelect={handleBookSelect} />
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BibleExplorer;
