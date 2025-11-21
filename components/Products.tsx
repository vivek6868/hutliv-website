'use client'

import { MessageSquare, Paintbrush, ArrowRight, Globe, MapPin } from 'lucide-react'

export default function Products() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const products = [
    {
      name: 'LeadBuddie',
      label: 'AI Lead Generation & WhatsApp Automation',
      description: 'LeadBuddie is designed for businesses that want more enquiries, more conversions, and better follow-ups.',
      features: [
        'Capture leads from multiple channels',
        'Score and prioritize hot leads',
        'Automate WhatsApp follow-ups',
        'Send reminders, templates, and AI-driven responses',
        'Never miss a high-value lead again',
      ],
      perfectFor: 'Perfect for: service businesses, agencies, contractors, freelancers worldwide.',
      availability: 'International',
      availabilityIcon: Globe,
      icon: MessageSquare,
      link: '#leadbuddie',
      accentColor: 'sky-400',
      buttonBg: 'bg-sky-400',
      buttonHover: 'hover:bg-sky-300',
      buttonText: 'text-slate-950',
    },
    {
      name: 'Hutliv Pro',
      label: 'CRM & Operations Tool for Paint and Interior Businesses',
      description: 'Hutliv Pro helps home-service businesses manage their entire operations in one place.',
      features: [
        'Customer management',
        'Quotes & estimates',
        'Project tracking',
        'Job-stage updates',
        'Worker assignments',
        'Invoices & payments',
        'Reports & analytics',
      ],
      perfectFor: 'Built for: Painters, Interior designers, Renovation companies, Contractors, Home-service providers in India',
      availability: 'India',
      availabilityIcon: MapPin,
      icon: Paintbrush,
      link: '#hutlivpro',
      accentColor: 'green-500',
      buttonBg: 'bg-green-500',
      buttonHover: 'hover:bg-green-400',
      buttonText: 'text-white',
    },
  ]

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed to help your business thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              const AvailabilityIcon = product.availabilityIcon
              const iconColorClass = product.accentColor === 'sky-400' ? 'text-blue-600' : 'text-emerald-600'
              const iconBgClass = product.accentColor === 'sky-400' ? 'bg-blue-50 border-blue-100' : 'bg-emerald-50 border-emerald-100'
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-start mb-6">
                    <div className={`${iconBgClass} p-3 rounded-lg mr-4 border transition-colors`}>
                      <Icon className={`w-6 h-6 ${iconColorClass}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                        {product.availability && AvailabilityIcon && (
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                            product.availability === 'International' 
                              ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                              : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                          }`}>
                            <AvailabilityIcon className="w-3 h-3" />
                            {product.availability}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{product.label}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      It helps you:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-700">
                          <span className="text-gray-400 mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {product.perfectFor && (
                    <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-700">{product.perfectFor}</p>
                    </div>
                  )}

                  <button
                    onClick={() => scrollToSection(product.link.replace('#', ''))}
                    className={`w-full py-3 ${product.accentColor === 'sky-400' ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25' : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/25'} rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group/btn`}
                  >
                    Learn more about {product.name}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

