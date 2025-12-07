"use client"

import { useState } from "react"
import Image from "next/image"

export default function TreatmentsSection() {
  const [activeTreatment, setActiveTreatment] = useState(0)

  const treatments = [
    "Joint Pain Treatment",
    "Back Pain Treatment",
    "Fracture Treatment",
    "Arthritis Management",
    "Shoulder & Neck Pain",
    "Sports Injury & Muscle Sprain",
  ]

  const treatmentCards = [
    {
      title: "Joint Pain Treatment",
      image: "/treatments/JointPainTreatment.png",
    },
    {
      title: "Back Pain Treatment",
      image: "/treatments/BackPainTreatment.png",
    },
    {
      title: "Fracture Treatment",
      image: "/treatments/FractureTreatment.png",
    },
  ]

  const recoverySteps = [
    "Consultation & Pain Analysis",
    "Clinical Tests / X-Ray (if needed)",
    "Personalized Treatment Plan",
    "Exercises & Follow Up for Long Term Relief",
  ]

  return (
    <section id="treatments" className="section reveal py-16 md:py-20">
      <div className="container max-w-[1200px] mx-auto px-8">
        <div className="treatments-grid grid grid-cols-1 md:grid-cols-[360px_1fr] gap-7 items-start">
          <div className="treatments-left">
            <h3 className="section-subtitle text-xl mb-3 font-semibold text-[#12345b]">Orthopedic Services We Provide</h3>
            <ul className="treatment-list list-none p-0 m-0 mb-3 rounded-xl overflow-hidden">
              {treatments.map((treatment, idx) => (
                <li
                  key={idx}
                  className={`px-3.5 py-3 border-l-4 border-transparent border-b border-[rgba(18,52,91,0.04)] bg-white cursor-pointer transition-all ${
                    activeTreatment === idx
                      ? 'border-l-[#0f5fcc] bg-gradient-to-b from-white to-[#f6fbff] font-semibold text-[#0f5fcc]'
                      : 'hover:border-l-[#0f5fcc] hover:bg-gradient-to-b hover:from-white hover:to-[#f6fbff]'
                  }`}
                  onClick={() => setActiveTreatment(idx)}
                >
                  {treatment}
                </li>
              ))}
            </ul>
          </div>

          <div className="treatments-right">
            <div className="cards-row flex gap-4 flex-wrap">
              {treatmentCards.map((card, idx) => (
                <article 
                  key={idx} 
                  className="service-card reveal bg-white rounded-xl overflow-hidden w-[180px] shadow-[0_10px_30px_rgba(28,118,228,0.08)] p-2.5 text-center transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(12,60,120,0.08)]"
                  data-reveal-delay={(idx + 1) * 100}
                >
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    width={180} 
                    height={100} 
                    className="w-full h-[100px] object-cover rounded-lg mb-2 bg-[#f0f0f0]"
                    loading="lazy"
                  />
                  <h4 className="text-[15px] text-[#0f5fcc] font-semibold m-0">{card.title}</h4>
                </article>
              ))}
            </div>

            <div className="recovery-box reveal bg-gradient-to-b from-[#f6fbff] to-white rounded-xl p-[18px] mt-4 shadow-[0_6px_18px_rgba(12,60,120,0.03)]" data-reveal-delay="350">
              <h4 className="text-lg font-bold text-[#12345b] mb-2">4-Step Recovery Approach</h4>
              <ol className="flow list-decimal pl-[22px] m-2 mt-0 space-y-1">
                {recoverySteps.map((step, idx) => (
                  <li key={idx} className="text-[15px] text-[#444]">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
