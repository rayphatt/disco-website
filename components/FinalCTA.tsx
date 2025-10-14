'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden" id="try-disco">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            See Disco in action.
            <br />
            <span className="text-purple-300">Talk to our AI right now.</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Experience the future of sales. Try our AI or schedule a personalized demo with our team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-white text-disco-purple px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl transition-all group"
          >
            Try Disco Instantly
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="#book-demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
          >
            <Calendar className="mr-2" />
            Talk to Our Team
          </motion.a>
        </motion.div>

        {/* Trust elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-white/80">
              <span className="font-semibold">Built by former Carta sales leaders</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="text-white/80">
              <span className="font-semibold">6+ years qualifying 10,000+ deals.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

