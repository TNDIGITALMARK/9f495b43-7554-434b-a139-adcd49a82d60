export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { Shirt, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const apparelItems = [
  {
    id: 1,
    title: 'Dragon Mythology Hoodie',
    subtitle: 'Premium Fantasy Collection',
    design: 'Featuring an intricately detailed golden dragon design inspired by ancient mythology. The dragon\'s scales shimmer with mystical patterns that capture the essence of legendary creatures.',
    price: '$39.99',
    colors: ['Navy', 'Black', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '80% Cotton, 20% Polyester',
    features: ['Premium heavyweight fabric', 'Double-lined hood', 'Kangaroo pocket', 'Ribbed cuffs and waistband'],
    image: '/generated/dragon-mythology-hoodie.png'
  },
  {
    id: 2,
    title: 'Ethereal Glow Hoodie',
    subtitle: 'Limited Edition',
    design: 'A mesmerizing blue ethereal design that seems to glow from within. Inspired by the mystical energies that flow through the worlds of Lenny\'s novels, this design captures the magic of unseen forces.',
    price: '$39.99',
    colors: ['Black', 'Navy', 'Deep Purple'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '80% Cotton, 20% Polyester',
    features: ['Glow-in-the-dark elements', 'Premium heavyweight fabric', 'Double-lined hood', 'Kangaroo pocket'],
    image: '/generated/ethereal-glow-hoodie.png'
  },
  {
    id: 3,
    title: 'Author Collection Tee',
    subtitle: 'Signature Series',
    design: 'Classic Lenny Stengel signature design featuring the iconic book and dragon emblem. A must-have for true fans of the Fire and Destiny Saga.',
    price: '$24.99',
    colors: ['Charcoal', 'Navy', 'Forest Green', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    material: '100% Premium Cotton',
    features: ['Soft-touch fabric', 'Breathable material', 'Reinforced neckline', 'Pre-shrunk'],
    image: '/generated/author-collection-tee.png'
  },
  {
    id: 4,
    title: 'Eternal Oath Hoodie',
    subtitle: 'Book Series Collection',
    design: 'Inspired by the first book in the Fire and Destiny Saga. Features flame and sword imagery symbolizing the eternal oath that binds heroes to their destiny.',
    price: '$42.99',
    colors: ['Black', 'Burgundy', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '85% Cotton, 15% Polyester',
    features: ['Premium heavyweight fabric', 'Embroidered details', 'Double-lined hood', 'Kangaroo pocket'],
    image: '/generated/eternal-oath-hoodie.png'
  },
  {
    id: 5,
    title: 'Shadows of Prophecy Tee',
    subtitle: 'Book Series Collection',
    design: 'Dark and mysterious design featuring the hooded figure from Book Two. The glowing blue eyes and swirling shadows create an unforgettable statement piece.',
    price: '$26.99',
    colors: ['Black', 'Navy', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    material: '100% Premium Cotton',
    features: ['Metallic ink details', 'Soft-touch fabric', 'Reinforced neckline', 'Pre-shrunk'],
    image: '/generated/shadows-prophecy-tee.png'
  },
  {
    id: 6,
    title: 'Aetheria Warrior Hoodie',
    subtitle: 'Exclusive Design',
    design: 'Elegant design featuring the silver-haired warrior from Chronicles of Aetheria. Purple and silver tones create a regal, mystical appearance.',
    price: '$41.99',
    colors: ['Deep Purple', 'Silver Gray', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    material: '80% Cotton, 20% Polyester',
    features: ['Premium heavyweight fabric', 'Soft inner lining', 'Double-lined hood', 'Kangaroo pocket'],
    image: '/generated/aetheria-warrior-hoodie.png'
  }
]

export default function ApparelPage() {
  return (
    <div className="min-h-screen bg-waves">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Fantasy Apparel Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Wear the magic. Each design is crafted to bring the fantastical worlds of Lenny Stengal&apos;s novels to life. Premium quality apparel that tells a story.
          </p>
        </div>
      </section>

      {/* Apparel Grid */}
      <section className="py-8 md:py-12 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {apparelItems.map((item) => (
              <div key={item.id} className="bg-card rounded-2xl overflow-hidden shadow-glow">
                {/* Product Image */}
                <div className="aspect-square bg-muted relative group overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Details */}
                <div className="p-6 md:p-8">
                  <div className="mb-4">
                    <h2 className="text-2xl font-serif font-bold text-white mb-1">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gold font-medium">{item.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
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
