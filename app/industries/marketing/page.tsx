import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Lead Conversion for Marketing Teams | Disco',
  description: 'Convert marketing campaigns into qualified pipeline instantly. Turn website visitors, ad clicks, and event registrations into booked meetings with AI automation.',
  keywords: 'marketing automation AI, lead conversion, MQL to SQL, campaign optimization, marketing qualified leads',
}

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-disco-purple via-purple-700 to-indigo-800 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Marketing Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Convert Campaigns Into Qualified Pipeline Instantly
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Stop letting marketing leads go cold. Disco AI engages every visitor, ad click, and event registration instantly—turning MQLs into booked meetings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get a Demo
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  See ROI Calculator
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-6xl mb-4">📊</div>
                <div className="space-y-4 text-white">
                  <div className="flex items-center justify-between">
                    <span>Lead-to-Meeting Rate</span>
                    <span className="font-bold">+215%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Response Time</span>
                    <span className="font-bold">&lt; 1 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Marketing ROI</span>
                    <span className="font-bold">+340%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              You're Generating Leads. But Are They Converting?
            </h2>
            <p className="text-xl text-gray-600">
              Most marketing leads never make it to sales. They go cold waiting for follow-up.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Slow Response Times</h3>
              <p className="text-gray-600">
                78% of buyers choose whoever responds first. Your SDRs can't respond to every lead instantly—especially after hours.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">🗑️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wasted Ad Spend</h3>
              <p className="text-gray-600">
                You're paying for clicks and downloads, but leads disappear before sales can reach them. Marketing ROI suffers.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leaky Funnel</h3>
              <p className="text-gray-600">
                MQLs get stuck in the handoff to sales. No immediate engagement means prospects move on to competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Instant Engagement for Every Marketing Lead
            </h2>
            <p className="text-xl text-gray-600">
              Disco AI catches every lead the moment they show interest
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Form Responses</h3>
              <p className="text-gray-600 mb-4">
                The moment someone fills out a form, Disco AI initiates a conversation—qualifying them and booking meetings before they leave your site.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Trigger on any form submission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Instant SMS or chat engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Book meetings in under 2 minutes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Campaign-Specific Messaging</h3>
              <p className="text-gray-600 mb-4">
                Different campaigns deserve different messaging. Disco personalizes conversations based on the ad, landing page, or content they engaged with.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>UTM-based conversation routing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Context-aware qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>A/B test messaging automatically</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Lead Scoring</h3>
              <p className="text-gray-600 mb-4">
                Disco enriches and scores every lead in real-time, routing high-intent prospects to your best reps instantly.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Behavioral scoring integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Firmographic enrichment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Smart routing to right rep</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Attribution Tracking</h3>
              <p className="text-gray-600 mb-4">
                See exactly which campaigns drive revenue. Track every lead from first touch to closed deal.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Multi-touch attribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Campaign ROI analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Revenue forecasting by channel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Channels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Works With Your Entire Marketing Stack
            </h2>
            <p className="text-xl text-gray-600">
              Seamless integration with the tools you already use
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-gray-900 mb-2">Forms</h3>
              <p className="text-sm text-gray-600">HubSpot, Marketo, Pardot, Unbounce</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Ads</h3>
              <p className="text-sm text-gray-600">Google, Facebook, LinkedIn, Twitter</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold text-gray-900 mb-2">Web</h3>
              <p className="text-sm text-gray-600">WordPress, Webflow, Custom sites</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600">Intercom, Drift, Mailchimp, ActiveCampaign</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stop Wasting Marketing Budget on Leads That Go Cold
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See how Disco can increase your marketing ROI by 3-5x in the first quarter.
            </p>
            <button className="bg-disco-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg">
              Get a Demo →
            </button>
            <p className="text-sm text-gray-500 mt-4">14-day pilot. See results or don't pay.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

