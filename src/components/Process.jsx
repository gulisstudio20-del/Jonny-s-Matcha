import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../animations'

const steps = [
  {
    number: '01',
    title: 'קטיפה ביד',
    desc: 'הגדלנים באוג׳י קוטפים ידנית רק את העלים הצעירים ביותר. בוקר מוקדם, כשהעלים הכי טובים.',
  },
  {
    number: '02',
    title: 'אידוי מיידי',
    desc: 'מיד אחרי הקטיפה מאדים את העלים — זה עוצר את ההתחמצנות ושומר על הצבע, הטעם וכל הטוב שבמאצ׳ה.',
  },
  {
    number: '03',
    title: 'אריזה בוואקום',
    desc: 'מיד אחרי הטחינה האבקה נארזת בוואקום. בלי אוויר, בלי אור — הטעם מגיע אליכם שלם.',
  },
  {
    number: '04',
    title: 'ישירות אליכם',
    desc: 'בלי מחסנים, בלי ספקי ביניים. כל אריזה מגיעה עם תאריך קטיף — כדי שתדעו בדיוק מה אתם שותים.',
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
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: 'var(--f-body)',
              fontSize: 'clamp(2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              color: 'var(--bg)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            מהחווה{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent-2)' }}>
              לכוס
            </em>
          </h2>
          <p className="mt-4 max-w-md mx-auto text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>
            כל שלב מתועד ונבדק. אין קיצורי דרך.
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
                  className="relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full
                               font-serif text-xl font-bold z-10
                               group-hover:scale-110 transition-all duration-500"
                  style={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--accent)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = 'var(--accent)'
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
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-lg leading-[1.8]" style={{ color: 'rgba(255,255,255,0.5)' }}>{step.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
