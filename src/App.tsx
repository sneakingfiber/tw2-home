import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Societa from './pages/Societa'
import Supporto from './pages/Supporto'
import AssistenzaRemota from './pages/AssistenzaRemota'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/societa" element={<Societa />} />
            <Route path="/supporto" element={<Supporto />} />
            <Route path="/assistenza-remota" element={<AssistenzaRemota />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
