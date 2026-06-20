import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, fadeRight, viewport } from '../animations'

// ─── Validation ───────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^0(5[0-9]|[2-489][0-9]?)[0-9]{6,7}$/

function validate(values) {
  const errors = {}

  if (!values.name.trim())
    errors.name = 'שם מלא הוא שדה חובה'
  else if (values.name.trim().length < 2)
    errors.name = 'שם חייב להכיל לפחות 2 תווים'

  if (!values.email.trim())
    errors.email = 'כתובת מייל היא שדה חובה'
  else if (!EMAIL_RE.test(values.email))
    errors.email = 'כתובת המייל אינה תקינה'

  const rawPhone = values.phone.replace(/[\s\-]/g, '')
  if (!values.phone.trim())
    errors.phone = 'מספר טלפון הוא שדה חובה'
  else if (!PHONE_RE.test(rawPhone))
    errors.phone = 'מספר לא תקין (לדוגמה: 050-1234567)'

  if (values.message.length > 500)
    errors.message = `ארוכה מדי (${values.message.length}/500)`

  return errors
}

const INITIAL = { name: '', email: '', phone: '', message: '' }

// ─── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white/65 mb-1.5">
        {label}
      </label>
      {children}
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            key={error}
            role="alert"
            aria-live="polite"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="form-error"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function CTASection() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) {
      const errs = validate({ ...values, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: errs[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    const errs = validate(values)
    setErrors((prev) => ({ ...prev, [name]: errs[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, message: true })
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 1100)) // replace with real API
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-20 pb-28"
      aria-label="צרו קשר"
    >
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative rounded-4xl overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0B1A09 0%, #152B12 100%)' }}
        >
          {/* Aurora decoration */}
          <div
            className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(121,184,53,0.1) 0%, transparent 65%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 left-10 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(201,168,92,0.07) 0%, transparent 65%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid lg:grid-cols-[1fr_1.1fr] gap-14 p-10 lg:p-16">
            {/* Copy */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <span className="section-tag-dark">צרו קשר</span>
              <h2 className="font-serif font-black text-section text-white mb-4" style={{ overflow: 'visible', lineHeight: 1.2 }}>
                נשמח{' '}
                <em className="italic text-gradient">
                  לשמוע
                </em>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed mb-10 max-w-sm">
                שאלות על המוצרים? רוצים לדעת עוד?
                השאירו פרטים ונחזור אליכם תוך יום עסקים.
              </p>

              <ul className="space-y-4" aria-label="יתרונות הזמנה">
                {[
                  { text: 'משלוח חינם בהזמנה ראשונה' },
                  { text: 'מאצ׳ה אורגנית מוסמכת מיפן' },
                  { text: 'החזרה מלאה תוך 30 יום' },
                  { text: 'שירות לקוחות זמין א׳–ש׳' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--c-matcha)' }} aria-hidden="true" />
                    <span className="text-white/55 text-base font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Form / Success */}
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-12 text-center flex flex-col items-center justify-center"
                  role="status"
                  aria-live="polite"
                >
                  <div
                    className="w-16 h-16 rounded-full bg-gradient-matcha flex items-center justify-center text-2xl mb-5"
                    aria-hidden="true"
                  >
                    🍃
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">ההודעה נשלחה</h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    ניצור איתכם קשר תוך יום עסקים.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setValues(INITIAL); setTouched({}) }}
                    className="mt-8 text-sm text-matcha-soft underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    שלחו הודעה נוספת
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="טופס יצירת קשר"
                  className="space-y-4"
                  exit={{ opacity: 0 }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="שם מלא *" id="name" error={errors.name}>
                      <input
                        type="text" id="name" name="name" value={values.name}
                        onChange={handleChange} onBlur={handleBlur}
                        autoComplete="name" placeholder="ישראל ישראלי"
                        className={`form-field-dark ${errors.name ? 'border-red-400/60' : ''}`}
                        aria-required="true" aria-invalid={!!errors.name}
                      />
                    </Field>
                    <Field label="טלפון *" id="phone" error={errors.phone}>
                      <input
                        type="tel" id="phone" name="phone" value={values.phone}
                        onChange={handleChange} onBlur={handleBlur}
                        autoComplete="tel" placeholder="050-1234567"
                        dir="ltr"
                        className={`form-field-dark text-right ${errors.phone ? 'border-red-400/60' : ''}`}
                        aria-required="true" aria-invalid={!!errors.phone}
                      />
                    </Field>
                  </div>

                  <Field label="כתובת מייל *" id="email" error={errors.email}>
                    <input
                      type="email" id="email" name="email" value={values.email}
                      onChange={handleChange} onBlur={handleBlur}
                      autoComplete="email" placeholder="you@example.com"
                      dir="ltr"
                      className={`form-field-dark text-right ${errors.email ? 'border-red-400/60' : ''}`}
                      aria-required="true" aria-invalid={!!errors.email}
                    />
                  </Field>

                  <Field label="הודעה (אופציונלי)" id="message" error={errors.message}>
                    <textarea
                      id="message" name="message" value={values.message}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder="שאלות? בקשות מיוחדות? פשוט שלום?"
                      rows={4} maxLength={500}
                      className="form-field-dark resize-none"
                      aria-invalid={!!errors.message}
                    />
                    {values.message.length > 0 && (
                      <span className="text-white/25 text-xs mt-0.5 block text-left">
                        {values.message.length}/500
                      </span>
                    )}
                  </Field>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-gradient !rounded-2xl !py-4 !text-base
                               disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-busy={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                          aria-hidden="true"
                        />
                        שולחים...
                      </span>
                    ) : (
                      <span>שלחו הודעה ←</span>
                    )}
                  </button>

                  <p className="text-white/25 text-xs text-center">
                    הפרטים שלכם מוגנים ולא יועברו לצד שלישי
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
