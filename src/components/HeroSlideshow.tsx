'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const SLIDESHOW_IMAGES = [
  '/generated/hero-bg-1.png',
  '/generated/hero-bg-2.png',
  '/generated/hero-bg-3.png',
  '/generated/hero-bg-4.png',
]

const TRANSITION_DURATION = 6000 // 6 seconds per image
const FADE_DURATION = 1500 // 1.5 seconds fade transition

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDESHOW_IMAGES.length)
    }, TRANSITION_DURATION)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background slideshow container */}
      <div className="absolute inset-0 pointer-events-none">
        {SLIDESHOW_IMAGES.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{
              opacity: currentIndex === index && isLoaded ? 1 : 0,
              zIndex: currentIndex === index ? 1 : 0,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`Fantasy background ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                quality={90}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10 pointer-events-none" />

      {/* Slideshow indicators - positioned at bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3 pointer-events-auto">
        {SLIDESHOW_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'w-10 bg-yellow shadow-glow'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
