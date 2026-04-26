import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#DDDDDD]">
      <div className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/tw2-logo.png" alt="Tecnoworld2" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-[#222222] font-medium hover:text-[#E63946] transition-colors">
            Home
          </Link>
          <Link to="/societa" className="text-[#222222] font-medium hover:text-[#E63946] transition-colors">
            Chi siamo
          </Link>
          <a href="/#servizi" className="text-[#222222] font-medium hover:text-[#E63946] transition-colors">
            Servizi
          </a>
          <Link to="/portfolio" className="text-[#222222] font-medium hover:text-[#E63946] transition-colors">
            Portfolio
          </Link>
          <Link to="/supporto" className="text-[#222222] font-medium hover:text-[#E63946] transition-colors">
            Supporto
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="mailto:info@tw2.eu" className="btn-primary">
            Contattaci
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[#DDDDDD] bg-white">
          <div className="container-max py-4 flex flex-col gap-4">
            <Link to="/" className="text-[#222222] font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/societa" className="text-[#222222] font-medium" onClick={toggleMenu}>
              Chi siamo
            </Link>
            <a href="/#servizi" className="text-[#222222] font-medium" onClick={toggleMenu}>
              Servizi
            </a>
            <Link to="/portfolio" className="text-[#222222] font-medium" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link to="/supporto" className="text-[#222222] font-medium" onClick={toggleMenu}>
              Supporto
            </Link>
            <a href="mailto:info@tw2.eu" className="btn-primary text-center">
              Contattaci
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
