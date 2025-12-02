export const dynamic = 'force-dynamic'

import Link from 'next/link'
import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSlideshow from '@/components/HeroSlideshow'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-waves">
      <Navigation />

      {/* Hero Section */}
      <section className="relative section-padding-lg overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Slideshow */}
        <HeroSlideshow />

        <div className="container text-center content-section relative z-30">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight text-balance hero-text-shadow relative">
              <span className="relative inline-block text-gold">
                LENNY STENGAL
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-4 font-light text-balance hero-text-shadow text-parchment italic font-serif">
              Three-Time Published Author
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-parchment/90 mb-10 text-balance hero-text-shadow">
              Where Ancient Tales Meet Modern Craft
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/books">
                <button className="btn-primary text-base px-10 py-4">
                  Explore Tomes
                </button>
              </Link>
              <Link href="/apparel">
                <button className="px-10 py-4 rounded-md font-semibold text-parchment border-2 border-primary/40 hover:border-primary hover:bg-primary/10 transition-all backdrop-blur-sm bg-leather-brown/30">
                  Shop Apparel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Collection Section */}
      <section className="section-padding content-section relative overflow-hidden">
        {/* Mystical orb effects - candlelight ambiance */}
        <div className="mystical-orb orb-gold" style={{ width: '450px', height: '450px', top: '-10%', left: '8%', animationDelay: '0s' }} />
        <div className="mystical-orb orb-burgundy" style={{ width: '380px', height: '380px', bottom: '-5%', right: '12%', animationDelay: '2s' }} />

        <div className="container">
          <div className="section-header">
            <h2 className="section-title font-serif">
              Literary Collection
            </h2>
            <p className="section-subtitle text-pretty">
              Tales of wonder, mystery, and adventure bound in timeless volumes
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
                  <div className="absolute top-3 right-3 bg-secondary text-parchment text-xs px-3 py-1.5 rounded z-10 font-semibold shadow-burgundy uppercase tracking-wide">
                    {book.badge}
                  </div>
                )}
                <div className="aspect-portrait relative bg-warm-black border-b border-primary/20">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="p-5 space-y-3 relative z-10">
                  <h3 className="font-serif font-bold text-parchment text-base lg:text-lg line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-gold font-bold text-xl tracking-wide">{book.price}</p>
                  <button className="w-full mt-3 px-4 py-2.5 rounded bg-burgundy/20 text-primary border border-primary/40 hover:bg-primary hover:text-warm-black transition-all text-sm font-semibold uppercase tracking-wider shadow-gold">
                    View Tome
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/books">
              <button className="btn-primary text-base px-10 py-4">
                Browse Library
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Apparel Section */}
      <section className="section-padding content-section bg-card/40 relative overflow-hidden border-y border-primary/10">
        {/* Mystical orb effects */}
        <div className="mystical-orb orb-burgundy" style={{ width: '480px', height: '480px', top: '5%', right: '3%', animationDelay: '1s' }} />
        <div className="mystical-orb orb-purple" style={{ width: '350px', height: '350px', bottom: '8%', left: '4%', animationDelay: '3s' }} />

        <div className="container">
          <div className="section-header">
            <h2 className="section-title font-serif">
              Enchanted Wardrobe
            </h2>
            <p className="section-subtitle text-pretty">
              Garments woven with tales and artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12">
            {[
              { title: 'Dragon Mythology Hoodie', design: 'Golden dragon design with mystical patterns', price: '$39.99', color: 'Navy', image: '/generated/apparel-dragon-hoodie.png' },
              { title: 'Ethereal Glow Hoodie', design: 'Glowing blue ethereal design', price: '$39.99', color: 'Black', image: '/generated/apparel-ethereal-hoodie.png' },
              { title: 'Author Collection Tee', design: 'Lenny Stengel signature design', price: '$24.99', color: 'Charcoal', image: '/generated/apparel-author-tee.png' }
            ].map((item, idx) => (
              <div key={idx} className="card-enhanced group">
                <div className="aspect-square relative bg-warm-black/60 backdrop-blur-sm border border-primary/10 group-hover:border-primary/30 transition-all overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 space-y-4 relative z-10">
                  <div>
                    <h3 className="font-serif font-bold text-parchment text-lg lg:text-xl mb-3 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 italic">
                      {item.design}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-primary/20">
                    <span className="text-gold font-bold text-2xl tracking-wide">{item.price}</span>
                    <span className="text-xs text-parchment/80 bg-burgundy/20 px-3 py-1.5 rounded border border-burgundy/30 uppercase tracking-wider font-semibold">
                      {item.color}
                    </span>
                  </div>
                  <button className="w-full px-4 py-3 rounded bg-primary/15 text-primary border border-primary/40 hover:bg-primary hover:text-warm-black transition-all font-semibold uppercase tracking-wider text-sm shadow-gold">
                    Add to Collection
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/apparel">
              <button className="btn-primary text-base px-10 py-4">
                Explore Wardrobe
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Lenny Stengal Section */}
      <section className="section-padding content-section relative overflow-hidden">
        {/* Mystical orb effects */}
        <div className="mystical-orb orb-gold" style={{ width: '520px', height: '520px', top: '15%', left: '-8%', animationDelay: '0.5s' }} />
        <div className="mystical-orb orb-burgundy" style={{ width: '400px', height: '400px', bottom: '10%', right: '-3%', animationDelay: '2.5s' }} />

        <div className="container">
          <div className="section-header">
            <h2 className="section-title font-serif">
              The Chronicler
            </h2>
          </div>

          <div className="content-wide">
            <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded overflow-hidden shadow-gold bg-gradient-to-br from-primary/20 via-burgundy/15 to-warm-black flex items-center justify-center border-2 border-primary/40 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
                    <BookOpen className="w-32 h-32 lg:w-40 lg:h-40 text-primary relative z-10 drop-shadow-[0_0_20px_rgba(201,169,97,0.6)]" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-secondary text-parchment px-6 py-3 rounded shadow-burgundy font-bold uppercase tracking-wider text-sm border border-primary/30">
                    3x Published
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 text-center md:text-left space-y-6">
                <div className="space-y-5">
                  <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                    <span className="text-primary font-serif font-bold text-xl">Lenny Stengal</span> is a celebrated storyteller
                    whose tales weave through realms of mystery, adventure, and ancient lore. With three published works
                    and a devoted readership, each narrative explores the depths of character, the weight of choice,
                    and the timeless dance between shadow and light.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                    Beyond the written word, Lenny&apos;s creative essence flows into distinctive garments—each piece
                    a wearable fragment of the worlds imagined. These designs bridge the gap between literature and craft,
                    allowing enthusiasts to carry the magic with them.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link href="/about">
                    <button className="btn-primary px-8 py-3">
                      Discover More
                    </button>
                  </Link>
                  <Link href="/books">
                    <button className="px-8 py-3 rounded-md font-semibold text-primary border-2 border-primary/40 hover:bg-primary/10 hover:border-primary transition-all backdrop-blur-sm">
                      View Collected Works
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding content-section bg-gradient-to-b from-card/40 to-card/70 backdrop-blur-sm relative overflow-hidden border-t border-primary/10">
        {/* Mystical orb effects */}
        <div className="mystical-orb orb-gold" style={{ width: '460px', height: '460px', top: '25%', left: '50%', transform: 'translateX(-50%)', animationDelay: '1.5s' }} />

        <div className="container">
          <div className="content-center">
            <div className="text-center space-y-6">
              <div className="inline-block p-5 rounded bg-primary/10 mb-4 border border-primary/30 shadow-gold">
                <BookOpen className="w-14 h-14 text-primary drop-shadow-[0_0_15px_rgba(201,169,97,0.5)]" />
              </div>
              <h2 className="section-title font-serif">
                The Reader&apos;s Circle
              </h2>
              <p className="section-subtitle text-pretty max-w-xl mx-auto">
                Join our fellowship to receive word of new tales, exclusive glimpses into upcoming works,
                and announcements of rare garments and limited editions.
              </p>
              <form className="max-w-lg mx-auto pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your correspondence address..."
                    className="flex-1 px-6 py-4 bg-warm-black/60 border border-primary/30 text-parchment placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all backdrop-blur-sm rounded"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap px-8 py-4 text-base">
                    Join Circle
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-5 italic">
                  Your trust is sacred. Depart the circle at your leisure.
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
