function smoothScroll(e, href) {
  if (href === '#') return
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' })
}

const navLinks   = [{ href: '#hero', label: 'ראשי' }, { href: '#products', label: 'מוצרים' }, { href: '#about', label: 'הסיפור' }, { href: '#process', label: 'תהליך' }]
const serviceLinks = [{ href: '#', label: 'משלוחים' }, { href: '#', label: 'החזרות' }, { href: '#', label: 'שאלות נפוצות' }, { href: '#contact', label: 'צרו קשר' }]
const socialLinks  = [{ href: '#', label: 'אינסטגרם', icon: '📷' }, { href: '#', label: 'פייסבוק', icon: '📘' }, { href: '#', label: 'טיקטוק', icon: '🎵' }, { href: '#', label: 'ווטסאפ', icon: '💬' }]

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: '#060E05' }}
      role="contentinfo"
      aria-label="כותרת תחתית"
    >
      <div className="container">
        {/* Divider */}
        <div
          className="h-px mb-14 opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, var(--c-matcha), transparent)' }}
          aria-hidden="true"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 mb-14">

          {/* Brand */}
          <div>
            <a
              href="#hero"
              onClick={(e) => smoothScroll(e, '#hero')}
              dir="ltr"
              className="block mb-3 font-sans font-black text-3xl leading-none"
              style={{ color: 'rgba(255,255,255,0.9)' }}
              aria-label="jonny's matcha — חזרה לראש הדף"
            >
              jonny's <span className="text-gradient">matcha</span>
            </a>
            <p className="text-base leading-[1.75] mb-5" style={{ color: 'rgba(255,255,255,0.32)' }}>
              מאצ׳ה אמיתית מיפן —<br />לאנשים שמרגישים את ההבדל.
            </p>
            <nav aria-label="רשתות חברתיות">
              <ul className="flex gap-4">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label}
                       className="text-xl transition-opacity" style={{ opacity: 0.45 }}
                       onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                       onMouseLeave={(e) => e.currentTarget.style.opacity = '0.45'}>
                      <span aria-hidden="true">{s.icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Nav */}
          <nav aria-label="ניווט מהיר">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>ניווט</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => smoothScroll(e, link.href)}
                     className="text-base transition-colors duration-200"
                     style={{ color: 'rgba(255,255,255,0.32)' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--c-matcha-soft)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.32)'}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service */}
          <nav aria-label="שירות לקוחות">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>שירות</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => smoothScroll(e, link.href)}
                     className="text-base transition-colors duration-200"
                     style={{ color: 'rgba(255,255,255,0.32)' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--c-matcha-soft)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.32)'}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic" aria-label="פרטי יצירת קשר">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>צרו קשר</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hi@jonnysmatcha.co.il"
                   className="text-base transition-colors duration-200"
                   style={{ color: 'rgba(255,255,255,0.32)' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--c-matcha-soft)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.32)'}>
                  hi@jonnysmatcha.co.il
                </a>
              </li>
              <li>
                <a href="tel:0501234567" dir="ltr"
                   className="text-base transition-colors duration-200 block"
                   style={{ color: 'rgba(255,255,255,0.32)' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--c-matcha-soft)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.32)'}>
                  050-123-4567
                </a>
              </li>
              <li>
                <span className="text-base" style={{ color: 'rgba(255,255,255,0.32)' }}>
                  תל אביב, דיזנגוף 99
                </span>
              </li>
              <li>
                <span className="text-base" style={{ color: 'rgba(255,255,255,0.32)' }}>
                  א׳–ה׳ · 9:00–18:00
                </span>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.22)' }}>© 2026 jonny's matcha. כל הזכויות שמורות.</p>
          <div className="flex gap-5">
            {['מדיניות פרטיות', 'תנאי שימוש'].map((label) => (
              <a key={label} href="#"
                 className="text-sm transition-colors"
                 style={{ color: 'rgba(255,255,255,0.18)' }}
                 onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                 onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.18)'}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
