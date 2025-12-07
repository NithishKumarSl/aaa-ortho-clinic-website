"use client"

import { useEffect, useRef } from "react"

export default function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollSpeed = 1
    let interval: NodeJS.Timeout | null = null
    let isPaused = false

    const autoScroll = () => {
      if (isPaused || !carousel) return
      
      carousel.scrollLeft += scrollSpeed

      // Loop back to start when end is reached
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2) {
        carousel.scrollLeft = 0
      }
    }

    const startCarousel = () => {
      if (!interval) {
        interval = setInterval(autoScroll, 20)
      }
    }

    const stopCarousel = () => {
      if (interval) {
        clearInterval(interval)
        interval = null
      }
    }

    // Start carousel
    startCarousel()

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true
      stopCarousel()
    }

    const handleMouseLeave = () => {
      isPaused = false
      startCarousel()
    }

    // Pause on touch (mobile)
    const handleTouchStart = () => {
      isPaused = true
      stopCarousel()
    }

    const handleTouchEnd = () => {
      setTimeout(() => {
        isPaused = false
        startCarousel()
      }, 2000)
    }

    carousel.addEventListener('mouseenter', handleMouseEnter)
    carousel.addEventListener('mouseleave', handleMouseLeave)
    carousel.addEventListener('touchstart', handleTouchStart)
    carousel.addEventListener('touchend', handleTouchEnd)

    return () => {
      stopCarousel()
      carousel.removeEventListener('mouseenter', handleMouseEnter)
      carousel.removeEventListener('mouseleave', handleMouseLeave)
      carousel.removeEventListener('touchstart', handleTouchStart)
      carousel.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  const testimonials = [
    {
      quote: "Knee pain reduced in 2 visits doctor explained everything clearly.",
      author: "patient 1",
    },
    {
      quote: "Back pain improved quickly, thanks to the clear guidance.",
      author: "patient 2",
    },
    {
      quote: "Doctor explained every detail, very professional.",
      author: "patient 3",
    },
    {
      quote: "Friendly staff and comfortable environment.",
      author: "patient 4",
    },
  ]

  return (
    <section id="testimonials" className="section testimonials reveal bg-[#f3f7fc] py-20 scroll-mt-[70px]">
      <div className="container max-w-[1200px] mx-auto px-8">
        <p className="sub-title text-sm tracking-[1px] text-[#0f5fcc] mb-2.5 font-medium">TESTIMONIALS</p>
        <h3 className="section-title text-[36px] md:text-4xl font-bold text-[#0f5fcc] mb-10 leading-[1.2] text-left">
          Real Patients.<br />Real Results.
        </h3>
        <div className="testimonial-wrapper w-full overflow-hidden py-2.5">
          <div 
            ref={carouselRef}
            className="testimonial-row flex gap-7 pl-1 overflow-x-auto scroll-smooth scroll-snap-x-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [scroll-padding-left:4px]"
            style={{
              scrollSnapType: 'x mandatory',
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <blockquote 
                key={idx} 
                className="testimonial-card fade-slide min-w-[300px] max-w-[320px] scroll-snap-align-start bg-white p-7 rounded-[22px] border-2 border-[#0f5fcc] text-[#0f5fcc] text-base leading-[1.5] shadow-[0_4px_12px_rgba(18,52,91,0.06)] flex-shrink-0 opacity-0 translate-y-6 animate-[fadeSlide_0.8s_ease_forwards]"
                style={{
                  animationDelay: `${0.1 + idx * 0.15}s`,
                }}
              >
                <div className="avatar w-12 h-12 bg-[#dedede] rounded-xl mb-3.5"></div>
                <p className="m-0 mb-2">{testimonial.quote}</p>
                <footer className="mt-4.5 text-sm text-[#9b9b9b]">' {testimonial.author} "</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-row::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
