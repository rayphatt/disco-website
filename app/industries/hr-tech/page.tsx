import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Sales Automation for HR Tech & Recruiting Software | Disco',
  description: 'Instant qualification for recruiting and workforce software. Automate HR tech sales with AI that understands headcount, hiring needs, and HR systems.',
  keywords: 'HR tech sales, recruiting software sales, workforce software automation, ATS sales automation, HRIS sales AI',
}

export default function HRTechPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-disco-purple via-purple-700 to-indigo-800 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                HR Tech Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Instant Qualification for Recruiting & Workforce Software
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Qualify HR and recruiting leads instantly with AI that understands headcount planning, hiring velocity, and current HR systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Book a Demo
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  Calculate ROI
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-6xl mb-4">👥</div>
                <div className="space-y-4 text-white">
                  <div className="flex items-center justify-between">
                    <span>Demo Booking Rate</span>
                    <span className="font-bold">+189%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Qualification Time</span>
                    <span className="font-bold">2 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Win Rate</span>
                    <span className="font-bold">+54%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              HR Tech Sales Are Different
            </h2>
            <p className="text-xl text-gray-600">
              Buying decisions involve HR, IT, Finance, and executives. Complex requirements and long sales cycles.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Stakeholders</h3>
              <p className="text-gray-600">
                HR leaders care about experience, IT about security, Finance about cost. You need to qualify across all dimensions.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">System Switching Friction</h3>
              <p className="text-gray-600">
                Most prospects already have an ATS, HRIS, or recruiting platform. Understanding their current stack is critical.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Usage-Based Complexity</h3>
              <p className="text-gray-600">
                Pricing depends on employee count, hiring volume, locations, and features. Manual quotes slow everything down.
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
              AI That Speaks HR Tech
            </h2>
            <p className="text-xl text-gray-600">
              Disco understands the unique needs of HR and recruiting buyers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Headcount & Hiring Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Automatically gather company size, hiring velocity, departments hiring, and growth plans to qualify fit instantly.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Current employee count & growth rate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Monthly hiring volume by department</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Geographic distribution & remote workforce</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Stack Assessment</h3>
              <p className="text-gray-600 mb-4">
                Understand what ATS, HRIS, or recruiting tools they're using, what's working, and what pain points exist.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Identify current HR tech stack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Uncover switching motivations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Map integration requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant ROI Calculations</h3>
              <p className="text-gray-600 mb-4">
                Show prospects exactly how much they'll save in recruiting costs, time-to-hire, and employee productivity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Cost-per-hire reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Time-to-fill improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Recruiter productivity gains</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stakeholder Mapping</h3>
              <p className="text-gray-600 mb-4">
                Identify all decision-makers—CHRO, IT leaders, Finance, and executives—and understand each person's priorities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Map decision-making committee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Capture stakeholder concerns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Tailor demos to each persona</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HR Tech Specific Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built for HR Tech Complexity
            </h2>
            <p className="text-xl text-gray-600">
              Every feature designed for recruiting and workforce software sales
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Compliance Intelligence</h3>
              <p className="text-sm text-gray-600">Understand GDPR, EEOC, and industry-specific compliance needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="font-bold text-gray-900 mb-2">ATS/HRIS Integration</h3>
              <p className="text-sm text-gray-600">Connect with Workday, BambooHR, Greenhouse, Lever, and more</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold text-gray-900 mb-2">Multi-Persona Flows</h3>
              <p className="text-sm text-gray-600">Different conversations for HR, IT, Finance stakeholders</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Seat-Based Pricing</h3>
              <p className="text-sm text-gray-600">Handle per-employee, per-hire, and tiered pricing models</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Hiring Metrics Analysis</h3>
              <p className="text-sm text-gray-600">Track time-to-hire, cost-per-hire, and quality-of-hire impact</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">Security First</h3>
              <p className="text-sm text-gray-600">SOC 2, GDPR compliant with candidate data protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Scale Your HR Tech Sales?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See how Disco helps recruiting and workforce software companies close more deals faster.
            </p>
            <button className="bg-disco-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg">
              Book a Demo →
            </button>
            <p className="text-sm text-gray-500 mt-4">Free 14-day pilot for HR tech companies</p>
          </div>
        </div>
      </section>
    </main>
  )
}

