import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Sales Automation for Data & Analytics Companies | Disco',
  description: 'Qualify enterprise data buyers with technical precision. AI that understands data architecture, integration complexity, and analytics use cases.',
  keywords: 'data analytics sales, BI tool sales automation, data platform sales, analytics software AI, enterprise data sales',
}

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-disco-purple via-purple-700 to-indigo-800 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Data & Analytics Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Qualify Enterprise Data Buyers with Technical Precision
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Disco AI understands data architecture, ETL pipelines, and analytics use cases—qualifying technical buyers instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Book a Demo
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  See How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-6xl mb-4">📊</div>
                <div className="space-y-4 text-white">
                  <div className="flex items-center justify-between">
                    <span>Technical Qualification Rate</span>
                    <span className="font-bold">+278%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>POC Success Rate</span>
                    <span className="font-bold">+91%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sales Cycle</span>
                    <span className="font-bold">-38%</span>
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
              Data & Analytics Sales Are Technically Complex
            </h2>
            <p className="text-xl text-gray-600">
              Every prospect has unique data infrastructure, use cases, and technical requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Buyers</h3>
              <p className="text-gray-600">
                Data engineers, analytics teams, and CTOs evaluate solutions on architecture, performance, and scalability—not sales talk.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Source Complexity</h3>
              <p className="text-gray-600">
                Understanding data sources, warehouses, lakes, and streaming platforms is critical to scoping integrations and solutions.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proof-of-Concept Pressure</h3>
              <p className="text-gray-600">
                Data buyers demand POCs with their actual data. Poor qualification leads to failed POCs and wasted engineering time.
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
              AI That Speaks Data & Analytics
            </h2>
            <p className="text-xl text-gray-600">
              Technical qualification that data teams respect
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Infrastructure Discovery</h3>
              <p className="text-gray-600 mb-4">
                Identify data warehouses, lakes, databases, and streaming platforms to understand architecture and integration needs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Data warehouse (Snowflake, BigQuery, Redshift)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Databases (PostgreSQL, MySQL, MongoDB)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Streaming (Kafka, Kinesis, Pub/Sub)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Use Case Analysis</h3>
              <p className="text-gray-600 mb-4">
                Understand specific analytics needs—dashboards, predictive models, data science, or operational analytics.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Business intelligence and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Machine learning and AI use cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Real-time operational analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance & Scale Requirements</h3>
              <p className="text-gray-600 mb-4">
                Capture data volumes, query performance needs, and concurrency requirements to ensure your solution fits.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Daily data volume and growth rate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Query performance expectations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>User concurrency and access patterns</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Stakeholder Mapping</h3>
              <p className="text-gray-600 mb-4">
                Identify data engineers, analysts, data scientists, and decision-makers—each with different evaluation criteria.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Map technical vs business buyers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Understand each role's priorities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-disco-purple mr-2">✓</span>
                  <span>Identify POC decision criteria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Analytics Specific Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built for Data & Analytics Complexity
            </h2>
            <p className="text-xl text-gray-600">
              Every feature designed for technical data buyers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Source Connectors</h3>
              <p className="text-sm text-gray-600">Identify and validate 200+ data source integrations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">ETL/ELT Assessment</h3>
              <p className="text-sm text-gray-600">Understand data pipeline and transformation needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">BI Tool Compatibility</h3>
              <p className="text-sm text-gray-600">Check Tableau, Power BI, Looker, Mode integration</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧮</div>
              <h3 className="font-bold text-gray-900 mb-2">SQL & Query Optimization</h3>
              <p className="text-sm text-gray-600">Assess query complexity and performance needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Governance</h3>
              <p className="text-sm text-gray-600">Understand access control and compliance requirements</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">ML/AI Capabilities</h3>
              <p className="text-sm text-gray-600">Identify machine learning and AI use case needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Scale Your Data & Analytics Sales?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See how Disco helps data platforms and analytics companies qualify technical buyers and run successful POCs.
            </p>
            <button className="bg-disco-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg">
              Book a Demo →
            </button>
            <p className="text-sm text-gray-500 mt-4">Built by data engineers, for data companies</p>
          </div>
        </div>
      </section>
    </main>
  )
}

