
import {
  MessageCircle,
  Smartphone,
  ClipboardCheck,
  Layers,
  ArrowUpRight,
} from 'lucide-react'

const reasons = [
  {
    number: '01',
    title: 'Clear Communication',
    description:
      'Discuss your requirements directly, understand your goals and keep project communication straightforward.',
    icon: MessageCircle,
    tag: 'DIRECT DISCUSSION',
  },
  {
    number: '02',
    title: 'Responsive Experiences',
    description:
      'Plan website layouts for different screen sizes, including mobile phones, tablets and desktops.',
    icon: Smartphone,
    tag: 'MOBILE FIRST',
  },
  {
    number: '03',
    title: 'Planned Development',
    description:
      'Understand the project scope, organise essential features and follow a structured development process.',
    icon: ClipboardCheck,
    tag: 'CLEAR WORKFLOW',
  },
  {
    number: '04',
    title: 'Project-Focused Solutions',
    description:
      'Choose suitable technologies and features based on your actual business requirements and project goals.',
    icon: Layers,
    tag: 'BUILT AROUND YOUR NEEDS',
  },
]

export default function WhyChooseMe() {
  return (
    <section
      id="why-me"
      data-reveal
      className="relative overflow-hidden bg-[#080b16] px-6 py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-violet-400" />
          <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
            THE DIFFERENCE
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            More than a
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              finished website.
            </span>
          </h2>

          <p className="max-w-lg text-sm leading-8 text-slate-400">
            A good project starts with understanding what you need.
            My approach focuses on communication, thoughtful planning
            and building around your requirements.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <article
                key={reason.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101625] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 md:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-bold text-violet-300">
                    / {reason.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-violet-300 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-400/40 group-hover:bg-violet-400/10">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>
                </div>

                <p className="relative mt-12 text-[10px] font-bold tracking-[0.2em] text-slate-500">
                  {reason.tag}
                </p>

                <h3 className="relative mt-3 text-2xl font-extrabold text-white">
                  {reason.title}
                </h3>

                <p className="relative mt-5 max-w-lg text-sm leading-8 text-slate-400">
                  {reason.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-6 rounded-3xl border border-violet-400/20 bg-violet-400/[0.05] p-8 md:flex-row md:items-center md:p-10">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-violet-300">
              LET'S START WITH YOUR IDEA
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
              Every great project starts with a conversation.
            </h3>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#080b16] transition hover:bg-violet-300"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}
