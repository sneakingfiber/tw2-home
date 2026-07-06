import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function PrivacyPolicy() {
  useDocumentTitle({
    title: 'Privacy Policy | TecnoWorld2',
    description: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).'
  })

  return (
    <section className="py-16 bg-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-tw-dark mb-8">
            Privacy Policy
          </h1>
          <p className="text-secondary mb-10">
            Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del
            Regolamento UE 2016/679 (&ldquo;GDPR&rdquo;).
          </p>

          <div className="space-y-8 text-tw-dark leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold mb-3">1. Titolare del trattamento</h2>
              <p className="text-secondary">
                Tecnoworld2 — Via Dalmazia 142, 17031 Albenga (SV) — P.IVA 03259940041.<br />
                Email: <a href="mailto:info@tw2.eu" className="text-tw-primary hover:underline">info@tw2.eu</a> — Tel. 0182-7330891.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">2. Dati raccolti</h2>
              <p className="text-secondary">
                Attraverso il modulo di contatto presente sul sito raccogliamo i dati che ci fornisci
                volontariamente: nome e cognome, indirizzo email, numero di telefono, servizio di
                interesse e contenuto del messaggio. Il sito non utilizza cookie di profilazione né
                strumenti di tracciamento di terze parti.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">3. Finalità e base giuridica</h2>
              <p className="text-secondary">
                I dati sono trattati esclusivamente per rispondere alla tua richiesta di contatto o
                di preventivo. La base giuridica del trattamento è l&rsquo;esecuzione di misure
                precontrattuali adottate su tua richiesta (art. 6, par. 1, lett. b GDPR) e il tuo
                consenso espresso al momento dell&rsquo;invio del modulo (art. 6, par. 1, lett. a GDPR).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">4. Modalità di trattamento e conservazione</h2>
              <p className="text-secondary">
                I dati inviati tramite il modulo sono conservati su Google Firebase (Google Ireland
                Limited), che agisce come responsabile del trattamento, su server situati
                nell&rsquo;Unione Europea o in paesi che garantiscono un livello di protezione adeguato.
                I dati sono conservati per il tempo strettamente necessario a gestire la richiesta e
                comunque non oltre 24 mesi dall&rsquo;ultimo contatto.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">5. Comunicazione dei dati</h2>
              <p className="text-secondary">
                I dati non sono venduti né ceduti a terzi. Possono essere trattati esclusivamente da
                personale interno autorizzato e dai fornitori tecnici che ospitano il sito e il
                servizio di posta elettronica, nominati responsabili del trattamento.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">6. Diritti dell&rsquo;interessato</h2>
              <p className="text-secondary">
                Ai sensi degli artt. 15-22 GDPR hai diritto di ottenere l&rsquo;accesso ai tuoi dati,
                la rettifica, la cancellazione, la limitazione del trattamento, la portabilità e di
                opporti al trattamento, nonché di revocare in qualsiasi momento il consenso prestato.
                Puoi esercitare i tuoi diritti scrivendo a{' '}
                <a href="mailto:info@tw2.eu" className="text-tw-primary hover:underline">info@tw2.eu</a>.
                Hai inoltre diritto di proporre reclamo al Garante per la Protezione dei Dati Personali
                (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-tw-primary hover:underline">www.garanteprivacy.it</a>).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">7. Aggiornamenti</h2>
              <p className="text-secondary">
                La presente informativa può essere aggiornata; la versione pubblicata su questa pagina
                è quella vigente. Ultimo aggiornamento: luglio 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
