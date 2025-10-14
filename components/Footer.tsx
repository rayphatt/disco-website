'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, BadgeCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + badges */}
          <div className="col-span-2">
            <div className="text-2xl font-extrabold text-disco-dark mb-2">Disco</div>
            <p className="text-gray-600">The AI Account Executive</p>
          </div>

          {/* Platform */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-4">Platform</div>
            <ul className="space-y-3 text-gray-600">
              <li><a className="hover:text-disco-purple" href="#platform">Voice AI</a></li>
              <li><a className="hover:text-disco-purple" href="#platform">Email AI</a></li>
              <li><a className="hover:text-disco-purple" href="#platform">Chat AI</a></li>
              <li><a className="hover:text-disco-purple" href="#platform">Disco Platform</a></li>
              <li><a className="hover:text-disco-purple" href="#platform">Lead Enrichment</a></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-4">Use Cases</div>
            <ul className="space-y-3 text-gray-600">
              <li><a className="hover:text-disco-purple" href="/use-cases/instant-qualification">Increase website MQLs</a></li>
              <li><a className="hover:text-disco-purple" href="/use-cases/inbound-sdr-automation">Inbound SDR automation</a></li>
              <li><a className="hover:text-disco-purple" href="/use-cases/immediate-meeting-booking">Immediate meeting booking</a></li>
              <li><a className="hover:text-disco-purple" href="/use-cases/interactive-demos">Interactive demos</a></li>
              <li><a className="hover:text-disco-purple" href="/use-cases/10x-capacity">10x team capacity</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-4">Resources</div>
            <ul className="space-y-3 text-gray-600">
              <li><a className="hover:text-disco-purple" href="/blog">Blog</a></li>
              <li><a className="hover:text-disco-purple" href="/faq">FAQ</a></li>
              <li><a className="hover:text-disco-purple" href="/feedback">Contact</a></li>
              <li><a className="hover:text-disco-purple" href="#try-disco">Try Disco</a></li>
              <li><a className="hover:text-disco-purple" href="/what-is-disco">What is Disco?</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Disco, Inc. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-disco-purple">Privacy policy</a>
            <a href="#" className="hover:text-disco-purple">Terms of service</a>
            <a href="#" className="hover:text-disco-purple">Security & Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


