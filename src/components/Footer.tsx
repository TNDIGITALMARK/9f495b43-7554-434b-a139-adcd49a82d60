import Link from 'next/link'
import { BookOpen, Mail, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/60 border-t border-primary/20 shadow-[0_-4px_20px_rgba(201,169,97,0.1)]">
      <div className="container py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-9 h-9 text-primary drop-shadow-[0_0_10px_rgba(201,169,97,0.4)]" />
              <h4 className="text-primary font-serif font-bold text-2xl tracking-wide">Lenny Stengel</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md italic">
              Three-time published storyteller and designer of enchanted garments.
              Crafting immersive realms and bringing them forth through bound tales and wearable art.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2.5 rounded bg-burgundy/20 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/40"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded bg-burgundy/20 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/40"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded bg-burgundy/20 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/40"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded bg-burgundy/20 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/40"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-semibold mb-5 font-serif text-lg tracking-wide">Quick Access</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/books" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                  Tomes & Volumes
                </Link>
              </li>
              <li>
                <Link href="/apparel" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                  Wardrobe
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                  The Chronicler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                  Chronicles
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-primary font-semibold mb-5 font-serif text-lg tracking-wide">Assistance</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                  Inquiries
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                  Deliveries
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                  Correspondence
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-primary font-semibold mb-5 font-serif text-lg tracking-wide">Covenant</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                  Privacy Accord
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left font-serif">
              © {currentYear} Lenny Stengel. All tales and designs reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 text-center md:text-right italic">
              Woven with care for devotees of the fantastic
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
