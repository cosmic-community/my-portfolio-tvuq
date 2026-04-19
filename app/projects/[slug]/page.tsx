// app/projects/[slug]/page.tsx
import { getProject } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const name = project.metadata?.name || project.title
  const description = project.metadata?.description || ''
  const shortDesc = project.metadata?.short_description || ''
  const image = project.metadata?.featured_image
  const screenshots = project.metadata?.screenshots || []
  const techStack = project.metadata?.tech_stack || []
  const liveUrl = project.metadata?.live_url
  const githubUrl = project.metadata?.github_url

  return (
    <article className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition">
          ← Back to Projects
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
          {getMetafieldValue(name)}
        </h1>

        {shortDesc && (
          <p className="text-xl text-gray-400 mb-8">{getMetafieldValue(shortDesc)}</p>
        )}

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4 mb-10">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:scale-105 transition"
            >
              🌐 View Live Site
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition"
            >
              💻 View Source Code
            </a>
          )}
        </div>

        {image && (
          <div className="rounded-2xl overflow-hidden mb-10 glow-border">
            <img
              src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={getMetafieldValue(name)}
              className="w-full"
            />
          </div>
        )}

        {description && (
          <div className="glass rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white">About This Project</h2>
            <div className="text-gray-300 whitespace-pre-line leading-relaxed">
              {getMetafieldValue(description)}
            </div>
          </div>
        )}

        {screenshots.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {screenshots.map((shot, i) => (
                <div key={i} className="rounded-2xl overflow-hidden glass">
                  <img
                    src={`${shot.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
                    alt={`Screenshot ${i + 1}`}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}