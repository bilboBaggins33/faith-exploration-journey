
/**
 * Utility functions for consistent color handling across the application
 */

/**
 * Returns the appropriate color based on a percentage value
 * @param percentage - Number between 0 and 100
 * @returns Color string for use in components
 */
export const getProgressColor = (percentage: number): string => {
  if (percentage < 50) {
    return '#ea384c'; // red-500
  } else if (percentage < 100) {
    return '#F97316'; // orange-500
  } else {
    return '#22c55e'; // green-500
  }
};

/**
 * Returns a Tailwind CSS class name based on a percentage value
 * @param percentage - Number between 0 and 100
 * @returns Tailwind CSS class name
 */
export const getProgressColorClass = (percentage: number): string => {
  if (percentage < 50) {
    return 'bg-red-500';
  } else if (percentage < 100) {
    return 'bg-orange-500';
  } else {
    return 'bg-green-500';
  }
};
