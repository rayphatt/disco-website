import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Sales Automation for B2B SaaS Companies | Disco',
  description: 'Automate complex software sales with AI-powered qualification, personalized demos, and instant ROI calculations. Scale your B2B SaaS revenue without scaling headcount.',
  keywords: 'B2B SaaS sales automation, software sales AI, SaaS lead qualification, automated product demos, SaaS sales tools',
}

export default function B2BSaaSPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-disco-purple via-purple-700 to-indigo-800 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                B2B SaaS Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Automate Complex Software Sales with AI
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Scale your B2B SaaS revenue without scaling headcount. Disco AI handles qualification, personalized demos, and ROI calculations—instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Book a Demo
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  See How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-6xl mb-4">💻</div>
                <div className="space-y-4 text-white">
                  <div className="flex items-center justify-between">
                    <span>Average Deal Size</span>
                    <span className="font-bold">+47%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sales Cycle</span>
                    <span className="font-bold">-35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Demo-to-Close Rate</span>
                    <span className="font-bold">+62%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The B2B SaaS Sales Challenge
            </h2>
            <p className="text-xl text-gray-600">
              Software sales are complex. Multiple stakeholders, technical requirements, custom pricing, and lengthy evaluations make every deal unique.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">😓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complex Qualification</h3>
              <p className="text-gray-600">
                Need to understand technical requirements, integration needs, user counts, and budget across multiple departments.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Slow Demo Cycles</h3>
              <p className="text-gray-600">
                Generic demos waste time. Prospects want to see YOUR solution solving THEIR problem before committing to a full demo.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Pricing</h3>
              <p className="text-gray-600">
                Every deal needs custom pricing based on seats, features, and usage. Manual quotes slow down the sales cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Disco Helps */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Disco Transforms B2B SaaS Sales
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built for the complexity of software sales
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Qualification</h3>
              <p className="text-gray-600 mb-4">
                AI that understands your product's technical requirements and asks the right questions about integrations, stack compatibility, and deployment preferences.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Identify decision-makers and technical stakeholders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Understand current tech stack and pain points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Assess budget authority and procurement process</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Product Demos</h3>
              <p className="text-gray-600 mb-4">
                Generate custom demo environments showing your product solving the prospect's specific use case—before they even meet your team.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Interactive walkthroughs with their data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Show relevant features based on use case</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Highlight integrations they care about</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant ROI Calculations</h3>
              <p className="text-gray-600 mb-4">
                AI-powered ROI calculator that shows prospects their potential return based on their specific metrics—automatically.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Gather key metrics during qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Generate personalized ROI reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Show payback period and 3-year value</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dynamic Pricing & Proposals</h3>
              <p className="text-gray-600 mb-4">
                Generate accurate quotes based on seat count, features, usage tiers, and contract length—no manual calculation needed.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Multi-variable pricing models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Volume discounts automatically applied</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Custom proposals in seconds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-disco-purple to-disco-blue rounded-3xl p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-sm font-semibold mb-4">CASE STUDY</div>
                  <h2 className="text-3xl font-bold mb-6">
                    How DataFlow AI Scaled from $2M to $15M ARR with the Same Sales Team
                  </h2>
                  <p className="text-white/90 mb-8">
                    DataFlow, a B2B analytics platform, was struggling to scale. Their SDRs were overwhelmed, and their AEs couldn't keep up with demo requests. Disco changed everything.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-4xl font-bold">7.5x</div>
                      <div className="text-white/80">ARR Growth</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">0</div>
                      <div className="text-white/80">SDRs Hired</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">83%</div>
                      <div className="text-white/80">Faster Demos</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">$680K</div>
                      <div className="text-white/80">Cost Savings</div>
                    </div>
                  </div>
                  <button className="bg-white text-disco-purple px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Read Full Case Study →
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-5xl mb-4">📊</div>
                  <blockquote className="text-lg italic mb-4">
                    "Disco handles our entire inbound flow. Prospects get qualified, see a personalized demo of our platform, and receive custom pricing—all before talking to our team. Our close rate doubled."
                  </blockquote>
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-white/70">VP of Sales, DataFlow AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built for B2B SaaS Complexity
            </h2>
            <p className="text-xl text-gray-600">
              Every feature designed for software sales
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="font-bold text-gray-900 mb-2">Deep Integrations</h3>
              <p className="text-sm text-gray-600">Connects with your CRM, product, and tech stack to pull real data for personalization</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold text-gray-900 mb-2">Usage-Based Pricing</h3>
              <p className="text-sm text-gray-600">Handle complex pricing models with seats, usage tiers, and feature packages</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">ICP Scoring</h3>
              <p className="text-sm text-gray-600">Automatically score leads against your ideal customer profile</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-sm text-gray-600">SOC 2 compliant with SSO, encryption, and audit logs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">API First</h3>
              <p className="text-sm text-gray-600">Build custom workflows and integrations with our robust API</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-sm text-gray-600">Track conversion funnels, deal velocity, and revenue attribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Scale Your B2B SaaS Revenue?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 200+ B2B SaaS companies using Disco to automate qualification, demos, and sales.
            </p>
            <button className="bg-disco-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg">
              Book a Demo →
            </button>
            <p className="text-sm text-gray-500 mt-4">See results in 14 days or less</p>
          </div>
        </div>
      </section>
    </main>
  )
}

