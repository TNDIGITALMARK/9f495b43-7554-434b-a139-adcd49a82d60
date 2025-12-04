'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Menu, X, Box } from 'lucide-react'
import BoxxLogo from './BoxxLogo'

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
    <nav className="sticky top-0 z-50 bg-background/95 border-b-4 border-pink/30 backdrop-blur-strong shadow-glow">
      <div className="container py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link href="/" className="group flex items-center">
            <div className="hidden lg:block">
              <BoxxLogo size="sm" animated={false} />
            </div>
            <div className="lg:hidden flex items-center gap-2">
              <Box className="w-8 h-8 text-pink group-hover:rotate-45 transition-transform" style={{ filter: 'drop-shadow(0 0 10px hsl(var(--electric-pink)))' }} />
              <span className="text-pink font-bold text-2xl uppercase tracking-wider" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--cyber-yellow)), 4px 4px 0 rgba(0,0,0,0.3)' }}>
                BOXX
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced with crazy colorful theme */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 lg:px-6 py-3 rounded-2xl font-bold transition-all duration-300 uppercase tracking-wider text-sm border-3 transform hover:scale-105 ${
                  isActive(item.href)
                    ? 'bg-rainbow-gradient text-white border-yellow shadow-glow'
                    : 'text-white hover:text-yellow border-purple/50 hover:border-pink bg-card/50 hover:bg-purple/30 shadow-sm hover:shadow-glow'
                }`}
                style={{ fontFamily: 'Righteous, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu Button - Enhanced */}
          <div className="flex items-center gap-3 lg:gap-4">
            <button className="relative p-3 lg:p-3.5 text-white hover:text-pink transition-all duration-300 rounded-2xl bg-card/50 hover:bg-purple/30 border-2 border-purple/50 hover:border-pink shadow-sm hover:shadow-glow transform hover:scale-110">
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="absolute -top-2 -right-2 bg-rainbow-gradient text-white text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shadow-glow border-2 border-yellow" style={{ fontFamily: 'Righteous, sans-serif' }}>
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 text-white hover:text-yellow transition-all duration-300 rounded-2xl bg-card/50 hover:bg-pink/30 border-2 border-purple/50 hover:border-yellow shadow-sm hover:shadow-glow transform hover:scale-110"
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

        {/* Mobile Navigation - Enhanced with crazy colorful theme */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-6 pb-2 border-t-4 border-pink/30 mt-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-2xl font-bold transition-all duration-300 uppercase tracking-wider text-sm border-3 transform hover:scale-105 ${
                    isActive(item.href)
                      ? 'bg-rainbow-gradient text-white border-yellow shadow-glow'
                      : 'text-white hover:text-yellow border-purple/50 hover:border-pink bg-card/50 hover:bg-purple/30 shadow-sm hover:shadow-glow'
                  }`}
                  style={{ fontFamily: 'Righteous, sans-serif' }}
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
