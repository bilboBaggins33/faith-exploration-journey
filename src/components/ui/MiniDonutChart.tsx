import React from 'react';
import { cn } from '@/lib/utils';

interface MiniDonutChartProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color: string;
  bgColor?: string;
  label?: string;
  className?: string;
}

const MiniDonutChart: React.FC<MiniDonutChartProps> = ({
  percentage,
  size = 36,
  strokeWidth = 3.5,
  color,
  bgColor = 'text-muted/30',
  label,
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const validPercentage = Math.min(Math.max(percentage, 0), 100);
  const offset = circumference - (validPercentage / 100) * circumference;
  
  // Calculate dynamic opacity: at 100% it's 1, at 0% it's 0.3 (or 0 if truly empty)
  // This satisfies the "midway color" request by making partial completions look somewhat muted
  const dynamicOpacity = validPercentage === 0 ? 0 : 0.4 + (validPercentage / 100) * 0.6;

  return (
    <div className={cn('flex flex-col items-center gap-0.5', className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className={bgColor}
          />
          {/* Progress ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            strokeOpacity={dynamicOpacity}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center text-foreground font-bold"
          style={{ fontSize: size * 0.28 }}
        >
          {Math.round(validPercentage)}
        </span>
      </div>
      {label && (
        <span className="text-[9px] font-semibold uppercase tracking-wide text-muted-foreground leading-none">
          {label}
        </span>
      )}
    </div>
  );
};

export default React.memo(MiniDonutChart);
