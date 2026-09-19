interface TeamViewerIconProps {
  size?: number
  className?: string
}

export default function TeamViewerIcon({ size = 24, className }: TeamViewerIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="TeamViewer"
    >
      <circle cx="12" cy="12" r="12" fill="#0E8EE9" />
      <g stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round">
        <line x1="6" y1="9" x2="14.5" y2="9" />
        <line x1="9.5" y1="15" x2="18" y2="15" />
      </g>
      <g fill="#FFFFFF">
        <polygon points="14.5,5.8 19,9 14.5,12.2" />
        <polygon points="9.5,11.8 5,15 9.5,18.2" />
      </g>
    </svg>
  )
}
