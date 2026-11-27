
import {
  ArrowUpRight,
  ExternalLink,
  FolderOpen,
  Globe2,
} from 'lucide-react'

type Project = {
  number: string
  name: string
  category: string
  status: string
  statusStyle: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  link: string | null
  linkLabel: string
  featured: boolean
}

const projects: Project[] = [
  {
    number: '01',
    name: 'Adarsh Cyber Cafe',
    category: 'CLIENT WEBSITE',
    status: 'LIVE',
    statusStyle:
      'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
    description:
      'A business website for a digital service centre in Raniganj, Bihar. It presents available digital services, service information, rate lists and a direct WhatsApp enquiry option.',
    image: `${import.meta.env.BASE_URL}projects/adarsh-cyber.png`,
    imageAlt: 'Adarsh Cyber Cafe business website preview',
    tags: [
      'Business Website',
      'Digital Services',
      'WhatsApp Integration',
    ],
    link: 'https://adarshcyberraniganj.shop/',
    linkLabel: 'Visit Live Website',
    featured: true,
  },
  {
    number: '02',
    name: 'AshishCode Portfolio',
    category: 'PERSONAL WEBSITE',
    status: 'LIVE / REDESIGN IN PROGRESS',
    statusStyle:
      'border-violet-400/20 bg-violet-400/10 text-violet-300',
    description:
      'My personal developer portfolio, showcasing my background, skills, selected work and contact information. A refreshed version is currently being developed to serve clients in India and worldwide.',
    image: `${import.meta.env.BASE_URL}projects/personal-portfolio.png`,
    imageAlt: 'AshishCode personal developer portfolio preview',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    link: 'https://ashishcode.online/',
    linkLabel: 'Visit Live Website',
    featured: false,
  },
  {
    number: '03',
    name: 'PDF Converter',
    category: 'ANDROID APP PROJECT',
    status: 'IN DEVELOPMENT',
    statusStyle:
      'border-violet-400/20 bg-violet-400/10 text-violet-300',
    description:
      'An Android utility application in development. The project explores image-to-PDF conversion, PDF merging, splitting and compression as planned features.',
    image: `${import.meta.env.BASE_URL}projects/pdf-converter.png`,
    imageAlt: 'PDF Converter Android application project preview',
    tags: [
      'Kotlin',
      'Jetpack Compose',
      'Android Development',
    ],
    link: null,
    linkLabel: 'Currently in Development',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      data-reveal
      className="relative overflow-hidden bg-[#0d1424] px-6 py-28 md:py-32"
    >

      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-violet-400" />

          <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
            PORTFOLIO / SELECTED WORK
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Work that turns
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              ideas into reality.
            </span>
          </h2>

          <p className="max-w-lg text-sm leading-8 text-slate-400 md:text-base">
            Explore selected client work, personal development projects
            and applications currently in progress. Each project reflects
            my approach to practical design and development.
          </p>

        </div>

        {/* Location Availability */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-4 py-2.5">
          <Globe2 size={15} className="text-violet-300" />

          <span className="text-xs font-semibold text-violet-200">
            Working with businesses in India and worldwide
          </span>
        </div>

        {/* Project Cards */}
        <div className="grid gap-7 lg:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#101827] transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >

              <div
                className={`grid ${
                  project.featured
                    ? 'md:grid-cols-[1.1fr_0.9fr]'
                    : 'grid-cols-1'
                }`}
              >

                {/* Project Image */}
                <div
                  className={`relative flex items-center justify-center overflow-hidden bg-[#080b16] ${
                    project.featured
                      ? 'min-h-[260px] md:min-h-[380px]'
                      : 'min-h-[240px] sm:min-h-[280px]'
                  }`}
                >

                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="relative h-full max-h-[430px] w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-[#080b16]/85 px-4 py-2 text-[9px] font-bold tracking-[0.18em] text-white backdrop-blur-xl">
                    {project.category}
                  </span>

                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-center p-7 md:p-10">

                  {/* Number and Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="text-sm font-bold text-violet-300">
                      / {project.number}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-2 text-[9px] font-bold tracking-wider ${project.statusStyle}`}
                    >
                      {project.status}
                    </span>

                  </div>

                  {/* Project Name */}
                  <h3 className="mt-8 text-2xl font-extrabold text-white transition-colors group-hover:text-violet-300 md:text-3xl">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  {/* Project Link */}
                  <div className="mt-9 border-t border-white/10 pt-6">

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.linkLabel}: ${project.name}`}
                        className="inline-flex items-center gap-3 text-sm font-extrabold text-white transition-all hover:gap-5 hover:text-violet-300"
                      >
                        {project.linkLabel}

                        <ExternalLink size={17} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-3 text-sm font-semibold text-slate-400">
                        <FolderOpen
                          size={17}
                          className="text-violet-300"
                        />

                        {project.linkLabel}
                      </span>
                    )}

                  </div>

                </div>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col justify-between gap-6 rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.08] to-cyan-400/[0.03] p-8 md:flex-row md:items-center md:p-10">

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-violet-300">
              HAVE A PROJECT IN MIND?
            </p>

            <h3 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">
              Let's build something meaningful.
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Tell me about your business, your goals and the website
              you have in mind.
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
    </section>
  )
}
