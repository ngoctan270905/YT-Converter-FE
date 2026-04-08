import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { HeroSection } from '../components/home/HeroSection'
import { FeaturesSection } from '../components/home/FeaturesSection'
import { ServiceDescription } from '../components/home/ServiceDescription'

export default function HomePage() {
  return (
    <div className="noise text-white min-h-screen flex flex-col relative overflow-hidden bg-dark-900">
      {/* Ambient background orbs */}
      <div className="orb w-[600px] h-[600px] bg-brand-600/10 top-[-200px] left-[-100px] animate-float"></div>
      <div className="orb w-[400px] h-[400px] bg-brand-500/6 top-[40%] right-[-150px] animate-float2"></div>
      <div className="orb w-[300px] h-[300px] bg-purple-700/8 bottom-[-100px] left-[30%] animate-pulse-slow"></div>

      <Header />
      
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <ServiceDescription />
      </main>

      <Footer />
    </div>
  )
}
