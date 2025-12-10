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
    <section id="why-us" className="section why reveal py-12 sm:py-16 md:py-20 scroll-mt-[70px] px-4 sm:px-5 md:px-[5%] bg-[#FDFEFF]">
      <div className="container max-w-[1280px] mx-auto">
        <div className="why-grid grid grid-cols-1 md:grid-cols-[1fr_420px] gap-6 sm:gap-7 items-center">
          <div className="why-left reveal order-2 md:order-1" data-reveal-delay="150">
            <Image 
              src="/images/gallery-5.jpg" 
              alt="Treatment room" 
              width={400} 
              height={300} 
              className="w-full rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(28,118,228,0.08)]"
              loading="lazy"
            />
          </div>
          <div className="why-right order-1 md:order-2">
            <p className="sub-title text-xs sm:text-sm tracking-[1px] text-[#0a65d9] mb-2 sm:mb-2.5 font-semibold uppercase">WHY CHOOSE AAA ORTHO CLINIC</p>
            <h3 className="section-title text-[28px] sm:text-[32px] md:text-4xl font-bold text-[#0a65d9] mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.2]">
              Trusted by Families Across Pattukkottai
            </h3>
            <ul className="bullets list-disc my-3 sm:my-3.5 pl-4 sm:pl-5 text-[#5f7f9f] space-y-2 sm:space-y-1.5">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="text-sm sm:text-[15px] leading-relaxed">{benefit}</li>
              ))}
            </ul>
            <div className="doctor-box reveal bg-[#FDFEFF] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_10px_30px_rgba(28,118,228,0.08)] mt-4 sm:mt-6 border border-[rgba(18,52,91,0.06)]" data-reveal-delay="200">
              <h4 className="text-base sm:text-lg font-bold text-[#12345b] mb-2 sm:mb-3 leading-tight">MEET DR. ARAVIND RAVICHANDRAN (M.S. ORTHOPAEDICS)</h4>
              <p className="small muted text-xs sm:text-[13px] text-[#5f7f9f] m-0 leading-relaxed">
                Experienced orthopaedic surgeon with extensive clinical practice in treating various orthopedic conditions including bone fractures, joint pain, spine issues, and sports injuries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
