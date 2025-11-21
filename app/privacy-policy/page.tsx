import Link from 'next/link'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block transition-colors">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hutliv Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: 21 November 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Hutliv ("we", "our", "us") operates digital software products including LeadBuddie and Hutliv Pro. 
              We are committed to protecting your privacy and ensuring that your personal data is handled safely and responsibly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              This Privacy Policy explains how we collect, use, and protect your information when you use our websites, 
              mobile applications, and services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">a. Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name</li>
                <li>Billing information</li>
                <li>User account information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">b. Usage Data</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Browser type</li>
                <li>IP address</li>
                <li>Device information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">c. Customer & Lead Data (for LeadBuddie and Hutliv Pro)</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Customer names</li>
                <li>Phone numbers</li>
                <li>Lead notes</li>
                <li>Jobs, quotes, invoices</li>
                <li>WhatsApp communication metadata (never message content unless explicitly provided)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your data to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our software</li>
                <li>Send automated WhatsApp messages (LeadBuddie)</li>
                <li>Manage CRM, jobs, and invoices (Hutliv Pro)</li>
                <li>Communicate with you regarding updates or support</li>
                <li>Maintain account security</li>
                <li>Comply with applicable laws</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                We never sell your personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share limited data with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>WhatsApp Cloud API (Meta Platforms)</li>
                <li>Payment gateways</li>
                <li>Hosting providers (Supabase, Vercel, AWS)</li>
                <li>Analytics tools</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do not share your data with advertisers or third parties for marketing without consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use industry-standard security practices, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Encrypted communication</li>
                <li>Secure cloud hosting</li>
                <li>Access controls</li>
                <li>Regular audits</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no digital service is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may request:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Access to your data</li>
                <li>Correction of errors</li>
                <li>Deletion of your account</li>
                <li>Export of your data</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Contact us at <a href="mailto:hello@hutliv.com" className="text-blue-600 hover:underline">hello@hutliv.com</a> for all privacy-related requests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for children under 16.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Continued use of our services indicates acceptance.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
