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
import { useGamification } from '@/hooks/use-gamification';
import { Flame, Sparkles } from 'lucide-react';

const container = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const { getBookProgress, progress, profile } = useBibleProgress();
  const { getBookProgress: getTheologyBookProgress } = useTheologyProgress();
  const { level, pointsIntoLevel, pointsForLevel, pointsToNext, progress: levelProgress } = useGamification();

  React.useEffect(() => {
    if (!isLoading && !user) navigate('/auth', { replace: true });
  }, [user, isLoading, navigate]);

  if (isLoading) return <DashboardLoading />;
  if (!user) return null;

  const totalChaptersRead = progress?.completed_chapters?.length || 0;
  const challengesCompleted = progress?.challenges_completed?.length || 0;
  const streak = profile?.streak || 0;
  const overallProgress = (() => {
    if (!progress?.completed_chapters) return 0;
    const total = bibleBooks.reduce((s, b) => s + b.chapters, 0);
    return Math.round((progress.completed_chapters.length / total) * 100);
  })();

  const recentlyReadBooks = (() => {
    if (!progress?.completed_chapters) return [];
    const sorted = [...progress.completed_chapters]
      .sort((a, b) => new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime());
    return Array.from(new Set(sorted.map(c => c.book_id))).slice(0, 3).map(id => ({
      id,
      name: bibleBooks.find(b => b.id === id)?.name || id,
      progress: getBookProgress(id).percentage,
    }));
  })();

  const recentTheologyBooks = theologyBooks
    .filter(b => getTheologyBookProgress(b.id) > 0)
    .slice(0, 3)
    .map(b => ({
      id: b.id,
      name: b.title,
      progress: getTheologyBookProgress(b.id),
      author: b.author,
    }));

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Explorer';
  const hasStarted = totalChaptersRead > 0;

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-background">
      {/* ── Hero: typographic, calm ── */}
      <header className="relative bg-bible-dark text-white pt-24 pb-10 md:pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-bible-blue/[0.08] to-transparent pointer-events-none" />

        <div className={`${container} relative`}>
          <motion.div variants={fade} initial="hidden" animate="visible" custom={0}>
            <p className="text-sm text-white/50 mb-2">{greeting}</p>
            <h1 className="font-serif text-3xl md:text-[2.5rem] font-bold tracking-tight !leading-[1.15] mb-3">
              {displayName}
            </h1>
            <p className="text-white/60 text-sm md:text-[15px] max-w-lg !leading-relaxed">
              {hasStarted
                ? `${totalChaptersRead} chapter${totalChaptersRead === 1 ? '' : 's'} read · ${overallProgress}% of the Bible`
                : 'Pick up where you left off — or start with Genesis 1 today.'}
            </p>

            {/* Inline vitals */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bible-gold/20 text-bible-gold">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-2xl font-serif font-bold leading-none tabular-nums">{level}</p>
                  <p className="text-xs text-white/45 mt-1">Level</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-orange-400 ${streak === 0 ? 'animate-pulse' : ''}`}>
                  <Flame className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-2xl font-serif font-bold leading-none tabular-nums">{streak}</p>
                  <p className="text-xs text-white/45 mt-1">Day streak</p>
                </div>
              </div>
              {streak === 0 && (
                <p className="text-xs text-orange-300/80 sm:ml-2">
                  Read a chapter today to begin your streak
                </p>
              )}
            </div>

            {/* XP */}
            <div className="mt-8 max-w-xl">
              <div className="flex justify-between text-xs text-white/45 mb-2">
                <span>{pointsIntoLevel} / {pointsForLevel} pts</span>
                <span>{pointsToNext.toLocaleString()} pts to level {level + 1}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-bible-gold transition-all duration-500"
                  style={{ width: `${Math.max(levelProgress, levelProgress > 0 ? 3 : 0)}%` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── Body ── */}
      <main className={`${container} py-8 md:py-10 space-y-8 flex-1`}>
        <motion.div variants={fade} initial="hidden" animate="visible" custom={1}>
          <ContentSection
            recentlyReadBooks={recentlyReadBooks}
            recentTheologyBooks={recentTheologyBooks}
            hasStartedReading={hasStarted}
          />
        </motion.div>

        <motion.div variants={fade} initial="hidden" animate="visible" custom={2}>
          <DashboardStats
            totalChaptersRead={totalChaptersRead}
            overallProgress={overallProgress}
            challengesCompleted={challengesCompleted}
          />
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
