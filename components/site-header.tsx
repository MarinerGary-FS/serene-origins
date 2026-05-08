'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { STRIPE_URL, BRAND_NAME } from '@/lib/constants'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0908]/95 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-content">
          <div className="flex items-center justify-between h-16 md:h-[4.25rem]">

            {/* Wordmark */}
            <a href="#" className="flex items-center no-underline">
              <Image
                src="/logo.svg"
                alt={BRAND_NAME}
                width={220}
                height={50}
                priority
                className="h-10 w-auto md:h-12"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'What\'s Included', href: '#included' },
                { label: 'Membership', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[0.82rem] text-cream-dim hover:text-cream transition-colors duration-200 no-underline tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[0.82rem] py-[0.65rem] px-5"
              >
                Join Now
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${
                  menuOpen ? 'translate-y-[6.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${
                  menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div
        className={`mobile-nav ${menuOpen ? 'open' : ''} fixed top-0 right-0 bottom-0 w-72 z-40 bg-[#0f0e0c] border-l border-white/[0.08] flex flex-col pt-20 px-8 pb-8 md:hidden`}
      >
        <nav className="flex flex-col gap-6 flex-1">
          {[
            { label: 'How It Works', href: '#how-it-works' },
            { label: "What's Included", href: '#included' },
            { label: 'Membership', href: '#pricing' },
            { label: 'FAQ', href: '#faq' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[1rem] text-cream-dim hover:text-cream transition-colors no-underline"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={STRIPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center"
        >
          Join Now — $29/month
        </a>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
