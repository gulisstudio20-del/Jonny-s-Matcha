import { motion } from 'framer-motion'
import heroBowl from '../../assets/images/hero-bowl.png'
import powderImg from '../../assets/images/powder.png'
import toolsImg  from '../../assets/images/tools.png'
import { useCart } from '../context/CartContext'

const GIFTS = [
  {
    id:      'starter',
    name:    'סט מתחילים',
    desc:    'מאצ׳ה + מטרפה + קערה — כל מה שצריך להתחיל את המסע',
    price:   229,
    img:     heroBowl,
    imgAlt:  'סט מתחילים',
  },
  {
    id:      'master',
    name:    'סט מאסטר',
    desc:    'הקולקציה המלאה + מדריך הכנה + שיעור וידאו מקצועי',
    price:   349,
    img:     toolsImg,
    imgAlt:  'סט מאסטר',
  },
  {
    id:      'premium',
    name:    'סט מתנה פרימיום',
    desc:    'ארזית מתנה יוקרתית עם 3 סוגי מאצ׳ה וכלי הכנה',
    price:   489,
    img:     powderImg,
    imgAlt:  'סט מתנה פרימיום',
  },
]

const ease = [0.16, 1, 0.3, 1]

function GiftCard({ gift, index }) {
  const { addItem } = useCart()
  const isFeature = index === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      whileHover={{ y: -6 }}
      aria-label={gift.name}
      style={{
        borderRadius: '1.75rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: isFeature ? 'var(--ink)' : 'var(--paper)',
        border: isFeature ? 'none' : '1px solid var(--line)',
        boxShadow: isFeature
          ? '0 24px 60px rgba(10,20,7,0.18)'
          : '0 2px 12px rgba(10,20,7,0.05)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
        <img
          src={gift.img}
          alt={gift.imgAlt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.7s ease',
          }}
          loading="lazy"
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        {isFeature && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, rgba(10,20,7,0.4) 100%)',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3
          style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            color: isFeature ? 'var(--bg)' : 'var(--ink)',
          }}
        >
          {gift.name}
        </h3>
        <p
          style={{
            fontSize: '0.9rem',
            lineHeight: 1.7,
            flex: 1,
            marginBottom: '1.5rem',
            color: isFeature ? 'rgba(242,237,226,0.55)' : 'var(--mute)',
          }}
        >
          {gift.desc}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <button
            onClick={() => addItem(gift)}
            aria-label={`הזמן ${gift.name}`}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: '999px',
              background: isFeature ? 'var(--bg)' : 'var(--ink)',
              color: isFeature ? 'var(--ink)' : 'var(--bg)',
              fontWeight: 700,
              fontSize: '0.82rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            להזמנה
          </button>
          <strong
            style={{
              fontFamily: 'var(--f-body)',
              fontSize: '1.5rem',
              fontWeight: 900,
              letterSpacing: '-0.01em',
              color: isFeature ? 'var(--bg)' : 'var(--ink)',
            }}
          >
            ₪{gift.price}
          </strong>
        </div>
      </div>
    </motion.article>
  )
}

export default function GiftSets() {
  return (
    <section
      id="gifts"
      style={{
        paddingBlock: 'clamp(4rem, 9vw, 8rem)',
        background: 'var(--bg-2)',
      }}
      aria-label="מתנות לקט"
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'right', marginBottom: '3rem' }}>
          <span className="section-label">לכל אירוע</span>
          <h2
            style={{
              fontFamily: 'var(--f-body)',
              fontSize: 'clamp(2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              color: 'var(--ink)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            סטי מתנה
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
            gap: '1.25rem',
          }}
          role="list"
          aria-label="סטי מתנה"
        >
          {GIFTS.map((g, i) => (
            <div key={g.id} role="listitem">
              <GiftCard gift={g} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
