export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { Shirt, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const apparelItems = [
  {
    id: 1,
    title: 'MORNING DUET',
    subtitle: 'BREAKFAST DANCE PARTY',
    design: 'Two animated cereal mascots dancing on a vibrant rainbow stage! This tee captures the pure joy of breakfast with fun characters, colorful rainbow platforms, and sparkles everywhere. Perfect for cereal lovers and anyone who starts their day with a smile.',
    price: '$27.99',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    material: '100% Premium Cotton',
    features: ['Vibrant DTG print', 'Super soft fabric', 'Unisex fit', 'Pre-shrunk'],
    image: '/products/morning-duet.jpg',
    badge: 'POPULAR!'
  },
  {
    id: 2,
    title: 'FOOD-A-PALOOZA',
    subtitle: 'FESTIVAL OF FLAVOR',
    design: 'An epic food festival scene with animated cereal characters performing on stage! Crowd of adorable mascots cheering below, banner proudly displaying "FOOD-A-PALOOZA" in golden letters. It\'s a celebration of breakfast fun and colorful chaos.',
    price: '$41.99',
    colors: ['Black', 'Navy', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    material: '85% Cotton, 15% Polyester',
    features: ['Double-lined hood', 'Kangaroo pocket', 'Premium print quality', 'Warm fleece interior'],
    image: '/products/food-a-palooza.jpg',
    badge: 'HOT!'
  },
  {
    id: 3,
    title: 'MILK & COOKIES',
    subtitle: 'COZY KITCHEN CREW',
    design: 'A heartwarming kitchen scene with adorable cereal characters gathered around milk and cookies! Sweet pastel colors, friendly faces, and the ultimate comfort food vibe. Perfect for those who love breakfast treats and wholesome fun.',
    price: '$27.99',
    colors: ['Heather Gray', 'White', 'Light Blue'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    material: '100% Premium Cotton',
    features: ['Soft tri-blend fabric', 'Vibrant colors', 'Comfortable fit', 'Durable print'],
    image: '/products/milk-and-cookies.jpg'
  },
  {
    id: 4,
    title: 'CEREAL FUN',
    subtitle: 'RAINBOW BOWL SPLASH',
    design: 'Animated cereal characters diving and swimming in a giant rainbow bowl of cereal! Colorful splashes, bright sunshine, and pure breakfast joy. This design screams fun, energy, and delicious mornings.',
    price: '$24.99',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '100% Premium Cotton',
    features: ['Lightweight fabric', 'Bright print', 'Classic fit', 'Everyday comfort'],
    image: '/products/cereal-fun.jpg',
    badge: 'BEST VALUE'
  },
  {
    id: 5,
    title: 'SNACKS AT THE MOVIES',
    subtitle: 'RAINBOW CINEMA NIGHT',
    design: 'Movie theater scene with cereal mascots enjoying the show! Giant rainbow screen, popcorn buckets, candy everywhere, and the pure excitement of cinema night. Perfect for movie lovers and snack enthusiasts.',
    price: '$41.99',
    colors: ['Black', 'Navy', 'Forest Green'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '85% Cotton, 15% Polyester',
    features: ['Cozy fleece', 'Front pocket', 'Adjustable hood', 'Durable print'],
    image: '/products/snacks-at-the-movies.jpg',
    badge: 'NEW!'
  },
  {
    id: 6,
    title: 'BREAKFAST BOOGIE',
    subtitle: 'DISCO CEREAL PARTY',
    design: 'Cereal characters getting down on the disco dance floor! Rainbow floor tiles, sparkling lights, and pure 70s breakfast funk. This design brings the party to your morning routine.',
    price: '$27.99',
    colors: ['Heather Gray', 'White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '100% Premium Cotton',
    features: ['Soft cotton blend', 'Vibrant DTG print', 'Comfortable fit', 'Easy care'],
    image: '/products/breakfast-boogie.jpg'
  },
  {
    id: 7,
    title: 'BREAKFAST ON THE MOVE',
    subtitle: 'HOT SKILLET HIGHWAY',
    design: 'Cereal mascots cruising down Route 66 in a vintage convertible past the "Hot Skillet Highway" diner! Classic Americana vibes with breakfast fun. Perfect for road trip lovers and retro enthusiasts.',
    price: '$24.99',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '100% Premium Cotton',
    features: ['Lightweight tee', 'Bold print', 'Classic cut', 'Machine washable'],
    image: '/products/breakfast-on-the-move.jpg'
  },
  {
    id: 8,
    title: 'FAMILY TIES',
    subtitle: 'HISTORY OF CEREAL',
    design: 'A mysterious, documentary-style design featuring "Family Ties: A History of Cereal" with vintage book aesthetic and dramatic lighting. Perfect for cereal historians and those who appreciate the deeper story of breakfast.',
    price: '$41.99',
    colors: ['Black', 'Charcoal', 'Forest Green'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    material: '85% Cotton, 15% Polyester',
    features: ['Premium hoodie', 'Soft interior', 'Kangaroo pocket', 'Quality print'],
    image: '/products/family-ties.jpg',
    badge: 'UNIQUE'
  },
  {
    id: 9,
    title: 'HAPPY MORNING',
    subtitle: 'RAINBOW CEREAL SQUAD',
    design: 'A joyful lineup of colorful cereal characters on display in a vibrant rainbow bar setting! Each character radiates happiness and breakfast energy. Perfect for collectors and cereal superfans.',
    price: '$24.99',
    colors: ['Black', 'Heather Gray', 'White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '100% Premium Cotton',
    features: ['Soft fabric', 'Eye-catching print', 'Comfortable fit', 'Durable quality'],
    image: '/products/happy-morning.jpg'
  },
  {
    id: 10,
    title: 'COOL CATS',
    subtitle: 'BEACH CEREAL VIBES',
    design: 'Animated cereal mascot chilling at the beach in a rainbow-striped cup with whipped cream hair! Pink sandy vibes, relaxed energy, and pure summer breakfast vibes. Perfect for beach lovers and chill vibes enthusiasts.',
    price: '$27.99',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '100% Premium Cotton',
    features: ['Breathable cotton', 'Vibrant colors', 'Relaxed fit', 'Fun design'],
    image: '/products/cool-cats.jpg',
    badge: 'CHILL'
  }
]

export default function ApparelPage() {
  return (
    <div className="min-h-screen bg-waves">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Neon orb effects */}
        <div className="neon-orb orb-pink" style={{ width: '600px', height: '600px', top: '-20%', left: '10%', animationDelay: '0s' }} />
        <div className="neon-orb orb-purple" style={{ width: '500px', height: '500px', top: '-15%', right: '5%', animationDelay: '1.5s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-3 text-white/70 hover:text-yellow transition-all mb-8 hover:transform hover:translate-x-2 text-lg font-bold" style={{ fontFamily: 'Righteous, sans-serif' }}>
            <ArrowLeft className="w-6 h-6" />
            BACK HOME
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '4px 4px 0 hsl(var(--cyber-yellow)), 8px 8px 0 hsl(var(--neon-purple)), 12px 12px 0 rgba(0,0,0,0.5)' }}>
            <span className="text-pink">CRAZY</span>{' '}
            <span className="text-yellow">COLORFUL</span>{' '}
            <span className="text-blue">CLOTHES!</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-purple mb-6 max-w-4xl" style={{ fontFamily: 'Righteous, sans-serif', textShadow: '2px 2px 0 hsl(var(--cyan-yellow)), 4px 4px 0 rgba(0,0,0,0.3)' }}>
            Explosive Streetwear • Wild Patterns • Insane Colors
          </p>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Premium quality apparel that makes a statement. Bold designs for people who dare to stand out. This isn't fashion—it's a rebellion against boring clothes.
          </p>
        </div>
      </section>

      {/* Apparel Grid */}
      <section className="py-8 md:py-12 pb-20 relative">
        {/* Neon orb effects */}
        <div className="neon-orb orb-blue" style={{ width: '450px', height: '450px', top: '20%', left: '-10%', animationDelay: '2s' }} />
        <div className="neon-orb orb-orange" style={{ width: '520px', height: '520px', bottom: '10%', right: '-8%', animationDelay: '1s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {apparelItems.map((item) => (
              <div key={item.id} className="card-enhanced group relative">
                {item.badge && (
                  <div className="absolute top-5 right-5 bg-wild-gradient text-white text-base px-6 py-3 rounded-full z-10 font-black shadow-glow uppercase tracking-wider transform rotate-12 hover:rotate-6 transition-transform" style={{ fontFamily: 'Bangers, sans-serif' }}>
                    {item.badge}
                  </div>
                )}
                {/* Product Image */}
                <div className="aspect-square bg-card relative group overflow-hidden max-h-[300px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Product Details */}
                <div className="p-4 md:p-5 space-y-3">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-pink transition-colors" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--neon-purple)), 0 0 20px hsl(var(--electric-pink))' }}>
                      {item.title}
                    </h2>
                    <p className="text-sm text-yellow font-bold uppercase tracking-wider" style={{ fontFamily: 'Righteous, sans-serif', textShadow: '1px 1px 0 hsl(var(--neon-purple))' }}>{item.subtitle}</p>
                  </div>

                  <p className="text-white/90 text-sm leading-relaxed line-clamp-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {item.design}
                  </p>

                  {/* Material & Features */}
                  <div className="mb-3 space-y-2">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">Material</span>
                      <p className="text-white text-xs">{item.material}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">Features</span>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-muted-foreground">
                        {item.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-gold mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="mb-3">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-2">Colors</span>
                    <div className="flex flex-wrap gap-1">
                      {item.colors.slice(0, 2).map((color, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-muted/50 rounded-full text-xs text-white/70"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="mb-3">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-2">Sizes</span>
                    <div className="flex flex-wrap gap-1">
                      {item.sizes.slice(0, 4).map((size, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-muted/50 rounded text-xs text-white/70"
                        >
                          {size}
                        </span>
                      ))}
                      {item.sizes.length > 4 && <span className="text-xs text-muted-foreground px-2 py-1">+more</span>}
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-2xl font-bold text-gold">{item.price}</span>
                    <button className="px-4 py-2 rounded-full font-bold uppercase text-xs bg-rainbow-gradient text-white shadow-glow hover:scale-105 transition-all" style={{ fontFamily: 'Righteous, sans-serif' }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Size Guide CTA */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <Shirt className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Need Help with Sizing?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our comprehensive size guide to find your perfect fit. We want every piece to feel as magical as the stories that inspired them.
          </p>
          <button className="btn-primary">
            View Size Guide
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
