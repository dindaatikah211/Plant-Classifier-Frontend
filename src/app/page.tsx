import VideoBackground from '@/components/landing/VideoBackground'
import Navbar from '@/components/landing/Navbar'
import HeroSection from '@/components/landing/HeroSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import StatsSection from '@/components/landing/StatsSection'
import CTASection from '@/components/landing/CTASection'
import Footer from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="relative min-h-screen">
        <VideoBackground />
        <Navbar />
        <HeroSection />
      </div>
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  )
}