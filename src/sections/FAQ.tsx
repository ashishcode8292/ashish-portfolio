
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
    question: 'What types of websites do you develop?',
    answer:
      'I primarily work on business websites, landing pages, e-commerce websites, website redesigns and custom website features. Each project is planned according to the business requirements and agreed scope.',
  },
  {
    category: 'GLOBAL CLIENTS',
    question: 'Do you work with clients outside India?',
    answer:
      'Yes. I am based in India and welcome remote website development projects from businesses in India, the USA, the UK, Canada and other locations. We can coordinate through email, WhatsApp and online meetings.',
  },
  {
    category: 'PROJECT PROCESS',
    question: 'How do we start a website project?',
    answer:
      'We begin with a discussion about your business, website requirements, target audience and goals. Once the project scope is clear, I share a proposal covering the expected deliverables, estimated timeline and project cost.',
  },
  {
    category: 'PRICING',
    question: 'How much does website development cost?',
    answer:
      'Pricing depends on the number of pages, design requirements, features, integrations and overall project complexity. I provide a customised quotation after understanding your requirements. For international projects, the quotation currency is agreed with you before the project starts.',
  },
  {
    category: 'PAYMENT',
    question: 'How can international and Indian clients pay?',
    answer:
      'Payment arrangements are discussed before development begins. Available payment methods depend on the client location and payment provider. Any advance payment, remaining balance and payment milestones will be clearly mentioned in the project agreement or quotation.',
  },
  {
    category: 'DOMAIN & HOSTING',
    question: 'Are domain registration and hosting included?',
    answer:
      'Domain registration and hosting are generally separate third-party expenses unless specifically included in the project quotation. I can help you choose a suitable hosting and domain solution based on your website requirements.',
  },
  {
    category: 'TIMELINE',
    question: 'How long will it take to complete my website?',
    answer:
      'The timeline depends on project size, required features, content availability and feedback. I will discuss a realistic estimated delivery schedule with you before development begins.',
  },
  {
    category: 'REVISIONS',
    question: 'Can I request changes during development?',
    answer:
      'Yes. Feedback and revisions are part of the agreed project workflow. The number of included revision rounds and any additional work outside the original scope will be clarified before development starts.',
  },
  {
    category: 'REDESIGN',
    question: 'Can you redesign my existing business website?',
    answer:
      'Yes. Share your current website and explain what you would like to improve. I can review its design, responsiveness and functionality before suggesting a suitable redesign scope.',
  },
  {
    category: 'ANDROID DEVELOPMENT',
    question: 'Do you also develop Android applications?',
    answer:
      'I am currently learning Android development using Kotlin and Jetpack Compose while working on a PDF utility application. My primary freelance service focus is website development. Android requirements can be discussed separately based on their scope and feasibility.',
  },
  {
    category: 'COMMUNICATION',
    question: 'How will we communicate during the project?',
    answer:
      'You can communicate with me directly through email and WhatsApp. Online meetings can also be arranged when needed. For international projects, meeting times can be coordinated according to mutually suitable time zones.',
  },
  {
    category: 'CONTACT',
    question: 'How can I request a project quotation?',
    answer:
      'Use the contact form on this website or message me through WhatsApp or email. Share your business name, website requirements and preferred features. I will review the information and discuss the next steps with you.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) =>
      current === index ? null : index
    )
  }

  return (
    <section
      id="faq"
      data-reveal
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[#0d1424] px-6 py-28 md:py-32"
    >

      {/* Background Effects */}
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

          <h2
            id="faq-heading"
            className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl"
          >
            Good questions.
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Clear answers.
            </span>
          </h2>

          <p className="mt-8 max-w-md text-sm leading-8 text-slate-400 md:text-base">
            Planning a new business website or improving your existing
            one? Find answers about services, pricing, payments and
            the development process.
          </p>

          {/* WhatsApp Contact Card */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-[#101827] p-7 md:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
              <HelpCircle size={24} />
            </div>

            <h3 className="mt-6 text-xl font-extrabold text-white">
              Still have a question?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Every business has different requirements. Tell me
              about your idea and let's discuss how I can help.
            </p>

            <a
              href="https://wa.me/918292794750?text=Hello%20Ashish%2C%20I%20have%20a%20question%20about%20your%20website%20development%20services."
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
            Direct communication. Clear requirements. A project
            approach based on your business needs.
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

                {/* Question Button */}
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

                {/* Answer */}
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
