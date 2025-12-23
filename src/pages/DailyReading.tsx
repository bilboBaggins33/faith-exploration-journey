import React from 'react';
import Navbar from '@/components/Navbar';
import DailyReadingPlan from '@/components/bible/DailyReadingPlan';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { CalendarDays, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DailyReading = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-2">
              Daily Bible Reading
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow the M'Cheyne Bible Reading Plan to read through the entire Bible in one year, 
              with daily readings from different sections of Scripture.
            </p>
          </div>
          
          {!user ? (
            <div className="glass-card p-8 text-center rounded-xl mb-6">
              <BookOpen className="mx-auto h-12 w-12 text-bible-blue/50 mb-4" />
              <h2 className="text-xl font-bold mb-2">Sign in to track your progress</h2>
              <p className="text-gray-600 mb-6">
                Create an account to track your reading progress and earn points for completed challenges.
              </p>
              <Button asChild>
                <Link to="/auth">Sign In or Create Account</Link>
              </Button>
            </div>
          ) : (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <CalendarDays className="mr-2 text-bible-blue" />
                  <h2 className="text-xl font-serif font-bold">Today's Readings</h2>
                </div>
              </div>
              
              <DailyReadingPlan />
            </div>
          )}
          
          <div className="glass-card p-6 rounded-xl mb-6">
            <h2 className="text-xl font-serif font-bold mb-4">About the M'Cheyne Reading Plan</h2>
            <p className="mb-4">
              The M'Cheyne Bible Reading Plan was designed by 19th century Scottish minister Robert Murray M'Cheyne. 
              It guides readers through the New Testament and Psalms twice, and the rest of the Bible once, in a year.
            </p>
            <p className="mb-4">
              Each day includes four chapters: two for family worship and two for private reading.
            </p>
            <div className="flex justify-end">
              <Button variant="outline" asChild>
                <Link to="/bible" className="flex items-center">
                  Bible Explorer <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DailyReading;
