import type { LucideIcon } from 'lucide-react'

export interface ServiceTech {
  name: string
  url?: string
  isInlineSvg?: boolean
}

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  image: string
  techs?: ServiceTech[]
}

export default function ServiceCard({ icon: Icon, title, image, techs }: ServiceCardProps) {
  return (
    <div className="bg-white border border-[#DDDDDD] rounded-2xl overflow-hidden card-hover">
      <div className="h-48 w-full bg-gradient-to-br from-[#F7F7F7] to-[#EEEEEE] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 justify-center">
          <Icon size={20} className="text-[#E63946]" />
          <h3 className="text-lg font-semibold text-[#222222]">
            {title}
          </h3>
        </div>
        {techs && (
          <div className="flex flex-wrap gap-4 items-center justify-center mt-4 pt-4 border-t border-[#EEEEEE]">
            {techs.map((tech, techIdx) => (
              <div key={techIdx} className="flex flex-col items-center gap-1">
                {tech.isInlineSvg ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#717171">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                ) : (
                  <img src={tech.url} width="24" height="24" alt={tech.name} loading="lazy" style={{ filter: 'invert(60%)' }} />
                )}
                <span className="text-[10px] text-[#717171]">{tech.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
