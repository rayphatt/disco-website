import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Sales Automation for Cybersecurity Companies | Disco',
  description: 'Handle technical security product conversations with AI that understands compliance, threat models, and enterprise security requirements.',
  keywords: 'cybersecurity sales automation, security software sales, compliance sales AI, enterprise security sales, infosec sales automation',
}

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-disco-purple via-purple-700 to-indigo-800 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Cybersecurity Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Handle Technical Security Product Conversations
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Disco AI speaks the language of security. Qualify enterprise buyers on compliance, threat models, and technical requirements—instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Book a Demo
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  See It In Action
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-6xl mb-4">🔒</div>
                <div className="space-y-4 text-white">
                  <div className="flex items-center justify-between">
                    <span>Enterprise Deal Velocity</span>
                    <span className="font-bold">+67%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Technical Qualification</span>
                    <span className="font-bold">&lt; 5 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Win Rate (Enterprise)</span>
                    <span className="font-bold">+42%</span>
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
              Security Sales Are Uniquely Complex
            </h2>
            <p className="text-xl text-gray-600">
              Technical buyers, compliance requirements, and high-stakes decisions require deep qualification.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Complexity</h3>
              <p className="text-gray-600">
                CISOs and security teams evaluate threat models, architecture fit, and technical capabilities. Generic conversations don't work.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Requirements</h3>
              <p className="text-gray-600">
                Every industry has different compliance needs—SOC 2, ISO 27001, HIPAA, FedRAMP. Understanding these is critical.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Long Sales Cycles</h3>
              <p className="text-gray-600">
                Security purchases involve POCs, technical reviews, and board approvals. Slow qualification extends cycles even further.
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
              AI That Understands Security
            </h2>
            <p className="text-xl text-gray-600">
              Built for the technical depth security buyers demand
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Threat Model Assessment</h3>
              <p className="text-gray-600 mb-4">
                Understand the prospect's threat landscape, attack surface, and security priorities to position your solution effectively.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Identify current security posture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Map threat vectors and risks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Assess incident response readiness</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Automatically identify compliance requirements (SOC 2, ISO, HIPAA, GDPR, FedRAMP) and show how your solution addresses them.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Industry-specific compliance needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Audit and reporting requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Data residency and sovereignty</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Stack Analysis</h3>
              <p className="text-gray-600 mb-4">
                Identify existing security tools (SIEM, EDR, firewall, IAM) and determine integration requirements and deployment options.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Current security tool inventory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Integration and API requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>On-prem vs cloud deployment needs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Team Mapping</h3>
              <p className="text-gray-600 mb-4">
                Identify key stakeholders—CISO, security architects, compliance officers, and IT leadership—and understand each role's priorities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Decision-maker identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Technical vs business buyers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Budget authority and approval process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security-Specific Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built for Security Product Sales
            </h2>
            <p className="text-xl text-gray-600">
              Every feature designed for the complexity of cybersecurity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="font-bold text-gray-900 mb-2">Zero Trust Architecture</h3>
              <p className="text-sm text-gray-600">Understand and articulate zero trust principles and implementation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Attack Surface Analysis</h3>
              <p className="text-sm text-gray-600">Identify exposure points and vulnerability assessment needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Security Metrics</h3>
              <p className="text-sm text-gray-600">Calculate MTTD, MTTR, and risk reduction ROI</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="font-bold text-gray-900 mb-2">SIEM/SOAR Integration</h3>
              <p className="text-sm text-gray-600">Connect with Splunk, QRadar, Sentinel, Chronicle</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Compliance Mapping</h3>
              <p className="text-sm text-gray-600">Map to NIST, CIS, MITRE ATT&CK frameworks</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-bold text-gray-900 mb-2">FedRAMP Ready</h3>
              <p className="text-sm text-gray-600">Qualify government and regulated industry prospects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Accelerate Security Sales?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See how Disco helps cybersecurity companies qualify technical buyers and close enterprise deals faster.
            </p>
            <button className="bg-disco-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg">
              Book a Demo →
            </button>
            <p className="text-sm text-gray-500 mt-4">SOC 2 Type II certified. Enterprise-grade security.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

