import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChapterChallenge from '@/components/challenges/ChapterChallenge';
import LoadingState from '@/components/challenges/bible/LoadingState';
import ErrorState from '@/components/challenges/bible/ErrorState';
import { bibleBooks } from '@/data/bible';
import { ChapterChallenge as ChapterChallengeType } from '@/data/bible/types';
import ChapterAccessGate from '@/components/access/ChapterAccessGate';

const Chapter = () => {
  const { bookId, chapter } = useParams<{ bookId: string; chapter: string }>();
  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState<ChapterChallengeType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

    return (
      <ChapterAccessGate type="bible">
        <ChapterChallenge type="bible" />
      </ChapterAccessGate>
    );
  };

  return (
    <div className="flex flex-col flex-1">
      {renderContent()}
    </div>
  );
};

export default Chapter;
