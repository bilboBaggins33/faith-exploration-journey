import React from 'react';
import { cn } from '@/lib/utils';

interface MiniDonutChartProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color: string;
  bgColor?: string;
  label?: string;
  centerText?: string;
  className?: string;
}

const MiniDonutChart: React.FC<MiniDonutChartProps> = ({
  percentage,
  size = 36,
  strokeWidth = 3.5,
  color,
  bgColor = 'text-muted/30',
  label,
  centerText,
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const validPercentage = Math.min(Math.max(percentage, 0), 100);
  const offset = circumference - (validPercentage / 100) * circumference;
  
  const dynamicOpacity = validPercentage === 0 ? 0 : 0.4 + (validPercentage / 100) * 0.6;

  // Adaptive font size for center text based on string length
  const displayText = centerText ?? String(Math.round(validPercentage));
  const centerFontSize =
    displayText.length >= 7 ? size * 0.17 :
    displayText.length >= 5 ? size * 0.20 :
    displayText.length >= 4 ? size * 0.23 :
    size * 0.28;

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
          className="absolute inset-0 flex items-center justify-center text-foreground font-bold leading-none"
          style={{ fontSize: centerFontSize }}
        >
          {displayText}
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
