import { useEffect } from 'react'

export default function ScrollReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(
            '[data-reveal], [data-reveal] article'
        )

        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        if (reducedMotion) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return

                    const element = entry.target as HTMLElement
                    const isCard = element.tagName === 'ARTICLE'

                    let delay = 0

                    if (isCard && element.parentElement) {
                        const siblings = element.parentElement.querySelectorAll(
                            ':scope > article'
                        )

                        const index = Array.from(siblings).indexOf(element)
                        delay = Math.max(0, index) * 110
                    }

                    element.animate(
                        [
                            {
                                opacity: 0,
                                transform: isCard
                                    ? 'translateY(42px) scale(0.96)'
                                    : 'translateY(30px)',
                                filter: 'blur(7px)',
                            },
                            {
                                opacity: 1,
                                transform: 'translateY(0) scale(1)',
                                filter: 'blur(0)',
                            },
                        ],
                        {
                            duration: isCard ? 900 : 1050,
                            delay,
                            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                            fill: 'both',
                        }
                    )

                    observer.unobserve(element)
                })
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -45px 0px',
            }
        )

        elements.forEach((element) => {
            if (element.tagName === 'ARTICLE') {
                element.classList.add('premium-card')
            }

            observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    return null
}
