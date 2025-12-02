import Link from 'next/link'
import { BookOpen, Mail, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-white/10">
      <div className="container py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-gold" />
              <h4 className="text-gold font-serif font-semibold text-xl">Lenny Stengel</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
              3-time published fantasy author and designer of unique fantasy apparel.
              Creating immersive worlds and bringing them to life through books and clothing.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2.5 rounded-full bg-white/5 text-muted-foreground hover:bg-gold/10 hover:text-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-white/5 text-muted-foreground hover:bg-gold/10 hover:text-gold transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-white/5 text-muted-foreground hover:bg-gold/10 hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-white/5 text-muted-foreground hover:bg-gold/10 hover:text-gold transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 font-serif">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/books" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                  Books
                </Link>
              </li>
              <li>
                <Link href="/apparel" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-5 font-serif">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-5 font-serif">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Lenny Stengel. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 text-center md:text-right">
              Crafted with passion for fantasy lovers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
