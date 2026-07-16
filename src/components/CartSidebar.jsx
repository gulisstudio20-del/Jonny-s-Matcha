import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { PRODUCTS } from './Products'

export default function CartSidebar() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
            onClick={() => { setIsOpen(false); setShowCheckout(false) }}
            aria-hidden="true"
          />

          {/* Panel — slides in from left (RTL: end side) */}
          <motion.aside
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="עגלת קניות"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 left-0 bottom-0 z-[61] w-full max-w-sm
                       flex flex-col bg-cream shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink/[0.08]">
              <div>
                {showCheckout ? (
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
                    aria-label="חזרה לעגלה"
                  >
                    <span aria-hidden="true">→</span>
                    חזרה לעגלה
                  </button>
                ) : (
                  <>
                    <h2 className="font-bold text-lg text-ink">העגלה שלך</h2>
                    {count > 0 && (
                      <p className="text-xs text-ink-soft mt-0.5">{count} פריטים</p>
                    )}
                  </>
                )}
              </div>
              <button
                onClick={() => { setIsOpen(false); setShowCheckout(false) }}
                aria-label="סגור עגלה"
                className="w-9 h-9 rounded-full flex items-center justify-center
                           bg-ink/5 hover:bg-ink/10 transition-colors text-ink text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Checkout "coming soon" screen */}
            <AnimatePresence mode="wait">
              {showCheckout ? (
                <motion.div
                  key="checkout"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.28 }}
                  className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-5"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--c-matcha-pale)' }}
                    aria-hidden="true"
                  >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 12h20l-2.5 14H10.5L8 12z"/>
                      <path d="M6 12h24"/>
                      <path d="M13 12q0-4 5-5 5 1 5 5"/>
                      <path d="M13 22q5 4 10 0"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-ink mb-2">החנות בקרוב!</h3>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      אני עובדת על מערכת התשלום.
                      <br />
                      השאירו פרטים ואעדכן אתכם ברגע שהיא עולה לאוויר.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-dark w-full text-center !rounded-2xl !py-3.5"
                    aria-label="לטופס השארת פרטים"
                  >
                    <span>השאירו פרטים ←</span>
                  </a>
                  <p className="text-xs text-ink-muted">
                    ₪{total} ממתינים לכם — לא ילכו לשום מקום.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="cart"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 overflow-y-auto px-6 py-4"
                >
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                      <div style={{
                        width: '56px', height: '56px', borderRadius: '50%',
                        background: 'var(--c-matcha-pale)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }} aria-hidden="true">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 7h18l-2 14H6L4 7z"/>
                          <path d="M3 7h20"/>
                          <path d="M9 7q0-3 4-4 4 1 4 4"/>
                        </svg>
                      </div>
                      <p className="text-ink-soft text-sm">העגלה ריקה עדיין.</p>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold text-matcha-dark underline underline-offset-2"
                      >
                        חזרו לחנות
                      </button>
                    </div>
                  ) : (
                    <ul className="space-y-4" aria-label="פריטים בעגלה">
                      <AnimatePresence>
                        {items.map((item) => (
                          <motion.li
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-ink/[0.06]"
                          >
                            {/* Product thumbnail */}
                            {(() => {
                              const prod = PRODUCTS.find(p => p.id === item.id)
                              return prod ? (
                                <img
                                  src={prod.img}
                                  alt=""
                                  aria-hidden="true"
                                  className="w-12 h-12 rounded-xl flex-shrink-0 object-cover"
                                />
                              ) : (
                                <div
                                  className="w-12 h-12 rounded-xl flex-shrink-0"
                                  style={{ background: 'var(--c-matcha-pale)' }}
                                  aria-hidden="true"
                                />
                              )
                            })()}

                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm text-ink leading-tight truncate">
                                {item.name}
                              </p>
                              <p className="text-xs text-ink-soft mt-0.5">{item.unit}</p>

                              {/* Qty controls */}
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  onClick={() => updateQty(item.id, item.qty - 1)}
                                  aria-label="הפחיתו כמות"
                                  className="w-7 h-7 rounded-full border border-ink/15 flex items-center justify-center
                                             text-ink-soft hover:border-matcha hover:text-matcha-dark transition-colors text-sm"
                                >
                                  −
                                </button>
                                <span className="text-sm font-bold text-ink w-5 text-center">
                                  {item.qty}
                                </span>
                                <button
                                  onClick={() => updateQty(item.id, item.qty + 1)}
                                  aria-label="הוסיפו כמות"
                                  className="w-7 h-7 rounded-full border border-ink/15 flex items-center justify-center
                                             text-ink-soft hover:border-matcha hover:text-matcha-dark transition-colors text-sm"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            <div className="text-right flex-shrink-0">
                              <p className="font-bold text-sm text-ink">
                                ₪{item.price * item.qty}
                              </p>
                              <button
                                onClick={() => removeItem(item.id)}
                                aria-label={`הסירו ${item.name}`}
                                className="text-xs text-ink-muted hover:text-red-400 transition-colors mt-1 block"
                              >
                                הסירו
                              </button>
                            </div>
                          </motion.li>
                        ))}
                      </AnimatePresence>
                    </ul>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer — only shown in cart view */}
            {!showCheckout && items.length > 0 && (
              <div className="px-6 py-5 border-t border-ink/[0.08] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink-soft">סה״כ</span>
                  <span className="text-xl font-black" style={{ color: 'var(--c-matcha-dark)' }}>
                    ₪{total}
                  </span>
                </div>
                <p className="text-xs text-ink-muted">משלוח חינם בהזמנה ראשונה ✓</p>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="btn-dark w-full !rounded-2xl !py-4 !text-base"
                  aria-label="המשיכו לתשלום"
                >
                  <span>לתשלום ←</span>
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
