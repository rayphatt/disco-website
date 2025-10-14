'use client'

import { motion } from 'framer-motion'
import { Sparkles, Eye, BookOpen, CheckCircle } from 'lucide-react'

export default function EnterpriseSafety() {
  const features = [
    {
      icon: Sparkles,
      title: 'Continuously Learning',
      description: 'Gets smarter with every conversation, adapting to outperform top reps.',
    },
    {
      icon: Eye,
      title: 'Conversation Monitoring',
      description: 'Real-time oversight and quality assurance on every interaction',
    },
    {
      icon: BookOpen,
      title: 'Verified Knowledge Base',
      description: 'AI only shares approved, accurate company information',
    },
    {
      icon: CheckCircle,
      title: 'No Hallucinations',
      description: 'Guardrails prevent false information and off-brand responses',
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built for teams that
            <br />
            <span className="text-disco-purple">can't afford mistakes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-disco-purple" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

