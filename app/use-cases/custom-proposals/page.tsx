import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Generate Custom Proposals Instantly | AI Pricing & Quotes - Disco',
  description: 'Deliver custom quotes and proposals on the spot—not days later. Disco AI creates personalized pricing, ROI calculations, and proposals in seconds.',
  keywords: 'custom proposals, instant quotes, AI pricing, automated proposals, sales proposals, quote generation',
}

export default function CustomProposalsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6">
              Close Deals
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              From "tell me more" to custom proposal in 5 minutes
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Stop making prospects wait 3 days for pricing. Disco AI generates custom quotes, ROI calculations, and proposals instantly—while interest is hot.
            </p>
            <Link 
              href="#how-it-works" 
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
            >
              See It In Action
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-gray-600">Faster proposal delivery</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">5 min</div>
              <div className="text-gray-600">From request to proposal</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">62%</div>
              <div className="text-gray-600">Higher close rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Pricing accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              The proposal bottleneck
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional process:</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-2xl">1️⃣</span>
                    <div>
                      <div className="font-semibold text-gray-900">Prospect requests pricing</div>
                      <p className="text-sm text-gray-600">"Can you send me a quote?"</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">2️⃣</span>
                    <div>
                      <div className="font-semibold text-gray-900">Rep gathers requirements</div>
                      <p className="text-sm text-gray-600">Another 30-min call to understand needs</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">3️⃣</span>
                    <div>
                      <div className="font-semibold text-gray-900">Manual proposal creation</div>
                      <p className="text-sm text-gray-600">Rep spends 2 hours building custom deck</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">4️⃣</span>
                    <div>
                      <div className="font-semibold text-gray-900">Wait for approval</div>
                      <p className="text-sm text-gray-600">Pricing team reviews, asks questions, delays 1-2 days</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">5️⃣</span>
                    <div>
                      <div className="font-semibold text-gray-900">Finally send proposal</div>
                      <p className="text-sm text-gray-600 font-bold text-red-600">3 days later, prospect has gone cold</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Disco AI approach:</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <div className="font-semibold text-gray-900">Prospect asks about pricing</div>
                      <p className="text-sm text-gray-600">"What would this cost for 50 users?"</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🤖</span>
                    <div>
                      <div className="font-semibold text-gray-900">AI clarifies requirements</div>
                      <p className="text-sm text-gray-600">3-minute conversation confirms needs</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <div className="font-semibold text-gray-900">Instant proposal generation</div>
                      <p className="text-sm text-gray-600">Custom quote with ROI, implementation timeline, terms</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="font-semibold text-gray-900">Immediate delivery</div>
                      <p className="text-sm text-gray-600">Prospect receives proposal in chat + email</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <div className="font-semibold text-gray-900">Strike while hot</div>
                      <p className="text-sm text-gray-600 font-bold text-green-600">5 minutes total, interest still peaked</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Smart proposals, automatically generated
            </h2>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <h3 className="text-2xl font-bold text-gray-900">Dynamic pricing configuration</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  You set your pricing model, discount rules, package options, and approval thresholds. Disco learns your logic and applies it perfectly every time.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-2">Tiered pricing</div>
                    <div className="text-sm text-gray-600">1-10 users: $50/user<br/>11-50 users: $40/user<br/>51+ users: Custom</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-2">Volume discounts</div>
                    <div className="text-sm text-gray-600">Annual: 20% off<br/>Multi-year: 30% off<br/>Enterprise: Custom terms</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-2">Add-ons & packages</div>
                    <div className="text-sm text-gray-600">Premium support: +$5K<br/>Custom integrations: Quote<br/>Training: $2K per session</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <h3 className="text-2xl font-bold text-gray-900">Real-time ROI calculations</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Based on prospect data, Disco calculates personalized ROI showing exactly how your solution pays for itself.
                </p>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-3">Current state (prospect provided):</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>50 sales reps</span>
                          <span className="font-semibold">$7.5M payroll</span>
                        </div>
                        <div className="flex justify-between">
                          <span>3 hrs/day on admin</span>
                          <span className="font-semibold">$1.2M wasted</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-green-700 mb-3">With Disco (calculated):</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Annual investment</span>
                          <span className="font-semibold">$120K</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time saved</span>
                          <span className="font-semibold">$900K/year</span>
                        </div>
                        <div className="flex justify-between border-t border-green-200 pt-2">
                          <span className="font-bold">ROI</span>
                          <span className="font-bold text-green-600">650%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <h3 className="text-2xl font-bold text-gray-900">Beautiful proposal delivery</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Disco generates a professional proposal with your branding, custom pricing, ROI analysis, implementation timeline, and terms—delivered instantly.
                </p>
                <div className="bg-gray-900 p-6 rounded-xl text-white">
                  <div className="text-sm text-gray-400 mb-4">✨ Auto-generated proposal includes:</div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Executive summary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Custom pricing breakdown</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>ROI calculations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Implementation timeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Terms & conditions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Next steps & CTA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Perfect for complex pricing models
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Usage-based pricing</h3>
                <p className="text-gray-600">
                  Disco calculates costs based on API calls, seats, transactions, or any metric—showing prospects exactly what they'll pay based on their usage.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-product bundles</h3>
                <p className="text-gray-600">
                  Selling multiple products or modules? Disco creates custom bundles with package discounts and shows the value of buying together.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise agreements</h3>
                <p className="text-gray-600">
                  For larger deals, Disco can generate initial proposals instantly, then flag for AE review and customization before final delivery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service + software</h3>
                <p className="text-gray-600">
                  Combine software licensing with professional services, implementation fees, and support packages—all in one cohesive proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Common questions</h2>
            
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Can I require approval for certain deal sizes?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes. Set thresholds where Disco auto-generates but holds for approval, or fully automates up to your comfort level. Enterprise deals can require AE or finance sign-off.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  What if our pricing is too complex for automation?
                </summary>
                <p className="mt-4 text-gray-600">
                  Disco handles extremely complex pricing models including usage-based, tiered, volume discounts, bundles, and custom terms. If truly one-off, it can generate a baseline proposal for AE customization.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Can prospects negotiate or request changes?
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely. Disco can handle negotiation within preset parameters or escalate to your team for custom terms. You control the negotiation boundaries.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Stop losing deals to slow proposals
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Deliver custom quotes and proposals instantly while interest is hot.
          </p>
          <Link 
            href="#demo" 
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
          >
            See Instant Proposals
          </Link>
        </div>
      </section>
    </main>
  )
}

