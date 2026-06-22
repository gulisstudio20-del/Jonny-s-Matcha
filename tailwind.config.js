/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:      { DEFAULT: '#F2EDE2', 2: '#EAE3D5', paper: '#F9F6F0' },
        ink:     { DEFAULT: '#0A1407', 2: '#1C2E18', soft: '#6B6457', muted: '#9C9488' },
        accent:  { DEFAULT: '#3D6E1C', 2: '#5A9B2A' },
        mute:    { DEFAULT: '#6B6457', 2: '#9C9488' },
        /* legacy aliases for components not yet updated */
        forest:  { DEFAULT: '#0A1407', mid: '#1C2E18', light: '#2A4020' },
        matcha:  { DEFAULT: '#5A9B2A', dark: '#3D6E1C', pale: '#E4EDD8', soft: '#B8D896', mist: '#F0F5E8' },
        gold:    { DEFAULT: '#8A7A5A', light: '#C8BE9C', dark: '#5A4E30' },
        cream:   { DEFAULT: '#F2EDE2', warm: '#F9F6F0', dark: '#EAE3D5' },
      },
      fontFamily: {
        sans:    ['Heebo', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        serif:   ['Heebo', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3.8rem,9vw,8rem)',   { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        hero:    ['clamp(3rem,6.5vw,6rem)',    { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        section: ['clamp(2.2rem,5vw,4rem)',    { lineHeight: '1.1',  letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      maxWidth: { site: '1280px' },
      boxShadow: {
        card: '0 2px 16px rgba(10,20,7,0.07)',
        'card-hover': '0 8px 32px rgba(10,20,7,0.13)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  safelist: [
    'text-display', 'text-section', 'text-hero',
    'bg-bg', 'bg-bg-2', 'bg-bg-paper',
    'text-ink', 'text-ink-2', 'text-accent', 'text-accent-2',
    'text-mute', 'text-mute-2',
    /* ink shades */
    'text-ink-soft', 'text-ink-muted', 'border-ink-soft',
    /* legacy */
    'text-forest', 'bg-forest', 'bg-forest-mid',
    'text-matcha', 'text-matcha-dark', 'text-matcha-soft', 'bg-matcha-pale', 'bg-matcha-mist',
    'border-matcha', 'hover:border-matcha', 'hover:text-matcha-dark',
    'bg-cream', 'bg-cream-warm', 'bg-cream-dark', 'text-cream',
    'bg-white', 'bg-white/10', 'border-white/10',
    'shadow-card', 'shadow-card-hover',
  ],
  plugins: [],
}
