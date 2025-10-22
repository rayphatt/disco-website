import { ArrowRight, Zap, Target, Calendar, BarChart3, MessageSquare, Phone, Mail, ShieldCheck, CheckCircle2, TimerReset, Rocket, Sparkles, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'What is Disco? - One Pager',
  description: 'A concise overview of Disco: The AI Account Executive that qualifies, demos and books meetings autonomously.'
}

export default function WhatIsDisco() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 pt-20 pb-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-white mr-2" />
              <span className="text-white/90 text-sm font-medium">The AI Account Executive</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              What is <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Disco?</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              The AI Account Executive that researches every prospect, engages instantly, qualifies with perfect discovery,
              runs tailored demos, and books meetings — so your reps focus on 7‑figure deals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#try-disco" className="inline-flex items-center justify-center bg-white text-disco-purple px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all group">
                Try Disco Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:hello@disco.ai" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all">
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

{/* Workflow Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                From lead to qualified meeting in minutes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Automated workflow that handles the entire sales process
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: MessageSquare, label: 'Inbound lead', color: 'from-blue-500 to-blue-600', bg: 'from-blue-50 to-blue-100' },
                { icon: BarChart3, label: 'Intent detected', color: 'from-purple-500 to-purple-600', bg: 'from-purple-50 to-purple-100' },
                { icon: Target, label: 'Discovery run', color: 'from-indigo-500 to-indigo-600', bg: 'from-indigo-50 to-indigo-100' },
                { icon: Calendar, label: 'Demo scheduled', color: 'from-pink-500 to-pink-600', bg: 'from-pink-50 to-pink-100' },
                { icon: ArrowRight, label: 'AE handoff', color: 'from-green-500 to-green-600', bg: 'from-green-50 to-green-100' },
              ].map((s, i) => (
                <div key={i} className="relative group">
                  <div className={`bg-gradient-to-br ${s.bg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-white/50`}>
                    <div className={`bg-gradient-to-r ${s.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <s.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-lg font-bold text-gray-900 text-center block">{s.label}</span>
                  </div>
                  {i < 4 && (
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 hidden md:block">
                      <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
                        <ArrowRight className="w-5 h-5 text-gray-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Channels & Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Three AI Channels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Omnichannel AI that engages prospects wherever they are</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Voice AI</h3>
                  <p className="text-white/90 text-lg leading-relaxed">Natural phone conversations that qualify and convert</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Human-like voice interaction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Real-time objection handling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Complete call transcripts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Chat AI</h3>
                  <p className="text-white/90 text-lg leading-relaxed">Intelligent chat that engages visitors instantly</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Instant response to inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Context-aware conversations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Seamless AE handoff</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Email AI</h3>
                  <p className="text-white/90 text-lg leading-relaxed">Personalized email follow-ups that move deals forward</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Personalized outreach</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Multi-touch sequences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Meeting calendar integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Disco</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Enterprise-grade safety, rapid deployment, and guaranteed results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Safety</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Compliant, conversation monitoring, verified knowledge base, no hallucinations.</p>
            </div>
            
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <TimerReset className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Time to Value</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Live in under a week with prebuilt workflows, templates, and dedicated onboarding.</p>
            </div>
            
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guaranteed Outcomes</h3>
              <p className="text-gray-600 leading-relaxed text-lg">SLAs on response time, accuracy, and meeting quality. Built by former Carta sales leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to see Disco in action?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Talk to our AI right now or schedule a demo with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#try-disco" className="inline-flex items-center justify-center bg-white text-disco-purple px-12 py-6 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all group">
                Try Disco Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:hello@disco.ai" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-12 py-6 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all">
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}