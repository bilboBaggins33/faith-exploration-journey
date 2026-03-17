import React from 'react';
import { motion } from 'framer-motion';
import DailyReadingPlan from '@/components/bible/DailyReadingPlan';
import { useAuth } from '@/context/AuthContext';
import { CalendarDays, BookOpen, ChevronRight, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const DailyReading = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with dark background */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/bible/genesis.jpg"
            alt="Daily reading background"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/bible/default.jpg';
            }}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-white mb-2 tracking-wide drop-shadow-lg">
              Daily Bible Reading
            </h1>
            <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              Follow the M'Cheyne Bible Reading Plan to read through the entire Bible in one year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content on white background */}
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 max-w-4xl py-12 space-y-8">

          {!user ? (
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-bible-gold/80 mb-4" />
                <h2 className="text-xl font-serif font-medium text-foreground mb-2">
                  Sign in to track your progress
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Create an account to track your reading progress and earn points for completed challenges.
                </p>
                <Link to="/auth">
                  <button className="px-6 py-3 rounded-lg bg-bible-gold hover:bg-bible-gold/90 text-bible-dark font-medium shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 mx-auto">
                    <LogIn className="h-4 w-4" />
                    Sign In or Create Account
                  </button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <div className="flex items-center mb-4">
                <CalendarDays className="mr-2 text-bible-gold" />
                <h2 className="text-xl font-serif font-medium text-foreground">
                  Today's Readings
                </h2>
              </div>
              <DailyReadingPlan />
            </motion.div>
          )}

          <div className="w-full h-px bg-border" />

          {/* About Section */}
          <motion.section variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-serif font-medium text-foreground mb-4">
                About the M'Cheyne Reading Plan
              </h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                The M'Cheyne Bible Reading Plan was designed by 19th century Scottish minister Robert Murray M'Cheyne.
                It guides readers through the New Testament and Psalms twice, and the rest of the Bible once, in a year.
              </p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Each day includes four chapters: two for family worship and two for private reading.
              </p>
              <div className="flex justify-end">
                <Link to="/bible">
                  <button className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-all flex items-center gap-1 text-sm">
                    Bible Explorer <ChevronRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
};

export default DailyReading;
