import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { getTodaysReading } from '@/data/bible/reading-plans/mcheyne';
import { bibleBooks } from '@/data/bible/books';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import DashboardCard from './DashboardCard';

interface DailyReadingCardProps {
  featured?: boolean;
}

const DailyReadingCard = ({ featured = false }: DailyReadingCardProps) => {
  const navigate = useNavigate();
  const { getChapterStatus } = useBibleProgress();
  const readings = getTodaysReading().slice(0, featured ? 4 : 3);
  const completedCount = readings.filter(
    (r) => getChapterStatus(r.bookId, r.chapter).isCompleted
  ).length;

  return (
    <DashboardCard
      accent={featured}
      title="Today's reading"
      description={featured ? "M'Cheyne plan — four chapters through the whole Bible." : undefined}
      icon={<CalendarDays className="h-4 w-4" />}
      action={
        readings.length > 0 ? (
          <span className="text-xs font-medium text-muted-foreground tabular-nums shrink-0 pt-1">
            {completedCount}/{readings.length}
          </span>
        ) : undefined
      }
    >
      <ul className="space-y-1">
        {readings.length === 0 ? (
          <li className="text-sm text-muted-foreground py-2">Nothing scheduled for today.</li>
        ) : (
          readings.map((reading) => {
            const book = bibleBooks.find((b) => b.id === reading.bookId);
            const { isCompleted } = getChapterStatus(reading.bookId, reading.chapter);
            const label = `${book?.name || reading.bookId} ${reading.chapter}`;

            return (
              <li key={`${reading.bookId}-${reading.chapter}`}>
                <Link
                  to={`/bible/${reading.bookId}/${reading.chapter}`}
                  className={`flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-sm transition-colors ${
                    isCompleted
                      ? 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100/80'
                      : 'hover:bg-muted/60 text-foreground'
                  }`}
                >
                  <span className="font-medium truncate">{label}</span>
                  <span className={`shrink-0 text-xs font-medium ${isCompleted ? 'text-emerald-600' : 'text-bible-deepBlue'}`}>
                    {isCompleted ? 'Done' : 'Read →'}
                  </span>
                </Link>
              </li>
            );
          })
        )}
      </ul>

      <Button
        variant="outline"
        size="sm"
        className="w-full mt-4 border-border text-foreground hover:bg-muted/50"
        onClick={() => navigate('/daily-reading')}
      >
        Full reading plan
        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
      </Button>
    </DashboardCard>
  );
};

export default DailyReadingCard;
