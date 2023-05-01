import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import AboutProduct from '../components/Sections/AboutProduct'
import Achievements from '../components/Sections/Achievements'
import Hero from '../components/Sections/Hero'

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AboutProduct />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
