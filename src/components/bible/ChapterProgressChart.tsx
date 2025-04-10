
import React from 'react';
import { Progress } from '@/components/ui/progress';
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
  const getProgressColor = () => {
    if (percentage >= 100) return "bg-green-500";
    if (percentage >= 75) return "bg-emerald-500";
    if (percentage >= 50) return "bg-yellow-500";
    if (percentage >= 25) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <Progress value={percentage} className="h-2" color={getProgressColor()} />
        {showPercentage && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs text-center mt-1"
          >
            {percentage}%
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default ChapterProgressChart;
