import { motion, useReducedMotion } from 'framer-motion'
import heroLifestyle from '../../assets/images/matcha-lifestyle.jpg'

const ease = [0.16, 1, 0.3, 1]

const containerV = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}
const itemV = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
}

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
          background: '#090F07',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          /* padding is in .hero-split-text CSS with mobile override */
        }}
      >
        <div style={{ width: '100%', maxWidth: 'min(32rem, 100%)' }}>

          <motion.h1
            variants={reduced ? {} : itemV}
            style={{ marginBottom: '1.75rem', lineHeight: 0.88 }}
          >
            <span dir="ltr" style={{
              display: 'block',
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(3.4rem, 11vw, 13rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 0.88,
              color: 'var(--bg)',
            }}>
              jonny's
            </span>
            <span dir="ltr" style={{
              display: 'block',
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(3.4rem, 11vw, 13rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 0.88,
              color: 'var(--accent-2)',
              marginTop: '0.04em',
            }}>
              matcha
            </span>
          </motion.h1>

          <motion.div
            variants={reduced ? {} : itemV}
            style={{ height: '1px', background: 'rgba(242,237,226,0.12)', margin: '2rem 0' }}
          />

          <motion.p variants={reduced ? {} : itemV} style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)',
            color: 'rgba(242,237,226,0.62)',
            lineHeight: 1.85,
            marginBottom: '2rem',
            maxWidth: 'min(28rem, 100%)',
          }}>
            מאצ׳ה סרמוניאלית אורגנית, ישירות מאוג׳י שביפן.
            <br />
            פשוט תשתו.
          </motion.p>

          <motion.div
            variants={reduced ? {} : itemV}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}
          >
            <a href="#about" className="btn-white">
              <span>גלו עוד</span>
              <span aria-hidden="true">←</span>
            </a>
          </motion.div>

          <motion.p
            variants={reduced ? {} : itemV}
            dir="ltr"
            style={{
              marginTop: '3rem',
              fontFamily: 'var(--f-display)',
              fontSize: '1.1rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(242,237,226,0.45)',
            }}
          >
            Uji · Kyoto · Japan
          </motion.p>

        </div>
      </motion.div>

      {/* ── LEFT: Dark green + image (second in DOM = left in RTL) ── */}
      <motion.div
        className="hero-split-image"
        initial={reduced ? {} : { opacity: 0 }}
        animate={reduced ? {} : { opacity: 1 }}
        transition={{ duration: 1.4, ease }}
        style={{ position: 'relative', background: '#090F07', overflow: 'hidden' }}
      >
        {/* Green radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(61,110,28,0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
            zIndex: 1,
          }}
        />

        {/* Hero image */}
        <img
          src={heroLifestyle}
          alt="מאצ׳ה קרה בכוסות, מוגשת ברחוב"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.72,
            zIndex: 2,
          }}
          loading="eager"
          fetchPriority="high"
        />

        {/* Gradient overlays */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to bottom, rgba(9,15,7,0.5) 0%, transparent 25%),
              linear-gradient(to top,   rgba(9,15,7,0.7) 0%, transparent 50%)
            `,
            zIndex: 3,
          }}
        />

        {/* Vertical text edge detail — hidden on mobile */}
        <div
          className="hero-vertical-label"
          aria-hidden="true"
          dir="rtl"
          style={{
            position: 'absolute',
            bottom: '3rem',
            left: '1.25rem',
            fontFamily: 'var(--f-body)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.25)',
            writingMode: 'vertical-rl',
            zIndex: 4,
          }}
        >
          מאצ׳ה סרמוניאלית · אוג׳י
        </div>

      </motion.div>
    </section>
  )
}
