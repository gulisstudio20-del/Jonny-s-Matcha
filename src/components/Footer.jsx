function smoothScroll(e, href) {
  if (href === '#') return
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

const shopLinks = [
  { href: '#products', label: 'מאצ׳ה טקסי' },
  { href: '#products', label: 'פרימיום' },
  { href: '#gifts',    label: 'סטים' },
  { href: '#products', label: 'אביזרים' },
]

const infoLinks = [
  { href: '#about',   label: 'אודות' },
  { href: '#',        label: 'בלוג' },
  { href: '#',        label: 'שאלות נפוצות' },
  { href: '#contact', label: 'צור קשר' },
]

const socialLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'TikTok' },
  { href: '#', label: 'Facebook' },
]

const linkStyle = {
  fontSize: '0.88rem',
  color: 'var(--mute)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  display: 'inline-block',
}

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--line)',
        paddingTop: '3.5rem',
        paddingBottom: '2rem',
      }}
      role="contentinfo"
      aria-label="כותרת תחתית"
    >
      <div className="container">

        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 13rem), 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
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
                fontSize: '1.05rem',
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                textDecoration: 'none',
                marginBottom: '0.85rem',
              }}
            >
              <span style={{ fontWeight: 800 }}>jonny's</span>{' '}
              <span style={{ fontWeight: 300, color: 'var(--accent)' }}>matcha</span>
            </a>
            <p style={{ fontSize: '0.88rem', color: 'var(--mute)', lineHeight: 1.7, maxWidth: '16rem' }}>
              מאצ׳ה טקסי מיפן — לכוס שתזכרו.
            </p>
          </div>

          {/* Shop */}
          <nav aria-label="חנות">
            <h3
              style={{
                fontFamily: 'var(--f-display)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                marginBottom: '1.25rem',
              }}
            >
              חנות
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', listStyle: 'none', padding: 0 }}>
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    style={linkStyle}
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
                fontFamily: 'var(--f-display)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                marginBottom: '1.25rem',
              }}
            >
              מידע
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', listStyle: 'none', padding: 0 }}>
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    style={linkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--line)',
          }}
        >
          <nav style={{ display: 'flex', gap: '1.5rem' }} aria-label="רשתות חברתיות">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, fontSize: '0.8rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute)'}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <p style={{ fontSize: '0.78rem', color: 'var(--mute-2)' }}>
            © jonny's matcha {new Date().getFullYear()}
          </p>

          <nav style={{ display: 'flex', gap: '1.25rem' }} aria-label="קישורי מידע משפטי">
            {[{ href: '/accessibility', label: 'נגישות' }, { href: '/privacy', label: 'פרטיות' }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ ...linkStyle, fontSize: '0.78rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute)'}
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
