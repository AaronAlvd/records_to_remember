import Link from "next/link"

import { FileText } from "lucide-react"

export default function Footer() {

  return (
    <footer className="border-t bg-gray-200 flex justify-center">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <FileText className="h-5 w-5" />
              <span>ScannerPro</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Connecting document owners with professional scanners since 2023.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground transition-colors hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground transition-colors hover:text-foreground">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground transition-colors hover:text-foreground">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ScannerPro. All rights reserved.
        </div>
      </div>
    </footer>
  )
}