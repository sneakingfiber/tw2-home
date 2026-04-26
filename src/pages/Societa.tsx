import { Zap, Target, MapPin } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const pillars = [
  {
    icon: Zap,
    title: "Esperienza",
    description: "Oltre 10 anni nel settore delle reti e della sicurezza, con clientela sia pubblica che privata."
  },
  {
    icon: Target,
    title: "Qualità",
    description: "Soluzioni realizzate con attenzione al dettaglio, standard internazionali e best practices."
  },
  {
    icon: MapPin,
    title: "Territorio",
    description: "Radicati in Liguria ad Albenga, conosciamo le esigenze locali e offriamo supporto diretto."
  }
]

export default function Societa() {
  useDocumentTitle({
    title: 'Chi Siamo | TecnoWorld2',
    description: 'Scopri la storia di TecnoWorld2, azienda italiana leader in soluzioni di reti, sicurezza e automazione con 10+ anni di esperienza.',
    ogTitle: 'Chi Siamo - TecnoWorld2',
    ogDescription: 'Azienda B2B specializzata in reti, sicurezza informatica e automazione. Clientela pubblica, industriale e privata.'
  })

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-white to-[#F7F7F7]">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
              Chi siamo
            </h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Una realtà solida e affidabile nel panorama della sicurezza e delle reti in Italia
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#222222] mb-6">
              La nostra storia
            </h2>

            <div className="space-y-6 text-secondary leading-relaxed">
              <p>
                Tecnoworld2 è un'azienda B2B italiana specializzata nella progettazione, realizzazione e manutenzione di soluzioni innovative per reti dati, sistemi di sicurezza e automazione. Con sede ad Albenga, in provincia di Savona, operiamo da oltre un decennio nel settore, consolidando una reputazione solida con clienti pubblici, industriali e privati.
              </p>

              <p>
                La nostra missione è fornire soluzioni tecnologiche che uniscono affidabilità, innovazione e competenza specialistica. Ogni progetto viene affrontato con un approccio consulenziale, partendo dalla comprensione profonda delle esigenze specifiche del cliente, per arrivare all'implementazione di infrastrutture scalabili, sicure e performanti.
              </p>

              <p>
                Crediamo che la sicurezza e l'efficienza delle infrastrutture digitali siano fondamentali per il successo di qualsiasi organizzazione. Per questo motivo, mettiamo a disposizione un team di tecnici qualificati, disponibili 24 ore su 24 per garantire continuità operativa e supporto immediato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              I nostri pillar
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Tre fondamenta che guidano ogni decisione e azione
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-[#DDDDDD] text-center card-hover">
                  <div className="w-16 h-16 bg-[#F7F7F7] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-[#E63946]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#222222] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-[#222222] mb-4">
            Desideri conoscerci meglio?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8">
            Contattaci per una consulenza senza impegno. Il nostro team è a tua disposizione.
          </p>
          <a href="mailto:info@tw2.eu" className="btn-primary">
            Scrivici subito
          </a>
        </div>
      </section>
    </>
  )
}
