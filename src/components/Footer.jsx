import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/data'

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 dark:border-gray-700">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          {profile.socials.map((s) => {
            const Icon = socialIcons[s.label]
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600"
              >
                {Icon && <Icon />} {s.label}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer;