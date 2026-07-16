import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

const navLinks = [
  { href: '#products', label: 'חנות' },
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
          padding: scrolled ? '1.1rem 0' : '1.75rem 0',
          background: scrolled ? 'rgba(242,237,226,0.94)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
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
              padding: '0.65rem 1.1rem',
              borderRadius: '999px',
              border: `1.5px solid ${scrolled ? 'var(--line-2)' : 'rgba(242,237,226,0.35)'}`,
              background: 'transparent',
              color: scrolled ? 'var(--ink)' : 'var(--bg)',
              fontWeight: 700,
              fontSize: '0.92rem',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
              position: 'relative',
              minHeight: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-2)'
              e.currentTarget.style.color = 'var(--accent-2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = scrolled ? 'var(--line-2)' : 'rgba(242,237,226,0.35)'
              e.currentTarget.style.color = scrolled ? 'var(--ink)' : 'var(--bg)'
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {/* Hide label on mobile — icon + badge is enough */}
            <span className="hidden sm:inline">עגלה</span>
            {count > 0 && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: scrolled ? 'var(--ink)' : 'var(--bg)',
                  color: scrolled ? 'var(--bg)' : 'var(--ink)',
                  fontSize: '10px',
                  fontWeight: 900,
                  transition: 'background 0.4s ease, color 0.4s ease',
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
              gap: '0.2rem',
              background: scrolled ? 'rgba(10,20,7,0.05)' : 'rgba(242,237,226,0.1)',
              border: `1px solid ${scrolled ? 'var(--line)' : 'rgba(242,237,226,0.18)'}`,
              borderRadius: '999px',
              padding: '0.4rem 0.5rem',
              transition: 'background 0.4s ease, border-color 0.4s ease',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                style={{
                  display: 'block',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '999px',
                  color: scrolled ? 'var(--mute)' : 'rgba(242,237,226,0.85)',
                  fontSize: '0.97rem',
                  fontWeight: 500,
                  transition: 'color 0.2s, background 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = scrolled ? 'var(--ink)' : 'var(--bg)'
                  e.currentTarget.style.background = scrolled ? 'rgba(10,20,7,0.07)' : 'rgba(242,237,226,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? 'var(--mute)' : 'rgba(242,237,226,0.85)'
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
                fontSize: '1.55rem',
                letterSpacing: '-0.03em',
                color: scrolled ? 'var(--ink)' : 'var(--bg)',
                textDecoration: 'none',
                transition: 'color 0.4s ease',
              }}
            >
              <span style={{ fontWeight: 800 }}>jonny's</span>{' '}
              <span style={{ fontWeight: 300, color: scrolled ? 'var(--accent)' : 'rgba(90,155,42,0.9)' }}>matcha</span>
            </a>

            {/* Mobile burger — 44×44 touch target */}
            <button
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
              className="lg:hidden"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5.5px',
                minWidth: '44px',
                minHeight: '44px',
                padding: '0',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '24px',
                    height: '1.5px',
                    background: scrolled ? 'var(--ink)' : 'var(--bg)',
                    borderRadius: '2px',
                    transition: 'transform 0.3s ease, opacity 0.3s ease, background 0.4s ease',
                    transformOrigin: 'center',
                    transform: menuOpen
                      ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                        : i === 1 ? 'scaleX(0)'
                        : 'rotate(-45deg) translate(5px, -5px)'
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
                  fontSize: 'clamp(2.2rem, 7vw, 3rem)',
                  fontWeight: 800,
                  color: 'var(--ink)',
                  letterSpacing: '-0.03em',
                  textDecoration: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
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
