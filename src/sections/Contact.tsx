
import { useState, type FormEvent } from 'react'
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
} from 'lucide-react'

const whatsappNumber = '918292794750'
const emailAddress = 'ashishkr6422@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const [whatsappUrl, setWhatsappUrl] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const enquiry = [
      'Hello Ashish! I would like to discuss a project.',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project Type: ${form.projectType}`,
      `Budget: ${form.budget || 'Not specified'}`,
      '',
      `Project Details: ${form.message}`,
    ].join('\n')

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`

    setWhatsappUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  const inputClass =
    'mt-3 w-full rounded-xl border border-white/10 bg-[#080b16] px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10'

  return (
    <section
      id="contact"
      data-reveal
      className="relative overflow-hidden bg-[#080b16] px-6 py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-violet-400" />
          <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
            LET'S CONNECT
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Have an idea?
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Let's build it.
            </span>
          </h2>

          <p className="max-w-lg text-sm leading-8 text-slate-400">
            Have a business website, e-commerce platform or
            application idea? Share your requirements and
            let's discuss how to bring your project to life.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact Information */}
          <div className="flex flex-col gap-6">

            <div className="rounded-3xl border border-white/10 bg-[#101625] p-8 md:p-10">
              <p className="text-xs font-bold tracking-[0.2em] text-violet-300">
                GET IN TOUCH
              </p>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                Let's talk about your project.
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-400">
                Tell me what you are planning. We can discuss
                the requirements, features and next steps.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <MessageCircle size={23} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-slate-500">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm font-bold text-white">
                    +91 82927 94750
                  </span>
                </span>

                <ArrowUpRight size={19} className="text-slate-400" />
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-400/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                  <Mail size={23} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-slate-500">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-bold text-white">
                    {emailAddress}
                  </span>
                </span>

                <ArrowUpRight size={19} className="text-slate-400" />
              </a>
            </div>

            <div className="rounded-3xl border border-violet-400/20 bg-violet-400/[0.05] p-8">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-bold tracking-wider text-emerald-300">
                  OPEN FOR PROJECT DISCUSSIONS
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Available to discuss new website and digital
                development projects.
              </p>
            </div>

          </div>

          {/* Enquiry Form */}
          <div className="rounded-3xl border border-white/10 bg-[#101625] p-7 md:p-10">

            <div className="mb-9">
              <p className="text-xs font-bold tracking-[0.2em] text-violet-300">
                PROJECT ENQUIRY
              </p>

              <h3 className="mt-4 text-2xl font-extrabold text-white">
                Tell me about your project.
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                Fill in the details below to prepare your enquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-slate-300"
                >
                  Your Name *
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={80}
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-slate-300"
                >
                  Email Address *
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="project-type"
                    className="text-sm font-semibold text-slate-300"
                  >
                    Project Type *
                  </label>

                  <select
                    id="project-type"
                    name="projectType"
                    required
                    value={form.projectType}
                    onChange={(e) => updateField('projectType', e.target.value)}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select project
                    </option>
                    <option value="Business Website">
                      Business Website
                    </option>
                    <option value="E-commerce Website">
                      E-commerce Website
                    </option>
                    <option value="Web Application">
                      Web Application
                    </option>
                    <option value="Android Application">
                      Android Application
                    </option>
                    <option value="Website Redesign">
                      Website Redesign
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="project-budget"
                    className="text-sm font-semibold text-slate-300"
                  >
                    Project Budget
                  </label>

                  <select
                    id="project-budget"
                    name="budget"
                    value={form.budget}
                    onChange={(e) => updateField('budget', e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Not decided</option>
                    <option value="Under ₹5,000">Under ₹5,000</option>
                    <option value="₹5,000 – ₹10,000">₹5,000 – ₹10,000</option>
                    <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                    <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                    <option value="Above ₹50,000">Above ₹50,000</option>
                  </select>
                </div>

              </div>

              <div>
                <label
                  htmlFor="project-message"
                  className="text-sm font-semibold text-slate-300"
                >
                  Project Details *
                </label>

                <textarea
                  id="project-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="Describe your project, requirements and ideas..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="space-y-4">

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-5 text-sm font-extrabold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                >
                  <Send size={18} className="shrink-0" />

                  <span>Prepare WhatsApp Enquiry</span>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="mx-auto max-w-lg text-center text-[11px] leading-6 text-slate-500 sm:text-xs">
                  <span className="font-semibold text-slate-400">
                    Your privacy matters.
                  </span>
                  {' '}Your details are not stored on this website.
                  Review your enquiry in WhatsApp before sending it.
                </p>

              </div>



              {whatsappUrl && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5"
                >
                  <div className="flex items-center gap-3 text-emerald-300">
                    <CheckCircle2 size={19} />
                    <p className="text-sm font-bold">
                      Your enquiry message is ready.
                    </p>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Review your details in WhatsApp and press Send there.
                    Your message is not sent automatically.
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-violet-400 underline-offset-4"
                  >
                    Open WhatsApp
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              )}

            </form>

          </div>
        </div>

      </div>
    </section>
  )
}
