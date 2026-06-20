import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

const navLinks = [
  { href: '#products', label: 'חנות' },
  { href: '#gifts',    label: 'סטים' },
  { href: '#about',    label: 'אודות' },
  { href: '#contact',  label: 'צור קשר' },
]

function smoothScroll(e, href) {
  e.preventDefault()
  if (href === '#') return
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { count, setIsOpen: openCart } = useCart()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = '' }
  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          insetInline: 0,
          zIndex: 50,
          padding: scrolled ? '0.75rem 0' : '1rem 0',
          background: scrolled ? 'rgba(242,237,226,0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Cart — right side (start in RTL) */}
          <button
            onClick={() => openCart(true)}
            aria-label={`עגלת קניות — ${count} פריטים`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.5rem 1.1rem',
              borderRadius: '999px',
              border: '1px solid var(--line-2)',
              background: 'transparent',
              color: 'var(--ink)',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.06em',
              cursor: 'pointer',
              transition: 'all 0.2s',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--line-2)'
              e.currentTarget.style.color = 'var(--ink)'
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span>עגלה</span>
            {count > 0 && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '17px',
                  height: '17px',
                  borderRadius: '50%',
                  background: 'var(--ink)',
                  color: 'var(--bg)',
                  fontSize: '10px',
                  fontWeight: 900,
                }}
                aria-hidden="true"
              >
                {count}
              </span>
            )}
          </button>

          {/* Desktop nav — center, glass pill */}
          <nav
            role="navigation"
            aria-label="ניווט ראשי"
            className="hidden lg:flex"
            style={{
              alignItems: 'center',
              gap: '0.15rem',
              background: 'rgba(10,20,7,0.04)',
              border: '1px solid var(--line)',
              borderRadius: '999px',
              padding: '0.3rem 0.4rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                style={{
                  display: 'block',
                  padding: '0.35rem 1rem',
                  borderRadius: '999px',
                  color: 'var(--mute)',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  transition: 'color 0.2s, background 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--ink)'
                  e.currentTarget.style.background = 'rgba(10,20,7,0.07)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--mute)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Logo + mobile burger — left side (end in RTL) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#hero"
              onClick={(e) => smoothScroll(e, '#hero')}
              dir="ltr"
              aria-label="jonny's matcha — חזרה לראש הדף"
              style={{
                fontFamily: 'var(--f-display)',
                fontSize: '1.05rem',
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontWeight: 800 }}>jonny's</span>{' '}
              <span style={{ fontWeight: 300, color: 'var(--accent)' }}>matcha</span>
            </a>

            {/* Mobile burger */}
            <button
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
              className="lg:hidden"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '0.35rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px',
                    height: '1.5px',
                    background: 'var(--ink)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    transformOrigin: 'center',
                    transform: menuOpen
                      ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                        : i === 1 ? 'scaleX(0)'
                        : 'rotate(-45deg) translate(4.5px, -4.5px)'
                      : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="תפריט ניווט"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.75rem',
              background: 'var(--bg)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { smoothScroll(e, link.href); closeMenu() }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: 'clamp(2rem, 6vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'var(--ink)',
                  letterSpacing: '-0.03em',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink)'}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.button
              onClick={() => { openCart(true); closeMenu() }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="btn-dark"
              style={{ marginTop: '0.5rem' }}
            >
              עגלת קניות
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
