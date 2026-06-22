import { motion, useReducedMotion } from 'framer-motion'
import heroBowl from '../../assets/images/hero-bowl.png'

const ease = [0.16, 1, 0.3, 1]

const containerV = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ background: 'var(--bg)' }}
      aria-label="כותרת ראשית"
    >
      {/* Subtle background texture mark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-2%',
          left: '-1%',
          fontFamily: 'var(--f-display)',
          fontWeight: 800,
          fontSize: 'clamp(18rem, 28vw, 36rem)',
          lineHeight: 1,
          color: 'rgba(10,20,7,0.028)',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        抹茶
      </div>

      <div className="container relative z-10">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 26rem), 1fr))',
            alignItems: 'center',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
          }}
        >
          {/* ── Text (RIGHT in RTL = first in DOM) ── */}
          <motion.div
            variants={reduced ? {} : containerV}
            initial="hidden"
            animate="visible"
          >
            {/* Grade label */}
            <motion.p
              variants={reduced ? {} : itemV}
              className="section-label-en"
              style={{ marginBottom: '2.5rem' }}
              dir="ltr"
            >
              CEREMONIAL GRADE · UJI, JAPAN
            </motion.p>

            {/* Brand name */}
            <motion.h1 variants={reduced ? {} : itemV} style={{ marginBottom: '1.75rem' }}>
              <span
                dir="ltr"
                style={{
                  display: 'block',
                  fontFamily: 'var(--f-display)',
                  fontSize: 'clamp(3.8rem, 9vw, 8rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.92,
                  color: 'var(--ink)',
                }}
              >
                jonny's
              </span>
              <span
                dir="ltr"
                style={{
                  display: 'block',
                  fontFamily: 'var(--f-display)',
                  fontSize: 'clamp(3.8rem, 9vw, 8rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.92,
                  color: 'var(--accent)',
                  marginTop: '0.05em',
                }}
              >
                matcha
              </span>
            </motion.h1>

            {/* Separator */}
            <motion.div
              variants={reduced ? {} : itemV}
              style={{ height: '1px', background: 'var(--line-2)', margin: '2rem 0' }}
            />

            {/* Subtitle */}
            <motion.p
              variants={reduced ? {} : itemV}
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)',
                color: 'var(--mute)',
                lineHeight: 1.85,
                maxWidth: '440px',
                marginBottom: '2.5rem',
              }}
            >
              מאצ׳ה טקסי מדרג ראשון מהאזורים הטובים ביותר של אוג׳י, יפן. כוס אחת ותבינו את ההבדל.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={reduced ? {} : itemV}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '3.5rem' }}
            >
              <a href="#products" className="btn-dark">
                <span>לחנות</span>
                <span aria-hidden="true">←</span>
              </a>
              <a href="#about" className="btn-outline">גלו עוד</a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={reduced ? {} : itemV}
              style={{ display: 'flex', gap: 'clamp(2rem, 4.5vw, 3.5rem)', alignItems: 'flex-start' }}
              role="list"
              aria-label="נתוני אמון"
            >
              {stats.map((s) => (
                <div key={s.label} role="listitem" style={{ minWidth: '4rem' }}>
                  <strong
                    style={{
                      display: 'block',
                      fontFamily: 'var(--f-body)',
                      fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                      fontWeight: 900,
                      color: 'var(--ink)',
                      lineHeight: 1,
                      letterSpacing: '-0.01em',
                      direction: 'ltr',
                    }}
                  >
                    {s.value}
                  </strong>
                  <span
                    style={{
                      fontFamily: 'var(--f-body)',
                      fontSize: '1rem',
                      color: 'var(--mute)',
                      fontWeight: 600,
                      display: 'block',
                      marginTop: '0.35rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Image (LEFT in RTL = second in DOM) ── */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 0.94 }}
            animate={reduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                aspectRatio: '4/5',
                background: 'var(--bg-2)',
              }}
            >
              <img
                src={heroBowl}
                alt="קערת מאצ׳ה סרמוניאלית מוכנה לשתייה"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="eager"
                fetchPriority="high"
                width="440"
                height="550"
              />

              {/* Bottom price pill */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  right: '1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.6rem 1.1rem',
                  borderRadius: '999px',
                  background: 'rgba(10,20,7,0.82)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'rgba(242,237,226,0.5)', letterSpacing: '0.08em' }}>
                  מתחיל מ
                </span>
                <strong
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: 'var(--bg)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ₪129
                </strong>
              </div>

              {/* Top-right label */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  background: 'var(--bg)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                100% אורגני
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
