import { CartProvider } from './context/CartContext'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import CartSidebar from './components/CartSidebar'
import Hero from './components/Hero'
import MarqueeBar from './components/MarqueeBar'
import About from './components/About'
import Products from './components/Products'
import Process from './components/Process'
import BrewingGuide from './components/BrewingGuide'
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
      <main id="main-content">
        <Hero />
        <MarqueeBar />
        <About />
        <Products />
        <BrewingGuide />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </CartProvider>
  )
}
