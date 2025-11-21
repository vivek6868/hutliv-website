'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're here to help with product enquiries, support, partnerships, and onboarding.
            </p>
            <div className="flex flex-col items-center gap-4 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📧</span>
                <a href="mailto:hello@hutliv.com" className="text-lg font-medium text-blue-600 hover:text-blue-700 hover:underline">
                  hello@hutliv.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                <a href="https://www.hutliv.com" className="text-lg font-medium text-blue-600 hover:text-blue-700 hover:underline">
                  www.hutliv.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="text-lg">India (Remote-first)</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              We typically respond within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 sm:p-12">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center bg-blue-50 w-16 h-16 rounded-full mb-4 border border-blue-100">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <a 
                href="mailto:hello@hutliv.com" 
                className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                hello@hutliv.com
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none placeholder:text-gray-400"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/25"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

