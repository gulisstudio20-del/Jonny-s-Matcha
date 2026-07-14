function smoothScroll(e, href) {
  if (href === '#') return
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

const shopLinks = [
  { href: '#products', label: 'מאצ׳ה טקסי' },
  { href: '#products', label: 'מאצ׳ה פרימיום' },
  { href: '#gifts',    label: 'סטי מתנה' },
  { href: '#products', label: 'בלנד לאטה' },
]

const infoLinks = [
  { href: '#about',   label: 'הסיפור שלנו' },
  { href: '#',        label: 'בלוג מאצ׳ה' },
  { href: '#',        label: 'שאלות נפוצות' },
  { href: '#contact', label: 'צור קשר' },
]

const socialLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'TikTok' },
  { href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--line)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
      }}
      role="contentinfo"
      aria-label="כותרת תחתית"
    >
      <div className="container">

        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 15rem), 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand column */}
          <div>
            <a
              href="#hero"
              onClick={(e) => smoothScroll(e, '#hero')}
              dir="ltr"
              aria-label="jonny's matcha — חזרה לראש הדף"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--f-display)',
                fontSize: '1.3rem',
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                textDecoration: 'none',
                marginBottom: '1rem',
              }}
            >
              <span style={{ fontWeight: 800 }}>jonny's</span>{' '}
              <span style={{ fontWeight: 300, color: 'var(--accent)' }}>matcha</span>
            </a>
            <p style={{ fontSize: '1rem', color: 'var(--mute)', lineHeight: 1.75, maxWidth: '18rem', marginBottom: '1.5rem' }}>
              המאצ׳ה של רוני  
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.97rem',
                    fontWeight: 600,
                    color: 'var(--mute)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute)'}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <nav aria-label="חנות">
            <h3
              style={{
                fontFamily: 'var(--f-body)',
                fontSize: '0.97rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                marginBottom: '1.5rem',
              }}
            >
              חנות
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', listStyle: 'none', padding: 0 }}>
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    style={{ fontSize: '1.05rem', color: 'var(--mute)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Info */}
          <nav aria-label="מידע">
            <h3
              style={{
                fontFamily: 'var(--f-body)',
                fontSize: '0.97rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                marginBottom: '1.5rem',
              }}
            >
              מידע
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', listStyle: 'none', padding: 0 }}>
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    style={{ fontSize: '1.05rem', color: 'var(--mute)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / trust */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--f-body)',
                fontSize: '0.97rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                marginBottom: '1.5rem',
              }}
            >
              צור קשר
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', listStyle: 'none', padding: 0 }}>
              <li>
                <a
                  href="mailto:hello@jonnymatcha.co.il"
                  style={{ fontSize: '0.95rem', color: 'var(--mute)', textDecoration: 'none', transition: 'color 0.2s', direction: 'ltr', display: 'inline-block' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute)'}
                >
                  hello@jonnymatcha.co.il
                </a>
              </li>
              <li style={{ fontSize: '1rem', color: 'var(--mute-2)' }}>משלוחים בכל הארץ</li>
              <li style={{ fontSize: '1rem', color: 'var(--mute-2)' }}>✓ משלוח חינם בהזמנה ראשונה</li>
              <li style={{ fontSize: '1rem', color: 'var(--mute-2)' }}>✓ 100% אורגני</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--line)',
          }}
        >
          <p style={{ fontSize: '0.95rem', color: 'var(--mute-2)' }}>
            © jonny's matcha {new Date().getFullYear()} — כל הזכויות שמורות
          </p>

          <nav style={{ display: 'flex', gap: '1.5rem' }} aria-label="קישורי מידע משפטי">
            {[{ href: '/accessibility', label: 'נגישות' }, { href: '/privacy', label: 'פרטיות' }, { href: '/terms', label: 'תנאי שימוש' }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ fontSize: '0.95rem', color: 'var(--mute-2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute-2)'}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  )
}
