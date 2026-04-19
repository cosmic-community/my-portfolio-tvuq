'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text">
          &lt;DevPortfolio/&gt;
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition">Projects</Link>
          <Link href="/skills" className="text-gray-300 hover:text-white transition">Skills</Link>
          <Link href="/experience" className="text-gray-300 hover:text-white transition">Experience</Link>
          <Link href="/contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass mt-3 mx-6 rounded-2xl p-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/projects" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white">Projects</Link>
          <Link href="/skills" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white">Skills</Link>
          <Link href="/experience" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white">Experience</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      )}
    </nav>
  )
}