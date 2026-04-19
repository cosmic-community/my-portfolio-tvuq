import { getSkills } from '@/lib/cosmic'
import SkillCard from '@/components/SkillCard'
import { getMetafieldValue } from '@/lib/cosmic'
import { Skill } from '@/types'

export default async function SkillsPage() {
  const skills = await getSkills()

  const grouped: Record<string, Skill[]> = {}
  skills.forEach((skill) => {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!grouped[category]) {
      grouped[category] = []
    }
    grouped[category].push(skill)
  })

  const categories = Object.keys(grouped)

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies, tools, and languages I've mastered along the way
          </p>
        </div>

        {skills.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No skills added yet.
          </div>
        ) : (
          <div className="space-y-12">
            {categories.map((category) => {
              const categorySkills = grouped[category]
              if (!categorySkills || categorySkills.length === 0) return null

              return (
                <div key={category}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                    {category}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categorySkills.map((skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}