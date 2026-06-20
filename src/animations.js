// Framer Motion variants — performance-first
// viewport once:true = runs once only, critical for MacBook Air without fan

export const ease = [0.23, 1, 0.32, 1]
export const easeOut = [0.0, 0.0, 0.2, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease } },
}

export const fadeRight = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
}

export const stagger = (delay = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
})

// once:true — NEVER re-animate on re-scroll (performance)
export const viewport = { once: true, margin: '-40px' }
