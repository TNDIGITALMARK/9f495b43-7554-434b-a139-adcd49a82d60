'use client'

import Image from 'next/image'

interface BoxxLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

export default function BoxxLogo({ size = 'md', animated = true, className = '' }: BoxxLogoProps) {
  const sizeConfig = {
    xs: { width: 45, height: 45 },
    sm: { width: 70, height: 70 },
    md: { width: 120, height: 120 },
    lg: { width: 160, height: 160 },
    xl: { width: 200, height: 200 }
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
        priority
        style={{
          filter: 'drop-shadow(0 0 20px rgba(255, 0, 128, 0.4))',
          width: dimensions.width,
          height: dimensions.height
        }}
      />
    </div>
  )
}
