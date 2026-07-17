import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#menu',    label: 'המאצ׳ה שלי' },
  { href: '#about',   label: 'אודות' },
  { href: '#contact', label: 'הרשמה מוקדמת' },
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
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)', alignItems: 'center', gap: '0.5rem' }}
        >
          {/* Logo — start column (right in RTL) */}
          <div style={{ justifySelf: 'start', minWidth: 0 }}>
            <a
              href="#hero"
              onClick={(e) => smoothScroll(e, '#hero')}
              dir="ltr"
              aria-label="jonny's matcha — חזרה לראש הדף"
              style={{
                fontFamily: 'var(--f-display)',
                fontSize: 'clamp(1.15rem, 4.5vw, 1.55rem)',
                letterSpacing: '-0.03em',
                color: scrolled ? 'var(--ink)' : 'var(--bg)',
                textDecoration: 'none',
                transition: 'color 0.4s ease',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontWeight: 800 }}>jonny's</span>{' '}
              <span style={{ fontWeight: 300, color: scrolled ? 'var(--accent)' : 'rgba(90,155,42,0.9)' }}>matcha</span>
            </a>
          </div>

          {/* Desktop nav — center column, glass pill */}
          <nav
            role="navigation"
            aria-label="ניווט ראשי"
            className="hidden lg:flex"
            style={{
              justifySelf: 'center',
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
                  whiteSpace: 'nowrap',
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

          {/* Mobile burger — end column (left in RTL) */}
          <div style={{ justifySelf: 'end' }}>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
