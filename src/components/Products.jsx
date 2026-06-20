import { motion } from 'framer-motion'
import powderImg from '../../assets/images/powder.png'
import toolsImg from '../../assets/images/tools.png'
import { fadeUp, stagger, viewport } from '../animations'
import { useCart } from '../context/CartContext'

export const PRODUCTS = [
  {
    id: 'ceremonial',
    tag: 'רב מכר',
    name: 'מאצ׳ה סרמוניאלית',
    desc: 'הכי טובה שיש. טעם עמוק עם מתיקות טבעית, בלי טיפת מרירות. בדיוק כמו שמגישים בטקסי תה ביפן.',
    price: 89,
    unit: '30 גר׳',
    img: powderImg,
    imgAlt: 'אבקת מאצ׳ה סרמוניאלית',
    featured: true,
  },
  {
    id: 'latte',
    name: 'מאצ׳ה לאטה',
    desc: 'תערובת שעיצבנו במיוחד לחלב. נמסה בקלות, בלי גושים — עם טעם קרמי ועמוק.',
    price: 69,
    unit: '50 גר׳',
  },
  {
    id: 'culinary',
    name: 'מאצ׳ה קולינרית',
    desc: 'לאפייה, לסמודי, למה שתרצו. ירוק עמוק שמחזיק גם בתנור, טעם שנשאר.',
    price: 59,
    unit: '100 גר׳',
  },
  {
    id: 'kit',
    name: 'סט ההכנה המושלם',
    desc: 'צייסן, צ׳אשאקו וקערת צ׳אוואן מסורתית. הציוד הנכון משנה את חוויית ההכנה מקצה לקצה.',
    price: 189,
    unit: 'סט מלא',
    img: toolsImg,
    imgAlt: 'כלי הכנת מאצ׳ה יפניים',
  },
  {
    id: 'subscription',
    tag: 'חיסכון 15%',
    name: 'מנוי חודשי',
    desc: 'מאצ׳ה טרייה מגיעה אליכם כל חודש, אוטומטית. 15% הנחה קבועה על כל הזמנה, כולל משלוח חינם.',
    price: 75,
    unit: 'לחודש',
    wide: true,
    dark: true,
  },
]

function AddButton({ product, large = false }) {
  const { addItem } = useCart()
  return (
    <button
      onClick={() => addItem(product)}
      aria-label={`הוסיפו ${product.name} לעגלה`}
      className={large ? 'btn-gradient' : `text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200`}
      style={large ? {} : {
        borderColor: 'rgba(90,138,37,0.35)',
        color: 'var(--c-matcha-dark)',
        background: 'rgba(121,184,53,0.06)',
      }}
      onMouseEnter={large ? undefined : (e) => {
        e.currentTarget.style.background = 'var(--c-matcha)'
        e.currentTarget.style.color = '#fff'
        e.currentTarget.style.borderColor = 'var(--c-matcha)'
      }}
      onMouseLeave={large ? undefined : (e) => {
        e.currentTarget.style.background = 'rgba(121,184,53,0.06)'
        e.currentTarget.style.color = 'var(--c-matcha-dark)'
        e.currentTarget.style.borderColor = 'rgba(90,138,37,0.35)'
      }}
    >
      {large ? <span>הוסיפו לעגלה ←</span> : 'הוסיפו ←'}
    </button>
  )
}

function FeaturedCard({ product }) {
  return (
    <motion.article
      variants={fadeUp}
      className="col-span-full grid lg:grid-cols-2 gap-8 items-center
                 rounded-3xl p-8 lg:p-12 relative overflow-hidden group
                 transition-all duration-500 hover:shadow-card-hover"
      style={{
        background: 'rgba(229,241,206,0.8)',
        border: '1px solid rgba(255,255,255,0.85)',
        boxShadow: '0 8px 32px rgba(121,184,53,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
      }}
      aria-label={`מוצר מומלץ: ${product.name}`}
    >
      {/* Hover shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 80% 50%, rgba(121,184,53,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {product.tag && (
        <span className="absolute top-6 right-6 text-[0.7rem] font-bold px-3 py-1 rounded-full text-white z-10"
              style={{ background: 'var(--c-matcha)' }}>
          {product.tag}
        </span>
      )}
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-3" style={{ color: 'var(--c-ink)' }}>{product.name}</h3>
        <p className="text-base leading-relaxed mb-6 max-w-sm" style={{ color: 'var(--c-ink-soft)' }}>{product.desc}</p>
        <div className="flex items-baseline gap-2 mb-7">
          <strong className="text-5xl font-black" style={{ color: 'var(--c-matcha-dark)' }}>₪{product.price}</strong>
          <span className="text-base" style={{ color: 'var(--c-ink-soft)' }}>/ {product.unit}</span>
        </div>
        <AddButton product={product} large />
      </div>
      {product.img && (
        <img
          src={product.img} alt={product.imgAlt}
          className="max-h-72 object-contain drop-shadow-xl mx-auto
                     group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700"
          width="320" height="280" loading="lazy"
        />
      )}
    </motion.article>
  )
}

function WideCard({ product }) {
  const { addItem } = useCart()
  return (
    <motion.article
      variants={fadeUp}
      className="col-span-full rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden"
      style={{ background: 'var(--c-forest)', border: '1px solid rgba(255,255,255,0.1)' }}
      aria-label={product.name}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 100% at 15% 50%, rgba(121,184,53,0.12) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="relative">
        {product.tag && (
          <span className="inline-block text-[0.7rem] font-bold px-3 py-1 rounded-full mb-3"
                style={{ background: 'var(--c-gold)', color: 'var(--c-forest)' }}>
            {product.tag}
          </span>
        )}
        <h3 className="text-2xl font-bold mb-1.5 text-white">{product.name}</h3>
        <p className="text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>{product.desc}</p>
      </div>
      <div className="relative flex items-center gap-6 flex-shrink-0">
        <div>
          <div className="flex items-baseline gap-1.5">
            <strong className="text-4xl font-black" style={{ color: 'var(--c-matcha-soft)' }}>₪{product.price}</strong>
            <span className="text-base" style={{ color: 'rgba(255,255,255,0.45)' }}>/ {product.unit}</span>
          </div>
          <s className="text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>₪89</s>
        </div>
        <button
          onClick={() => addItem(product)}
          className="btn-white flex-shrink-0"
          aria-label={`הירשמי למנוי ${product.name}`}
        >
          הירשמי
        </button>
      </div>
    </motion.article>
  )
}

function StandardCard({ product }) {
  return (
    <motion.article
      variants={fadeUp}
      className="rounded-3xl p-7 flex flex-col group
                 transition-all duration-400 hover:-translate-y-1.5"
      style={{
        background: 'rgba(255,255,255,0.88)',
        border: '1px solid rgba(255,255,255,0.9)',
        boxShadow: '0 4px 24px rgba(24,18,10,0.06), inset 0 1px 0 rgba(255,255,255,0.95)',
      }}
      aria-label={product.name}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(121,184,53,0.15), inset 0 1px 0 rgba(255,255,255,0.9)'
        e.currentTarget.style.borderColor = 'rgba(121,184,53,0.35)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(24,18,10,0.06), inset 0 1px 0 rgba(255,255,255,0.9)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.82)'
      }}
    >
      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--c-ink)' }}>{product.name}</h3>
      <p className="text-base leading-[1.75] flex-1 mb-5" style={{ color: 'var(--c-ink-soft)' }}>{product.desc}</p>
      {product.img && (
        <img
          src={product.img} alt={product.imgAlt}
          className="max-h-36 object-contain drop-shadow-lg my-3 mx-auto
                     group-hover:scale-105 transition-transform duration-500"
          width="180" height="140" loading="lazy"
        />
      )}
      <div className="mt-auto pt-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(24,18,10,0.07)' }}>
        <div className="flex items-baseline gap-1">
          <strong className="text-3xl font-black" style={{ color: 'var(--c-matcha-dark)' }}>₪{product.price}</strong>
          <span className="text-sm" style={{ color: 'var(--c-ink-muted)' }}>/ {product.unit}</span>
        </div>
        <AddButton product={product} />
      </div>
    </motion.article>
  )
}

export default function Products() {
  const container = stagger(0.09)
  return (
    <section
      id="products"
      className="py-28 lg:py-36 relative overflow-hidden"
      aria-label="הקולקציה שלנו"
      style={{
        background: 'linear-gradient(170deg, #edf5e0 0%, #f5f0e8 45%, #edf5e0 100%)',
      }}
    >
      {/* Soft ambient light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 0%, rgba(121,184,53,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container relative">
        <div className="text-center mb-16">
          <span className="section-tag-light">המוצרים שלנו</span>
          <h2 className="font-serif font-black text-section" style={{ color: 'var(--c-ink)', overflow: 'visible', lineHeight: 1.2 }}>
            הקולקציה{' '}
            <em className="italic text-gradient">
              שלנו
            </em>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-lg" style={{ color: 'var(--c-ink-soft)' }}>
            בוקר עם לאטה, אחר צהריים עם כוס סרמוניאלית, ערב עם עוגה ירוקה —
            יש לנו משהו לכל מצב
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {PRODUCTS.map((p) =>
            p.featured ? <FeaturedCard key={p.id} product={p} /> :
            p.wide     ? <WideCard key={p.id} product={p} />     :
                         <StandardCard key={p.id} product={p} />
          )}
        </motion.div>
      </div>
    </section>
  )
}
