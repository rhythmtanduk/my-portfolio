import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { profile, projects } from '../data/data'

function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      <Section
        name={profile.name}
        title={profile.title}
        tagline={profile.tagline}
        photo={profile.photo}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold">Featured projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-1 text-blue-600 hover:underline"
        >
          See all projects <ArrowRight size={16} />
        </Link>
      </section>
    </>
  )
}

export default Home;