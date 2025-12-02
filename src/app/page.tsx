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
      <section className="relative section-padding-lg overflow-hidden">
        <div className="container text-center content-section">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight text-balance">
              3 TIME PUBLISHED AUTHOR
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 font-light text-balance">
              Fantastical Worlds Await
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/books">
                <button className="btn-primary text-lg px-8 py-4">
                  Explore Books
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:border-gold hover:text-gold transition-all">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Collection Section */}
      <section className="section-padding content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title font-serif text-white">
              Discover New Realms
            </h2>
            <p className="section-subtitle text-pretty">
              Immerse yourself in epic fantasy adventures
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {[
              { title: 'The Eternal Oath', image: '/generated/book1-eternal-oath.png', price: '$18.99' },
              { title: 'Shadows of Prophecy', image: '/generated/book2-prophecy.png', price: '$19.99' },
              { title: 'Chronicles of Aetheria', image: '/generated/book3-aetheria.png', price: '$17.99' },
              { title: 'Guardians of Zephyr', image: '/generated/book4-zephyr.png', price: '$21.99', badge: 'Coming Soon' }
            ].map((book, idx) => (
              <div key={idx} className="card-enhanced group relative">
                {book.badge && (
                  <div className="absolute top-3 right-3 bg-accent text-white text-xs px-3 py-1.5 rounded-full z-10 font-medium shadow-lg">
                    {book.badge}
                  </div>
                )}
                <div className="aspect-portrait relative bg-muted">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-semibold text-white text-base lg:text-lg line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-gold font-bold text-lg">{book.price}</p>
                  <button className="w-full mt-3 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-white transition-all text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/books">
              <button className="btn-primary text-lg px-8 py-4">
                View All Books
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Apparel Section */}
      <section className="section-padding content-section bg-card/30">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title font-serif text-white">
              Trendy Apparel
            </h2>
            <p className="section-subtitle text-pretty">
              Wear the stories you love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12">
            {[
              { title: 'Dragon Mythology Hoodie', design: 'Golden dragon design with mystical patterns', price: '$39.99', color: 'Navy' },
              { title: 'Ethereal Glow Hoodie', design: 'Glowing blue ethereal design', price: '$39.99', color: 'Black' },
              { title: 'Author Collection Tee', design: 'Lenny Stengel signature design', price: '$24.99', color: 'Charcoal' }
            ].map((item, idx) => (
              <div key={idx} className="card-enhanced group">
                <div className="aspect-square relative bg-muted/50 backdrop-blur-sm flex items-center justify-center border border-white/5">
                  <Shirt className="w-32 h-32 text-muted-foreground/40 transition-all duration-500 group-hover:scale-110 group-hover:text-gold/50" />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-white text-lg lg:text-xl mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {item.design}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-gold font-bold text-xl">{item.price}</span>
                    <span className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
                      {item.color}
                    </span>
                  </div>
                  <button className="w-full px-4 py-2.5 rounded-full bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-background transition-all font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/apparel">
              <button className="btn-primary text-lg px-8 py-4">
                Shop All Apparel
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Lenny Stengal Section */}
      <section className="section-padding content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title font-serif text-white">
              About Lenny Stengal
            </h2>
          </div>

          <div className="content-wide">
            <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-gold bg-gradient-to-br from-gold/20 to-accent/20 flex items-center justify-center border-4 border-gold/30">
                    <BookOpen className="w-32 h-32 lg:w-40 lg:h-40 text-gold" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-full shadow-glow font-semibold">
                    3x Published
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 text-center md:text-left space-y-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                    Lenny Stengal is an award-winning fantasy author known for imaginative
                    world-building and compelling character arcs. With three published novels
                    and a loyal following, Lenny&apos;s work explores themes of identity, courage,
                    and the eternal struggle between light and darkness.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                    Beyond writing, Lenny channels creative vision into unique apparel designs
                    that bring fantastical worlds to life. Each piece tells a story, connecting
                    readers with the magic they love.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link href="/about">
                    <button className="btn-primary px-8 py-3">
                      Full Biography
                    </button>
                  </Link>
                  <Link href="/books">
                    <button className="px-8 py-3 rounded-full font-medium text-gold border border-gold/30 hover:bg-gold/10 transition-all">
                      View Books
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding content-section bg-gradient-to-b from-card/30 to-card/60 backdrop-blur-sm">
        <div className="container">
          <div className="content-center">
            <div className="text-center space-y-6">
              <div className="inline-block p-4 rounded-full bg-gold/10 mb-4">
                <BookOpen className="w-12 h-12 text-gold" />
              </div>
              <h2 className="section-title font-serif text-white">
                Join the Newsletter
              </h2>
              <p className="section-subtitle text-pretty max-w-xl mx-auto">
                Stay updated on new releases, exclusive content, and special offers.
                Be the first to know when new books and apparel drop.
              </p>
              <form className="max-w-lg mx-auto pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-full bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all backdrop-blur-sm"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap px-8 py-4 text-base">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
