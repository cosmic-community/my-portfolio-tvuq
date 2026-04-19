import Link from 'next/link'
import { getProfile, getFeaturedProjects, getSkills } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'

export default async function HomePage() {
  const profile = await getProfile()
  const featuredProjects = await getFeaturedProjects()
  const allSkills = await getSkills()
  const topSkills = allSkills.slice(0, 8)

  return (
    <>
      <Hero profile={profile} />

      {featuredProjects.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-gray-400 text-lg">Some of my recent work</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-block px-8 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </section>
      )}

      {topSkills.length > 0 && (
        <section className="py-20 px-6 bg-dark-light/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="gradient-text">Skills</span>
              </h2>
              <p className="text-gray-400 text-lg">Technologies I work with</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/skills"
                className="inline-block px-8 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition"
              >
                View All Skills →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 glow-border">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Build</span> Something
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/50"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}