"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string
  language?: string
}

const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ code, language = "javascript", className, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)

    const copyToClipboard = async () => {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div className="relative">
        <pre
          ref={ref}
          className={cn("mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted px-4 py-4", className)}
          {...props}
        >
          <code className={`language-${language} text-sm`}>{code}</code>
        </pre>
        <Button variant="outline" size="icon" className="absolute right-2 top-2 h-8 w-8" onClick={copyToClipboard}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
    )
  },
)
CodeBlock.displayName = "CodeBlock"

export { CodeBlock }

