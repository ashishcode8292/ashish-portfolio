import {
  Code2,
  Monitor,
  Smartphone,
  GraduationCap,
  ArrowUpRight,
  Target,
  Lightbulb,
} from 'lucide-react'

const focusAreas = [
  {
    number: '01',
    title: 'Business Website Development',
    description:
      'Creating modern, responsive websites that help businesses showcase their services and connect with customers.',
    icon: Monitor,
  },
  {
    number: '02',
    title: 'Frontend Development',
    description:
      'Building clean, user-friendly interfaces with attention to layout, usability and responsive design.',
    icon: Code2,
  },
  {
    number: '03',
    title: 'Android App Development',
    description:
      'Developing practical Android projects while learning Kotlin and Jetpack Compose.',
    icon: Smartphone,
  },
]

const currentFocus = [
  'Building responsive websites',
  'Learning full-stack development',
  'Working on practical projects',
  'Exploring Android development',
]

export default function About() {
  return (
    <section
      id="about"
      data-reveal
      className="relative overflow-hidden bg-[#0d1424] px-6 py-28 md:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-violet-400" />
          <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
            ABOUT THE DEVELOPER
          </p>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* About Content */}
          <div>
            <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl">
              Turning ideas into
              <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                meaningful digital experiences.
              </span>
            </h2>

            <p className="mt-9 max-w-2xl text-base leading-9 text-slate-300">
              I'm Ashish Sharma, a B.Tech student and aspiring Full Stack
              Developer with an interest in building useful websites and
              digital products for real-world needs.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 md:text-base">
              I enjoy taking an idea, understanding its purpose and
              turning it into a practical digital experience. My current
              focus is on frontend development, responsive design and
              gradually expanding my skills into backend and application
              development.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 md:text-base">
              I believe good development is not just about writing code.
              It is about understanding requirements, solving problems
              and creating something genuinely useful.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
              >
                Explore My Work
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-400/10"
              >
                Let's Connect
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* Profile Information */}
          <div className="space-y-5">

            {/* Education Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101827] p-7 transition-all duration-300 hover:border-violet-400/30 md:p-9">

              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl transition-opacity group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                    <GraduationCap size={24} />
                  </div>

                  <p className="text-xs font-bold tracking-[0.2em] text-slate-400">
                    EDUCATION
                  </p>
                </div>

                <span className="text-xs font-bold text-violet-300">
                  / 01
                </span>
              </div>

              <h3 className="relative mt-8 text-2xl font-extrabold text-white">
                Bachelor of Technology
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-slate-400">
                Currently pursuing B.Tech in Bhopal.
              </p>

              <span className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-[10px] font-bold tracking-wider text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                FIRST YEAR
              </span>
            </div>

            {/* Current Focus Card */}
            <div className="rounded-3xl border border-white/10 bg-[#101827] p-7 md:p-9">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Target size={22} />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-slate-400">
                    CURRENT DIRECTION
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Learning by building
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {currentFocus.map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/[0.07] text-[10px] font-bold text-violet-300">
                      0{index + 1}
                    </span>

                    <p className="text-sm font-medium text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Development Focus */}
        <div className="mt-24 border-t border-white/10 pt-14">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <Lightbulb size={17} className="text-violet-400" />
                <p className="text-xs font-bold tracking-[0.25em] text-violet-400">
                  WHAT I WORK ON
                </p>
              </div>

              <h3 className="mt-5 text-3xl font-extrabold text-white md:text-4xl">
                My development focus.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-8 text-slate-400">
              Areas I am actively exploring and developing through
              practical work, learning and personal projects.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon

              return (
                <article
                  key={area.number}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101827] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-sm font-bold text-violet-300">
                      / {area.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-400/10">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h4 className="relative mt-10 text-xl font-extrabold leading-snug text-white">
                    {area.title}
                  </h4>

                  <p className="relative mt-4 text-sm leading-8 text-slate-400">
                    {area.description}
                  </p>
                </article>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
