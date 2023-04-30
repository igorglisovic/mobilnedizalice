import { Routes, Route } from 'react-router-dom'
import Galerija from './pages/Galerija'
import HomePage from './pages/HomePage'
import Kontakt from './pages/Kontakt'
import Proizvodi from './pages/Proizvodi'
import Reference from './pages/Reference'
import ErrorPage from './pages/ErrorPage'
import Onama from './pages/Onama'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/galerija" element={<Galerija />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/proizvodi" element={<Proizvodi />} />
      <Route path="/reference" element={<Reference />} />
      <Route path="/onama" element={<Onama />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
