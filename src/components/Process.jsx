import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../animations'

const steps = [
  {
    number: '01',
    title: 'קטיפה ביד',
    desc: 'הגדלנים באוג׳י בוחרים ידנית רק את העלים הצעירים ביותר. קטיפה בבוקר המוקדם, כשהעלה בשיא איכותו.',
  },
  {
    number: '02',
    title: 'אידוי מיידי',
    desc: 'האידוי המהיר מיד לאחר הקטיפה עוצר את תהליך החמצון. כך נשמרים הצבע, הטעם והרכיבים הפעילים.',
  },
  {
    number: '03',
    title: 'אריזה בוואקום',
    desc: 'מיד לאחר הטחינה האבקה נארזת בוואקום. ללא חמצן, ללא אור — הטעם מגיע אליכם שלם.',
  },
  {
    number: '04',
    title: 'ישירות אליכם',
    desc: 'ללא מחסנים וללא ביניים. כל אריזה מגיעה עם תאריך קטיף — כדי שתדעו בדיוק מה אתם שותים.',
  },
]

export default function Process() {
  const container = stagger(0.13)
  return (
    <section
      id="process"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0B1A09 0%, #152B12 100%)' }}
      aria-label="תהליך הייצור"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(121,184,53,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black select-none pointer-events-none"
        style={{ fontSize: '18rem', lineHeight: 1, color: 'rgba(255,255,255,0.018)' }}
        aria-hidden="true"
      >
        茶
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-label" style={{ color: 'rgba(90,155,42,0.8)', textAlign: 'center', display: 'block' }}>מהחווה לכוס</span>
          <h2
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--bg)',
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
            }}
          >
            מהחווה{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent-2)' }}>
              לכוס
            </em>
          </h2>
          <p className="mt-4 max-w-md mx-auto text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>
            כל שלב בשרשרת מתועד ונשלט. אין קיצורי דרך.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-[28px] right-[13%] left-[13%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(121,184,53,0.3) 20%, rgba(201,168,92,0.3) 80%, transparent)' }}
            aria-hidden="true"
          />
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
            aria-label="שלבי תהליך הייצור"
          >
            {steps.map((step) => (
              <motion.li key={step.number} variants={fadeUp} className="group text-center">
                <div
                  className="relative inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full
                               font-serif text-lg font-bold z-10
                               group-hover:scale-110 transition-all duration-500"
                  style={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--c-matcha)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = 'var(--c-matcha)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-base leading-[1.75]" style={{ color: 'rgba(255,255,255,0.45)' }}>{step.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
