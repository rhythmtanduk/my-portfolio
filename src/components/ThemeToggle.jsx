import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  const toggle = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={toggle}
      className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeToggle;