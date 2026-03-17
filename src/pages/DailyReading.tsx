import React from 'react';
import { motion } from 'framer-motion';
import DailyReadingPlan from '@/components/bible/DailyReadingPlan';
import { useAuth } from '@/context/AuthContext';
import { CalendarDays, BookOpen, ChevronRight, LogIn, Sparkles, Sunrise, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const visualCards = [
  {
    title: 'Morning Reflection',
    image: '/assets/bible/psalms.jpg',
    description: 'Start your day anchored in God’s word with guided chapters.',
  },
  {
    title: 'Balanced Journey',
    image: '/assets/bible/matthew.jpg',
    description: 'Read across Old and New Testament themes each day.',
  },
  {
    title: 'Evening Meditation',
    image: '/assets/bible/revelation.png',
    description: 'Close each day with prayerful reading and reflection.',
  },
];

const DailyReading = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/bible/genesis.jpg"
            alt="Daily reading background"
            className="w-full h-full object-cover scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/bible/default.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
          <motion.div
            aria-hidden
            className="absolute -top-20 -left-8 h-72 w-72 rounded-full bg-bible-gold/20 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-4 -right-8 h-72 w-72 rounded-full bg-bible-blue/30 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 mb-4 text-xs tracking-[0.15em] uppercase text-white/90 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-bible-gold" />
              Daily Plans
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-medium text-white mb-3 tracking-wide drop-shadow-lg">
              Daily Bible Reading
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              Follow the M'Cheyne Bible Reading Plan to read through the entire Bible in one year.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-md text-white">
              <div className="flex items-center gap-2 mb-2 text-bible-gold">
                <Sunrise className="h-4 w-4" />
                <span className="text-sm font-medium">4 passages a day</span>
              </div>
              <p className="text-sm text-white/75">Simple rhythm for steady daily growth.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-md text-white">
              <div className="flex items-center gap-2 mb-2 text-bible-gold">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm font-medium">Date-based plan</span>
              </div>
              <p className="text-sm text-white/75">Jump to any day and follow along seamlessly.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-md text-white">
              <div className="flex items-center gap-2 mb-2 text-bible-gold">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">Track progress</span>
              </div>
              <p className="text-sm text-white/75">Stay motivated by seeing your consistency.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 max-w-5xl pb-14 space-y-8 -mt-10 relative z-20">
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.5}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {visualCards.map((card, idx) => (
              <motion.article
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={idx + 1}
                className="group overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-sm"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/bible/default.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <h3 className="absolute left-4 bottom-3 text-white text-base font-semibold">{card.title}</h3>
                </div>
                <p className="p-4 text-sm text-muted-foreground">{card.description}</p>
              </motion.article>
            ))}
          </motion.section>

          {!user ? (
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <div className="bg-card/90 border border-border rounded-2xl p-8 text-center backdrop-blur-sm shadow-sm">
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
              <div className="flex items-center mb-4 px-1">
                <CalendarDays className="mr-2 text-bible-gold" />
                <h2 className="text-xl font-serif font-medium text-foreground">
                  Today's Readings
                </h2>
              </div>
              <DailyReadingPlan />
            </motion.div>
          )}

          <div className="w-full h-px bg-border" />

          <motion.section variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="relative md:col-span-2 min-h-[220px]">
                  <img
                    src="/assets/bible/luke.jpg"
                    alt="Open Bible for devotional study"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/bible/default.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/15" />
                </div>
                <div className="md:col-span-3 p-6">
                  <h2 className="text-xl font-serif font-medium text-foreground mb-4">
                    About the M'Cheyne Reading Plan
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Designed by 19th-century Scottish minister Robert Murray M'Cheyne, this plan
                    takes you through the New Testament and Psalms twice and the rest of Scripture once each year.
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Each day includes four chapters, offering a practical cadence for both personal and family worship.
                  </p>
                  <div className="flex justify-end">
                    <Link to="/bible">
                      <button className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-all flex items-center gap-1 text-sm">
                        Bible Explorer <ChevronRight className="h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default DailyReading;
