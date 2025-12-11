"use client"

import Image from "next/image"

export default function WhyChooseSection() {
  const benefits = [
    "Specialist doctor",
    "Affordable consultation & treatment plan",
    "Complete guidance until full recovery",
    "Friendly treatment approach for senior citizens",
    "Long-term pain management plans available",
  ]

  return (
    <section id="why-us" className="section why reveal py-12 sm:py-16 md:py-20 scroll-mt-[70px] px-5 sm:px-6 md:px-[5%] bg-[#FDFEFF]">
      <div className="container max-w-[1280px] mx-auto">
        <div className="why-grid grid grid-cols-1 md:grid-cols-[1fr_420px] gap-10 sm:gap-12 md:gap-7 items-start md:items-center">
          <div className="why-left reveal order-2 md:order-1 mt-6 sm:mt-8 md:mt-0 w-full" data-reveal-delay="150">
            <Image 
              src="/images/gallery-5.jpg" 
              alt="Treatment room" 
              width={400} 
              height={300} 
              className="w-full rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(28,118,228,0.08)]"
              loading="lazy"
            />
          </div>
          <div className="why-right order-1 md:order-2 w-full">
            <p className="sub-title text-xs sm:text-sm tracking-[1px] text-[#0a65d9] mb-3 sm:mb-4 font-semibold uppercase">WHY CHOOSE AAA ORTHO CLINIC</p>
            <h3 className="section-title text-[32px] sm:text-[36px] md:text-4xl font-bold text-[#0a65d9] mb-8 sm:mb-10 leading-[1.15] sm:leading-[1.2]">
              Trusted by Families Across Pattukkottai
            </h3>
            <ul className="bullets list-disc my-5 sm:my-5 pl-5 sm:pl-6 text-[#5f7f9f] space-y-3.5 sm:space-y-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="text-base sm:text-[15px] leading-relaxed">{benefit}</li>
              ))}
            </ul>
            <div className="doctor-box reveal bg-[#FDFEFF] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-6 shadow-[0_10px_30px_rgba(28,118,228,0.08)] mt-8 sm:mt-10 border border-[rgba(18,52,91,0.06)]" data-reveal-delay="200">
              <h4 className="text-lg sm:text-lg font-bold text-[#12345b] mb-3 sm:mb-3 leading-tight">MEET DR. ARAVIND RAVICHANDRAN (M.S. ORTHOPAEDICS)</h4>
              <p className="small muted text-sm sm:text-[13px] text-[#5f7f9f] m-0 leading-relaxed">
                Experienced orthopaedic surgeon with extensive clinical practice in treating various orthopedic conditions including bone fractures, joint pain, spine issues, and sports injuries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
