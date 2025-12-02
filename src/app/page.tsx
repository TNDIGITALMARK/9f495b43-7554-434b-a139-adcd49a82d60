export const dynamic = 'force-dynamic'

import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Shirt } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-waves">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-tight">
            3 TIME PUBLISHED AUTHOR
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Fantastical Worlds Await
          </p>
          <Link href="/books">
            <button className="btn-primary">
              Explore Books
            </button>
          </Link>
        </div>
      </section>

      {/* Book Collection Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-3">
              Discover New Realms
            </h2>
            <p className="text-muted-foreground">Immerse yourself in epic fantasy adventures</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'The Eternal Oath', image: '/generated/book1-eternal-oath.png', price: '$18.99' },
              { title: 'Shadows of Prophecy', image: '/generated/book2-prophecy.png', price: '$19.99' },
              { title: 'Chronicles of Aetheria', image: '/generated/book3-aetheria.png', price: '$17.99' },
              { title: 'Guardians of Zephyr', image: '/generated/book4-zephyr.png', price: '$21.99', badge: 'Coming Soon' }
            ].map((book, idx) => (
              <div key={idx} className="card-hover bg-card rounded-lg overflow-hidden shadow-glow relative">
                {book.badge && (
                  <div className="absolute top-2 right-2 bg-accent text-white text-xs px-2 py-1 rounded-full z-10">
                    {book.badge}
                  </div>
                )}
                <div className="aspect-[2/3] relative">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">{book.title}</h3>
                  <p className="text-gold font-semibold">{book.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/books">
              <button className="btn-primary">
                View All Books
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Apparel Section */}
      <section className="py-16 md:py-24 bg-purple-light/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-3">
              Trendy Apparel
            </h2>
            <p className="text-muted-foreground">Wear the stories you love</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { title: 'Dragon Mythology Hoodie', design: 'Golden dragon design with mystical patterns', price: '$39.99', color: 'Navy' },
              { title: 'Ethereal Glow Hoodie', design: 'Glowing blue ethereal design', price: '$39.99', color: 'Black' },
              { title: 'Author Collection Tee', design: 'Lenny Stengel signature design', price: '$24.99', color: 'Charcoal' }
            ].map((item, idx) => (
              <div key={idx} className="card-hover bg-card rounded-lg overflow-hidden shadow-glow">
                <div className="aspect-square relative bg-muted flex items-center justify-center">
                  <Shirt className="w-32 h-32 text-muted-foreground/30" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.design}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-semibold text-lg">{item.price}</span>
                    <span className="text-sm text-muted-foreground">{item.color}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/apparel">
              <button className="btn-primary">
                Shop Apparel
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Lenny Stengal Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-3">
              About Lenny Stengal
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-gold bg-muted flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-gold" />
                </div>
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-2xl font-serif font-semibold text-white mb-4">
                  About Lenny Stengal
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Lenny Stengal is an award-winning fantasy author known for imaginative
                  world-building and compelling character arcs. With three published novels
                  and a loyal following, Lenny&apos;s work explores themes of identity, courage,
                  and the eternal struggle between light and darkness.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Beyond writing, Lenny channels creative vision into unique apparel designs
                  that bring fantastical worlds to life. Each piece tells a story, connecting
                  readers with the magic they love.
                </p>
                <Link href="/about">
                  <button className="btn-primary">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
              Join the Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Stay updated on new releases, exclusive content, and special offers.
              Be the first to know when new books and apparel drop.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-muted border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
