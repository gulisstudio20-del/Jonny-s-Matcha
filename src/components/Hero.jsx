import { motion, useReducedMotion } from 'framer-motion'
import heroBowl from '../../assets/images/hero-bowl.png'

const ease = [0.16, 1, 0.3, 1]

const containerV = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const itemV = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
}

const stats = [
  { value: '#1',   label: 'בישראל' },
  { value: '4.9★', label: 'דירוג ממוצע' },
  { value: '+5K',  label: 'לקוחות' },
]

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="hero" className="hero-split" aria-label="כותרת ראשית">

      {/* ── RIGHT: Text content (first in DOM = right in RTL) ── */}
      <motion.div
        className="hero-split-text"
        variants={reduced ? {} : containerV}
        initial="hidden"
        animate="visible"
        style={{
          background: 'var(--bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: 'clamp(6rem, 10vw, 8rem) clamp(2rem, 4vw, 4.5rem) clamp(3rem, 6vw, 5rem)',
        }}
      >
        <div style={{ width: '100%', maxWidth: '30rem' }}>

          <motion.p
            variants={reduced ? {} : itemV}
            className="section-label-en"
            dir="ltr"
            style={{ marginBottom: '2rem' }}
          >
            CEREMONIAL GRADE · UJI, JAPAN
          </motion.p>

          <motion.h1 variants={reduced ? {} : itemV} style={{ marginBottom: '1.75rem' }}>
            <span dir="ltr" style={{
              display: 'block',
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(3.4rem, 6.5vw, 8rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: 'var(--ink)',
            }}>
              jonny's
            </span>
            <span dir="ltr" style={{
              display: 'block',
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(3.4rem, 6.5vw, 8rem)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: 'var(--accent)',
              marginTop: '0.06em',
            }}>
              matcha
            </span>
          </motion.h1>

          <motion.div
            variants={reduced ? {} : itemV}
            style={{ height: '1px', background: 'var(--line-2)', margin: '1.75rem 0' }}
          />

          <motion.p variants={reduced ? {} : itemV} style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)',
            color: 'var(--mute)',
            lineHeight: 1.85,
            marginBottom: '2.25rem',
          }}>
            מאצ׳ה טקסי מדרג ראשון מהאזורים הטובים ביותר של אוג׳י, יפן. כוס אחת ותבינו את ההבדל.
          </motion.p>

          <motion.div
            variants={reduced ? {} : itemV}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '3rem' }}
          >
            <a href="#products" className="btn-dark">
              <span>לחנות</span>
              <span aria-hidden="true">←</span>
            </a>
            <a href="#about" className="btn-outline">גלו עוד</a>
          </motion.div>

          <motion.div
            variants={reduced ? {} : itemV}
            style={{ display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'flex-start' }}
            role="list"
            aria-label="נתוני אמון"
          >
            {stats.map((s) => (
              <div key={s.label} role="listitem">
                <strong style={{
                  display: 'block',
                  fontFamily: 'var(--f-body)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: 900,
                  color: 'var(--ink)',
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                  direction: 'ltr',
                }}>
                  {s.value}
                </strong>
                <span style={{
                  fontFamily: 'var(--f-body)',
                  fontSize: '1rem',
                  color: 'var(--mute)',
                  fontWeight: 600,
                  display: 'block',
                  marginTop: '0.35rem',
                  lineHeight: 1.3,
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* ── LEFT: Dark green + image (second in DOM = left in RTL) ── */}
      <motion.div
        className="hero-split-image"
        initial={reduced ? {} : { opacity: 0 }}
        animate={reduced ? {} : { opacity: 1 }}
        transition={{ duration: 1.3, ease }}
        style={{ position: 'relative', background: '#090F07', overflow: 'hidden' }}
      >
        {/* Large kanji watermark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'serif',
            fontWeight: 900,
            fontSize: 'clamp(14rem, 26vw, 34rem)',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.04)',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          抹茶
        </div>

        {/* Green radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(61,110,28,0.3) 0%, transparent 70%)',
            filter: 'blur(50px)',
            zIndex: 1,
          }}
        />

        {/* Hero image */}
        <img
          src={heroBowl}
          alt="קערת מאצ׳ה סרמוניאלית מוכנה לשתייה"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.7,
            zIndex: 2,
          }}
          loading="eager"
          fetchPriority="high"
        />

        {/* Top + bottom gradients for readability */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to bottom, rgba(9,15,7,0.55) 0%, transparent 22%),
              linear-gradient(to top,   rgba(9,15,7,0.75) 0%, transparent 55%)
            `,
            zIndex: 3,
          }}
        />

        {/* Top badge */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, x: -16 }}
          animate={reduced ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            padding: '0.5rem 1.1rem',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.15)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(242,237,226,0.9)',
            zIndex: 4,
          }}
        >
          100% אורגני
        </motion.div>

        {/* Bottom price pill */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
          aria-label="מחיר מתחיל מ-₪129"
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.7rem 1.3rem',
            borderRadius: '999px',
            background: 'rgba(9,15,7,0.88)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)',
            zIndex: 4,
          }}
        >
          <span style={{ fontSize: '0.8rem', color: 'rgba(242,237,226,0.45)', letterSpacing: '0.08em' }}>
            מתחיל מ
          </span>
          <strong style={{
            fontFamily: 'var(--f-display)',
            fontSize: '1.25rem',
            fontWeight: 800,
            color: 'var(--bg)',
            letterSpacing: '-0.02em',
          }}>
            ₪129
          </strong>
        </motion.div>

        {/* Vertical "MATCHA" text on edge */}
        <div
          aria-hidden="true"
          dir="ltr"
          style={{
            position: 'absolute',
            bottom: '3rem',
            left: '1.25rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
            writingMode: 'vertical-rl',
            zIndex: 4,
          }}
        >
          UJI · KYOTO · JAPAN
        </div>

      </motion.div>
    </section>
  )
}
