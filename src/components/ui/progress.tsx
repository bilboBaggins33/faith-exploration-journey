
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  color?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, color, ...props }, ref) => {
  // Determine the color class based on the value or use the provided color
  const getColorClass = () => {
    if (color) return color;
    
    if ((value || 0) <= 20) return "bg-orange-500";
    if ((value || 0) <= 40) return "bg-orange-500";
    if ((value || 0) <= 60) return "bg-orange-400";
    if ((value || 0) <= 80) return "bg-yellor-500";
    if ((value || 0) < 100) return "bg-lime-400";
    return "bg-green-500";
  };

    //     case 1:
    //     return "bg-red-400";
    //   case 2:
    //     return "bg-orange-400";
    //   case 3:
    //     return "bg-yellow-500";
    //   case 4:
    //     return "bg-lime-400";
    //   case 5:
    //     return "bg-green-600";
    //   default:
    //     return "bg-gray-300";
    // }
  
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn("h-full w-full flex-1 transition-all", getColorClass())}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
