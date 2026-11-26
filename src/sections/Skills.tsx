
import { useState, type ElementType } from 'react'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiKotlin,
  SiJetpackcompose,
  SiGithub,
  SiVite,
  SiAndroidstudio,
} from 'react-icons/si'
import { Code2, Server } from 'lucide-react'
import { skills } from '../data/skills'

const iconMap: Record<string, ElementType> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  Java: Code2,
  'VS Code': Code2,
  JavaScript: SiJavascript,
  'React.js': SiReact,
  TypeScript: SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  Kotlin: SiKotlin,
  'Jetpack Compose': SiJetpackcompose,
  'Git & GitHub': SiGithub,
  Vite: SiVite,
  'Android Studio': SiAndroidstudio,
  'Full Stack Development': Code2,
  'Backend Development': Server,
}

const colorMap: Record<string, string> = {
  HTML5: '#E34F26',
  CSS3: '#1572B6',
  JavaScript: '#F7DF1E',
  'React.js': '#61DAFB',
  TypeScript: '#3178C6',
  'Tailwind CSS': '#06B6D4',
  Java: '#ED8B00',
  Kotlin: '#A97BFF',
  'Jetpack Compose': '#4285F4',
  'VS Code': '#007ACC',
  'Git & GitHub': '#F05032',
  Vite: '#646CFF',
  'Android Studio': '#3DDC84',
  'Full Stack Development': '#A78BFA',
  'Backend Development': '#22D3EE',
}

const categories = [
  'All',
  'Frontend',
  'Backend',
  'Android',
  'Tools',
  'Currently Learning',
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section
      id="skills"
      data-reveal
      className="relative overflow-hidden bg-[#080b16] px-6 py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-violet-400" />
          <p className="text-xs font-bold tracking-[0.3em] text-violet-400">
            MY TECHNOLOGIES
          </p>
        </div>

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Tools I use.
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Skills I build.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-slate-400">
            Technologies I use in projects and tools I am
            continuously learning to improve my development skills.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-3 text-xs font-bold transition-all duration-300 ${activeCategory === category
                  ? 'border-violet-400 bg-violet-500/15 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.12)]'
                  : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-violet-400/50 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-semibold tracking-widest text-slate-500">
            SHOWING SKILLS
          </p>
          <p className="text-sm font-bold text-violet-300">
            {filteredSkills.length.toString().padStart(2, '0')} / {skills.length.toString().padStart(2, '0')}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.name] || Code2
            const accent = colorMap[skill.name] || '#A78BFA'
            const isLearning = skill.status === 'Learning'

            return (
              <article
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101625] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_15px_45px_rgba(0,0,0,0.25)]"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ backgroundColor: accent }}
                />

                <div className="relative mb-8 flex items-center justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 transition-all duration-300 group-hover:scale-110"
                    style={{ color: accent, backgroundColor: `${accent}18` }}
                  >
                    <Icon size={30} />
                  </div>

                  <span className="text-sm text-slate-600 transition-colors group-hover:text-violet-300">
                    ↗
                  </span>
                </div>

                <h3 className="relative text-base font-bold text-white">
                  {skill.name}
                </h3>

                <p className="relative mt-2 text-xs text-slate-500">
                  {skill.category}
                </p>

                <div className="relative mt-6 border-t border-white/10 pt-4">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1.5 text-[9px] font-bold tracking-wider ${isLearning
                        ? 'border-amber-400/20 bg-amber-400/10 text-amber-300'
                        : 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                      }`}
                  >
                    {skill.status.toUpperCase()}
                  </span>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
