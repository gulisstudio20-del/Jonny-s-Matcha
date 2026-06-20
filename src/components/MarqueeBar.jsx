// Marquee — dual-copy technique for instant seamless loop, pure CSS
const ITEMS = [
  '100% Organic',
  '✦ Single Origin · Uji, Japan',
  '✦ משלוח חינם בהזמנה ראשונה',
  '✦ Ceremonial Grade',
  '✦ ללא חומרים משמרים',
  '✦ Direct Trade',
  '✦ No Additives',
  '✦ אורגני מוסמך',
]

export default function MarqueeBar() {
  return (
    <div
      className="overflow-hidden py-3.5 bg-matcha"
      aria-label="יתרונות המוצר"
      style={{ direction: 'ltr' }}
    >
      {/*
        Two identical sets rendered inside one flex container.
        @keyframes marquee goes from 0 to translateX(-50%) = exactly one set width.
        Perfectly seamless loop with no gap or flash.
      */}
      <div className="marquee-track" aria-hidden="true">
        {/* Copy 1 */}
        {ITEMS.map((item, i) => (
          <span
            key={`a${i}`}
            className="inline-block text-white text-sm font-semibold tracking-widest uppercase whitespace-nowrap mx-8"
          >
            {item}
          </span>
        ))}
        {/* Copy 2 — creates seamless join */}
        {ITEMS.map((item, i) => (
          <span
            key={`b${i}`}
            className="inline-block text-white text-sm font-semibold tracking-widest uppercase whitespace-nowrap mx-8"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Screen-reader version */}
      <ul className="sr-only">
        {ITEMS.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}
