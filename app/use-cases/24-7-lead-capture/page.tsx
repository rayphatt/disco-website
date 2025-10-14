import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '24/7 Lead Capture | Never Miss a High-Intent Prospect - Disco',
  description: 'Capture leads around the clock with AI that never sleeps. Engage prospects at 11pm on Saturday or 6am on Monday—Disco ensures you never miss high-intent buyers.',
  keywords: '24/7 lead capture, round the clock lead generation, automated lead response, after hours lead capture, weekend lead generation',
}

export default function LeadCapturePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-disco-purple pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Never miss a lead—even at 11pm on Saturday
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Your best leads don't work 9-to-5, and neither should your sales process. Disco AI captures and qualifies every prospect 24/7/365—so you never lose a deal to timing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#demo" 
                className="bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
              >
                Get Started
              </Link>
              <Link 
                href="#benefits" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The cost of missing after-hours leads</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-red-600 mb-2">62%</div>
                <div className="text-gray-600">Of B2B buyers research solutions outside business hours</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-red-600 mb-2">78%</div>
                <div className="text-gray-600">Buy from the first company to respond</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-red-600 mb-2">$480K</div>
                <div className="text-gray-600">Average annual revenue lost to delayed responses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Capture every opportunity, anytime
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Disco AI works around the clock to engage, qualify, and route leads—giving you a competitive edge 24/7.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Instant engagement</h3>
                  <p className="text-gray-600">
                    Respond to website visitors, form fills, and inquiries in seconds—not hours. No more "We'll get back to you on Monday" auto-replies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Global coverage</h3>
                  <p className="text-gray-600">
                    Serve prospects across all time zones. Whether they're in Tokyo, London, or San Francisco, Disco speaks their language and respects their schedule.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Consistent quality</h3>
                  <p className="text-gray-600">
                    Every lead gets the same high-quality experience. No burnout, no bad days, no dropped conversations—just perfect execution every single time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The cost of "We'll get back to you Monday"</h3>
              <p className="text-gray-600 mb-6">
                Every hour a lead waits for a response, their likelihood of conversion drops by 10%. By Monday morning, that weekend inquiry has likely moved on to a competitor who responded instantly.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">78%</div>
                  <div className="text-sm text-gray-600">of buyers choose whoever responds first</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">62%</div>
                  <div className="text-sm text-gray-600">of leads come in outside business hours</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">&lt;60s</div>
                  <div className="text-sm text-gray-600">average Disco response time, 24/7</div>
                </div>
              </div>
              <p className="text-gray-600 mt-6 text-center">
                While your team sleeps, Disco is qualifying leads, answering questions, and booking meetings for Monday morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From visitor to qualified lead—anytime
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-disco-purple rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="w-px h-full bg-gray-200 mt-4"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visitor arrives (3am)</h3>
                <p className="text-gray-600">
                  A prospect lands on your website from a late-night Google search. Instead of a static form, they're greeted by Disco AI.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-disco-purple rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="w-px h-full bg-gray-200 mt-4"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Natural conversation (3:02am)</h3>
                <p className="text-gray-600">
                  AI asks qualifying questions, answers their specific questions, and assesses fit—all in a natural, helpful conversation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-disco-purple rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="w-px h-full bg-gray-200 mt-4"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Meeting scheduled (3:05am)</h3>
                <p className="text-gray-600">
                  Qualified prospect books a meeting for Monday at 10am. They receive immediate confirmation with calendar invite.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-disco-purple rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sales team notified (Monday 8am)</h3>
                <p className="text-gray-600">
                  Your AE arrives to find a qualified, excited prospect on their calendar—with full conversation history and lead intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-disco-purple to-disco-blue rounded-3xl p-12 lg:p-16 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">The real cost of sleeping on leads</h2>
              <p className="text-xl text-white/90 mb-8">
                If your website gets 100 visitors per week outside business hours, and 30% are qualified leads with an average deal size of $50K:
              </p>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-sm text-white/70 mb-2">Without 24/7 capture:</div>
                    <div className="text-3xl font-bold">$780K lost</div>
                    <div className="text-sm text-white/70 mt-1">Annually from delayed response</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-2">With Disco AI:</div>
                    <div className="text-3xl font-bold">$780K captured</div>
                    <div className="text-sm text-white/70 mt-1">Plus 2x faster close rates</div>
                  </div>
                </div>
              </div>

              <Link 
                href="#demo"
                className="inline-block bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Common questions
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  What happens when a lead comes in at midnight?
                </summary>
                <p className="mt-4 text-gray-600">
                  Disco AI engages immediately—qualifying the lead, answering questions, and booking meetings for the next available business day. Your team wakes up to a pipeline full of qualified prospects ready to talk.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Can I set "quiet hours" for certain actions?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes. While Disco captures and qualifies 24/7, you can configure when notifications are sent, when meetings are scheduled, and when to escalate to human reps.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Does this work for international prospects?
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely. Disco AI supports 50+ languages and automatically detects time zones, ensuring prospects get meeting times that work for their schedule, not just yours.
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
              Stop losing deals to the clock
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start capturing and qualifying leads 24/7 with Disco AI.
            </p>
            <Link 
              href="#demo" 
              className="inline-block bg-gradient-to-r from-disco-purple to-disco-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

