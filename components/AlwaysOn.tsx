'use client'

import { motion } from 'framer-motion'
import { Zap, Target, ArrowRightLeft } from 'lucide-react'

export default function AlwaysOn() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Engagement',
      description: 'Respond to every prospect in under 3 seconds. No lead ever waits. No opportunity ever goes cold.',
      stats: '<3s response time',
    },
    {
      icon: Target,
      title: 'Perfect Qualification',
      description: 'Ask the right questions every time. Collect complete information. Score leads with ML precision.',
      stats: '100% consistency',
    },
    {
      icon: ArrowRightLeft,
      title: 'Complete Context Handoff',
      description: 'Every conversation logged in your CRM. Full transcripts and summaries. Your AE knows everything before the call.',
      stats: 'Zero information loss',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-indigo-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            While your team sleeps,
            <br />
            <span className="text-purple-400">Disco sells</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="text-purple-400 font-semibold text-lg">
                {feature.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CRM mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
        >
          <div className="text-sm text-purple-300 font-semibold mb-4">CRM ENRICHMENT</div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-xs text-gray-400 mb-2">INTENT SCORE</div>
              <div className="text-3xl font-bold text-green-400">94/100</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-xs text-gray-400 mb-2">PAIN POINTS</div>
              <div className="text-sm text-white">Scaling, Cost, Speed</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-xs text-gray-400 mb-2">NEXT ACTION</div>
              <div className="text-sm text-white">Demo scheduled 2PM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

