'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react'

export default function CaseStudy() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '3.1x',
      label: 'increase in qualified meetings booked',
      color: 'text-green-600',
    },
    {
      icon: DollarSign,
      value: '10%',
      label: 'cost of traditional SDR team',
      color: 'text-blue-600',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'availability across all timezones',
      color: 'text-purple-600',
    },
  ]

  return (
    <section className="py-24 bg-white" id="case-studies">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-purple-100 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Quote */}
            <div>
              <div className="mb-6">
                <div className="text-6xl font-bold text-gray-300 mb-4">"</div>
                <p className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-relaxed">
                  I've qualified 10,000+ leads and watched hundreds of deals die stuck in rigid processes.
                </p>
              </div>
              
              <div>
                <div className="font-semibold text-gray-900">Unicorn B2B Saas</div>
              </div>

              <motion.a
                href="#full-case-study"
                whileHover={{ x: 5 }}
                className="inline-flex items-center mt-8 text-disco-purple font-semibold hover:text-disco-blue transition-colors"
              >
                See Use Cases
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>

            {/* Right side - Metrics */}
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gray-50`}>
                      <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    </div>
                    <div>
                      <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                        {metric.value}
                      </div>
                      <p className="text-gray-600">{metric.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

