import { Reveal } from '@/components/ui/reveal'

const values = [
  {
    title: 'Discretion first',
    body: 'Every design decision starts with privacy. From checkout to community, your presence here is your business.',
  },
  {
    title: 'Structure, not noise',
    body: 'A guided experience with clear intentions. Not a feed of random advice. A framework for actually moving forward.',
  },
  {
    title: 'Grounded support',
    body: 'No hype. No false promises. Just a calmer, more honest space where real clarity becomes possible.',
  },
]

export function MissionSection() {
  return (
    <section className="section-pad">
      <div className="container-content">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: mission statement */}
          <Reveal>
            <div>
              <span className="eyebrow">Why we exist</span>
              <h2 className="section-title">
                Built because the alternatives<br className="hidden sm:block" /> weren't good enough.
              </h2>

              <div className="mt-8 space-y-5">
                <p className="text-[1rem] leading-[1.8]" style={{ color: 'var(--cream-dim)' }}>
                  Not forums full of fear and outdated information.
                  Not generic wellness content that doesn't understand what this actually feels like.
                  Not clinical resources that treat you as a condition instead of a person.
                </p>
                <p className="text-[1rem] leading-[1.8]" style={{ color: 'var(--cream-dim)' }}>
                  Serene Origins was built to be something more private, more structured,
                  and more human than what most people find when they go looking.
                </p>
                <p className="text-[1rem] leading-[1.8]" style={{ color: 'var(--cream-dim)' }}>
                  The goal is not hype. The goal is clarity, support, and a steadier
                  sense of confidence — starting from where you are right now.
                </p>
              </div>

              {/* Pull quote */}
              <div
                className="mt-9 pl-5 border-l-2"
                style={{ borderColor: 'var(--sage)' }}
              >
                <p
                  className="text-[1.25rem] font-light leading-[1.55]"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--cream)' }}
                >
                  "A calmer, more structured path to understanding your body and
                  navigating life with confidence."
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: values */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              {values.map((val, i) => (
                <div
                  key={val.title}
                  className="card-default"
                  style={{ background: 'var(--bg-elevated)' }}
                >
                  <h3
                    className="text-[1.1rem] font-normal mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)' }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.7]" style={{ color: 'var(--cream-dim)' }}>
                    {val.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
