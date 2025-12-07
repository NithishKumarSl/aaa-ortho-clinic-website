import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TreatmentsSection from "@/components/treatments-section"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseSection from "@/components/why-choose-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <SmoothScroll />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
