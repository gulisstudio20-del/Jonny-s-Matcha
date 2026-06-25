import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../animations'
import Tip from './Tip'

const steps = [
  {
    number: '01',
    title: 'חממו את הכלים',
    desc: 'מלאו את הקערה (chawan) במים חמים וריקנו אותה. החימום מונע הלם תרמי שפוגע בטעם — קרמיקה קרה סופגת חום מהמים ומורידה את הטמפרטורה.',
    metric: '75–80°C',
    metricLabel: 'טמפרטורת המים',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 4v11" />
        <circle cx="14" cy="20" r="4" />
        <path d="M11.5 9.5h2M11.5 12.5h2" />
      </svg>
    ),
    orb: 'rgba(138,122,90,0.55)',
    iconColor: '#8A7A5A',
    iconBg: 'rgba(138,122,90,0.15)',
  },
  {
    number: '02',
    title: 'נפו את האבקה',
    desc: 'הוסיפו 2 גרם (כ-1.5 כפיות) דרך מסננת עדינה. הניפוי פורק גושים ומבטיח קצף חלק ואחיד — שלב שרוב האנשים מדלגים עליו ושעושה את כל ההבדל.',
    metric: '2 גרם',
    metricLabel: '≈ 1.5 כפיות תה',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="14" cy="11" rx="8" ry="5" />
        <path d="M6 11c0 4 3.6 7 8 7s8-3 8-7" />
        <path d="M14 18v6M11 21h6" />
      </svg>
    ),
    orb: 'rgba(61,110,28,0.5)',
    iconColor: 'var(--accent)',
    iconBg: 'rgba(61,110,28,0.12)',
  },
  {
    number: '03',
    title: 'הקציפו בתנועת W',
    desc: 'שפכו 70-80 מ"ל מים ב-80°C. הקציפו בתנועת W/M מהירה עם מצפצת (chasen) — לא בעיגולים. 20-30 שניות עד לקצף עדין עם בועיות זעירות.',
    metric: '70 מ"ל · 30 שניות',
    metricLabel: 'תנועת W/M',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 22 Q9 8 14 15 Q19 22 23 8" />
        <path d="M9 5 Q14 13 19 5" />
      </svg>
    ),
    orb: 'rgba(61,110,28,0.6)',
    iconColor: 'var(--accent)',
    iconBg: 'rgba(61,110,28,0.12)',
  },
  {
    number: '04',
    title: 'שתו מיד',
    desc: 'המאצ׳ה הכי טובה ממש אחרי ההכנה. הקצף מתפזר תוך 2 דקות. החזיקו את הקערה בשתי ידיים, סובבו שלוש פעמים בכיוון השעון — ושתו בלגימות קטנות.',
    metric: '0–2 דקות',
    metricLabel: 'מרגע ההכנה',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 9h12l-2 12H10L8 9z" />
        <path d="M6 9h16" />
        <path d="M11 9 Q11 6 14 5 Q17 6 17 9" />
        <path d="M11 16 Q14 19 17 16" />
      </svg>
    ),
    orb: 'rgba(10,20,7,0.3)',
    iconColor: 'var(--ink)',
    iconBg: 'rgba(10,20,7,0.08)',
  },
]

export default function BrewingGuide() {
  const container = stagger(0.12)

  return (
    <section
      id="brewing"
      style={{
        paddingBlock: 'clamp(5rem, 10vw, 9rem)',
        background: 'linear-gradient(145deg, #D8E8CC 0%, #E5DFD0 45%, #D0E0C8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="מדריך הכנת מאצ׳ה"
    >
      {/* Background orbs */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
      }}>
        <div style={{
          position: 'absolute', top: '-15%', right: '-10%',
          width: '55vw', height: '55vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,110,28,0.22) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '45vw', height: '45vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(90,155,42,0.18) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '40%',
          width: '30vw', height: '30vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,122,90,0.12) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
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
          <h2 style={{
            fontFamily: 'var(--f-body)',
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            fontWeight: 800,
            color: 'var(--ink)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            כוס מושלמת,{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>
              בכל פעם
            </em>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--ink-2)', lineHeight: 1.8, opacity: 0.75 }}>
            ארבעה שלבים — אבל כל אחד מהם חשוב. כאן ההבדל בין מאצ׳ה מעולה לסתמית.
          </p>
        </motion.div>

        {/* Steps — fixed 2×2 grid */}
        <motion.div
          className="brewing-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          role="list"
          aria-label="שלבי הכנה"
          style={{ marginBottom: '1.75rem' }}
        >
          {steps.map((step) => (
            <motion.article
              key={step.number}
              variants={fadeUp}
              role="listitem"
              style={{
                background: 'rgba(255,255,255,0.28)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
                border: '1px solid rgba(255,255,255,0.65)',
                borderRadius: '1.75rem',
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                boxShadow: '0 8px 32px rgba(10,20,7,0.08), inset 0 1px 0 rgba(255,255,255,0.7)',
              }}
            >
              {/* Coloured inner orb */}
              <div aria-hidden="true" style={{
                position: 'absolute', top: '-2rem', left: '-2rem',
                width: '10rem', height: '10rem', borderRadius: '50%',
                background: `radial-gradient(circle, ${step.orb} 0%, transparent 70%)`,
                filter: 'blur(24px)',
                pointerEvents: 'none',
                opacity: 0.6,
              }} />

              {/* Watermark number */}
              <span aria-hidden="true" style={{
                position: 'absolute', top: '-0.75rem', left: '-0.25rem',
                fontFamily: 'var(--f-display)', fontWeight: 800,
                fontSize: 'clamp(5rem, 9vw, 8.5rem)', lineHeight: 1,
                color: 'rgba(10,20,7,0.05)',
                userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em',
              }}>
                {step.number}
              </span>

              {/* Icon row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: step.iconBg,
                  border: '1px solid rgba(255,255,255,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: step.iconColor,
                  boxShadow: '0 2px 8px rgba(10,20,7,0.06)',
                }}>
                  {step.icon}
                </div>
                <span style={{
                  fontFamily: "var(--f-display)",
                  fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '0.2em', color: 'rgba(10,20,7,0.35)',
                  textTransform: 'uppercase',
                }}>
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--f-body)',
                fontSize: 'clamp(1.3rem, 2.8vw, 1.6rem)',
                fontWeight: 800, color: 'var(--ink)',
                lineHeight: 1.2, letterSpacing: '-0.01em',
                position: 'relative',
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '1.05rem', color: 'rgba(10,20,7,0.65)',
                lineHeight: 1.85, flex: 1, position: 'relative',
              }}>
                {step.desc}
              </p>

              {/* Metric */}
              <div style={{
                display: 'flex', alignItems: 'baseline', gap: '0.6rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.5)',
                marginTop: 'auto', position: 'relative',
              }}>
                <strong style={{
                  fontFamily: 'var(--f-body)',
                  fontSize: '1.1rem', fontWeight: 800,
                  color: 'var(--ink)', letterSpacing: '-0.01em', direction: 'ltr',
                }}>
                  {step.metric}
                </strong>
                <span style={{ fontSize: '0.9rem', color: 'rgba(10,20,7,0.45)', fontWeight: 400 }}>
                  {step.metricLabel}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Expert tip */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Tip label="טיפ של יוני">
            אל תשתמשו במים רותחים. 100°C הורסים את האמינו חומצות שאחראיות לטעם המתוק והאוממי. מומלץ להמתין 3–4 דקות לאחר הרתיחה — או לערבב כף מים קרים לפני ההוספה.
          </Tip>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}
        >
          <p style={{ fontSize: '1.05rem', color: 'rgba(10,20,7,0.7)', lineHeight: 1.75, maxWidth: '30rem' }}>
            צריכים ציוד? <strong style={{ color: 'var(--ink)' }}>קערה, מצפצת ומסננת</strong> — אצלנו תוכלו למצוא הכל.
          </p>
          <a
            href="#gifts"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 1.85rem', borderRadius: '999px',
              background: 'rgba(255,255,255,0.35)',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.7)',
              color: 'var(--ink)', fontWeight: 700,
              fontSize: '0.95rem', letterSpacing: '0.05em',
              textTransform: 'uppercase', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(10,20,7,0.08)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--ink)'
              e.currentTarget.style.color = 'var(--bg)'
              e.currentTarget.style.borderColor = 'var(--ink)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.35)'
              e.currentTarget.style.color = 'var(--ink)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'
            }}
          >
            <span>לסטים שלנו</span>
            <span aria-hidden="true">←</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
