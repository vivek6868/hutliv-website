'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import DashboardMockup from './DashboardMockup'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            {/* Logo and Brand Name */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                <Image
                  src="/hutliv-logo.png"
                  alt="Hutliv Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Hutliv
              </h1>
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700 mb-6">
              AI-Powered Tools for Growing Businesses
            </p>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We build simple, modern software that helps service businesses generate leads, manage operations, and grow revenue.
            </p>
          </div>

          {/* Product buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-16">
            <button
              onClick={() => scrollToSection('products')}
              className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Explore LeadBuddie
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="group px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30"
            >
              Explore Hutliv Pro
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-7xl mx-auto mt-8">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

