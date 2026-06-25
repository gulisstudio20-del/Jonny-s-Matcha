import { motion } from 'framer-motion'
import lifestyleImg from '../../assets/images/matcha-lifestyle.jpg'
import { fadeRight, fadeLeft, viewport } from '../animations'

const pills = [
  { label: '100% אורגני' },
  { label: 'Single Origin · אוג׳י' },
  { label: 'Ceremonial Grade' },
  { label: 'ללא תוספות' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--bg)' }}
      aria-label="הסיפור שלנו"
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
              alt="שתי כוסות מאצ׳ה לאטה קרה מחוץ לבית קפה"
              className="relative rounded-3xl w-full object-cover shadow-card"
              width="560" height="500"
              loading="lazy"
            />
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-4 border shadow-card-hover"
              style={{ borderColor: 'rgba(24,18,10,0.06)' }}
              aria-hidden="true"
            >
              <p className="text-sm font-medium mb-0.5 uppercase tracking-wider" style={{ color: 'var(--mute)' }}>Direct Trade</p>
              <p className="font-black text-2xl" style={{ color: 'var(--ink)' }}>
                Uji, <span className="text-lg" style={{ color: 'var(--accent)' }}>Kyoto</span>
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
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
              כוס אחת בטוקיו שינתה את הכל. הטעם, הצבע, המרקם — לא מצאנו שום דבר קרוב לזה בישראל.
            </p>
            <p className="text-lg leading-[1.85] mb-10" style={{ color: 'var(--mute)' }}>
              יצרנו קשר ישיר עם גדלנים משפחתיים באוג׳י, קיוטו. ללא ספקי ביניים, ללא פשרות על איכות — מה שמגיע אליכם הוא מה שגדל שם.
            </p>

            <ul className="flex flex-wrap gap-2" aria-label="יתרונות המוצר">
              {pills.map((pill) => (
                <li
                  key={pill.label}
                  className="px-5 py-2.5 bg-white rounded-full text-base font-semibold shadow-sm
                             transition-all duration-200 hover:shadow-md"
                  style={{ border: '1px solid rgba(24,18,10,0.08)', color: 'var(--ink)' }}
                >
                  {pill.label}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
