
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChallengeHeader from '@/components/challenges/bible/ChallengeHeader';
import BibleChapterChallenge from '@/components/challenges/BibleChapterChallenge';
import LoadingState from '@/components/challenges/bible/LoadingState';
import ErrorState from '@/components/challenges/bible/ErrorState';
import { bibleBooks } from '@/data/bible';
import { getBibleChallengeByBookAndChapter } from '@/data/bible/challenges';
import { useAuth } from '@/context/auth';
import LoginRequired from '@/components/challenges/bible/LoginRequired';

const Chapter = () => {
  const { bookId, chapter } = useParams<{ bookId: string; chapter: string }>();
  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  
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
    
    try {
      const challengeData = getBibleChallengeByBookAndChapter(bookId, chapterNumber);
      setChallenge(challengeData);
      setLoading(false);
    } catch (err) {
      setError('Failed to load challenge data');
      setLoading(false);
    }
  }, [bookId, chapter]);
  
  const handleGoBack = () => {
    if (bookId) {
      navigate(`/bible/${bookId}`);
    } else {
      navigate('/bible');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-bible-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState error={error} onGoBack={handleGoBack} />
          ) : !user ? (
            <LoginRequired />
          ) : (
            <>
              <ChallengeHeader 
                bookId={bookId || ''} 
                chapterNumber={parseInt(chapter || '0', 10)} 
                onGoBack={handleGoBack} 
              />
              <BibleChapterChallenge 
                bookId={bookId || ''} 
                chapterNumber={parseInt(chapter || '0', 10)}
                challenge={challenge}
              />
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter;
