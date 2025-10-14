import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Up Your AEs | Focus on Enterprise Deals - Disco',
  description: 'Let top reps focus on enterprise deals while Disco AI handles qualification for everything else. Maximize your team\'s impact and revenue potential.',
  keywords: 'sales efficiency, AE productivity, enterprise sales focus, sales automation, account executive tools',
}

export default function FreeUpAEsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-disco-purple pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6">
              Scale Sales
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Let your best reps hunt elephants, not mice
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Your top AEs shouldn't waste time on $5K deals. Disco AI handles SMB qualification and routing, so your enterprise team can focus on seven-figure opportunities.
            </p>
            <Link 
              href="#calculator" 
              className="inline-block bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
            >
              Calculate Your Savings
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Your most expensive resource is being wasted
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-red-600 mb-4">$250K</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Annual cost per enterprise AE</div>
                <p className="text-gray-600 mb-4">Salary, commission, benefits, and enablement</p>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-3">How they actually spend their time:</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Qualifying unfit leads</span>
                      <span className="font-semibold text-red-600">35%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Admin & data entry</span>
                      <span className="font-semibold text-red-600">25%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Small deal cycle management</span>
                      <span className="font-semibold text-red-600">20%</span>
                    </div>
                    <div className="flex justify-between text-sm border-t pt-2 mt-2">
                      <span className="font-semibold">Actual selling time</span>
                      <span className="font-semibold text-gray-900">20%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-green-600 mb-4">$2.5M</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Potential quota with full focus</div>
                <p className="text-gray-600 mb-4">When AEs spend 80%+ on high-value deals</p>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-3">With Disco AI handling everything else:</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Enterprise deal focus</span>
                      <span className="font-semibold text-green-600">80%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Strategic relationships</span>
                      <span className="font-semibold text-green-600">15%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Admin (automated)</span>
                      <span className="font-semibold text-green-600">5%</span>
                    </div>
                    <div className="flex justify-between text-sm border-t pt-2 mt-2">
                      <span className="font-semibold">Revenue impact</span>
                      <span className="font-semibold text-gray-900">+60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-disco-purple to-disco-blue p-8 rounded-2xl text-white text-center">
              <p className="text-2xl font-bold">
                Every hour your AE spends on a $5K deal is an hour NOT spent closing a $500K deal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Intelligent deal routing that maximizes AE value
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-disco-purple">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Set your enterprise criteria</h3>
                    <p className="text-gray-600 mb-4">
                      Define what makes a deal worth your AEs' time: company size, budget, industry, buying committee, timeline—whatever signals high value for your business.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Example routing rules:</div>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Companies 500+ employees → Enterprise AE</li>
                        <li>• Budget $100K+ → Enterprise AE</li>
                        <li>• Fortune 1000 company → Enterprise AE</li>
                        <li>• Everything else → AI qualification + SMB team</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-disco-purple">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">AI handles the rest</h3>
                    <p className="text-gray-600 mb-4">
                      Every lead that doesn't meet enterprise criteria gets the full Disco treatment—qualification, nurturing, and routing to appropriate resources—without touching your AE calendar.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">SMB Deals</div>
                        <div className="text-sm text-gray-600">AI closes or routes to SMB team</div>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">Not Ready</div>
                        <div className="text-sm text-gray-600">AI nurtures until qualified</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">Bad Fit</div>
                        <div className="text-sm text-gray-600">Politely redirected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-disco-purple">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">AEs get perfect handoffs</h3>
                    <p className="text-gray-600 mb-4">
                      When a true enterprise opportunity appears, your AE gets a complete brief: company profile, pain points, stakeholders, budget, timeline, and conversation history.
                    </p>
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-disco-purple rounded-full flex items-center justify-center text-white font-bold">
                          JD
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">New Enterprise Lead: Global Bank</div>
                          <div className="text-sm text-gray-600">$250K opportunity • 2,000 licenses</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-white p-3 rounded">
                          <div className="text-gray-500">Decision maker:</div>
                          <div className="font-semibold">CFO + CTO involved</div>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <div className="text-gray-500">Timeline:</div>
                          <div className="font-semibold">Q1 implementation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">What's your AE time worth?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-sm text-gray-400 mb-4">Current state (typical):</div>
                  <div className="space-y-3">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span>5 Enterprise AEs @ $250K each</span>
                        <span className="font-bold">$1.25M</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Actual selling time: 20%</span>
                        <span>$250K in cost</span>
                      </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span>Revenue per AE (diluted focus)</span>
                        <span className="font-bold">$800K</span>
                      </div>
                      <div className="text-sm text-gray-400">Total: $4M annual</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-green-400 mb-4">With Disco AI:</div>
                  <div className="space-y-3">
                    <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                      <div className="flex justify-between mb-2">
                        <span>Same 5 AEs (80% enterprise focus)</span>
                        <span className="font-bold">$1.25M</span>
                      </div>
                      <div className="flex justify-between text-sm text-green-300">
                        <span>Effective cost for value delivered</span>
                        <span>Much lower per $</span>
                      </div>
                    </div>
                    <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                      <div className="flex justify-between mb-2">
                        <span>Revenue per AE (laser focus)</span>
                        <span className="font-bold">$1.5M</span>
                      </div>
                      <div className="text-sm text-green-300">Total: $7.5M annual (+$3.5M!)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 p-6 rounded-xl text-center">
                <div className="text-sm text-green-300 mb-2">Additional Annual Revenue</div>
                <div className="text-5xl font-bold text-green-400">+$3.5M</div>
                <div className="text-sm text-gray-300 mt-2">Without hiring a single new rep</div>
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
                  What happens to our SMB deals?
                </summary>
                <p className="mt-4 text-gray-600">
                  They still get handled—just more efficiently. Disco AI can close simple deals autonomously or route them to a dedicated SMB team, partner, or self-service flow. Nothing falls through the cracks.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Can we adjust the enterprise threshold over time?
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely. As your team scales or strategy shifts, you can update routing criteria anytime. Many customers start conservative and expand AI coverage as they see results.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Will AEs trust AI-qualified leads?
                </summary>
                <p className="mt-4 text-gray-600">
                  They will after the first few. Disco AI provides more complete qualification data than most SDRs—budget confirmed, stakeholders identified, timeline clear. AEs quickly learn these handoffs are higher quality, not lower.
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
            Let your AEs do what they do best
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop wasting enterprise talent on transactional deals.
          </p>
          <Link 
            href="#demo" 
            className="inline-block bg-gradient-to-r from-disco-purple to-disco-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
          >
            See How It Works
          </Link>
        </div>
      </section>
    </main>
  )
}

