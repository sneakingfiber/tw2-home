import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'success' | 'error'
  message: string
}

const services = [
  'Rete Dati e Connettività',
  'Videosorveglianza',
  'Informatica',
  'Automazione',
  'Telefonia',
  'Audio e Video',
  'Altro'
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Per favore inserisci il tuo nome' })
      return false
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus({ type: 'error', message: 'Per favore inserisci una email valida' })
      return false
    }
    if (!formData.phone.trim()) {
      setStatus({ type: 'error', message: 'Per favore inserisci un numero di telefono' })
      return false
    }
    if (!formData.service) {
      setStatus({ type: 'error', message: 'Per favore seleziona un servizio' })
      return false
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Il messaggio deve contenere almeno 10 caratteri' })
      return false
    }
    return true
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (status.type === 'error') {
      setStatus({ type: 'idle', message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulating form submission - replace with actual backend endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Log form data (replace with actual API call)
      console.log('Form submitted:', formData)

      setStatus({
        type: 'success',
        message: 'Grazie! Abbiamo ricevuto il tuo messaggio. Ti contatteremo a breve.'
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' })
      }, 5000)

    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Si è verificato un errore. Per favore riprova più tardi.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-tw-dark mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Es. Marco Rossi"
            className="w-full px-4 py-3 border border-tw-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tw-primary focus:border-transparent transition"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-tw-dark mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tua@email.com"
            className="w-full px-4 py-3 border border-tw-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tw-primary focus:border-transparent transition"
            required
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-tw-dark mb-2">
            Telefono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+39 123 456 7890"
            className="w-full px-4 py-3 border border-tw-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tw-primary focus:border-transparent transition"
            required
          />
        </div>

        {/* Service Select */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-tw-dark mb-2">
            Servizio Interessato *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-tw-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tw-primary focus:border-transparent transition bg-white"
            required
          >
            <option value="">Seleziona un servizio...</option>
            {services.map(service => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message Field - Full Width */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-tw-dark mb-2">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Descrivi brevemente il tuo progetto o esigenza..."
          rows={5}
          className="w-full px-4 py-3 border border-tw-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tw-primary focus:border-transparent transition resize-none"
          required
        />
      </div>

      {/* Status Messages */}
      {status.type === 'success' && (
        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle size={20} className="text-green-600" />
          <p className="text-green-700">{status.message}</p>
        </div>
      )}

      {status.type === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle size={20} className="text-red-600" />
          <p className="text-red-700">{status.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-tw-primary hover:bg-[#C1121F] text-white font-semibold py-3 px-6 rounded-full transition duration-300 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Send size={20} />
        {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
      </button>

      <p className="text-xs text-tw-text-secondary text-center">
        * Campo obbligatorio. Risponderemo al tuo messaggio entro 24 ore.
      </p>
    </form>
  )
}
