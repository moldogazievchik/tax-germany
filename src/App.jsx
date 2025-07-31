import Hero from './components/Hero'
import Steps from './components/Steps'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-100">
      <Hero />
      <Steps />
      <Reviews />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App;