'use client'

import Image from 'next/image'

interface BoxxLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

export default function BoxxLogo({ size = 'md', animated = true, className = '' }: BoxxLogoProps) {
  const sizeConfig = {
    sm: { width: 40, height: 40 },
    md: { width: 60, height: 60 },
    lg: { width: 80, height: 80 },
    xl: { width: 100, height: 100 }
  }

  const dimensions = sizeConfig[size]

  return (
    <div
      className={`inline-flex items-center ${className}`}
      style={{
        ...(animated && { animation: 'magical-float 3s ease-in-out infinite' })
      }}
    >
      <Image
        src="/logo.png"
        alt="Inside & Outside 13 The Boxx Logo"
        width={dimensions.width}
        height={dimensions.height}
        className="w-auto h-auto"
        priority
        style={{
          filter: 'drop-shadow(0 0 20px rgba(255, 0, 128, 0.4))'
        }}
      />
    </div>
  )
}
