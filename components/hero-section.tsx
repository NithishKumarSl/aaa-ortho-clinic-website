"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="hero min-h-[calc(100vh-70px)] pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-14 md:pb-16 bg-[linear-gradient(142deg,#f8fbff,#edf4ff)] px-5 sm:px-6 md:px-[5%]">
      <div className="container max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 sm:gap-12 md:gap-[60px] text-left md:justify-between">
        {/* Hero Content */}
        <div className="hero-content max-w-[540px] w-full text-left order-2 md:order-1 flex flex-col justify-center">
          {/* Hidden SEO text for brand + description (not visually shown) */}
          <div className="sr-only">
            <h1>AAA Ortho Clinic</h1>
            <p>Official website of AAA Ortho Clinic – Orthopedic Care</p>
          </div>

          <p className="tagline text-sm sm:text-base font-semibold text-[#0a65d9] mb-3 sm:mb-4 leading-[1.4] text-left">உடம்பை வளர்த்தேன், உயிர் வளர்த்தேன்</p>
          <h4 className="sub-heading text-lg sm:text-xl font-medium text-[#444] mb-4 sm:mb-5 leading-[1.3] text-left">Orthopedic Clinic in Pattukkottai</h4>
          <h1 className="hero-title text-[30px] sm:text-[36px] md:text-[42px] font-extrabold text-[#1c76e4] my-0 mb-5 sm:mb-6 md:mb-6 leading-[1.15] sm:leading-[1.2] text-left">
            Expert Bone & Joint Pain Treatment
          </h1>
          <p className="hero-desc text-base sm:text-lg font-normal text-[#666] mb-8 sm:mb-10 leading-[1.65] sm:leading-[1.7] p-0 text-left">
            Fast pain relief, accurate diagnosis & long-term recovery for all bone, joint & spine problems.
          </p>
          
          {/* CTA Buttons */}
          <div className="hero-cta gap-4 sm:gap-5 mb-8 sm:mb-10 flex flex-col sm:flex-row items-stretch sm:items-start flex-wrap">
            <a 
              href="https://wa.me/918220776119" 
              className="btn bg-[linear-gradient(180deg,#1c76e4,#0a65d9)] text-white font-semibold text-base sm:text-base py-4 sm:py-3.5 px-8 sm:px-8 rounded-xl shadow-[0_8px_22px_rgba(10,101,217,0.28)] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(10,101,217,0.35)] border-none whitespace-nowrap text-center flex items-center justify-center gap-2.5 active:scale-[0.98] min-h-[52px]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="sm:hidden">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Get Pain Relief Today
            </a>
            <a 
              href="tel:8220776119" 
              className="call text-[#0a65d9] font-semibold text-base sm:text-base flex items-center justify-center gap-2.5 no-underline whitespace-nowrap py-4 sm:py-0 px-6 sm:px-0 rounded-xl sm:rounded-none bg-[#FDFEFF] sm:bg-transparent border-2 border-[rgba(18,52,91,0.12)] sm:border-0 shadow-sm sm:shadow-none active:scale-[0.98] sm:active:scale-100 min-h-[52px]"
            >
              <Image src="/material-symbols_call-outline.svg" alt="Call icon" width={24} height={24} className="w-6 h-6 opacity-90" loading="lazy" />
              <span className="font-medium">Book Appointment</span>
            </a>
          </div>

          {/* Info Box */}
          <div className="info-box bg-[#FDFEFF] rounded-xl sm:rounded-2xl p-4 sm:p-6 m-0 border border-[rgba(18,52,91,0.06)] flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
            <div className="info-item flex items-start gap-3 sm:gap-3.5 flex-1">
              <Image src="/mdi_clock-outline.svg" alt="Clock icon" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" loading="lazy" />
              <div className="flex-1 min-w-0">
                <div className="label text-xs sm:text-xs text-[#666] uppercase font-semibold mb-2 text-left">Opening Hours</div>
                <div className="value text-base sm:text-base font-semibold text-[#222] leading-relaxed text-left">11 AM – 2 PM<br />6 PM – 9 PM</div>
              </div>
            </div>
            <div className="divider w-full h-px sm:w-px sm:h-[50px] bg-[#e0e8f2] shrink-0"></div>
            <div className="info-item flex items-start gap-3 sm:gap-3.5 flex-1">
              <Image src="/icon location-light.svg" alt="Location icon" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" loading="lazy" />
              <div className="flex-1 min-w-0">
                <div className="label text-xs sm:text-xs text-[#666] uppercase font-semibold mb-2 text-left">Location</div>
                <div className="value text-base sm:text-base font-semibold text-[#222] leading-relaxed text-left">Vadachery Road,<br />Pattukkottai</div>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE + DOCTOR CARD */}
        {/* Mobile View - Separate Structure */}
        <div className="image-wrapper-mobile md:hidden w-full max-w-[400px] mx-auto rounded-xl overflow-hidden relative order-1 mt-8">
          <div className="relative rounded-xl overflow-hidden" style={{ transform: 'scale(1.05)' }}>
            {/* Background Image */}
            <Image
              src="/images/hero-banner.jpg"
              alt="Dr. Aravind Ravichandran"
              width={800}
              height={600}
              className="w-full h-auto block object-cover"
              priority
            />

            {/* Mobile Doctor Card - Centered (using left-[95%] to account for image scale transform) */}
            <div className="doctor-card-mobile absolute bottom-4 left-[95%] -translate-x-1/2 bg-[#FDFEFF] p-3 rounded-xl flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] animate-[float_6.8s_ease-in-out_infinite] w-[calc(100%-32px)] max-w-[320px]">
              {/* Experience Badge */}
              <div className="exp-badge bg-[#eaf3ff] w-[48px] h-[48px] rounded-[10px] flex flex-col items-center justify-center shrink-0">
                <div className="num text-[18px] font-extrabold text-[#0a65d9] leading-none">5+</div>
                <div className="exp text-[9px] font-semibold text-[#0a65d9] leading-none mt-0.5">Exp</div>
              </div>

              {/* Doctor Info */}
              <div className="doc-info flex-1 min-w-0 overflow-hidden text-left">
                <div className="name text-[14px] font-bold text-[#222] leading-[1.2]">Dr. Aravind Ravichandran</div>
                <div className="qual text-[12px] font-medium text-[#666] leading-none mt-0.5">M.S. Orthopaedics</div>
              </div>
            </div>
          </div>
        </div>


        {/* Desktop/Tablet View - Separate Structure */}
        <div className="image-wrapper-desktop hidden md:block w-full max-w-[480px] lg:max-w-[580px] lg:w-1/2 h-auto mx-auto lg:mx-0 rounded-2xl overflow-hidden relative shrink-0 order-2 self-auto">
          <div className="rounded-2xl overflow-hidden relative" style={{ transform: 'scale(1.1)' }}>
            <Image 
              src="/images/hero-banner.jpg" 
              alt="Dr. Aravind Ravichandran" 
              width={800}
              height={600}
              className="w-full h-auto block"
              priority
            />
            {/* Desktop Doctor Card - Original Position */}
            <div className="doctor-card-desktop absolute bottom-6 lg:bottom-[38px] left-6 lg:left-[38px] bg-[#FDFEFF] p-4 lg:p-[18px_30px] rounded-2xl flex items-center gap-4 lg:gap-6 shadow-[0_16px_48px_rgba(0,0,0,0.14)] animate-[float_6.8s_ease-in-out_infinite] max-w-[320px]">
              <div className="exp-badge bg-[#eaf3ff] w-[66px] h-[66px] lg:w-[70px] lg:h-[70px] rounded-[14px] flex flex-col items-center justify-center shrink-0">
                <div className="num text-[26px] lg:text-[28px] font-extrabold text-[#0a65d9] leading-none">5+</div>
                <div className="exp text-xs lg:text-[13px] font-semibold text-[#0a65d9] mt-0.5 leading-none">Exp</div>
              </div>
              <div className="doc-info min-w-0 flex-1 overflow-hidden">
                <div className="name text-[18.5px] lg:text-[19px] font-bold text-[#222] m-0 leading-[1.2] truncate">Dr. Aravind Ravichandran</div>
                <div className="qual text-[14.5px] lg:text-[15px] font-medium text-[#666] mt-1 leading-none truncate">M.S. Orthopaedics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
