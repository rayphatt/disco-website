import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Autonomous Deal Closing | AI Closes Deals While You Sleep - Disco',
  description: 'Close deals under $50K end-to-end while your team sleeps. Disco AI handles everything from qualification to contract signature—or routes high-value deals to AEs.',
  keywords: 'autonomous closing, AI deal closing, automated sales, self-service sales, AI closes deals, automated contract signing',
}

export default function AutonomousClosingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6">
              Close Deals
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Close deals while you sleep—or route high-value to your AEs
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Disco AI handles the entire sales cycle for deals under $50K—qualification, demo, proposal, contract, payment. Your team wakes up to closed deals and new ARR.
            </p>
            <Link 
              href="#how-it-works" 
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Always closing</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">$50K</div>
              <div className="text-gray-600">Max deal size (configurable)</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">End-to-end</div>
              <div className="text-gray-600">No human touchpoints needed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Self-serve close rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              The future of sales: Humans + AI working in harmony
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI handles: Transactional deals</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">SMB & mid-market ($5K-$50K)</div>
                      <p className="text-sm text-gray-600">Standard packages with clear pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Fast buying cycles</div>
                      <p className="text-sm text-gray-600">Decision makers ready to buy now</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Self-service buyers</div>
                      <p className="text-sm text-gray-600">Prefer to research and buy without sales calls</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Simple implementation</div>
                      <p className="text-sm text-gray-600">No custom integrations or professional services</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Humans handle: Strategic deals</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">→</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Enterprise ($50K+)</div>
                      <p className="text-sm text-gray-600">Complex deals requiring customization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">→</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Long sales cycles</div>
                      <p className="text-sm text-gray-600">Multiple stakeholders and decision phases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">→</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Relationship-driven</div>
                      <p className="text-sm text-gray-600">Need executive rapport and consultative selling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">→</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Custom solutions</div>
                      <p className="text-sm text-gray-600">Require technical customization or services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-900 p-8 rounded-2xl text-white text-center">
              <p className="text-2xl font-bold mb-2">
                AI closes 60-70% of your deals autonomously
              </p>
              <p className="text-gray-400">Your team focuses on the remaining 30-40% high-value opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              The autonomous closing workflow
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Qualify & score</h3>
                    <p className="text-gray-600">AI engages prospect, asks qualifying questions, and scores the opportunity. Determines if it's autonomous-eligible or needs AE involvement.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized demo</h3>
                    <p className="text-gray-600">Shows product features relevant to their use case, answers questions, and demonstrates value—all automated and instant.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Custom proposal & pricing</h3>
                    <p className="text-gray-600">Generates proposal with pricing, ROI, implementation timeline, and terms—delivered instantly for review.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Handle objections</h3>
                    <p className="text-gray-600">Addresses concerns, compares to competitors, provides case studies, and offers trials or guarantees—whatever it takes to close.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Contract & payment</h3>
                    <p className="text-gray-600">Sends contract for e-signature, processes payment, and sets up account—fully automated end-to-end.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-8 rounded-2xl text-white shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white text-green-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">✓</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Deal closed!</h3>
                    <p className="text-white/90">Customer onboarded, team notified, revenue recognized. Your AE never touched it—they were busy closing a $500K enterprise deal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Routing */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Intelligent routing: AI knows when to hand off
            </h2>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI automatically routes to humans when:</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💰</div>
                    <div>
                      <div className="font-semibold text-gray-900">Deal size exceeds threshold</div>
                      <p className="text-sm text-gray-600">$50K+ deal → Route to enterprise AE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🏢</div>
                    <div>
                      <div className="font-semibold text-gray-900">Enterprise buyer detected</div>
                      <p className="text-sm text-gray-600">Fortune 1000 company → Senior AE engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🔧</div>
                    <div>
                      <div className="font-semibold text-gray-900">Custom requirements</div>
                      <p className="text-sm text-gray-600">Needs custom integration → Solutions engineer</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📋</div>
                    <div>
                      <div className="font-semibold text-gray-900">Complex procurement</div>
                      <p className="text-sm text-gray-600">RFP or security review → Sales specialist</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">❓</div>
                    <div>
                      <div className="font-semibold text-gray-900">Technical complexity</div>
                      <p className="text-sm text-gray-600">Deep technical questions → SE engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🤝</div>
                    <div>
                      <div className="font-semibold text-gray-900">Explicit request</div>
                      <p className="text-sm text-gray-600">Prospect asks for human → Immediate handoff</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">You're in control:</span> Configure routing rules, deal size thresholds, and escalation triggers to match your sales process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              The revenue impact
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Before autonomous closing:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly SMB leads:</span>
                    <span className="font-semibold">500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contacted by team:</span>
                    <span className="font-semibold text-yellow-600">200 (40%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Close rate:</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deals closed:</span>
                    <span className="font-semibold">40/month</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-bold">Monthly revenue:</span>
                    <span className="font-bold">$200K</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">With autonomous closing:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Monthly SMB leads:</span>
                    <span className="font-semibold">500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Contacted by AI:</span>
                    <span className="font-semibold text-green-300">500 (100%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Close rate:</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Deals closed:</span>
                    <span className="font-semibold">150/month</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-3">
                    <span className="font-bold">Monthly revenue:</span>
                    <span className="font-bold text-green-300">$750K</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500 p-8 rounded-2xl text-white text-center">
              <div className="text-5xl font-bold mb-3">+$550K/month</div>
              <div className="text-xl mb-2">$6.6M additional ARR</div>
              <div className="text-green-100">From deals that would have been ignored or lost</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Common questions</h2>
            
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Is fully autonomous closing right for every business?
                </summary>
                <p className="mt-4 text-gray-600">
                  It works best for businesses with: clear pricing tiers, standardized offerings, self-service onboarding, and deals under $50K. Complex enterprise sales still benefit from human involvement.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  What if AI makes a pricing mistake?
                </summary>
                <p className="mt-4 text-gray-600">
                  Disco follows your exact pricing rules with 100% accuracy. You can also require approval for discounts above certain thresholds, custom terms, or any deal attribute you specify.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  How do we handle customer success after autonomous close?
                </summary>
                <p className="mt-4 text-gray-600">
                  Disco hands off to your CS team with complete context—conversation history, customer goals, implementation notes. Many customers also automate onboarding workflows with Disco.
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
            Start closing deals 24/7
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let Disco AI handle transactional deals while your team focuses on strategic opportunities.
          </p>
          <Link 
            href="#demo" 
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
          >
            See Autonomous Closing
          </Link>
        </div>
      </section>
    </main>
  )
}

