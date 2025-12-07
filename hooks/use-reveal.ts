"use client"

import { useEffect, useRef, useState } from "react"

export function useReveal(delay: number = 0) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay])

  return { ref, isVisible }
}


