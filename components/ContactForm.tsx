'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed to send')
      
      setStatus('success')
      setMessage('Thanks! Your message has been sent successfully.')
      ;(e.target as HTMLFormElement).reset()
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-dark-light border border-gray-700 focus:border-primary focus:outline-none text-white transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-dark-light border border-gray-700 focus:border-primary focus:outline-none text-white transition"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-lg bg-dark-light border border-gray-700 focus:border-primary focus:outline-none text-white transition"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-dark-light border border-gray-700 focus:border-primary focus:outline-none text-white transition resize-none"
        />
      </div>
      
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      
      {message && (
        <div className={`p-4 rounded-lg text-center ${status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {message}
        </div>
      )}
    </form>
  )
}