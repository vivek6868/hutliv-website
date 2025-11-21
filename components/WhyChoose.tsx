import { Users, Sparkles, Zap, Headphones } from 'lucide-react'

export default function WhyChoose() {
  const features = [
    {
      icon: Users,
      title: 'Built for real SMEs',
      description: 'Designed specifically for small and medium businesses, not enterprise software scaled down.',
    },
    {
      icon: Sparkles,
      title: 'Clean, simple UI',
      description: 'Intuitive interfaces that your team will actually want to use, without the learning curve.',
    },
    {
      icon: Zap,
      title: 'Smart automation with AI',
      description: 'Leverage AI to automate repetitive tasks and focus on what matters—growing your business.',
    },
    {
      icon: Headphones,
      title: 'Fast, friendly support',
      description: 'Get help when you need it from a team that understands your business challenges.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Choose Hutliv
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-gray-200">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

