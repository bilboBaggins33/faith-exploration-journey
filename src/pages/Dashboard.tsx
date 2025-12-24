import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useTheologyProgress } from '@/hooks/use-theology-progress';
import { bibleBooks } from '@/data/bible';
import { theologyBooks } from '@/data/theology';
import DashboardStats from '@/components/dashboard/DashboardStats';
import ContentSection from '@/components/dashboard/ContentSection';
import DashboardLoading from '@/components/dashboard/DashboardLoading';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const { getBookProgress, progress, profile } = useBibleProgress();
  const { getBookProgress: getTheologyBookProgress } = useTheologyProgress();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth', { replace: true });
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return <DashboardLoading />;
  }

  if (!user) {
    return null; // Will redirect in the effect
  }

  // Calculate overall Bible reading progress
  const calculateOverallProgress = () => {
    if (!progress || !progress.completed_chapters) return 0;

    const totalChapters = bibleBooks.reduce((sum, book) => sum + book.chapters, 0);
    const completedChapters = progress.completed_chapters.length;

    return Math.round((completedChapters / totalChapters) * 100);
  };

  // Get recently read Bible books
  const getRecentlyReadBooks = () => {
    if (!progress || !progress.completed_chapters) return [];

    // Sort by most recent completion date and get unique books
    const sortedCompletedChapters = [...progress.completed_chapters]
      .sort((a, b) => new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime());

    const uniqueBooks = Array.from(new Set(
      sortedCompletedChapters.map(chapter => chapter.book_id)
    )).slice(0, 3);

    return uniqueBooks.map(bookId => {
      const book = bibleBooks.find(b => b.id === bookId);
      const bookProgress = getBookProgress(bookId);

      return {
        id: bookId,
        name: book?.name || bookId,
        progress: bookProgress.percentage
      };
    });
  };

  // Get recently read theology books
  const getRecentTheologyBooks = () => {
    // Get first 3 theology books that have some progress
    return theologyBooks.filter(book => {
      const progressValue = getTheologyBookProgress(book.id);
      return progressValue > 0;
    }).slice(0, 3).map(book => {
      const progressValue = getTheologyBookProgress(book.id);
      return {
        id: book.id,
        name: book.title,
        progress: progressValue,
        author: book.author
      };
    });
  };

  const recentlyReadBooks = getRecentlyReadBooks();
  const recentTheologyBooks = getRecentTheologyBooks();
  const overallProgress = calculateOverallProgress();
  const totalChaptersRead = progress?.completed_chapters?.length || 0;
  const challengesCompleted = progress?.challenges_completed?.length || 0;
  const streak = profile?.streak || 0;

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold">Dashboard</h1>
            <p className="text-gray-600">Track your Bible reading journey and progress</p>
          </div>

          <DashboardStats
            totalChaptersRead={totalChaptersRead}
            overallProgress={overallProgress}
            challengesCompleted={challengesCompleted}
            streak={streak}
          />

          <ContentSection
            recentlyReadBooks={recentlyReadBooks}
            recentTheologyBooks={recentTheologyBooks}
            overallProgress={overallProgress}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
