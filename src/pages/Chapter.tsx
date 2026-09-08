import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChapterChallenge from '@/components/challenges/ChapterChallenge';
import ErrorState from '@/components/challenges/bible/ErrorState';
import { bibleBooks } from '@/data/bible';
import ChapterAccessGate from '@/components/access/ChapterAccessGate';

const Chapter = () => {
  const { bookId, chapter } = useParams<{ bookId: string; chapter: string }>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!bookId || !chapter) {
      setError('Invalid book or chapter');
      return;
    }

    const chapterNumber = parseInt(chapter, 10);
    if (isNaN(chapterNumber)) {
      setError('Invalid chapter number');
      return;
    }

    const book = bibleBooks.find(b => b.id === bookId);
    if (!book) {
      setError('Book not found');
      return;
    }

    if (chapterNumber < 1 || chapterNumber > book.chapters) {
      setError(`Chapter must be between 1 and ${book.chapters}`);
      return;
    }

    setError(null);
  }, [bookId, chapter]);

  if (error) {
    return (
      <div className="flex flex-col flex-1">
        <ErrorState
          title="Error"
          description={error}
          actionText="Go Back"
          actionRoute={bookId ? `/bible/${bookId}` : '/bible'}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <ChapterAccessGate type="bible">
        <ChapterChallenge type="bible" />
      </ChapterAccessGate>
    </div>
  );
};

export default Chapter;
