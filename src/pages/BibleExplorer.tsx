import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import BookHeader from '@/components/bible/explorer/BookHeader';
import ChaptersGrid from '@/components/bible/explorer/ChaptersGrid';
import { bibleBooks } from '@/data/bible';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useIsMobile } from '@/hooks/use-mobile';

const BibleExplorer = () => {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { bookId } = useParams();
  const selectedBook = selectedBookId ? bibleBooks.find(book => book.id === selectedBookId) : null;
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

  // Set selected book when URL param changes
  useMemo(() => {
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

      <main className="flex-1 pt-24 pb-10 px-4 md:px-6 bg-bible-beige">
        <div className="max-w-7xl mx-auto">
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

          <header className="text-center mb-8">
            {selectedBook && (
              <BookHeader
                book={selectedBook}
                onBack={() => setSelectedBookId(null)}
              />
            )}
          </header>

          <div className="w-full">
            {selectedBook ? (
              <ChaptersGrid bookId={selectedBookId} />
            ) : (
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredBooks.map((book) => {
                  const progress = getBookProgress(book.id);
                  const averageScore = getBookAverageScore(book.id);

                  return (
                    <button
                      key={book.id}
                      onClick={() => handleBookSelect(book.id)}
                      className="overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                    >
                      <div className="relative pb-[66.67%] w-full bg-muted">
                        <img
                          src={`/assets/bible/thumbnail/${book.id.toLowerCase()}.jpg`}
                          alt={`${book.name} cover`}
                          className="absolute inset-0 object-cover w-full h-full"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/bible/default.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
                          <h3 className="text-base sm:text-lg font-serif font-semibold text-white">{book.name}</h3>
                          <p className="text-white/80 text-xs sm:text-sm">
                            {book.testament === 'old' ? 'Old Testament' : 'New Testament'}
                          </p>
                        </div>
                      </div>

                      <div className="p-3 flex-grow flex flex-col">
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
