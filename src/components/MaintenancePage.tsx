
import { Wrench, MessageCircle, Sparkles } from 'lucide-react'

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b16] px-6 py-20">

      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-2xl text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-400/30 bg-violet-400/10 text-violet-300">
          <Wrench size={36} />
        </div>

        <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-bold tracking-wider text-emerald-300">
          <Sparkles size={15} />
          TEMPORARY MAINTENANCE
        </div>

        <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-7xl">
          We'll Be Back
          <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
            Soon.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-slate-400">
          We're currently making improvements to our website
          to give you a better experience. Thank you for
          your patience.
        </p>

        <div className="mx-auto mt-9 h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
        </div>

        <a
          href="https://wa.me/918292794750"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-1"
        >
          <MessageCircle size={18} />
          Contact Ashish
        </a>

        <p className="mt-12 text-xs font-bold tracking-[0.25em] text-slate-500">
          ASHISH SHARMA · DEVELOPER
        </p>

      </div>
    </main>
  )
}
