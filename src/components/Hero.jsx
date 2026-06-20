import { motion, useReducedMotion } from 'framer-motion'
import heroBowl from '../../assets/images/hero-bowl.png'
import { stagger, fadeUp } from '../animations'

const trustStats = [
  { value: '10K+', label: 'לקוחות' },
  { value: '4.9★', label: 'דירוג' },
  { value: '100%', label: 'אורגני' },
  { value: 'אוג׳י', label: 'מקור' },
]

export default function Hero() {
  const reduced = useReducedMotion()
  const container = stagger(0.11)
  const item = reduced ? { hidden: {}, visible: {} } : fadeUp

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16"
      style={{ background: 'linear-gradient(160deg, #0B1A09 0%, #152B12 55%, #1A3518 100%)' }}
      aria-label="כותרת ראשית"
    >
      {/* Aurora — decorative only */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 55% 70% at 20% 60%, rgba(121,184,53,0.12) 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 85% 20%, rgba(201,168,92,0.08) 0%, transparent 60%)
          `,
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.55) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.55) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.06,
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 xl:gap-20">

          {/* Content */}
          <motion.div variants={container} initial="hidden" animate="visible">

            <motion.div variants={item} className="mb-7">
              <div className="gradient-border-wrap inline-block rounded-full">
                <span className="block bg-forest-mid text-white/70 text-[0.7rem] font-semibold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full">
                  Ceremonial Grade · Uji, Kyoto
                </span>
              </div>
            </motion.div>

            {/* Headline — overflow:visible so italic doesn't clip */}
            <motion.h1 variants={item} className="mb-7" style={{ overflow: 'visible', lineHeight: 1.1 }}>
              <span className="block font-serif font-black text-white/90 text-display tracking-tight">
                מאצ׳ה
              </span>
              <span className="font-serif italic text-gradient text-display" style={{ lineHeight: 1.25 }}>
                שמרגישים
              </span>
              <span className="block font-serif font-black text-white/80 text-display tracking-tight">
                בכל לגימה
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-white/55 text-xl leading-[1.8] max-w-[460px] mb-10">
              כוס אחת בטוקיו שינתה הכל. ביפן מאצ׳ה היא טקס — בישראל לא מצאנו שום דבר קרוב לזה.
              אז הקמנו קשר ישיר עם גדלנים משפחתיים באוג׳י, קיוטו. בלי ביניים. בלי פשרות.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-12">
              <a href="#products" className="btn-gradient">
                <span>גלו את המוצרים</span>
                <span aria-hidden="true">←</span>
              </a>
              <a href="#process" className="btn-ghost-dark">איך זה עובד?</a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-px overflow-hidden rounded-2xl border border-white/10"
              role="list"
              aria-label="נתוני אמון"
            >
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 min-w-[70px] px-4 py-3.5 text-center"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                  role="listitem"
                >
                  <strong className="block text-xl font-black text-white leading-tight">{stat.value}</strong>
                  <span className="text-xs text-white/40 mt-0.5 block">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={reduced ? {} : { opacity: 0, scale: 0.88 }}
            animate={reduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Glow */}
            <div
              className="absolute w-[110%] aspect-square rounded-full pointer-events-none"
              aria-hidden="true"
              style={{ background: 'radial-gradient(circle, rgba(121,184,53,0.18) 0%, rgba(121,184,53,0.05) 45%, transparent 70%)' }}
            />
            <div className="absolute w-[82%] aspect-square rounded-full border border-white/[0.05] pointer-events-none" aria-hidden="true" />

            <img
              src={heroBowl}
              alt="קערת מאצ׳ה סרמוניאלית מוכנה לשתייה"
              className={`relative w-full max-w-[460px] rounded-4xl object-cover z-10
                          drop-shadow-[0_32px_64px_rgba(0,0,0,0.5)]
                          ${reduced ? '' : 'animate-float'}`}
              width="460" height="460"
              loading="eager"
              fetchPriority="high"
            />

            {/* Floating badges */}
            <div className="absolute bottom-6 -right-2 glass-card px-4 py-3 z-20" aria-hidden="true">
              <p className="text-white/45 text-[0.66rem] font-medium uppercase tracking-wider">Single Origin</p>
              <p className="text-white font-bold text-sm mt-0.5">Uji, Kyoto 🇯🇵</p>
            </div>
            <div className="absolute top-8 -left-2 glass-card px-4 py-3 z-20" aria-hidden="true">
              <p className="text-white font-bold text-sm">Ceremonial Grade</p>
              <p className="text-matcha-soft text-[0.68rem] mt-0.5">אורגני מוסמך</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" aria-hidden="true">
        <span className="text-white/25 text-[0.62rem] tracking-[0.2em] uppercase">גלול</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  )
}
