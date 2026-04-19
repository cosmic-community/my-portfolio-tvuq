import { getProfile } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import ContactForm from '@/components/ContactForm'

export default async function ContactPage() {
  const profile = await getProfile()
  const email = profile?.metadata?.email
  const location = profile?.metadata?.location
  const github = profile?.metadata?.github
  const linkedin = profile?.metadata?.linkedin
  const twitter = profile?.metadata?.twitter

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Send me a message!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">Contact Info</h3>
              
              {email && (
                <a href={`mailto:${email}`} className="flex items-center gap-3 text-gray-300 hover:text-white mb-3 transition">
                  <span className="text-2xl">📧</span>
                  <span className="text-sm break-all">{getMetafieldValue(email)}</span>
                </a>
              )}
              
              {location && (
                <div className="flex items-center gap-3 text-gray-300 mb-3">
                  <span className="text-2xl">📍</span>
                  <span>{getMetafieldValue(location)}</span>
                </div>
              )}
            </div>

            {(github || linkedin || twitter) && (
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 gradient-text">Follow Me</h3>
                <div className="space-y-3">
                  {github && (
                    <a href={getMetafieldValue(github)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                      <span className="text-2xl">💻</span>
                      <span>GitHub</span>
                    </a>
                  )}
                  {linkedin && (
                    <a href={getMetafieldValue(linkedin)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                      <span className="text-2xl">💼</span>
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {twitter && (
                    <a href={getMetafieldValue(twitter)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                      <span className="text-2xl">🐦</span>
                      <span>Twitter</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}