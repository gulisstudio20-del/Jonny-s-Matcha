import { motion } from 'framer-motion'
import powderImg from '../../assets/images/powder.png'
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
      className="relative py-28 lg:py-36 bg-cream overflow-hidden"
      aria-label="הסיפור שלנו"
    >
      <div
        className="absolute -top-10 -right-8 font-black text-[16rem] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(24,18,10,0.025)' }}
        aria-hidden="true"
      >
        01
      </div>

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
              style={{ background: 'var(--c-matcha-pale)', opacity: 0.5 }}
              aria-hidden="true"
            />
            <img
              src={powderImg}
              alt="אבקת מאצ׳ה ירוקה עזה"
              className="relative rounded-3xl w-full object-cover shadow-card"
              width="560" height="500"
              loading="lazy"
            />
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-4 border shadow-card-hover"
              style={{ borderColor: 'rgba(24,18,10,0.06)' }}
              aria-hidden="true"
            >
              <p className="text-xs font-medium mb-0.5 uppercase tracking-wider" style={{ color: 'var(--c-ink-soft)' }}>Direct Trade</p>
              <p className="font-black text-xl" style={{ color: 'var(--c-ink)' }}>
                Uji, <span className="text-base" style={{ color: 'var(--c-matcha)' }}>Kyoto</span>
              </p>
            </div>
            <div
              className="absolute top-6 -right-4 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
              style={{ background: 'var(--c-matcha)' }}
              aria-hidden="true"
            >
              🍃 Uji, Kyoto
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className="section-tag-light">הסיפור שלנו</span>

            <h2 className="font-serif font-black text-section mb-6" style={{ color: 'var(--c-ink)', overflow: 'visible', lineHeight: 1.2 }}>
              ישירות
              <br />
              <em className="italic text-gradient" style={{ lineHeight: 1.25 }}>
                מהמקור
              </em>
            </h2>

            <p className="text-lg leading-[1.85] mb-4" style={{ color: 'var(--c-ink-soft)' }}>
              כוס אחת בטוקיו שינתה את הכל. הטעם, הצבע, המרקם — לא מצאנו שום דבר קרוב לזה בישראל.
            </p>
            <p className="text-lg leading-[1.85] mb-10" style={{ color: 'var(--c-ink-soft)' }}>
              יצרנו קשר ישיר עם גדלנים משפחתיים באוג׳י, קיוטו. ללא ספקי ביניים, ללא פשרות על איכות — מה שמגיע אליכם הוא מה שגדל שם.
            </p>

            <ul className="flex flex-wrap gap-2" aria-label="יתרונות המוצר">
              {pills.map((pill) => (
                <li
                  key={pill.label}
                  className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-sm
                             transition-all duration-200 hover:shadow-md"
                  style={{ border: '1px solid rgba(24,18,10,0.08)', color: 'var(--c-ink)' }}
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
