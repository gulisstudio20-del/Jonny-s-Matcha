/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0B1A09',
          mid: '#152B12',
          light: '#1E3D1A',
        },
        matcha: {
          DEFAULT: '#79B835',
          dark: '#5A8A25',
          pale: '#E5F1CE',
          soft: '#C3DF96',
          mist: '#F1F8E7',
        },
        gold: {
          DEFAULT: '#C9A85C',
          light: '#E8D5A4',
          dark: '#9A7D3A',
        },
        cream: {
          DEFAULT: '#F7F3EC',
          warm: '#FAF7F2',
          dark: '#EDE7DC',
        },
        ink: {
          DEFAULT: '#18120A',
          soft: '#6A5D52',
          muted: '#9A8E86',
        },
      },
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
        serif: ['Frank Ruhl Libre', 'Playfair Display', 'serif'],
        display: ['Frank Ruhl Libre', 'serif'],
      },
      fontSize: {
        display: ['clamp(3.8rem,9vw,7.2rem)',  { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        hero:    ['clamp(3rem,6.5vw,5.5rem)',  { lineHeight: '1.12' }],
        section: ['clamp(2.4rem,5vw,4.2rem)',  { lineHeight: '1.15' }],
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      maxWidth: { site: '1280px' },
      animation: {
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(1.5deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-matcha': 'linear-gradient(130deg, #79B835 0%, #C9A85C 100%)',
        'gradient-forest': 'linear-gradient(160deg, #0B1A09 0%, #1E3D1A 100%)',
        'gradient-gold': 'linear-gradient(130deg, #C9A85C 0%, #E8D5A4 100%)',
      },
      boxShadow: {
        'glow-matcha': '0 0 80px rgba(121,184,53,0.18)',
        'glow-gold': '0 0 60px rgba(201,168,92,0.14)',
        'card': '0 4px 32px rgba(24,18,10,0.06)',
        'card-hover': '0 16px 64px rgba(24,18,10,0.1)',
        'glass': '0 8px 32px rgba(24,18,10,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
    },
  },
  safelist: [
    // ink colors — forced generation for @apply usage
    'text-ink', 'text-ink-soft', 'text-ink-muted',
    'bg-ink', 'bg-ink-soft',
    'border-ink',
    // forest
    'text-forest', 'bg-forest', 'bg-forest-mid', 'bg-forest-light',
    // matcha
    'text-matcha', 'text-matcha-dark', 'text-matcha-soft', 'text-matcha-pale',
    'bg-matcha', 'bg-matcha-dark', 'bg-matcha-pale', 'bg-matcha-mist', 'bg-matcha-soft',
    'border-matcha', 'border-matcha-dark',
    // gold
    'text-gold', 'text-gold-dark', 'text-gold-light',
    'bg-gold', 'bg-gold-dark', 'bg-gold-light',
    // cream
    'text-cream', 'bg-cream', 'bg-cream-warm', 'bg-cream-dark',
    // white with opacity
    'bg-white/10', 'bg-white/20', 'border-white/10', 'border-white/20',
    // section/font sizes
    'text-display', 'text-section', 'text-hero',
  ],
  plugins: [],
}
