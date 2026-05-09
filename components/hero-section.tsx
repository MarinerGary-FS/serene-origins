import { LaunchPassCTA } from '@/components/launchpass-cta'

export function HeroSection() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">

      {/* Subtle decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.025]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.015]" />
      </div>

      <div className="container-content relative z-10 text-center mx-auto">

        {/* Eyebrow */}
        <div className="reveal is-visible">
          <span className="eyebrow">Private · Structured · Judgment-Free</span>
        </div>

        {/* Headline */}
        <div className="reveal is-visible" style={{ animationDelay: '0.1s' }}>
          <h1
            className="text-hero mx-auto mb-0"
            style={{
              fontFamily: 'var(--font-display)',
              maxWidth: '780px',
              fontWeight: 300,
              fontStyle: 'italic',
            }}
          >
            Private, structured support<br className="hidden sm:block" /> for{' '}
            <span style={{ color: 'var(--sage)' }}>living with more clarity</span>
            <br className="hidden sm:block" /> and confidence.
          </h1>
        </div>

        {/* Subheadline */}
        <div className="reveal is-visible mt-7" style={{ animationDelay: '0.2s' }}>
          <p
            className="text-[1.05rem] leading-[1.8] mx-auto"
            style={{ color: 'var(--cream-dim)', maxWidth: '560px' }}
          >
            Built for people living with herpes who want more than scattered advice —
            a private, guided space for clarity, real support, and grounded confidence.
          </p>
        </div>

        {/* CTAs */}
        <div className="reveal is-visible mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.3s' }}>
          <LaunchPassCTA
            className="btn-primary w-full sm:w-auto text-[0.86rem] sm:text-[0.93rem] py-[0.9rem] px-6 sm:px-8"
          >
            Begin The Discipline Transformation System
          </LaunchPassCTA>
          <a
            href="#how-it-works"
            className="btn-ghost text-[0.88rem]"
          >
            See how it works
          </a>
        </div>

        {/* Trust row */}
        <div className="reveal is-visible mt-10" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {[
              'LaunchPass-managed Discord access',
              'Private member space',
              'Cancel anytime',
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-[0.76rem] tracking-wide"
                style={{ color: 'var(--muted)' }}
              >
                <span style={{ color: 'var(--sage)' }}>✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}
