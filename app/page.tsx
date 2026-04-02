import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { PainSection } from '@/components/pain-section'
import { SystemSection } from '@/components/system-section'
import { IncludedSection } from '@/components/included-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { ExperiencePreviewSection } from '@/components/experience-preview-section'
import { MissionSection } from '@/components/mission-section'
import { PricingSection } from '@/components/pricing-section'
import { FAQSection } from '@/components/faq-section'
import { FinalCTASection } from '@/components/final-cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PainSection />
        <SystemSection />
        <IncludedSection />
        <HowItWorksSection />
        <ExperiencePreviewSection />
        <MissionSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  )
}
