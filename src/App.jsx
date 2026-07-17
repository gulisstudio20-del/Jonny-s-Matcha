import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import MarqueeBar from './components/MarqueeBar'
import About from './components/About'
import Menu from './components/Menu'
import Process from './components/Process'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      <ScrollProgress />
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <Hero />
        <MarqueeBar />
        <About />
        <Process />
        <Menu />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
