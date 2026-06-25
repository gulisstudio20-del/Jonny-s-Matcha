import { motion, useReducedMotion } from 'framer-motion'
import heroBowl from '../../assets/images/hero-latte.jpg'

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
          justifyContent: 'flex-end',
          padding: 'clamp(6rem, 10vw, 8rem) clamp(2rem, 4vw, 4.5rem) clamp(3rem, 6vw, 5rem)',
        }}
      >
        <div style={{ width: '100%', maxWidth: '32rem' }}>

          <motion.h1
            variants={reduced ? {} : itemV}
            style={{ marginBottom: '2rem', lineHeight: 0.88 }}
          >
            <span dir="ltr" style={{
              display: 'block',
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(5rem, 10.5vw, 13rem)',
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
              fontSize: 'clamp(5rem, 10.5vw, 13rem)',
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
            fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)',
            color: 'rgba(242,237,226,0.62)',
            lineHeight: 1.85,
            marginBottom: '2.5rem',
            maxWidth: '28rem',
          }}>
            מאצ׳ה סרמוניאלית מדרג ראשון, ישירות מגדלנים משפחתיים באוג׳י, קיוטו. כוס אחת ותבינו את ההבדל.
          </motion.p>

          <motion.div
            variants={reduced ? {} : itemV}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}
          >
            <a href="#products" className="btn-white">
              <span>לחנות</span>
              <span aria-hidden="true">←</span>
            </a>
            <a
              href="#about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.95rem 2.2rem',
                borderRadius: '999px',
                border: '1px solid rgba(242,237,226,0.22)',
                color: 'rgba(242,237,226,0.78)',
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(242,237,226,0.5)'
                e.currentTarget.style.color = 'rgba(242,237,226,1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(242,237,226,0.22)'
                e.currentTarget.style.color = 'rgba(242,237,226,0.78)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              גלו עוד
            </a>
          </motion.div>

          <motion.p
            variants={reduced ? {} : itemV}
            dir="ltr"
            style={{
              marginTop: '3rem',
              fontFamily: 'var(--f-display)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(242,237,226,0.25)',
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
          src={heroBowl}
          alt="קערת מאצ׳ה סרמוניאלית מוכנה לשתייה"
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

        {/* Bottom price detail */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 14 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease }}
          aria-label="מחיר מתחיל מ-₪129"
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: '0.5rem',
            zIndex: 4,
          }}
        >
          <span style={{
            fontSize: '0.72rem',
            color: 'rgba(242,237,226,0.38)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            מתחיל מ
          </span>
          <strong style={{
            fontFamily: 'var(--f-display)',
            fontSize: '1.6rem',
            fontWeight: 700,
            color: 'rgba(242,237,226,0.9)',
            letterSpacing: '-0.02em',
          }}>
            ₪129
          </strong>
        </motion.div>

        {/* Vertical text edge detail */}
        <div
          aria-hidden="true"
          dir="ltr"
          style={{
            position: 'absolute',
            bottom: '3rem',
            left: '1.25rem',
            fontFamily: 'var(--f-display)',
            fontSize: '0.58rem',
            fontWeight: 700,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
            writingMode: 'vertical-rl',
            zIndex: 4,
          }}
        >
          Ceremonial Grade · Single Origin
        </div>

      </motion.div>
    </section>
  )
}
