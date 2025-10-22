'use client'

import { motion } from 'framer-motion'

export default function Integrations() {
  const integrations = [
    'Salesforce',
    'HubSpot',
    'Gong',
    'Cal.com',
    'Chili Piper',
    'Slack',
    'Zoom',
    'Microsoft Teams',
    'Outreach',
    'Apollo',
    'ZoomInfo',
    'Clearbit',
    'Sumble',
    'LinkedIn',
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
            Works with your
            <br />
            <span className="text-disco-purple">existing stack</span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Seamless integrations with the tools you already use
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-50 rounded-xl p-6 flex items-center justify-center border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
            >
              <span className="text-gray-700 font-semibold text-center">
                {integration}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Need a custom integration?{' '}
            <a href="#contact" className="text-disco-purple font-semibold hover:text-disco-blue transition-colors">
              Let's talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

