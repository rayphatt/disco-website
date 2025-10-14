import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | AI Sales Insights & Best Practices - Disco',
  description: 'Learn about AI-powered sales automation, best practices for lead qualification, and strategies to scale your revenue with Disco.',
  keywords: 'AI sales blog, sales automation, lead qualification, sales best practices, AI sales tips',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-disco-purple via-purple-700 to-indigo-800 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Disco Blog
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Insights, strategies, and best practices for scaling revenue with AI-powered sales automation.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-100 rounded-3xl p-16 opacity-50">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-4xl font-bold text-gray-400 mb-4">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-400">
                We're working on bringing you valuable insights and best practices. 
                <br />
                Check back soon for our latest articles on AI sales automation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

