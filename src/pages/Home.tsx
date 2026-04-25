import { Link } from 'react-router-dom'
import { Network, Camera, Monitor, Cpu, Phone, Tv2, Shield, Wrench, Users, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Network,
    title: "Rete Dati e Connettività",
    description: "Sopralluogo gratuito, cablaggio, UPS, ponti radio, apparati attivi e passivi, configurazioni custom."
  },
  {
    icon: Camera,
    title: "Videosorveglianza",
    description: "Telecamere IP, webcam, antintrusione, software ad hoc per monitoraggio e security."
  },
  {
    icon: Monitor,
    title: "Informatica",
    description: "Vendita, assistenza, consulenza, virtualizzazione, networking e infrastrutture IT."
  },
  {
    icon: Cpu,
    title: "Automazione",
    description: "Automazione privata e aziendale, programmazione PC e PLC per processi industriali."
  },
  {
    icon: Phone,
    title: "Telefonia",
    description: "Centralini telefonici, sistemi VoIP, soluzioni di comunicazione integrate."
  },
  {
    icon: Tv2,
    title: "Audio e Video",
    description: "Totem multimediali, videowall, digital signage, teleconferenze ad alta definizione."
  }
]

const benefits = [
  {
    icon: Shield,
    title: "Sicurezza Certificata",
    description: "Soluzioni che rispettano standard internazionali e normative di sicurezza."
  },
  {
    icon: Wrench,
    title: "Assistenza Tecnica Diretta",
    description: "Team specializzato disponibile 24h per supporto e manutenzione preventiva."
  },
  {
    icon: Users,
    title: "Clienti Pubblici e Privati",
    description: "Esperienza consolidata con Amministrazioni, aziende industriali e realtà private."
  }
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="container-max text-center">
          <div className="mb-6 inline-block">
            <div className="badge-pill">
              Reti · Sicurezza · Innovazione
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] mb-6 leading-tight">
            Realizziamo soluzioni innovative a problemi di safety e security
          </h1>

          <p className="text-lg text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            Esperienza pluriennale nell'implementazione di nuovi impianti e nell'integrazione con sistemi esistenti in contesto pubblico, industriale e privato.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#servizi" className="btn-primary">
              Scopri i servizi
            </a>
            <Link to="/societa" className="btn-secondary">
              Chi siamo
            </Link>
          </div>

          {/* Micro-stats */}
          <div className="flex flex-col md:flex-row justify-center gap-8 text-center pt-8 border-t border-[#DDDDDD]">
            <div>
              <p className="text-2xl font-bold text-[#0ea5e9]">+10 anni</p>
              <p className="text-sm text-secondary">Esperienza</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0ea5e9]">Pubblici e Privati</p>
              <p className="text-sm text-secondary">Clientela diversificata</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0ea5e9]">24h</p>
              <p className="text-sm text-secondary">Assistenza disponibile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              I servizi offerti
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Soluzioni complete e integrate per la tua infrastruttura di rete e sicurezza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#DDDDDD] rounded-2xl p-6 card-hover"
                >
                  <div className="w-12 h-12 bg-[#F7F7F7] rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#0ea5e9]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#222222] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              Perché sceglierci
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Tre punti di forza che guidano ogni nostra decisione
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Icon size={32} className="text-[#0ea5e9]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#222222] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="bg-[#F7F7F7] rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              Pronto a migliorare la tua infrastruttura?
            </h2>
            <p className="text-secondary max-w-xl mx-auto mb-8">
              Contatta il nostro team per una consulenza personalizzata e scopri come possiamo aiutarti.
            </p>
            <a href="mailto:info@tw2.eu" className="btn-primary inline-flex items-center gap-2">
              Contattaci ora
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
