import SkillCard from '../components/SkillCard'
import { skills } from '../data/data'

function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">My skills</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills;