'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/books', label: 'Books' },
    { href: '/apparel', label: 'Apparel' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' }
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 border-b border-white/10 backdrop-blur-strong">
      <div className="container py-4 lg:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/generated/logo.png"
                alt="Lenny Stengel Logo"
                width={50}
                height={50}
                className="w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-gold font-serif text-xl lg:text-2xl font-semibold transition-colors group-hover:text-gold/80">
              Lenny Stengel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 lg:px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-gold bg-gold/10 shadow-glow'
                    : 'text-white hover:text-gold hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:gap-4">
            <button className="relative p-2 lg:p-3 text-white hover:text-gold transition-all duration-300 rounded-full hover:bg-white/5">
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-glow">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-gold transition-all duration-300 rounded-lg hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-6 pb-2 border-t border-white/10 mt-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3.5 rounded-xl font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-gold/10 text-gold border border-gold/30 shadow-glow'
                      : 'text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
