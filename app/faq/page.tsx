'use client'

import { useState } from 'react'

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is Disco AI?',
        a: 'Disco AI is an intelligent sales automation platform that engages prospects 24/7, qualifies leads instantly, books meetings, and can even close deals autonomously. Think of it as your tireless AI sales team that never sleeps.',
      },
      {
        q: 'How long does it take to set up?',
        a: 'Most teams are up and running in less than 48 hours. Our setup includes connecting your CRM, configuring your qualification criteria, customizing conversation flows, and training the AI on your product. We handle the heavy lifting so you can focus on closing deals.',
      },
      {
        q: 'Do I need technical expertise to use Disco?',
        a: 'Not at all. Disco is designed for sales teams, not engineers. Our no-code interface lets you customize conversations, update qualification logic, and manage workflows without writing a single line of code.',
      },
      {
        q: 'Which CRMs do you integrate with?',
        a: 'We integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and Close. We also connect with your calendar (Google, Outlook), communication tools (Slack, Teams), and can build custom integrations as needed.',
      },
    ],
  },
  {
    category: 'Features & Capabilities',
    questions: [
      {
        q: 'How does Disco qualify leads?',
        a: 'Disco uses natural conversation to understand prospect needs, budget, timeline, and decision-making authority. It asks intelligent follow-up questions based on responses, validates information against your ICP criteria, and assigns lead scores in real-time.',
      },
      {
        q: 'Can Disco handle complex sales processes?',
        a: 'Yes. Disco can navigate multi-step qualification, handle objections, provide personalized demos, generate custom proposals, and even negotiate pricing within parameters you set. For enterprise deals, it seamlessly hands off to your AEs with full context.',
      },
      {
        q: 'What languages does Disco support?',
        a: 'Disco natively supports 95+ languages and can automatically detect and respond in the prospect\'s preferred language. This enables true global coverage without hiring multilingual sales teams.',
      },
      {
        q: 'How does the autonomous closing work?',
        a: 'For deals that meet your criteria (typically lower-value, transactional sales), Disco can present pricing, handle negotiations within defined boundaries, generate contracts, collect payment information, and complete the sale—all without human intervention.',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    questions: [
      {
        q: 'Is my data secure?',
        a: 'Absolutely. We\'re SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit, we never train our models on your data, and we maintain strict access controls. Enterprise customers can opt for dedicated instances.',
      },
      {
        q: 'Where is data stored?',
        a: 'Data is stored in secure AWS data centers. Enterprise customers can choose their preferred region (US, EU, APAC) to ensure compliance with local data residency requirements.',
      },
      {
        q: 'Do you support SSO?',
        a: 'Yes, we support SAML-based SSO with providers like Okta, Azure AD, and Google Workspace. This is available on our Enterprise plan.',
      },
      {
        q: 'Can I delete my data?',
        a: 'Yes. You maintain full ownership of your data and can request deletion at any time. We provide data export tools and will permanently delete your data within 30 days of account closure.',
      },
    ],
  },
  {
    category: 'Pricing & ROI',
    questions: [
      {
        q: 'How is Disco priced?',
        a: 'We offer flexible pricing based on conversation volume and features needed. Most teams see 5-10x ROI in the first quarter. Book a demo to discuss pricing tailored to your needs.',
      },
      {
        q: 'What\'s the typical ROI?',
        a: 'Our customers typically see: 3-5x increase in qualified leads, 60% reduction in time-to-meeting, 40% higher win rates, and 70% reduction in SDR costs. Most teams achieve full ROI within 3 months.',
      },
      {
        q: 'Do you offer a free trial?',
        a: 'We offer a 14-day pilot program where you can test Disco with real prospects. This includes full setup, training, and support to ensure you see real results before committing.',
      },
      {
        q: 'Are there any setup fees?',
        a: 'Setup and implementation are included in all plans. We want you focused on results, not upfront costs.',
      },
    ],
  },
  {
    category: 'Support & Training',
    questions: [
      {
        q: 'What kind of support do you provide?',
        a: 'All customers get access to our support team via chat, email, and phone. Enterprise customers receive a dedicated Customer Success Manager, priority support, and quarterly business reviews.',
      },
      {
        q: 'Do you provide training?',
        a: 'Yes. Every customer receives comprehensive onboarding including live training sessions, documentation, video tutorials, and ongoing optimization support. We ensure your team knows how to maximize Disco\'s value.',
      },
      {
        q: 'How often do you release updates?',
        a: 'We ship new features and improvements weekly. All updates are automatic—no downtime or manual upgrades required. Major features are announced in advance with migration guides.',
      },
      {
        q: 'What if I need custom features?',
        a: 'Enterprise customers can request custom features and integrations. Our product team works closely with you to build solutions that fit your unique sales process.',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between text-left hover:text-disco-purple transition-colors group"
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-disco-purple pr-8">
          {question}
        </span>
        <svg
          className={`w-6 h-6 text-disco-purple transform transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-disco-purple via-purple-700 to-indigo-800 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Everything you need to know about Disco AI. Can't find what you're looking for?{' '}
              <a href="#contact" className="underline hover:text-white">
                Contact our team
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 pl-14 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-disco-purple focus:border-transparent"
              />
              <svg
                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-disco-purple">
                  {category.category}
                </h2>
                <div className="space-y-0">
                  {category.questions.map((faq, faqIdx) => (
                    <FAQItem key={faqIdx} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">💬</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Still have questions?
                </h2>
                <p className="text-xl text-gray-600">
                  Our team is here to help. Get in touch and we'll respond within 24 hours.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="#chat"
                  className="text-center p-6 rounded-xl border-2 border-gray-200 hover:border-disco-purple hover:bg-purple-50 transition-all"
                >
                  <div className="text-3xl mb-3">💬</div>
                  <div className="font-semibold text-gray-900 mb-1">Live Chat</div>
                  <div className="text-sm text-gray-600">Chat with our team now</div>
                </a>
                <a
                  href="mailto:hello@disco.ai"
                  className="text-center p-6 rounded-xl border-2 border-gray-200 hover:border-disco-purple hover:bg-purple-50 transition-all"
                >
                  <div className="text-3xl mb-3">✉️</div>
                  <div className="font-semibold text-gray-900 mb-1">Email Us</div>
                  <div className="text-sm text-gray-600">hello@disco.ai</div>
                </a>
                <a
                  href="#demo"
                  className="text-center p-6 rounded-xl border-2 border-gray-200 hover:border-disco-purple hover:bg-purple-50 transition-all"
                >
                  <div className="text-3xl mb-3">📅</div>
                  <div className="font-semibold text-gray-900 mb-1">Book a Demo</div>
                  <div className="text-sm text-gray-600">See Disco in action</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-disco-purple to-disco-blue">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to see Disco in action?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of companies scaling their revenue with AI-powered sales automation.
            </p>
            <button className="bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Book Your Demo →
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

