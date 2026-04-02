'use client'

import { useState } from 'react'
import { Reveal } from '@/components/ui/reveal'

const faqs = [
  {
    question: 'Is Serene Origins a form of medical care?',
    answer:
      'No. Serene Origins is a private support and education community — not a medical provider, clinical service, or substitute for professional healthcare. For medical advice, diagnosis, or treatment, please consult a qualified healthcare professional. What Serene Origins offers is structured peer support, practical guidance, and a private community for people who want clarity and connection.',
  },
  {
    question: 'What do I actually get after I join?',
    answer:
      'After completing your secure Stripe checkout, you\'ll receive access instructions that walk you through entering the private member community. Inside, you\'ll find organized discussion spaces, educational content, and a clear starting point. You won\'t be dropped in with no direction — onboarding is part of the experience.',
  },
  {
    question: 'Is the community genuinely private?',
    answer:
      'Yes. The member space is private and closed to the general public. Your participation is not visible outside the community. Discretion is a core design principle of Serene Origins — from the checkout process to the community structure itself.',
  },
  {
    question: 'Is this only for people who were recently diagnosed?',
    answer:
      'No. Serene Origins is built for people at any stage — whether you were diagnosed recently or have been navigating this for years. What matters is that you want more clarity, better support, and a more grounded way to move forward. Members at different stages bring different perspectives, and that\'s part of what makes the community valuable.',
  },
  {
    question: 'How does payment work?',
    answer:
      'Membership is billed monthly at $29 through Stripe, a secure and widely trusted payment platform. Your billing information is handled entirely by Stripe and is never stored by Serene Origins directly. The charge will appear discreetly on your statement.',
  },
  {
    question: 'Can I cancel my membership?',
    answer:
      'Yes. You can cancel at any time. There are no long-term commitments or cancellation fees. If you decide the membership isn\'t right for you, you can stop your subscription and your access will continue through the end of the billing period.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className="text-[1rem] font-normal leading-[1.5]"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)', fontStyle: open ? 'italic' : 'normal' }}
        >
          {question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full mt-0.5 transition-colors"
          style={{
            background: open ? 'rgba(138,160,137,0.15)' : 'rgba(255,255,255,0.06)',
            color: open ? 'var(--sage)' : 'var(--muted)',
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className="transition-transform duration-300"
            style={{ transform: open ? 'rotate(45deg)' : 'none' }}
          >
            <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p
          className="text-[0.9rem] leading-[1.8] pb-6"
          style={{ color: 'var(--cream-dim)' }}
        >
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section className="section-pad" id="faq">
      <div className="container-content">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-14 items-start">

          {/* Left */}
          <Reveal>
            <div className="md:sticky md:top-28">
              <span className="eyebrow">Questions</span>
              <h2 className="section-title">Common<br className="hidden sm:block" /> questions.</h2>
              <p className="section-subtitle mt-4">
                Answers to what people typically want to know before joining.
              </p>
            </div>
          </Reveal>

          {/* Right: accordion */}
          <Reveal delay={80}>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
