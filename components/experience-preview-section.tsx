import Image from 'next/image'
import { Reveal } from '@/components/ui/reveal'

const channels = [
  { icon: '✦', label: 'Welcome & Orientation', badge: 'Start here' },
  { icon: '◈', label: 'Ask Anything' },
  { icon: '◎', label: 'Lifestyle & Patterns' },
  { icon: '◇', label: 'Navigating Relationships' },
  { icon: '◉', label: 'Member Wins' },
  { icon: '▣', label: 'Educational Resources' },
  { icon: '⊚', label: 'Weekly Discussion' },
]

const previewPosts = [
  {
    category: 'Ask Anything',
    title: 'Finally found something that actually...',
    replies: 14,
    time: '2h ago',
  },
  {
    category: 'Lifestyle & Patterns',
    title: 'Has anyone noticed patterns around...',
    replies: 22,
    time: '5h ago',
  },
  {
    category: 'Member Wins',
    title: 'Six months in — here\'s what changed...',
    replies: 38,
    time: '1d ago',
  },
]

export function ExperiencePreviewSection() {
  return (
    <section className="section-pad section-dark">
      <div className="container-content">

        <Reveal>
          <div className="max-w-xl mx-auto text-center mb-14">
            <span className="eyebrow">Inside the experience</span>
            <h2 className="section-title">A look inside<br className="hidden sm:block" /> the member space.</h2>
            <p className="section-subtitle mt-4 mx-auto">
              Private, organized, and intentionally designed for the kind of support that's hard to find anywhere else.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="rounded-[10px] border overflow-hidden"
            style={{
              borderColor: 'rgba(255,255,255,0.1)',
              background: 'var(--bg-card)',
              maxWidth: '860px',
              margin: '0 auto',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}
          >
            {/* Mock window chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'var(--bg-elevated)' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="flex items-center gap-2 ml-3">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--sage)' }}
                />
                <span className="text-[0.72rem] tracking-wide" style={{ color: 'var(--muted)' }}>
                  Serene Origins · Member Space
                </span>
                <span
                  className="text-[0.62rem] px-1.5 py-0.5 rounded-sm ml-2 font-medium tracking-wider uppercase"
                  style={{
                    background: 'rgba(138,160,137,0.12)',
                    color: 'var(--sage)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Private
                </span>
              </div>
            </div>

            {/* Screenshot grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 relative">
              {/* Main community overview — full width on mobile, left column on desktop */}
              <div className="relative sm:row-span-2 border-b sm:border-b-0 sm:border-r" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div className="blurred-content">
                  <Image
                    src="/preview/community-overview.png"
                    alt="Serene Origins community overview"
                    width={520}
                    height={420}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Discussion example */}
              <div className="relative border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div className="blurred-content">
                  <Image
                    src="/preview/discussion-example.png"
                    alt="Member discussion example"
                    width={520}
                    height={210}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Onboarding screen */}
              <div className="relative">
                <div className="blurred-content">
                  <Image
                    src="/preview/onboarding-screen.png"
                    alt="Onboarding experience"
                    width={520}
                    height={210}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Privacy overlay */}
              <div
                className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(23,21,18,0.85) 55%, rgba(23,21,18,0.97) 100%)',
                }}
              >
                <div className="text-center px-6 pointer-events-auto">
                  <span
                    className="text-[0.68rem] tracking-[0.2em] uppercase font-medium block mb-2"
                    style={{ color: 'var(--sage)' }}
                  >
                    Private member content
                  </span>
                  <p className="text-[0.88rem]" style={{ color: 'var(--cream-dim)' }}>
                    Full access unlocks when you join.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
