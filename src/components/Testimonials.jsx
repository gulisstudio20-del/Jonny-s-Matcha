import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const testimonials = [
  {
    id: 1,
    text: 'קניתי בגלל הדיזיין, חזרתי בגלל הטעם. לא מפסיקה להמליץ.',
  },
  {
    id: 2,
    text: 'הסט המלא שינה את הבוקר שלי לגמרי. האיכות ניכרת מיד.',
  },
  {
    id: 3,
    text: 'המאצ׳ה הטובה ביותר שטעמתי מחוץ ליפן. פשוט אין כמוה.',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        paddingBlock: 'clamp(4rem, 9vw, 8rem)',
        background: 'var(--bg)',
      }}
      aria-label="חוות דעת לקוחות"
    >
      <div className="container">

        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '2.5rem',
            marginBottom: '2.5rem',
            borderBottom: '1px solid var(--line-2)',
          }}
        >
          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <strong
              style={{
                fontFamily: 'var(--f-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                color: 'var(--ink)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              4.9
            </strong>
            <div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '0.2rem' }} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>★</span>
                ))}
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--mute)',
                  letterSpacing: '0.1em',
                }}
              >
                מ-800+ ביקורות
              </span>
            </div>
          </div>

          {/* Title */}
          <div style={{ textAlign: 'right' }}>
            <span className="section-label">חוויות אמיתיות</span>
            <h2
              style={{
                fontFamily: 'var(--f-display)',
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--ink)',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
              }}
            >
              הלקוחות סיפרו
            </h2>
          </div>
        </div>

        {/* Testimonial list */}
        <div
          role="list"
          aria-label="ביקורות לקוחות"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              role="listitem"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '2rem',
                padding: '2rem 0',
                borderBottom: i < testimonials.length - 1 ? '1px solid var(--line)' : 'none',
              }}
            >
              {/* Index */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--mute-2)',
                  letterSpacing: '0.1em',
                  flexShrink: 0,
                  paddingTop: '0.2rem',
                  minWidth: '1.5rem',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Stars + text */}
              <div style={{ flex: 1 }}>
                <div
                  style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}
                  role="img"
                  aria-label="5 כוכבים"
                >
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} aria-hidden="true" style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>★</span>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    lineHeight: 1.7,
                    color: 'var(--ink)',
                    maxWidth: '54rem',
                  }}
                >
                  ״{t.text}״
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
