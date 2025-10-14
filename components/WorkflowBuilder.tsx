'use client'

import { motion } from 'framer-motion'
import { UserPlus, Zap, MessageCircle, Target, Search, Presentation, DollarSign, Calendar, CheckCircle, ArrowDown, ArrowRight } from 'lucide-react'

export default function WorkflowBuilder() {
  const steps = [
    { icon: UserPlus, title: 'Prospect arrives', color: 'from-blue-500 to-blue-600' },
    { icon: Zap, title: 'Disco engages instantly', color: 'from-purple-500 to-purple-600' },
    { icon: MessageCircle, title: 'Ask: "What\'s your biggest challenge?"', color: 'from-indigo-500 to-indigo-600' },
    { icon: Target, title: 'High intent detected', color: 'from-pink-500 to-pink-600' },
    { icon: Search, title: 'Run discovery questions', color: 'from-purple-500 to-purple-600' },
    { icon: Presentation, title: 'Show custom demo', color: 'from-blue-500 to-blue-600' },
  ]

  const outcomes = [
    { icon: Calendar, title: 'Schedule with AE', color: 'from-orange-500 to-orange-600' },
    { icon: CheckCircle, title: 'Close deal autonomously', color: 'from-emerald-500 to-emerald-600' },
  ]

  return (
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
            From lead to qualified meeting
            <br />
            <span className="text-disco-purple">in minutes, not days</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main flow */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex-shrink-0 w-full bg-gradient-to-r ${step.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xl font-semibold text-white">{step.title}</span>
                    </div>
                  </motion.div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Split path indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center py-4"
            >
              <div className="flex gap-4">
                <ArrowDown className="w-6 h-6 text-gray-400" />
                <ArrowDown className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>

            {/* Outcomes */}
            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-r ${outcome.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <outcome.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-xl font-semibold text-white">{outcome.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

