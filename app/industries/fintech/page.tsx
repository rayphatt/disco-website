import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Sales Automation for Fintech & Financial Software | Disco',
  description: 'Automate sales for banking, payments, and financial software. AI that understands compliance, integration requirements, and regulatory needs.',
  keywords: 'fintech sales automation, financial software sales, banking software AI, payment solution sales, financial services automation',
}

export default function FintechPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-disco-purple via-purple-700 to-indigo-800 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Fintech Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Automate Sales for Banking, Payments & Financial Software
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Disco AI understands compliance, regulatory requirements, and financial integrations—qualifying enterprise fintech buyers instantly.
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
                <div className="text-6xl mb-4">💳</div>
                <div className="space-y-4 text-white">
                  <div className="flex items-center justify-between">
                    <span>Deal Size (Enterprise)</span>
                    <span className="font-bold">+58%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Compliance Qualification</span>
                    <span className="font-bold">&lt; 3 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sales Cycle Reduction</span>
                    <span className="font-bold">-41%</span>
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
              Financial Software Sales Are High-Stakes
            </h2>
            <p className="text-xl text-gray-600">
              Regulatory complexity, security requirements, and mission-critical integrations demand perfect qualification.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Maze</h3>
              <p className="text-gray-600">
                PCI DSS, SOC 2, GDPR, regional banking regulations—every deal has different compliance requirements that must be understood upfront.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complex Integrations</h3>
              <p className="text-gray-600">
                Banking APIs, payment processors, core banking systems—integration requirements are technical and must be scoped accurately.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Committees</h3>
              <p className="text-gray-600">
                Decisions involve CTO, CFO, compliance officers, and risk management. Each stakeholder has different evaluation criteria.
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
              AI Built for Financial Services
            </h2>
            <p className="text-xl text-gray-600">
              Understand compliance, risk, and integration needs automatically
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Automatically identify regulatory requirements based on geography, industry, and transaction types—ensuring your solution fits.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>PCI DSS, SOC 2, ISO 27001 assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Regional regulations (GDPR, CCPA, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Banking-specific compliance (KYC, AML)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial System Integration Scoping</h3>
              <p className="text-gray-600 mb-4">
                Identify core banking systems, payment gateways, and APIs in use—then determine technical requirements and integration effort.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Core banking platform identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Payment processor compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>API capabilities and limitations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transaction Volume & Pricing</h3>
              <p className="text-gray-600 mb-4">
                Understand transaction volumes, processing needs, and revenue to calculate accurate, volume-based pricing instantly.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Monthly transaction volume</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Average transaction value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Volume-tiered pricing models</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk & Security Assessment</h3>
              <p className="text-gray-600 mb-4">
                Evaluate fraud prevention needs, security requirements, and risk tolerance to position your solution's security capabilities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Fraud detection requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Data encryption standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Risk management processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fintech-Specific Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built for Financial Software Complexity
            </h2>
            <p className="text-xl text-gray-600">
              Every feature designed for banking, payments, and fintech sales
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="font-bold text-gray-900 mb-2">Banking API Integration</h3>
              <p className="text-sm text-gray-600">Connect with Plaid, Stripe, Finicity, and core banking systems</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-bold text-gray-900 mb-2">Payment Gateway Support</h3>
              <p className="text-sm text-gray-600">Understand Stripe, Adyen, PayPal, Square integrations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">PCI Compliance</h3>
              <p className="text-sm text-gray-600">Assess PCI DSS requirements and security posture</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-bold text-gray-900 mb-2">Multi-Currency Support</h3>
              <p className="text-sm text-gray-600">Handle global transactions and currency conversion needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Financial Reporting</h3>
              <p className="text-sm text-gray-600">Track revenue impact, processing fees, and ROI metrics</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Fraud Detection</h3>
              <p className="text-sm text-gray-600">Assess fraud prevention and risk management requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Scale Your Fintech Sales?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See how Disco helps banking, payments, and financial software companies close more enterprise deals.
            </p>
            <button className="bg-disco-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg">
              Book a Demo →
            </button>
            <p className="text-sm text-gray-500 mt-4">PCI DSS compliant. Bank-grade security.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

