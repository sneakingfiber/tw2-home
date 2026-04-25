# Tecnoworld2 Website

Sito web moderno e responsive per **Tecnoworld2**, azienda B2B italiana specializzata in reti, sistemi di sicurezza e soluzioni ICT.

## 🏢 Azienda

**Tecnoworld2** - Albenga, Liguria (SV)
- Specializzazione: Reti dati, Videosorveglianza, Informatica, Automazione, Telefonia, Audio e Video
- Clientela: Pubblica Amministrazione, Industria, Settore Privato
- Esperienza: +10 anni

## 🛠️ Stack Tecnologico

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v6
- **Icons**: lucide-react
- **Font**: Inter (Google Fonts)

## 📦 Installazione

```bash
npm install
```

## 🚀 Comandi

```bash
# Dev server (localhost:5173)
npm run dev

# Build per produzione
npm run build

# Preview build locale
npm run preview
```

## 📄 Struttura Pagine

### Home `/`
- **Hero Section**: Presentazione aziendale con badge, CTA e micro-stats
- **Servizi**: Griglia 6 servizi offerti
- **Perché Sceglierci**: 3 pillar (Sicurezza, Assistenza, Clientela)
- **Final CTA**: Call-to-action per contatto

### Chi Siamo `/societa`
- History aziendale
- 3 Pillar card (Esperienza, Qualità, Territorio)

### Supporto `/supporto`
- 3 Canali di supporto (Telefono, Email, On-site)
- FAQ Accordion (6 domande)

### Assistenza Remota `/assistenza-remota`
- Spiegazione del servizio
- 3 Step process con icone
- Benefits section
- CTA con numero diretto

## 🎨 Design System (Airbnb-Inspired)

### Colori
- **Background**: `#FFFFFF` (Bianco)
- **Testo primario**: `#222222` (Nero scuro)
- **Testo secondario**: `#717171` (Grigio)
- **Brand accent**: `#0ea5e9` (Ciano)
- **Bordi**: `#DDDDDD`
- **Bg alternate**: `#F7F7F7` (Grigio chiaro)

### Tipografia
- **Font**: Inter (sans-serif)
- **Hero**: 48px bold
- **Section Title**: 32px bold
- **Card Title**: 20px semibold
- **Body**: 16px normal
- **Caption**: 14px normal

### Componenti Stilistici
- **Border radius**: Generoso (bottoni `rounded-full`, card `rounded-2xl`)
- **Ombre**: Leggere (card `shadow-sm`)
- **Spacing**: Ariosi (py-16/py-20 sezioni, p-6 card)
- **Hover card**: `scale-[1.02]` + `shadow-md`
- **Transizioni**: 200ms ease

### Bottoni
```
Primary: bg-[#0ea5e9] text-white rounded-full px-6 py-3
Secondary: border border-[#222222] text-[#222222] rounded-full px-6 py-3
```

## 📱 Responsive Design

- **Mobile First**: Breakpoints sm (640px), md (768px), lg (1024px)
- **Navbar**: Sticky con hamburger menu mobile
- **Layout**: Container max-w-7xl mx-auto px-6
- **Testato**: Mobile (375px), Tablet (768px), Desktop (1280px)

## 🗂️ Struttura File

```
tw2-home/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Societa.tsx
│   │   ├── Supporto.tsx
│   │   └── AssistenzaRemota.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── package.json
```

## 🔗 Contatti Tecnoworld2

- **Telefono**: 0182-7330891 | 334-8213252
- **Email**: info@tw2.eu
- **Indirizzo**: Via Dalmazia 142, 17031 Albenga (SV)
- **P.IVA**: 03259940041

## 📝 Note

- Tutti i link di contatto sono funzionali (mailto, tel)
- Smooth scroll behavior attivato globalmente
- SEO meta tags in index.html
- Accessibilità: semantic HTML, proper heading hierarchy

---

**Realizzato con Vite + React + Tailwind CSS** ✨
