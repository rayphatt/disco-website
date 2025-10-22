'use client'

import { motion } from 'framer-motion'
import { Search, Globe, Building2, User, TrendingUp, Brain } from 'lucide-react'

export default function IntelligenceSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-disco-purple/10 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-disco-purple mr-2" />
            <span className="text-disco-purple font-semibold text-sm">Intelligence-First Sales</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Research every visitor
            <br />
            <span className="text-disco-purple">before the first word</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Disco automatically researches prospects using web scraping, enrichment APIs, and public data—so every conversation is personalized from the start.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Web Scraping
            </h3>
            <p className="text-gray-600 mb-4">
              Automatically scrapes company websites, news, social media, job postings, and tech blogs for real-time context.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Recent company announcements</li>
              <li>• Product launches & updates</li>
              <li>• Tech stack signals</li>
              <li>• Hiring patterns</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Company Intelligence
            </h3>
            <p className="text-gray-600 mb-4">
              Deep firmographic data, org charts, technology usage, and buying signals—all enriched before engagement.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Org structure & decision makers</li>
              <li>• Current tech stack</li>
              <li>• Budget & growth signals</li>
              <li>• Competitive landscape</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <User className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Visitor Research
            </h3>
            <p className="text-gray-600 mb-4">
              Real-time enrichment of website visitors with LinkedIn profiles, role context, and company pain points.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• LinkedIn background</li>
              <li>• Role & responsibilities</li>
              <li>• Recent activity</li>
              <li>• Intent signals</li>
            </ul>
          </motion.div>
        </div>

        {/* Value Proposition Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-disco-purple to-disco-blue rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-white mr-2" />
                <span className="text-white/90 font-semibold text-sm">Your Easy Wedge into GTM Teams</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Start with intelligence.
                <br />
                Expand to full automation.
              </h3>
              <p className="text-xl text-white/90 leading-relaxed">
                Offer prospect research as an instant value-add. Once teams see the quality of Disco's intelligence, they'll want the full AI sales motion.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-2 mt-1">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Real-Time Enrichment</div>
                    <div className="text-white/80 text-sm">Visitor lands → Disco instantly researches company, role, tech stack, and pain points</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-2 mt-1">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Contextual Conversations</div>
                    <div className="text-white/80 text-sm">AI uses research to ask smarter questions and show relevant demos</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-2 mt-1">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Higher Conversion</div>
                    <div className="text-white/80 text-sm">Personalized engagement = 3.1x more qualified meetings booked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

