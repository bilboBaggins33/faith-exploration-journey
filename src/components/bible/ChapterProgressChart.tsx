
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { getProgressColor } from '@/lib/color-utils';

interface ChapterProgressChartProps {
  percentage: number;
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
}

const ChapterProgressChart: React.FC<ChapterProgressChartProps> = ({
  percentage,
  size = 60,
  innerRadius = 15,
  outerRadius = 25,
}) => {
  // Prepare chart data
  const chartData = percentage === 100
    ? [{ name: 'Complete', value: 100, color: getProgressColor(100) }]
    : [
        { name: 'Complete', value: percentage, color: getProgressColor(percentage) },
        { name: 'Remaining', value: 100 - percentage, color: '#e5e7eb' } // gray-200
      ];

  return (
    <div style={{ width: size, height: size }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={0}
            dataKey="value"
            strokeWidth={0}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChapterProgressChart;
