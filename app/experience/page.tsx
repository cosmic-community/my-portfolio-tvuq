import { getWorkExperience } from '@/lib/cosmic'
import ExperienceItem from '@/components/ExperienceItem'

export default async function ExperiencePage() {
  const experiences = await getWorkExperience()

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the amazing teams I've worked with
          </p>
        </div>

        {experiences.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No experience added yet.
          </div>
        ) : (
          <div className="space-y-6">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}