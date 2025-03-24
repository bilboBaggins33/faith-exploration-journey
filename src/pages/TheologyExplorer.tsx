
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { theologyBooks } from '@/data/theology/books';
import { theologyChapters } from '@/data/theology/chapters';
import { useTheologyProgress } from '@/hooks/use-theology-progress';
import BookList from '@/components/theology/BookList';
import ChapterList from '@/components/theology/ChapterList';
import BookDetail from '@/components/theology/BookDetail';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const TheologyExplorer: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { 
    loading, 
    progress,
    getBookProgress, 
    getBookAverageScore, 
    getChapterStatus 
  } = useTheologyProgress();
  
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-10 px-4 md:px-6 bg-bible-beige">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-4">
              {selectedBook ? selectedBook.title : 'Theological Works'}
            </h1>
            <p className="max-w-2xl mx-auto text-bible-dark/80">
              {selectedBook
                ? `Explore the chapters of ${selectedBook.title} by ${selectedBook.author} (${selectedBook.year})`
                : 'Study classic theological works and test your understanding through interactive challenges.'}
            </p>
          </header>
          
          {loading ? (
            <div className="text-center py-12">Loading theology content...</div>
          ) : selectedBook ? (
            // Show chapters for selected book
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
            // Show list of theological books, sorted by most recently read
            <BookList 
              books={sortedBooks}
              getBookProgress={getBookProgress}
              getBookAverageScore={getBookAverageScore}
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TheologyExplorer;
