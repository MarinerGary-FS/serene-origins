import { Reveal } from '@/components/ui/reveal'

const pillars = [
  {
    number: '01',
    name: 'Awareness',
    color: 'var(--sage)',
    colorDim: 'rgba(138,160,137,0.1)',
    description:
      'Understand your patterns. Recognize your triggers. Begin replacing guesswork with grounded insight. Awareness is where clarity starts.',
    detail: 'Track what matters, learn what your experience is actually telling you, and build a clearer picture of your own patterns over time.',
  },
  {
    number: '02',
    name: 'Stabilization',
    color: 'var(--gold)',
    colorDim: 'rgba(184,149,106,0.1)',
    description:
      'Practical lifestyle guidance and grounded routines to support a steadier, more predictable day-to-day experience. Less chaos. More steadiness.',
    detail: 'Structured support around the lifestyle factors that matter most — without the noise of random advice and conflicting information.',
  },
  {
    number: '03',
    name: 'Support',
    color: '#9ab0cc',
    colorDim: 'rgba(154,176,204,0.1)',
    description:
      'A private space to learn, ask real questions, and connect with others who understand. Support that doesn\'t feel clinical, performative, or fake.',
    detail: 'A community built around genuine care — private, moderated, and designed for the kind of conversations that are hard to have anywhere else.',
  },
]

export function SystemSection() {
  return (
    <section className="section-pad section-dark" id="how-it-works">
      <div className="container-content">

        <Reveal>
          <div className="max-w-xl">
            <span className="eyebrow">The Serene System</span>
            <h2 className="section-title">A more structured path<br className="hidden sm:block" /> to clarity.</h2>
            <p className="section-subtitle mt-4">
              Instead of scattered advice and isolated searching, Serene Origins is built around
              a simple framework designed to help you feel more informed, more supported, and more steady.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.name} delay={i * 100}>
              <div
                className="card-default h-full flex flex-col"
                style={{ borderTopColor: pillar.color, borderTopWidth: '2px' }}
              >
                {/* Number */}
                <span
                  className="text-[0.68rem] font-semibold tracking-[0.2em] mb-6"
                  style={{ color: pillar.color, fontFamily: 'var(--font-sans)' }}
                >
                  {pillar.number}
                </span>

                {/* Name */}
                <h3
                  className="text-[1.9rem] font-light mb-4 leading-none"
                  style={{ fontFamily: 'var(--font-display)', color: pillar.color }}
                >
                  {pillar.name}
                </h3>

                {/* Description */}
                <p
                  className="text-[0.92rem] leading-[1.75] mb-4 flex-1"
                  style={{ color: 'var(--cream-dim)' }}
                >
                  {pillar.description}
                </p>

                {/* Detail */}
                <p
                  className="text-[0.82rem] leading-[1.65] pt-4 border-t"
                  style={{ color: 'var(--muted)', borderColor: 'var(--border)' }}
                >
                  {pillar.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
