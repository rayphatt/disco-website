import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Inbound SDR Automation | AI SDR That Never Sleeps - Disco',
  description: 'Automate your inbound SDR workflow with AI that qualifies, routes, and responds to buyers 24/7. Free up your team for enterprise deals while AI handles everything else.',
  keywords: 'inbound SDR automation, AI SDR, automated sales development, lead qualification automation, virtual SDR',
}

export default function InboundSDRAutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-disco-purple to-indigo-900 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6">
              Scale Sales
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Your AI SDR that qualifies, routes, and responds 24/7
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Stop burning SDR hours on routine qualification. Disco AI handles inbound leads from first touch to qualified handoff—so your team can focus on closing enterprise deals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#demo" 
                className="bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
              >
                See Demo
              </Link>
              <Link 
                href="#roi" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Calculate Savings
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      </section>

      {/* The SDR Cost Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The true cost of traditional SDRs
              </h2>
              <p className="text-xl text-gray-600">
                Your SDR team is expensive, overworked, and spending 80% of their time on leads that go nowhere.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-red-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-red-600 mb-2">$120K</div>
                <div className="text-gray-700 font-semibold mb-2">Annual cost per SDR</div>
                <div className="text-sm text-gray-600">Salary, benefits, tools, and training</div>
              </div>
              <div className="bg-red-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-red-600 mb-2">15</div>
                <div className="text-gray-700 font-semibold mb-2">Qualified leads per month</div>
                <div className="text-sm text-gray-600">After talking to 100+ prospects</div>
              </div>
              <div className="bg-red-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                <div className="text-gray-700 font-semibold mb-2">Annual turnover</div>
                <div className="text-sm text-gray-600">Constant hiring and training</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What if your best SDR never quit?</h3>
              <p className="text-gray-700 mb-6">
                Disco AI combines the best of your top SDRs into a system that works 24/7, never has a bad day, and scales infinitely. It learns from every conversation to get better over time—not burned out.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">1,000+</div>
                  <div className="text-sm text-gray-600">Simultaneous conversations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Consistency in qualification</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">$0</div>
                  <div className="text-sm text-gray-600">Turnover or training costs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How AI SDR Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              From inquiry to qualified meeting—automated
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Disco AI handles the entire SDR workflow with the precision of your best rep.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">1. First touch engagement</h3>
              <p className="text-gray-600 mb-6">
                The moment a lead arrives—via chat, email, phone, or form—Disco AI engages with a personalized greeting based on their source, behavior, and any available data.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                  <span className="text-gray-700">Instant response (no wait time)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                  <span className="text-gray-700">Context-aware conversation starters</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                  <span className="text-gray-700">Multi-channel support</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="text-sm text-gray-500 mb-2">Disco AI • Just now</div>
                <p className="text-gray-900">Hi! I see you were looking at our Enterprise plan. What challenges are you trying to solve?</p>
              </div>
              <div className="bg-disco-purple/10 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">Sarah (Acme Corp) • Just now</div>
                <p className="text-gray-900">We need to qualify 500+ leads per month but only have 2 SDRs</p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Company Size: ✓ 500+ employees</div>
                      <div className="text-sm text-gray-500">Meets ICP criteria</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Budget: ✓ $50K+ allocated</div>
                      <div className="text-sm text-gray-500">Within target range</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Timeline: ✓ Q1 implementation</div>
                      <div className="text-sm text-gray-500">Active buying window</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-sm font-semibold text-disco-purple">Lead Score: 95/100 → Route to Enterprise AE</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">2. Dynamic qualification</h3>
              <p className="text-gray-600 mb-6">
                Using your sales playbook, Disco asks the right questions in natural conversation—adapting based on responses to dig deeper where needed.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                  <span className="text-gray-700">BANT, MEDDIC, or custom frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                  <span className="text-gray-700">Real-time lead scoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                  <span className="text-gray-700">Captures intent signals</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">3. Intelligent routing</h3>
              <p className="text-gray-600 mb-6">
                Qualified leads are instantly routed to the right AE with complete context. Low-fit leads get nurture sequences or self-service resources.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                  <span className="text-gray-700">Round-robin or skill-based routing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                  <span className="text-gray-700">Calendar integration for instant booking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                  <span className="text-gray-700">CRM enrichment with conversation data</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-disco-purple to-disco-blue p-8 rounded-2xl text-white">
              <div className="mb-6">
                <div className="text-sm opacity-80 mb-2">Meeting Booked</div>
                <div className="text-2xl font-bold">Sarah Chen • Acme Corp</div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="opacity-80">Score: 95/100</div>
                  <div className="font-semibold">High-intent enterprise lead</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="opacity-80">Assigned to: Mike Johnson</div>
                  <div className="font-semibold">Tuesday, 10:00 AM</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="opacity-80">Pain point:</div>
                  <div className="font-semibold">Scaling SDR team capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The ROI is undeniable
              </h2>
              <p className="text-xl text-gray-600">
                See how Disco AI compares to hiring additional SDRs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hiring 3 more SDRs</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual salaries</span>
                    <span className="font-semibold">$360K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tools & tech stack</span>
                    <span className="font-semibold">$15K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Training & ramp time</span>
                    <span className="font-semibold">$45K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Management overhead</span>
                    <span className="font-semibold">$30K</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200 flex justify-between">
                    <span className="font-bold text-lg">Total annual cost</span>
                    <span className="font-bold text-lg text-red-600">$450K</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Output</div>
                  <div className="text-2xl font-bold">~45 qualified leads/month</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-disco-purple to-disco-blue p-8 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  90% savings
                </div>
                <h3 className="text-2xl font-bold mb-6">Disco AI SDR</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-white/80">Platform subscription</span>
                    <span className="font-semibold">$48K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Setup & integration</span>
                    <span className="font-semibold">$5K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Training & ramp time</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Management overhead</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="pt-4 border-t border-white/20 flex justify-between">
                    <span className="font-bold text-lg">Total annual cost</span>
                    <span className="font-bold text-lg text-green-300">$53K</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-sm text-white/80 mb-1">Output</div>
                  <div className="text-2xl font-bold">150+ qualified leads/month</div>
                  <div className="text-sm text-white/80 mt-2">+ 24/7 coverage, no turnover, unlimited scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-semibold text-disco-purple uppercase tracking-wider mb-4">Case Study</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              DataSync eliminates SDR bottlenecks
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              DataSync, a B2B data platform, was drowning in inbound leads. With only 3 SDRs, they were responding to less than 40% of inquiries within 24 hours.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-disco-purple mb-2">10x</div>
                  <div className="text-gray-600">Increase in leads handled</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-disco-purple mb-2">30 sec</div>
                  <div className="text-gray-600">Average response time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-disco-purple mb-2">$1.2M</div>
                  <div className="text-gray-600">Additional pipeline created</div>
                </div>
              </div>

              <blockquote className="border-l-4 border-disco-purple pl-6 italic text-gray-700">
                "Disco AI handles qualification better than most of our junior SDRs. Our team now focuses exclusively on high-value conversations with qualified buyers. It's like having an infinite SDR team that never sleeps."
                <footer className="mt-4 not-italic text-gray-600 font-semibold">
                  — Marcus Williams, Head of Sales at DataSync
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently asked questions
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Will AI replace my entire SDR team?
                </summary>
                <p className="mt-4 text-gray-600">
                  No. Disco AI handles repetitive qualification and routing, freeing your SDRs to focus on complex deals, relationship building, and strategic outbound. Think of it as your SDR team's superpower, not their replacement.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  How long does it take to set up?
                </summary>
                <p className="mt-4 text-gray-600">
                  Most teams are live within 2 weeks. We integrate with your CRM, sync your sales playbook, configure routing rules, and train the AI on your specific qualification criteria.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Can I customize the qualification criteria?
                </summary>
                <p className="mt-4 text-gray-600">
                  Completely. You define what makes a lead qualified—whether it's BANT, MEDDIC, or your own framework. You control the questions, scoring weights, and routing logic.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  What if a prospect wants to talk to a human?
                </summary>
                <p className="mt-4 text-gray-600">
                  Disco AI can instantly connect high-value prospects to available reps via chat, phone, or scheduled meeting. You control the escalation triggers—whether it's based on lead score, specific questions, or prospect request.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Free up your team. Scale your pipeline.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let Disco AI handle inbound SDR work while your team focuses on closing deals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="#demo" 
                className="bg-gradient-to-r from-disco-purple to-disco-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
              >
                Book a Demo
              </Link>
              <Link 
                href="#roi" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

