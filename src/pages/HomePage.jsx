import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import AboutProduct from '../components/Sections/AboutProduct'
import Achievements from '../components/Sections/Achievements'
import Cards from '../components/Sections/Cards'
import Hero from '../components/Sections/Hero'
import InstagramPosts from '../components/Sections/InstagramPosts'
import VideoSection from '../components/Sections/VideoSection'

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AboutProduct />
        <Achievements />
        <Cards />
        <VideoSection />
        <InstagramPosts />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
