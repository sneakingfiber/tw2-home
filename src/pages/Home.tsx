import { Link } from 'react-router-dom'
import { Network, Camera, Monitor, Cpu, Phone, Tv2, Shield, Wrench, Users, Award, Server } from 'lucide-react'
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
    image: "/reti.jpg"
  },
  {
    icon: Camera,
    title: "Videosorveglianza",
    image: "/ip-camera.png"
  },
  {
    icon: Monitor,
    title: "Consulenza Informatica",
    image: "/prodotto.jpg"
  },
  {
    icon: Cpu,
    title: "Automazione",
    image: "/automazione.jpg"
  },
  {
    icon: Phone,
    title: "Telefonia",
    image: "/videocitofono.jpg"
  },
  {
    icon: Camera,
    title: "Targasystem",
    image: "/targasystem-cam3mpx.png"
  },
  {
    icon: Tv2,
    title: "Audio e Video",
    image: "/tw2-totem.jpg"
  },
  {
    icon: Server,
    title: "Virtualizzazione",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800",
    techs: [
      { name: "Proxmox", url: "https://unpkg.com/simple-icons@latest/icons/proxmox.svg" },
      { name: "Docker", url: "https://unpkg.com/simple-icons@latest/icons/docker.svg" },
      { name: "Kubernetes", url: "https://unpkg.com/simple-icons@latest/icons/kubernetes.svg" },
      { name: "Linux", url: "https://unpkg.com/simple-icons@latest/icons/linux.svg" },
      { name: "Windows", isInlineSvg: true }
    ]
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

          {/* Formazione 3-2-2-1 */}
          <div className="space-y-6">
            {/* Prima riga: 3 servizi */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service, idx) => {
                const Icon = service.icon

                return (
                  <div key={idx} className="bg-white border border-[#DDDDDD] rounded-2xl overflow-hidden card-hover">
                    <div className="h-48 w-full bg-gradient-to-br from-[#F7F7F7] to-[#EEEEEE] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3 justify-center">
                        <Icon size={20} className="text-[#E63946]" />
                        <h3 className="text-lg font-semibold text-[#222222]">
                          {service.title}
                        </h3>
                      </div>
                      {service.techs && (
                        <div className="flex flex-wrap gap-4 items-center justify-center mt-4 pt-4 border-t border-[#EEEEEE]">
                          {service.techs.map((tech, techIdx) => (
                            <div key={techIdx} className="flex flex-col items-center gap-1">
                              {tech.isInlineSvg ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#717171">
                                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                                </svg>
                              ) : (
                                <img src={tech.url} width="24" height="24" alt={tech.name} style={{ filter: 'invert(60%)' }} />
                              )}
                              <span className="text-[10px] text-[#717171]">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Seconda riga: 2 servizi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {services.slice(3, 5).map((service, idx) => {
                const Icon = service.icon

                return (
                  <div key={idx + 3} className="bg-white border border-[#DDDDDD] rounded-2xl overflow-hidden card-hover">
                    <div className="h-48 w-full bg-gradient-to-br from-[#F7F7F7] to-[#EEEEEE] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3 justify-center">
                        <Icon size={20} className="text-[#E63946]" />
                        <h3 className="text-lg font-semibold text-[#222222]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Terza riga: 2 servizi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {services.slice(5, 7).map((service, idx) => {
                const Icon = service.icon
                return (
                  <div key={idx + 5} className="bg-white border border-[#DDDDDD] rounded-2xl overflow-hidden card-hover">
                    <div className="h-48 w-full bg-gradient-to-br from-[#F7F7F7] to-[#EEEEEE] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3 justify-center">
                        <Icon size={20} className="text-[#E63946]" />
                        <h3 className="text-lg font-semibold text-[#222222]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quarta riga: 1 servizio (Virtualizzazione) */}
            <div className="grid grid-cols-1 gap-6 max-w-lg mx-auto">
              {services.slice(7, 8).map((service, idx) => {
                const Icon = service.icon
                return (
                  <div key={idx + 7} className="bg-white border border-[#DDDDDD] rounded-2xl overflow-hidden card-hover">
                    <div className="h-48 w-full bg-gradient-to-br from-[#F7F7F7] to-[#EEEEEE] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3 justify-center mb-4">
                        <Icon size={20} className="text-[#E63946]" />
                        <h3 className="text-lg font-semibold text-[#222222]">
                          {service.title}
                        </h3>
                      </div>
                      {service.techs && (
                        <div className="flex flex-wrap gap-4 items-center justify-center pt-4 border-t border-[#EEEEEE]">
                          {service.techs.map((tech, techIdx) => (
                            <div key={techIdx} className="flex flex-col items-center gap-1">
                              {tech.isInlineSvg ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#717171">
                                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                                </svg>
                              ) : (
                                <img src={tech.url} width="24" height="24" alt={tech.name} style={{ filter: 'invert(60%)' }} />
                              )}
                              <span className="text-[10px] text-[#717171]">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
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

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {/* Milestone Systems */}
            <div className="bg-white border border-[#EEEEEE] rounded-2xl p-6 w-48 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200">
              <img src="/milestone-logo.png" alt="Milestone" className="max-h-12 max-w-[120px] object-contain mb-3" />
              <p className="font-medium text-[#222222] text-sm">Milestone</p>
            </div>

            {/* Axis Communications */}
            <div className="bg-white border border-[#EEEEEE] rounded-2xl p-6 w-48 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200">
              <img src="/axis-logo.png" alt="Axis" className="max-h-12 max-w-[120px] object-contain mb-3" />
              <p className="font-medium text-[#222222] text-sm">Axis</p>
            </div>

            {/* Ubiquiti */}
            <div className="bg-white border border-[#EEEEEE] rounded-2xl p-6 w-48 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200">
              <img src="/ubiquiti-logo.png" alt="Ubiquiti" className="max-h-12 max-w-[120px] object-contain mb-3" />
              <p className="font-medium text-[#222222] text-sm">Ubiquiti</p>
            </div>

            {/* Mikrotik */}
            <div className="bg-white border border-[#EEEEEE] rounded-2xl p-6 w-48 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200">
              <img src="/mikrotik-logo.png" alt="Mikrotik" className="max-h-12 max-w-[120px] object-contain mb-3" />
              <p className="font-medium text-[#222222] text-sm">Mikrotik</p>
            </div>

            {/* Targasystem */}
            <div className="bg-white border border-[#EEEEEE] rounded-2xl p-6 w-48 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200">
              <img src="/targasystem-logo.jpg" alt="Targasystem" className="max-h-12 max-w-[120px] object-contain mb-3" />
              <p className="font-medium text-[#222222] text-sm">Targasystem</p>
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
