import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../animations'

export default function Quote() {
  return (
    <section className="py-20 lg:py-28 bg-cream" aria-label="ציטוט">
      <div className="container">
        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-[4rem] leading-none mb-5 select-none" aria-hidden="true" style={{ color: 'rgba(121,184,53,0.2)' }}>茶</div>
          <blockquote>
            <p
              className="font-serif italic leading-[1.5] mb-6"
              style={{
                fontSize: 'clamp(1.75rem,4.5vw,3rem)',
                color: 'var(--c-ink)',
                overflow: 'visible',
              }}
            >
              &ldquo;מאצ׳ה טובה לא צריכה הסבר.
              היא מדברת לבד.&rdquo;
            </p>
            <figcaption className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--c-ink-muted)' }} dir="ltr">
              — jonny's matcha
            </figcaption>
          </blockquote>
          <div
            className="w-16 h-0.5 mx-auto mt-8 rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--c-matcha), var(--c-gold))' }}
            aria-hidden="true"
          />
        </motion.figure>
      </div>
    </section>
  )
}
