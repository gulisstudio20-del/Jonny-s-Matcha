import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

const navLinks = [
  { href: '#about', label: 'הסיפור שלנו' },
  { href: '#products', label: 'מוצרים' },
  { href: '#process', label: 'תהליך' },
  { href: '#testimonials', label: 'לקוחות' },
]

function smoothScroll(e, href) {
  e.preventDefault()
  if (href === '#') return
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' })
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, setIsOpen: openCart } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (window.innerWidth >= 1024 && menuOpen) closeMenu()
  })

  const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = '' }
  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const dark = !scrolled && !menuOpen

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-cream/92 backdrop-blur-2xl border-b border-ink/[0.06]'
            : 'py-5'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => smoothScroll(e, '#hero')}
            aria-label="jonny's matcha — חזרה לראש הדף"
            dir="ltr"
            className={`font-sans font-black text-2xl tracking-tight transition-colors duration-500 ${
              dark ? 'text-white' : 'text-ink'
            }`}
          >
            jonny's <span className="text-gradient">matcha</span>
          </a>

          {/* Desktop nav */}
          <nav role="navigation" aria-label="ניווט ראשי" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                className={`text-base font-medium transition-colors duration-200 ${
                  dark ? 'text-white/65 hover:text-white' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart button */}
            <button
              onClick={() => openCart(true)}
              aria-label={`עגלת קניות — ${count} פריטים`}
              className={`relative p-2 rounded-full transition-all duration-200 ${
                dark ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-ink-soft hover:text-ink hover:bg-ink/5'
              }`}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {count > 0 && (
                <span
                  className="absolute -top-0.5 -left-0.5 w-4 h-4 rounded-full text-white text-[10px] font-bold
                             flex items-center justify-center"
                  style={{ background: 'var(--c-matcha)' }}
                  aria-hidden="true"
                >
                  {count}
                </span>
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
              className={`hidden lg:block text-base font-bold px-6 py-3 rounded-full transition-all duration-300 ${
                dark
                  ? 'bg-white/15 text-white border border-white/20 hover:bg-white/25'
                  : 'text-white hover:opacity-90'
              }`}
              style={dark ? {} : { background: 'var(--c-forest)' }}
            >
              הזמינו עכשיו
            </a>

            {/* Mobile toggle */}
            <button
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
              className="lg:hidden flex flex-col gap-[5px] p-2"
            >
              {[
                menuOpen ? 'rotate-45 translate-y-[7px]' : '',
                menuOpen ? 'opacity-0 scale-x-0' : '',
                menuOpen ? '-rotate-45 -translate-y-[7px]' : '',
              ].map((cls, i) => (
                <span
                  key={i}
                  className={`block w-6 h-0.5 rounded transition-all duration-300 origin-center ${
                    dark && !menuOpen ? 'bg-white' : 'bg-ink'
                  } ${cls}`}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
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
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-cream/97 backdrop-blur-xl
                       flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { smoothScroll(e, link.href); closeMenu() }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-4xl font-bold text-ink hover:text-matcha-dark transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => { smoothScroll(e, '#contact'); closeMenu() }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="btn-gradient mt-2"
            >
              <span>הזמינו עכשיו</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
