import { useState } from 'react'
import { motion } from 'framer-motion'
import heroBowl  from '../../assets/images/hero-bowl.png'
import powderImg  from '../../assets/images/powder.png'
import matchaCup  from '../../assets/images/matcha-cup.jpg'
import { useCart } from '../context/CartContext'

export const PRODUCTS = [
  {
    id:     'ceremonial',
    label:  'Ceremonial Grade',
    name:   'מאצ׳ה טקסי',
    unit:   '30 גרם',
    desc:   'הדרג הגבוה ביותר — לשתייה ישירה בקערה. צבע ירוק עז, טעם עשיר ועמוק.',
    price:  189,
    img:    heroBowl,
    imgAlt: 'מאצ׳ה סרמוניאלית',
    badge:  'נמכר ביותר',
  },
  {
    id:     'premium',
    label:  'Premium Grade',
    name:   'מאצ׳ה פרימיום',
    unit:   '40 גרם',
    desc:   'מצוין לשתייה ולאפייה. איזון מושלם בין איכות לערך.',
    price:  149,
    img:    powderImg,
    imgAlt: 'מאצ׳ה פרימיום',
    badge:  'חדש',
  },
  {
    id:     'latte',
    label:  'Latte Blend',
    name:   'מאצ׳ה לאטה',
    unit:   '50 גרם',
    desc:   'מיזוג מיוחד לחלב וחלב צמחי. קריים, מתוק בטבעיות, מושלם לכל יום.',
    price:  129,
    img:    matchaCup,
    imgAlt: 'מאצ׳ה לאטה קרה',
    badge:  null,
  },
]

const ease = [0.16, 1, 0.3, 1]

function ProductRow({ product, index }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const [added,   setAdded]   = useState(false)
  const [qty,     setQty]     = useState(1)

  const handleAdd = () => {
    addItem(product, qty)
    setAdded(true)
    setQty(1)
    setTimeout(() => setAdded(false), 1800)
  }

  const decQty = (e) => { e.stopPropagation(); setQty(q => Math.max(1, q - 1)) }
  const incQty = (e) => { e.stopPropagation(); setQty(q => Math.min(9, q + 1)) }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={product.name}
      className="product-row"
    >
      {/* Thumbnail */}
      <div
        style={{
          width: '90px',
          height: '90px',
          flexShrink: 0,
          borderRadius: '0.85rem',
          overflow: 'hidden',
          background: 'var(--bg-2)',
          transition: 'transform 0.4s ease',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      >
        <img
          src={product.img}
          alt={product.imgAlt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Grade label + badge + unit */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '0.3rem',
          }}
        >
          <span
            style={{
              fontFamily: "var(--f-display)",
              fontSize: '0.88rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            {product.label}
          </span>
          {product.badge && (
            <span
              style={{
                padding: '3px 9px',
                borderRadius: '999px',
                background: 'var(--ink)',
                color: 'var(--bg)',
                fontSize: '0.88rem',
                letterSpacing: '0.06em',
                fontWeight: 700,
              }}
            >
              {product.badge}
            </span>
          )}
          <span
            style={{
              fontFamily: 'var(--f-body)',
              fontSize: '1.05rem',
              color: 'var(--mute-2)',
              fontWeight: 500,
            }}
          >
            {product.unit}
          </span>
        </div>

        {/* Name */}
        <h3
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.5rem)',
            fontWeight: 700,
            color: 'var(--ink)',
            lineHeight: 1.2,
            marginBottom: '0.35rem',
          }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--f-body)',
            fontSize: '1.1rem',
            color: 'var(--mute)',
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.desc}
        </p>
      </div>

      {/* Price */}
      <strong
        style={{
          fontFamily: 'var(--f-body)',
          fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)',
          fontWeight: 900,
          color: 'var(--ink)',
          letterSpacing: '-0.01em',
          fontVariantNumeric: 'tabular-nums',
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
      >
        ₪{product.price}
      </strong>

      {/* Quantity selector */}
      {!added && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            border: '1.5px solid var(--line-2)',
            borderRadius: '999px',
            overflow: 'hidden',
            flexShrink: 0,
          }}
          aria-label="כמות"
        >
          <button
            onClick={decQty}
            aria-label="הפחת כמות"
            style={{
              padding: '0.6rem 0.85rem',
              background: 'transparent',
              border: 'none',
              cursor: qty === 1 ? 'not-allowed' : 'pointer',
              fontSize: '1.1rem',
              color: qty === 1 ? 'var(--mute-2)' : 'var(--ink)',
              lineHeight: 1,
              transition: 'color 0.15s',
            }}
          >−</button>
          <span
            style={{
              minWidth: '1.75rem',
              textAlign: 'center',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--ink)',
              userSelect: 'none',
            }}
            aria-live="polite"
            aria-atomic="true"
          >
            {qty}
          </span>
          <button
            onClick={incQty}
            aria-label="הוסף כמות"
            style={{
              padding: '0.6rem 0.85rem',
              background: 'transparent',
              border: 'none',
              cursor: qty === 9 ? 'not-allowed' : 'pointer',
              fontSize: '1.1rem',
              color: qty === 9 ? 'var(--mute-2)' : 'var(--ink)',
              lineHeight: 1,
              transition: 'color 0.15s',
            }}
          >+</button>
        </div>
      )}

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        aria-label={`הוסף ${product.name} לעגלה`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: '0.65rem 1.35rem',
          borderRadius: '999px',
          background: added ? 'var(--accent)' : hovered ? 'var(--ink)' : 'transparent',
          color: added || hovered ? 'var(--bg)' : 'var(--ink)',
          border: '1.5px solid',
          borderColor: added ? 'var(--accent)' : hovered ? 'var(--ink)' : 'var(--line-2)',
          fontWeight: 700,
          fontSize: '1.05rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          transition: 'all 0.25s ease',
          minWidth: '8rem',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        {added ? `✓ נוסף${qty > 1 ? ` (${qty})` : ''}` : 'הוסף לעגלה'}
      </button>
    </motion.article>
  )
}

export default function Products() {
  return (
    <section
      id="products"
      style={{
        paddingBlock: 'clamp(4rem, 9vw, 8rem)',
        background: 'var(--bg)',
      }}
      aria-label="הקולקציה שלנו"
    >
      <div className="container">

        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingBottom: '1.5rem',
            marginBottom: '0.25rem',
            borderBottom: '2px solid var(--ink)',
          }}
        >
          <div style={{ textAlign: 'right' }}>
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
              הקולקציה שלנו
            </h2>
            <p
              style={{
                fontFamily: 'var(--f-body)',
                fontSize: '1rem',
                color: 'var(--mute)',
                marginTop: '0.5rem',
                maxWidth: '36rem',
                lineHeight: 1.65,
              }}
            >
              כל המוצרים שלנו מגיעים ישירות מגדלנים משפחתיים באוג׳י, קיוטו — ללא ספקי ביניים, ללא פשרות על איכות.
            </p>
          </div>

          <a
            href="#"
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--mute)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'color 0.2s',
              textDecoration: 'none',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute)'}
          >
            <span aria-hidden="true">←</span>
            כל המוצרים
          </a>
        </div>

        {/* Grade guide */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem 1.25rem',
            background: 'rgba(61,110,28,0.06)',
            borderRadius: '0.85rem',
            marginBottom: '0.75rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: "var(--f-display)",
              fontSize: '0.88rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            מדריך דרגות
          </span>
          <span style={{ fontFamily: 'var(--f-body)', fontSize: '1rem', color: 'var(--mute)' }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>Ceremonial</strong> — לשתייה טהורה בקערה
          </span>
          <span style={{ color: 'var(--line-2)' }}>·</span>
          <span style={{ fontFamily: 'var(--f-body)', fontSize: '1rem', color: 'var(--mute)' }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>Premium</strong> — שתייה + אפייה
          </span>
          <span style={{ color: 'var(--line-2)' }}>·</span>
          <span style={{ fontFamily: 'var(--f-body)', fontSize: '1rem', color: 'var(--mute)' }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>Latte Blend</strong> — עם חלב, כל יום
          </span>
        </div>

        {/* Product list */}
        <div role="list" aria-label="מוצרים">
          {PRODUCTS.map((p, i) => (
            <div key={p.id} role="listitem">
              <ProductRow product={p} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          style={{
            marginTop: '1.5rem',
            fontFamily: 'var(--f-body)',
            fontSize: '1.1rem',
            color: 'var(--mute-2)',
            textAlign: 'center',
            lineHeight: 1.7,
          }}
        >
          משלוח חינם בהזמנה ראשונה &nbsp;·&nbsp; 100% אורגני מוסמך &nbsp;·&nbsp; אחריות שביעות רצון מלאה
        </p>

      </div>
    </section>
  )
}
