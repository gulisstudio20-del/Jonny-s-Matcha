import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const testimonials = [
  {
    id: 1,
    text: 'שנים שהייתי מחפש מאצ׳ה שתרגיש כמו מה ששתיתי בקיוטו. הצבע, הריח, האוממי — הכל שם. לא חזרתי לשום דבר אחר.',
    author: 'אורי כ.',
    location: 'תל אביב',
  },
  {
    id: 2,
    text: 'עבדתי שנים בחנות קפה ספיישלטי. לא חשבתי שאמצא מוצר שיעשה לי את אותה התחושה — המקוריות, הדיוק, הטריות. קניתי שלוש פעמים מאז.',
    author: 'תומר ש.',
    location: 'חיפה',
  },
  {
    id: 3,
    text: 'קניתי לאמא שלי כמתנה. היא כתבה לי שלוש הודעות ביום הראשון. זה אמר הכל.',
    author: 'מאיה ר.',
    location: 'ירושלים',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <strong
              style={{
                fontFamily: 'var(--f-body)',
                fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                fontWeight: 900,
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                direction: 'ltr',
              }}
            >
              4.9
            </strong>
            <div>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '0.3rem' }} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <span
                style={{
                  fontFamily: 'var(--f-body)',
                  fontSize: '0.97rem',
                  color: 'var(--mute)',
                  fontWeight: 500,
                }}
              >
                מ-800+ ביקורות
              </span>
            </div>
          </div>

          {/* Title */}
          <div style={{ textAlign: 'right' }}>
            <h2
              style={{
                fontFamily: 'var(--f-body)',
                fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                color: 'var(--ink)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
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
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                alignItems: 'start',
                gap: 'clamp(1rem, 3vw, 2rem)',
                padding: '2.25rem 0',
                borderBottom: i < testimonials.length - 1 ? '1px solid var(--line)' : 'none',
              }}
            >
              {/* Index */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--f-body)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--mute-2)',
                  letterSpacing: '0.08em',
                  paddingTop: '0.3rem',
                  minWidth: '1.5rem',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Stars + text */}
              <div>
                <div
                  style={{ display: 'flex', gap: '2px', marginBottom: '0.85rem' }}
                  role="img"
                  aria-label="5 כוכבים"
                >
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} aria-hidden="true" style={{ color: 'var(--accent)', fontSize: '1rem' }}>★</span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--f-body)',
                    fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
                    lineHeight: 1.75,
                    color: 'var(--ink)',
                    fontWeight: 400,
                    marginBottom: '1rem',
                  }}
                >
                  ״{t.text}״
                </p>
              </div>

              {/* Author */}
              <div style={{ textAlign: 'left', paddingTop: '0.3rem', flexShrink: 0 }}>
                <strong style={{ display: 'block', fontFamily: 'var(--f-body)', fontSize: '1rem', fontWeight: 700, color: 'var(--ink)' }}>
                  {t.author}
                </strong>
                <span style={{ fontFamily: 'var(--f-body)', fontSize: '0.92rem', color: 'var(--mute-2)', fontWeight: 400 }}>
                  {t.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
