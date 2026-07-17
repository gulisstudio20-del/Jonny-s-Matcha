const ITEMS = [
  { text: 'ישירות מיפן',            lang: 'he' },
  { text: 'מאצ׳ה סרמוניאלית אורגנית', lang: 'he' },
]

export default function MarqueeBar() {
  // The track animates translateX(-50%), so its first half must be at least as
  // wide as the viewport — otherwise a blank gap shows before the loop restarts.
  // With only 2 short items, 16 repetitions keep each half wider than any screen.
  const repeated = Array.from({ length: 16 }, () => ITEMS).flat()

  return (
    <div
      style={{ background: 'var(--ink)', overflow: 'hidden', padding: '0.9rem 0', direction: 'ltr' }}
      aria-label="יתרונות המוצר"
    >
      <div className="marquee-track" aria-hidden="true">
        {repeated.map((item, i) => (
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
