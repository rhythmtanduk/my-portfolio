import { Mail } from 'lucide-react'
import { profile } from '../data/data'

function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">About me</h1>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <img
          src={profile.photo}
          alt={profile.name}
          className="h-48 w-48 rounded-xl object-cover"
        />
        <div>
          <p className="leading-relaxed">{profile.about}</p>
          <p className="mt-4 flex items-center gap-2">
            <Mail size={18} /> {profile.email}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;