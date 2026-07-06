import { Link } from 'react-router-dom'
import { Home, ArrowRight } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle({
    title: 'Pagina non trovata | TecnoWorld2',
    description: 'La pagina che stai cercando non esiste.'
  })

  return (
    <section className="py-24 bg-white">
      <div className="container-max text-center">
        <p className="text-6xl font-bold text-tw-primary mb-6">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-tw-dark mb-4">
          Pagina non trovata
        </h1>
        <p className="text-secondary max-w-xl mx-auto mb-10">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
            <Home size={20} />
            Torna alla Home
          </Link>
          <a href="/#contatti" className="bg-white border border-[#222222] text-[#222222] rounded-full px-6 py-3 font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#F7F7F7] transition-colors duration-300">
            Contattaci
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
