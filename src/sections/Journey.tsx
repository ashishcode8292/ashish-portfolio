
import {
  GraduationCap,
  Code2,
  Smartphone,
  Globe,
  ArrowUpRight,
} from 'lucide-react'

const journey = [
  {
    year: '2024',
    type: 'EDUCATION',
    title: 'Completed Class 12',
    description:
      'Completed higher secondary education with Physics, Chemistry and Mathematics, building an academic foundation for further studies in technology.',
    status: 'COMPLETED',
    icon: GraduationCap,
  },
  {
    year: 'CURRENT',
    type: 'HIGHER EDUCATION',
    title: 'Pursuing B.Tech',
    description:
      'Currently pursuing a Bachelor of Technology degree in Bhopal, India, while developing an interest in programming, software and technology.',
    status: 'IN PROGRESS',
    icon: GraduationCap,
  },
  {
    year: 'CURRENT',
    type: 'WEB DEVELOPMENT & CLIENT WORK',
    title: 'Building Websites for Businesses',
    description:
      'Developing responsive websites through practical and client projects, including a live business website. Continuously improving frontend development and real-world project experience.',
    status: 'ONGOING',
    icon: Globe,
  },
  {
    year: 'CURRENT',
    type: 'ANDROID DEVELOPMENT',
    title: 'Exploring Android Development',
    description:
      'Learning Kotlin and Jetpack Compose while developing a PDF utility application concept with planned features such as image-to-PDF conversion and PDF management.',
    status: 'IN DEVELOPMENT',
    icon: Smartphone,
  },
]

export default function Journey() {
  return (
    <section
      id="journey"
      data-reveal
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-[#0d1424] px-6 py-28 md:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/[0.05] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-violet-400" />

          <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
            MY DEVELOPMENT JOURNEY
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 md:items-end">

          <h2
            id="journey-heading"
            className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl"
          >
            Learning with purpose.
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Growing through real work.
            </span>
          </h2>

          <p className="max-w-lg text-sm leading-8 text-slate-400 md:text-base">
            My journey combines academic learning, practical website
            development and personal projects. Each experience helps
            me improve my technical skills and understand real-world
            development requirements.
          </p>

        </div>

        {/* Timeline Label */}
        <div className="mb-10 flex items-center gap-3">

          <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-[10px] font-bold tracking-wider text-violet-300">
            EDUCATION & DEVELOPMENT
          </span>

          <span className="h-px flex-1 bg-white/10" />

          <span className="text-[10px] font-semibold tracking-wider text-slate-500">
            MY JOURNEY
          </span>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute bottom-8 left-[15px] top-8 w-px bg-gradient-to-b from-violet-400 via-cyan-400/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">

            {journey.map((item, index) => {
              const Icon = item.icon
              const reverse = index % 2 === 1

              return (
                <article
                  key={`${item.title}-${index}`}
                  className="group relative grid gap-5 pl-10 md:grid-cols-2 md:gap-16 md:pl-0"
                >

                  {/* Timeline Marker */}
                  <div
                    aria-hidden="true"
                    className="absolute left-[7px] top-9 z-10 h-4 w-4 rounded-full border-4 border-[#0d1424] bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.5)] md:left-1/2 md:-translate-x-1/2"
                  />

                  {/* Milestone Card */}
                  <div
                    className={`relative ${
                      reverse ? 'md:col-start-2 md:row-start-1' : ''
                    }`}
                  >

                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101827] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 md:p-9">

                      {/* Hover Glow */}
                      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />

                      {/* Date & Status */}
                      <div className="relative flex items-center justify-between gap-4">

                        <span className="text-sm font-extrabold tracking-widest text-violet-300">
                          {item.year}
                        </span>

                        <span
                          className={`rounded-full border px-3 py-2 text-[9px] font-bold tracking-wider ${
                            item.status === 'COMPLETED'
                              ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                              : 'border-violet-400/20 bg-violet-400/10 text-violet-300'
                          }`}
                        >
                          {item.status}
                        </span>

                      </div>

                      {/* Milestone Icon */}
                      <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                        <Icon size={23} />
                      </div>

                      {/* Category */}
                      <p className="relative mt-7 text-[10px] font-bold tracking-[0.2em] text-slate-500">
                        {item.type}
                      </p>

                      {/* Title */}
                      <h3 className="relative mt-3 text-2xl font-extrabold text-white">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="relative mt-4 text-sm leading-8 text-slate-400">
                        {item.description}
                      </p>

                      {/* Bottom Information */}
                      <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                        <span className="text-[10px] font-bold tracking-widest text-slate-500">
                          MILESTONE {String(index + 1).padStart(2, '0')}
                        </span>

                        <ArrowUpRight
                          size={18}
                          className="text-slate-500 transition-colors group-hover:text-violet-300"
                        />

                      </div>

                    </div>
                  </div>

                  {/* Alternating Desktop Year */}
                  <div
                    className={`hidden items-center md:flex ${
                      reverse
                        ? 'md:col-start-1 md:row-start-1 md:justify-end'
                        : 'md:justify-start'
                    }`}
                  >
                    <span className="text-6xl font-black tracking-tighter text-white/[0.05] lg:text-8xl">
                      {item.year}
                    </span>
                  </div>

                </article>
              )
            })}

          </div>
        </div>

        {/* What's Next */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#101827] p-8 md:p-10">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">

            <div>

              <div className="flex items-center gap-3">
                <Code2 size={19} className="text-violet-300" />

                <p className="text-xs font-bold tracking-[0.2em] text-violet-300">
                  WHAT COMES NEXT
                </p>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">
                Always learning. Always building.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                Continuing to strengthen my development skills,
                build useful digital projects and create better
                website experiences for businesses.
              </p>

            </div>

            <a
              href="#projects"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#080b16] transition hover:-translate-y-1 hover:bg-violet-300"
            >
              Explore My Projects
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}
