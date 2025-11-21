import Link from 'next/link'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block transition-colors">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last Updated: 21 November 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              By accessing or using Hutliv's websites, products, or services (LeadBuddie, Hutliv Pro), you agree to these Terms & Conditions.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>"Services"</strong>: LeadBuddie, Hutliv Pro, websites, apps</li>
                <li><strong>"User"</strong>: Any person using our services</li>
                <li><strong>"Content"</strong>: Data, leads, messages, files stored in the system</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide accurate information</li>
                <li>Use the service for lawful business purposes</li>
                <li>Not misuse WhatsApp API or spam customers</li>
                <li>Follow all applicable laws</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We may suspend your account if misuse is detected.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Billing & Payments</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If applicable:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Subscription fees must be paid on time</li>
                <li>Refunds follow our refund policy (if any)</li>
                <li>We may change pricing with prior notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Data & Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your customer data</li>
                <li>Ensuring WhatsApp messaging compliance</li>
                <li>Obtaining consent from customers before messaging them</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hutliv is not liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Loss of data</li>
                <li>Downtime</li>
                <li>Indirect or incidental damages</li>
                <li>WhatsApp API restrictions or delays</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate service if:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Terms are violated</li>
                <li>Payment is not made</li>
                <li>Illegal or abusive activity is detected</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You may request account deletion anytime.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by the laws of India.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
