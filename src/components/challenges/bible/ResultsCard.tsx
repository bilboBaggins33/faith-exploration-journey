import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { bibleBooks } from '@/data/bible';
import { theologyBooks } from '@/data/theology';
import GlassCard from '@/components/ui/GlassCard';
import { QuizBackdrop } from '@/components/challenges/QuizChrome';

interface ResultsCardProps {
  score: number;
  totalQuestions: number;
  keyVerseText: string;
  keyVerse: string;
  onRestartQuiz: () => void;
  onNavigateToBook: () => void;
  onNavigateToBible: () => void;
  bookName: string;
  bookId: string;
  chapter: string;
  showSignUpPrompt?: boolean;
  contentType?: 'bible' | 'theology';
}

const ResultsCard = ({
  score,
  totalQuestions,
  keyVerseText,
  keyVerse,
  onRestartQuiz,
  onNavigateToBook,
  bookName,
  bookId,
  chapter,
  showSignUpPrompt = false,
  contentType,
}: ResultsCardProps) => {
  const safeScore = Math.max(0, score || 0);
  const safeTotalQuestions = Math.max(1, totalQuestions || 1);
  const normalizedScore = Math.min(safeScore, safeTotalQuestions);
  const percentage = Math.round((normalizedScore / safeTotalQuestions) * 100);

  const bibleBook = bibleBooks.find(b => b.id === bookId);
  const theologyBook = theologyBooks.find(b => b.id === bookId);
  const isTheology = contentType === 'theology' || (!bibleBook && !!theologyBook);
  const displayName =
    bookName || bibleBook?.name || theologyBook?.title || (isTheology ? 'Book' : 'Bible book');

  return (
    <div className="relative overflow-hidden">
      <QuizBackdrop bookId={bookId} type={isTheology ? 'theology' : 'bible'} />

      <div className="min-h-dvh flex items-center justify-center p-4 pt-2 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[92vw] sm:max-w-md"
        >
          <GlassCard className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="p-5 md:p-6 pb-3 md:pb-4 text-center border-b border-white/20"
            >
              <h1 className="font-serif text-lg md:text-xl font-bold text-white drop-shadow-lg">
                {displayName} - Chapter {parseInt(chapter, 10)}
              </h1>
              <p className="text-white/80 text-sm mt-1">Challenge Complete!</p>
            </motion.div>

            <div className="px-5 md:px-6 py-6 md:py-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="relative mb-5 md:mb-6 flex justify-center items-center h-24 md:h-28"
              >
                {(() => {
                  const ratio = normalizedScore / safeTotalQuestions;
                  let rotationDuration = 0;
                  let iconColor = 'text-gray-400';
                  let GlowColor = 'bg-gray-200/20';

                  if (ratio === 1) {
                    rotationDuration = 3;
                    iconColor = 'text-yellow-400';
                    GlowColor = 'bg-yellow-400/40';
                  } else if (ratio >= 0.8) {
                    rotationDuration = 6;
                    iconColor = 'text-gray-300';
                    GlowColor = 'bg-gray-300/30';
                  } else if (ratio >= 0.6) {
                    rotationDuration = 10;
                    iconColor = 'text-amber-600';
                    GlowColor = 'bg-amber-600/30';
                  } else {
                    rotationDuration = 0;
                    iconColor = 'text-white/60';
                    GlowColor = 'bg-white/10';
                  }

                  return (
                    <>
                      <motion.div
                        animate={rotationDuration > 0 ? { rotateY: 360 } : {}}
                        transition={
                          rotationDuration > 0
                            ? { repeat: Infinity, duration: rotationDuration, ease: 'linear' }
                            : {}
                        }
                        className={cn('drop-shadow-xl', iconColor)}
                        style={{ perspective: 1000 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="md:w-[72px] md:h-[72px]"
                        >
                          <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 9.9l6-1.333a.5.5 0 0 1 .596.543l-1.5 11a.5.5 0 0 1-.5.44H4.014a.5.5 0 0 1-.5-.44l-1.5-11a.5.5 0 0 1 .596-.543l6 1.333Z" />
                        </svg>
                      </motion.div>

                      {ratio >= 0.6 && (
                        <motion.div
                          className={cn(
                            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-24 h-24 md:w-28 md:h-28 rounded-full blur-xl',
                            GlowColor
                          )}
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                      )}
                    </>
                  );
                })()}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-xl md:text-2xl font-bold text-white text-center mb-2"
              >
                {normalizedScore === safeTotalQuestions ? 'Perfect Score!' : 'Challenge Completed!'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-center mb-5 md:mb-6 text-sm md:text-base"
              >
                You earned {normalizedScore} out of {safeTotalQuestions} points.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-full bg-white/20 rounded-full h-2 mb-5 md:mb-6 origin-left"
              >
                <div
                  className="bg-gradient-to-r from-amber-400 to-amber-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl mb-5 md:mb-6"
              >
                <h3 className="font-medium text-white/90 mb-2 flex items-center justify-center text-sm">
                  <Bookmark className="mr-2 text-amber-400" size={14} />
                  {isTheology ? 'Key Quote' : 'Key Verse'}
                </h3>
                <p className="italic text-white/80 text-xs md:text-sm mb-1">"{keyVerseText}"</p>
                <p className="text-xs text-white/60">{keyVerse}</p>
              </motion.div>

              {showSignUpPrompt && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-amber-500/20 border border-amber-400/30 p-3 md:p-4 rounded-2xl mb-5 md:mb-6"
                >
                  <h3 className="text-sm md:text-base font-medium text-amber-300 mb-2">
                    {isTheology ? 'Unlock Your Learning Journey' : 'Unlock Your Bible Journey'}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm mb-3">
                    {isTheology
                      ? 'Sign up to track your progress and continue exploring these books!'
                      : 'Sign up to track your progress and continue your Bible adventure!'}
                  </p>
                  <Link to="/auth">
                    <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-amber-400/90 to-amber-500/90 text-white font-medium backdrop-blur-md border border-amber-300/50 shadow-lg transition-transform flex items-center justify-center gap-2">
                      <LogIn className="h-4 w-4" />
                      Sign Up Now
                    </button>
                  </Link>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col gap-3"
              >
                <button
                  onClick={onRestartQuiz}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-amber-400/90 to-amber-500/90 text-white font-medium backdrop-blur-md border border-amber-300/50 shadow-xl hover:shadow-2xl transition-all active:scale-[0.97]"
                >
                  Retake Challenge
                </button>

                <button
                  onClick={onNavigateToBook}
                  className="w-full py-3 rounded-full bg-white/10 text-white font-medium backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/20 transition-all active:scale-[0.97]"
                >
                  Return to {displayName}
                </button>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsCard;
