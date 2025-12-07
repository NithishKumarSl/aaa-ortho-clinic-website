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
    {
      title: "Arthritis Management",
      image: "/treatments/ArthritisManagement.png",
    },
    {
      title: "Shoulder & Neck Pain",
      image: "/treatments/Shoulder&NeckPain.png",
    },
    {
      title: "Sports Injury & Muscle Sprain",
      image: "/treatments/SportsInjury&MuscleSprain.png",
    },
  ]

  const selectedCard = treatmentCards.find(card => card.title === treatments[activeTreatment])
  
  const getDisplayCards = () => {
    if (selectedCard) {
      const otherCards = treatmentCards.filter(card => card.title !== selectedCard.title)
      return [selectedCard, ...otherCards.slice(0, 2)]
    }
    return treatmentCards.slice(0, 3)
  }

  const displayCards = getDisplayCards()

  return (
    <section id="treatments" className="section reveal bg-[#FDFEFF] w-full py-[50px] md:py-[40px] scroll-mt-[70px] px-5 md:px-[5%]">
      <div className="container max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-semibold tracking-[1.2px] text-[#6b7c93] uppercase mb-2">TREATMENTS</p>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#0a65d9] leading-[1.2] mb-6 md:mb-8 mt-0">
            Orthopedic Services We Provide
          </h2>

          {/* Tab Buttons */}
          <div className="flex flex-row gap-4 md:gap-6 items-center mb-6 md:mb-8 w-fit">
            <div className="info-item flex items-center gap-2.5 md:gap-3.5">
              <img 
                src="/icon location-light.svg" 
                alt="Treatment icon" 
                className="w-6 h-6 shrink-0"
              />
              <div>
                <div className="label text-[13px] font-normal leading-[1.3] text-[#0a65d9]">Treatment</div>
              </div>
            </div>
            <div className="divider w-px h-8 md:h-10 bg-[#e0e8f2] shrink-0"></div>
            <div className="info-item flex items-center gap-2.5 md:gap-3.5">
              <img 
                src="/mdi_clock-outline.svg" 
                alt="Process icon" 
                className="w-6 h-6 shrink-0"
              />
              <div>
                <div className="label text-[13px] font-normal leading-[1.3] text-[#666]">Process</div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Tab Content */}
        <div className="treatments-grid grid grid-cols-1 md:grid-cols-[360px_1fr] gap-7 items-start">
            {/* Left Side - Treatment List */}
            <div className="treatments-left">
              <ul className="treatment-list list-none p-0 m-0 mb-3 rounded-xl overflow-hidden bg-white shadow-[0_4px_12px_rgba(18,52,91,0.06)]">
                {treatments.map((treatment, idx) => (
                  <li
                    key={idx}
                    className={`px-4 py-3.5 border-l-4 border-b border-[rgba(18,52,91,0.04)] bg-white cursor-pointer transition-all ${
                      activeTreatment === idx
                        ? 'border-l-[#0a65d9] bg-[#f6fbff] font-bold text-[#12345b]'
                        : 'border-l-transparent text-[#5f7f9f] hover:border-l-[#0a65d9] hover:bg-[#f6fbff] hover:text-[#0a65d9]'
                    }`}
                    onClick={() => setActiveTreatment(idx)}
                  >
                    {treatment}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Treatment Cards */}
            <div className="treatments-right">
              <div className="cards-row flex gap-5 flex-wrap">
                {displayCards.map((card, idx) => {
                  const isSelected = card.title === treatments[activeTreatment]
                  return (
                    <article 
                      key={idx} 
                      className={`service-card reveal bg-white rounded-xl overflow-hidden w-full md:w-[280px] shadow-[0_10px_30px_rgba(28,118,228,0.08)] border border-[#cfe0ff] text-center transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(12,60,120,0.08)] ${
                        isSelected ? 'ring-2 ring-[#0a65d9] ring-offset-1' : ''
                      }`}
                      data-reveal-delay={(idx + 1) * 100}
                    >
                      <div className="relative w-full h-[200px] md:h-[220px] bg-[#f0f0f0]">
                        <Image 
                          src={card.image} 
                          alt={card.title} 
                          fill
                          className="object-cover rounded-t-xl"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-[15px] text-[#0a65d9] font-semibold m-0">{card.title}</h4>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}