import EducationItem from '../components/EducationItem'
import { education } from '../data/data'

function Education() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Education</h1>
      {education.map((item) => (
        <EducationItem key={item.id} {...item} />
      ))}
    </section>
  )
}

export default Education;