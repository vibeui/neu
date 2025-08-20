import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Package } from "lucide-react"

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Package className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">@vibeui/neu</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link className="transition-colors hover:text-gray-900 dark:hover:text-gray-100" href="#components">
              Components
            </Link>
            <Link className="transition-colors hover:text-gray-900 dark:hover:text-gray-100" href="#installation">
              Installation
            </Link>
            <Link className="transition-colors hover:text-gray-900 dark:hover:text-gray-100" href="#examples">
              Examples
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/vibeui/neu" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
