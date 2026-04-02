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

            <div className="flex min-h-[340px]">
              {/* Sidebar */}
              <div
                className="w-[190px] flex-shrink-0 border-r hidden sm:flex flex-col"
                style={{
                  borderColor: 'rgba(255,255,255,0.06)',
                  background: 'rgba(0,0,0,0.2)',
                }}
              >
                <div
                  className="px-4 py-3 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span
                    className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase"
                    style={{ color: 'var(--muted)', fontFamily: 'var(--font-sans)' }}
                  >
                    Spaces
                  </span>
                </div>
                <nav className="flex flex-col py-2 flex-1">
                  {channels.map((ch, i) => (
                    <div
                      key={ch.label}
                      className={`flex items-center justify-between px-3 py-[7px] mx-2 rounded-[4px] ${
                        i === 0 ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'
                      } transition-colors cursor-default`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="text-[0.7rem]"
                          style={{ color: i === 0 ? 'var(--sage)' : 'var(--muted)' }}
                        >
                          {ch.icon}
                        </span>
                        <span
                          className="text-[0.78rem]"
                          style={{
                            color: i === 0 ? 'var(--cream)' : 'var(--cream-dim)',
                            fontFamily: 'var(--font-sans)',
                          }}
                        >
                          {ch.label}
                        </span>
                      </div>
                      {ch.badge && (
                        <span
                          className="text-[0.6rem] px-1.5 rounded-sm"
                          style={{
                            background: 'rgba(138,160,137,0.2)',
                            color: 'var(--sage)',
                          }}
                        >
                          {ch.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main content */}
              <div className="flex-1 p-5 flex flex-col gap-4 relative">
                <div
                  className="text-[0.72rem] font-medium tracking-wide mb-1"
                  style={{ color: 'var(--muted)', fontFamily: 'var(--font-sans)' }}
                >
                  Recent Discussions
                </div>

                {/* Preview posts */}
                {previewPosts.map((post, i) => (
                  <div
                    key={i}
                    className="border rounded-[6px] p-4"
                    style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'var(--bg-elevated)' }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[0.66rem] px-2 py-0.5 rounded-sm font-medium tracking-wide uppercase"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          color: 'var(--muted)',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-[0.72rem]" style={{ color: 'var(--muted)' }}>{post.time}</span>
                    </div>

                    {/* Blurred content */}
                    <div className="blurred-content">
                      <p
                        className="text-[0.88rem] mb-2"
                        style={{ color: 'var(--cream)', fontFamily: 'var(--font-sans)' }}
                      >
                        {post.title}
                      </p>
                      <div className="h-2 rounded bg-white/10 w-3/4 mb-1.5" />
                      <div className="h-2 rounded bg-white/10 w-1/2" />
                    </div>

                    <div
                      className="flex items-center gap-3 mt-3 pt-3 border-t text-[0.76rem]"
                      style={{ borderColor: 'rgba(255,255,255,0.06)', color: 'var(--muted)' }}
                    >
                      <span>↩ {post.replies} replies</span>
                      <span>· Members only</span>
                    </div>
                  </div>
                ))}

                {/* Privacy overlay */}
                <div
                  className="absolute inset-0 flex items-end justify-center pb-6"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(23,21,18,0.92) 65%, rgba(23,21,18,0.98) 100%)',
                  }}
                >
                  <div className="text-center px-6">
                    <span
                      className="text-[0.68rem] tracking-[0.2em] uppercase font-medium block mb-2"
                      style={{ color: 'var(--sage)' }}
                    >
                      Private member content
                    </span>
                    <p
                      className="text-[0.88rem]"
                      style={{ color: 'var(--cream-dim)' }}
                    >
                      Full access unlocks when you join.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
