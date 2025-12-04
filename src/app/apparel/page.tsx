export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { Shirt, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const apparelItems = [
  {
    id: 1,
    title: 'NEON EXPLOSION HOODIE',
    subtitle: 'CRAZY COLOR BLAST',
    design: 'Electric pink and purple gradient with wild lightning graphics. This hoodie screams energy and makes you impossible to miss. Bold patterns, insane colors, and pure chaos in clothing form.',
    price: '$49.99',
    colors: ['Multi-Color', 'Electric Pink/Purple', 'Neon Rainbow'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    material: '85% Premium Cotton, 15% Polyester',
    features: ['Ultra-soft premium fabric', 'Vibrant all-over print', 'Double-lined hood', 'Oversized fit'],
    image: '/generated/dragon-mythology-hoodie.png',
    badge: 'HOT!'
  },
  {
    id: 2,
    title: 'RAINBOW BLAST TEE',
    subtitle: 'FULL SPECTRUM BOMB',
    design: 'Every color of the rainbow exploding across your chest. This isn\'t just a t-shirt—it\'s a statement. Bold, bright, and unapologetically wild. Wear it loud, wear it proud.',
    price: '$34.99',
    colors: ['White', 'Black', 'Neon Pink'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    material: '100% Premium Cotton',
    features: ['Vibrant DTG print', 'Super soft fabric', 'Unisex fit', 'Pre-shrunk'],
    image: '/generated/ethereal-glow-hoodie.png'
  },
  {
    id: 3,
    title: 'POP ART CREWNECK',
    subtitle: 'COMIC BOOK STYLE',
    design: 'Comic book style burst graphics with POW! BAM! BOOM! energy. Bold outlines, halftone dots, and colors that jump off the fabric. Pure pop art perfection.',
    price: '$44.99',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '80% Cotton, 20% Polyester',
    features: ['Fleece-lined interior', 'Bold screen print', 'Ribbed collar and cuffs', 'Relaxed fit'],
    image: '/generated/author-collection-tee.png',
    badge: 'NEW!'
  },
  {
    id: 4,
    title: 'CYBER WAVE HOODIE',
    subtitle: 'FUTURISTIC NEON',
    design: 'Futuristic neon wave patterns that look like they\'re from the year 3000. Glowing blues, electric purples, and cyber pinks create a design that\'s totally out of this world.',
    price: '$49.99',
    colors: ['Navy', 'Black', 'Deep Purple'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '85% Cotton, 15% Polyester',
    features: ['Premium heavyweight fabric', 'Reflective elements', 'Double-lined hood', 'Kangaroo pocket'],
    image: '/generated/eternal-oath-hoodie.png'
  },
  {
    id: 5,
    title: 'GRAFFITI BOMB JOGGERS',
    subtitle: 'STREET ART VIBES',
    design: 'Street art inspired all-over print with spray paint effects, bold tags, and urban energy. These joggers are for people who live outside the lines.',
    price: '$54.99',
    colors: ['Multi-Color', 'Black/Multi', 'White/Multi'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '90% Cotton, 10% Elastane',
    features: ['All-over sublimation print', 'Elastic waistband', 'Tapered fit', 'Side pockets'],
    image: '/generated/shadows-prophecy-tee.png'
  },
  {
    id: 6,
    title: 'ELECTRIC DREAMS ZIP-UP',
    subtitle: 'PSYCHEDELIC GRADIENT',
    design: 'Psychedelic gradient hoodie that shifts between hot pink, electric purple, and neon blue. Like a sunset on another planet. Bold, beautiful, and totally bonkers.',
    price: '$52.99',
    colors: ['Purple/Pink Gradient', 'Blue/Green Gradient', 'Orange/Pink Gradient'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '80% Cotton, 20% Polyester',
    features: ['Full-zip front', 'All-over gradient print', 'Premium fabric', 'Adjustable hood'],
    image: '/generated/aetheria-warrior-hoodie.png',
    badge: 'TRENDING'
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
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {apparelItems.map((item) => (
              <div key={item.id} className="card-enhanced group relative">
                {item.badge && (
                  <div className="absolute top-5 right-5 bg-wild-gradient text-white text-base px-6 py-3 rounded-full z-10 font-black shadow-glow uppercase tracking-wider transform rotate-12 hover:rotate-6 transition-transform" style={{ fontFamily: 'Bangers, sans-serif' }}>
                    {item.badge}
                  </div>
                )}
                {/* Product Image */}
                <div className="aspect-square bg-card relative group overflow-hidden">
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
                <div className="p-6 md:p-8 space-y-5">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-pink transition-colors" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--neon-purple)), 0 0 20px hsl(var(--electric-pink))' }}>
                      {item.title}
                    </h2>
                    <p className="text-lg text-yellow font-bold uppercase tracking-wider" style={{ fontFamily: 'Righteous, sans-serif', textShadow: '1px 1px 0 hsl(var(--neon-purple))' }}>{item.subtitle}</p>
                  </div>

                  <p className="text-white/90 text-base leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {item.design}
                  </p>

                  {/* Material & Features */}
                  <div className="mb-6 space-y-3">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">Material</span>
                      <p className="text-white text-sm">{item.material}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-2">Features</span>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-gold mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="mb-6">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-3">Available Colors</span>
                    <div className="flex flex-wrap gap-2">
                      {item.colors.map((color, idx) => (
                        <button
                          key={idx}
                          className="px-4 py-2 bg-muted/50 rounded-full text-xs text-white border border-border hover:border-gold hover:text-gold transition-colors"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="mb-6">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-3">Sizes</span>
                    <div className="flex flex-wrap gap-2">
                      {item.sizes.map((size, idx) => (
                        <button
                          key={idx}
                          className="px-4 py-2 bg-muted/50 rounded-lg text-xs text-white border border-border hover:border-gold hover:text-gold transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-3xl font-bold text-gold">{item.price}</span>
                    <button className="btn-primary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
