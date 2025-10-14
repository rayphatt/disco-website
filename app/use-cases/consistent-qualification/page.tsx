import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Consistent Sales Qualification | Perfect Every Time - Disco',
  description: 'Every lead gets expert-level questions in your exact sales framework. Eliminate qualification inconsistency with AI that never forgets, never shortcuts.',
  keywords: 'consistent qualification, sales framework, standardized qualification, BANT, MEDDIC, sales process consistency',
}

export default function ConsistentQualificationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-900 via-disco-purple to-indigo-900 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6">
              Scale Sales
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Every lead gets the same expert-level questions
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Your top SDR asks perfect questions. Your new hire misses key details. Disco AI ensures every conversation follows your exact sales framework—perfectly, every single time.
            </p>
            <Link 
              href="#framework" 
              className="inline-block bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* The Inconsistency Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              The hidden cost of inconsistent qualification
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Without consistency:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Top SDR vs new hire</div>
                      <p className="text-sm text-gray-600">Quality varies wildly between reps—your best SDR asks 15 qualifying questions, your newest asks 3</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Bad days happen</div>
                      <p className="text-sm text-gray-600">Even your best reps skip steps when tired, rushed, or having a rough day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Process drift</div>
                      <p className="text-sm text-gray-600">Over time, each rep develops their own version of your qualification framework</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Garbage in, garbage out</div>
                      <p className="text-sm text-gray-600">AEs get incomplete data, leading to longer sales cycles and lower close rates</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">With Disco AI:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Perfect every time</div>
                      <p className="text-sm text-gray-600">Conversation #1 and conversation #10,000 follow the exact same framework with zero deviation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Never forgets a question</div>
                      <p className="text-sm text-gray-600">Every qualifying question gets asked, in the right order, based on your proven methodology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Instant updates</div>
                      <p className="text-sm text-gray-600">Change your framework? Every conversation uses the new version immediately—no retraining needed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Complete data every time</div>
                      <p className="text-sm text-gray-600">AEs get fully qualified leads with all the information they need to close faster</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl text-white text-center">
              <div className="text-5xl font-bold mb-4">100%</div>
              <div className="text-xl">Consistency in qualification quality</div>
              <div className="text-gray-400 mt-2">From your first lead to your millionth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Implementation */}
      <section id="framework" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Works with any sales framework
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">BANT</h3>
                <p className="text-gray-600 mb-4">Budget, Authority, Need, Timeline</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Confirms budget allocation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Identifies decision makers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Validates business need</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Establishes purchase timeline</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">MEDDIC</h3>
                <p className="text-gray-600 mb-4">Metrics, Economic Buyer, Decision Criteria...</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Quantifies success metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Finds economic buyer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Uncovers decision criteria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Maps decision process</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom</h3>
                <p className="text-gray-600 mb-4">Your unique qualification framework</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Industry-specific questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Product-specific criteria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Market segment rules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-disco-purple rounded-full"></div>
                    <span className="text-gray-700">Competitive intelligence</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Disco learns your framework</h3>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-disco-purple text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    1
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">Import playbook</div>
                  <p className="text-sm text-gray-600">Upload your sales methodology, questions, and scoring criteria</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-disco-purple text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    2
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">AI training</div>
                  <p className="text-sm text-gray-600">Disco learns to ask questions naturally while maintaining structure</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-disco-purple text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    3
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">Test & refine</div>
                  <p className="text-sm text-gray-600">Review sample conversations and adjust until perfect</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-disco-purple text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    4
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">Deploy</div>
                  <p className="text-sm text-gray-600">Every conversation follows your framework perfectly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Quality Impact */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Better data = faster closes
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Incomplete qualification</h3>
                <div className="bg-red-50 p-6 rounded-xl">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Budget confirmed:</span>
                      <span className="text-red-600 font-semibold">40% of leads</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Decision maker identified:</span>
                      <span className="text-red-600 font-semibold">35% of leads</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timeline established:</span>
                      <span className="text-red-600 font-semibold">50% of leads</span>
                    </div>
                    <div className="flex justify-between border-t border-red-200 pt-3 mt-3">
                      <span className="font-bold text-gray-900">AE wastes time on:</span>
                      <span className="text-red-600 font-bold">Re-qualification</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">Result: Longer sales cycles, lower close rates, frustrated AEs</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete qualification</h3>
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Budget confirmed:</span>
                      <span className="text-green-600 font-semibold">100% of leads</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Decision maker identified:</span>
                      <span className="text-green-600 font-semibold">100% of leads</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timeline established:</span>
                      <span className="text-green-600 font-semibold">100% of leads</span>
                    </div>
                    <div className="flex justify-between border-t border-green-200 pt-3 mt-3">
                      <span className="font-bold text-gray-900">AE focuses on:</span>
                      <span className="text-green-600 font-bold">Closing</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">Result: Faster cycles, higher close rates, happy AEs</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-disco-purple to-disco-blue p-8 rounded-2xl text-white">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">32%</div>
                  <div className="text-white/90">Shorter sales cycles</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">45%</div>
                  <div className="text-white/90">Higher close rates</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">60%</div>
                  <div className="text-white/90">More AE productivity</div>
                </div>
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
                  How do I teach Disco my qualification framework?
                </summary>
                <p className="mt-4 text-gray-600">
                  You define your questions, scoring criteria, and routing logic through our intuitive interface. Disco learns your framework and applies it consistently to every conversation.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Can I update my framework without disrupting operations?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes. Changes deploy instantly—no retraining needed. Every conversation from that point forward uses your updated framework.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  What if a prospect's answer requires follow-up questions?
                </summary>
                <p className="mt-4 text-gray-600">
                  Disco asks adaptive follow-ups based on responses. If someone mentions budget constraints, Disco automatically digs deeper to understand the real budget and decision process.
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
            Stop accepting inconsistent qualification
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Give every lead the expert-level qualification they deserve.
          </p>
          <Link 
            href="#demo" 
            className="inline-block bg-gradient-to-r from-disco-purple to-disco-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
          >
            See Consistent Qualification in Action
          </Link>
        </div>
      </section>
    </main>
  )
}

