'use client'

interface BoxxLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

export default function BoxxLogo({ size = 'md', animated = true, className = '' }: BoxxLogoProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl'
  }

  const innerSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* INSIDE */}
      <span
        className={`font-bold ${sizeClasses[size]} text-pink uppercase tracking-wider`}
        style={{
          fontFamily: 'Bangers, sans-serif',
          textShadow: '3px 3px 0 hsl(var(--cyber-yellow)), 6px 6px 0 hsl(var(--neon-purple)), 9px 9px 0 rgba(0,0,0,0.3)',
          ...(animated && { animation: 'magical-float 3s ease-in-out infinite' })
        }}
      >
        INSIDE
      </span>

      {/* & */}
      <span
        className={`font-bold ${sizeClasses[size]} text-yellow`}
        style={{
          fontFamily: 'Bangers, sans-serif',
          textShadow: '3px 3px 0 hsl(var(--electric-blue)), 6px 6px 0 rgba(0,0,0,0.3)'
        }}
      >
        &
      </span>

      {/* O with 13 inside */}
      <span className="relative inline-flex items-center justify-center">
        <span
          className={`font-bold ${sizeClasses[size]} text-purple uppercase`}
          style={{
            fontFamily: 'Bangers, sans-serif',
            textShadow: '3px 3px 0 hsl(var(--hot-orange)), 6px 6px 0 rgba(0,0,0,0.3)'
          }}
        >
          O
        </span>
        <span
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-black ${innerSizeClasses[size]} text-orange`}
          style={{
            fontFamily: 'Righteous, sans-serif',
            textShadow: '2px 2px 0 hsl(var(--electric-pink)), 4px 4px 0 rgba(0,0,0,0.4)',
            zIndex: 10
          }}
        >
          13
        </span>
      </span>

      {/* UTSIDE */}
      <span
        className={`font-bold ${sizeClasses[size]} text-purple uppercase tracking-wider`}
        style={{
          fontFamily: 'Bangers, sans-serif',
          textShadow: '3px 3px 0 hsl(var(--electric-blue)), 6px 6px 0 hsl(var(--lime-green)), 9px 9px 0 rgba(0,0,0,0.3)',
          ...(animated && { animation: 'magical-float 3s ease-in-out infinite', animationDelay: '0.5s' })
        }}
      >
        UTSIDE
      </span>

      {/* THE BOXX */}
      <div className="flex flex-col items-start ml-2">
        <span
          className={`font-bold ${innerSizeClasses[size]} text-blue uppercase tracking-wider leading-none`}
          style={{
            fontFamily: 'Bangers, sans-serif',
            textShadow: '2px 2px 0 hsl(var(--lime-green)), 4px 4px 0 rgba(0,0,0,0.3)'
          }}
        >
          THE
        </span>
        <span
          className={`font-bold ${innerSizeClasses[size]} text-green uppercase tracking-wider leading-none`}
          style={{
            fontFamily: 'Bangers, sans-serif',
            textShadow: '2px 2px 0 hsl(var(--electric-pink)), 4px 4px 0 rgba(0,0,0,0.3)'
          }}
        >
          BOXX
        </span>
      </div>
    </div>
  )
}
