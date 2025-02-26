import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Code className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">LodashPro</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild>
              <Link href="#features">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#pricing">Pricing</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#docs">Docs</Link>
            </Button>
          </nav>
          <div>
            <Button asChild>
              <Link href="#get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

