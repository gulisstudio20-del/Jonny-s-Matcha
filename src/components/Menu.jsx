import { motion } from 'framer-motion'
import matchaProduct from '../../assets/images/matcha-product.jpg'
import { viewport } from '../animations'

function scrollToContact(e) {
  e.preventDefault()
  const el = document.querySelector('#contact')
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Menu() {
  return (
    <section
      id="menu"
      style={{
        paddingBlock: 'clamp(4rem, 9vw, 8rem)',
        background: '#FFFFFF',
      }}
      aria-label="המוצר שלי"
    >
      <div className="container" style={{ textAlign: 'center' }}>

        {/* Pre-sale badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.1rem',
            borderRadius: '999px',
            background: 'rgba(61,110,28,0.08)',
            marginBottom: '2rem',
          }}
        >
          <span
            aria-hidden="true"
            style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}
          />
          <span
            dir="ltr"
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Pre-Sale
          </span>
        </div>

        <motion.img
          src={matchaProduct}
          alt="אריזת מאצ׳ה של jonny's matcha"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          style={{
            width: 'min(38rem, 92vw)',
            marginInline: 'auto',
            display: 'block',
          }}
        />

        <p
          style={{
            marginTop: '2rem',
            fontSize: '1.1rem',
            color: 'var(--mute)',
            lineHeight: 1.7,
          }}
        >
          לפני שהיא יוצאת לכולם — אתם יכולים להיות ראשונים.
        </p>

        <a
          href="#contact"
          onClick={scrollToContact}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginTop: '0.75rem',
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'var(--accent)',
            textDecoration: 'none',
          }}
        >
          <span>להרשמה למכירה המוקדמת</span>
          <span aria-hidden="true">←</span>
        </a>

      </div>
    </section>
  )
}
