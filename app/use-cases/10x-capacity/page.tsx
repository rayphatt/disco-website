import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '10x Your Sales Capacity | Scale Without Hiring - Disco',
  description: 'Run 1,000 qualification conversations simultaneously with AI. Scale your sales capacity infinitely without adding headcount or burning out your team.',
  keywords: 'sales capacity, scale sales team, simultaneous conversations, sales automation, infinite scale',
}

export default function TenXCapacityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-disco-blue via-purple-600 to-disco-purple pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6">
              Scale Sales
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Run 1,000 conversations at once
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Your team can only talk to one prospect at a time. Disco AI handles unlimited simultaneous conversations—qualifying, engaging, and converting at scale you've never imagined.
            </p>
            <Link 
              href="#scale-calc" 
              className="inline-block bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
            >
              Calculate Your Scale
            </Link>
          </div>
        </div>
      </section>

      {/* The Scale Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              The human capacity ceiling
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👤</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1 SDR</div>
                <div className="text-gray-600 mb-4">= 50 convos/day max</div>
                <div className="text-sm text-gray-500">8 hours × ~6 convos/hour</div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👥</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">10 SDRs</div>
                <div className="text-gray-600 mb-4">= 500 convos/day max</div>
                <div className="text-sm text-gray-500">$1.2M annual cost</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center border-2 border-green-500">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">Disco AI</div>
                <div className="text-gray-900 font-semibold">= Unlimited convos simultaneously</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-disco-purple to-disco-blue p-8 rounded-2xl text-white">
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">1,000+</div>
                <div className="text-xl mb-2">Simultaneous conversations</div>
                <div className="text-white/80">While maintaining perfect quality and consistency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Infinite Scale Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              How Disco achieves infinite capacity
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant response</h3>
                <p className="text-gray-600">
                  No wait time, ever. Whether it's 1 lead or 1,000, every prospect gets an immediate, personalized response within 2 seconds.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Perfect consistency</h3>
                <p className="text-gray-600">
                  Conversation #1 is identical in quality to conversation #1,000. No fatigue, no shortcuts, no variability in qualification.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Elastic scaling</h3>
                <p className="text-gray-600">
                  Traffic spike from a campaign? Product launch flood? Disco automatically handles 10x volume without breaking a sweat.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Real capacity comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-700">Scenario</th>
                      <th className="text-center py-3 px-4 text-gray-700">Human Team</th>
                      <th className="text-center py-3 px-4 text-gray-700">Disco AI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-4 px-4 font-medium">Normal day (100 leads)</td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-green-600">✓ Can handle</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-green-600">✓ Can handle</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Campaign spike (500 leads)</td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-yellow-600">⚠ Overwhelmed</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-green-600">✓ Can handle</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Product launch (2,000 leads)</td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-red-600">✗ Days of backlog</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-green-600">✓ Can handle</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Weekend/night traffic</td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-red-600">✗ Offline</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-green-600">✓ 24/7 active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Calculator */}
      <section id="scale-calc" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">What would 10x capacity mean for you?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-sm text-gray-400 mb-4">Your current capacity:</div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-6 rounded-lg">
                      <div className="text-sm text-gray-400 mb-2">Monthly inbound leads</div>
                      <div className="text-3xl font-bold">1,000</div>
                    </div>
                    <div className="bg-white/10 p-6 rounded-lg">
                      <div className="text-sm text-gray-400 mb-2">Team capacity (contacts/month)</div>
                      <div className="text-3xl font-bold">800</div>
                      <div className="text-sm text-gray-400 mt-2">5 SDRs × 40 leads/week × 4 weeks</div>
                    </div>
                    <div className="bg-red-500/20 p-6 rounded-lg border border-red-500/30">
                      <div className="text-sm text-red-300 mb-2">Leads lost to capacity</div>
                      <div className="text-3xl font-bold text-red-400">200/month</div>
                      <div className="text-sm text-red-300 mt-2">Never contacted = never converted</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-green-400 mb-4">With Disco AI:</div>
                  <div className="space-y-4">
                    <div className="bg-green-500/20 p-6 rounded-lg border border-green-500/30">
                      <div className="text-sm text-green-300 mb-2">Monthly inbound leads</div>
                      <div className="text-3xl font-bold">1,000</div>
                      <div className="text-sm text-green-300 mt-2">Handle 10x this if needed</div>
                    </div>
                    <div className="bg-green-500/20 p-6 rounded-lg border border-green-500/30">
                      <div className="text-sm text-green-300 mb-2">AI capacity (contacts/month)</div>
                      <div className="text-3xl font-bold">∞ Unlimited</div>
                      <div className="text-sm text-green-300 mt-2">Scales instantly with demand</div>
                    </div>
                    <div className="bg-green-500/30 p-6 rounded-lg border-2 border-green-400">
                      <div className="text-sm text-green-300 mb-2">Additional pipeline captured</div>
                      <div className="text-3xl font-bold text-green-400">$600K/month</div>
                      <div className="text-sm text-green-300 mt-2">200 leads × 30% qual rate × $10K ACV</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-green-500/20 border border-green-500/30 p-6 rounded-xl text-center">
                <div className="text-sm text-green-300 mb-2">Annual Revenue from Previously Lost Leads</div>
                <div className="text-5xl font-bold text-green-400 mb-2">+$7.2M</div>
                <div className="text-sm text-gray-300">Without adding a single person to your team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases for Scale */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              When infinite capacity changes everything
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Product launches</h3>
                <p className="text-gray-600">
                  Launch with confidence knowing you can handle any volume. Your team has handled 100 leads from a launch—Disco can handle 10,000.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing campaigns</h3>
                <p className="text-gray-600">
                  Run aggressive campaigns without worrying about overwhelming your team. Scale marketing spend = scale sales capacity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global expansion</h3>
                <p className="text-gray-600">
                  Enter new markets without hiring local teams. Disco speaks 50+ languages and works across all time zones simultaneously.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hypergrowth</h3>
                <p className="text-gray-600">
                  Scale revenue faster than headcount. Revenue 3x while team stays flat? Disco makes it possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready for unlimited capacity?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Scale your sales conversations infinitely without scaling headcount.
          </p>
          <Link 
            href="#demo" 
            className="inline-block bg-gradient-to-r from-disco-purple to-disco-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
          >
            See 10x Capacity in Action
          </Link>
        </div>
      </section>
    </main>
  )
}

