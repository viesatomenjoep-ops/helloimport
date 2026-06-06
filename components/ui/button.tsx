import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gold"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-2 uppercase tracking-widest",
          {
            "bg-velvet-green text-platinum hover:bg-velvet-green/90": variant === "default",
            "bg-transparent border border-platinum/20 text-platinum hover:bg-platinum/10": variant === "outline",
            "hover:bg-platinum/10 hover:text-white text-platinum/80": variant === "ghost",
            "bg-champagne text-velvet-blue hover:bg-champagne/90 font-bold": variant === "gold",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
