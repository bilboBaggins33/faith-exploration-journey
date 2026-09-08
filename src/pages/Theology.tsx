import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Crown } from 'lucide-react';
import BookList from '@/components/theology/BookList';
import TheologyChapterCard from '@/components/theology/TheologyChapterCard';
import { theologyBooks } from '@/data/theology';
import { getTheologyChallengeTitleOrFallback } from '@/data/theology/challenges';
import { useTheologyProgress } from '@/hooks/theology/use-theology-progress';
import { getTheologyBookImage } from '@/data/theology/book-images';
import { getTheologyBookStars } from '@/hooks/theology/theology-progress-utils';
import { useAccess } from '@/hooks/use-access';

const Theology = () => {
  const { bookId } = useParams<{ bookId?: string }>();
  const navigate = useNavigate();
  const { canAccess } = useAccess();
  const {
    progress,
    getBookProgress,
    getChapterScore,
    getBookChaptersRead,
  } = useTheologyProgress();

  const selectedBook = bookId
    ? theologyBooks.find(book => book.id === bookId) ?? null
    : null;

  const handleBackClick = () => {
    navigate('/theology');
  };

  const handleGoToChallenge = (id: string, chapter: number) => {
    navigate(`/theology/${id}/${chapter}`);
  };

  const bookProgressPct = selectedBook ? getBookProgress(selectedBook.id) : 0;
  const bookStars = selectedBook
    ? getTheologyBookStars(selectedBook.id, progress?.completed_chapters)
    : null;
  const chaptersStarted = selectedBook ? getBookChaptersRead(selectedBook.id) : 0;

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-grow pb-10 relative">
        {!selectedBook && (
          <div className="fixed inset-0 -z-10 bg-[#2b1306]">
            <img
              src="/assets/bible/default.webp"
              alt="Theology background"
              className="w-full h-full object-cover scale-110 opacity-40"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )}

        <div className="flex items-center justify-center p-4 pt-6 md:pt-8 pb-12">
          <div className="w-full max-w-screen-xl">
            {!selectedBook && (
              <BookList
                books={theologyBooks}
                getBookProgress={getBookProgress}
                getBookStars={(id) =>
                  getTheologyBookStars(id, progress?.completed_chapters)
                }
              />
            )}

            {selectedBook && (
              <div className="relative overflow-hidden">
                <div className="fixed inset-0 -z-10 bg-[#2b1306]">
                  <img
                    src={getTheologyBookImage(selectedBook.id)}
                    alt={`${selectedBook.title} background`}
                    className="w-full h-full object-cover scale-110 opacity-50"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/bible/default.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="flex items-center justify-center pt-6 pb-12">
                  <div className="w-full max-w-screen-xl rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#2b1306]">
                        <img
                          src={getTheologyBookImage(selectedBook.id)}
                          alt={`${selectedBook.title} background`}
                          className="w-full h-full object-cover"
                          loading="eager"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.src = '/assets/bible/default.webp';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>

                      <div className="relative z-10 p-5 pt-3 pb-6">
                        <button
                          onClick={handleBackClick}
                          className="text-white/90 hover:text-white transition-colors inline-flex items-center mb-4 text-sm backdrop-blur-sm bg-black/20 rounded-full px-3 py-1.5"
                        >
                          <span className="mr-1">←</span> Back to All Books
                        </button>

                        <div className="flex flex-wrap items-end justify-between gap-4">
                          <div className="min-w-0">
                            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                              {selectedBook.category}
                              {selectedBook.author ? ` · ${selectedBook.author}` : ''}
                            </span>
                            <h1 className="text-3xl leading-tight font-bold font-serif text-white drop-shadow-lg">
                              {selectedBook.title}
                            </h1>
                            <p className="text-white/80 text-sm mt-1">
                              {selectedBook.chapters} chapters
                              {chaptersStarted > 0 && ` · ${chaptersStarted} started`}
                            </p>
                          </div>

                          <div className="flex flex-col items-start sm:items-end gap-2 w-full sm:w-auto">
                            {bookStars && bookStars.mastered ? (
                              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-white inline-flex items-center gap-1.5 shadow-md">
                                <Crown className="h-3.5 w-3.5" />
                                Book Mastered
                              </span>
                            ) : bookStars && bookStars.earned > 0 ? (
                              <span className="px-3 py-1 rounded-full text-sm font-bold bg-black/35 text-white backdrop-blur-sm inline-flex items-center gap-1.5">
                                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                {bookStars.earned}/{bookStars.total} stars
                              </span>
                            ) : null}

                            <div className="w-full sm:w-48">
                              <div className="flex items-center justify-between text-[11px] text-white/80 mb-1">
                                <span>Progress</span>
                                <span>{bookProgressPct}%</span>
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-amber-300 to-amber-500 rounded-full transition-all duration-500"
                                  style={{ width: `${bookProgressPct}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 bg-white/95 backdrop-blur shadow-inner">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500 mb-4">
                        <span className="inline-flex items-center gap-1 font-medium text-gray-600">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          Up to 3 stars per chapter
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                        {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(
                          chapter => {
                            const challengeTitle = getTheologyChallengeTitleOrFallback(
                              selectedBook.id,
                              chapter
                            );
                            const score = getChapterScore(selectedBook.id, chapter);

                            return (
                              <div key={chapter} className="w-full">
                                <TheologyChapterCard
                                  bookId={selectedBook.id}
                                  chapter={chapter}
                                  title={challengeTitle}
                                  isCompleted={score > 0}
                                  score={score}
                                  maxScore={5}
                                  isUnlocked={canAccess(
                                    'theology',
                                    selectedBook.id,
                                    chapter
                                  )}
                                  onClick={() =>
                                    handleGoToChallenge(selectedBook.id, chapter)
                                  }
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Theology;
