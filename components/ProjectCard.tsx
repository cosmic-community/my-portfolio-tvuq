import Link from 'next/link'
import { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProjectCard({ project }: { project: Project }) {
  const name = project.metadata?.name || project.title
  const description = project.metadata?.short_description || ''
  const image = project.metadata?.featured_image
  const techStack = project.metadata?.tech_stack || []

  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <div className="glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 glow-border h-full flex flex-col">
        {image && (
          <div className="aspect-video overflow-hidden bg-dark-light">
            <img
              src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={getMetafieldValue(name)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 gradient-text">{getMetafieldValue(name)}</h3>
          <p className="text-gray-400 mb-4 flex-1">{getMetafieldValue(description)}</p>
          
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {techStack.slice(0, 4).map((tech, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                  {tech}
                </span>
              ))}
              {techStack.length > 4 && (
                <span className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                  +{techStack.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}