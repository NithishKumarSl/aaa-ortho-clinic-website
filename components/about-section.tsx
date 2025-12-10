"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AboutSection() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gallery = galleryRef.current
    const wrapper = wrapperRef.current
    if (!gallery || !wrapper) return

    let isPaused = false

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true
      gallery.style.animationPlayState = 'paused'
    }

    const handleMouseLeave = () => {
      isPaused = false
      gallery.style.animationPlayState = 'running'
    }

    // Touch pause for mobile
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      gallery.style.animationPlayState = 'paused'
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX
      setTimeout(() => {
        if (Math.abs(touchStartX - touchEndX) < 10) {
          gallery.style.animationPlayState = 'running'
        }
      }, 2000)
    }

    wrapper.addEventListener('mouseenter', handleMouseEnter)
    wrapper.addEventListener('mouseleave', handleMouseLeave)
    wrapper.addEventListener('touchstart', handleTouchStart)
    wrapper.addEventListener('touchend', handleTouchEnd)

    return () => {
      wrapper.removeEventListener('mouseenter', handleMouseEnter)
      wrapper.removeEventListener('mouseleave', handleMouseLeave)
      wrapper.removeEventListener('touchstart', handleTouchStart)
      wrapper.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  const galleryImages = [
    { src: "/images/gallery-1.jpg", alt: "Clinic exterior" },
    { src: "/images/gallery-2.jpg", alt: "Dr. Aravind Ravichandran at desk" },
    { src: "/images/gallery-3.jpg", alt: "Treatment room" },
    { src: "/images/gallery-4.jpg", alt: "AAA Ortho Clinic sign" },
    { src: "/images/gallery-5.jpg", alt: "Doctor consultation with patient" },
    { src: "/images/gallery-6.jpg", alt: "Clinic entrance" },
  ]

  // Duplicate images for seamless loop
  const allImages = [...galleryImages, ...galleryImages]

  const stats = [
    { value: "5+", label: "Experience" },
    { value: "100k+", label: "Patient" },
    { value: "98%", label: "Satisfaction" },
    { value: "100%", label: "Patient Care" },
  ]

  return (
    <section id="about" className="about-section bg-[#FDFEFF] w-full py-8 sm:py-12 md:py-[50px] scroll-mt-[70px] px-4 sm:px-5 md:px-[5%]">
      <div className="about-container max-w-[1280px] mx-auto bg-[#FDFEFF]">
        <p className="about-subtext text-[10px] sm:text-xs font-semibold tracking-[1.2px] text-[#6b7c93] uppercase mb-2 sm:mb-3">ABOUT US</p>
        <h2 className="about-title text-[28px] sm:text-[32px] md:text-[42px] font-bold text-[#0a65d9] leading-[1.15] sm:leading-[1.2] mb-5 sm:mb-6 md:mb-10 mt-0">
          Caring for Your Joints, <br className="hidden sm:block" />
          Spine & Mobility
        </h2>

        {/* Infinite Auto-Scrolling Gallery */}
        <div 
          ref={wrapperRef}
          className="about-images-wrapper w-full overflow-hidden mb-5 sm:mb-6 md:mb-10 relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
        >
          <div className="about-images-scroll w-full overflow-hidden">
            <div 
              ref={galleryRef}
              className="about-images flex gap-3 sm:gap-4 w-max"
              style={{
                animation: 'scroll-infinite 40s linear infinite',
                willChange: 'transform',
              }}
            >
              {allImages.map((image, idx) => (
                <Image
                  key={idx}
                  src={image.src}
                  alt={image.alt}
                  width={240}
                  height={180}
                  className="about-gallery-img w-[200px] sm:w-[240px] min-w-[200px] sm:min-w-[240px] h-[150px] sm:h-[180px] rounded-lg sm:rounded-xl object-cover shrink-0 cursor-pointer transition-all hover:scale-105 hover:shadow-[0_12px_32px_rgba(18,52,91,0.2)] hover:z-10 hover:relative active:scale-[0.98]"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="stats-wrapper grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-3.5 md:gap-6 mb-5 sm:mb-6 md:mb-8 justify-start items-stretch">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="stat-box flex-1 min-w-0 sm:min-w-[120px] sm:max-w-[140px] md:min-w-[150px] p-3 sm:p-4 md:p-[26px_30px] rounded-lg sm:rounded-xl border-2 border-[#cfe0ff] text-center bg-[#f0f7ff] transition-all flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(18,52,91,0.04)] hover:bg-[#e6f2ff] hover:border-[#a8c8ff] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(18,52,91,0.08)] active:scale-[0.98]"
            >
              <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#0a65d9] mb-1 sm:mb-1.5 leading-none tracking-[-0.3px]">{stat.value}</h3>
              <p className="text-xs sm:text-[13px] md:text-[15px] font-medium text-[#666] m-0 leading-[1.3]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="about-text max-w-[650px] text-sm sm:text-[15px] md:text-[17px] leading-[1.6] md:leading-[1.65] text-[#444] mt-0 mb-0">
          AAA Ortho Clinic is a patient-focused orthopedic centre offering advanced treatment 
          for pain, injury and mobility issues. Our approach combines expert diagnosis, 
          evidence-based procedures and personalised care to ensure every patient recovers 
          quickly and safely.
        </p>
      </div>
    </section>
  )
}
