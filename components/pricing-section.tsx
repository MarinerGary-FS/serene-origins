import { Reveal } from '@/components/ui/reveal'
import { STRIPE_URL } from '@/lib/constants'

const features = [
  'Private member community',
  'Structured guidance framework',
  'Educational content library',
  'Organized discussion spaces',
  'New content & discussions weekly',
  'Onboarding to get you started',
]

export function PricingSection() {
  return (
    <section className="section-pad section-dark" id="pricing">
      <div className="container-content">

        <Reveal>
          <div className="max-w-lg mx-auto text-center mb-12">
            <span className="eyebrow">Membership</span>
            <h2 className="section-title">Simple membership.<br className="hidden sm:block" /> Clear support.</h2>
            <p className="section-subtitle mt-4 mx-auto">
              One plan. Everything included. No confusing tiers or add-ons.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="mx-auto rounded-[12px] border overflow-hidden"
            style={{
              maxWidth: '480px',
              borderColor: 'rgba(138,160,137,0.25)',
              background: 'var(--bg-card)',
              boxShadow: '0 0 60px rgba(138,160,137,0.06), 0 24px 60px rgba(0,0,0,0.4)',
            }}
          >
            {/* Top accent */}
            <div
              className="h-[3px]"
              style={{ background: 'linear-gradient(90deg, var(--sage), transparent)' }}
            />

            <div className="p-9">
              {/* Plan label */}
              <div className="flex items-center justify-between mb-7">
                <span
                  className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase"
                  style={{ color: 'var(--sage)', fontFamily: 'var(--font-sans)' }}
                >
                  Serene Origins Membership
                </span>
                <span
                  className="text-[0.68rem] px-2 py-0.5 rounded-sm tracking-wide"
                  style={{
                    background: 'rgba(138,160,137,0.12)',
                    color: 'var(--sage)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Monthly
                </span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2 mb-2">
                <span
                  className="text-[3.4rem] font-light leading-none"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)' }}
                >
                  $29
                </span>
                <span
                  className="text-[0.9rem] mb-2"
                  style={{ color: 'var(--cream-dim)' }}
                >
                  / month
                </span>
              </div>
              <p className="text-[0.82rem] mb-8" style={{ color: 'var(--muted)' }}>
                Billed monthly · Cancel anytime
              </p>

              {/* Feature list */}
              <div
                className="border-y py-7 mb-7 flex flex-col gap-3"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(138,160,137,0.15)' }}
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="#8aa089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[0.9rem]" style={{ color: 'var(--cream-dim)' }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block text-[0.95rem] py-[1rem]"
              >
                Start Membership
              </a>

              <p
                className="text-center text-[0.76rem] mt-4"
                style={{ color: 'var(--muted)' }}
              >
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </Reveal>

        {/* Social proof line */}
        <Reveal delay={180}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-center">
            {[
              'Private and discreet checkout',
              'No long-term commitment',
              'Access begins immediately after signup',
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-[0.78rem]"
                style={{ color: 'var(--muted)' }}
              >
                <span style={{ color: 'var(--sage)' }}>✓</span>
                {item}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
