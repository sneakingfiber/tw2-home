import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Network, Camera, Monitor, Cpu, Phone, Tv2, Shield, Wrench, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import ImageCarousel from '../components/ImageCarousel'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const heroImages = [
  '/installazione-protect.jpeg',
  '/manutenzione-server.jpeg',
  '/network-staging.jpeg',
  '/quadretto-boss.jpeg',
  '/rack-alassio.jpeg',
  '/ubiquiti-radio.jpeg'
]

const services = [
  {
    icon: Network,
    title: "Rete Dati e Connettività",
    description: "Sopralluogo gratuito, cablaggio, UPS, ponti radio, apparati attivi e passivi, configurazioni custom.",
    image: "/reti.jpg"
  },
  {
    icon: Camera,
    title: "Videosorveglianza",
    description: "Telecamere IP, webcam, antintrusione, software ad hoc per monitoraggio e security.",
    image: "/ip-camera.png"
  },
  {
    icon: Monitor,
    title: "Consulenza Informatica",
    description: "Vendita, assistenza, consulenza, virtualizzazione, networking e infrastrutture IT.",
    image: "/prodotto.jpg"
  },
  {
    icon: Cpu,
    title: "Automazione",
    description: "Automazione privata e aziendale, programmazione PC e PLC per processi industriali.",
    image: "/automazione.jpg"
  },
  {
    icon: Phone,
    title: "Telefonia",
    description: "Centralini telefonici, sistemi VoIP, soluzioni di comunicazione integrate.",
    images: ["/videocitofono.jpg", "/ubiquiti-phone.png"]
  },
  {
    icon: Camera,
    title: "Targasystem",
    description: "Sistema LPR per l'identificazione automatica delle targhe automezzi, a supporto delle forze dell'ordine.",
    image: "/targasystem-cam3mpx.png"
  },
  {
    icon: Tv2,
    title: "Audio e Video",
    description: "Totem multimediali, videowall, digital signage, teleconferenze ad alta definizione.",
    image: "/tw2-totem.jpg"
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

function ServiceCardCarousel({ service, Icon }: { service: any; Icon: React.ElementType }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? service.images!.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === service.images!.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="bg-white border border-[#DDDDDD] rounded-2xl overflow-hidden card-hover">
      <div className="relative h-48 w-full bg-gradient-to-br from-[#F7F7F7] to-[#EEEEEE] overflow-hidden">
        <img
          src={service.images![currentIndex]}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <button
            onClick={goToPrevious}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-lg font-semibold text-[#222222]">
            {service.title}
          </h3>
          <Icon size={20} className="text-[#E63946]" />
        </div>
        <p className="text-secondary text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  useDocumentTitle({
    title: 'TecnoWorld2 | Soluzioni Innovative di Safety e Security',
    description: 'Soluzioni complete di reti, videosorveglianza, automazione e sicurezza per aziende pubbliche e private. Assistenza 24/7 garantita.',
    ogTitle: 'TecnoWorld2 - Soluzioni Safety e Security',
    ogDescription: 'Reti, videosorveglianza, automazione e sicurezza informatica. Esperienza 10+ anni con clientela diversificata.',
    ogImage: '/tw2-logo.png'
  })

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6 inline-block">
                <div className="bg-white border border-[#DDDDDD] text-[#717171] rounded-full px-4 py-2 text-sm font-medium">
                  System Integrator · Liguria
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#222222] mb-6 leading-tight">
                Infrastrutture di sicurezza per enti pubblici e privati
              </h1>

              <p className="text-lg text-secondary mb-8 leading-relaxed">
                Progettiamo e installiamo sistemi di videosorveglianza, reti radio e networking per Comuni, Polizia Municipale e aziende private. Operiamo su tutta la Liguria.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#servizi" className="btn-primary">
                  Scopri i servizi
                </a>
                <Link to="/portfolio" className="bg-white border border-[#222222] text-[#222222] rounded-full px-6 py-3 font-semibold inline-flex items-center justify-center hover:bg-[#F7F7F7] transition-colors duration-300">
                  Progetti reali
                </Link>
              </div>

              {/* Micro-stats */}
              <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-[#DDDDDD]">
                <div>
                  <p className="text-2xl font-bold text-[#E63946]">+10 anni</p>
                  <p className="text-sm text-secondary">Esperienza</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#E63946]">Pubblici e Privati</p>
                  <p className="text-sm text-secondary">Clientela diversificata</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#E63946]">24h</p>
                  <p className="text-sm text-secondary">Assistenza disponibile</p>
                </div>
              </div>
            </div>

            {/* Right Image Carousel */}
            <div className="hidden lg:block h-96">
              <ImageCarousel
                images={heroImages}
                alt="Soluzioni TecnoWorld2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              Servizi
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Soluzioni complete e integrate per la tua infrastruttura di rete e sicurezza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              const hasMultipleImages = service.images && service.images.length > 1

              return hasMultipleImages ? (
                <ServiceCardCarousel key={idx} service={service} Icon={Icon} />
              ) : (
                <div
                  key={idx}
                  className="bg-white border border-[#DDDDDD] rounded-2xl overflow-hidden card-hover"
                >
                  <div className="h-48 w-full bg-gradient-to-br from-[#F7F7F7] to-[#EEEEEE] overflow-hidden">
                    <img
                      src={service.image || service.images?.[0]}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-[#222222]">
                        {service.title}
                      </h3>
                      <Icon size={20} className="text-[#E63946]" />
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
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
                    <Icon size={32} className="text-[#E63946]" />
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

      {/* Certifications & Partners Section */}
      <section className="py-20 bg-white border-y border-tw-border">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              Certificazioni e Partnership Ufficiali
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Partner ufficiale di leader mondiali nel settore della videosorveglianza, reti e automazione
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Milestone Systems */}
            <div className="bg-gradient-to-br from-blue-900/10 to-blue-900/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow duration-300 border border-blue-900/30">
              <img src="/milestone-logo.png" alt="Milestone" className="w-64 h-64 object-contain" />
              <div className="text-center">
                <p className="font-semibold text-tw-dark text-lg">Milestone</p>
                <p className="text-xs text-blue-900 mt-1 font-medium">Videosorveglianza VMS</p>
              </div>
            </div>

            {/* Axis Communications */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow duration-300 border border-yellow-300">
              <img src="/axis-logo.png" alt="Axis" className="w-32 h-32 object-contain" />
              <div className="text-center">
                <p className="font-semibold text-tw-dark text-lg">Axis</p>
                <p className="text-xs text-yellow-900 mt-1 font-medium">Telecamere IP</p>
              </div>
            </div>

            {/* Ubiquiti */}
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow duration-300 border border-cyan-300">
              <img src="/ubiquiti-logo.png" alt="Ubiquiti" className="w-32 h-32 object-contain" />
              <div className="text-center">
                <p className="font-semibold text-tw-dark text-lg">Ubiquiti</p>
                <p className="text-xs text-cyan-900 mt-1 font-medium">Reti Wireless</p>
              </div>
            </div>

            {/* Mikrotik */}
            <div className="bg-gradient-to-br from-green-900/10 to-green-900/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow duration-300 border border-green-900/30">
              <img src="/mikrotik-logo.png" alt="Mikrotik" className="w-44 h-44 object-contain" />
              <div className="text-center">
                <p className="font-semibold text-tw-dark text-lg">Mikrotik</p>
                <p className="text-xs text-green-900 mt-1 font-medium">Routing & Networking</p>
              </div>
            </div>

            {/* Targasystem */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow duration-300 border border-orange-300">
              <img src="/targasystem-logo.jpg" alt="Targasystem" className="w-40 h-40 object-contain" />
              <div className="text-center">
                <p className="font-semibold text-tw-dark text-lg">Targasystem</p>
                <p className="text-xs text-orange-900 mt-1 font-medium">LPR system for law enforcement</p>
              </div>
            </div>
          </div>

          {/* Certifications Below */}
          <div className="mt-16 pt-12 border-t border-tw-border">
            <p className="text-center text-sm font-semibold text-tw-dark mb-8 uppercase tracking-wide">Certificazioni Internazionali</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <Award size={20} className="text-tw-primary" />
                <span className="text-sm font-medium text-tw-dark">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-tw-primary" />
                <span className="text-sm font-medium text-tw-dark">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-tw-primary" />
                <span className="text-sm font-medium text-tw-dark">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
                Pronto a migliorare la tua infrastruttura?
              </h2>
              <p className="text-secondary">
                Compila il modulo sottostante e il nostro team di specialisti ti contatterà per una consulenza personalizzata.
              </p>
            </div>
            <div className="bg-white border border-tw-border rounded-2xl p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
