'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            >
              The AI Account Executive
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed"
            >
              Enterprise-grade voice, chat, and email AI that instantly qualifies, demos, and closes deals—so reps can focus on 7-figure deals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#try-disco"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white text-disco-purple px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-shadow group"
              >
                Try Disco Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#book-demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                <PlayCircle className="mr-2" />
                Book a Demo
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative animate-float">
              {/* Mockup placeholder - representing before/after sales process */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {/* Traditional */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-red-300 mb-4">Traditional</div>
                    <div className="bg-red-500/20 rounded p-3 text-xs text-white">⏰ 24-48hr response</div>
                    <div className="bg-red-500/20 rounded p-3 text-xs text-white">👥 Limited by team size</div>
                    <div className="bg-red-500/20 rounded p-3 text-xs text-white">🌙 Business hours only</div>
                    <div className="bg-red-500/20 rounded p-3 text-xs text-white">❌ Inconsistent quality</div>
                  </div>
                  
                  {/* With Disco */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-green-300 mb-4">With Disco</div>
                    <div className="bg-green-500/20 rounded p-3 text-xs text-white">⚡ Instant response</div>
                    <div className="bg-green-500/20 rounded p-3 text-xs text-white">🚀 Infinite scale</div>
                    <div className="bg-green-500/20 rounded p-3 text-xs text-white">🌍 24/7/365</div>
                    <div className="bg-green-500/20 rounded p-3 text-xs text-white">✅ Perfect every time</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

