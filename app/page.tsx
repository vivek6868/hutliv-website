import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import WhyChoose from '@/components/WhyChoose'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Products />
      <WhyChoose />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}

