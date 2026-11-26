
import {
  Monitor,
  ShoppingBag,
  LayoutDashboard,
  Smartphone,
  ArrowUpRight,
  CheckCircle2,
  Code2,
} from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Business Websites',
    category: 'WEBSITE DEVELOPMENT',
    description:
      'Professional websites that introduce your business, showcase your services and make it easier for customers to connect with you.',
    icon: Monitor,
    tags: ['Responsive Layout', 'Business Presence', 'Contact Integration'],
    status: 'AVAILABLE FOR PROJECTS',
    featured: true,
  },
  {
    number: '02',
    title: 'E-commerce Websites',
    category: 'ONLINE STORES',
    description:
      'Structured online stores with product catalogues, organised categories and customer-friendly shopping experiences.',
    icon: ShoppingBag,
    tags: ['Product Catalogue', 'Product Pages', 'Order Flow'],
    status: 'AVAILABLE FOR PROJECTS',
    featured: false,
  },
  {
    number: '03',
    title: 'Custom Web Applications',
    category: 'CUSTOM DEVELOPMENT',
    description:
      'Interactive interfaces, enquiry forms and dashboard concepts planned around your specific workflow and project requirements.',
    icon: LayoutDashboard,
    tags: ['Interactive UI', 'Custom Features', 'Dashboard Concepts'],
    status: 'SCOPE BASED',
    featured: false,
  },
  {
    number: '04',
    title: 'Android Applications',
    category: 'APP DEVELOPMENT',
    description:
      'Exploring Android application development through practical projects using Kotlin and Jetpack Compose.',
    icon: Smartphone,
    tags: ['Kotlin', 'Jetpack Compose', 'Android Projects'],
    status: 'CURRENTLY DEVELOPING',
    featured: false,
  },
]

const processHighlights = [
  'Understand your requirements',
  'Plan the right features',
  'Build and test the solution',
]

export default function Services() {
  return (
    <section
      id="services"
      data-reveal
      className="relative overflow-hidden bg-[#080b16] px-6 py-28 md:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-violet-400" />

          <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
            SERVICES & SOLUTIONS
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl">
            Digital solutions
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              built around you.
            </span>
          </h2>

          <p className="max-w-lg text-sm leading-8 text-slate-400 md:text-base">
            Every project has a different goal. I focus on
            understanding your requirements and creating useful
            digital experiences around your business needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.number}
                className={`group relative overflow-hidden rounded-3xl border bg-[#101827] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 md:p-10 ${
                  service.featured
                    ? 'border-violet-400/25'
                    : 'border-white/10'
                }`}
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-bold text-violet-300">
                    / {service.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-violet-300 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-400/30 group-hover:bg-violet-400/10">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="relative mt-12 flex flex-wrap items-center gap-3">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-500">
                    {service.category}
                  </p>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[9px] font-bold tracking-wider text-slate-300">
                    {service.status}
                  </span>
                </div>

                <h3 className="relative mt-4 text-2xl font-extrabold text-white md:text-3xl">
                  {service.title}
                </h3>

                <p className="relative mt-5 max-w-lg text-sm leading-8 text-slate-400">
                  {service.description}
                </p>

                <div className="relative mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-9 flex items-center justify-between border-t border-white/10 pt-6">
                  <a
                    href={service.number === '04' ? '#projects' : '#contact'}
                    className="group/link inline-flex items-center gap-3 text-sm font-bold text-white transition-all hover:gap-5 hover:text-violet-300"
                  >
                    {service.number === '04'
                      ? 'Explore App Project'
                      : 'Discuss Your Project'}

                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </a>

                  <CheckCircle2
                    size={19}
                    className="text-violet-400/60 transition-colors group-hover:text-violet-300"
                  />
                </div>
              </article>
            )
          })}
        </div>

        {/* How I Work */}
        <div className="mt-16 rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.09] to-cyan-400/[0.03] p-8 md:p-10">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <div className="flex items-center gap-3">
                <Code2 size={19} className="text-violet-300" />

                <p className="text-xs font-bold tracking-[0.2em] text-violet-300">
                  MY APPROACH
                </p>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold leading-tight text-white md:text-3xl">
                From your idea to a planned digital solution.
              </h3>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-[#080b16] transition hover:bg-violet-300"
              >
                Tell Me About Your Project
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {processHighlights.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#080b16]/50 p-5"
                >
                  <span className="text-xs font-bold text-violet-300">
                    STEP 0{index + 1}
                  </span>

                  <p className="mt-5 text-sm font-bold leading-6 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
