"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Smooth scroll with header offset
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement
      if (!target) return

      const href = target.getAttribute('href')
      if (!href || href === '#') return

      const targetId = href.slice(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        e.preventDefault()
        const header = document.querySelector('.site-header')
        const headerHeight = header ? header.getBoundingClientRect().height : 70
        const rect = targetElement.getBoundingClientRect()
        const scrollPos = window.scrollY + rect.top - headerHeight - 10
        
        window.scrollTo({
          top: Math.max(0, scrollPos),
          behavior: 'smooth'
        })
      }
    }

    // Initialize reveal animations
    const initReveal = () => {
      const reveals = document.querySelectorAll('.reveal:not(.visible)')
      if (!reveals.length) return

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = Number(el.getAttribute('data-reveal-delay')) || 0
            
            setTimeout(() => {
              el.classList.add('visible')
            }, delay)
            
            observer.unobserve(el)
          }
        })
      }, {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12
      })

      reveals.forEach(reveal => observer.observe(reveal))
    }

    document.addEventListener('click', handleSmoothScroll)
    initReveal()

    // Re-initialize reveals when new content loads
    const observer = new MutationObserver(() => {
      initReveal()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      document.removeEventListener('click', handleSmoothScroll)
      observer.disconnect()
    }
  }, [])

  return null
}


