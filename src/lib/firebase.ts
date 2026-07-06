export interface ContactRequest {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const CONTACT_EMAIL = 'info@tw2.eu'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

export function isFirebaseConfigured(): boolean {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId)
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Salva la richiesta di contatto su Firestore nel formato atteso
 * dall'estensione Firebase "Trigger Email" (campi `to` e `message`),
 * conservando anche i dati grezzi del form in `form`.
 *
 * L'SDK Firebase viene importato dinamicamente per non appesantire
 * il bundle iniziale del sito.
 */
export async function submitContactRequest(data: ContactRequest): Promise<void> {
  if (!isFirebaseConfigured()) {
    throw new Error('Firebase non è configurato: variabili VITE_FIREBASE_* mancanti')
  }

  const { initializeApp, getApps } = await import('firebase/app')
  const { getFirestore, collection, addDoc, serverTimestamp } = await import('firebase/firestore')

  const app = getApps()[0] ?? initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const text = [
    `Nome: ${data.name}`,
    `Email: ${data.email}`,
    `Telefono: ${data.phone}`,
    `Servizio: ${data.service}`,
    '',
    data.message
  ].join('\n')

  await addDoc(collection(db, 'contact-requests'), {
    to: [CONTACT_EMAIL],
    replyTo: data.email,
    message: {
      subject: `Richiesta dal sito: ${data.service} — ${data.name}`,
      text,
      html: escapeHtml(text).replace(/\n/g, '<br>')
    },
    form: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message
    },
    createdAt: serverTimestamp()
  })
}
