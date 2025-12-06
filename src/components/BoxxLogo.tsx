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
        src="https://77e93381c682217fcef0325458269ad5.r2.cloudflarestorage.com/phoenix/users/DxnmDi7kzHNtCxrnSWG6FJ4Bplz2/projects/9f495b43-7554-434b-a139-adcd49a82d60/imageContext/279196aa-ebf5-4087-b046-ed0d6c669608.png"
        alt="Inside & Outside The Boxx Logo"
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
