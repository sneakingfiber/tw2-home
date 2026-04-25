import { Phone, Zap, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Contatta il nostro team",
    description: "Chiama il nostro numero diretto 334-8213252 o invia un'email a info@tw2.eu per richiedere l'assistenza remota."
  },
  {
    icon: Zap,
    number: "2",
    title: "Connessione remota",
    description: "Tramite strumenti sicuri e certificati, accediamo al vostro sistema per diagnosticare e risolvere il problema in tempo reale."
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Problema risolto",
    description: "Documentazione completa dell'intervento, report tecnico e raccomandazioni per prevenire problemi futuri."
  }
]

export default function AssistenzaRemota() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-white to-[#F7F7F7]">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
              Assistenza Remota
            </h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Risoluzioni rapide senza attese, direttamente sul vostro sistema
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#222222] mb-6">
              Come funziona
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              L'assistenza remota Tecnoworld2 è la soluzione ideale per risolvere problematiche tecniche in modo rapido, sicuro e efficace. Senza la necessità di inviare un tecnico in sede, accediamo al vostro sistema in tutta sicurezza, diagnostichiamo il problema e procediamo alla risoluzione in tempo reale.
            </p>
            <p className="text-secondary leading-relaxed">
              Questa modalità riduce i tempi di downtime, i costi di intervento e consente al vostro team di continuare a lavorare con tempestività. Tutti gli accessi sono registrati, tracciati e conformi agli standard di sicurezza internazionali.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-16">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="flex gap-8 items-start">
                  {/* Left: Icon and number */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#E63946] rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                      <Icon size={40} className="text-white" />
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="h-16 w-1 bg-[#DDDDDD] mb-4"></div>
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 pt-4">
                    <h3 className="text-2xl font-bold text-[#222222] mb-3">
                      Step {step.number}: {step.title}
                    </h3>
                    <p className="text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Features */}
          <div className="bg-[#F7F7F7] rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#222222] mb-6">
              Vantaggi della nostra assistenza remota
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle size={24} className="text-[#E63946] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#222222] mb-2">Velocità</h4>
                  <p className="text-secondary text-sm">Interventi in tempo reale senza attese di spostamento</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle size={24} className="text-[#E63946] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#222222] mb-2">Sicurezza</h4>
                  <p className="text-secondary text-sm">Connessioni crittografate e conformi agli standard ISO</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle size={24} className="text-[#E63946] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#222222] mb-2">Efficienza</h4>
                  <p className="text-secondary text-sm">Riduzione dei costi di intervento on-site</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle size={24} className="text-[#E63946] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#222222] mb-2">Trasparenza</h4>
                  <p className="text-secondary text-sm">Report dettagliati e comunicazione costante</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container-max">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center border border-[#DDDDDD]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              Hai bisogno di assistenza remota?
            </h2>
            <p className="text-secondary max-w-xl mx-auto mb-8">
              Contatta il nostro team per richiedere subito un intervento remoto. Siamo disponibili 24 ore su 24.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+393348213252"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Chiama: 334-8213252
              </a>
              <a href="mailto:info@tw2.eu" className="btn-secondary">
                Invia richiesta email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
