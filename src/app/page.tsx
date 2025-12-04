export const dynamic = 'force-dynamic'

import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Box, Package } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSlideshow from '@/components/HeroSlideshow'
import BoxxLogo from '@/components/BoxxLogo'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-waves">
      <Navigation />

      {/* Hero Section - Modern & Clean */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Slideshow */}
        <HeroSlideshow />

        {/* Content Container */}
        <div className="container relative z-30 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Logo - Clean & Centered */}
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="hidden lg:block">
                <BoxxLogo size="xl" animated={true} />
              </div>
              <div className="hidden md:block lg:hidden">
                <BoxxLogo size="lg" animated={true} />
              </div>
              <div className="block md:hidden">
                <BoxxLogo size="md" animated={true} />
              </div>
            </div>

            {/* Tagline - Bold & Impactful */}
            <h2
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center mb-6 md:mb-8 leading-tight tracking-wider"
              style={{
                fontFamily: 'Righteous, sans-serif',
                color: 'hsl(var(--cyber-yellow))',
                textShadow: '1px 1px 0 hsl(var(--neon-purple)), 2px 2px 0 rgba(0,0,0,0.4)'
              }}
            >
              WILD STREETWEAR • CRAZY COLORS • NO LIMITS
            </h2>

            {/* Subtitle - Clean & Readable */}
            <p
              className="text-lg sm:text-xl md:text-2xl text-center mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'Fredoka, sans-serif',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
              }}
            >
              Explosive Fashion That Breaks All The Rules
            </p>

            {/* CTA Buttons - Prominent & Balanced */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/apparel">
                <button className="btn-primary text-base md:text-lg px-10 md:px-14 py-4 md:py-5 transform hover:scale-105 transition-all min-w-[280px] sm:min-w-0">
                  SHOP CRAZY CLOTHES
                </button>
              </Link>
              <Link href="/books">
                <button
                  className="px-10 md:px-14 py-4 md:py-5 rounded-full font-bold text-white border-4 border-blue hover:border-yellow hover:bg-purple/30 transition-all backdrop-blur-sm bg-card/60 text-base md:text-lg shadow-glow transform hover:scale-105 min-w-[280px] sm:min-w-0"
                  style={{ fontFamily: 'Righteous, sans-serif' }}
                >
                  MEET THE CREATOR
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apparel Section - PRIMARY FOCUS */}
      <section className="section-padding content-section bg-card/40 relative overflow-hidden border-y border-primary/10">
        {/* Neon orb effects */}
        <div className="neon-orb orb-pink" style={{ width: '480px', height: '480px', top: '5%', right: '3%', animationDelay: '1s' }} />
        <div className="neon-orb orb-purple" style={{ width: '420px', height: '420px', bottom: '8%', left: '4%', animationDelay: '3s' }} />
        <div className="neon-orb orb-yellow" style={{ width: '350px', height: '350px', top: '50%', left: '50%', animationDelay: '2s' }} />

        <div className="container">
          <div className="section-header">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Bangers, sans-serif', color: 'hsl(var(--electric-pink))', textShadow: '3px 3px 0 hsl(var(--cyber-yellow)), 6px 6px 0 hsl(var(--neon-purple)), 9px 9px 0 rgba(0,0,0,0.5)' }}>
              INSANE STREETWEAR!
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4" style={{ fontFamily: 'Righteous, sans-serif', color: 'hsl(var(--cyber-yellow))', textShadow: '2px 2px 0 hsl(var(--neon-purple)), 4px 4px 0 rgba(0,0,0,0.3)' }}>
              Colors That Pop • Designs That Rock
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Bold, vibrant, and unapologetically wild fashion that makes a statement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12">
            {[
              { title: 'NEON EXPLOSION HOODIE', design: 'Electric pink and purple gradient with wild graphics', price: '$49.99', color: 'Multi', image: '/generated/apparel-dragon-hoodie.png' },
              { title: 'RAINBOW BLAST TEE', design: 'Full spectrum color bomb design', price: '$34.99', color: 'White', image: '/generated/apparel-ethereal-hoodie.png' },
              { title: 'POP ART CREWNECK', design: 'Comic book style burst with bold colors', price: '$44.99', color: 'Black', image: '/generated/apparel-author-tee.png' },
              { title: 'CYBER WAVE HOODIE', design: 'Futuristic neon wave pattern', price: '$49.99', color: 'Navy', badge: 'NEW!', image: '/generated/apparel-dragon-hoodie.png' },
              { title: 'GRAFFITI BOMB JOGGERS', design: 'Street art inspired all-over print', price: '$54.99', color: 'Multi', image: '/generated/apparel-ethereal-hoodie.png' },
              { title: 'ELECTRIC DREAMS ZIP-UP', design: 'Psychedelic gradient hoodie', price: '$52.99', color: 'Purple/Pink', badge: 'HOT!', image: '/generated/apparel-author-tee.png' }
            ].map((item, idx) => (
              <div key={idx} className="card-enhanced group relative">
                {/* Box icon overlay */}
                <Box className="absolute top-2 left-2 w-8 h-8 text-white/10 group-hover:text-pink/30 transition-colors z-20" />

                {item.badge && (
                  <div className="absolute top-4 right-4 bg-wild-gradient text-white text-sm px-4 py-2 rounded-full z-10 font-bold shadow-glow uppercase tracking-wider transform rotate-12 flex items-center gap-1" style={{ fontFamily: 'Righteous, sans-serif' }}>
                    <Package className="w-4 h-4" />
                    {item.badge}
                  </div>
                )}
                <div className="aspect-square relative bg-card backdrop-blur-sm overflow-hidden transform transition-transform group-hover:scale-[1.02] border-4 border-transparent group-hover:border-pink/30">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60"></div>
                  {/* Box grid pattern overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" style={{
                    backgroundImage: 'linear-gradient(0deg, hsl(var(--electric-pink)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--electric-pink)) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 relative z-10 bg-gradient-to-b from-transparent to-card/50">
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 line-clamp-1 flex items-center gap-2" style={{ fontFamily: 'Righteous, sans-serif', textShadow: '2px 2px 0 hsl(var(--neon-purple)), 0 0 20px hsl(var(--electric-pink))' }}>
                      <Package className="w-4 h-4 sm:w-5 sm:h-5 text-pink flex-shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed line-clamp-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {item.design}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 sm:pt-3 border-t-4 border-pink">
                    <span className="text-yellow font-black text-2xl sm:text-3xl tracking-wide" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--neon-purple))' }}>{item.price}</span>
                    <span className="text-xs sm:text-sm text-white bg-purple px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 border-yellow uppercase tracking-wider font-bold shadow-glow" style={{ fontFamily: 'Righteous, sans-serif' }}>
                      {item.color}
                    </span>
                  </div>
                  <button className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full font-bold uppercase tracking-wider text-sm sm:text-base transform transition-all hover:scale-105 hover:rotate-2 bg-rainbow-gradient text-white shadow-glow flex items-center justify-center gap-2 group/btn" style={{ fontFamily: 'Righteous, sans-serif' }}>
                    <Box className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-45 transition-transform" />
                    <span>GRAB IT NOW!</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/apparel">
              <button className="btn-primary text-base sm:text-lg md:text-xl px-10 sm:px-14 md:px-16 py-4 sm:py-5 md:py-6 transform hover:rotate-3 hover:scale-110 w-full sm:w-auto max-w-md sm:max-w-none">
                SEE ALL CRAZY CLOTHES
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Creator - Lenny Stengel */}
      <section className="section-padding content-section relative overflow-hidden">
        {/* Neon orb effects */}
        <div className="neon-orb orb-blue" style={{ width: '520px', height: '520px', top: '15%', left: '-8%', animationDelay: '0.5s' }} />
        <div className="neon-orb orb-orange" style={{ width: '450px', height: '450px', bottom: '10%', right: '-3%', animationDelay: '2.5s' }} />
        <div className="neon-orb orb-green" style={{ width: '380px', height: '380px', top: '40%', right: '10%', animationDelay: '1.8s' }} />

        <div className="container">
          <div className="section-header">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Bangers, sans-serif', color: 'hsl(var(--cyber-yellow))', textShadow: '3px 3px 0 hsl(var(--electric-blue)), 6px 6px 0 hsl(var(--neon-purple)), 9px 9px 0 rgba(0,0,0,0.5)' }}>
              MEET THE CREATOR
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-pink mb-3 md:mb-4" style={{ fontFamily: 'Righteous, sans-serif', textShadow: '2px 2px 0 hsl(var(--electric-blue)), 4px 4px 0 rgba(0,0,0,0.3)' }}>
              Lenny Stengel • Designer & Author
            </p>
          </div>

          <div className="content-wide">
            <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="relative transform hover:scale-105 transition-transform">
                  <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-glow bg-rainbow-gradient p-2 relative transform rotate-3 hover:rotate-6 transition-transform">
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center border-4 border-yellow relative overflow-hidden">
                      <div className="absolute inset-0 bg-wild-gradient opacity-30 animate-pulse"></div>
                      <BookOpen className="w-40 h-40 lg:w-48 lg:h-48 text-pink relative z-10" style={{ filter: 'drop-shadow(0 0 30px hsl(var(--electric-pink)))' }} />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-rainbow-gradient text-white px-8 py-4 rounded-2xl shadow-glow font-black uppercase tracking-wider text-lg border-4 border-yellow transform -rotate-12" style={{ fontFamily: 'Bangers, sans-serif' }}>
                    3x PUBLISHED!
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 text-center md:text-left space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4 md:px-0" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    <span className="text-pink font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl block mb-2" style={{ fontFamily: 'Bangers, sans-serif', textShadow: '2px 2px 0 hsl(var(--cyber-yellow)), 4px 4px 0 rgba(0,0,0,0.3)' }}>LENNY STENGEL</span> brings wild creativity to everything—from explosive streetwear designs to published books that push boundaries and break the mold.
                  </p>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 md:px-0" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    With a passion for bold colors, crazy patterns, and designs that make you look twice, Lenny's clothing line "Inside and Outside the Boxx" is all about expressing yourself loudly and proudly. No rules, no limits—just pure creative energy.
                  </p>
                  <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed px-4 md:px-0" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    Check out the books page to learn more about Lenny's journey, philosophy, and what drives this wild creative vision. It's not just fashion—it's a lifestyle.
                  </p>
                </div>
                <div className="pt-4 md:pt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <Link href="/books">
                    <button className="btn-primary px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-base sm:text-lg transform hover:rotate-3 w-full sm:w-auto">
                      READ MY STORY
                    </button>
                  </Link>
                  <Link href="/apparel">
                    <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full font-bold text-white border-4 border-green hover:border-pink hover:bg-blue/30 transition-all backdrop-blur-sm bg-card/60 text-base sm:text-lg shadow-glow transform hover:-rotate-2 w-full sm:w-auto" style={{ fontFamily: 'Righteous, sans-serif' }}>
                      SHOP THE COLLECTION
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding content-section bg-gradient-to-b from-card/40 to-card/70 backdrop-blur-sm relative overflow-hidden border-t-4 border-pink">
        {/* Neon orb effects */}
        <div className="neon-orb orb-pink" style={{ width: '500px', height: '500px', top: '25%', left: '50%', transform: 'translateX(-50%)', animationDelay: '1.5s' }} />
        <div className="neon-orb orb-purple" style={{ width: '420px', height: '420px', bottom: '10%', right: '10%', animationDelay: '2s' }} />

        <div className="container">
          <div className="content-center">
            <div className="text-center space-y-8">
              <div className="inline-block p-4 sm:p-6 rounded-3xl bg-rainbow-gradient mb-4 sm:mb-6 shadow-glow transform hover:rotate-6 transition-transform">
                <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white" style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Bangers, sans-serif', color: 'hsl(var(--electric-pink))', textShadow: '2px 2px 0 hsl(var(--cyber-yellow)), 4px 4px 0 hsl(var(--electric-blue)), 6px 6px 0 rgba(0,0,0,0.4)' }}>
                JOIN THE CREW!
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Get the inside scoop on new drops, exclusive designs, limited releases, and all the wild stuff coming your way. Be first to know when crazy new gear hits the shop!
              </p>
              <form className="max-w-2xl mx-auto pt-4 sm:pt-6 px-4">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="flex-1 px-6 sm:px-8 py-4 sm:py-5 bg-card/80 border-4 border-purple text-white placeholder:text-white/50 focus:outline-none focus:border-pink transition-all backdrop-blur-sm rounded-2xl text-base sm:text-lg shadow-glow w-full"
                    style={{ fontFamily: 'Fredoka, sans-serif' }}
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg transform hover:rotate-3 w-full sm:w-auto">
                    LET'S GO!
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-white/70 mt-4 sm:mt-6" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  No spam, just the good stuff. Unsubscribe anytime you want.
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
