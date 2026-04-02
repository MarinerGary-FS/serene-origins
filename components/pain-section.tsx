import { Reveal } from '@/components/ui/reveal'

const painPoints = [
  {
    title: 'The mental noise that stays',
    body: 'Even on good days, it can sit in the background — the what-ifs, the wondering, the quiet moments of self-consciousness you wish you didn\'t have to feel.',
  },
  {
    title: 'Conflicting information, everywhere',
    body: 'Search results that contradict each other. Advice that doesn\'t match your experience. No reliable answer to the questions that actually matter.',
  },
  {
    title: 'Feeling like you\'re carrying this alone',
    body: 'Like you can\'t tell the people closest to you. Like no one really understands. Like the conversations you need to have don\'t have a safe place to happen.',
  },
  {
    title: 'Uncertainty about what actually helps',
    body: 'You try things. Some work. Some don\'t. There\'s no clear framework, no reliable guide — just you, figuring it out as you go.',
  },
]

export function PainSection() {
  return (
    <section className="section-pad section-alt">
      <div className="container-content">

        <Reveal>
          <div className="max-w-xl">
            <span className="eyebrow">You are not alone</span>
            <h2 className="section-title">
              If this has felt heavy, confusing,<br className="hidden sm:block" /> or isolating — that's real.
            </h2>
            <p className="section-subtitle mt-4">
              Living with herpes can bring more than physical discomfort. It creates mental noise,
              uncertainty, and the feeling that you are constantly trying to figure things out on your own.
            </p>
          </div>
        </Reveal>

        {/* Pain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
          {painPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 80}>
              <div className="card-default h-full">
                <div className="divider" />
                <h3
                  className="text-[1.2rem] font-light mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)' }}
                >
                  {point.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.75]" style={{ color: 'var(--cream-dim)' }}>
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bridge statement */}
        <Reveal delay={320} className="mt-14">
          <div
            className="border border-white/[0.07] rounded-[6px] p-8 text-center"
            style={{ background: 'rgba(138,160,137,0.05)' }}
          >
            <p
              className="text-[1.25rem] font-light leading-[1.6]"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)', fontStyle: 'italic' }}
            >
              Serene Origins was created to offer a calmer, more grounded path forward.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
