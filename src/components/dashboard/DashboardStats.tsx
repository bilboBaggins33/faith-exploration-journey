
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DashboardStatsProps {
  totalChaptersRead: number;
  overallProgress: number;
  challengesCompleted: number;
}

const DashboardStats = ({ totalChaptersRead, overallProgress, challengesCompleted }: DashboardStatsProps) => {
  const navigate = useNavigate();

  const metrics = [
    {
      label: 'Chapters read',
      value: totalChaptersRead.toLocaleString(),
      detail: 'of 1,189',
      onClick: () => navigate('/bible'),
    },
    {
      label: 'Bible progress',
      value: `${overallProgress}%`,
      detail: overallProgress === 0 ? 'Not started' : undefined,
      progress: overallProgress,
      onClick: () => navigate('/bible'),
    },
    {
      label: 'Achievements',
      value: challengesCompleted.toLocaleString(),
      detail: 'completed',
      link: true,
      onClick: () => navigate('/achievements'),
    },
  ];

  return (
    <div className="rounded-2xl bg-card border border-border/70 shadow-sm divide-y sm:divide-y-0 sm:divide-x divide-border/70 grid grid-cols-1 sm:grid-cols-3">
      {metrics.map((m) => (
        <button
          key={m.label}
          type="button"
          onClick={m.onClick}
          className="group text-left px-6 py-5 hover:bg-muted/30 transition-colors first:rounded-t-2xl last:rounded-b-2xl sm:first:rounded-l-2xl sm:first:rounded-tr-none sm:last:rounded-r-2xl sm:last:rounded-bl-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bible-blue/40"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{m.label}</p>
          <p className="mt-1 font-serif text-3xl font-bold text-foreground tabular-nums leading-none">{m.value}</p>
          {m.progress !== undefined ? (
            <Progress value={m.progress} className="h-1.5 mt-3 bg-muted" />
          ) : null}
          <div className="mt-2 flex items-center justify-between gap-2">
            {m.detail && <span className="text-xs text-muted-foreground">{m.detail}</span>}
            {m.link && (
              <span className="ml-auto inline-flex items-center text-xs font-medium text-bible-deepBlue opacity-0 group-hover:opacity-100 transition-opacity">
                View all
                <ChevronRight className="h-3 w-3 ml-0.5" />
              </span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default DashboardStats;
