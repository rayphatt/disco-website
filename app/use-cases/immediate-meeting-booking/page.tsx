import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Immediate Meeting Booking | Instant Calendar Scheduling - Disco',
  description: 'Qualify and schedule meetings in one conversation. Route hot leads directly to your AEs with Disco\'s immediate booking—no back-and-forth required.',
  keywords: 'instant meeting booking, automated scheduling, calendar booking AI, sales meeting automation, immediate scheduling',
}

export default function ImmediateMeetingBookingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-disco-purple to-pink-600 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              From first contact to booked meeting in one conversation
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Stop the endless email chains. Disco AI qualifies leads and books them directly on your AE's calendar—all in a single, natural conversation.
            </p>
            <Link 
              href="#demo" 
              className="inline-block bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
            >
              See It In Action
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-disco-purple mb-2">73%</div>
              <div className="text-gray-600">More meetings booked</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-disco-purple mb-2">5 min</div>
              <div className="text-gray-600">From lead to scheduled meeting</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-disco-purple mb-2">0</div>
              <div className="text-gray-600">No-show rate with AI booking</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-disco-purple mb-2">24/7</div>
              <div className="text-gray-600">Always available to schedule</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional booking process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <div className="font-semibold text-gray-900">Day 1: Initial outreach</div>
                      <p className="text-sm text-gray-600">"Let's schedule a call..."</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <div className="font-semibold text-gray-900">Day 2: Wait for response</div>
                      <p className="text-sm text-gray-600">"I'm free Tuesday or Thursday"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <div className="font-semibold text-gray-900">Day 3: Calendar conflicts</div>
                      <p className="text-sm text-gray-600">"Actually, Tuesday doesn't work..."</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😤</span>
                    <div>
                      <div className="font-semibold text-gray-900">Day 5: Finally scheduled</div>
                      <p className="text-sm text-gray-600">Lead interest has cooled by 60%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Disco immediate booking</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <div className="font-semibold text-gray-900">Minute 1: Natural conversation</div>
                      <p className="text-sm text-gray-600">AI qualifies while chatting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <div className="font-semibold text-gray-900">Minute 3: Lead qualified</div>
                      <p className="text-sm text-gray-600">Score: 92/100 - High intent</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <div className="font-semibold text-gray-900">Minute 4: Shows calendar</div>
                      <p className="text-sm text-gray-600">Real-time availability from AE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="font-semibold text-gray-900">Minute 5: Meeting booked</div>
                      <p className="text-sm text-gray-600">Lead excited, calendar invite sent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Smart scheduling that feels natural
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Disco AI seamlessly transitions from qualification to booking without breaking conversation flow.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Qualify while conversing</h3>
                <p className="text-gray-600 mb-4">
                  Instead of asking "Are you interested in a demo?", Disco naturally discovers fit through conversation—budget, timeline, decision authority.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Conversational, not interrogative</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Real-time lead scoring</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-gray-100 p-4 rounded-lg mb-3">
                  <p className="text-sm text-gray-900">"We're looking to scale our outbound by 10x this quarter"</p>
                </div>
                <div className="bg-disco-purple/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-900">"That's exactly what we help teams do. What's your current team size and target market?"</p>
                  <div className="text-xs text-gray-500 mt-2">💡 Qualification in progress: 75%</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="border-2 border-disco-purple rounded-lg p-4">
                    <div className="text-sm font-semibold text-disco-purple mb-3">Available times for Mike (Enterprise AE):</div>
                    <div className="space-y-2">
                      <button className="w-full bg-gray-50 hover:bg-disco-purple hover:text-white transition-colors p-3 rounded-lg text-left font-medium">
                        Tomorrow, 2:00 PM EST
                      </button>
                      <button className="w-full bg-gray-50 hover:bg-disco-purple hover:text-white transition-colors p-3 rounded-lg text-left font-medium">
                        Thursday, 10:00 AM EST
                      </button>
                      <button className="w-full bg-gray-50 hover:bg-disco-purple hover:text-white transition-colors p-3 rounded-lg text-left font-medium">
                        Friday, 3:30 PM EST
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Show real-time availability</h3>
                <p className="text-gray-600 mb-4">
                  Once qualified, Disco pulls live availability from your team's calendars and presents options that match the prospect's timezone and preferences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Syncs with Google/Outlook calendars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Respects prospect timezone</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Confirm and prepare</h3>
                <p className="text-gray-600 mb-4">
                  Meeting is booked, calendar invites sent, and your AE gets a complete brief with conversation history, pain points, and lead intelligence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Automatic calendar invites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">SMS/email reminders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">CRM enrichment with notes</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-disco-purple to-disco-blue p-6 rounded-xl text-white">
                <div className="text-sm opacity-80 mb-4">✅ Meeting Confirmed</div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/10 p-3 rounded">
                    <div className="font-semibold">Sarah Chen • Acme Corp</div>
                    <div className="opacity-80">Thursday, 10:00 AM EST (30 min)</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded">
                    <div className="opacity-80">Key pain point:</div>
                    <div className="font-semibold">Need to 10x outbound capacity</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded">
                    <div className="opacity-80">Budget: $50K+</div>
                    <div className="opacity-80">Timeline: This quarter</div>
                    <div className="font-semibold text-green-300 mt-1">Score: 95/100</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why immediate booking wins deals</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-disco-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-disco-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strike while hot</h3>
                <p className="text-gray-600">
                  Book meetings when interest peaks. Every hour of delay drops conversion by 10%.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-disco-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-disco-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No scheduling fatigue</h3>
                <p className="text-gray-600">
                  Eliminate the back-and-forth that frustrates prospects and delays deals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-disco-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-disco-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Higher show rates</h3>
                <p className="text-gray-600">
                  Prospects who book themselves show up 40% more often than SDR-scheduled meetings.
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
                  What calendars does Disco integrate with?
                </summary>
                <p className="mt-4 text-gray-600">
                  Google Calendar, Outlook/Office 365, and any CalDAV-compatible calendar. We sync in real-time to show only genuinely available slots.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Can I set booking rules (minimum notice, buffer time, etc.)?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes. Set minimum notice periods, buffer time between meetings, daily meeting limits, preferred time windows, and routing rules based on lead score or attributes.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  What if the prospect needs to reschedule?
                </summary>
                <p className="mt-4 text-gray-600">
                  They can reschedule via the calendar invite link or by messaging Disco AI, which will show updated availability and handle the rebooking automatically.
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
            Stop losing deals to scheduling delays
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book qualified meetings instantly with Disco AI.
          </p>
          <Link 
            href="#demo" 
            className="inline-block bg-gradient-to-r from-disco-purple to-disco-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow text-lg"
          >
            See Immediate Booking in Action
          </Link>
        </div>
      </section>
    </main>
  )
}

