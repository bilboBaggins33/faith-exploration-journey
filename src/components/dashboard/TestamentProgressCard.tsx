import React from 'react';
import { Progress } from '@/components/ui/progress';
import { bibleBooks } from '@/data/bible';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import DashboardCard from './DashboardCard';

const TestamentProgressCard = () => {
  const { progress } = useBibleProgress();
  const completed = progress?.completed_chapters || [];

  const compute = (testament: 'old' | 'new') => {
    const books = bibleBooks.filter((b) => b.testament === testament);
    const total = books.reduce((s, b) => s + b.chapters, 0);
    const ids = new Set(books.map((b) => b.id));
    const done = new Set(
      completed.filter((c) => ids.has(c.book_id)).map((c) => `${c.book_id}-${c.chapter}`)
    ).size;
    return { pct: total > 0 ? Math.round((done / total) * 100) : 0, done, total };
  };

  const ot = compute('old');
  const nt = compute('new');

  return (
    <DashboardCard title="Testament progress">
      <div className="space-y-5">
        {[
          { label: 'Old Testament', ...ot },
          { label: 'New Testament', ...nt },
        ].map(({ label, pct, done, total }) => (
          <div key={label}>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-medium">{label}</span>
              <span className="text-sm tabular-nums text-muted-foreground">{pct}%</span>
            </div>
            <Progress value={pct} className="h-1.5" />
            <p className="text-xs text-muted-foreground mt-1.5">{done} of {total} chapters</p>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default TestamentProgressCard;
