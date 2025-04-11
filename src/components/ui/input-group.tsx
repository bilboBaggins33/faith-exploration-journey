
import * as React from "react"
import { cn } from "@/lib/utils"

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex relative items-center w-full rounded-md border border-input bg-background text-sm ring-offset-background",
          className
        )}
        {...props}
      />
    )
  }
)
InputGroup.displayName = "InputGroup"

export { InputGroup }
