
import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookHeader from '@/components/bible/explorer/BookHeader';
import ChaptersGrid from '@/components/bible/explorer/ChaptersGrid';
import { useAuth } from '@/context/auth';
import { bibleBooks } from '@/data/bible';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useIsMobile } from '@/hooks/use-mobile';

const BibleExplorer = () => {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { bookId } = useParams();
  const selectedBook = selectedBookId ? bibleBooks.find(book => book.id === selectedBookId) : null;
  const { user } = useAuth();
  const isMobile = useIsMobile();
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
      
      <main className="flex-1 pt-16 md:pt-20 pb-10 px-3 sm:px-4 md:px-6 bg-bible-beige">
        <div className="max-w-7xl mx-auto w-full">
          {!selectedBook && (
            <div className="mb-6 md:mb-10 text-center">
              <h1 className="text-2xl md:text-4xl font-serif font-bold text-bible-dark mb-3">
                Bible Explorer
              </h1>
              <p className="max-w-2xl mx-auto text-bible-dark/80 mb-5 md:mb-8 text-sm md:text-base">
                Explore the Holy Bible, discover God's Word, and deepen your understanding of Scripture
                through interactive reading and study tools.
              </p>
              
              <div className="relative max-w-md mx-auto mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search by book name or testament..."
                  className="pl-10 w-full bg-white text-sm md:text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          )}
          
          {selectedBook && (
            <div className="mb-4">
              <BookHeader
                book={selectedBook}
                onBack={() => setSelectedBookId(null)}
              />
            </div>
          )}

          <div className="w-full">
            {selectedBook ? (
              <ChaptersGrid 
                bookId={selectedBookId}
              />
            ) : (
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {filteredBooks.map((book) => {
                  const progress = getBookProgress(book.id);
                  const averageScore = getBookAverageScore(book.id);
                  
                  return (
                    <button
                      key={book.id}
                      onClick={() => handleBookSelect(book.id)}
                      className="overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <AspectRatio ratio={16/9} className="w-full">
                        <img
                          src={`/assets/bible/thumbnail/${book.id.toLowerCase()}.jpg`}
                          alt={`${book.name} cover`}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/bible/thumbnail/genesis.jpg';
                          }}
                        />
                      </AspectRatio>
                      <div className="p-2 sm:p-3 md:p-4 flex-grow flex flex-col">
                        <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold mb-1">{book.name}</h3>
                        
                        {/* Progress section */}
                        <div className="mt-auto pt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="text-gray-900 font-medium">{progress.percentage}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-bible-gold transition-all duration-300"
                              style={{ width: `${progress.percentage}%` }}
                            />
                          </div>
                          <div className="flex justify-between items-center mt-1.5 text-xs">
                            <span className="text-gray-600">
                              {progress.completed}/{progress.total} Chapters
                            </span>
                            {averageScore > 0 && (
                              <span className="bg-bible-gold/10 text-bible-gold px-1.5 py-0.5 rounded text-xs">
                                {averageScore}%
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BibleExplorer;
