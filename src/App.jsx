import { CartProvider } from './context/CartContext'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import CartSidebar from './components/CartSidebar'
import StickyBar from './components/StickyBar'
import Hero from './components/Hero'
import MarqueeBar from './components/MarqueeBar'
import About from './components/About'
import Products from './components/Products'
import GiftSets from './components/GiftSets'
import Process from './components/Process'
import Quote from './components/Quote'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <CartProvider>
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      <ScrollProgress />
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <CartSidebar />
      <StickyBar />
      <main id="main-content">
        <Hero />
        <MarqueeBar />
        <About />
        <Products />
        <GiftSets />
        <Process />
        <Quote />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </CartProvider>
  )
}
