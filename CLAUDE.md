# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

```bash
npm run dev       # Start dev server on localhost:5173
npm run build     # TypeScript check + Vite bundle for production
npm run preview   # Preview the production build locally
```

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI framework |
| React Router | 6.22.0 | Client-side routing |
| TypeScript | 5.2.2 | Type safety (strict mode) |
| Vite | 5.0.8 | Build tool & dev server (instant HMR) |
| Tailwind CSS | 3.4.1 | Utility-first CSS |
| Lucide React | 0.372.0 | Icon library |

**CSS Pipeline:** Tailwind → PostCSS → Autoprefixer

## Project Structure

### Core Directories

- **`src/components/`** — Reusable UI components (Navbar, Footer, Breadcrumbs, ContactForm, CaseStudyCard)
- **`src/pages/`** — Page-level components (Home, Societa, Supporto, AssistenzaRemota, Portfolio)
- **`src/hooks/`** — Custom React hooks (useDocumentTitle for SEO)
- **`src/index.css`** — Tailwind imports + Tailwind layer utilities (.container-max, .btn-primary, etc.)
- **`public/`** — Static assets (logo, images)

### Key Files

- **`src/App.tsx`** — Root component with React Router setup, Breadcrumbs wrapper
- **`vite.config.ts`** — Vite + React plugin config
- **`tailwind.config.js`** — Custom colors: `tw-primary` (#E63946), `tw-dark` (#222222), `tw-text-secondary`, `tw-border`, `tw-bg-alt`
- **`tsconfig.json`** — TypeScript strict mode enabled

## Routing Map

```
/                  → Home (hero + services + certifications + contact form)
/societa           → Company page (about + pillars)
/supporto          → Support center (channels + FAQ accordion)
/assistenza-remota → Remote assistance service (steps + benefits)
/portfolio         → Case studies gallery
```

Breadcrumbs component auto-hides on home page.

## Architecture Highlights

### No Global State
- React `useState` only for component-local state
- ContactForm validates and manages its own state
- Navbar controls mobile menu toggle internally
- No Redux, Context API, or custom state management

### Responsive Design (Mobile-First)
- Tailwind breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Layout pattern: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Navbar: `hidden md:flex` desktop, hamburger menu on mobile
- Container: `max-w-7xl mx-auto px-6` (responsive padding)

### SEO & Meta Tags
- Custom hook: `useDocumentTitle()` injects dynamic meta tags (title, description, og: tags)
- Called at top of each page component
- Updates `document.title` and injects/updates `<meta>` elements

### Styling Conventions
- **Tailwind utility classes** directly in JSX (no CSS files)
- **Custom Tailwind layers** in `index.css`: `.container-max`, `.btn-primary`, `.badge-pill`, `.card-hover`, `.text-secondary`
- **Inline brand colors**: `text-[#E63946]`, `bg-[#222222]`
- **No inline styles** (except rare dynamic cases)

### Component Naming
- PascalCase: `Navbar.tsx`, `ContactForm.tsx`, `CaseStudyCard.tsx`
- Props interface above component: `interface ComponentProps { ... }`
- Export `default function ComponentName(...) { ... }`

### Image Loading
- Images in `/public/` served statically by Vite
- Images in components: `<img src="/filename.jpg" alt="..." loading="lazy" />`
- Lazy loading attribute for performance

## Common Development Tasks

### Add a New Page
1. Create `src/pages/NewPage.tsx` with `useDocumentTitle()` hook
2. Add route in `src/App.tsx`: `<Route path="/route-name" element={<NewPage />} />`
3. Add breadcrumb entry in `src/components/Breadcrumbs.tsx` to `breadcrumbMap`
4. Add nav link in `src/components/Navbar.tsx` (desktop + mobile)

### Add a Service Section
1. Add icon import from lucide-react (only icons that exist: Network, Camera, Monitor, etc.)
2. Create service object in page with: `icon`, `title`, `description`, `image`
3. Render with `.map()` in grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Update Colors Brand-Wide
1. Change `tw-primary: #E63946` in `tailwind.config.js`
2. Or inline: replace all `text-[#E63946]` with new color
3. Test responsive: `npm run dev` → resize browser

### Add Form Fields
- ContactForm validates: `name`, `email`, `phone`, `service`, `message`
- Validation logic in `ContactForm.tsx` with `validateForm()` function
- Success/error messages with toast-like alerts

## Important Implementation Details

### TypeScript Strict Mode
- All component props must be properly typed
- Avoid `any` types; use `unknown` if truly unknown
- Return types on functions recommended

### Lucide Icons
- Import only icons that exist: Network, Camera, Monitor, Cpu, Phone, Tv2, Shield, Wrench, Users, Award, ChevronRight, Home, Menu, X, ArrowRight, Mail, MapPin, Zap, CheckCircle, etc.
- **NOT available:** Certificate, Smartphone, etc. (use Award, Phone, etc. instead)
- Icon size: 16-32px typical (size={20}, size={24}, etc.)
- Color: `text-tw-primary` or `text-[#E63946]`

### Tailwind Responsive Pattern
```jsx
{/* Shows 1 col mobile, 2 cols on tablet, 3 on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Form Validation Pattern
1. Check all required fields
2. Set error state with message
3. Return false to prevent submission
4. Show error UI with AlertCircle icon

### Image Lazy Loading
```jsx
<img src="/image.jpg" alt="Description" loading="lazy" className="..." />
```

## Development Workflow

### During Development
1. **Start dev server:** `npm run dev`
2. **Edit file** → Vite instant HMR reloads automatically
3. **TypeScript errors** show in terminal + IDE
4. **Browser console** shows React warnings

### Before Committing
1. **Run build:** `npm run build` (fails if TypeScript errors)
2. **No ESLint/Prettier** configured (be mindful of code style)
3. **Commit message style:** Imperative ("Add feature", "Fix bug", "Update component")

### Production Build
- `npm run build` outputs to `/dist/` directory
- Ready for static hosting (Vercel, Netlify, GitHub Pages)

## Git Workflow (Claude Code)

- **Current branch:** `master` (main)
- **Worktree strategy:** Use Git worktrees for parallel tasks
- **No remote configured** (local-only repository)

## Browser Support & Performance

- **Target ES2020** (modern browsers, no IE11)
- **Lazy loading images** for performance
- **Vite fast refresh** for dev experience
- **Fast builds** thanks to Vite + esbuild

## Notes for Future Work

### High Priority Improvements
1. **Form backend** — ContactForm currently client-side only
2. **Image optimization** — Convert JPG to WebP for faster loading
3. **Analytics** — Add Google Analytics or Vercel Analytics tracking
4. **A/B testing** — Add conversion tracking for form submissions

### Medium Priority
1. **Dark mode toggle** — Can be implemented with Tailwind dark: variant
2. **Accessibility audit** — Run axe DevTools or WAVE for WCAG compliance
3. **Newsletter signup** — Add email collection in Footer
4. **Case study modals** — Click CaseStudyCard to view full details

### Low Priority
1. **Component library extraction** — Formalize into reusable component system
2. **Automated screenshot tests** — E2E tests for visual regression
3. **Internationalization (i18n)** — Multi-language support

## Useful Resources

- **Tailwind Docs:** https://tailwindcss.com/docs
- **React Router Docs:** https://reactrouter.com/
- **Vite Docs:** https://vitejs.dev/
- **Lucide Icons:** https://lucide.dev/ (search available icons)

---

**Last Updated:** April 26, 2026  
**Repository:** TecnoWorld2 (Vite + React + TypeScript + Tailwind)
