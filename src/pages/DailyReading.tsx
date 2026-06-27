import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import DailyReadingPlan from '@/components/bible/DailyReadingPlan';
import PageCard from '@/components/ui/PageCard';
import { useAuth } from '@/context/AuthContext';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { getTodaysReading } from '@/data/bible/reading-plans/mcheyne';
import { Button } from '@/components/ui/button';
import { BookOpen, CalendarDays, ArrowRight, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const container = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const DailyReading = () => {
  const { user } = useAuth();
  const { getChapterStatus } = useBibleProgress();
  const todaysReadings = getTodaysReading();
  const todayLabel = format(new Date(), 'EEEE, MMMM d');

  const completedCount = user
    ? todaysReadings.filter((r) => getChapterStatus(r.bookId, r.chapter).isCompleted).length
    : 0;

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-background">
      {/* Hero */}
      <header className="relative bg-bible-dark text-white pt-24 pb-10 md:pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-bible-blue/[0.08] to-transparent pointer-events-none" />

        <div className={`${container} relative`}>
          <motion.div variants={fade} initial="hidden" animate="visible" custom={0}>
            <p className="text-sm text-white/50 mb-2">Reading plans</p>
            <h1 className="font-serif text-3xl md:text-[2.5rem] font-bold tracking-tight !leading-[1.15] mb-3">
              Daily Bible reading
            </h1>
            <p className="text-white/60 text-sm md:text-[15px] max-w-lg !leading-relaxed">
              The M'Cheyne plan — four chapters each day through the whole Bible in one year.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bible-gold/20 text-bible-gold">
                  <CalendarDays className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-2xl font-serif font-bold leading-none tabular-nums">365</p>
                  <p className="text-xs text-white/45 mt-1">Days in plan</p>
                </div>
              </div>

              {user && (
                <>
                  <div className="hidden sm:block w-px h-10 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                      <BookOpen className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-2xl font-serif font-bold leading-none tabular-nums">
                        {completedCount}/{todaysReadings.length}
                      </p>
                      <p className="text-xs text-white/45 mt-1">Today complete</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <p className="mt-6 text-xs text-white/40">{todayLabel}</p>
          </motion.div>
        </div>
      </header>

      {/* Body */}
      <main className={`${container} py-8 md:py-10 space-y-8 flex-1`}>
        <motion.div variants={fade} initial="hidden" animate="visible" custom={1}>
          <DailyReadingPlan />
        </motion.div>

        {!user && (
          <motion.div variants={fade} initial="hidden" animate="visible" custom={2}>
            <PageCard title="Track your progress" icon={<LogIn className="h-4 w-4" />}>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sign in to mark chapters complete, earn points, and keep your reading streak.
              </p>
              <Link to="/auth" className="inline-block mt-4">
                <Button size="sm" className="bg-bible-deepBlue hover:bg-bible-dark">
                  Sign in or create account
                </Button>
              </Link>
            </PageCard>
          </motion.div>
        )}

        <motion.div variants={fade} initial="hidden" animate="visible" custom={3}>
          <PageCard title="About M'Cheyne">
            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <img
                  src="/assets/bible/luke.jpg"
                  alt=""
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/bible/default.jpg';
                  }}
                />
              </div>
              <div className="md:col-span-3 space-y-3">
                <p className="text-sm text-muted-foreground !leading-relaxed">
                  Designed by 19th-century Scottish minister Robert Murray M'Cheyne, this plan
                  takes you through the New Testament and Psalms twice and the rest of Scripture
                  once each year.
                </p>
                <p className="text-sm text-muted-foreground !leading-relaxed">
                  Each day includes four chapters — two for family worship and two for private
                  devotion.
                </p>
                <Link
                  to="/bible"
                  className="inline-flex items-center text-sm font-medium text-bible-deepBlue hover:underline pt-1"
                >
                  Browse the Bible
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </PageCard>
        </motion.div>
      </main>
    </div>
  );
};

export default DailyReading;
