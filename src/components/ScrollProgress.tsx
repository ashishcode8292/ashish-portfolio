
import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        scrollableHeight > 0
          ? window.scrollY / scrollableHeight
          : 0

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    updateProgress()

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-white/5">
      <div
        ref={progressRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-300 shadow-[0_0_12px_rgba(139,92,246,0.5)]"
      />
    </div>
  )
}
