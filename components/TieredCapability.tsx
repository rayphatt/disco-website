'use client'

import { motion } from 'framer-motion'
import { Target, GitBranch, Rocket, ArrowRight } from 'lucide-react'

export default function TieredCapability() {
  const tiers = [
    {
      icon: Target,
      title: 'Today: Top of Funnel',
      description: 'Start capturing value immediately',
      features: [
        'Instant lead qualification',
        'Meeting scheduling',
        'Basic discovery questions',
        'CRM data enrichment',
        'Email follow-ups',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: GitBranch,
      title: 'Tomorrow: Hybrid Sales',
      description: 'Let AI handle routine, humans close complex',
      features: [
        'Handle small deals autonomously',
        'Route enterprise to AEs',
        'Custom product demos',
        'Objection handling',
        'Pricing discussions',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Rocket,
      title: 'Future: Full Automation',
      description: 'Complete autonomous sales motion',
      features: [
        'End-to-end deal closure',
        'Contract negotiation',
        'Multi-stakeholder engagement',
        'Custom proposal generation',
        'Post-sale onboarding',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
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
            Start simple.
            <br />
            <span className="text-disco-purple">Scale to full automation.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-20"></div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all relative"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center mb-6`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {tier.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Badge */}
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Available Now
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

