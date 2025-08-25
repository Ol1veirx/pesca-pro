import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Tournements from './pages/Tournements/Tournements'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournements" element={<Tournements />} />
      </Routes>
    </>
  )
}

export default App
