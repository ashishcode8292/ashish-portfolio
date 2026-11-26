
import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [exiting, setExiting] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false)
      return
    }

    const exitTimer = window.setTimeout(() => {
      setExiting(true)
    }, 900)

    const removeTimer = window.setTimeout(() => {
      setVisible(false)
    }, 1400)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      role="status"
      aria-label="Loading Ashish portfolio"
      className={`page-loader ${exiting ? 'page-loader-exit' : ''}`}
    >
      <div className="page-loader-glow" />

      <div className="page-loader-content">

        <div className="page-loader-mark">
          AS<span>.</span>
        </div>

        <h1 className="page-loader-brand">
          ASHISH<span>.</span>
        </h1>

        <p className="page-loader-subtitle">
          DESIGNING DIGITAL EXPERIENCES
        </p>

        <div className="page-loader-track">
          <span />
        </div>

        <p className="page-loader-loading">
          WELCOME TO MY PORTFOLIO
        </p>

      </div>

      <div className="page-loader-corner">
        PORTFOLIO / 2026
      </div>
    </div>
  )
}
