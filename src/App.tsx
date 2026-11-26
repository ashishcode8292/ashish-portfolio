import WhyChooseMe from './sections/WhyChooseMe'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Process from './sections/Process'
import Contact from './sections/Contact'
import Journey from './sections/Journey'
import Services from './sections/Services'
import FAQ from './sections/FAQ'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import ScrollReveal from './components/ScrollReveal'
import NotFound from './sections/NotFound'
import PageLoader from './components/PageLoader'


function App() {
  if (window.location.pathname !== '/') {
    return <NotFound />
  }
  return (
    <main>
        <PageLoader />

      <a
        href="#home"
        onClick={(event) => {
          event.preventDefault()

          const target = document.getElementById('home')

          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })

            target.focus({ preventScroll: true })
          }
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-violet-500 focus:px-5 focus:py-3 focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>

      <ScrollProgress />
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <Skills />
      <Projects />
      <Process />
      <Journey />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </main>
  )
}

export default App