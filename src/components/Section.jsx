import { Link } from 'react-router'
import { ArrowRight, Mail } from 'lucide-react'

function Section({ name, title, tagline, photo }) {
  return (
    <section className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 md:flex-row md:py-24">
      <div className="text-center md:w-1/2 md:text-left">
        <p className="font-medium text-blue-600">Hello, I'm</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{name}</h1>
        <h2 className="mt-2 text-xl text-gray-500 dark:text-gray-400">{title}</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{tagline}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
          >
            View projects <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-blue-600 px-5 py-2.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800"
          >
            <Mail size={18} /> Contact me
          </Link>
        </div>
      </div>

      <div className="flex justify-center md:w-1/2">
        <img
          src={photo}
          alt={name}
          className="h-56 w-56 rounded-full object-cover shadow-lg md:h-72 md:w-72"
        />
      </div>
    </section>
  )
}

export default Section;