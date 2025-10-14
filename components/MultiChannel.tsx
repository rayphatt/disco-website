'use client'

import { motion } from 'framer-motion'
import { Phone, MessageSquare, Mail, Check } from 'lucide-react'

export default function MultiChannel() {
  const channels = [
    {
      icon: Phone,
      title: 'Voice AI',
      description: 'Natural phone conversations that qualify and convert',
      features: [
        'Human-like voice interaction',
        'Real-time objection handling',
        'Instant meeting scheduling',
        'Complete call transcripts',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MessageSquare,
      title: 'Chat AI',
      description: 'Intelligent chat that engages visitors instantly',
      features: [
        'Instant response to inquiries',
        'Context-aware conversations',
        'Product recommendations',
        'Seamless AE handoff',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Mail,
      title: 'Email AI',
      description: 'Personalized email follow-ups that actually move deals forward',
      features: [
        'Personalized outreach',
        'Multi-touch sequences',
        'Auto-reply to questions',
        'Meeting calendar integration',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <section className="py-24 bg-white" id="platform">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet prospects wherever they are.
            <br />
            <span className="text-disco-purple">Convert them instantly.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Icon header */}
              <div className={`bg-gradient-to-r ${channel.color} p-6`}>
                <channel.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {channel.title}
                </h3>
                <p className="text-white/90">
                  {channel.description}
                </p>
              </div>

              {/* Features list */}
              <div className="p-6">
                <ul className="space-y-3">
                  {channel.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

