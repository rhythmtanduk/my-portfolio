import { Mail } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import { profile } from '../data/data'

function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">Contact me</h1>
      <p className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <Mail size={18} /> {profile.email}
      </p>
      <ContactForm />
    </section>
  )
}

export default Contact;