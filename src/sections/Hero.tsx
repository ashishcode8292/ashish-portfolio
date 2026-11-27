
import { ArrowUpRight, Download } from 'lucide-react'

const highlights = [
  { number: '01', label: 'Business Websites' },
  { number: '02', label: 'E-commerce Stores' },
  { number: '03', label: 'Custom Web Solutions' },
]

export default function Hero() {
  return (
    <section
      id="home"
      tabIndex={-1}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080b16] px-6 pb-20 pt-36 outline-none"
      cinematic-grid
    >
      {/* Animated Background Glow */}
      <div className="hero-glow pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="hero-glow pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Main Container */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Hero Content */}
        <div>

          {/* Availability Badge */}
          <div className="hero-entrance hero-delay-1 mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-[9px] font-bold tracking-[0.12em] text-emerald-300 sm:text-xs">
              AVAILABLE FOR PROJECTS IN INDIA & WORLDWIDE
            </span>
          </div>

          {/* Developer Label */}
          <p className="hero-entrance hero-delay-1 mb-6 text-xs font-bold tracking-[0.25em] text-violet-400">
            ASHISHCODE / FREELANCE WEB DEVELOPER
          </p>

          {/* Main Heading */}
          <h1 className="hero-entrance hero-delay-2 max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            I build
            <span className="hero-gradient block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              websites that
            </span>
            help businesses grow.
          </h1>

          {/* Description */}
          <p className="hero-entrance hero-delay-3 mt-8 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            I design and develop modern, responsive websites for businesses
            in India and around the world. From professional business websites
            to e-commerce stores, I focus on great user experiences,
            performance and a strong online presence.
          </p>

          {/* Service Tags */}
          <div className="hero-entrance hero-delay-3 mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-3 py-1.5 text-xs font-semibold text-violet-300">
              Website Development
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-semibold text-cyan-300">
              E-commerce
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
              Responsive Design
            </span>
          </div>

          {/* Action Buttons */}
          <div className="hero-entrance hero-delay-4 mt-10 flex flex-wrap gap-4">

            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
            >
              Discuss Your Project

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* Portfolio CTA */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-400/10"
            >
              View My Projects

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* Resume Download */}
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Ashish-Sharma-Resume.pdf"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-7 py-4 text-sm font-bold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Download
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />

              Download CV
            </a>

          </div>

          {/* Service Highlights */}
          <div className="hero-entrance hero-delay-5 mt-16 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-6">

            {highlights.map((item) => (
              <div
                key={item.number}
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-xs font-bold text-violet-400">
                  / {item.number}
                </p>

                <p className="mt-3 text-xs font-semibold leading-5 text-slate-300 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-entrance hero-delay-3 relative mx-auto w-full max-w-[480px]">

          {/* Image Glow */}
          <div className="hero-glow pointer-events-none absolute -inset-5 rounded-[35px] bg-gradient-to-br from-violet-500/20 to-cyan-400/10 blur-2xl" />

          {/* Profile Card */}
          <div className="hero-card hero-float relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-[#111827] shadow-2xl shadow-black/40">

            <img
              src={`${import.meta.env.BASE_URL}images/ashish.jpg`}
              alt="Ashish Sharma, freelance web developer at AshishCode"
              width={480}
              height={600}
              fetchPriority="high"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080b16]/95 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7">

              <p className="text-[10px] font-bold tracking-[0.3em] text-violet-300">
                FREELANCE WEB DEVELOPER
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Ashish Sharma.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Based in India. Working with businesses worldwide.
              </p>

            </div>
          </div>

          {/* Floating Information Card */}
          <div className="absolute -right-3 top-10 rounded-2xl border border-white/10 bg-[#111827]/95 px-5 py-4 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 sm:-right-6">

            <p className="text-xs font-extrabold tracking-wider text-white">
              WEB <span className="text-violet-400">•</span> E-COMMERCE
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              Digital Solutions
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}
