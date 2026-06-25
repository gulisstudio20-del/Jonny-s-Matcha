import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function Quote() {
  return (
    <section
      style={{
        paddingBlock: 'clamp(4rem, 9vw, 7rem)',
        background: 'var(--ink)',
        overflow: 'hidden',
        position: 'relative',
      }}
      aria-label="ציטוט"
    >
      {/* Decorative watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--f-display)',
          fontWeight: 800,
          fontSize: 'clamp(14rem, 30vw, 28rem)',
          lineHeight: 1,
          color: 'rgba(242,237,226,0.03)',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.05em',
          whiteSpace: 'nowrap',
        }}
      >
        ״
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.figure
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
          style={{ margin: 0 }}
        >
          {/* Stars */}
          <div
            style={{ display: 'flex', gap: '0.3rem', marginBottom: '2.5rem', justifyContent: 'center' }}
            role="img"
            aria-label="5 כוכבים"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                aria-hidden="true"
                style={{ color: 'rgba(242,237,226,0.5)', fontSize: '0.85rem' }}
              >
                ★
              </span>
            ))}
          </div>

          <blockquote style={{ margin: 0 }}>
            <p
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                color: 'rgba(242,237,226,0.9)',
                marginBottom: '2.5rem',
                maxWidth: '42rem',
                marginInline: 'auto',
              }}
            >
              ״שתיתי מאצ׳ה בכל רחבי יפן — ואני לא מוצא הבדל בין jonny's לבין מה שמגישים בקיוטו.״
            </p>

            <figcaption
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: '2px',
                  height: '2.5rem',
                  background: 'var(--accent)',
                  flexShrink: 0,
                }}
              />
              <div>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--bg)',
                    marginBottom: '0.2rem',
                  }}
                >
                  אריאל ג.
                </strong>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'rgba(242,237,226,0.4)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  טיילן לאסיה, 2024
                </span>
              </div>
            </figcaption>
          </blockquote>
        </motion.figure>
      </div>
    </section>
  )
}
