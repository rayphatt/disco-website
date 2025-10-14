'use client'

import { motion } from 'framer-motion'

export default function SocialProof() {
  const logos = [
    'Acme Corp',
    'TechFlow',
    'DataSync',
    'CloudBase',
    'InnovateLabs',
    'ScalePro',
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-2xl font-semibold text-gray-900 mb-2">
            Trusted by forward-thinking sales teams
          </p>
          <p className="text-lg text-disco-purple font-bold">
            Disco handles 1,000+ sales conversations simultaneously while your AEs sleep
          </p>
        </motion.div>

      </div>
    </section>
  )
}

