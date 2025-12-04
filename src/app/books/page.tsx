export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { BookOpen, Palette, Sparkles, ArrowLeft, Zap } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CreatorPage() {
  return (
    <div className="min-h-screen bg-waves">
      <Navigation />

      {/* Hero Header */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Neon orb effects */}
        <div className="neon-orb orb-pink" style={{ width: '700px', height: '700px', top: '-25%', left: '5%', animationDelay: '0s' }} />
        <div className="neon-orb orb-purple" style={{ width: '600px', height: '600px', top: '-20%', right: '5%', animationDelay: '1.5s' }} />
        <div className="neon-orb orb-yellow" style={{ width: '500px', height: '500px', bottom: '-15%', left: '50%', animationDelay: '2.5s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-3 text-white/70 hover:text-yellow transition-all mb-8 hover:transform hover:translate-x-2 text-lg font-bold" style={{ fontFamily: 'Righteous, sans-serif' }}>
            <ArrowLeft className="w-6 h-6" />
            BACK HOME
          </Link>

          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '4px 4px 0 hsl(var(--cyber-yellow)), 8px 8px 0 hsl(var(--neon-purple)), 12px 12px 0 rgba(0,0,0,0.5)' }}>
              <span className="text-pink">MEET</span>{' '}
              <span className="text-yellow">LENNY</span>{' '}
              <span className="text-blue">STENGEL</span>
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-purple mb-6" style={{ fontFamily: 'Righteous, sans-serif', textShadow: '2px 2px 0 hsl(var(--cyber-yellow)), 4px 4px 0 rgba(0,0,0,0.3)' }}>
              Creator • Designer • Author • Visionary
            </p>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              The creative force behind "Inside and Outside the Boxx" — where wild imagination meets explosive fashion
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24 relative">
        {/* Neon orb effects */}
        <div className="neon-orb orb-blue" style={{ width: '550px', height: '550px', top: '10%', right: '-10%', animationDelay: '1s' }} />
        <div className="neon-orb orb-orange" style={{ width: '480px', height: '480px', bottom: '15%', left: '-8%', animationDelay: '2s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main Bio */}
            <div className="card-enhanced p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-pink mb-8" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '3px 3px 0 hsl(var(--cyber-yellow)), 6px 6px 0 rgba(0,0,0,0.3)' }}>
                THE STORY
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                <p>
                  <span className="text-yellow font-black text-2xl" style={{ fontFamily: 'Bangers, sans-serif' }}>Lenny Stengel</span> isn't just a designer—he's a creative explosion. With a mind that refuses to stay inside the lines and a passion for colors that most people are afraid to wear, Lenny created "Inside and Outside the Boxx" as a rebellion against boring, safe fashion.
                </p>
                <p>
                  Growing up, Lenny was always the kid with the wild ideas, the one doodling crazy patterns in notebooks and dreaming up worlds that didn't exist yet. That creative energy never faded—it only got louder, bolder, and more colorful.
                </p>
                <p>
                  Today, Lenny channels that energy into streetwear that makes people stop and stare. Every design is a statement. Every color choice is intentional. Every piece says: <span className="text-pink font-bold">"I'm here, I'm loud, and I don't apologize."</span>
                </p>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-enhanced p-6 transform hover:rotate-2 transition-transform">
                <div className="w-16 h-16 bg-rainbow-gradient rounded-full flex items-center justify-center mb-4 mx-auto shadow-glow">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow text-center mb-4" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--neon-purple))' }}>
                  COLOR IS LIFE
                </h3>
                <p className="text-white/90 text-center" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  Life's too short for bland. Every hue tells a story, every shade has a voice.
                </p>
              </div>

              <div className="card-enhanced p-6 transform hover:rotate-2 transition-transform">
                <div className="w-16 h-16 bg-rainbow-gradient rounded-full flex items-center justify-center mb-4 mx-auto shadow-glow">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pink text-center mb-4" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--electric-blue))' }}>
                  BE YOURSELF
                </h3>
                <p className="text-white/90 text-center" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  Authenticity over everything. Wear what makes you feel alive.
                </p>
              </div>

              <div className="card-enhanced p-6 transform hover:rotate-2 transition-transform">
                <div className="w-16 h-16 bg-rainbow-gradient rounded-full flex items-center justify-center mb-4 mx-auto shadow-glow">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue text-center mb-4" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--cyber-yellow))' }}>
                  BREAK RULES
                </h3>
                <p className="text-white/90 text-center" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  Rules are for the timid. Creativity thrives outside the box.
                </p>
              </div>
            </div>

            {/* Published Author Section */}
            <div className="card-enhanced p-8 md:p-12 bg-gradient-to-br from-card to-card/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-wild-gradient opacity-20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-rainbow-gradient rounded-2xl flex items-center justify-center shadow-glow transform -rotate-6">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-purple" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '3px 3px 0 hsl(var(--cyber-yellow)), 6px 6px 0 rgba(0,0,0,0.3)' }}>
                      3X PUBLISHED AUTHOR
                    </h2>
                    <p className="text-xl text-yellow font-bold" style={{ fontFamily: 'Righteous, sans-serif' }}>
                      Words Meet Vision
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-lg md:text-xl text-white/90 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <p>
                    Beyond clothing, Lenny has also channeled his creativity into published books. Three times over, he's proven that creativity knows no boundaries—whether it's fabric or pages, the mission is the same: <span className="text-pink font-bold">create something that makes people feel something.</span>
                  </p>
                  <p>
                    His writing carries the same energy as his designs—bold, unapologetic, and impossible to ignore. Each book is a journey into worlds where imagination runs wild and characters refuse to be ordinary.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-8 py-12">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '4px 4px 0 hsl(var(--cyber-yellow)), 8px 8px 0 hsl(var(--neon-purple)), 12px 12px 0 rgba(0,0,0,0.4)' }}>
                <span className="text-yellow">READY TO JOIN</span>{' '}
                <span className="text-pink">THE MOVEMENT?</span>
              </h2>
              <p className="text-2xl text-white/90 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Step outside the box. Wear the chaos. Embrace the colors. Be unapologetically YOU.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/apparel">
                  <button className="btn-primary text-xl px-16 py-6 transform hover:rotate-3 hover:scale-110">
                    SHOP THE COLLECTION
                  </button>
                </Link>
                <Link href="/">
                  <button className="px-16 py-6 rounded-full font-bold text-white border-4 border-blue hover:border-green hover:bg-purple/30 transition-all backdrop-blur-sm bg-card/60 text-xl shadow-glow transform hover:-rotate-2" style={{ fontFamily: 'Righteous, sans-serif' }}>
                    BACK TO HOME
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
