import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import BookList from '@/components/theology/BookList';
import BookDetail from '@/components/theology/BookDetail';
import TheologyChapterCard from '@/components/theology/TheologyChapterCard';
import { theologyBooks } from '@/data/theology';
import { useTheologyProgress } from '@/hooks/theology/use-theology-progress';
import { getTheologyBookImage } from '@/data/theology/book-images';
import { useAuth } from '@/context/auth';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const Theology = () => {
  const { bookId } = useParams<{ bookId?: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedBookId, setSelectedBookId] = useState<string | null>(bookId || null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { getBookProgress, getBookAverageScore, getChapterScore: baseGetChapterScore } = useTheologyProgress();
  const getChapterScore = baseGetChapterScore || ((_bookId: string, _chapter: number) => 0);
  console.log('Theology page using hook, getChapterScore type:', typeof baseGetChapterScore);

  useEffect(() => {
    setSelectedBookId(bookId || null);
  }, [bookId]);

  const handleBackClick = () => {
    navigate('/theology');
  };

  const handleGoToChallenge = (id: string, chapter: number) => {
    navigate(`/theology/${id}/${chapter}`);
  };

  const selectedBook = selectedBookId
    ? theologyBooks.find(book => book.id === selectedBookId)
    : null;

  const filteredBooks = searchQuery.trim()
    ? theologyBooks.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : theologyBooks;

  const progress = selectedBook ? getBookProgress(selectedBook.id) : 0;
  const averageScore = selectedBook ? getBookAverageScore(selectedBook.id) : 0;

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-grow pb-10 relative">
        {/* Background */}
        <div className="fixed inset-0 -z-10 bg-[#2b1306]">
          <img
            src={selectedBook ? getTheologyBookImage(selectedBook.id) : "/assets/bible/default.jpg"}
            alt="Theology background"
            className="w-full h-full object-cover blur-sm scale-110"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="flex items-center justify-center p-4 pt-2 md:pt-16 pb-12">
          <div className="w-full max-w-4xl">
            {selectedBook ? (
              <motion.div
                className="backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden bg-white/10 p-1"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="p-6 pb-0">
                    <button
                      onClick={handleBackClick}
                      className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center mb-6 text-sm font-medium"
                    >
                      <span className="mr-1">←</span> Back to All Books
                    </button>

                    <BookDetail
                      book={selectedBook}
                      bookProgress={progress}
                      bookAverageScore={averageScore}
                    />
                  </div>

                  <motion.div
                    className="p-6 pt-0 bg-gray-50/50"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                  >
                    <h2 className="text-xl font-serif font-semibold mb-4 text-gray-800 border-t pt-6">Chapters</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                      {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(chapter => {
                        const score = getChapterScore(selectedBook.id, chapter);
                        return (
                          <TheologyChapterCard
                            key={chapter}
                            bookId={selectedBook.id}
                            chapter={chapter}
                            title={`Chapter ${chapter}`}
                            isCompleted={score > 0}
                            score={score}
                            maxScore={5}
                            isUnlocked={!!user}
                            onClick={() => handleGoToChallenge(selectedBook.id, chapter)}
                          />
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <BookList
                  books={filteredBooks}
                  getBookProgress={getBookProgress}
                  getBookAverageScore={getBookAverageScore}
                />
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Theology;
