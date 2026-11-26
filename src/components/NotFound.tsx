
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b16] px-6 py-20">

      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-2xl text-center">

        <p className="text-sm font-bold tracking-[0.4em] text-violet-400">
          PAGE NOT FOUND
        </p>

        <h1 className="mt-6 text-8xl font-black tracking-tighter text-white md:text-[150px]">
          404<span className="text-violet-400">.</span>
        </h1>

        <h2 className="mt-6 text-2xl font-extrabold text-white md:text-4xl">
          Lost in the digital space?
        </h2>

        <p className="mx-auto mt-6 max-w-md text-sm leading-8 text-slate-400">
          The page you're looking for doesn't exist or may have
          been moved. Let's get you back to the main portfolio.
        </p>

        <a
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#080b16] transition hover:bg-violet-300"
        >
          <ArrowLeft size={18} />
          Back to Homepage
        </a>

        <div className="mt-8">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition hover:text-violet-300"
          >
            <Home size={14} />
            Contact Ashish
          </a>
        </div>

      </div>
    </main>
  )
}
