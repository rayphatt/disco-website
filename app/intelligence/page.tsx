'use client'

import { motion } from 'framer-motion'
import { Search, Globe, Building2, User, TrendingUp, Brain, Target, Zap, Database, Network, ArrowRight, CheckCircle2, Sparkles, LineChart } from 'lucide-react'

export default function IntelligencePage() {
  const dataPoints = [
    { icon: Globe, title: 'Web Scraping', description: 'Company websites, news articles, social media, tech blogs, job postings' },
    { icon: Building2, title: 'Firmographic Data', description: 'Industry, size, revenue, growth stage, funding, location' },
    { icon: User, title: 'Contact Intelligence', description: 'LinkedIn profiles, role context, decision-making authority' },
    { icon: Database, title: 'Tech Stack', description: 'Current tools, integrations, infrastructure, planned adoptions' },
    { icon: TrendingUp, title: 'Buying Signals', description: 'Hiring patterns, budget signals, expansion indicators' },
    { icon: Network, title: 'Competitive Context', description: 'Current vendors, pain points, switching signals' },
  ]

  const researchFlow = [
    { step: '1', title: 'Visitor Lands', description: 'Prospect arrives on your website or engages via email/chat', icon: User },
    { step: '2', title: 'Instant Research', description: 'Disco scrapes web, enriches from databases, builds company profile', icon: Search },
    { step: '3', title: 'Context Built', description: 'Tech stack, org chart, pain points, buying signals compiled', icon: Brain },
    { step: '4', title: 'Personalized Engagement', description: 'AI uses research to ask relevant questions and show tailored demos', icon: Target },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20"
            >
              <Brain className="w-4 h-4 text-white mr-2" />
              <span className="text-white/90 text-sm font-medium">Intelligence-First Sales</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Research every prospect
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">before the first word</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed"
            >
              Disco automatically enriches every visitor with web scraping, firmographic data, and intent signals—so your AI conversations are always personalized and relevant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a href="#try-disco" className="inline-flex items-center justify-center bg-white text-disco-purple px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all group">
                See Intelligence in Action
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:hello@disco.ai" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all">
                Talk to Sales
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Research */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Every data point that matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Disco combines web scraping, public databases, and enrichment APIs to build complete prospect profiles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataPoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-disco-purple" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Real-time research in seconds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From anonymous visitor to fully-researched prospect instantly
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            {researchFlow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 h-full">
                  <div className="bg-gradient-to-br from-disco-purple to-disco-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                    {item.step}
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-7 h-7 text-disco-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
                {index < researchFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
                      <ArrowRight className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Intelligence powers better conversations
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-10 border border-purple-100"
            >
              <div className="mb-6">
                <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Without Intelligence
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Generic Conversations</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>"What industry are you in?"</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>"What tools do you currently use?"</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>"How big is your team?"</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Prospects feel like they're being interrogated</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 border border-green-200"
            >
              <div className="mb-6">
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  With Disco Intelligence
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contextual Conversations</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="text-green-500 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                  <span>"I see you're in B2B SaaS—scaling your SDR team?"</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="text-green-500 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                  <span>"Using Salesforce & Outreach—how's lead routing?"</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="text-green-500 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                  <span>"Saw you're hiring SDRs—need instant capacity?"</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="text-green-500 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                  <span>Prospects feel understood and engaged</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Intelligence Matters */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-indigo-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why prospect intelligence matters
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Your prospects expect personalized conversations. Disco delivers the context to make every interaction relevant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10"
            >
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">3.1x Higher</div>
                  <div className="text-lg font-semibold text-purple-300 mb-2">Conversion Rate</div>
                  <p className="text-white/80 text-sm">Personalized conversations convert better than generic outreach</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">&lt;3 Seconds</div>
                  <div className="text-lg font-semibold text-purple-300 mb-2">Research Time</div>
                  <p className="text-white/80 text-sm">Instant enrichment on every website visitor and prospect</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">100% Coverage</div>
                  <div className="text-lg font-semibold text-purple-300 mb-2">Every Prospect</div>
                  <p className="text-white/80 text-sm">No more manual research - every lead gets full context</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-purple-300 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-2 text-lg">The competitive advantage:</div>
                    <p className="text-white/90 leading-relaxed">
                      While your competitors send generic emails, Disco enables your team to reference specific company news, tech stack, hiring patterns, and pain points from the first conversation. Prospects notice the difference immediately.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intelligence Sources */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              We scrape the entire web
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Disco crawls thousands of data sources to build comprehensive prospect profiles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Public Data Sources</h3>
              <div className="space-y-3">
                {[
                  'Company websites & blogs',
                  'LinkedIn (company & individuals)',
                  'Twitter/X, social media',
                  'Tech news & publications',
                  'Job boards (hiring signals)',
                  'Product Hunt, G2, Capterra',
                  'GitHub (tech stack signals)',
                  'Crunchbase, PitchBook (funding)',
                ].map((source, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{source}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enrichment APIs</h3>
              <div className="space-y-3">
                {[
                  'Clearbit (firmographics)',
                  'ZoomInfo (contacts)',
                  'Apollo (email & phone)',
                  'BuiltWith (tech stack)',
                  'Sumble (contextual intelligence)',
                  'LinkedIn Sales Navigator',
                  'Hunter.io (email finding)',
                  'Custom integrations',
                ].map((source, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{source}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              See Disco's intelligence in action
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Watch how Disco researches a prospect and uses that context to drive conversions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#try-disco" className="inline-flex items-center justify-center bg-white text-disco-purple px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all group">
                Try Disco Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:hello@disco.ai" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all">
                Talk to Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

