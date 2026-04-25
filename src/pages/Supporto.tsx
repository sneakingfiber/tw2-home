import { Phone, Mail, Zap, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const supportChannels = [
  {
    icon: Phone,
    title: "Supporto Telefonico",
    description: "Contatta il nostro team direttamente per problemi urgenti.",
    contact: "0182-7330891 / 334-8213252",
    availability: "24 ore su 24, 7 giorni su 7"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Invia una richiesta dettagliata al nostro team di supporto.",
    contact: "info@tw2.eu",
    availability: "Risposta entro 24 ore"
  },
  {
    icon: Zap,
    title: "Assistenza On-Site",
    description: "Intervento diretto presso la tua sede per risolvere problematiche complesse.",
    contact: "Valutazione personalizzata",
    availability: "Su appuntamento"
  }
]

const faqItems = [
  {
    question: "Quali sono gli orari di supporto?",
    answer: "Il nostro team è disponibile 24 ore su 24, 7 giorni su 7. Per emergenze critiche, contattaci direttamente al 334-8213252. Per richieste standard via email, garantiamo risposta entro 24 ore."
  },
  {
    question: "Offrite servizi di manutenzione preventiva?",
    answer: "Sì, offriamo pacchetti di manutenzione preventiva personalizzati per prolungare la vita dei vostri impianti, prevenire disservizi e ottimizzare le performance. Contattateci per una proposta su misura."
  },
  {
    question: "Quanto tempo impiega la risoluzione di un problema?",
    answer: "I tempi variano in base alla complessità. Per problemi semplici, risolventi in poche ore. Per interventi più complessi, forniamo una stima accurate dopo la diagnosi iniziale."
  },
  {
    question: "Fornite documentazione tecnica dei vostri sistemi?",
    answer: "Sì, forniamo documentazione tecnica completa, manuali di utilizzo e training al vostro team. Vogliamo che siate autonomi ma sempre con il nostro supporto a disposizione."
  },
  {
    question: "Potete integrare i nostri sistemi legacy?",
    answer: "Assolutamente. La nostra esperienza include l'integrazione di nuove soluzioni con infrastrutture esistenti di qualsiasi natura. Valutiamo i vostri sistemi attuali e proponiamo l'approccio migliore."
  },
  {
    question: "Quale è il costo del supporto?",
    answer: "I costi dipendono dalla natura del servizio, dalla complessità della vostra infrastruttura e dal tipo di contratto. Offriamo pacchetti scalabili con prezzi trasparenti. Richiedete un preventivo personalizzato."
  }
]

function FAQItem({ item, isOpen, onToggle }: any) {
  return (
    <div className="border border-[#DDDDDD] rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-[#F7F7F7] transition-colors text-left"
      >
        <span className="font-semibold text-[#222222]">{item.question}</span>
        <ChevronDown
          size={20}
          className={`text-[#E63946] transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-[#F7F7F7] border-t border-[#DDDDDD]">
          <p className="text-secondary leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function Supporto() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-white to-[#F7F7F7]">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
              Centro Supporto
            </h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Siamo qui per assicurare che i vostri sistemi funzionino sempre al massimo
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              Canali di supporto
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Scegli il modo che preferisci per contattarci
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, idx) => {
              const Icon = channel.icon
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#DDDDDD] rounded-2xl p-8 card-hover"
                >
                  <div className="w-12 h-12 bg-[#F7F7F7] rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#E63946]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#222222] mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-secondary text-sm mb-6">
                    {channel.description}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-[#DDDDDD]">
                    <p className="font-medium text-[#222222]">{channel.contact}</p>
                    <p className="text-sm text-secondary">{channel.availability}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              Domande frequenti
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Risposte alle domande più comuni riguardanti i nostri servizi
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <FAQItem
                key={idx}
                item={item}
                isOpen={openFAQ === idx}
                onToggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-[#222222] mb-4">
            Non hai trovato la risposta che cercavi?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8">
            Contatta direttamente il nostro team, siamo sempre pronti ad aiutarti.
          </p>
          <a href="mailto:info@tw2.eu" className="btn-primary">
            Contattaci
          </a>
        </div>
      </section>
    </>
  )
}
