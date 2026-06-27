import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { bibleBooks } from '@/data/bible/books';
import { getTodaysReading, getReadingForDate } from '@/data/bible/reading-plans/mcheyne';
import { BibleReading } from '@/data/bible/types';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { CalendarDays, Lock } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { useAuth } from '@/context/auth';
import PageCard from '@/components/ui/PageCard';
import { cn } from '@/lib/utils';

const READING_SLOTS = [
  'Family 1',
  'Family 2',
  'Private 1',
  'Private 2',
];

interface ReadingItemProps {
  reading: BibleReading;
  index: number;
  isCompleted: boolean;
  requiresAuth: boolean;
  onNavigate: () => void;
}

const ReadingItem = ({
  reading,
  index,
  isCompleted,
  requiresAuth,
  onNavigate,
}: ReadingItemProps) => {
  const book = bibleBooks.find((b) => b.id === reading.bookId);
  const label = `${book?.name || reading.bookId} ${reading.chapter}`;

  if (requiresAuth) {
    return (
      <li className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 bg-muted/30 text-muted-foreground">
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
            {READING_SLOTS[index] ?? `Reading ${index + 1}`}
          </p>
          <p className="text-sm font-medium truncate mt-0.5">{label}</p>
        </div>
        <Link
          to="/auth"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-bible-deepBlue shrink-0"
        >
          <Lock className="h-3.5 w-3.5" />
          Sign in
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={onNavigate}
        className={cn(
          'w-full flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm transition-colors',
          isCompleted
            ? 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100/80'
            : 'hover:bg-muted/60 text-foreground',
        )}
      >
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {READING_SLOTS[index] ?? `Reading ${index + 1}`}
          </p>
          <p className="font-medium truncate mt-0.5">{label}</p>
        </div>
        <span className={cn(
          'shrink-0 text-xs font-medium',
          isCompleted ? 'text-emerald-600' : 'text-bible-deepBlue',
        )}>
          {isCompleted ? 'Done' : 'Read →'}
        </span>
      </button>
    </li>
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
  const isToday = format(selectedDate, 'MM-dd') === format(new Date(), 'MM-dd');

  const navigateToChapter = (bookId: string, chapter: number) => {
    navigate(`/bible/${bookId}/${chapter}?from=daily`);
  };

  const isCompleted = (bookId: string, chapter: number) =>
    !!user && getChapterStatus(bookId, chapter).isCompleted;

  const completedCount = todaysReadings.filter((r) => isCompleted(r.bookId, r.chapter)).length;
  const progressPct = user && todaysReadings.length
    ? Math.round((completedCount / todaysReadings.length) * 100)
    : 0;

  const dateLabel = format(selectedDate, isToday ? "'Today,' MMMM d" : 'MMMM d, yyyy');

  return (
    <PageCard
      accent={isToday}
      title="M'Cheyne reading plan"
      description={`Readings for ${dateLabel}`}
      icon={<CalendarDays className="h-4 w-4" />}
      action={
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="shrink-0 h-8 text-xs">
              Change date
            </Button>
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
      }
      bodyClassName="pt-3"
    >
      {isToday && user && todaysReadings.length > 0 && (
        <div className="mb-5 pb-5 border-b border-border/60">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Today's progress</span>
            <span className="tabular-nums font-medium text-foreground">{completedCount}/{todaysReadings.length}</span>
          </div>
          <Progress value={progressPct} className="h-1.5" />
        </div>
      )}

      {readings.length > 0 ? (
        <ul className="space-y-1">
          {readings.map((reading, index) => (
            <ReadingItem
              key={`${reading.bookId}-${reading.chapter}`}
              reading={reading}
              index={index}
              isCompleted={isCompleted(reading.bookId, reading.chapter)}
              requiresAuth={!user && reading.chapter !== 1}
              onNavigate={() => navigateToChapter(reading.bookId, reading.chapter)}
            />
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground py-4 text-center">
          No readings for this date.
        </p>
      )}

      <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="sm"
          disabled={isToday}
          onClick={() => setSelectedDate(new Date())}
          className="text-muted-foreground h-8 px-2"
        >
          Jump to today
        </Button>
        {isToday && (
          <span className="text-xs text-muted-foreground tabular-nums">
            {format(new Date(), 'EEEE, MMM d')}
          </span>
        )}
      </div>
    </PageCard>
  );
};

export default DailyReadingPlan;
