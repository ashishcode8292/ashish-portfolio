
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    if (!visible) return null

    return (
        <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#151c2d] text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500"
        >
            <ArrowUp size={21} />
        </button>
    )
}
