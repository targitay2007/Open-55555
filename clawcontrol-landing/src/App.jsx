import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
