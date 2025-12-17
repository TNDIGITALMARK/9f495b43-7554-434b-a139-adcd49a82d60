export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { BookOpen, Pen, Heart, Globe, Mail, ArrowLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
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
            About Lenny Stengel
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            3-Time Published Author · Fantasy World Builder · Apparel Designer
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
            <div className="md:col-span-1">
              <div className="bg-card rounded-2xl p-8 shadow-glow sticky top-24">
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-gold bg-muted flex items-center justify-center mb-6">
                  <BookOpen className="w-32 h-32 text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-white text-center mb-3">
                  Lenny Stengel
                </h3>
                <p className="text-gold text-center mb-6">Author & Designer</p>
                <div className="space-y-3">
                  <a href="mailto:contact@lennystengel.com" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">contact@lennystengel.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Globe className="w-5 h-5" />
                    <span className="text-sm">Based in the United States</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-semibold text-white mb-4">
                  The Journey
                </h2>
                <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Lenny Stengel is an award-winning fantasy author whose imaginative storytelling has captivated readers around the world. With three published novels and a loyal following that spans continents, Lenny&apos;s work explores timeless themes of identity, courage, and the eternal struggle between light and darkness.
                  </p>
                  <p>
                    Growing up fascinated by mythology and epic tales, Lenny spent countless hours creating intricate worlds filled with complex characters and rich histories. This passion eventually transformed into a career that has touched thousands of readers who find themselves lost in the pages of fantastical adventures.
                  </p>
                  <p>
                    Lenny&apos;s latest work, <span className="text-white font-medium">Family Ties: An Inheritance Thriller</span>, showcases a brilliant pivot into the suspense genre. This gripping whodunit follows the wealthy Ashford family as they gather for a will reading, only to find themselves trapped with a killer in their midst. With twists that rival Agatha Christie, a detective hiding in plain sight, and a decades-old secret that threatens to destroy them all, <span className="text-white font-medium">Family Ties</span> has earned 5-star reviews for its masterful blend of betrayal, greed, and family drama. Perfect for fans of Lucy Foley and Liane Moriarty.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl p-6 shadow-glow">
                  <BookOpen className="w-10 h-10 text-gold mb-4" />
                  <h3 className="text-xl font-serif font-semibold text-white mb-2">
                    3 Books Published
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    With thousands of readers worldwide and growing
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-glow">
                  <Pen className="w-10 h-10 text-gold mb-4" />
                  <h3 className="text-xl font-serif font-semibold text-white mb-2">
                    Award-Winning
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Recognized for world-building and character development
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-glow">
                  <Heart className="w-10 h-10 text-gold mb-4" />
                  <h3 className="text-xl font-serif font-semibold text-white mb-2">
                    Loyal Community
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Building connections through stories and art
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-semibold text-white mb-4">
                  Beyond the Written Word
                </h2>
                <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Beyond writing, Lenny channels creative vision into unique apparel designs that bring fantastical worlds to life. Each hoodie, t-shirt, and design piece is crafted to tell a story, allowing fans to wear the magic they love.
                  </p>
                  <p>
                    The apparel collection features designs inspired directly by the novels, from the golden dragons of ancient mythology to the ethereal glowing energies that flow through Lenny&apos;s fictional realms. Every piece is created with the same attention to detail and passion that goes into crafting epic narratives.
                  </p>
                  <p>
                    This unique combination of literary artistry and visual design creates a complete brand experience. Readers don&apos;t just consume stories—they live them, wear them, and become part of a growing community of fantasy enthusiasts.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-semibold text-white mb-4">
                  Philosophy & Approach
                </h2>
                <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At the heart of every story Lenny creates is a belief in the power of imagination to transform lives. Fantasy isn&apos;t just entertainment—it&apos;s a lens through which we can examine our own world, our struggles, and our triumphs.
                  </p>
                  <p>
                    Lenny&apos;s writing philosophy centers on creating characters that feel real despite their fantastical circumstances. Heroes who doubt, villains with understandable motivations, and worlds with histories that feel lived-in and authentic.
                  </p>
                  <p>
                    The goal is simple: to create stories that readers can&apos;t put down, characters they&apos;ll never forget, and worlds they&apos;ll want to return to again and again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Join the Adventure
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay connected for new book releases, exclusive content, behind-the-scenes insights, and special offers on apparel designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/books">
              <button className="btn-primary">
                Explore Books
              </button>
            </Link>
            <Link href="/apparel">
              <button className="px-8 py-3 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-purple-dark transition-all font-medium">
                Shop Apparel
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
