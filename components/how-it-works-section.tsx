import { Reveal } from '@/components/ui/reveal'

const steps = [
  {
    number: '1',
    title: 'Join through LaunchPass checkout',
    body: 'Complete your membership through LaunchPass. Access to the private Discord community is managed through LaunchPass.',
  },
  {
    number: '2',
    title: 'Receive your access details',
    body: 'After checkout, members receive access instructions and Discord permissions based on their active membership status.',
  },
  {
    number: '3',
    title: 'Connect to the private Discord',
    body: 'Follow the LaunchPass steps to connect your Discord account and unlock the member-only community.',
  },
  {
    number: '4',
    title: 'Begin with clarity',
    body: 'Start engaging with a more organized, more reassuring path forward. You\'ll know exactly where to begin.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="section-pad section-alt">
      <div className="container-content">

        <Reveal>
          <div className="max-w-lg text-center mx-auto mb-16">
            <span className="eyebrow">After you join</span>
            <h2 className="section-title">What happens<br className="hidden sm:block" /> after signup.</h2>
            <p className="section-subtitle mt-4 mx-auto">
              No uncertainty about what comes next. Here's exactly what to expect after you start your membership.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <div className="relative h-full">
                {/* Connector line (desktop only, not last) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-5 left-[calc(100%+10px)] right-0 h-[1px] w-[calc(100%-2.5rem)]"
                    style={{ background: 'rgba(255,255,255,0.07)' }}
                  />
                )}

                <div className="card-default h-full flex flex-col gap-4">
                  {/* Step number */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[0.78rem] font-semibold"
                    style={{
                      background: 'rgba(138,160,137,0.12)',
                      color: 'var(--sage)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {step.number}
                  </div>

                  <h3
                    className="text-[1.1rem] font-normal leading-[1.3]"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)' }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-[0.87rem] leading-[1.7] flex-1"
                    style={{ color: 'var(--cream-dim)' }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
