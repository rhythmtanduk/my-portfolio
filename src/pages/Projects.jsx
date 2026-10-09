import { useState } from 'react'
import { Search } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/data'

function Projects() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  // 'All' plus every unique category found in the data
  const categories = ['All', ...new Set(projects.map((p) => p.category))]

  const filtered = projects.filter((p) => {
    const matchCategory = category === 'All' || p.category === category
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">My projects</h1>

      <div className="relative mb-4 sm:w-72">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search projects"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-transparent py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`cursor-pointer rounded-full px-4 py-1.5 text-sm ${
              category === c
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No projects match your search. Try another word or category.</p>
      )}
    </section>
  )
}

export default Projects;