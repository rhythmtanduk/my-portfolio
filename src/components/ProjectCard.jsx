import { ExternalLink } from 'lucide-react'

function ProjectCard({ title, category, description, image, tech, link }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-sm transition hover:shadow-lg dark:border-gray-700">
      <img src={image} alt={title} className="h-44 w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
          {category}
        </span>
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">
              {t}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-blue-600 hover:underline"
          >
            View project <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard;