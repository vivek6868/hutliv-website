export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              About Hutliv Technologies
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Hutliv Technologies is a modern software company focused on building practical, AI-powered tools that help small and medium service businesses grow.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We believe business software should be:
            </p>
            
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span className="text-lg text-gray-700">Simple</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span className="text-lg text-gray-700">Fast</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span className="text-lg text-gray-700">Useful</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span className="text-lg text-gray-700">Easy for teams to adopt</span>
              </li>
            </ul>

            <p className="text-xl text-gray-700 leading-relaxed">
              Our mission is to help real-world businesses—painters, interior designers, home-service providers, agencies, consultants—run better with powerful yet easy-to-use digital tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

