import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Build Your Perfect Lodash Bundle
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Create a custom Lodash build with only the functions you need. Optimize your project's size and performance
          with our interactive Lodash builder.
        </p>
        <div className="mt-10 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <Button size="lg" asChild>
              <Link href="#lodash-builder">Try Lodash Builder</Link>
            </Button>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button size="lg" variant="outline" asChild>
              <Link href="#docs">View Documentation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

