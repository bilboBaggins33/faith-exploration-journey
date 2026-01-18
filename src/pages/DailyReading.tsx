import React from 'react';
import DailyReadingPlan from '@/components/bible/DailyReadingPlan';
import { useAuth } from '@/context/AuthContext';
import { CalendarDays, BookOpen, ChevronRight, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '@/components/ui/GlassCard';

const DailyReading = () => {
  const { user } = useAuth();

  return (
    <div className="relative min-h-screen">
      {/* Background with blur effect */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/assets/bible/genesis.jpg"
          alt="Daily reading background"
          className="w-full h-full object-cover scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/bible/default.jpg';
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <main className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Daily Bible Reading
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Follow the M'Cheyne Bible Reading Plan to read through the entire Bible in one year.
            </p>
          </div>

          {!user ? (
            <GlassCard className="p-8 text-center mb-6">
              <BookOpen className="mx-auto h-12 w-12 text-amber-400/80 mb-4" />
              <h2
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Sign in to track your progress
              </h2>
              <p className="text-white/70 mb-6">
                Create an account to track your reading progress and earn points for completed challenges.
              </p>
              <Link to="/auth">
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400/90 to-amber-500/90 text-white font-medium backdrop-blur-md border border-amber-300/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 mx-auto">
                  <LogIn className="h-4 w-4" />
                  Sign In or Create Account
                </button>
              </Link>
            </GlassCard>
          ) : (
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <CalendarDays className="mr-2 text-amber-400" />
                <h2
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Today's Readings
                </h2>
              </div>

              <DailyReadingPlan />
            </div>
          )}

          {/* About Section */}
          <GlassCard className="p-6 mb-6">
            <h2
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About the M'Cheyne Reading Plan
            </h2>
            <p className="text-white/80 mb-4">
              The M'Cheyne Bible Reading Plan was designed by 19th century Scottish minister Robert Murray M'Cheyne.
              It guides readers through the New Testament and Psalms twice, and the rest of the Bible once, in a year.
            </p>
            <p className="text-white/80 mb-4">
              Each day includes four chapters: two for family worship and two for private reading.
            </p>
            <div className="flex justify-end">
              <Link to="/bible">
                <button className="px-4 py-2 rounded-full bg-white/10 text-white/90 font-medium backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all flex items-center gap-1">
                  Bible Explorer <ChevronRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
};

export default DailyReading;
