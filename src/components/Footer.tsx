import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      {/* Main content */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <img src="/tw2-logo.png" alt="Tecnoworld2" className="h-12 w-auto mb-4" />
            <p className="text-sm text-gray-400">
              Soluzioni innovative per la sicurezza e le reti. Esperienza, affidabilità, competenza.
            </p>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-semibold text-white mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Rete Dati</a></li>
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Videosorveglianza</a></li>
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Informatica</a></li>
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Automazione</a></li>
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Telefonia</a></li>
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="font-semibold text-white mb-4">Azienda</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/societa" className="hover:text-[#E63946] transition-colors">Chi siamo</Link></li>
              <li><Link to="/supporto" className="hover:text-[#E63946] transition-colors">Supporto</Link></li>
              <li><Link to="/assistenza-remota" className="hover:text-[#E63946] transition-colors">Assistenza Remota</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contatti</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:00390182733089" className="flex items-center gap-2 text-gray-400 hover:text-[#E63946] transition-colors">
                <Phone size={16} />
                <span>0182-7330891</span>
              </a>
              <a href="tel:+393348213252" className="flex items-center gap-2 text-gray-400 hover:text-[#E63946] transition-colors">
                <Phone size={16} />
                <span>334-8213252</span>
              </a>
              <a href="mailto:info@tw2.eu" className="flex items-center gap-2 text-gray-400 hover:text-[#E63946] transition-colors">
                <Mail size={16} />
                <span>info@tw2.eu</span>
              </a>
              <p className="flex items-start gap-2 text-gray-400 pt-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>Via Dalmazia 142<br />17031 Albenga (SV)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Tecnoworld2. Tutti i diritti riservati.</p>
            <p>P.IVA: 03259940041</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
