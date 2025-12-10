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
    <section className="hero min-h-[calc(100vh-70px)] py-8 pb-12 pt-24 sm:pt-28 md:pt-[160px] bg-[linear-gradient(142deg,#f8fbff,#edf4ff)] px-4 sm:px-5 md:px-[5%] md:py-[50px] md:pb-[80px] md:min-h-[calc(100vh-80px)]">
      <div className="container max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-[60px] text-center md:text-left md:justify-between">
        {/* Hero Content */}
        <div className="hero-content max-w-[540px] w-full text-left order-2 md:order-1">
          <p className="tagline text-xs sm:text-sm md:text-base font-semibold text-[#0a65d9] mb-2 sm:mb-3 leading-[1.4]">உடம்பை வளர்த்தேன், உயிர் வளர்த்தேன்</p>
          <h4 className="sub-heading text-base sm:text-lg font-medium text-[#444] mb-3 sm:mb-4 leading-[1.3]">Orthopedic Clinic in Pattukkottai</h4>
          <h1 className="hero-title text-[32px] sm:text-[38px] md:text-[48px] font-extrabold text-[#1c76e4] my-0 mb-4 sm:mb-5 md:my-3 md:mb-5 leading-[1.15] sm:leading-[1.2]">
            Expert Bone & Joint Pain Treatment
          </h1>
          <p className="hero-desc text-sm sm:text-base font-normal text-[#666] mb-6 sm:mb-8 leading-[1.6] sm:leading-[1.65] p-0">
            Fast pain relief, accurate diagnosis & long-term recovery for all bone, joint & spine problems.
          </p>
          
          {/* CTA Buttons */}
          <div className="hero-cta gap-3 sm:gap-4 mb-6 sm:mb-8 flex flex-col sm:flex-row items-stretch sm:items-center flex-wrap">
            <a 
              href="https://wa.me/918220776119" 
              className="btn bg-[linear-gradient(180deg,#1c76e4,#0a65d9)] text-white font-semibold text-sm sm:text-base py-3.5 sm:py-3.5 px-6 sm:px-8 rounded-xl shadow-[0_8px_22px_rgba(10,101,217,0.28)] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(10,101,217,0.35)] border-none whitespace-nowrap text-center flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="sm:hidden">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Get Pain Relief Today
            </a>
            <a 
              href="tel:8220776119" 
              className="call text-[#0a65d9] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 no-underline whitespace-nowrap py-3 sm:py-0 px-4 sm:px-0 rounded-xl sm:rounded-none bg-[#FDFEFF] sm:bg-transparent border border-[rgba(18,52,91,0.1)] sm:border-0 shadow-sm sm:shadow-none active:scale-[0.98] sm:active:scale-100"
            >
              <img src="/material-symbols_call-outline.svg" alt="Call icon" className="w-5 h-5 opacity-90" />
              <span className="underline">8220776119</span>
            </a>
          </div>

          {/* Info Box */}
          <div className="info-box bg-[#FDFEFF] rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 m-0 border border-[rgba(18,52,91,0.06)] flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
            <div className="info-item flex items-start gap-3 sm:gap-3.5 flex-1">
              <img src="/mdi_clock-outline.svg" alt="Clock icon" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="label text-xs sm:text-[13px] font-normal text-[#666] mb-1 sm:mb-1.5 leading-[1.3]">Opening Hours</div>
                <div className="value text-sm sm:text-[15px] font-semibold text-[#222] leading-[1.4]">11 AM – 2 PM<br />6 PM – 9 PM</div>
              </div>
            </div>
            <div className="divider w-full h-px sm:w-px sm:h-[50px] bg-[#e0e8f2] shrink-0"></div>
            <div className="info-item flex items-start gap-3 sm:gap-3.5 flex-1">
              <img src="/icon location-light.svg" alt="Location icon" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="label text-xs sm:text-[13px] font-normal text-[#666] mb-1 sm:mb-1.5 leading-[1.3]">Location</div>
                <div className="value text-sm sm:text-[15px] font-semibold text-[#222] leading-[1.4]">Vadachery Road,<br />Pattukkottai</div>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE + DOCTOR CARD */}
        <div className="image-wrapper w-full max-w-[400px] sm:max-w-[480px] md:max-w-[580px] md:w-1/2 h-auto mx-auto md:mx-0 rounded-[20px] sm:rounded-[24px] overflow-hidden relative shrink-0 order-1 md:order-2">
          <div className="parallax-layer will-change-transform rounded-[20px] sm:rounded-[24px] overflow-hidden">
            <img 
              ref={parallaxImgRef}
              src="/images/hero-banner.jpg" 
              alt="Dr. Aravind Ravichandran" 
              className="w-full h-auto block will-change-transform transition-transform duration-100 ease-out"
              loading="eager"
            />
            <div className="doctor-card absolute bottom-4 sm:bottom-6 md:bottom-[38px] left-1/2 md:left-[38px] -translate-x-1/2 md:translate-x-0 bg-[#FDFEFF] p-3 sm:p-4 md:p-[18px_30px] rounded-[16px] sm:rounded-[20px] flex items-center gap-3 sm:gap-4 md:gap-6 shadow-[0_12px_36px_rgba(0,0,0,0.12)] sm:shadow-[0_16px_48px_rgba(0,0,0,0.14)] animate-[float_6.8s_ease-in-out_infinite] max-w-[calc(100%-32px)] sm:max-w-[320px]">
              <div className="exp-badge bg-[#eaf3ff] w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] md:w-[70px] md:h-[70px] rounded-[12px] sm:rounded-[14px] flex flex-col items-center justify-center shrink-0">
                <div className="num text-[22px] sm:text-[26px] md:text-[28px] font-extrabold text-[#0a65d9] leading-none">5+</div>
                <div className="exp text-[10px] sm:text-xs md:text-[13px] font-semibold text-[#0a65d9] mt-0.5 leading-none">Exp</div>
              </div>
              <div className="doc-info min-w-0 flex-1">
                <div className="name text-[16px] sm:text-[18.5px] md:text-[19px] font-bold text-[#222] m-0 leading-[1.2] truncate">Dr. Aravind Ravichandran</div>
                <div className="qual text-[13px] sm:text-[14.5px] md:text-[15px] font-medium text-[#666] mt-1 leading-none">M.S. Orthopaedics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
