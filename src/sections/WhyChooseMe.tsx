
import {
  MessageCircle,
  Smartphone,
  ClipboardCheck,
  Layers,
  ArrowUpRight,
  Globe2,
} from 'lucide-react'

const reasons = [
  {
    number: '01',
    title: 'Direct Communication',
    description:
      'Work directly with me throughout your project. Discuss your ideas, share requirements and get updates without dealing with multiple people.',
    icon: MessageCircle,
    tag: 'ONE-TO-ONE COLLABORATION',
  },
  {
    number: '02',
    title: 'Responsive Web Experiences',
    description:
      'Websites designed to adapt to different screen sizes, helping your visitors browse comfortably on mobile phones, tablets and desktops.',
    icon: Smartphone,
    tag: 'MOBILE-FRIENDLY DESIGN',
  },
  {
    number: '03',
    title: 'Clear Project Planning',
    description:
      'Understand the project scope, discuss essential features and agree on the expected deliverables before development begins.',
    icon: ClipboardCheck,
    tag: 'STRUCTURED WORKFLOW',
  },
  {
    number: '04',
    title: 'Solutions Built Around Your Needs',
    description:
      'Every business is different. I focus on suitable layouts, features and technologies based on your actual goals and requirements.',
    icon: Layers,
    tag: 'PROJECT-FOCUSED DEVELOPMENT',
  },
]

export default function WhyChooseMe() {
  return (
    <section
      id="why-me"
      data-reveal
      className="relative overflow-hidden bg-[#080b16] px-6 py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-violet-400" />

          <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
            WHY WORK WITH ASHISHCODE
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            A personal approach.
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              A focus on your goals.
            </span>
          </h2>

          <p className="max-w-lg text-sm leading-8 text-slate-400 md:text-base">
            Choosing a developer is about more than getting a website.
            It is about finding someone who understands your requirements,
            communicates clearly and takes your project seriously.
          </p>

        </div>

        {/* Working Approach Cards */}
        <div className="grid gap-5 sm:grid-cols-2">

          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <article
                key={reason.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101625] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 md:p-10"
              >

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon and Number */}
                <div className="relative flex items-center justify-between">

                  <span className="text-sm font-bold text-violet-300">
                    / {reason.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-violet-300 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-400/40 group-hover:bg-violet-400/10">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                </div>

                {/* Category */}
                <p className="relative mt-12 text-[10px] font-bold tracking-[0.2em] text-slate-500">
                  {reason.tag}
                </p>

                {/* Title */}
                <h3 className="relative mt-3 text-2xl font-extrabold text-white">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="relative mt-5 max-w-lg text-sm leading-8 text-slate-400">
                  {reason.description}
                </p>

                {/* Bottom Accent */}
                <div className="relative mt-8 h-px w-12 bg-gradient-to-r from-violet-400 to-cyan-300 transition-all duration-500 group-hover:w-24" />

              </article>
            )
          })}

        </div>

        {/* International Collaboration CTA */}
        <div className="mt-10 flex flex-col justify-between gap-6 rounded-3xl border border-violet-400/20 bg-violet-400/[0.05] p-8 md:flex-row md:items-center md:p-10">

          <div>

            <div className="flex items-center gap-3">
              <Globe2 size={17} className="text-violet-300" />

              <p className="text-xs font-bold tracking-[0.2em] text-violet-300">
                INDIA & WORLDWIDE
              </p>
            </div>

            <h3 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">
              Have a website project in mind?
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Whether your business is in India or another country,
              let's discuss your requirements and explore the right solution.
            </p>

          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#080b16] transition hover:-translate-y-1 hover:bg-violet-300"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
    </section>
  )
}
