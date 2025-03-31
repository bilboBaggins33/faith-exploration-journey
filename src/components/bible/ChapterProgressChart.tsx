
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { getProgressColor, getProgressColorClass } from '@/lib/color-utils';
import { motion } from 'framer-motion';

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
  const getProgressBarColor = () => {
    if (percentage === 100) return "bg-green-500";
    if (percentage >= 50) return "bg-orange-500";
    if (percentage > 0) return "bg-red-500";
    return "bg-gray-300";
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full ${getProgressBarColor()}`}
          style={{ width: '0%' }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.1
          }}
        />
      </div>
      {showPercentage && (
        <motion.p 
          className="text-xs text-center mt-1 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {percentage}%
        </motion.p>
      )}
    </div>
  );
};

export default ChapterProgressChart;
