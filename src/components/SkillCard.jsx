import { Code } from 'lucide-react'

function SkillCard({ name, level, description }) {
  return (
    <div className="rounded-xl border border-gray-200 p-5 shadow-sm dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold">
          <Code size={18} className="text-blue-600" /> {name}
        </h3>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="h-2 rounded-full bg-blue-600" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

export default SkillCard;