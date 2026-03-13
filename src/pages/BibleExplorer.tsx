import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import BookHeader from '@/components/bible/explorer/BookHeader';
import ChaptersGrid from '@/components/bible/explorer/ChaptersGrid';
import BookCard from '@/components/bible/explorer/BookCard';
import { bibleBooks } from '@/data/bible';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useIsMobile } from '@/hooks/use-mobile';
import { AnimatePresence, motion } from 'framer-motion';

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
        <div className="max-w-screen-xl mx-auto">
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
                  <Search className="h-5 w-5 text-muted-foreground" />
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
              <AnimatePresence mode="popLayout">
                <motion.div
                  layout
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                >
                  {filteredBooks.map((book, index) => {
                    const progress = getBookProgress(book.id);
                    const averageScore = getBookAverageScore(book.id);

                    return (
                      <BookCard
                        key={book.id}
                        book={book}
                        progress={progress}
                        averageScore={averageScore}
                        index={index}
                        onSelect={handleBookSelect}
                      />
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BibleExplorer;
