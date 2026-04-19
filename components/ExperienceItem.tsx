import { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ExperienceItem({ experience }: { experience: WorkExperience }) {
  const company = experience.metadata?.company || experience.title
  const position = experience.metadata?.position || ''
  const description = experience.metadata?.description || ''
  const logo = experience.metadata?.logo
  const location = experience.metadata?.location || ''
  const startDate = experience.metadata?.start_date
  const endDate = experience.metadata?.end_date
  const current = experience.metadata?.current

  const formatDate = (date: string) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  return (
    <div className="glass rounded-2xl p-6 md:p-8 hover:scale-[1.01] transition-all duration-300 glow-border">
      <div className="flex flex-col md:flex-row gap-6">
        {logo && (
          <div className="flex-shrink-0">
            <img
              src={`${logo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
              alt={getMetafieldValue(company)}
              className="w-20 h-20 rounded-xl object-cover bg-white p-2"
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
            <div>
              <h3 className="text-2xl font-bold gradient-text">{getMetafieldValue(position)}</h3>
              <p className="text-lg text-white font-medium">{getMetafieldValue(company)}</p>
              {location && <p className="text-sm text-gray-400">📍 {getMetafieldValue(location)}</p>}
            </div>
            
            <div className="text-sm text-gray-400 font-mono whitespace-nowrap">
              {startDate && formatDate(startDate)} - {current ? 'Present' : (endDate ? formatDate(endDate) : 'Present')}
              {current && (
                <span className="ml-2 inline-block px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                  Current
                </span>
              )}
            </div>
          </div>
          
          {description && (
            <p className="text-gray-300 mt-3 whitespace-pre-line">{getMetafieldValue(description)}</p>
          )}
        </div>
      </div>
    </div>
  )
}