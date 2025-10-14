import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Interactive AI Demos | Personalized Product Walkthroughs - Disco',
  description: 'Walk prospects through your product with AI-powered personalized demos based on their specific needs. Show the right features to the right people, automatically.',
  keywords: 'interactive demos, AI product demos, personalized demos, automated product walkthrough, sales demos',
}

export default function InteractiveDemosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6">
              Close Deals
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Show them exactly what they need to see
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Generic demos waste time. Disco AI delivers personalized product walkthroughs tailored to each prospect's industry, role, and pain points—automatically.
            </p>
            <Link 
              href="#how-it-works" 
              className="inline-block bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
            >
              See Demo Experience
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why generic demos fail
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional demo approach:</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">⏰ Scheduling nightmare</div>
                    <p className="text-sm text-gray-600">Wait 3-5 days for AE availability, by then 40% of prospects have lost interest</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">📊 One-size-fits-all</div>
                    <p className="text-sm text-gray-600">Show the same 60-minute feature tour to everyone, regardless of their needs</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">😴 Attention drift</div>
                    <p className="text-sm text-gray-600">Prospects zone out watching features they don't care about</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">🤷 Unclear next steps</div>
                    <p className="text-sm text-gray-600">Demo ends without clear path to purchase</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Disco AI demos:</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">⚡ Instant access</div>
                    <p className="text-sm text-gray-600">Prospects get personalized demos immediately, while interest is hot</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">🎯 Hyper-personalized</div>
                    <p className="text-sm text-gray-600">Show only features relevant to their industry, role, and use case</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">🔥 Engagement stays high</div>
                    <p className="text-sm text-gray-600">Every minute is relevant to their specific needs</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">📈 Clear CTA</div>
                    <p className="text-sm text-gray-600">Demo concludes with personalized proposal or AE booking</p>
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
              How personalized demos work
            </h2>

            <div className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-disco-purple text-white px-4 py-2 rounded-full font-semibold mb-4">Step 1</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI learns about the prospect</h3>
                  <p className="text-gray-600 mb-4">
                    Through natural conversation, Disco discovers industry, role, team size, current tools, pain points, and goals.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Discovered context:</div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Industry: Healthcare</div>
                      <div>• Role: VP of Sales Operations</div>
                      <div>• Pain: Manual data entry killing productivity</div>
                      <div>• Goal: Automate rep workflows</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                  <div className="bg-white p-4 rounded-lg mb-3">
                    <p className="text-sm text-gray-900">"Our sales team spends 3 hours a day on data entry in Salesforce"</p>
                  </div>
                  <div className="bg-disco-purple/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-900">"I understand. Let me show you how Disco automates that for healthcare sales teams..."</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-bold text-gray-900">Custom Demo for Healthcare VP</div>
                      <div className="text-sm text-disco-purple">8 min</div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-disco-purple/10 p-3 rounded-lg">
                        <div className="text-sm font-semibold text-gray-900">1. HIPAA-compliant automation</div>
                        <div className="text-xs text-gray-600">Addresses compliance concern</div>
                      </div>
                      <div className="bg-disco-purple/10 p-3 rounded-lg">
                        <div className="text-sm font-semibold text-gray-900">2. Salesforce auto-population</div>
                        <div className="text-xs text-gray-600">Solves data entry pain</div>
                      </div>
                      <div className="bg-disco-purple/10 p-3 rounded-lg">
                        <div className="text-sm font-semibold text-gray-900">3. Healthcare-specific templates</div>
                        <div className="text-xs text-gray-600">Shows industry relevance</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block bg-disco-purple text-white px-4 py-2 rounded-full font-semibold mb-4">Step 2</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI crafts custom demo flow</h3>
                  <p className="text-gray-600 mb-4">
                    Disco selects the most relevant features and creates a personalized walkthrough focused on their specific challenges.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Skips irrelevant features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Uses industry examples</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Optimized for their role</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-disco-purple text-white px-4 py-2 rounded-full font-semibold mb-4">Step 3</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive walkthrough</h3>
                  <p className="text-gray-600 mb-4">
                    Prospects can ask questions, explore specific features, and see real-time examples tailored to their use case.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-green-700 mb-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Result:</span>
                    </div>
                    <p className="text-sm text-gray-700">They see exactly how your product solves THEIR problems, not just what it can do</p>
                  </div>
                </div>
                <div className="bg-gray-900 p-6 rounded-2xl text-white">
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-1">Demo engagement</div>
                    <div className="text-4xl font-bold">94%</div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full mb-4">
                    <div className="h-full w-[94%] bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">
                    vs. 45% for generic product tours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              The power of personalized demos
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-disco-purple mb-3">3.5x</div>
                <div className="font-semibold text-gray-900 mb-2">Higher conversion rate</div>
                <p className="text-gray-600">Prospects who see personalized demos are 3.5x more likely to purchase</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-disco-purple mb-3">67%</div>
                <div className="font-semibold text-gray-900 mb-2">Shorter sales cycle</div>
                <p className="text-gray-600">Instant demos eliminate weeks of back-and-forth scheduling</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-disco-purple mb-3">∞</div>
                <div className="font-semibold text-gray-900 mb-2">Unlimited capacity</div>
                <p className="text-gray-600">Give 1,000 personalized demos simultaneously</p>
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
                  How does Disco know which features to show?
                </summary>
                <p className="mt-4 text-gray-600">
                  Based on qualification data (industry, role, pain points), Disco selects the most relevant features and use cases. You control the mapping between prospect attributes and demo content.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Can prospects interact with the demo or just watch?
                </summary>
                <p className="mt-4 text-gray-600">
                  Both! Disco can show video walkthroughs, interactive sandbox environments, or live product access—whatever works best for your product. Prospects can ask questions and explore at their own pace.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Does this replace sales engineers entirely?
                </summary>
                <p className="mt-4 text-gray-600">
                  No. Disco handles standard demos for the majority of prospects. Your SEs focus on complex technical deep-dives for enterprise deals that need custom implementations or integrations.
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
            Show every prospect their perfect demo
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop wasting time on generic product tours. Start closing deals faster.
          </p>
          <Link 
            href="#demo" 
            className="inline-block bg-gradient-to-r from-disco-purple to-disco-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
          >
            Experience Personalized Demos
          </Link>
        </div>
      </section>
    </main>
  )
}

