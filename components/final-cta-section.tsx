import { Reveal } from '@/components/ui/reveal'
import { STRIPE_URL } from '@/lib/constants'

export function FinalCTASection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(138,160,137,0.08) 0%, transparent 65%), #080706',
      }}
    >
      {/* Decorative ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[700px] h-[700px] rounded-full border opacity-[0.03]"
          style={{ borderColor: 'var(--sage)' }}
        />
      </div>

      <div className="container-content relative z-10">
        <Reveal>
          <div className="text-center max-w-[600px] mx-auto">

            {/* Eyebrow */}
            <span className="eyebrow">Ready to begin</span>

            {/* Headline */}
            <h2
              className="text-[clamp(2rem,5vw,3.4rem)] font-light leading-[1.15] mb-6"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--cream)', letterSpacing: '-0.01em' }}
            >
              You do not have to navigate<br className="hidden sm:block" /> this alone.
            </h2>

            {/* Supporting copy */}
            <p
              className="text-[1.05rem] leading-[1.8] mb-10 mx-auto"
              style={{ color: 'var(--cream-dim)', maxWidth: '480px' }}
            >
              Join a private, structured experience designed to help you move forward
              with more clarity, more support, and more confidence — starting today.
            </p>

            {/* CTA block */}
            <div className="flex flex-col items-center gap-4">
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[0.95rem] py-[0.95rem] px-10"
              >
                Join Serene Origins — $29/month
              </a>
              <span className="text-[0.78rem]" style={{ color: 'var(--muted)' }}>
                Private checkout · Cancel anytime · Begins immediately
              </span>
            </div>

            {/* Horizontal divider with text */}
            <div className="flex items-center gap-5 mt-14">
              <div className="flex-1 h-[1px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <span
                className="text-[0.72rem] tracking-[0.15em] uppercase flex-shrink-0"
                style={{ color: 'var(--muted)' }}
              >
                Quiet strength starts here
              </span>
              <div className="flex-1 h-[1px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
