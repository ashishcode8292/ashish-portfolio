
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  // Detect scroll and highlight the current section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActive(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  // Close mobile menu using Escape
  useEffect(() => {
    if (!open) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  const handleLinkClick = (section: string) => {
    setActive(section)
    setOpen(false)
  }

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed left-0 top-0 z-50 w-full px-4 transition-all duration-500 sm:px-6 ${
        scrolled
          ? 'border-b border-white/10 bg-[#080b16]/95 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl'
          : 'border-b border-white/[0.04] bg-[#080b16]/75 py-5 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

        {/* AshishCode Branding */}
        <a
          href="#home"
          onClick={() => handleLinkClick('home')}
          aria-label="AshishCode home"
          className="group flex shrink-0 flex-col"
        >
          <span className="text-2xl font-black tracking-[-0.06em] text-white transition group-hover:text-violet-200">
            ASHISH
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              CODE.
            </span>
          </span>

          <span className="mt-[-2px] text-[8px] font-bold tracking-[0.25em] text-slate-500">
            FREELANCE WEB DEVELOPER
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 xl:flex">
          {links.map((link) => {
            const section = link.href.slice(1)
            const isActive = active === section

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(section)}
                aria-current={isActive ? 'location' : undefined}
                className={`relative whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-violet-400/10 text-violet-300'
                    : 'text-slate-400 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={() => handleLinkClick('contact')}
          className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-xs font-extrabold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/40 xl:inline-flex"
        >
          Let's Work Together
          <ArrowUpRight size={15} />
        </a>

        {/* Tablet CTA */}
        <a
          href="#contact"
          onClick={() => handleLinkClick('contact')}
          className="hidden shrink-0 items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2.5 text-xs font-bold text-violet-200 transition hover:bg-violet-400/20 sm:inline-flex xl:hidden"
        >
          Let's Talk
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/10 xl:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile / Tablet Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`absolute left-0 right-0 top-full overflow-hidden border-b border-white/10 bg-[#080b16]/98 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-300 xl:hidden ${
          open
            ? 'visible max-h-[calc(100svh-5rem)] overflow-y-auto opacity-100'
            : 'invisible max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 pb-7 pt-5 sm:px-6">

          <div className="mb-5 flex items-center justify-between">
            <p className="text-[10px] font-bold tracking-[0.25em] text-slate-500">
              NAVIGATION
            </p>

            <span className="text-[10px] font-semibold text-violet-300">
              INDIA • WORLDWIDE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {links.map((link) => {
              const section = link.href.slice(1)
              const isActive = active === section

              return (
                <a
                  key={link.name}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => handleLinkClick(section)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'border-violet-400/30 bg-violet-400/10 text-violet-300'
                      : 'border-white/[0.06] bg-white/[0.02] text-slate-300 hover:border-white/15 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  )}
                </a>
              )
            })}
          </div>

          <a
            href="#contact"
            tabIndex={open ? 0 : -1}
            onClick={() => handleLinkClick('contact')}
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-violet-500/20 transition hover:shadow-violet-500/40"
          >
            Let's Discuss Your Project
            <ArrowUpRight size={18} />
          </a>

          <p className="mt-5 text-center text-[10px] tracking-wide text-slate-600">
            © {new Date().getFullYear()} AshishCode. All rights reserved.
          </p>

        </div>
      </div>
    </nav>
  )
}
