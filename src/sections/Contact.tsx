
import { useState, type FormEvent } from 'react'
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Globe2,
} from 'lucide-react'

const whatsappNumber = '918292794750'
const emailAddress = 'ashishkr6422@gmail.com'

const budgetOptions: Record<
  string,
  { currency: string; options: string[] }
> = {
  India: {
    currency: 'INR',
    options: [
      'Under ₹5,000',
      '₹5,000 – ₹10,000',
      '₹10,000 – ₹25,000',
      '₹25,000 – ₹50,000',
      'Above ₹50,000',
    ],
  },

  USA: {
    currency: 'USD',
    options: [
      'Under $200',
      '$200 – $500',
      '$500 – $1,000',
      '$1,000 – $2,500',
      'Above $2,500',
    ],
  },

  UK: {
    currency: 'GBP',
    options: [
      'Under £150',
      '£150 – £400',
      '£400 – £800',
      '£800 – £1,500',
      'Above £1,500',
    ],
  },

  Canada: {
    currency: 'CAD',
    options: [
      'Under C$250',
      'C$250 – C$600',
      'C$600 – C$1,200',
      'C$1,200 – C$2,500',
      'Above C$2,500',
    ],
  },

  Other: {
    currency: 'Preferred Currency',
    options: [
      'Not decided',
      'Open to discussing the budget',
    ],
  },
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: 'India',
    projectType: '',
    budget: '',
    message: '',
  })

  const [whatsappUrl, setWhatsappUrl] = useState('')

  const selectedBudget =
    budgetOptions[form.country] ?? budgetOptions.Other

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const enquiry = [
      'Hello Ashish! I would like to discuss a website development project.',
      '',
      '--- CLIENT DETAILS ---',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      '',
      '--- PROJECT DETAILS ---',
      `Project Type: ${form.projectType}`,
      `Budget: ${form.budget || 'Not specified'}`,
      '',
      `Project Description: ${form.message}`,
      '',
      'Sent through AshishCode - https://ashishcode.online',
    ].join('\n')

    const url =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`

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

    setWhatsappUrl('')
  }

  const inputClass =
    'mt-3 w-full rounded-xl border border-white/10 bg-[#080b16] px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10'

  return (
    <section
      id="contact"
      data-reveal
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#080b16] px-6 py-32"
    >

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-violet-400" />

          <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
            LET'S CONNECT
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <h2
            id="contact-heading"
            className="text-4xl font-extrabold leading-tight text-white md:text-6xl"
          >
            Have an idea?
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Let's build it.
            </span>
          </h2>

          <p className="max-w-lg text-sm leading-8 text-slate-400 md:text-base">
            Looking for a professional business website, online store
            or website redesign? Share your project requirements and
            let's discuss the right solution for your business.
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
                Whether your business is in India or another country,
                you can contact me directly to discuss your requirements,
                features and project goals.
              </p>

              {/* WhatsApp */}
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

              {/* Email */}
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

            {/* Availability Card */}
            <div className="rounded-3xl border border-violet-400/20 bg-violet-400/[0.05] p-8">

              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-xs font-bold tracking-wider text-emerald-300">
                  OPEN FOR PROJECT DISCUSSIONS
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <Globe2 size={21} className="text-violet-300" />

                <p className="text-sm font-semibold text-white">
                  India & Worldwide
                </p>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Based in India and available to discuss remote
                website development projects with businesses
                around the world.
              </p>

            </div>

          </div>

          {/* Project Enquiry Form */}
          <div className="rounded-3xl border border-white/10 bg-[#101625] p-7 md:p-10">

            <div className="mb-9">

              <p className="text-xs font-bold tracking-[0.2em] text-violet-300">
                PROJECT ENQUIRY
              </p>

              <h3 className="mt-4 text-2xl font-extrabold text-white">
                Tell me about your project.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Share a few details to prepare your personalised enquiry.
              </p>

            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
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

              {/* Email */}
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

              {/* Country */}
              <div>
                <label
                  htmlFor="contact-country"
                  className="text-sm font-semibold text-slate-300"
                >
                  Your Country / Region *
                </label>

                <select
                  id="contact-country"
                  name="country"
                  required
                  value={form.country}
                  onChange={(e) => {
                    updateField('country', e.target.value)
                    updateField('budget', '')
                  }}
                  className={inputClass}
                >
                  <option value="India">India</option>
                  <option value="USA">United States (USA)</option>
                  <option value="UK">United Kingdom (UK)</option>
                  <option value="Canada">Canada</option>
                  <option value="Other">Other Country</option>
                </select>
              </div>

              {/* Project Type and Budget */}
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

                    <option value="Landing Page">
                      Landing Page
                    </option>

                    <option value="E-commerce Website">
                      E-commerce Website
                    </option>

                    <option value="Website Redesign">
                      Website Redesign
                    </option>

                    <option value="Custom Website Features">
                      Custom Website Features
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
                    Project Budget ({selectedBudget.currency})
                  </label>

                  <select
                    id="project-budget"
                    name="budget"
                    value={form.budget}
                    onChange={(e) => updateField('budget', e.target.value)}
                    className={inputClass}
                  >
                    <option value="">
                      Not decided
                    </option>

                    {selectedBudget.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}

                  </select>

                </div>

              </div>

              {/* Project Details */}
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
                  placeholder="Describe your business, website requirements, features and ideas..."
                  className={`${inputClass} resize-y`}
                />

              </div>

              {/* Submit Button */}
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
                  {' '}This form does not save your details in a website database.
                  Review your enquiry in WhatsApp before sending it.
                </p>

              </div>

              {/* WhatsApp Confirmation */}
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
                    Review your project details in WhatsApp and
                    press Send to submit your enquiry.
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
