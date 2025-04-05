
import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BibleSidebar from '@/components/bible/explorer/BibleSidebar';
import BookHeader from '@/components/bible/explorer/BookHeader';
import ChaptersGrid from '@/components/bible/explorer/ChaptersGrid';
import SubscriptionRequired from '@/components/bible/SubscriptionRequired';
import { useAuth } from '@/context/auth';
import { bibleBooks } from '@/data/bible';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useBibleProgress } from '@/hooks/use-bible-progress';

const BibleExplorer = () => {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { bookId } = useParams();
  const selectedBook = selectedBookId ? bibleBooks.find(book => book.id === selectedBookId) : null;
  const { user } = useAuth();
  const { 
    loading: progressLoading, 
    getBookProgress, 
    getBookAverageScore 
  } = useBibleProgress();
  
  // Filter books based on search query
  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return bibleBooks;
    
    const query = searchQuery.toLowerCase();
    return bibleBooks.filter(book => 
      book.name.toLowerCase().includes(query) || 
      book.testament.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  useEffect(() => {
    if (bookId) {
      setSelectedBookId(bookId);
    }
  }, [bookId]);

  const handleBookSelect = (bookId: string) => {
    setSelectedBookId(bookId);
    navigate(`/bible/${bookId}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-10 px-4 md:px-6 bg-bible-beige">
        <div className="max-w-4xl mx-auto">
          {!selectedBook && (
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-4">
                Bible Explorer
              </h1>
              <p className="max-w-2xl mx-auto text-bible-dark/80 mb-8">
                Explore the Holy Bible, discover God's Word, and deepen your understanding of Scripture
                through interactive reading and study tools.
              </p>
              
              <div className="relative max-w-md mx-auto mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search by book name or testament..."
                  className="pl-10 w-full bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          )}
          
          <header className="text-center mb-12">
            {selectedBook && (
              <>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-4">
                  {selectedBook.name}
                </h1>
              </>
            )}
          </header>

          <SidebarProvider>
            <div className="flex w-full">
              {selectedBook ? (
                <div className="max-w-7xl mx-auto">
                  <BookHeader
                    book={selectedBook}
                    onBack={() => setSelectedBookId(null)}
                  />
                  <ChaptersGrid 
                    bookId={selectedBookId}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredBooks.map((book) => {
                    const progress = getBookProgress(book.id);
                    const averageScore = getBookAverageScore(book.id);
                    
                    return (
                      <button
                        key={book.id}
                        onClick={() => handleBookSelect(book.id)}
                        className="overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <AspectRatio ratio={3/1}>
                          <img
                            src={`/assets/bible/thumbnail/${book.id.toLowerCase()}.jpg`}
                            alt={`${book.name} cover`}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/assets/bible/thumbnail/genesis.jpg';
                            }}
                          />
                        </AspectRatio>
                        <div className="p-6">
                          <h3 className="text-2xl font-serif font-semibold mb-2">{book.name}</h3>
                          
                          {/* Progress section */}
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Progress</span>
                              <span className="text-gray-900 font-medium">{progress.percentage}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-bible-gold transition-all duration-300"
                                style={{ width: `${progress.percentage}%` }}
                              />
                            </div>
                            <div className="flex justify-between items-center mt-3 text-sm">
                              <span className="text-gray-600">
                                {progress.completed}/{progress.total} Chapters
                              </span>
                              {averageScore > 0 && (
                                <span className="bg-bible-gold/10 text-bible-gold px-2 py-1 rounded">
                                  Avg. Score: {averageScore}%
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </SidebarProvider>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BibleExplorer;
