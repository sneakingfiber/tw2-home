import CaseStudyCard from '../components/CaseStudyCard'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const caseStudies = [
  {
    image: '/reti.jpg',
    category: 'Reti Dati',
    title: 'Infrastruttura di rete per Headquarter aziendale',
    description: 'Progettazione e realizzazione di una moderna infrastruttura di rete dati con redundanza e failover per una grande azienda industriale ligure. Implementazione di firewall avanzati e sistemi di monitoring 24/7.',
    results: [
      'Uptime 99.9% garantito',
      'Riduzione latenza del 65%',
      '+3 sedi collegate in fibra'
    ],
    client: 'Azienda Industriale (2023)'
  },
  {
    image: '/videosorveglianza.jpg',
    category: 'Videosorveglianza',
    title: 'Sistema videosorveglianza intelligente per struttura ospedaliera',
    description: 'Installazione di 120 telecamere IP ad alta risoluzione con analytics video e intelligenza artificiale per sicurezza perimetrale e interna. Sistema centralizzato di storage e monitoraggio con accesso multi-sede.',
    results: [
      '120 telecamere IP monitorate',
      'Rilevamento automatico anomalie',
      'Backup automatico HD 60 giorni'
    ],
    client: 'Struttura Sanitaria (2023)'
  },
  {
    image: '/automazione.jpg',
    category: 'Automazione',
    title: 'Automazione illuminazione e clima per edificio commerciale',
    description: 'Sistema di automazione integrato per il controllo di illuminazione, riscaldamento e climatizzazione in un moderno centro commerciale. Programmazione PLC custom per ottimizzazione consumi energetici e comfort abitativo.',
    results: [
      'Riduzione consumi energetici 40%',
      'Sistema programmabile via app mobile',
      'Risparmio gestionale annuale: €15,000'
    ],
    client: 'Centro Commerciale (2023)'
  },
  {
    image: '/prodotto.jpg',
    category: 'Informatica',
    title: 'Migrazione infrastruttura IT verso cloud ibrido',
    description: 'Progettazione e implementazione di una strategia di cloud ibrido con virtualizzazione completa dei server aziendali. Migrazione zero-downtime di 50+ workload critici con nuova architettura disaster recovery.',
    results: [
      'Migration completata in 3 mesi',
      'Riduzione CAPEX del 35%',
      'RTO/RPO ottimizzati per business continuity'
    ],
    client: 'PMI Manifatturiera (2022)'
  },
  {
    image: '/tw2-totem.jpg',
    category: 'Audio & Video',
    title: 'Totem multimediali per showroom aziendale',
    description: 'Installazione di totem interattivi touchscreen per la presentazione di prodotti e servizi. Sistema di content management centralizzato con aggiornamento remoto da headquarter.',
    results: [
      '8 totem full HD interattivi',
      'CMS web-based intuitivo',
      'Aumento engagement visitatori 55%'
    ],
    client: 'Showroom Aziendale (2023)'
  },
  {
    image: '/videocitofono.jpg',
    category: 'Telefonia',
    title: 'Centralino VoIP per struttura ospedaliera',
    description: 'Implementazione di centralino telefonico VoIP con integrazione con sistemi di emergency call. Supporto per 200+ estensioni con roaming mobile e call recording integrato.',
    results: [
      '200+ estensioni gestite',
      'Risparmio telefonico 45%',
      'Integrazione emergency call'
    ],
    client: 'Ospedale Privato (2022)'
  }
]

export default function Portfolio() {
  useDocumentTitle({
    title: 'Portfolio | TecnoWorld2',
    description: 'Scopri i nostri case studies. Progetti realizzati in reti, videosorveglianza, automazione e sicurezza informatica.',
    ogTitle: 'Portfolio Progetti - TecnoWorld2',
    ogDescription: '6+ case studies di progetti realizzati con successo in vari settori.'
  })

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white to-tw-bg-alt">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-tw-dark mb-4">
              I nostri progetti
            </h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Scopri come abbiamo aiutato diverse realtà pubbliche, industriali e private a raggiungere i loro obiettivi di sicurezza e innovazione
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <CaseStudyCard
                key={idx}
                image={study.image}
                category={study.category}
                title={study.title}
                description={study.description}
                results={study.results}
                client={study.client}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-tw-bg-alt">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-tw-primary mb-2">50+</p>
              <p className="text-secondary">Progetti completati</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-tw-primary mb-2">150+</p>
              <p className="text-secondary">Clienti soddisfatti</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-tw-primary mb-2">€2M+</p>
              <p className="text-secondary">Valore investito</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-tw-primary mb-2">10+</p>
              <p className="text-secondary">Anni di esperienza</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="bg-gradient-to-r from-tw-primary to-[#C1121F] rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sei interessato a un progetto simile?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Contatta il nostro team per una consulenza gratuita e scopri come possiamo aiutare la tua azienda.
            </p>
            <a
              href="/#"
              className="inline-flex items-center gap-2 bg-white text-tw-primary font-semibold py-3 px-8 rounded-full hover:bg-tw-bg-alt transition"
            >
              Richiedi una consulenza
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
