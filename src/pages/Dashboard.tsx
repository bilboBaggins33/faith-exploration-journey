import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useTheologyProgress } from '@/hooks/use-theology-progress';
import { bibleBooks } from '@/data/bible';
import { theologyBooks } from '@/data/theology';
import DashboardStats from '@/components/dashboard/DashboardStats';
import ContentSection from '@/components/dashboard/ContentSection';
import DashboardLoading from '@/components/dashboard/DashboardLoading';
import StreakCounter from '@/components/dashboard/StreakCounter';
import { Flame } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

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
    return null;
  }

  const calculateOverallProgress = () => {
    if (!progress || !progress.completed_chapters) return 0;
    const totalChapters = bibleBooks.reduce((sum, book) => sum + book.chapters, 0);
    const completedChapters = progress.completed_chapters.length;
    return Math.round((completedChapters / totalChapters) * 100);
  };

  const getRecentlyReadBooks = () => {
    if (!progress || !progress.completed_chapters) return [];
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

  const getRecentTheologyBooks = () => {
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

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Explorer';

  return (
    <div className="flex flex-col flex-1">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-br from-bible-dark via-[#1a1a3e] to-[#0f2027] pt-24 md:pt-20 pb-20 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-bible-blue rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-bible-gold rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div>
              <p className="text-bible-sky/80 text-xs md:text-sm font-medium tracking-wide uppercase mb-1">{getGreeting()}</p>
              <h1 className="text-2xl md:text-4xl font-serif font-bold text-white mb-1 md:mb-2">
                {displayName}
              </h1>
              <p className="text-white/60 text-sm md:text-base">
                Track your Bible reading journey and progress
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 md:px-5 py-2.5 md:py-3 border border-white/10 self-start md:self-auto">
              <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-500/30">
                <Flame className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white leading-none">{streak}</div>
                <div className="text-white/50 text-xs mt-0.5">Day Streak</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 pb-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto -mt-10 md:-mt-12 relative z-20">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            <DashboardStats
              totalChaptersRead={totalChaptersRead}
              overallProgress={overallProgress}
              challengesCompleted={challengesCompleted}
              streak={streak}
            />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <ContentSection
              recentlyReadBooks={recentlyReadBooks}
              recentTheologyBooks={recentTheologyBooks}
              overallProgress={overallProgress}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
