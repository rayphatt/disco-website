import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Instant Lead Qualification | AI-Powered Sales Automation - Disco',
  description: 'Qualify leads in 3 minutes with live AI conversations. Eliminate days of back-and-forth and accelerate your sales pipeline with Disco\'s instant qualification.',
  keywords: 'instant lead qualification, AI sales automation, lead qualification software, automated lead scoring, sales qualification AI',
}

export default function InstantQualificationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-disco-purple via-purple-600 to-disco-blue pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Qualify leads in minutes, not days
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Stop wasting time on unqualified leads. Disco's AI conducts live conversations that instantly identify high-intent prospects—so your team only talks to buyers who are ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#demo" 
                className="bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
              >
                See It In Action
              </Link>
              <Link 
                href="#how-it-works" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-disco-purple mb-2">3 min</div>
              <div className="text-gray-600">Average qualification time</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-disco-purple mb-2">85%</div>
              <div className="text-gray-600">Faster than manual qualification</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-disco-purple mb-2">40%</div>
              <div className="text-gray-600">Increase in qualified pipeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The old way: Days of email ping-pong
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Send initial outreach email and wait 24-48 hours for response</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Exchange 4-6 emails asking basic qualification questions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Finally schedule a discovery call 3-5 days later</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">By then, 60% of leads have gone cold or chosen a competitor</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Disco way: Real-time conversations
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">AI engages lead immediately when interest is highest</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Natural conversation asks all qualifying questions in 3 minutes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Instantly scores and routes qualified leads to the right AE</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Your team talks to buyers who are pre-qualified and ready to buy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How instant qualification works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Disco AI conducts intelligent conversations that feel natural while gathering all the data you need to qualify leads.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-disco-purple/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-disco-purple">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lead arrives</h3>
              <p className="text-gray-600">
                Whether from your website, email campaign, or phone call, Disco AI engages instantly—no waiting, no forms to fill out.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-disco-purple/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-disco-purple">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI conversation</h3>
              <p className="text-gray-600">
                Natural back-and-forth dialogue asks about budget, authority, need, and timeline—adapting questions based on responses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-disco-purple/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-disco-purple">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Instant routing</h3>
              <p className="text-gray-600">
                Qualified leads are immediately scheduled with your AEs, complete with conversation summary and lead scoring data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently asked questions
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  How does AI qualification compare to human SDRs?
                </summary>
                <p className="mt-4 text-gray-600">
                  Disco AI uses your exact qualification criteria and sales playbook—asking the same questions your best SDRs would ask, but instantly and consistently every time. The difference? It never gets tired, forgets to ask a question, or needs coffee breaks.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Can I customize the qualification questions?
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely. You define exactly which questions Disco asks, in what order, and how responses are scored. You can set different qualification flows for different lead sources, industries, or product lines.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  What happens to unqualified leads?
                </summary>
                <p className="mt-4 text-gray-600">
                  Unqualified leads can be routed to nurture campaigns, self-service resources, or partner programs—ensuring no lead is wasted while keeping your sales team focused on high-value opportunities.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Does this work across all channels?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes! Disco AI qualifies leads via chat on your website, email conversations, and even voice calls—providing a consistent qualification experience regardless of how prospects reach you.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to qualify leads instantly?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              See how Disco AI can transform your qualification process in just minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="#demo" 
                className="bg-gradient-to-r from-disco-purple to-disco-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

