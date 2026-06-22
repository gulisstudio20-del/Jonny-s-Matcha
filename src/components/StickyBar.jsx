import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PRODUCTS } from './Products'
import { useCart } from '../context/CartContext'

const ease = [0.16, 1, 0.3, 1]

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [added,   setAdded]   = useState(null)
  const { addItem } = useCart()

  useEffect(() => {
    const section = document.querySelector('#products')
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleAdd = (product) => {
    addItem(product)
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1600)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="הוספה מהירה לעגלה"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease }}
          style={{
            position: 'fixed',
            bottom: 0,
            insetInline: 0,
            zIndex: 45,
            background: 'rgba(9,15,7,0.97)',
            backdropFilter: 'blur(24px)',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            padding: '0.9rem 1.5rem',
          }}
        >
          <div
            style={{
              maxWidth: '82rem',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {/* Label */}
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(242,237,226,0.35)',
                flexShrink: 0,
              }}
            >
              הוספה מהירה
            </span>

            {/* Product pills */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', flex: 1 }}>
              {PRODUCTS.map((p) => {
                const isAdded = added === p.id
                return (
                  <motion.button
                    key={p.id}
                    onClick={() => handleAdd(p)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label={`הוסף ${p.name} לעגלה — ₪${p.price}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      padding: '0.55rem 1.1rem',
                      borderRadius: '999px',
                      background: isAdded
                        ? 'var(--accent)'
                        : 'rgba(255,255,255,0.07)',
                      border: `1px solid ${isAdded ? 'var(--accent)' : 'rgba(255,255,255,0.1)'}`,
                      color: '#fff',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background 0.2s, border-color 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {isAdded ? (
                      <span>✓ נוסף לעגלה</span>
                    ) : (
                      <>
                        <span>{p.name}</span>
                        <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                        <span style={{ color: 'var(--accent-2)', fontWeight: 700 }}>₪{p.price}</span>
                      </>
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* View cart link */}
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'rgba(242,237,226,0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                flexShrink: 0,
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(242,237,226,0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(242,237,226,0.4)'}
            >
              לקולקציה ↑
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
