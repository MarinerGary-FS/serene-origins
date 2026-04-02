import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0a0908',
        surface: '#0f0e0c',
        card: '#171512',
        elevated: '#1e1b17',
        'border-subtle': 'rgba(255,255,255,0.06)',
        'border-default': 'rgba(255,255,255,0.10)',
        cream: '#eee5d3',
        'cream-dim': '#b8aa97',
        muted: '#6b6055',
        sage: '#8aa089',
        'sage-dim': 'rgba(138,160,137,0.12)',
        gold: '#b8956a',
        'gold-dim': 'rgba(184,149,106,0.12)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.4rem, 6vw, 4.2rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.8rem, 4vw, 2.8rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'card-title': ['1.35rem', { lineHeight: '1.3' }],
      },
      maxWidth: {
        content: '1100px',
        prose: '660px',
      },
      spacing: {
        'section': '7rem',
        'section-sm': '4.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
