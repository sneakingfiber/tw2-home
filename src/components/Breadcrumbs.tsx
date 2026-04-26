import { useLocation, Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  path: string
}

const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
  '/societa': [{ label: 'Chi siamo', path: '/societa' }],
  '/supporto': [{ label: 'Supporto', path: '/supporto' }],
  '/assistenza-remota': [{ label: 'Assistenza Remota', path: '/assistenza-remota' }],
  '/portfolio': [{ label: 'Portfolio', path: '/portfolio' }]
}

export default function Breadcrumbs() {
  const location = useLocation()
  const breadcrumbs = breadcrumbMap[location.pathname]

  // Don't show breadcrumbs on home page
  if (!breadcrumbs || location.pathname === '/') {
    return null
  }

  return (
    <nav className="bg-white border-b border-tw-border py-3">
      <div className="container-max">
        <ol className="flex items-center gap-2 text-sm">
          {/* Home Link */}
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 text-tw-text-secondary hover:text-tw-primary transition"
              title="Home"
            >
              <Home size={16} />
              <span>Home</span>
            </Link>
          </li>

          {/* Breadcrumb Items */}
          {breadcrumbs.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-tw-border" />
              {idx === breadcrumbs.length - 1 ? (
                // Current page (not a link)
                <span className="text-tw-dark font-semibold">{item.label}</span>
              ) : (
                // Link to page
                <Link
                  to={item.path}
                  className="text-tw-text-secondary hover:text-tw-primary transition"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
