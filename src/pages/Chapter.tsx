
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BibleChapterChallenge from '@/components/challenges/BibleChapterChallenge';
import LoadingState from '@/components/challenges/bible/LoadingState';
import ErrorState from '@/components/challenges/bible/ErrorState';
import { bibleBooks } from '@/data/bible';
import { useAuth } from '@/context/auth';
import LoginRequired from '@/components/challenges/bible/LoginRequired';
import { ChapterChallenge } from '@/data/bible/types';
import SubscriptionRequired from '@/components/bible/SubscriptionRequired';
import ChallengeSkeleton from '@/components/challenges/bible/ChallengeSkeleton';
import ScrollToTop from '@/components/ScrollToTop';

const Chapter = () => {
  const { bookId, chapter } = useParams<{ bookId: string; chapter: string }>();
  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState<ChapterChallenge | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const isFirstChapter = parseInt(chapter || '0', 10) === 1;
  
  useEffect(() => {
    if (!bookId || !chapter) {
      setError('Invalid book or chapter');
      setLoading(false);
      return;
    }
    
    const chapterNumber = parseInt(chapter, 10);
    if (isNaN(chapterNumber)) {
      setError('Invalid chapter number');
      setLoading(false);
      return;
    }
    
    const book = bibleBooks.find(b => b.id === bookId);
    if (!book) {
      setError('Book not found');
      setLoading(false);
      return;
    }
    
    if (chapterNumber < 1 || chapterNumber > book.chapters) {
      setError(`Chapter must be between 1 and ${book.chapters}`);
      setLoading(false);
      return;
    }
    
    const loadChallenge = async () => {
      try {
        const challengesModule = await import('@/data/bible/challenges');
        const challengeData = challengesModule.getBibleChallengeByBookAndChapter(bookId, chapterNumber);
        
        if (!challengeData) {
          setError(`Challenge not found for ${book.name} chapter ${chapterNumber}`);
        } else {
          setChallenge(challengeData);
        }
        setLoading(false);
      } catch (err) {
        console.error('Failed to load challenge:', err);
        setError('Failed to load challenge data');
        setLoading(false);
      }
    };
    
    loadChallenge();
  }, [bookId, chapter]);
  
  const handleGoBack = () => {
    if (bookId) {
      navigate(`/bible/${bookId}`);
    } else {
      navigate('/bible');
    }
  };
  
  const renderContent = () => {
    if (loading) {
      return <LoadingState />;
    }
    
    if (error) {
      return (
        <ErrorState 
          title="Error" 
          description={error} 
          actionText="Go Back" 
          actionRoute={bookId ? `/bible/${bookId}` : '/bible'} 
        />
      );
    }
    
    // Only require login for non-first chapters
    if (!user && !isFirstChapter) {
      return <LoginRequired />;
    }
    
    // First chapter should be accessible to everyone
    return (
      <SubscriptionRequired allowViewOnly={isFirstChapter}>
        <BibleChapterChallenge />
      </SubscriptionRequired>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-10 bg-bible-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter;
