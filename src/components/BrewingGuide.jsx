import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../animations'

const steps = [
  {
    number: '01',
    title: 'חממו את הכלים',
    desc: 'מלאו את הקערה (chawan) במים חמים וריקנו אותה. החימום מונע הלם תרמי שמשחית את הטעם — קרמיקה קרה סופגת חום מהמים ופוגעת בטמפרטורת ההכנה.',
    metric: '75–80°C',
    metricSub: 'טמפרטורת המים',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 3v10.5" />
        <circle cx="13" cy="19" r="4" />
        <path d="M10 8h2M10 11h2" />
      </svg>
    ),
    accent: 'rgba(138,122,90,0.12)',
    accentIcon: '#8A7A5A',
  },
  {
    number: '02',
    title: 'נפו את האבקה',
    desc: 'הוסיפו 2 גרם (כ-1.5 כפיות תה) לתוך מסננת עדינה ונפו ישירות לקערה. הניפוי פורק גושים ומבטיח קצף חלק ואחיד — שלב שרוב האנשים מדלגים עליו.',
    metric: '2 גרם',
    metricSub: '≈ 1.5 כפיות תה',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="13" cy="10" r="7" />
        <path d="M8 10h10M9.5 13h7M11.5 16h3" />
        <path d="M13 17v6" />
      </svg>
    ),
    accent: 'rgba(61,110,28,0.1)',
    accentIcon: 'var(--accent)',
  },
  {
    number: '03',
    title: 'הקציפו בתנועת W',
    desc: 'שפכו 70-80 מ"ל מים ב-80°C על האבקה. הקציפו בתנועת W/M מהירה עם מצפצת (chasen) — לא בעיגולים. 20-30 שניות עד לקצף עדין עם בועיות זעירות על פני השטח.',
    metric: '70 מ"ל · 30 שניות',
    metricSub: 'תנועת W/M',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 20 Q8 8 13 14 Q18 20 21 8" />
        <path d="M9 6 Q13 12 17 6" />
      </svg>
    ),
    accent: 'rgba(61,110,28,0.15)',
    accentIcon: 'var(--accent)',
  },
  {
    number: '04',
    title: 'שתו מיד',
    desc: 'המאצ׳ה בשיאה ברגע ההכנה. הקצף מתפזר תוך 2 דקות. החזיקו את הקערה בשתי ידיים, סובבו אותה שלוש פעמים בכיוון השעון — ושתו בגמיעות קטנות.',
    metric: '0–2 דקות',
    metricSub: 'מרגע ההכנה',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 8h12l-1.5 10H8.5L7 8z" />
        <path d="M5 8h16" />
        <path d="M10 8 Q10 5 13 4 Q16 5 16 8" />
        <path d="M10 14 Q13 17 16 14" />
      </svg>
    ),
    accent: 'rgba(10,20,7,0.05)',
    accentIcon: 'var(--ink)',
  },
]

const tip = {
  label: 'טיפ של מומחים',
  text: 'אל תשתמשו במים רותחים. 100°C הורסים את האמינו חומצות שאחראיות לטעם המתוק והאוממי. מומלץ להרתיח ולהמתין 3-4 דקות — או לערבב עם מעט מים קרים.',
}

export default function BrewingGuide() {
  const container = stagger(0.12)

  return (
    <section
      id="brewing"
      style={{
        paddingBlock: 'clamp(5rem, 10vw, 9rem)',
        background: 'var(--bg-2)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="מדריך הכנת מאצ׳ה"
    >
      {/* Decorative watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-2rem',
          left: '-1rem',
          fontFamily: 'var(--f-display)',
          fontWeight: 800,
          fontSize: 'clamp(12rem, 22vw, 26rem)',
          lineHeight: 1,
          color: 'rgba(10,20,7,0.025)',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.06em',
        }}
      >
        茶
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)', maxWidth: '38rem' }}
        >
          <span className="section-label">מדריך הכנה</span>
          <h2
            style={{
              fontFamily: 'var(--f-body)',
              fontSize: 'clamp(2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              color: 'var(--ink)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            כוס מושלמת,{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>
              בכל פעם
            </em>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--mute)', lineHeight: 1.8 }}>
            ארבעה שלבים פשוטים — אבל כל אחד מהם קריטי. כאן ההבדל בין מאצ׳ה מעולה לממוצעת.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
          role="list"
          aria-label="שלבי הכנה"
        >
          {steps.map((step) => (
            <motion.article
              key={step.number}
              variants={fadeUp}
              role="listitem"
              style={{
                background: 'var(--paper)',
                borderRadius: '1.5rem',
                padding: 'clamp(1.75rem, 4vw, 2.25rem)',
                border: '1px solid var(--line)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Watermark number */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-0.5rem',
                  left: '-0.25rem',
                  fontFamily: 'var(--f-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(5rem, 10vw, 8rem)',
                  lineHeight: 1,
                  color: 'rgba(10,20,7,0.04)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  letterSpacing: '-0.04em',
                }}
              >
                {step.number}
              </span>

              {/* Icon + step number badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: step.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: step.accentIcon,
                    flexShrink: 0,
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    color: 'var(--mute-2)',
                    textTransform: 'uppercase',
                  }}
                >
                  שלב {step.number}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--f-body)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
                  fontWeight: 800,
                  color: 'var(--ink)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--f-body)',
                  fontSize: '1rem',
                  color: 'var(--mute)',
                  lineHeight: 1.8,
                  flex: 1,
                }}
              >
                {step.desc}
              </p>

              {/* Metric badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '0.6rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--line)',
                  marginTop: 'auto',
                }}
              >
                <strong
                  style={{
                    fontFamily: 'var(--f-body)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: 'var(--ink)',
                    letterSpacing: '-0.01em',
                    direction: 'ltr',
                  }}
                >
                  {step.metric}
                </strong>
                <span
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--mute-2)',
                    fontWeight: 400,
                  }}
                >
                  {step.metricSub}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Expert tip callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{
            display: 'flex',
            gap: '1.25rem',
            alignItems: 'flex-start',
            padding: 'clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 3vw, 2rem)',
            background: 'rgba(61,110,28,0.07)',
            border: '1px solid rgba(61,110,28,0.18)',
            borderRadius: '1.25rem',
            marginBottom: '2.5rem',
          }}
          role="note"
          aria-label={tip.label}
        >
          {/* Icon */}
          <div
            aria-hidden="true"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--accent)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              flexShrink: 0,
              marginTop: '0.1rem',
            }}
          >
            ✦
          </div>
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '0.5rem',
              }}
            >
              {tip.label}
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.8 }}>
              {tip.text}
            </p>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}
        >
          <p style={{ fontSize: '1rem', color: 'var(--mute)', lineHeight: 1.7, maxWidth: '28rem' }}>
            צריכים ציוד? כל מה שצריך להכנה נכונה —{' '}
            <strong style={{ color: 'var(--ink)' }}>קערה, מצפצת ומסננת</strong>{' '}
            — זמין בסטים שלנו.
          </p>
          <a href="#gifts" style={{ textDecoration: 'none' }}>
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.75rem',
                borderRadius: '999px',
                border: '1.5px solid var(--line-2)',
                background: 'transparent',
                color: 'var(--ink)',
                fontWeight: 700,
                fontSize: '0.92rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--ink)'
                e.currentTarget.style.color = 'var(--bg)'
                e.currentTarget.style.borderColor = 'var(--ink)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--ink)'
                e.currentTarget.style.borderColor = 'var(--line-2)'
              }}
            >
              <span>לסטים שלנו</span>
              <span aria-hidden="true">←</span>
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
