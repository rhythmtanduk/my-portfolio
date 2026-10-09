import { GraduationCap, Calendar } from 'lucide-react'

function EducationItem({ title, place, year, detail }) {
  return (
    <div className="relative border-l-2 border-blue-600 pb-8 pl-6">
      <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-600" />
      <p className="flex items-center gap-1 text-sm text-blue-600">
        <Calendar size={14} /> {year}
      </p>
      <h3 className="mt-1 flex items-center gap-2 text-lg font-semibold">
        <GraduationCap size={20} /> {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400">{place}</p>
      <p className="mt-1 text-sm">{detail}</p>
    </div>
  )
}

export default EducationItem;