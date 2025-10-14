'use client'

import { useState } from 'react'

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    feedbackType: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (would integrate with backend/API)
    console.log('Feedback submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        feedbackType: 'general',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-disco-purple via-purple-700 to-indigo-800 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              We Value Your Feedback
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Help us improve Disco. Share your thoughts, suggestions, or report issues.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Types */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">💡</div>
                <div className="font-semibold text-gray-900 mb-1">Feature Request</div>
                <div className="text-sm text-gray-600">Suggest new capabilities</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🐛</div>
                <div className="font-semibold text-gray-900 mb-1">Bug Report</div>
                <div className="text-sm text-gray-600">Report technical issues</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">⭐</div>
                <div className="font-semibold text-gray-900 mb-1">General Feedback</div>
                <div className="text-sm text-gray-600">Share your experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🎨</div>
                <div className="font-semibold text-gray-900 mb-1">UI/UX</div>
                <div className="text-sm text-gray-600">Design improvements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Thank you for your feedback!
                </h2>
                <p className="text-lg text-gray-600">
                  We've received your message and will review it shortly. Your input helps us make Disco better.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-disco-purple focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-disco-purple focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-disco-purple focus:border-transparent"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="feedbackType" className="block text-sm font-semibold text-gray-900 mb-2">
                      Feedback Type *
                    </label>
                    <select
                      id="feedbackType"
                      name="feedbackType"
                      required
                      value={formData.feedbackType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-disco-purple focus:border-transparent"
                    >
                      <option value="general">General Feedback</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                      <option value="ui">UI/UX Improvement</option>
                      <option value="performance">Performance Issue</option>
                      <option value="documentation">Documentation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={8}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-disco-purple focus:border-transparent resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Please be as detailed as possible. Screenshots and examples are helpful!
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-disco-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
                  >
                    Submit Feedback
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Feedback */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Recent Feature Releases
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              See what we've built based on your feedback
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-2xl">✅</div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    SHIPPED
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Multi-language Support</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Now available in 95+ languages for global coverage
                </p>
                {/* Removed requested by users */}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-2xl">✅</div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    SHIPPED
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Custom Workflows</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Build complex qualification flows with our visual builder
                </p>
                {/* Removed requested by users */}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-2xl">🚀</div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    IN PROGRESS
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Voice AI</h3>
                <p className="text-sm text-gray-600 mb-3">
                  AI-powered phone conversations for inbound calls
                </p>
                {/* Removed requested by users */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-disco-purple to-disco-blue rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Prefer to talk to a human?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Our team is always here to help. Reach out and we'll respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@disco.ai"
                  className="bg-white text-disco-purple px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Email Us
                </a>
                <a
                  href="#chat"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

