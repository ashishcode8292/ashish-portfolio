
import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Discussion',
    subtitle: 'UNDERSTAND YOUR BUSINESS',
    description:
      'We discuss your business, target audience, goals, required pages and features to understand what your website needs to achieve.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Scope & Project Planning',
    subtitle: 'AGREE ON THE DETAILS',
    description:
      'Define the project scope, deliverables, estimated timeline and budget. Important requirements are agreed upon before development begins.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Design & Approval',
    subtitle: 'PLAN THE EXPERIENCE',
    description:
      'Establish the visual direction, page layouts and responsive design approach. Review the proposed direction before moving into development.',
    icon: PenTool,
  },
  {
    number: '04',
    title: 'Website Development',
    subtitle: 'BUILD THE AGREED FEATURES',
    description:
      'Develop the website according to the approved requirements, with attention to responsive layouts, usability and the agreed functionality.',
    icon: Code2,
  },
  {
    number: '05',
    title: 'Testing & Revisions',
    subtitle: 'CHECK AND REFINE',
    description:
      'Review the website across screen sizes, test links and important functionality, and complete the revisions included in the agreed project scope.',
    icon: ShieldCheck,
  },
  {
    number: '06',
    title: 'Launch & Handover',
    subtitle: 'DELIVER YOUR WEBSITE',
    description:
      'Prepare the approved website for deployment, complete the agreed handover and provide relevant project files or access details.',
    icon: Rocket,
  },
]

export default function Process() {
  return (
    <section
      id="process"
      data-reveal
      className="relative overflow-hidden bg-[#080b16] px-6 py-28 md:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-violet-400" />

          <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
            HOW I WORK
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl">
            From your first idea
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              to a finished website.
            </span>
          </h2>

          <p className="max-w-lg text-sm leading-8 text-slate-400 md:text-base">
            A clear and collaborative process makes website projects
            easier to manage. I work directly with you at every stage,
            from understanding your requirements to the final handover.
          </p>

        </div>

        {/* Workflow Indicator */}
        <div className="mb-10 flex items-center gap-3">

          <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-[10px] font-bold tracking-wider text-violet-300">
            06 PROJECT STAGES
          </span>

          <span className="h-px flex-1 bg-white/10" />

          <span className="text-[10px] font-semibold tracking-wider text-slate-500">
            MY WORKFLOW
          </span>

        </div>

        {/* Process Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101827] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-[#121b2d] md:p-9"
              >

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon and Number */}
                <div className="relative flex items-center justify-between">

                  <span className="text-sm font-extrabold tracking-widest text-violet-300">
                    / {step.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-violet-300 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-400/40 group-hover:bg-violet-400/10">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                </div>

                {/* Step Subtitle */}
                <p className="relative mt-12 text-[10px] font-bold tracking-[0.2em] text-slate-500">
                  {step.subtitle}
                </p>

                {/* Step Title */}
                <h3 className="relative mt-3 text-xl font-extrabold text-white md:text-2xl">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="relative mt-5 min-h-[100px] text-sm leading-8 text-slate-400">
                  {step.description}
                </p>

                {/* Bottom Accent */}
                <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-6">

                  <span className="text-[10px] font-bold tracking-widest text-slate-500">
                    PROJECT STAGE
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-violet-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

              </article>
            )
          })}

        </div>

        {/* Final CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.10] to-cyan-400/[0.03] p-8 md:p-10">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">

            <div>

              <div className="flex items-center gap-3">
                <MessageCircle
                  size={17}
                  className="text-violet-300"
                />

                <p className="text-xs font-bold tracking-[0.2em] text-violet-300">
                  LET'S START A CONVERSATION
                </p>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">
                Have an idea for your next website?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Tell me about your business and project requirements.
                Let's discuss the right approach.
              </p>

            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#080b16] transition hover:-translate-y-1 hover:bg-violet-300"
            >
              Discuss Your Project

              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

        {/* Project Terms Note */}
        <p className="mt-7 text-center text-xs leading-6 text-slate-500">
          Project timelines, pricing, revisions and deliverables
          are agreed upon before development begins.
        </p>

      </div>
    </section>
  )
}
