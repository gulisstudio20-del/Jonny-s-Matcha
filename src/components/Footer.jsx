function smoothScroll(e, href) {
  if (href === '#') return
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

const shopLinks = [
  { href: '#products', label: 'מאצ׳ה טקסי' },
  { href: '#products', label: 'מאצ׳ה פרימיום' },
  { href: '#products', label: 'בלנד לאטה' },
]

const infoLinks = [
  { href: '#about',   label: 'הסיפור שלי' },
  { href: '#contact', label: 'צור קשר' },
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
          <div style={{ textAlign: 'center' }}>
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
            <p style={{ fontSize: '1.1rem', color: 'var(--mute)', lineHeight: 1.75, maxWidth: '18rem', marginInline: 'auto' }}>
              המאצ׳ה שלי — מאוג׳י, קיוטו, ישר אליכם.
            </p>
          </div>

          {/* Shop */}
          <nav aria-label="חנות" style={{ textAlign: 'center' }}>
            <h3
              style={{
                fontFamily: 'var(--f-body)',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                marginBottom: '1.5rem',
              }}
            >
              חנות
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', listStyle: 'none', padding: 0 }}>
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    style={{ fontSize: '1.2rem', color: 'var(--mute)', textDecoration: 'none', transition: 'color 0.2s' }}
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
          <nav aria-label="מידע" style={{ textAlign: 'center' }}>
            <h3
              style={{
                fontFamily: 'var(--f-body)',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                marginBottom: '1.5rem',
              }}
            >
              מידע
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', listStyle: 'none', padding: 0 }}>
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    style={{ fontSize: '1.2rem', color: 'var(--mute)', textDecoration: 'none', transition: 'color 0.2s' }}
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
          <div style={{ textAlign: 'center' }}>
            <h3
              style={{
                fontFamily: 'var(--f-body)',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                marginBottom: '1.5rem',
              }}
            >
              צור קשר
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', listStyle: 'none', padding: 0 }}>
              <li>
                <a
                  href="mailto:hello@jonnymatcha.co.il"
                  style={{ fontSize: '1.15rem', color: 'var(--mute)', textDecoration: 'none', transition: 'color 0.2s', direction: 'ltr', display: 'inline-block' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mute)'}
                >
                  hello@jonnymatcha.co.il
                </a>
              </li>
              <li style={{ fontSize: '1.1rem', color: 'var(--mute)' }}>משלוחים בכל הארץ</li>
              <li style={{ fontSize: '1.1rem', color: 'var(--mute)' }}>✓ משלוח חינם בהזמנה ראשונה</li>
              <li style={{ fontSize: '1.1rem', color: 'var(--mute)' }}>✓ 100% אורגני</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem 2rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--line)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '1.15rem', color: 'var(--mute)' }}>
            © jonny's matcha {new Date().getFullYear()} — כל הזכויות שמורות
          </p>

          <nav style={{ display: 'flex', gap: '1.5rem' }} aria-label="קישורי מידע משפטי">
            {[{ href: '/accessibility.html', label: 'נגישות' }, { href: '/privacy.html', label: 'פרטיות' }, { href: '/terms.html', label: 'תנאי שימוש' }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ fontSize: '1.15rem', color: 'var(--mute)', textDecoration: 'none', transition: 'color 0.2s' }}
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
