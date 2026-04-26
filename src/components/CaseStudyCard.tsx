import { ArrowRight } from 'lucide-react'

interface CaseStudyCardProps {
  image: string
  category: string
  title: string
  description: string
  results: string[]
  client: string
}

export default function CaseStudyCard({
  image,
  category,
  title,
  description,
  results,
  client
}: CaseStudyCardProps) {
  return (
    <div className="bg-white border border-tw-border rounded-2xl overflow-hidden card-hover group">
      {/* Image */}
      <div className="h-64 w-full bg-tw-bg-alt overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Category Badge */}
        <div className="inline-block mb-4">
          <span className="badge-pill text-xs">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-tw-dark mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Client */}
        <p className="text-sm font-semibold text-tw-primary mb-4">
          Cliente: {client}
        </p>

        {/* Description */}
        <p className="text-secondary mb-6 line-clamp-3">
          {description}
        </p>

        {/* Results */}
        <div className="mb-6 space-y-2">
          <p className="text-xs font-semibold text-tw-dark uppercase tracking-wide">
            Risultati:
          </p>
          <ul className="space-y-1">
            {results.slice(0, 2).map((result, idx) => (
              <li key={idx} className="text-sm text-tw-text-secondary flex items-start gap-2">
                <span className="text-tw-primary mt-1">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-tw-primary hover:bg-[#C1121F] text-white font-semibold py-3 px-4 rounded-full transition duration-300 flex items-center justify-center gap-2 group/btn">
          Leggi il case study
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
