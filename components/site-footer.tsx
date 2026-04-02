import { BRAND_NAME, STRIPE_URL } from '@/lib/constants'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: 'rgba(255,255,255,0.07)', background: '#080706' }}
    >
      <div className="container-content">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[1.05rem] tracking-[0.06em] font-light"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)' }}
              >
                {BRAND_NAME}
              </span>
            </div>
            <p className="text-[0.8rem] leading-[1.6] max-w-xs" style={{ color: 'var(--muted)' }}>
              A private support and education experience for people living with herpes who want clarity, structure, and confidence.
            </p>
            <p className="text-[0.72rem] mt-3" style={{ color: 'var(--muted)' }}>
              Not a medical provider. This is not medical advice.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col gap-3">
              <span
                className="text-[0.66rem] font-semibold tracking-[0.18em] uppercase mb-1"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-sans)' }}
              >
                Navigate
              </span>
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: "What's Included", href: '#included' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span
                className="text-[0.66rem] font-semibold tracking-[0.18em] uppercase mb-1"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-sans)' }}
              >
                Legal
              </span>
              {[
                { label: 'Privacy Policy', href: '#privacy' },
                { label: 'Terms of Service', href: '#terms' },
                { label: 'Contact / Support', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span
                className="text-[0.66rem] font-semibold tracking-[0.18em] uppercase mb-1"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-sans)' }}
              >
                Join
              </span>
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-[0.82rem] py-2 px-4 w-fit"
              >
                Start Membership
              </a>
              <span className="text-[0.72rem]" style={{ color: 'var(--muted)' }}>$29/month · Cancel anytime</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-8 mt-8 border-t text-[0.75rem]"
          style={{ borderColor: 'rgba(255,255,255,0.05)', color: 'var(--muted)' }}
        >
          <span>© {year} {BRAND_NAME}. All rights reserved.</span>
          <span>Payments secured by Stripe.</span>
        </div>

      </div>
    </footer>
  )
}
