import { Reveal } from '@/components/ui/reveal'
import { STRIPE_URL } from '@/lib/constants'

const items = [
  {
    label: 'Private member community',
    description: 'A discreet, organized space designed for real conversation without judgment or exposure.',
  },
  {
    label: 'Structured guidance',
    description: 'Support that follows a clear framework — not random advice, but a guided experience with intention.',
  },
  {
    label: 'Educational content',
    description: 'Grounded, practical information focused on understanding patterns, lifestyle factors, and what actually helps.',
  },
  {
    label: 'Real conversation space',
    description: 'Ask the questions you\'ve been afraid to ask. Find people who understand without needing a full explanation.',
  },
  {
    label: 'Organized discussion categories',
    description: 'Clear structure so you can find what\'s most relevant to where you are right now.',
  },
  {
    label: 'A clear starting point',
    description: 'No confusion about where to begin. Onboarding walks you through your first steps inside the experience.',
  },
]

export function IncludedSection() {
  return (
    <section className="section-pad" id="included">
      <div className="container-content">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: heading */}
          <Reveal>
            <div className="md:sticky md:top-28">
              <span className="eyebrow">Membership includes</span>
              <h2 className="section-title">
                What you receive<br className="hidden sm:block" /> as a member.
              </h2>
              <p className="section-subtitle mt-4">
                Serene Origins gives you more than access to a group. It gives you a
                structured environment designed specifically for where you are.
              </p>

              <div className="mt-9 flex flex-col gap-4">
                <a
                  href={STRIPE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex w-fit"
                >
                  Start Membership — $29/month
                </a>
                <span className="text-[0.78rem]" style={{ color: 'var(--muted)' }}>
                  Secure checkout · Cancel anytime
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: feature items */}
          <div className="flex flex-col gap-px">
            {items.map((item, i) => (
              <Reveal key={item.label} delay={i * 70}>
                <div
                  className="flex gap-5 py-5 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(138,160,137,0.15)' }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#8aa089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[0.95rem] font-medium mb-1"
                      style={{ color: 'var(--cream)', fontFamily: 'var(--font-sans)' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-[0.85rem] leading-[1.65]"
                      style={{ color: 'var(--cream-dim)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
