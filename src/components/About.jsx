import { motion } from 'framer-motion'
import lifestyleImg from '../../assets/images/pexels-olenkabohovyk-25686145.jpg'
import { fadeRight, fadeLeft, viewport } from '../animations'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--bg)' }}
      aria-label="הסיפור שלי"
    >
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">

          {/* Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            <div
              className="absolute -inset-4 rounded-4xl"
              style={{ background: 'var(--c-matcha-pale)', opacity: 0.45 }}
              aria-hidden="true"
            />
            <img
              src={lifestyleImg}
              alt="מאצ׳ה לאטה קרה בכוס זכוכית על שולחן עץ"
              className="relative rounded-3xl w-full object-cover shadow-card"
              style={{ aspectRatio: '4/5', objectPosition: 'center top' }}
              width="560" height="700"
              loading="lazy"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{ textAlign: 'center' }}
          >
            <h2
              style={{
                fontFamily: 'var(--f-body)',
                fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                color: 'var(--ink)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}
            >
              ישירות
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>
                מהמקור
              </em>
            </h2>

            <p className="text-lg leading-[1.85] mb-4" style={{ color: 'var(--mute)' }}>
              כוס אחת בטוקיו שינתה הכל. הטעם, הצבע, המרקם — כשחזרתי לישראל וניסיתי למצוא משהו דומה, פשוט לא היה.
            </p>
            <p className="text-lg leading-[1.85] mb-10" style={{ color: 'var(--mute)' }}>
              אז התחלתי להביא אותה בעצמי, ישר מיפן — כדי שגם אתם תוכלו לשתות את מה שאני שותה.
            </p>

            <div
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-white rounded-full shadow-sm"
              style={{ border: '1px solid rgba(24,18,10,0.08)' }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  flexShrink: 0,
                }}
              />
              <span className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                100% אורגני
              </span>
              <span aria-hidden="true" style={{ color: 'var(--line-2)' }}>·</span>
              <span className="text-base font-semibold" style={{ color: 'var(--ink)' }} dir="ltr">
                Ceremonial Grade
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
