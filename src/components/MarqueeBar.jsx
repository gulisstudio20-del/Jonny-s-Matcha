const ITEMS = [
  { text: 'ישירות מיפן',           lang: 'he' },
  { text: '— +5,000 לקוחות מרוצים', lang: 'he' },
  { text: '— טעם שאין כמוהו',        lang: 'he' },
  { text: '— משלוח חינם',            lang: 'he' },
  { text: '— CEREMONIAL GRADE',      lang: 'en' },
  { text: '— 100% ORGANIC',          lang: 'en' },
  { text: '— SINGLE ORIGIN · UJI',   lang: 'en' },
  { text: '— ישירות מהחוה',          lang: 'he' },
]

export default function MarqueeBar() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div
      style={{ background: 'var(--ink)', overflow: 'hidden', padding: '0.9rem 0', direction: 'ltr' }}
      aria-label="יתרונות המוצר"
    >
      <div className="marquee-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              fontFamily: item.lang === 'en' ? 'var(--f-display)' : 'var(--f-body)',
              fontSize: item.lang === 'en' ? '0.72rem' : '0.82rem',
              fontWeight: 600,
              letterSpacing: item.lang === 'en' ? '0.2em' : '0.02em',
              textTransform: item.lang === 'en' ? 'uppercase' : 'none',
              color: 'rgba(242,237,226,0.75)',
              whiteSpace: 'nowrap',
              marginInline: '2.5rem',
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      {/* Accessible text for screen readers */}
      <ul className="sr-only">
        {ITEMS.map((item) => <li key={item.text}>{item.text}</li>)}
      </ul>
    </div>
  )
}
