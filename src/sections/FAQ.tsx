
import { useState } from 'react'
import {
  Plus,
  Minus,
  MessageCircle,
  ArrowUpRight,
  HelpCircle,
} from 'lucide-react'

const faqs = [
  {
    category: 'SERVICES',
    question: 'What types of projects do you work on?',
    answer:
      'My main focus is on business websites, e-commerce websites and custom web interfaces. Android app development is also an area I am actively exploring through practical projects.',
  },
  {
    category: 'PROCESS',
    question: 'How does a project get started?',
    answer:
      'We start with a discussion about your business, requirements and goals. After understanding the scope, we can discuss features, design direction, budget and the next steps.',
  },
  {
    category: 'BUDGET',
    question: 'How much does a website cost?',
    answer:
      'The cost depends on the number of pages, design requirements, functionality and project complexity. I provide a project-specific estimate after understanding what you need.',
  },
  {
    category: 'DOMAIN & HOSTING',
    question: 'Are domain and hosting included in the project cost?',
    answer:
      'Domain registration and hosting are generally separate third-party expenses. We can discuss suitable options and their costs while planning your project.',
  },
  {
    category: 'REDESIGN',
    question: 'Can you redesign my existing website?',
    answer:
      'Yes, you can share your existing website and explain what you would like to improve. We can review the design, functionality and scope before deciding the next steps.',
  },
  {
    category: 'DEVELOPMENT',
    question: 'Do you develop Android applications?',
    answer:
      'I am currently learning Android development using Kotlin and Jetpack Compose and building a PDF utility application. New app requirements can be discussed and assessed based on their scope and feasibility.',
  },
  {
    category: 'TIMELINE',
    question: 'How long does a website take to complete?',
    answer:
      'The timeline depends on the project size, required features, content availability and feedback. A realistic schedule can be discussed once the project requirements are clear.',
  },
  {
    category: 'CONTACT',
    question: 'How can I discuss my project with you?',
    answer:
      'You can reach me through WhatsApp or email. You can also use the contact form on this website to prepare a WhatsApp enquiry with your project details.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => current === index ? null : index)
  }

  return (
    <section
      id="faq"
      data-reveal
      className="relative overflow-hidden bg-[#0d1424] px-6 py-28 md:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">

        {/* FAQ Introduction */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-violet-400" />

            <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
              FREQUENTLY ASKED QUESTIONS
            </p>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl">
            Good questions.
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Clear answers.
            </span>
          </h2>

          <p className="mt-8 max-w-md text-sm leading-8 text-slate-400 md:text-base">
            Have questions about project requirements, development,
            budget or the working process? Find some useful answers here.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-[#101827] p-7 md:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
              <HelpCircle size={24} />
            </div>

            <h3 className="mt-6 text-xl font-extrabold text-white">
              Still have a question?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Tell me what you are planning. We can discuss
              your requirements directly.
            </p>

            <a
              href="https://wa.me/918292794750?text=Hello%20Ashish%2C%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
            >
              <MessageCircle size={18} />
              Ask on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Direct communication helps clarify requirements before
            starting a project.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index
            const answerId = `faq-answer-${index}`
            const questionId = `faq-question-${index}`

            return (
              <article
                key={faq.question}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-violet-400/30 bg-[#111a2c]'
                    : 'border-white/10 bg-[#101827] hover:border-white/20'
                }`}
              >
                <button
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-400 md:px-7"
                >
                  <span className="min-w-0">
                    <span className="mb-2 block text-[9px] font-bold tracking-[0.2em] text-violet-300">
                      {faq.category}
                    </span>

                    <span className="block text-sm font-extrabold leading-7 text-white md:text-base">
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 border-violet-400/30 bg-violet-400/10 text-violet-300'
                        : 'border-white/10 bg-white/[0.03] text-slate-400 group-hover:border-violet-400/30 group-hover:text-violet-300'
                    }`}
                  >
                    {isOpen
                      ? <Minus size={18} />
                      : <Plus size={18} />}
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                  className="px-6 pb-7 md:px-7"
                >
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-sm leading-8 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}

        </div>
      </div>
    </section>
  )
}
