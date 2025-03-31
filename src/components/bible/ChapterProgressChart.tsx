
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { getProgressColor, getProgressColorClass } from '@/lib/color-utils';

interface ChapterProgressChartProps {
  percentage: number;
  size?: number;
  showPercentage?: boolean;
  className?: string;
}

const ChapterProgressChart: React.FC<ChapterProgressChartProps> = ({
  percentage,
  showPercentage = false,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <Progress value={percentage} className="h-2" />
      {showPercentage && (
        <p className="text-xs text-center mt-1">{percentage}%</p>
      )}
    </div>
  );
};

export default ChapterProgressChart;
