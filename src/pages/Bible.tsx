import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Crown } from 'lucide-react';
import { bibleBooks } from '@/data/bible';
import { getBibleChallengeByBookAndChapter } from '@/data/bible/challenges';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import BibleBooksList from '@/components/bible/BibleBooksList';
import BibleChapterCard from '@/components/bible/BibleChapterCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/context/auth';
import { useAccess } from '@/hooks/use-access';
import { getBookImage } from '@/data/bible/book-images';
import { useDifficultyProgress } from '@/hooks/bible/use-difficulty-progress';
import { getBookStars } from '@/hooks/bible/bible-progress-utils';

const Bible: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [recentlyReadBooks, setRecentlyReadBooks] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'recent' | 'ot' | 'nt'>('ot');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const { getBookProgress, getChapterStatus, progress, getChapterDifficultyScores } = useBibleProgress();
  const { getBookDifficultyProgress } = useDifficultyProgress(progress);
  const isMobile = useIsMobile();
  const { user } = useAuth();
  const { canAccess } = useAccess();

  const selectedBook = bookId ? bibleBooks.find(book => book.id === bookId) : null;

  useEffect(() => {
    if (user) {
      const recent = JSON.parse(localStorage.getItem('recentBooks') || '[]');
      setActiveTab(recent.length > 0 ? 'recent' : 'ot');
    } else {
      setActiveTab('ot');
    }
  }, [user]);

  useEffect(() => {
    setSelectedChapter(null);

    if (bookId && user) {
      const recent = JSON.parse(localStorage.getItem('recentBooks') || '[]');
      if (!recent.includes(bookId)) {
        const newRecent = [bookId, ...recent].slice(0, 5);
        localStorage.setItem('recentBooks', JSON.stringify(newRecent));
        setRecentlyReadBooks(newRecent);
      } else {
        setRecentlyReadBooks(recent);
      }
    } else if (user) {
      const recent = JSON.parse(localStorage.getItem('recentBooks') || '[]');
      setRecentlyReadBooks(recent);
    } else {
      setRecentlyReadBooks([]);
    }
  }, [bookId, user]);

  const tabs = useMemo(
    () =>
      user && recentlyReadBooks.length > 0
        ? [
            { id: 'recent' as const, label: 'Recent' },
            { id: 'ot' as const, label: 'OT' },
            { id: 'nt' as const, label: 'NT' },
          ]
        : [
            { id: 'ot' as const, label: 'OT' },
            { id: 'nt' as const, label: 'NT' },
          ],
    [user, recentlyReadBooks.length]
  );

  useEffect(() => {
    const activeIndex = tabs.findIndex(t => t.id === activeTab);
    const activeButton = tabRefs.current[activeIndex];

    if (!activeButton) {
      return;
    }

    const underlineWidth = 28; // small fixed width for a subtle indicator
    const { offsetLeft, offsetWidth } = activeButton;
    const left = offsetLeft + offsetWidth / 2 - underlineWidth / 2;

    setIndicatorStyle({ left, width: underlineWidth });
  }, [activeTab, tabs, tabs.length]);

  const getDisplayedBooks = () => {
    if (activeTab === 'recent' && user) {
      const recentBooks = recentlyReadBooks
        .map(id => bibleBooks.find(book => book.id === id))
        .filter((book): book is NonNullable<typeof book> => Boolean(book));

      return recentBooks;
    }

    if (activeTab === 'ot') {
      return bibleBooks.filter(book => book.testament === 'old');
    }

    if (activeTab === 'nt') {
      return bibleBooks.filter(book => book.testament === 'new');
    }

    return bibleBooks;
  };

  const handleBookSelect = (id: string) => {
    navigate(`/bible/${id}`);
  };

  const handleBackToBooks = () => {
    navigate('/bible');
  };

  const handleGoToChallenge = React.useCallback((bookId: string, chapter: number, difficulty?: string) => {
    navigate(`/bible/${bookId}/${chapter}${difficulty ? `?difficulty=${difficulty}` : ''}`);
  }, [navigate]);

  const getBookProgressPercentage = (bookId: string): number => {
    const progress = getBookProgress(bookId);
    return progress.percentage;
  };

  const bookStars = selectedBook ? getBookStars(selectedBook.id, progress?.completed_chapters) : null;
  const bookProgressPct = selectedBook ? getBookProgressPercentage(selectedBook.id) : 0;
  const chaptersStarted = selectedBook
    ? new Set(
        (progress?.completed_chapters || [])
          .filter(c => c.book_id === selectedBook.id)
          .map(c => c.chapter)
      ).size
    : 0;

  return (
    <div className="flex flex-col flex-1">

      <main className="flex-grow pb-10 relative">
        {!selectedBook && (
          <div className="fixed inset-0 -z-10 bg-[#2b1306]">
            <img
              src="/assets/bible/default.jpg"
              alt="Bible background"
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
              <div>
                <div className="flex justify-center mb-6">
                  <div className="relative inline-flex">
                    {tabs.map((tab, index) => {
                      const isActive = tab.id === activeTab;

                      return (
                        <button
                          key={tab.id}
                          type="button"
                          ref={el => {
                            tabRefs.current[index] = el;
                          }}
                          onClick={() => setActiveTab(tab.id)}
                          className={`relative px-4 pb-2 pt-1 text-sm font-serif tracking-wide uppercase transition-colors ${
                            isActive ? 'text-white' : 'text-white/70 hover:text-white'
                          } bg-transparent`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                    <span
                      className="pointer-events-none absolute -bottom-[2px] h-[2px] bg-white transition-all duration-300 ease-out"
                      style={{
                        width: `${indicatorStyle.width}px`,
                        left: `${indicatorStyle.left}px`,
                      }}
                    />
                  </div>
                </div>
                <BibleBooksList
                  books={getDisplayedBooks()}
                  getBookProgress={getBookProgressPercentage}
                  getBookDifficultyProgress={getBookDifficultyProgress}
                  getBookStars={(id) => getBookStars(id, progress?.completed_chapters)}
                  isMobile={isMobile}
                  groupByTestament={activeTab !== 'recent'}
                />
              </div>
            )}

            {selectedBook && !selectedChapter && (
              <div className="relative overflow-hidden">
                {/* Blurred background */}
                <div className="fixed inset-0 -z-10 bg-[#2b1306]">
                  <img
                    src={getBookImage(selectedBook.id)}
                    alt={`${selectedBook.name} background`}
                    className="w-full h-full object-cover scale-110 opacity-50"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/bible/default.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Main content card */}
                <div className="flex items-center justify-center pt-6 pb-12">
                  <div className="w-full max-w-screen-xl rounded-2xl shadow-xl overflow-hidden">
                    {/* Header section */}
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#2b1306]">
                        <img
                          src={getBookImage(selectedBook.id)}
                          alt={`${selectedBook.name} background`}
                          className="w-full h-full object-cover"
                          loading="eager"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.src = '/assets/bible/default.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>

                      <div className="relative z-10 p-5 pt-3 pb-6">
                        <button
                          onClick={handleBackToBooks}
                          className="text-white/90 hover:text-white transition-colors inline-flex items-center mb-4 text-sm backdrop-blur-sm bg-black/20 rounded-full px-3 py-1.5"
                        >
                          <span className="mr-1">←</span> Back to All Books
                        </button>

                        <div className="flex flex-wrap items-end justify-between gap-4">
                          <div className="min-w-0">
                            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                              {selectedBook.testament === 'old' ? 'Old Testament' : 'New Testament'}
                            </span>
                            <h1 className="text-3xl leading-tight font-bold font-serif text-white drop-shadow-lg">
                              {selectedBook.name}
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

                    {/* Chapters section */}
                    <div className="p-4 sm:p-6 bg-white/95 backdrop-blur shadow-inner">
                      {/* Legend */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500 mb-4">
                        <span className="inline-flex items-center gap-1 font-medium text-gray-600">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          Up to 3 stars per difficulty
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Easy
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Medium
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" /> Hard
                        </span>
                      </div>

                      {/* Chapter cards grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                        {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(chapter => {
                          const challengeData = getBibleChallengeByBookAndChapter(selectedBook.id, chapter);
                          const { isCompleted } = getChapterStatus(selectedBook.id, chapter);
                          const scores = getChapterDifficultyScores(selectedBook.id, chapter);

                          return (
                            <div key={chapter} className="w-full">
                              <BibleChapterCard
                                bookId={selectedBook.id}
                                chapter={chapter}
                                title={challengeData?.title}
                                isCompleted={isCompleted}
                                scores={scores}
                                maxScore={5}
                                isUnlocked={canAccess('bible', selectedBook.id, chapter)}
                                onCardClick={handleGoToChallenge}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {selectedBook && selectedChapter && (
              <BibleChapterCard
                bookId={selectedBook.id}
                chapter={selectedChapter}
                title={getBibleChallengeByBookAndChapter(selectedBook.id, selectedChapter)?.title}
                isCompleted={false}
                scores={{
                  easy: { score: 0, attempted: false },
                  medium: { score: 0, attempted: false },
                  hard: { score: 0, attempted: false },
                }}
                maxScore={5}
                isUnlocked={true}
                onCardClick={handleGoToChallenge}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bible;
