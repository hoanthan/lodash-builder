import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn("rounded-md border bg-card text-card-foreground shadow-sm", className)} {...props} ref={ref} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} ref={ref} />
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <p className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} ref={ref} />
  ),
)
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div className={cn("p-6 pt-0", className)} {...props} ref={ref} />,
)
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardContent }

