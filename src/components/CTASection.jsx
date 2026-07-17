import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function CTASection() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('נא להזין כתובת מייל תקינה')
      return
    }
    setError('')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)

    const subject = encodeURIComponent('הרשמה למכירה מוקדמת — jonny\'s matcha')
    const body = encodeURIComponent(`מייל להרשמה: ${email}`)
    window.location.href = `mailto:hello@jonnymatcha.co.il?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      style={{
        paddingBlock: 'clamp(4rem, 10vw, 9rem)',
        background: 'var(--ink-2)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="הרשמה למכירה מוקדמת"
    >
      {/* Subtle green orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,110,28,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{ position: 'relative', zIndex: 1, maxWidth: '44rem', textAlign: 'center' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease }}
        >
          <h2
            style={{
              fontFamily: 'var(--f-body)',
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 800,
              color: 'var(--bg)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            הצטרפו למכירה המוקדמת
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.85,
              color: 'rgba(242,237,226,0.72)',
              marginBottom: '2.5rem',
              maxWidth: '32rem',
              margin: '0 auto 2.5rem',
            }}
          >
            השאירו מייל ותהיו הראשונים לדעת כשהמאצ׳ה שלי יוצאת למכירה.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease }}
                style={{ padding: '2.5rem 0' }}
                role="status"
                aria-live="polite"
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    marginInline: 'auto',
                    fontSize: '1.2rem',
                    color: '#fff',
                  }}
                  aria-hidden="true"
                >
                  ✓
                </div>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--bg)', marginBottom: '0.4rem' }}>
                  תודה!
                </p>
                <p style={{ fontSize: '1rem', color: 'rgba(242,237,226,0.45)' }}>
                  תהיו בין הראשונים לדעת כשזה יוצא.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                exit={{ opacity: 0 }}
                aria-label="טופס הרשמה למכירה מוקדמת"
                style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '28rem', margin: '0 auto' }}
              >
                {/* Honeypot — zero-size hidden, not left:-9999px which breaks RTL scrollWidth */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', width: 0, height: 0, opacity: 0, pointerEvents: 'none', overflow: 'hidden' }}
                />

                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '12rem' }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError('') }}
                      placeholder="האימייל שלכם"
                      dir="ltr"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.25rem',
                        borderRadius: '999px',
                        border: `1px solid ${error ? 'rgba(255,100,100,0.5)' : 'rgba(242,237,226,0.15)'}`,
                        background: 'rgba(242,237,226,0.07)',
                        color: 'var(--bg)',
                        fontSize: '1rem',
                        fontFamily: 'var(--f-body)',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(90,155,42,0.6)'}
                      onBlur={(e) => e.target.style.borderColor = error ? 'rgba(255,100,100,0.5)' : 'rgba(242,237,226,0.15)'}
                      aria-invalid={!!error}
                      aria-describedby={error ? 'email-error' : undefined}
                    />
                    {error && (
                      <p id="email-error" role="alert" style={{ color: '#fca5a5', fontSize: '0.9rem', marginTop: '0.5rem', paddingInlineStart: '0.5rem' }}>
                        {error}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      flexShrink: 0,
                      padding: '0.85rem 1.75rem',
                      borderRadius: '999px',
                      background: 'var(--bg)',
                      color: 'var(--ink)',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.65 : 1,
                      transition: 'transform 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                    onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    aria-busy={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          style={{
                            width: '14px',
                            height: '14px',
                            border: '2px solid rgba(10,20,7,0.25)',
                            borderTopColor: 'var(--ink)',
                            borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite',
                          }}
                          aria-hidden="true"
                        />
                        שולח...
                      </>
                    ) : 'שלחו'}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}
