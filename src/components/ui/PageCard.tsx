import React from 'react';
import { cn } from '@/lib/utils';

interface PageCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  accent?: boolean;
}

/** Shared card shell for dashboard, plans, and other content pages. */
const PageCard = ({
  title,
  description,
  icon,
  action,
  children,
  className,
  bodyClassName,
  accent = false,
}: PageCardProps) => (
  <section
    className={cn(
      'rounded-2xl bg-card border border-border/70 shadow-sm',
      accent && 'ring-1 ring-bible-blue/20 border-bible-blue/20',
      className,
    )}
  >
    <header className="flex items-start justify-between gap-4 px-6 pt-5 pb-0">
      <div className="min-w-0">
        <div className="flex items-center gap-2.5">
          {icon && (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-bible-deepBlue">
              {icon}
            </span>
          )}
          <h2 className="text-base font-semibold text-foreground leading-tight">{title}</h2>
        </div>
        {description && (
          <p className={cn('text-sm text-muted-foreground mt-1.5 leading-snug', icon && 'ml-[42px]')}>
            {description}
          </p>
        )}
      </div>
      {action}
    </header>
    <div className={cn('px-6 pb-5 pt-4', bodyClassName)}>{children}</div>
  </section>
);

export default PageCard;
