"use client"
import Link from "next/link";
import {useState} from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 lg:px-8 xl:px-12">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden">
              <img src="/hiss-logo.jpg" alt="HISS Academy Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HISS Academy</h1>
              <p className="text-xs text-muted-foreground">Football Club</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/programs" className="text-sm font-medium hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              News
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Register Now
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-accent bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu Sidebar */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <div
              className={`fixed left-0 top-0 z-10 w-80 h-full bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden">
                    <img src="/hiss-logo.jpg" alt="HISS Academy Logo" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">HISS Academy</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Football Club</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <nav className="flex flex-col p-6 space-y-4 bg-white dark:bg-gray-900">
                <Link
                  href="/programs"
                  className="flex items-center py-3 px-4 text-lg font-medium text-gray-900 dark:text-white hover:bg-primary/10 hover:text-primary rounded-lg transition-colors bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Programs
                </Link>
                <Link
                  href="/gallery"
                  className="flex items-center py-3 px-4 text-lg font-medium text-gray-900 dark:text-white hover:bg-primary/10 hover:text-primary rounded-lg transition-colors bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center py-3 px-4 text-lg font-medium text-gray-900 dark:text-white hover:bg-primary/10 hover:text-primary rounded-lg transition-colors bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  News
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center py-3 px-4 text-lg font-medium text-gray-900 dark:text-white hover:bg-primary/10 hover:text-primary rounded-lg transition-colors bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                      Register Now
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
  );
}
