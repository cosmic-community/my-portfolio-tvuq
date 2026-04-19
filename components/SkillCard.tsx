import { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function SkillCard({ skill }: { skill: Skill }) {
  const name = skill.metadata?.name || skill.title
  const icon = skill.metadata?.icon || '⚡'
  const proficiency = skill.metadata?.proficiency
  const years = skill.metadata?.years_experience

  const profValue = typeof proficiency === 'number' ? proficiency : parseInt(String(proficiency || '0'))
  const profPercent = profValue > 0 && profValue <= 100 ? profValue : profValue * 20

  return (
    <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 glow-border">
      <div className="text-4xl mb-3">{getMetafieldValue(icon)}</div>
      <h3 className="text-lg font-bold mb-2 text-white">{getMetafieldValue(name)}</h3>
      
      {profValue > 0 && (
        <div className="mb-2">
          <div className="h-2 bg-dark-light rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
              style={{ width: `${Math.min(profPercent, 100)}%` }}
            />
          </div>
        </div>
      )}
      
      {years && (
        <p className="text-sm text-gray-400">{years} {years === 1 ? 'year' : 'years'} experience</p>
      )}
    </div>
  )
}