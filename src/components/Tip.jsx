import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../animations'

/**
 * Tip — inverted dark callout, visually distinct from every other surface.
 * Props:
 *   label    — the label text (default: "טיפ של רוני")
 *   icon     — optional SVG node; defaults to the ✦ mark
 *   children — the tip body text or JSX
 */
export default function Tip({ label = 'טיפ של רוני', icon, children }) {
  return (
    <motion.aside
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      role="note"
      aria-label={label}
      className="tip-card"
    >
      {/* Subtle green glow — top corner */}
      <div className="tip-card__glow" aria-hidden="true" />

      <div className="tip-card__label">
        <span className="tip-card__icon" aria-hidden="true">
          {icon ?? '✦'}
        </span>
        <span>{label}</span>
      </div>

      <div className="tip-card__body">{children}</div>
    </motion.aside>
  )
}
