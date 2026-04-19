'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Profile } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false })

export default function Hero({ profile }: { profile: Profile | null }) {
  const name = profile?.metadata?.full_name || 'Developer'
  const title = profile?.metadata?.title || 'Full Stack Developer'
  const tagline = profile?.metadata?.tagline || 'Building digital experiences with code and creativity'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ThreeScene />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark -z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full glass text-sm text-primary font-mono animate-fade-in">
          👋 Hello, I'm a developer
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="gradient-text">{getMetafieldValue(name)}</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl text-gray-300 mb-6 font-light">
          {getMetafieldValue(title)}
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          {getMetafieldValue(tagline)}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/50"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}