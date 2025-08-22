import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-foreground bg-backgound py-12">
      <div className="px-4 lg:px-8 xl:px-12">
        <div className="grid gap-8 md:grid-cols-4 max-w-7xl mx-auto">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden">
                <img
                  src="/hiss-logo.jpg"
                  alt="HISS Academy Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">HISS Academy</h3>
                <p className="text-sm text-foreground">Football Club</p>
              </div>
            </div>
            <p className="text-sm">
              Nurturing young football talent in Ghana since 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-primary text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-primary text-foreground transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-primary text-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary text-foreground transition-colors"
                >
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-foreground">
              <li>Under 11 Fundamentals</li>
              <li>Under 13 Training</li>
              <li>Under 15 Development</li>
              <li>Under 17 Advanced</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Nkawkaw, Abepotia, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@hissfc.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8 text-center text-sm text-foreground">
          <p>&copy; 2024 HISS Academy Football Club. All rights reserved.</p>
          <p>Developed by<Link href="https://www.earlkalf.netlify.app">Earl Kalf Official</Link></p>
        </div>
      </div>
    </footer>
  );
}
