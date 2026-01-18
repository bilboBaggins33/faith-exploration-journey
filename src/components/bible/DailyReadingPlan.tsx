
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { bibleBooks } from '@/data/bible/books';
import { getTodaysReading, getReadingForDate } from '@/data/bible/reading-plans/mcheyne';
import { BibleReading } from '@/data/bible/types';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { CalendarIcon, BookOpen, CheckCircle, Lock } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from 'date-fns';
import { useAuth } from '@/context/auth';
import GlassCard from '@/components/ui/GlassCard';

interface ReadingItemProps {
  reading: BibleReading;
  index: number;
  isCompleted: boolean;
  isFirstChapter: boolean;
  onClick: () => void;
}

const ReadingItem = ({ reading, index, isCompleted, isFirstChapter, onClick }: ReadingItemProps) => {
  const { user } = useAuth();
  const book = bibleBooks.find(b => b.id === reading.bookId);
  const requiresAuth = !isFirstChapter && !user;

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-2xl mb-2 backdrop-blur-md border transition-all ${requiresAuth
          ? 'bg-white/10 border-white/20'
          : isCompleted
            ? 'bg-green-500/20 border-green-400/30'
            : 'bg-white/10 border-white/20 hover:bg-white/20 cursor-pointer'
        }`}
      onClick={!requiresAuth ? onClick : undefined}
    >
      <div className="flex items-center flex-1">
        <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center mr-3 text-sm font-medium text-white">
          {index + 1}
        </div>
        <div>
          <h4 className="font-medium text-lg text-white">{book?.name || reading.bookId}</h4>
          <p className="text-sm text-white/70">
            Chapter {reading.chapter}
            {isCompleted && (
              <span className="inline-flex items-center text-green-400 ml-2">
                <CheckCircle className="h-4 w-4 mr-1" />
                Completed
              </span>
            )}
          </p>
        </div>
      </div>
      <button
        className={`ml-4 px-4 py-2 rounded-full font-medium backdrop-blur-md border transition-all flex items-center gap-2 ${requiresAuth
            ? 'bg-white/10 text-white/70 border-white/20'
            : 'bg-gradient-to-r from-amber-400/90 to-amber-500/90 text-white border-amber-300/50 hover:scale-105'
          }`}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {requiresAuth ? (
          <>
            <Lock className="h-4 w-4" />
            Sign in
          </>
        ) : (
          <>
            <BookOpen className="h-4 w-4" />
            {isCompleted ? 'Review' : 'Read'}
          </>
        )}
      </button>
    </div>
  );
};

const DailyReadingPlan = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { getChapterStatus } = useBibleProgress();

  const readings = selectedDate ? getReadingForDate(selectedDate) : getTodaysReading();
  const todaysReadings = getTodaysReading();
  const isToday = selectedDate && format(selectedDate, 'MM-dd') === format(new Date(), 'MM-dd');

  const navigateToChapter = (bookId: string, chapter: number) => {
    // Pass from=daily so the back button returns to daily reading
    navigate(`/bible/${bookId}/${chapter}?from=daily`);
  };

  const getCompletionStatus = (bookId: string, chapter: number) => {
    if (!user) return false;
    const { isCompleted } = getChapterStatus(bookId, chapter);
    return isCompleted;
  };

  const getTodayCompletionPercentage = () => {
    if (!user || !todaysReadings.length) return 0;

    const completedCount = todaysReadings.filter(reading =>
      getCompletionStatus(reading.bookId, reading.chapter)
    ).length;

    return Math.round((completedCount / todaysReadings.length) * 100);
  };

  return (
    <GlassCard>
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              M'Cheyne Reading Plan
            </h2>
            <p className="text-white/60 text-sm">
              Readings for {format(selectedDate, 'MMMM d, yyyy')}
            </p>
          </div>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button className="px-4 py-2 rounded-full bg-white/10 text-white/90 font-medium backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                Change Date
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date || new Date());
                  setOpen(false);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {isToday && user && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-white/80">Today's Progress</span>
              <span className="text-sm font-medium text-white">{getTodayCompletionPercentage()}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${getTodayCompletionPercentage()}%` }}
              />
            </div>
            <p className="text-sm text-white/60 mt-2">
              {todaysReadings.filter(r => getCompletionStatus(r.bookId, r.chapter)).length} of {todaysReadings.length} readings completed
            </p>
          </div>
        )}
      </div>

      {/* Reading Items */}
      <div className="p-6">
        {readings.length > 0 ? (
          <div className="space-y-2">
            {readings.map((reading, index) => (
              <ReadingItem
                key={`${reading.bookId}-${reading.chapter}`}
                reading={reading}
                index={index}
                isCompleted={getCompletionStatus(reading.bookId, reading.chapter)}
                isFirstChapter={reading.chapter === 1}
                onClick={() => navigateToChapter(reading.bookId, reading.chapter)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <BookOpen className="mx-auto h-12 w-12 text-white/30 mb-3" />
            <p className="text-white/50">No readings available for this date</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-white/20 flex justify-between items-center">
        <button
          onClick={() => setSelectedDate(new Date())}
          disabled={isToday}
          className={`px-4 py-2 rounded-full font-medium backdrop-blur-md border transition-all ${isToday
              ? 'bg-white/5 text-white/30 border-white/10 cursor-not-allowed'
              : 'bg-white/10 text-white/90 border-white/30 hover:bg-white/20'
            }`}
        >
          Today's Reading
        </button>

        {isToday && (
          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm border border-amber-400/30">
            {format(new Date(), 'MMMM d')}
          </span>
        )}
      </div>
    </GlassCard>
  );
};

export default DailyReadingPlan;
