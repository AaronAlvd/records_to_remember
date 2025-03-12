import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, Clock, CreditCard, Home, Shield, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Document Scanning Made Easy
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Connect with local scanners or earn money by helping others digitize their documents.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/schedule">
                  Schedule a Scan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/become-scanner">
                  Become a Scanner <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* User Paths Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Need Documents Scanned?</h2>
              <p className="mb-6 text-muted-foreground">
                Schedule a professional to come to your home or office to scan your important documents.
              </p>
              <ul className="mb-6 space-y-2 text-left">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Professional, background-checked scanners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Secure, private document handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Convenient scheduling that works for you</span>
                </li>
              </ul>
              <Button className="mt-auto w-full bg-blue-600 hover:bg-blue-700" size="lg" asChild>
                <Link href="/schedule">Schedule a Scan</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CreditCard className="h-10 w-10 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Want to Earn Money Scanning?</h2>
              <p className="mb-6 text-muted-foreground">
                Turn your scanner into a money-making tool by helping others digitize their documents.
              </p>
              <ul className="mb-6 space-y-2 text-left">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Flexible hours - work when you want</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Competitive pay per scanning job</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Simple onboarding process</span>
                </li>
              </ul>
              <Button className="mt-auto w-full" size="lg" variant="outline" asChild>
                <Link href="/become-scanner">Become a Scanner</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
            <div className="mb-16">
              <h3 className="mb-6 text-center text-2xl font-semibold">For Customers</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h4 className="mb-2 text-xl font-medium">Schedule</h4>
                  <p className="text-muted-foreground">
                    Book a time that works for you through our simple scheduling system.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h4 className="mb-2 text-xl font-medium">Meet</h4>
                  <p className="text-muted-foreground">
                    A verified scanner arrives at your location with professional equipment.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h4 className="mb-2 text-xl font-medium">Receive</h4>
                  <p className="text-muted-foreground">
                    Get your digital documents securely delivered to your preferred storage.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-center text-2xl font-semibold">For Scanners</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h4 className="mb-2 text-xl font-medium">Apply</h4>
                  <p className="text-muted-foreground">Complete our application process and background check.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h4 className="mb-2 text-xl font-medium">Accept Jobs</h4>
                  <p className="text-muted-foreground">Choose scanning jobs that fit your schedule and location.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h4 className="mb-2 text-xl font-medium">Get Paid</h4>
                  <p className="text-muted-foreground">
                    Earn money for each completed scanning job with weekly payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="container py-12 md:py-24 lg:py-32">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start rounded-lg border p-6">
              <Shield className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your documents never leave your sight. Our scanners follow strict privacy protocols.
              </p>
            </div>
            <div className="flex flex-col items-start rounded-lg border p-6">
              <Users className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Vetted Professionals</h3>
              <p className="text-muted-foreground">
                All scanners undergo background checks and training before joining our platform.
              </p>
            </div>
            <div className="flex flex-col items-start rounded-lg border p-6">
              <Home className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Convenient</h3>
              <p className="text-muted-foreground">
                No need to leave home or office. We come to you when it fits your schedule.
              </p>
            </div>
            <div className="flex flex-col items-start rounded-lg border p-6">
              <Clock className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Time-Saving</h3>
              <p className="text-muted-foreground">
                Focus on what matters while we handle the tedious task of document digitization.
              </p>
            </div>
            <div className="flex flex-col items-start rounded-lg border p-6">
              <Star className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Quality Results</h3>
              <p className="text-muted-foreground">
                High-resolution scans with professional equipment for perfect digital copies.
              </p>
            </div>
            <div className="flex flex-col items-start rounded-lg border p-6">
              <CreditCard className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Affordable</h3>
              <p className="text-muted-foreground">
                Competitive pricing with transparent fees. No hidden costs or surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter md:text-4xl">
              What People Are Saying
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Customer"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Customer</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">
                  "I needed to digitize years of tax documents and the scanner came to my home, finished everything in 2
                  hours, and was extremely professional. Highly recommend!"
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Scanner"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Michael Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Scanner</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">
                  "I've been working as a scanner for 6 months now. The flexible schedule allows me to earn extra income
                  while still focusing on my studies. Great platform!"
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Business Owner"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">David Chen</h4>
                    <p className="text-sm text-muted-foreground">Small Business Owner</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">
                  "We needed to digitize our entire filing cabinet for a move to a smaller office. The service was
                  efficient, secure, and saved us countless hours of work."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container py-12 md:py-24 lg:py-32">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto grid max-w-3xl gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-xl font-medium">How much does the scanning service cost?</h3>
              <p className="text-muted-foreground">
                Our pricing is based on the volume of documents to be scanned. We offer packages starting at $49 for up
                to 100 pages. You'll receive an exact quote before confirming your appointment.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-xl font-medium">What equipment do I need to become a scanner?</h3>
              <p className="text-muted-foreground">
                You'll need a portable scanner, laptop, and reliable transportation. We have partnerships with equipment
                providers if you need to purchase or rent scanning equipment.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-xl font-medium">How are my documents kept secure?</h3>
              <p className="text-muted-foreground">
                Your documents never leave your sight during scanning. All digital files are encrypted and securely
                transferred to your preferred storage solution. Our scanners sign strict confidentiality agreements.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-xl font-medium">How much can I earn as a scanner?</h3>
              <p className="text-muted-foreground">
                Earnings vary based on your location and availability, but our scanners typically earn $20-35 per hour
                including travel time. Top performers can earn $1,000+ weekly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground mb-[80px]">
          <div className="container py-12 md:py-24 lg:py-32">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[750px] text-lg text-primary-foreground/80 sm:text-xl">
                Join our community of customers and scanners today.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/schedule">Schedule a Scan</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/become-scanner">Become a Scanner</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
