
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Sparkles,
  Globe2,
} from 'lucide-react'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Work With Me', href: '#why-me' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'My Process', href: '#process' },
  { name: 'My Journey', href: '#journey' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  'Business Websites',
  'Landing Pages',
  'E-commerce Websites',
  'Website Redesign',
  'Custom Website Features',
]

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/ashishcode8292',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashish-kumar-a4a586448/',
    icon: FaLinkedinIn,
  },
  {
    name: 'Email',
    href: 'mailto:ashishkr6422@gmail.com',
    icon: Mail,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/918292794750',
    icon: MessageCircle,
  },
]

export default function Footer() {
  return (
    <footer
      data-reveal
      className="relative overflow-hidden border-t border-white/10 bg-[#080b16] px-6 pb-8 pt-16 md:pt-24"
    >

      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Top CTA Banner */}
        <div className="mb-16 overflow-hidden rounded-[28px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.12] via-[#15132a] to-[#101827] p-8 md:mb-20 md:p-12">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <div className="flex items-center gap-3">
                <Sparkles size={17} className="text-violet-300" />

                <p className="text-[10px] font-bold tracking-[0.25em] text-violet-300">
                  HAVE A PROJECT IN MIND?
                </p>
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Let's build something
                <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  meaningful together.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                Whether your business is in India or anywhere around
                the world, let's discuss your website idea and
                explore the right solution.
              </p>

            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#080b16] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-violet-300"
            >
              Start a Project

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.9fr_0.85fr_1fr] lg:gap-10">

          {/* Brand Column */}
          <div>

            <a
              href="#home"
              aria-label="AshishCode home"
              className="inline-flex flex-col"
            >

              <span className="text-3xl font-black tracking-[-0.06em] text-white">
                ASHISH
                <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  CODE.
                </span>
              </span>

              <span className="mt-[-2px] text-[8px] font-bold tracking-[0.28em] text-slate-500">
                FREELANCE WEB DEVELOPER
              </span>

            </a>

            <p className="mt-7 max-w-xs text-sm leading-8 text-slate-400">
              Building modern, responsive websites and practical
              digital experiences for businesses in India and
              worldwide.
            </p>

            {/* Location */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.05] px-4 py-2">
              <Globe2 size={14} className="text-violet-300" />

              <span className="text-[10px] font-bold tracking-wide text-violet-200">
                INDIA • WORLDWIDE
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">

              {socials.map((social) => {
                const Icon = social.icon
                const external = social.href.startsWith('https://')

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}

            </div>

          </div>

          {/* Navigation Column */}
          <div>

            <p className="text-[10px] font-bold tracking-[0.25em] text-violet-300">
              EXPLORE
            </p>

            <h3 className="mt-4 text-lg font-extrabold text-white">
              Quick Links
            </h3>

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5">

              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-violet-300"
                >
                  {link.name}

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}

            </div>

          </div>

          {/* Services Column */}
          <div>

            <p className="text-[10px] font-bold tracking-[0.25em] text-violet-300">
              WHAT I DO
            </p>

            <h3 className="mt-4 text-lg font-extrabold text-white">
              Services
            </h3>

            <div className="mt-7 space-y-5">

              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block text-xs font-medium text-slate-400 transition-colors hover:text-violet-300"
                >
                  {service}
                </a>
              ))}

            </div>

          </div>

          {/* Contact Column */}
          <div>

            <p className="text-[10px] font-bold tracking-[0.25em] text-violet-300">
              GET IN TOUCH
            </p>

            <h3 className="mt-4 text-lg font-extrabold text-white">
              Let's Connect
            </h3>

            <p className="mt-7 text-xs leading-7 text-slate-400">
              Have a question or a project idea? Reach out directly
              through WhatsApp or email.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918292794750"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-3 text-xs font-semibold text-slate-300 transition hover:text-emerald-400"
            >
              <MessageCircle size={17} className="shrink-0 text-emerald-400" />
              +91 82927 94750
            </a>

            {/* Email */}
            <a
              href="mailto:ashishkr6422@gmail.com"
              className="mt-5 flex items-start gap-3 break-all text-xs font-semibold text-slate-300 transition hover:text-violet-300"
            >
              <Mail size={17} className="shrink-0 text-violet-300" />
              ashishkr6422@gmail.com
            </a>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-violet-300 transition hover:gap-4"
            >
              Send an Enquiry
              <ArrowUpRight size={15} />
            </a>

          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="flex flex-col justify-between gap-6 pt-8 sm:flex-row sm:items-center">

          <div>

            <p className="text-xs leading-6 text-slate-500">
              © {new Date().getFullYear()} AshishCode.
              All rights reserved.
            </p>

            <p className="mt-1 text-[10px] tracking-wide text-slate-600">
              Designed and developed by Ashish Sharma.
            </p>

          </div>

          <a
            href="#home"
            className="group inline-flex items-center gap-3 self-start text-[10px] font-bold tracking-[0.2em] text-slate-400 transition hover:text-violet-300 sm:self-auto"
          >
            BACK TO TOP

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-violet-400/40 group-hover:bg-violet-400/10">
              <ArrowUp size={16} />
            </span>
          </a>

        </div>

      </div>
    </footer>
  )
}
