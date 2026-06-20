import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../animations'

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: 'אחרי שטעמתי מאצ׳ה מכאן, אין דרך חזרה. ההבדל מהמאצ׳ה שקניתי לפני כן הוא שמיים וארץ. הצבע, הטעם, והטקסטורה — פשוט ברמה אחרת.',
    name: 'נועה כ.',
    location: 'תל אביב',
    initials: 'נ',
    avatarBg: 'from-matcha to-matcha-dark',
    product: 'מאצ׳ה סרמוניאלית',
  },
  {
    id: 2,
    stars: 5,
    text: 'סט ההכנה שקניתי פה הפך את הבקרים שלי. יש משהו מדיטטיבי בהכנת מאצ׳ה עם כלים אמיתיים. איכות מדהימה ושירות לקוחות מעולה.',
    name: 'אורי מ.',
    location: 'הרצליה',
    initials: 'א',
    avatarBg: 'from-gold to-gold-dark',
    product: 'סט ההכנה המושלם',
  },
  {
    id: 3,
    stars: 5,
    text: 'המנוי החודשי הוא הדבר הכי טוב שעשיתי. מאצ׳ה טרייה כל חודש, בלי לחשוב על זה. וההנחה לא מזיקה! מתנה מושלמת לעצמי.',
    name: 'שירה ל.',
    location: 'ירושלים',
    initials: 'ש',
    avatarBg: 'from-matcha-dark to-forest',
    product: 'מנוי חודשי',
  },
]

function Stars({ count }) {
  return (
    <div
      className="flex gap-0.5 mb-4"
      role="img"
      aria-label={`דירוג ${count} כוכבים מתוך 5`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm" aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const container = stagger(0.12)

  return (
    <section
      id="testimonials"
      className="py-28 lg:py-36 relative overflow-hidden"
      aria-label="חוות דעת לקוחות"
      style={{ background: 'linear-gradient(175deg, #f8f4ed 0%, #edf5e0 60%, #f8f4ed 100%)' }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-tag-light">מה אומרים עלינו</span>
          <h2 className="font-serif font-black text-section text-ink" style={{ overflow: 'visible', lineHeight: 1.2 }}>
            הלקוחות{' '}
            <em className="italic text-gradient">מספרים</em>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-5"
          role="list"
          aria-label="ביקורות לקוחות"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.id}
              variants={fadeUp}
              role="listitem"
              className="rounded-3xl p-7 flex flex-col transition-all duration-400 hover:-translate-y-1.5"
              style={{
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(255,255,255,0.95)',
                boxShadow: '0 4px 20px rgba(24,18,10,0.05), inset 0 1px 0 rgba(255,255,255,0.95)',
              }}
              aria-label={`ביקורת מאת ${t.name}`}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 16px 40px rgba(121,184,53,0.12), inset 0 1px 0 rgba(255,255,255,0.9)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(24,18,10,0.05), inset 0 1px 0 rgba(255,255,255,0.9)' }}
            >
              <Stars count={t.stars} />

              {/* Product tag */}
              <span className="inline-block text-[0.68rem] font-semibold text-matcha-dark bg-matcha-pale px-3 py-1 rounded-full mb-4 self-start">
                {t.product}
              </span>

              <p className="text-ink-soft text-base leading-[1.85] flex-1 mb-6">{t.text}</p>

              <footer className="border-t border-ink/[0.06] pt-4 flex items-center gap-3">
                {/* Gradient avatar */}
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarBg}
                               flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <strong className="block text-base font-bold text-ink">{t.name}</strong>
                  <span className="text-sm text-ink-muted">{t.location}</span>
                </div>
                <div className="mr-auto">
                  <span className="text-[0.65rem] text-matcha-dark font-semibold bg-matcha-pale px-2 py-0.5 rounded-full">
                    ✓ רכישה מאומתת
                  </span>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
