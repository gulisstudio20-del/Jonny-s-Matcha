const ITEMS = [
  'ישירות מיפן',
  '— +5,000 לקוחות מרוצים',
  '— טעם שאין כמוהו',
  '— משלוח חינם',
  '— CEREMONIAL GRADE',
  '— 100% ORGANIC',
  '— SINGLE ORIGIN · UJI',
  '— ישירות מהחוה',
]

export default function MarqueeBar() {
  return (
    <div
      style={{ background: 'var(--ink)', overflow: 'hidden', padding: '0.85rem 0', direction: 'ltr' }}
      aria-label="יתרונות המוצר"
    >
      <div className="marquee-track" aria-hidden="true">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              fontFamily: 'var(--f-display)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(242,237,226,0.75)',
              whiteSpace: 'nowrap',
              marginInline: '2.5rem',
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Accessible text for screen readers */}
      <ul className="sr-only">
        {ITEMS.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}
