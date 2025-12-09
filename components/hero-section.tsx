"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const parallaxImgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let ticking = false

    const updateParallax = () => {
      if (!parallaxImgRef.current) return
      const offset = window.scrollY * 0.15
      parallaxImgRef.current.style.transform = `translateY(${offset}px)`
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero min-h-[calc(100vh-70px)] py-[30px] pb-[60px] pt-[80px] md:pt-[90px] bg-[linear-gradient(142deg,#f8fbff,#edf4ff)] px-5 md:px-[5%] md:py-[50px] md:pb-[80px] md:min-h-[calc(100vh-80px)]">
      <div className="container max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-[52px] md:gap-[60px] text-center md:text-left md:justify-between">
        <div className="hero-content max-w-[540px] w-full text-left">
        <p className="tagline text-sm md:text-base font-semibold text-[#0a65d9] mb-2 leading-[1.4]">உடம்பை வளர்த்தேன், உயிர் வளர்த்தேன்</p>
        <h4 className="sub-heading text-lg font-medium text-[#444] mb-3 leading-[1.3]">Orthopedic Clinic in Pattukkottai</h4>
        <h1 className="hero-title text-[42px] md:text-[48px] font-extrabold text-[#1c76e4] my-0 mb-5 md:my-3 md:mb-5 leading-[1.2]">
          Expert Bone & Joint Pain Treatment
        </h1>
        <p className="hero-desc text-base font-normal text-[#666] mb-8 md:mb-8 leading-[1.65] p-0">
          Fast pain relief, accurate diagnosis & long-term recovery for all bone, joint & spine problems.
        </p>
        <div className="hero-cta gap-4 mb-8 flex flex-row items-center flex-wrap">
          <a 
            href="https://wa.me/918220776119" 
            className="btn bg-[linear-gradient(180deg,#1c76e4,#0a65d9)] text-white font-semibold text-base py-3.5 px-8 rounded-xl shadow-[0_8px_22px_rgba(10,101,217,0.28)] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(10,101,217,0.35)] border-none whitespace-nowrap"
          >
            Get Pain Relief Today
          </a>
          <a 
            href="tel:8220776119" 
            className="call text-[#0a65d9] font-semibold text-base flex items-center gap-2 no-underline whitespace-nowrap"
          >
            <img src="/material-symbols_call-outline.svg" alt="Call icon" className="w-5 h-5 opacity-90" />
            <span className="underline">8220776119</span>
          </a>
        </div>
        <div className="info-box bg-[#FDFEFF] rounded-[20px] p-6 md:p-6 m-0 border border-[rgba(18,52,91,0.06)] flex flex-row gap-6 items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
          <div className="info-item flex items-start gap-3.5 flex-1">
            <img src="/mdi_clock-outline.svg" alt="Clock icon" className="w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <div className="label text-[13px] font-normal text-[#666] mb-1.5 leading-[1.3]">Opening Hours</div>
              <div className="value text-[15px] font-semibold text-[#222] leading-[1.4]">11 AM – 2 PM<br />6 PM – 9 PM</div>
            </div>
          </div>
          <div className="divider w-px h-[50px] bg-[#e0e8f2] shrink-0"></div>
          <div className="info-item flex items-start gap-3.5 flex-1">
            <img src="/icon location-light.svg" alt="Location icon" className="w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <div className="label text-[13px] font-normal text-[#666] mb-1.5 leading-[1.3]">Location</div>
              <div className="value text-[15px] font-semibold text-[#222] leading-[1.4]">Vadachery Road,<br />Pattukkottai</div>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE + DOCTOR CARD */}
      <div className="image-wrapper w-full max-w-[520px] md:max-w-[580px] md:w-1/2 h-auto mx-4 md:mx-0 rounded-[24px] overflow-hidden relative flex-shrink-0">
        <div className="parallax-layer will-change-transform rounded-[24px] overflow-hidden">
          <img 
            ref={parallaxImgRef}
            src="/images/hero-banner.jpg" 
            alt="Dr. Aravind Ravichandran" 
            className="w-full block will-change-transform transition-transform duration-100 ease-out"
            loading="eager"
          />
          <div className="doctor-card absolute bottom-[26px] md:bottom-[38px] max-w-[320px] left-1/2 md:left-[38px] -translate-x-1/2 md:translate-x-0 bg-[#FDFEFF] p-[17px_28px_18px] md:p-[18px_30px] rounded-[20px] flex items-center gap-[22px] md:gap-6 shadow-[0_16px_48px_rgba(0,0,0,0.14)] animate-[float_6.8s_ease-in-out_infinite]">
            <div className="exp-badge bg-[#eaf3ff] w-[66px] h-[66px] md:w-[70px] md:h-[70px] rounded-[14px] flex flex-col items-center justify-center shrink-0">
              <div className="num text-[26px] md:text-[28px] font-extrabold text-[#0a65d9] leading-none">5+</div>
              <div className="exp text-xs md:text-[13px] font-semibold text-[#0a65d9] mt-0.5 leading-none">Exp</div>
            </div>
            <div className="doc-info">
              <div className="name text-[18.5px] md:text-[19px] font-bold text-[#222] m-0 leading-[1.2]">Dr. Aravind Ravichandran</div>
              <div className="qual text-[14.5px] md:text-[15px] font-medium text-[#666] mt-1 leading-none">M.S. Orthopaedics</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
