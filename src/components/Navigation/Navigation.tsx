"use client"

import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="h-[50px] w-full border-b bg-background flex items-center px-4 md:px-6">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2">
          {/* <Home className="h-5 w-5" /> */}
          <span className="font-bold">Records to Remember</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
              How It Works
          </Link>

          <Link
            href="#benefits"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Benefits
          </Link>

          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonials
          </Link>

          <Link
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className={cn(
              "text-sm transition-colors hover:text-primary",
              pathname === "/" ? "text-primary font-medium" : "text-muted-foreground",
            )}
          >
            Home
          </Link>

          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>

          <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8 items-center">
              <Link
                href="/"
                className={cn(
                  "text-sm transition-colors hover:text-primary p-2",
                  pathname === "/" ? "text-primary font-medium" : "text-muted-foreground",
                )}
              >
                Home
              </Link>
              <Button variant="outline" size="sm" asChild className="justify-start w-[150px]">
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" asChild className="justify-start w-[150px]">
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}