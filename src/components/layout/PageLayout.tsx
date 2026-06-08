import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface PageLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="noise text-white min-h-screen flex flex-col relative overflow-hidden bg-dark-900">
      {/* Ambient background orbs */}
      <div className="orb w-[600px] h-[600px] bg-brand-600/10 top-[-200px] left-[-100px] animate-float"></div>
      <div className="orb w-[400px] h-[400px] bg-brand-500/6 top-[40%] right-[-150px] animate-float2"></div>
      <div className="orb w-[300px] h-[300px] bg-purple-700/8 bottom-[-100px] left-[30%] animate-pulse-slow"></div>

      <Header />
      
      <main className="flex-1 relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 text-glow">
              {title}
            </h1>
            {subtitle && (
              <p className="text-white/60 text-lg font-body">
                {subtitle}
              </p>
            )}
          </div>
          
          <div className="bg-dark-700/30 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm animate-fadeIn">
            <div className="prose prose-invert max-w-none font-body text-white/70 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
