import Link from 'next/link'
import { BookOpen, Mail, Facebook, Twitter, Instagram, Box, Package } from 'lucide-react'
import BoxxLogo from './BoxxLogo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/80 border-t-4 border-pink/30 shadow-glow relative overflow-hidden">
      {/* Box pattern background */}
      <div className="absolute inset-0 box-grid-pattern opacity-30 pointer-events-none"></div>

      {/* Neon orbs */}
      <div className="neon-orb orb-pink" style={{ width: '400px', height: '400px', top: '20%', right: '-10%', animationDelay: '1s' }} />
      <div className="neon-orb orb-purple" style={{ width: '350px', height: '350px', bottom: '10%', left: '-10%', animationDelay: '2s' }} />

      <div className="container py-12 lg:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <BoxxLogo size="sm" animated={false} />
            </div>
            <p className="text-base text-white/90 leading-relaxed mb-6 max-w-md" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Wild streetwear, crazy colors, and explosive designs. Breaking all the rules!
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-3 rounded-2xl bg-purple/30 text-white hover:bg-pink/40 hover:text-white transition-all duration-300 border-2 border-purple/50 hover:border-pink shadow-sm hover:shadow-glow transform hover:scale-110 hover:rotate-12"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-2xl bg-purple/30 text-white hover:bg-blue/40 hover:text-white transition-all duration-300 border-2 border-purple/50 hover:border-blue shadow-sm hover:shadow-glow transform hover:scale-110 hover:-rotate-12"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-2xl bg-purple/30 text-white hover:bg-yellow/40 hover:text-card transition-all duration-300 border-2 border-purple/50 hover:border-yellow shadow-sm hover:shadow-glow transform hover:scale-110 hover:rotate-12"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-2xl bg-purple/30 text-white hover:bg-green/40 hover:text-white transition-all duration-300 border-2 border-purple/50 hover:border-green shadow-sm hover:shadow-glow transform hover:scale-110 hover:-rotate-12"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-pink font-bold mb-5 text-lg tracking-wider uppercase" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--cyber-yellow)), 4px 4px 0 rgba(0,0,0,0.3)' }}>Shop</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/books" className="text-white/80 hover:text-yellow transition-colors inline-flex items-center gap-2 group" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <Box className="w-3 h-3 text-pink/60 group-hover:text-yellow group-hover:rotate-45 transition-all" />
                  Books
                </Link>
              </li>
              <li>
                <Link href="/apparel" className="text-white/80 hover:text-pink transition-colors inline-flex items-center gap-2 group" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <Package className="w-3 h-3 text-purple/60 group-hover:text-pink group-hover:rotate-45 transition-all" />
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-blue transition-colors inline-flex items-center gap-2 group" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <Box className="w-3 h-3 text-blue/60 group-hover:text-blue group-hover:rotate-45 transition-all" />
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-green transition-colors inline-flex items-center gap-2 group" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <Package className="w-3 h-3 text-green/60 group-hover:text-green group-hover:rotate-45 transition-all" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-yellow font-bold mb-5 text-lg tracking-wider uppercase" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--neon-purple)), 4px 4px 0 rgba(0,0,0,0.3)' }}>Help</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/faq" className="text-white/80 hover:text-pink transition-colors inline-flex items-center gap-2 group" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <Box className="w-3 h-3 text-pink/60 group-hover:text-pink group-hover:rotate-45 transition-all" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-white/80 hover:text-yellow transition-colors inline-flex items-center gap-2 group" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <Package className="w-3 h-3 text-yellow/60 group-hover:text-yellow group-hover:rotate-45 transition-all" />
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-white/80 hover:text-purple transition-colors inline-flex items-center gap-2 group" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <Box className="w-3 h-3 text-purple/60 group-hover:text-purple group-hover:rotate-45 transition-all" />
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-blue transition-colors inline-flex items-center gap-2 group" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <Package className="w-3 h-3 text-blue/60 group-hover:text-blue group-hover:rotate-45 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-purple font-bold mb-5 text-lg tracking-wider uppercase" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--electric-blue)), 4px 4px 0 rgba(0,0,0,0.3)' }}>Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-green transition-colors inline-flex items-center gap-2 group" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <Box className="w-3 h-3 text-green/60 group-hover:text-green group-hover:rotate-45 transition-all" />
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-orange transition-colors inline-flex items-center gap-2 group" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <Package className="w-3 h-3 text-orange/60 group-hover:text-orange group-hover:rotate-45 transition-all" />
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-4 border-pink/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/80 text-center md:text-left flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              <Box className="w-4 h-4 text-pink" />
              © {currentYear} Inside & O13utside the Boxx. All designs reserved.
            </p>
            <p className="text-xs text-white/60 text-center md:text-right" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Wild streetwear for rule breakers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
