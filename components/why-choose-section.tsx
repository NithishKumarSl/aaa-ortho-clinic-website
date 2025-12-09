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
    <section id="why-us" className="section why reveal py-16 md:py-20 scroll-mt-[70px] px-5 md:px-[5%]">
      <div className="container max-w-[1280px] mx-auto">
        <div className="why-grid grid grid-cols-1 md:grid-cols-[1fr_420px] gap-7 items-center">
          <div className="why-left reveal" data-reveal-delay="150">
            <Image 
              src="/images/gallery-5.jpg" 
              alt="Treatment room" 
              width={400} 
              height={300} 
              className="w-full rounded-xl shadow-[0_10px_30px_rgba(28,118,228,0.08)]"
              loading="lazy"
            />
          </div>
          <div className="why-right">
            <p className="sub-title text-sm tracking-[1px] text-[#0f5fcc] mb-2.5 font-medium">WHY CHOOSE AAA ORTHO CLINIC</p>
            <h3 className="section-title text-[36px] md:text-4xl font-bold text-[#0f5fcc] mb-6 leading-[1.2]">
              Trusted by Families Across Pattukkottai
            </h3>
            <ul className="bullets list-disc my-3.5 pl-5 text-[#5f7f9f] space-y-1">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="text-[15px]">{benefit}</li>
              ))}
            </ul>
            <div className="doctor-box reveal bg-white rounded-xl p-3.5 shadow-[0_10px_30px_rgba(28,118,228,0.08)] mt-2.5" data-reveal-delay="200">
              <h4 className="text-lg font-bold text-[#12345b] mb-2">MEET DR. ARAVIND RAVICHANDRAN (M.S. ORTHOPAEDICS)</h4>
              <p className="small muted text-[13px] text-[#5f7f9f] m-0 leading-[1.5]">
                Experienced orthopaedic surgeon with extensive clinical practice in treating various orthopedic conditions including bone fractures, joint pain, spine issues, and sports injuries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
