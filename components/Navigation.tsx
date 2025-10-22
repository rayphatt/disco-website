'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className={`text-2xl font-bold ${isScrolled ? 'text-disco-dark' : 'text-white'}`}
        >
          Disco
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#platform"
            className={`${
              isScrolled
                ? 'text-gray-700 hover:text-disco-purple'
                : 'text-white/90 hover:text-white'
            } transition-colors font-medium`}
          >
            Platform
          </a>
          
          <a
            href="/intelligence"
            className={`${
              isScrolled
                ? 'text-gray-700 hover:text-disco-purple'
                : 'text-white/90 hover:text-white'
            } transition-colors font-medium`}
          >
            Intelligence
          </a>
          
          {/* Use Cases Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsUseCasesOpen(true)}
            onMouseLeave={() => setIsUseCasesOpen(false)}
          >
            <button
            className={`${
              isScrolled
                ? 'text-gray-700 hover:text-disco-purple'
                : 'text-white/90 hover:text-white'
              } transition-colors font-medium flex items-center gap-1`}
          >
            Use Cases
              <svg 
                className={`w-4 h-4 transition-transform ${isUseCasesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isUseCasesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[780px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Top Row: Quick Wins & Scale Sales */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                      {/* Quick Wins Section */}
                      <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Quick Wins</h3>
                        <div className="space-y-3">
                          <a href="/use-cases/instant-qualification" className="group block">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors mb-0.5">Instant qualification</h4>
                                <p className="text-xs text-gray-600">Qualify leads in 3 minutes with live AI conversations—not 3 days of back-and-forth</p>
                              </div>
                            </div>
                          </a>
                          
                          <a href="/use-cases/24-7-lead-capture" className="group block">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors mb-0.5">24/7 lead capture</h4>
                                <p className="text-xs text-gray-600">Never miss high-intent prospects because they reached out at 11pm on Saturday</p>
                              </div>
                            </div>
                          </a>
                          
                          <a href="/use-cases/immediate-meeting-booking" className="group block">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors mb-0.5">Immediate meeting booking</h4>
                                <p className="text-xs text-gray-600">Qualify and schedule in one conversation—route hot leads directly to your AEs</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Scale Sales Section */}
                      <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Scale Sales</h3>
                        <div className="space-y-3">
                          <a href="/use-cases/free-up-aes" className="group block">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors mb-0.5">Free up your AEs</h4>
                                <p className="text-xs text-gray-600">Top reps focus on enterprise deals while Disco handles qualification for everything else</p>
                              </div>
                            </div>
                          </a>
                          
                          <a href="/use-cases/10x-capacity" className="group block">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors mb-0.5">10x your capacity</h4>
                                <p className="text-xs text-gray-600">Run 1,000 qualification conversations simultaneously—impossible with humans</p>
                              </div>
                            </div>
                          </a>
                          
                          <a href="/use-cases/consistent-qualification" className="group block">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors mb-0.5">Consistent qualification</h4>
                                <p className="text-xs text-gray-600">Every lead gets the same expert-level questions in your exact sales framework</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Close Deals */}
                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Close Deals</h3>
                      <div className="grid grid-cols-3 gap-6">
                        <a href="/use-cases/interactive-demos" className="group block">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors mb-0.5">Interactive demos</h4>
                              <p className="text-xs text-gray-600">Walk prospects through your product with personalized demos based on their specific needs</p>
                            </div>
                          </div>
                        </a>
                        
                        <a href="/use-cases/custom-proposals" className="group block">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors mb-0.5">Generate custom proposals</h4>
                              <p className="text-xs text-gray-600">Deliver custom quotes and proposals on the spot—not days later</p>
                            </div>
                          </div>
                        </a>
                        
                        <a href="/use-cases/autonomous-closing" className="group block">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors mb-0.5">Autonomous closing</h4>
                              <p className="text-xs text-gray-600">Close deals under $50K end-to-end while your team sleeps—or routes high-value to AEs</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <button
            className={`${
              isScrolled
                ? 'text-gray-700 hover:text-disco-purple'
                : 'text-white/90 hover:text-white'
              } transition-colors font-medium flex items-center gap-1`}
            >
              Industries
              <svg 
                className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Industries Dropdown Menu */}
            <AnimatePresence>
              {isIndustriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[650px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Column 1 */}
                      <div className="space-y-4">
                        <a href="/industries/b2b-saas" className="group block">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 group-hover:text-disco-purple transition-colors mb-1">B2B SaaS</h4>
                              <p className="text-sm text-gray-600">Automate complex software sales with instant qualification</p>
                            </div>
                          </div>
                        </a>

                        <a href="/industries/marketing" className="group block">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 group-hover:text-disco-purple transition-colors mb-1">Marketing</h4>
                              <p className="text-sm text-gray-600">Convert campaigns into qualified pipeline instantly</p>
                            </div>
                          </div>
                        </a>

                        <a href="/industries/hr-tech" className="group block">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 group-hover:text-disco-purple transition-colors mb-1">HR Tech</h4>
                              <p className="text-sm text-gray-600">Instant qualification for recruiting and workforce software</p>
                            </div>
                          </div>
                        </a>
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-4">
                        <a href="/industries/cybersecurity" className="group block">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 group-hover:text-disco-purple transition-colors mb-1">Cybersecurity</h4>
                              <p className="text-sm text-gray-600">Handle technical security product conversations</p>
                            </div>
                          </div>
                        </a>

                        <a href="/industries/fintech" className="group block">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 group-hover:text-disco-purple transition-colors mb-1">Fintech</h4>
                              <p className="text-sm text-gray-600">Automate sales for banking, payments, and financial software</p>
                            </div>
                          </div>
                        </a>

                        <a href="/industries/data-analytics" className="group block">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 group-hover:text-disco-purple transition-colors mb-1">Data & Analytics</h4>
                              <p className="text-sm text-gray-600">Qualify enterprise data buyers with technical precision</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-disco-purple'
                  : 'text-white/90 hover:text-white'
              } transition-colors font-medium flex items-center gap-1`}
          >
            Resources
              <svg 
                className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Resources Dropdown Menu */}
            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-3">
                    <a 
                      href="/blog" 
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors">Blog</span>
                    </a>
                    <a 
                      href="/faq" 
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors">FAQ</span>
                    </a>
                    <a 
                      href="/feedback" 
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-900 group-hover:text-disco-purple transition-colors">Feedback</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href="#try-disco"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-disco-purple to-disco-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-shadow"
        >
          Try Disco Now
        </motion.a>
      </div>
    </motion.nav>
  )
}

