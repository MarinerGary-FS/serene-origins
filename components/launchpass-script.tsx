'use client'

import Script from 'next/script'

export function LaunchPassScript() {
  return (
    <Script
      src="https://www.launchpass.com/serene-origin/discipline-transformation-system/embed.js"
      strategy="afterInteractive"
    />
  )
}
