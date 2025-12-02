import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-gold font-serif font-semibold mb-4">Lenny Stengel</h4>
            <p className="text-sm text-muted-foreground">
              3-time published author and designer of unique fantasy apparel.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/books" className="hover:text-gold transition-colors">Books</Link></li>
              <li><Link href="/apparel" className="hover:text-gold transition-colors">Apparel</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-gold transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-gold transition-colors">Returns</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lenny Stengel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
