import { useState } from 'react'
import { motion } from 'framer-motion'
import ceremonialImg from '../../assets/images/pexels-ceremonial-powder-7144915.jpg'
import premiumImg    from '../../assets/images/pexels-premium-tin-29821014.jpg'
import matchaCup     from '../../assets/images/matcha-cup.jpg'
import chasenImg     from '../../assets/images/pexels-chasen-8474092.jpg'
import fullKitImg    from '../../assets/images/pexels-full-kit-29821017.jpg'
import { useCart } from '../context/CartContext'

export const PRODUCTS = [
  {
    id:     'ceremonial',
    label:  'Ceremonial Grade',
    name:   'מאצ׳ה טקסי',
    unit:   '30 גרם',
    desc:   'הדרגה הגבוהה ביותר — לשתייה ישירה מהקערה.',
    price:  189,
    img:    ceremonialImg,
    imgAlt: 'אבקת מאצ׳ה סרמוניאלית',
    badge:  'נמכר ביותר',
  },
  {
    id:     'premium',
    label:  'Premium Grade',
    name:   'מאצ׳ה פרימיום',
    unit:   '40 גרם',
    desc:   'לשתייה וגם לאפייה, באיכות מצוינת.',
    price:  149,
    img:    premiumImg,
    imgAlt: 'מאצ׳ה פרימיום בקופסית',
    badge:  'חדש',
  },
  {
    id:     'latte',
    label:  'Latte Blend',
    name:   'מאצ׳ה לאטה',
    unit:   '50 גרם',
    desc:   'קרמי ועדין, מושלם לבוקר.',
    price:  129,
    img:    matchaCup,
    imgAlt: 'מאצ׳ה לאטה קרה',
    badge:  null,
  },
]

const ACCESSORIES = [
  {
    id:     'chasen',
    label:  'ציוד הכנה',
    name:   'צייסן במבוק',
    unit:   '1 יחידה',
    desc:   'צייסן מסורתי במבוק, להקצפה חלקה.',
    price:  65,
    img:    chasenImg,
    imgAlt: 'צייסן במבוק ביד',
    badge:  null,
  },
  {
    id:     'chawan',
    label:  'ציוד הכנה',
    name:   'ערכת הכנה מלאה',
    unit:   'צייסן + מסננת + קערה + אבקה',
    desc:   'כל מה שצריך כדי להתחיל, במקום אחד.',
    price:  279,
    img:    fullKitImg,
    imgAlt: 'ערכת הכנת מאצ׳ה מלאה — קערה, מסננת, צייסן ואבקה',
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
        className="product-row-thumb"
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
      <div className="product-row-info" style={{ flex: 1, minWidth: 0 }}>
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
              fontSize: '0.98rem',
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
                fontSize: '0.95rem',
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
              fontSize: '1.1rem',
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
            fontSize: '1.18rem',
            color: 'var(--mute)',
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.desc}
        </p>
      </div>

      {/* Price + Qty + Add — grouped so they wrap together on mobile */}
      <div className="product-row-actions">
        <strong
          className="product-row-price"
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
            className="product-row-qty"
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
                minHeight: '44px',
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
                minHeight: '44px',
              }}
            >+</button>
          </div>
        )}

        {/* Add to cart */}
        <button
          className="product-row-btn"
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
      </div>
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
      aria-label="הקולקציה שלי"
    >
      <div className="container">

        {/* Section header */}
        <div
          style={{
            paddingBottom: '1.5rem',
            marginBottom: '0.25rem',
            borderBottom: '2px solid var(--ink)',
            textAlign: 'center',
          }}
        >
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
            הקולקציה שלי
          </h2>
          <p
            style={{
              fontFamily: 'var(--f-body)',
              fontSize: '1.1rem',
              color: 'var(--mute)',
              marginTop: '0.5rem',
              maxWidth: '36rem',
              lineHeight: 1.65,
              marginInline: 'auto',
            }}
          >
            כל מה שאני מביאה — ישר מיפן, בלי אמצעים.
          </p>
        </div>

        {/* Grade guide */}
        <div
          className="grade-guide"
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem 1.25rem',
            background: 'rgba(61,110,28,0.06)',
            borderRadius: '0.85rem',
            marginBottom: '0.75rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: "var(--f-display)",
              fontSize: '0.98rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            הנה קצת הסבר על הסוגים
          </span>
          <span style={{ fontFamily: 'var(--f-body)', fontSize: '1.08rem', color: 'var(--mute)' }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>Ceremonial</strong> — לשתייה טהורה בקערה
          </span>
          <span className="grade-guide-sep" style={{ color: 'var(--line-2)' }}>·</span>
          <span style={{ fontFamily: 'var(--f-body)', fontSize: '1.08rem', color: 'var(--mute)' }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>Premium</strong> — שתייה + אפייה
          </span>
          <span className="grade-guide-sep" style={{ color: 'var(--line-2)' }}>·</span>
          <span style={{ fontFamily: 'var(--f-body)', fontSize: '1.08rem', color: 'var(--mute)' }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>Latte Blend</strong> — עם חלב, כל יום
          </span>
        </div>

        {/* Matcha product list */}
        <div role="list" aria-label="מוצרי מאצ׳ה">
          {PRODUCTS.map((p, i) => (
            <div key={p.id} role="listitem">
              <ProductRow product={p} index={i} />
            </div>
          ))}
        </div>

        {/* Accessories divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginTop: '2.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--f-body)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--ink)',
              whiteSpace: 'nowrap',
            }}
          >
            ציוד הכנה
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--line-2)' }} aria-hidden="true" />
        </div>

        {/* Accessories list */}
        <div role="list" aria-label="ציוד הכנה">
          {ACCESSORIES.map((p, i) => (
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
          משלוח חינם בהזמנה ראשונה &nbsp;·&nbsp; 100% אורגני &nbsp;·&nbsp; אחריות שביעות רצון מלאה
        </p>

      </div>
    </section>
  )
}
