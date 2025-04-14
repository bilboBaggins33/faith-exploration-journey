
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-[#1A365D] to-[#2A4C6F] text-primary-foreground hover:from-[#1A365D]/90 hover:to-[#2A4C6F]/90 shadow-md", // Deep navy gradient
        destructive:
          "bg-gradient-to-br from-red-600 to-red-700 text-destructive-foreground hover:from-red-600/90 hover:to-red-700/90 shadow-md",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground hover:from-secondary/90 hover:to-secondary/70",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        warning: "bg-gradient-to-br from-amber-600 to-amber-700 text-white hover:from-amber-600/90 hover:to-amber-700/90 shadow-md", // Gradient for warning
        danger: "bg-gradient-to-br from-red-600 to-red-700 text-white hover:from-red-600/90 hover:to-red-700/90 shadow-md", // Gradient for danger
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
