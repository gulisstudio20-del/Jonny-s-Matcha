import { useState } from 'react'
import { motion } from 'framer-motion'
import heroBowl from '../../assets/images/hero-bowl.png'
import powderImg from '../../assets/images/powder.png'
import toolsImg  from '../../assets/images/tools.png'
import { useCart } from '../context/CartContext'

export const PRODUCTS = [
  {
    id:     'ceremonial',
    label:  'Ceremonial Grade',
    name:   'מאצ׳ה טקסי',
    price:  189,
    img:    heroBowl,
    imgAlt: 'מאצ׳ה סרמוניאלית',
    badge:  'נמכר ביותר',
  },
  {
    id:     'premium',
    label:  'Premium Grade',
    name:   'מאצ׳ה פרימיום',
    price:  149,
    img:    powderImg,
    imgAlt: 'מאצ׳ה פרימיום',
    badge:  'חדש',
  },
  {
    id:     'latte',
    label:  'Latte Blend',
    name:   'מאצ׳ה לאטה',
    price:  129,
    img:    toolsImg,
    imgAlt: 'מאצ׳ה לאטה',
    badge:  null,
  },
]

const ease = [0.16, 1, 0.3, 1]

function ProductRow({ product, index }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

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
          width: '70px',
          height: '70px',
          flexShrink: 0,
          borderRadius: '0.75rem',
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
        <p
          style={{
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: '0.58rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          {product.label}
          {product.badge && (
            <span
              style={{
                padding: '1px 7px',
                borderRadius: '999px',
                background: 'var(--ink)',
                color: 'var(--bg)',
                fontSize: '0.55rem',
                letterSpacing: '0.1em',
              }}
            >
              {product.badge}
            </span>
          )}
        </p>
        <h3
          style={{
            fontSize: 'clamp(1.05rem, 2.5vw, 1.45rem)',
            fontWeight: 700,
            color: 'var(--ink)',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {product.name}
        </h3>
      </div>

      {/* Price */}
      <strong
        style={{
          fontFamily: 'var(--f-display)',
          fontSize: 'clamp(1.35rem, 2.8vw, 1.85rem)',
          fontWeight: 800,
          color: 'var(--ink)',
          letterSpacing: '-0.03em',
          fontVariantNumeric: 'tabular-nums',
          flexShrink: 0,
        }}
      >
        ₪{product.price}
      </strong>

      {/* Add to cart */}
      <button
        onClick={() => addItem(product)}
        aria-label={`הוסף ${product.name} לעגלה`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: '0.6rem 1.25rem',
          borderRadius: '999px',
          background: hovered ? 'var(--ink)' : 'transparent',
          color: hovered ? 'var(--bg)' : 'var(--ink)',
          border: '1px solid',
          borderColor: hovered ? 'var(--ink)' : 'var(--line-2)',
          fontWeight: 700,
          fontSize: '0.78rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          transition: 'all 0.25s ease',
          minWidth: '7rem',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        הוסף
        <span aria-hidden="true" style={{ fontSize: '1.1rem', lineHeight: 1, fontWeight: 300 }}>+</span>
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
            paddingBottom: '2rem',
            marginBottom: '0.5rem',
            borderBottom: '2px solid var(--ink)',
          }}
        >
          <a
            href="#"
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--mute)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'color 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute)'}
          >
            <span aria-hidden="true">←</span>
            לכל המוצרים
          </a>

          <div style={{ textAlign: 'right' }}>
            <span className="section-label">ישירות מהחוה</span>
            <h2
              style={{
                fontFamily: 'var(--f-display)',
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--ink)',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
              }}
            >
              הקולקציה שלנו
            </h2>
          </div>
        </div>

        {/* Product list */}
        <div role="list" aria-label="מוצרים">
          {PRODUCTS.map((p, i) => (
            <div key={p.id} role="listitem">
              <ProductRow product={p} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
