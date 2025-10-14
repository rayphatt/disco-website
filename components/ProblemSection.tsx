'use client'

import { motion } from 'framer-motion'
import { Clock, XCircle, Users, AlertTriangle } from 'lucide-react'

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      stat: '70%',
      title: 'wasted time',
      description: 'Your best AEs stuck on low-value prospects',
    },
    {
      icon: XCircle,
      stat: 'Deals die',
      title: 'waiting',
      description: 'By the time you respond, they\'ve moved on',
    },
    {
      icon: Users,
      stat: 'Can\'t scale',
      title: 'meetings',
      description: 'Limited by human capacity and timezones',
    },
    {
      icon: AlertTriangle,
      stat: 'Inconsistent',
      title: 'qualification',
      description: 'Every rep asks different questions',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Your prospects expect instant answers.
            <br />
            <span className="text-purple-400">Your sales team can't scale.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all"
            >
              <problem.icon className="w-12 h-12 text-purple-400 mb-4" />
              <div className="mb-3">
                <span className="text-3xl font-bold text-white">{problem.stat}</span>
                <span className="text-3xl font-bold text-purple-400 ml-2">{problem.title}</span>
              </div>
              <p className="text-gray-300 text-lg">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

