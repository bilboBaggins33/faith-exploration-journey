import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '@/components/Footer';
import { theologyBooks } from '@/data/theology/books';
import { theologyChapters } from '@/data/theology/chapters';
import { useTheologyProgress } from '@/hooks/use-theology-progress';
import BookList from '@/components/theology/BookList';
import ChapterList from '@/components/theology/ChapterList';
import BookDetail from '@/components/theology/BookDetail';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const TheologyExplorer: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const {
    loading,
    progress,
    getBookProgress,
    getBookAverageScore,
    getChapterStatus
  } = useTheologyProgress();

  const [searchQuery, setSearchQuery] = useState('');

  // Get selected book data if bookId is provided
  const selectedBook = bookId ? theologyBooks.find(book => book.id === bookId) : null;
  const bookChapters = selectedBook ? theologyChapters[selectedBook.id] || [] : [];

  // Sort books by most recently read first
  const sortedBooks = useMemo(() => {
    if (!progress || !progress.completed_chapters) {
      return [...theologyBooks];
    }

    // Create a map of most recent timestamp for each book
    const bookTimestamps = new Map<string, Date>();
    progress.completed_chapters.forEach(chapter => {
      const bookId = chapter.book_id;
      const completedAt = new Date(chapter.completed_at);

      if (!bookTimestamps.has(bookId) || completedAt > bookTimestamps.get(bookId)!) {
        bookTimestamps.set(bookId, completedAt);
      }
    });

    // Sort books based on timestamp, putting most recent first
    return [...theologyBooks].sort((a, b) => {
      const timeA = bookTimestamps.get(a.id);
      const timeB = bookTimestamps.get(b.id);

      if (timeA && timeB) {
        return timeB.getTime() - timeA.getTime();
      } else if (timeA) {
        return -1; // A has been read, but B hasn't
      } else if (timeB) {
        return 1; // B has been read, but A hasn't
      }
      return 0; // Neither has been read
    });
  }, [progress]);

  // Filter books based on search query
  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return sortedBooks;

    const query = searchQuery.toLowerCase();
    return sortedBooks.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
    );
  }, [sortedBooks, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow pb-10 relative">
        {/* Blurred background */}
        <div className="fixed inset-0 -z-10 bg-[#2b1306]">
          <img
            src="/assets/bible/default.jpg"
            alt="Theology background"
            className="w-full h-full object-cover blur-sm scale-110"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="flex items-center justify-center p-4 pt-2 pb-12">
          <div className="w-full max-w-4xl">
            {loading ? (
              <div className="text-center py-12 text-white">Loading theology content...</div>
            ) : selectedBook ? (
              <div>
                <BookDetail
                  book={selectedBook}
                  bookProgress={getBookProgress(selectedBook.id)}
                  bookAverageScore={getBookAverageScore(selectedBook.id)}
                />

                <ChapterList
                  chapters={bookChapters}
                  getChapterStatus={getChapterStatus}
                />
              </div>
            ) : (
              <BookList
                books={sortedBooks}
                getBookProgress={getBookProgress}
                getBookAverageScore={getBookAverageScore}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TheologyExplorer;
