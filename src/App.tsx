import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Tournements from './pages/Tournements/Tournements'
import AboutUs from './pages/AboutUs/AboutUs'
import RegisterTournament from './pages/RegisterTournement/RegisterTournement'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournements" element={<Tournements />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register-tournement" element={<RegisterTournament />} />
      </Routes>
    </>
  )
}

export default App
