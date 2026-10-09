import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

function ErrorText({ text }) {
  return (
    <p className="mt-1 flex items-center gap-1 text-sm text-red-500">
      <AlertCircle size={14} /> {text}
    </p>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Enter a valid email address'
    if (form.message.trim().length < 10) newErrors.message = 'Write at least 10 characters'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Form data:', form)
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    } else {
      setSubmitted(false)
    }
  }

  const inputClass =
    'w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted && (
        <p className="flex items-center gap-2 rounded-md bg-green-100 p-3 text-green-700">
          <CheckCircle size={18} /> Message sent. Thank you for reaching out.
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} className={inputClass} />
        {errors.name && <ErrorText text={errors.name} />}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
        <input id="email" name="email" value={form.email} onChange={handleChange} className={inputClass} />
        {errors.email && <ErrorText text={errors.email} />}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} className={inputClass} />
        {errors.message && <ErrorText text={errors.message} />}
      </div>

      <button
        type="submit"
        className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-blue-600 px-6 py-2.5 text-white hover:bg-blue-700"
      >
        <Send size={16} /> Send message
      </button>
    </form>
  )
}

export default ContactForm;