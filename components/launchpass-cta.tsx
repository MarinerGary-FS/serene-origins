import type { ButtonHTMLAttributes, ReactNode } from 'react'

type LaunchPassCTAProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  children?: ReactNode
}

export function LaunchPassCTA({
  children = 'Begin The Discipline Transformation System',
  className = '',
  ...props
}: LaunchPassCTAProps) {
  return (
    <button
      type="button"
      className={`lp4825787519074304 ${className}`.trim()}
      {...props}
      data-cta="launchpass-discipline-transformation-system"
      aria-label="Open LaunchPass checkout for the Discipline Transformation System"
    >
      {children}
    </button>
  )
}
