
import { MessageCircle, ArrowUpRight } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918292794750?text=Hello%20Ashish%2C%20I%20want%20to%20discuss%20a%20project."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Ashish on WhatsApp"
      className="group fixed bottom-6 right-6 z-[100] flex items-center gap-3"
    >
      <span className="hidden rounded-xl border border-white/10 bg-[#101625] px-4 py-3 text-xs font-bold text-white shadow-xl md:group-hover:block">
        Let's discuss your project
      </span>

      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110">
        {/* Animated green pulse */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />

        {/* WhatsApp icon */}
        <MessageCircle size={28} className="relative z-10" />

        <ArrowUpRight
          size={13}
          className="absolute right-2 top-2 z-10"
        />
      </span>
    </a>
  )
}
