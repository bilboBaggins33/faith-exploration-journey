
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Bookmark, BookOpen, LogIn } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { getBookImage } from '@/data/bible/book-images';
import { bibleBooks } from '@/data/bible';
import { ProgressiveImage } from '@/components/ui/progressive-image';

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
}

const ResultsCard = ({
  score,
  totalQuestions,
  keyVerseText,
  keyVerse,
  onRestartQuiz,
  onNavigateToBook,
  onNavigateToBible,
  bookName,
  bookId,
  chapter,
  showSignUpPrompt = false
}: ResultsCardProps) => {
  // Ensure score and totalQuestions are valid numbers
  const safeScore = Math.max(0, score || 0);
  const safeTotalQuestions = Math.max(1, totalQuestions || 1); // Prevent division by zero
  
  // Ensure that score doesn't exceed totalQuestions
  const normalizedScore = Math.min(safeScore, safeTotalQuestions);
  const percentage = Math.round((normalizedScore / safeTotalQuestions) * 100);
  
  const book = bibleBooks.find(b => b.id === bookId);
  
  return (
    <div className="relative overflow-hidden">
      {/* Blurred background */}
      <div className="fixed inset-0 -z-10">
        <ProgressiveImage
          src={getBookImage(bookId)}
          alt={`${book?.name || 'Bible book'} background`}
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main content card */}
      <div className="flex items-center justify-center p-4 pt-2 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl bg-white backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Header section with book info */}
          <div className="relative overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
              <ProgressiveImage
                src={getBookImage(bookId)}
                alt={`${book?.name || 'Bible book'} background`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            {/* Content over background */}
            <div className="relative z-10 p-5 pt-3 pb-4">
              <div className="mb-4">
                <h1 className="text-2xl leading-tight font-bold font-serif text-white drop-shadow-lg">{book?.name}</h1>
                <p className="text-md leading-tight text-white/90 drop-shadow">Chapter {parseInt(chapter, 10)}</p>
              </div>
              
              {/* Final Score */}
              <div className="flex justify-between items-center text-sm text-white/80 mb-2">
                <span>Challenge Complete!</span>
                <span className="font-semibold">
                  Final Score: <span className="text-white">{normalizedScore}/{safeTotalQuestions}</span>
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Results content */}
          <div className="px-6 pb-6 pt-4">
            <div className="text-center">
              <Award className={cn(
                "mx-auto mb-4", 
                normalizedScore === safeTotalQuestions ? "text-purple-500" : "text-bible-gold"
              )} size={60} />
              
              <h2 className="text-2xl font-bold mb-2">
                {normalizedScore === safeTotalQuestions ? "Perfect Score!" : "Challenge Completed!"}
              </h2>
              
              <p className="text-gray-600 mb-6">
                You've earned {normalizedScore} out of {safeTotalQuestions} possible points.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium mb-2 flex items-center justify-center">
                  <Bookmark className="mr-2 text-bible-blue" size={16} />
                  Key Verse
                </h3>
                <p className="italic text-gray-700 mb-2">"{keyVerseText}"</p>
                <p className="text-sm text-gray-500">{keyVerse}</p>
              </div>
              
              {showSignUpPrompt && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-bible-blue/10 border border-bible-blue/20 p-5 rounded-lg mb-6"
                >
                  <h3 className="text-lg font-medium text-bible-blue mb-2">
                    Unlock Your Bible Journey
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sign up to track your progress, unlock all chapters, and continue your Bible adventure. Your scores and achievements will be saved!
                  </p>
                  <Link to="/auth">
                    <Button className="bg-bible-blue text-white hover:bg-bible-deepBlue">
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign Up Now
                    </Button>
                  </Link>
                </motion.div>
              )}
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 mb-4">
                <Button 
                  onClick={onRestartQuiz}
                >
                  Retake Challenge
                </Button>
                
                <Button 
                onClick={onNavigateToBook}
                variant="outline"
                >
                  Return to {bookName || 'Book'}
                </Button>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsCard;
