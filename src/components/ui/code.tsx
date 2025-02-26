"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {
  copyable?: boolean
}

const Code = React.forwardRef<HTMLPreElement, CodeProps>(({ className, copyable = false, children, ...props }, ref) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    if (typeof children === "string") {
      navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <pre
      ref={ref}
      className={cn("relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)}
      {...props}
    >
      {copyable && (
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 rounded-md bg-background px-2 py-1 text-xs font-medium"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      )}
      <code>{children}</code>
    </pre>
  )
})
Code.displayName = "Code"

export { Code }

