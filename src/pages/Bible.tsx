import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bibleBooks } from '@/data/bible';
import { getBibleChallengeByBookAndChapter } from '@/data/bible/challenges';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import BibleBooksList from '@/components/bible/BibleBooksList';
import BibleChapterCard from '@/components/bible/BibleChapterCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/context/auth';
import { getBookImage } from '@/data/bible/book-images';
import { useDifficultyProgress, Difficulty } from '@/hooks/bible/use-difficulty-progress';
import MiniDonutChart from '@/components/ui/MiniDonutChart';

const DIFFICULTY_COLORS = {
  easy: 'hsl(142, 71%, 45%)',
  medium: 'hsl(38, 92%, 50%)',
  hard: 'hsl(0, 72%, 51%)',
};

const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

const Bible: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [recentlyReadBooks, setRecentlyReadBooks] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'recent' | 'ot' | 'nt'>('ot');
  const { getBookProgress, getChapterStatus, progress, getChapterDifficultyScores } = useBibleProgress();
  const { getBookDifficultyProgress } = useDifficultyProgress(progress);
  const isMobile = useIsMobile();
  const { user } = useAuth();

  const selectedBook = bookId ? bibleBooks.find(book => book.id === bookId) : null;

  useEffect(() => {
    if (user) {
      setActiveTab('recent');
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

  const tabs = user
    ? [
        { id: 'recent' as const, label: 'Recent' },
        { id: 'ot' as const, label: 'OT' },
        { id: 'nt' as const, label: 'NT' },
      ]
    : [
        { id: 'ot' as const, label: 'OT' },
        { id: 'nt' as const, label: 'NT' },
      ];

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
                  <div className="relative inline-flex border-b border-white/20">
                    {tabs.map(tab => {
                      const isActive = tab.id === activeTab;

                      return (
                        <button
                          key={tab.id}
                          type="button"
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
                      className="pointer-events-none absolute -bottom-[1px] left-0 h-[2px] bg-white transition-all duration-300 ease-out"
                      style={{
                        width: `${100 / tabs.length}%`,
                        transform: `translateX(${tabs.findIndex(t => t.id === activeTab) * 100}%)`,
                      }}
                    />
                  </div>
                </div>
                <BibleBooksList
                  books={getDisplayedBooks()}
                  getBookProgress={getBookProgressPercentage}
                  getBookDifficultyProgress={getBookDifficultyProgress}
                  isMobile={isMobile}
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

                      <div className="relative z-10 p-5 pt-2 pb-4">
                        <div className="mb-4">
                          <button
                            onClick={handleBackToBooks}
                            className="text-white/90 hover:text-white transition-colors inline-flex items-center mb-3 text-sm"
                          >
                            <span className="mr-1">←</span> Back to All Books
                          </button>
                          <h1 className="text-2xl leading-tight font-bold font-serif text-white drop-shadow-lg mb-4">{selectedBook.name}</h1>
                        </div>
                      </div>
                    </div>

                    {/* Chapters section */}
                    <div className="p-6 bg-white/95 backdrop-blur shadow-inner">
                      {/* Chapter cards grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(chapter => {
                          const challengeData = getBibleChallengeByBookAndChapter(selectedBook.id, chapter);
                          const { isCompleted } = getChapterStatus(selectedBook.id, chapter);
                          const scores = getChapterDifficultyScores(selectedBook.id, chapter);

                          return (
                            <BibleChapterCard
                              key={chapter}
                              bookId={selectedBook.id}
                              chapter={chapter}
                              title={challengeData?.title}
                              isCompleted={isCompleted}
                              scores={scores}
                              maxScore={5}
                              isUnlocked={!!user}
                              onCardClick={handleGoToChallenge}
                            />
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
